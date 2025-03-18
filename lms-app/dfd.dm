level 0

   +-------------+        +-------------------+       +----------------+
   |  External   |        |                   |       |                |
   |  Systems    |------->|      LMS          |<----->|   Students     |
   | (Payments,  |        |   (Learning       |       |  (Course Info, |
   |  Content)   |        |    Management)    |<----->|   Progress)    |
   +-------------+        |                   |       +----------------+
                          +-------------------+
                                /   \
                               /     \
                 +-----------+       +-----------+
                 | Instructors|       | Admin     |
                 +-----------+       +-----------+

level 1

                +---------------------------+
                |     User Management        |
                |  (Registration, Login,     |
                |   Role Assignment)         |
                +---------------------------+
                         |
           +-------------+-------------------+
           |                                  |
+------------------+                   +------------------+
| Course Management|                   |   Enrollment     |
| (Create, Edit,   |<------------------|  Management      |
| Access Courses)  |                   | (Enroll, Progress)|
+------------------+                   +------------------+
          |                                      |
          |                                      |
+------------------+                    +-------------------+
|Assessment        |                    |  Communication     |
|Management        |                    | (Feedback, Messages)|
|(Quizzes, Grades) |                    +-------------------+
+------------------+                               |
          |                                       |
 +-------------------+                  +----------------------+
 |    Data Stores    |<---------------->|   Data Stores        |
 | (Users, Courses,  |                  | (Assessments,        |
 |  Enrollments,     |                  |  Communication)      |
 |  Assessments)     |                  +----------------------+
 +-------------------+
