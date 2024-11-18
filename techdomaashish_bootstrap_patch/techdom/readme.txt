Loan Management System (JS Stack & MySQL)
Created By: Aashish Khandelwal
Contact No.: 9691536456, 9406600788
Email: ashish.khandelwal201@gmail.com
Applied for: JS Stack Developer with 2+ years of experience

------------------------------------------------------------------------------------------------------------------
Modern and best practices which I have followed in this assignment -
-> Class-based architecture
-> Asynchronous programming with async/await
-> JWT authentication
-> Singleton design pattern
-> Use of bcrypt for password hashing
-> MVC architecture
-> Centralized import handling in utils > imports.js
-> Error handling with try/catch
-> Proper naming conventions
-> Loading spinner during payment installment process

------------------------------------------------------------------------------------------------------------------

1. Signup
A new user must first sign up by calling the POST /signup API.
The user's password is hashed using bcrypt before being stored in the database.

2. Login
The POST /login API checks whether the username is valid.
After confirming the username, it compares the password with the hashed password stored in the database.
If the password is correct, the system generates JWT Access and Refresh Tokens and returns them to the user.
Users have two roles: admin and user.

3. Admin Role
If the logged-in user is an admin, they are redirected to the /verify-loan endpoint.
In /verify-loan, the admin can see a list of loans requested by users.
The admin can approve loans, and upon approval, the requested amount is split into 3 installments in the repayment table.

4. User Role (Customer)
A user can request a loan and view their own loans and their status (pending, approved, or paid).
Once a loan is approved by the admin, the user can make payments on the loan installments.
The Installments are visible in the user's loan section once the loan is approved.

5. Installment Repayments
Each loan is divided into 3 equal installments, and the user can view and make payments on the installments.
When the user clicks on "Pay," a processing loader will appear, and upon success, the payment will be marked as paid.

6. Post Script
Users can only view their own loan and payment history.
Admins have the ability to view all users' loan history and verify them.

------------------------------------------------------------------------------------------------------------------

Controllers in the Application
There are four primary controllers:
User Controller: Manages the signup and login operations for users.
Admin Controller: Handles loan approval, pending loan verification, etc., for the admin.
Loan Controller: Manages loan requests, loan approval, and loan status.
Repayments Controller: Handles the repayment of loan installments by the users.

------------------------------------------------------------------------------------------------------------------
MYSQL DB Table structure : -

1. User -
id (primary key): Unique identifier for each user.
name : name of the registered user
username : username through which user can login into application
password : stored in hash form
role : can be of 2 types - user and admin
is_deleted : Implement soft delete check in the DB

2. Loan - 
id (primary key): Unique identifier for each loan.
user_id (foreign key): ID of the customer who created the loan.
amount_required: The total loan amount requested.
status: The loan status (PENDING, APPROVED, PAID).
created_at: Date when the loan was created.
is_deleted : Implement soft delete check in the DB

3. Repayment -
id (primary key): Unique identifier for each repayment.
loan_id (foreign key): The ID of the loan that this repayment is associated with.
repayment_date: The scheduled date for the repayment.
amount_due: The amount to be paid for the scheduled repayment.
status: The status of the repayment (PENDING, PAID).
is_deleted : Implement soft delete check in the DB

Code Scalability & Modularity
No Hardcoding: There is no hardcoded logic in the application. All database operations, business logic, and API routes are dynamically handled.
Scalable Design: The use of Singleton Design Pattern for authentication ensures that resources are shared efficiently across requests.
Modular Code: The application is divided into distinct modules (controllers, services, and routes) for easy maintenance and scalability.