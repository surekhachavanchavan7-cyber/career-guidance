# Career & College Guidance Portal

A web-based application that helps students explore career options and colleges, while allowing administrators to manage college information.  
The project uses **Firebase Authentication** and **Firebase Firestore** for real-time data handling.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6 Modules)
- Firebase Authentication
- Firebase Firestore
- VS Code
- Live Server

---

## Project Folder Structure

Career-Guidance-Portal/
├── index.html (Login Page)
├── admin.html (Admin Dashboard)
├── student.html (Student Dashboard)
│
├── pages/
│ ├── create-account.html (Create Account Page)
│ └── college-details.html (College Details Page)
│
├── assets/
│ └── css/
│ └── styles.css (Common Styling)
│
├── js/
│ ├── firebase-config.js (Firebase Configuration)
│ ├── auth.js (Login & Signup Logic)
│ ├── admin.js (Admin CRUD Operations)
│ └── student.js (Student College Listing)
│
└── README.md

---

## Authentication & Roles

The project supports **role-based access** using Firebase Authentication.

### Admin

- Email must contain the word **admin**
- Redirected to Admin Dashboard

### Student

- Normal email
- Redirected to Student Dashboard

---

## Sample Login Credentials (For Evaluation)

### Admin Login

Email: admin@gmail.com  
Password: admin123

### Student Login

Email: student@gmail.com  
Password: student123

(These credentials are only for demo/testing purposes.)

---

## Admin Features

- Secure login using Firebase Authentication
- Add new college details
- View all existing colleges
- Delete college details
- All data stored and retrieved from Firebase Firestore
- Clean and structured admin dashboard UI

---

## Student Features

- Secure login using Firebase Authentication
- View list of colleges
- Search colleges by name
- View college details
- Career guidance section
- Data fetched dynamically from Firebase Firestore

---

## Firebase Usage

### Firebase Authentication

- Email & password based login and signup
- Role-based redirection (Admin / Student)

### Firebase Firestore

- Stores college details
- Supports real-time CRUD operations

---

## How to Run the Project

1. Download or clone the project folder
2. Open the folder in VS Code
3. Install the Live Server extension
4. Right-click index.html and select “Open with Live Server”
5. Login using the provided credentials

---

## Project Status

- Admin and Student dashboards implemented
- Firebase Authentication integrated
- Firebase Firestore CRUD operations implemented
- UI improved as per evaluation feedback
- Project is functional and stable

---

## Conclusion

This project demonstrates frontend development skills, Firebase integration, authentication, role-based access control, and basic UI/UX design.  
It fulfills the internship evaluation requirements for a Career & College Guidance system.
