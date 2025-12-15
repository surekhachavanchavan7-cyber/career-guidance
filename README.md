# Career Guidance Web Application

## Project Description

The **Career Guidance Web Application** helps students explore engineering colleges and their details such as fees, placements, eligibility, hostel facilities, scholarships, and courses.  
The application supports **role-based access** where **Admins** can manage college information and **Students** can view details.

The project is developed using **HTML, CSS, JavaScript**, and **Firebase** and is **deployed live using GitHub Pages**.

---

## Live Demo

🔗 **Live Project URL:**  
https://surekhachavanchavan7-cyber.github.io/career-guidance/index.html

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Firebase Authentication
- Firebase Firestore
- GitHub Pages (Hosting)

---

## Folder Structure

career-guidance/
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

## Login Credentials (Demo)

### Admin Login

Email: admin@gmail.com

Password: admin123

### Student Login

Email: student@gmail.com

Password: student123

_(Demo credentials provided for evaluation purposes.)_

---

## Admin Features

- Secure login using Firebase Authentication
- Add new college details
- View all colleges
- Edit existing college information
- Update data in Firebase Firestore
- Logout functionality
- Role-based access control

---

## Student Features

- Secure login using Firebase Authentication
- View list of colleges
- View detailed college information
- Read-only access (no edit permissions)

---

## Add New College (Admin Panel)

Admin can add the following details:

- College Name
- Fees
- Placement (%)
- Hostel Availability
- Eligibility
- Scholarship
- Location
- Description
- Courses (comma-separated)
- Image file name

---

## Image Handling (Important)

- Only **7 images** are used in the project
- Images are stored in:
- assets/images/

- While adding a new college:
  - Admin must enter an **existing image filename**
  - Example: `bms.jpg`
  - Images can be reused for multiple colleges
  - Image upload feature is **not implemented intentionally**

---

## Edit College Feature

- Available only for Admin users
- Edit button opens the Edit College page
- Existing data is auto-filled
- Updated details are saved to Firebase Firestore

---

## How to Run the Project Locally

1. Open the project folder in VS Code
2. Use **Live Server** or open `index.html` in browser
3. Login using Admin or Student credentials

---

## Notes for Evaluator

- Firebase Authentication is implemented
- Firebase Firestore is used as the database
- CRUD operations are fully functional
- Images are reused intentionally
- Role-based access control is implemented
- Project is successfully deployed on GitHub Pages

---

## Conclusion

The Career Guidance Web Application demonstrates frontend development skills, Firebase authentication, Firestore database integration, and live deployment using GitHub Pages.
