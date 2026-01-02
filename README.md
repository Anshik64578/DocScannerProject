# DocScannerProject
A React Native document scanner app that lets users scan documents using their phone camera, crop them, convert scans into PDF files, and upload them to a Node.js backend. The backend stores document metadata in MongoDB. The project follows a clean architecture and can be extended with features like auto edge detection and filters.
# Document Scanner with Auto-Cropping and PDF Export

## Description
A React Native–based document scanner app that lets users capture documents using their phone’s camera, crop them as needed, export the scans as PDF files, and upload them to a Node.js backend where the document details are securely stored in MongoDB.

## Technologies Used
- React Native (Expo)
- Camera & Image Picker
- PDF Export (expo-print)
- Node.js
- Express
- MongoDB

## Features
- Capture documents using device camera  
- Manual cropping during scan  
- Export scanned documents as PDF  
- Upload PDF files to backend server  
- Store PDF metadata in MongoDB  

## Project Structure
DocScannerProject/
├── mobile/
│ ├── App.js
│ └── package.json
├── server/
│ ├── index.js
│ ├── package.json
│ └── models/
│ └── Document.js
└── README.md

## Backend API
**POST `/upload`**  
Uploads a PDF file and stores its metadata in MongoDB.

## Auto-Cropping & Perspective Correction
At the moment, the app supports manual cropping using the camera’s built-in crop functionality. Automatic edge detection and perspective correction can be added in future versions using OpenCV or similar image-processing libraries.
## APK Generation
APK can be generated using Android Studio or CI/CD pipelines.  
For this assessment, application functionality and architecture are demonstrated through the codebase.

## Future Enhancements
- Automatic edge detection  
- Perspective correction  
- Image filters (grayscale, contrast)  
- Authentication & cloud storage  
