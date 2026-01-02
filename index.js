const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const Document = require('./models/Document');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/docscanner', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connected');
});

// File upload config
const upload = multer({ dest: 'uploads/' });

// Upload PDF API
app.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const doc = new Document({
      filename: req.file.originalname,
      path: req.file.path,
      createdAt: new Date(),
    });

    await doc.save();
    res.status(200).json({ message: 'PDF uploaded successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Upload failed' });
  }
});

app.get('/', (req, res) => {
  res.send('Document Scanner Backend Running');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
