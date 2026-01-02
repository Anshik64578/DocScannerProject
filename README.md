# Document Scanner with Auto-Cropping and PDF Export

## Description
A React Native document scanner application that captures documents using the device camera, allows cropping, exports scanned documents as PDF, and uploads them to a Node.js backend where document metadata is stored in MongoDB.

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
The current implementation supports manual cropping using camera crop functionality.  
Auto edge detection and perspective correction can be implemented using OpenCV or similar libraries as part of future enhancements.

## APK Generation
APK can be generated using Android Studio or CI/CD pipelines.  
For this assessment, application functionality and architecture are demonstrated through the codebase.

## Future Enhancements
- Automatic edge detection  
- Perspective correction  
- Image filters (grayscale, contrast)  
- Authentication & cloud storage  
