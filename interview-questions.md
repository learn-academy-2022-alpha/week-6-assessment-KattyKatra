# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: A migration along the lines of AddForeignKeyToStudent can be used. I believe the foreign key would be student_id:integer in this case and would be tied to the Student model.

  Researched answer: Using a migration of AddForeignKey to distinguish the update to the database is a solid path to use in this case. The foreign key would be added to the Student model as student_id and would help with the referencing of its presence in the Cohort table.


2. Which RESTful routes must always be passed params? Why?

  Your answer: Show, Edit, Create, and Destroy all need params. Show and Destroy need a param to distinguish which instance is pulled. Edit and Create need params to successfully add/modify the instances

  Researched answer:



3. Name three rails generator commands. What is created by each?

  Your answer: rails generate model <name>. Adds a new model to the application
               rails generate controller <name>. Adds a new controller to the current application
               rails generate migration. Used to update a database after adding a new model or controller
  Researched answer:
                      rails generate model <name>. Adds a new model/table to the current application
                     rails generate controller <name>. Adds a new controller to the current application
                     rails generate migration. Used to update a database after adding a new model or controller
                     An additional generate command is rails generate scaffold which adds all the above plus adds views and a test suite allowing rapid deployment of an app.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students   

The method would be index and would show all student data   

action: "POST"   location: /students      

The method would be create. A new student would be added to the database.

action: "GET"    location: /students/new

The method would be New. In this case it would return a form to add a student to the database

action: "GET"    location: /students/2  

The method called would be Show. The student with the id of 2 would be displayed to the user.

action: "GET"    location: /students/2/edit   

The method called would be edit. In this case a form to edit student #2 would be called.

action: "PATCH"  location: /students/2   

The method called would be update. The changes made by the edit form for student #2 would be added to the database.   

action: "DELETE" location: /students/2    

The final method would be destroy. The instance of student #2 would be deleted from the database.  



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I should be able to see a main page with blog posts listed out.
2.As a user, I should be able to click the title of a blog post and be shown it.
3 As a user, I should be able to see an individual page pertaining to the post I clicked
4. As a user, I should be able to return to the main page from a post.
5. As a user, I should be able to click a button to submit my own post.
6. As a user, I should be able to see a form allowing me to submit my own post.
7. As a user, I should be able to click submit on the form and be returned to the main page with my post being added to the list.
8. As a user, I should be able to click on my post and be able to edit it.
9. As a user, I should be able to see my edited post instead of my old one displayed.
10. As a user, I should be able to delete my posts if wanted to.
