Career Guidance Web Application

# Career Guidance Web Application

## Project Description

The Career Guidance Web Application helps students explore engineering colleges and their details.
Admins can manage college information using Firebase.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Firebase Authentication
- Firebase Firestore

---

## Folder Structure

public/
│
├── assets/
│ ├── css/
│ │ └── styles.css
│ └── images/
│ └── (7 college images reused)
│
├── js/
│ ├── admin.js
│ ├── auth.js
│ ├── career.js
│ ├── firebase-config.js
│ ├── logger.js
│ └── student.js
│
├── pages/
│ ├── college-details.html
│ ├── create-account.html
│ └── edit-college.html
│
├── admin.html
├── student.html
├── home.html
├── index.html
├── project-report.pdf
└── README.md

---

## Login Credentials

### Admin Login

Email: admin@gmail.com  
Password: admin123

### Student Login

Email: student@gmail.com  
Password: student123

---

## Admin Features

- Login using Firebase Authentication
- Add new college details
- View all colleges
- Edit existing college information
- Update data in Firebase Firestore
- Logout functionality

---

## Student Features

- Login and view college information
- View college details only (read-only access)

---

## Add New College (Admin Panel)

Admin needs to enter:

- College Name
- Fees
- Placement (%)
- Hostel Availability
- Eligibility
- Scholarship
- Location
- Description
- Courses (comma separated)
- Image file name

---

## Image Handling (Important)

- Only 7 images are used in this project
- Images are stored in:
  public/assets/images/

- While adding a new college:
  - Admin must enter an existing image filename
    Example: bms.jpg
  - The same image can be reused for multiple colleges
  - Image upload feature is not implemented intentionally

---

## Edit College Feature

- Available only for Admin
- Edit button opens the Edit College page
- Existing data is auto-filled
- Updated details are saved to Firebase Firestore

---

## How to Run the Project

1. Open the project folder in VS Code
2. Start Live Server
3. Open index.html
4. Login using Admin or Student credentials

---

## Notes for Evaluator

- Firebase Authentication is implemented
- Firebase Firestore is used as database
- CRUD operations are functional
- Images are reused intentionally
- Role-based access is implemented

---
