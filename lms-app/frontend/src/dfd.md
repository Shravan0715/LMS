# Data Flow Diagram (DFD) for Learning Management System (LMS)

## **Level 0: Context Diagram**
This high-level diagram shows interactions between external users and the LMS.

### **Entities & Interactions:**
- **Users (Students, Teachers, Admins)** interact with the LMS.
- **LMS Backend (Node.js, Express, MongoDB)** handles authentication, course management, quizzes, tracking, and notifications.
- **Database (MongoDB)** stores user, course, quiz, tracking, and notification data.

#### **DFD Level 0:**
```
+-------------------+
|     Users        |
| (Students,       |
|  Teachers,       |
|  Admins)        |
+-------------------+
          |
          |   1. Request (Login, Courses, Lessons, etc.)
          v
+-------------------+
|   LMS Backend    |
| (Node.js API)    |
+-------------------+
          |
          |   2. Data Storage (Users, Courses, Lessons, etc.)
          v
+-------------------+
|    Database      |
|  (MongoDB)       |
+-------------------+
```

---

## **Level 1: Detailed DFD**
This breaks down key LMS functionalities, including authentication, course management, lessons, quizzes, forums, notifications, and tracking.

#### **DFD Level 1:**
```
+-------------------+
|     Users        |
| (Students,       |
|  Teachers,       |
|  Admins)        |
+-------------------+
       |
       | 1. Login / Register
       v
+-------------------+
|  Authentication  |
| (JWT + API)     |
+-------------------+
       |
       | 2. Validate user, create JWT
       v
+-------------------+
|  User Database   |
+-------------------+

=========================

+-------------------+
|     Users        |
+-------------------+
       |
       | 3. Request Course Data
       v
+-------------------+
|  Course API      |
| (CRUD Operations)|
+-------------------+
       |
       | 4. Fetch Course Data
       v
+-------------------+
|  Course Database |
+-------------------+

=========================

+-------------------+
|     Users        |
+-------------------+
       |
       | 5. Request Lessons / Materials
       v
+-------------------+
|  Lesson API      |
| (CRUD Operations)|
+-------------------+
       |
       | 6. Fetch Lessons
       v
+-------------------+
|  Lesson Database |
+-------------------+

=========================

+-------------------+
|     Users        |
+-------------------+
       |
       | 7. Attempt Quiz
       v
+-------------------+
|  Quiz API        |
+-------------------+
       |
       | 8. Fetch Questions, Store Answers
       v
+-------------------+
|  Quiz Database   |
+-------------------+

=========================

+-------------------+
|     Users        |
+-------------------+
       |
       | 9. Post Forum Discussion
       v
+-------------------+
|  Forum API       |
+-------------------+
       |
       | 10. Store / Retrieve Forum Posts
       v
+-------------------+
|  Forum Database  |
+-------------------+

=========================

+-------------------+
|     Users        |
+-------------------+
       |
       | 11. Notifications
       v
+-------------------+
|  Notification API|
+-------------------+
       |
       | 12. Push Notifications
       v
+-------------------+
|  Notification DB |
+-------------------+
```

---

## **Summary:**
- **Level 0 (Context Diagram)** shows how users interact with the system.
- **Level 1 (Detailed DFD)** breaks down core modules: Authentication, Course Management, Lesson Management, Quizzes, Forum, and Notifications.

This DFD provides a structured flow of data within the LMS project.

