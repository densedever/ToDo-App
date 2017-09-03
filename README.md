# ToDo-App
Simple tasklist app.

by Dylan LaCoursiere, 2017

This is a simple To-Do app with client-side 
logic implemented in jQuery.

Folder structure:

-+-index.html (main file)
 |
 +-style.css (style for main page)
 |
 +-js (contains JS code)
   |
   +-jquery-3.2.1.min.js (production jQuery for small transfer size)
   |
   +-main.js (main logic code)

The site's container div contains two parts to it: 
#submit-area, which contains the form for filling out the task and metadata.
#saved-tasks, which contains the list of tasks.
The form itself contains three submit fields and a button.

The users posts a task by filling out the respective fields.
The first field labeled "Task" contains the text making up the task.
The "Name" field gives a name to the individual tasks.
The "Description" gives a short description/summary of the task if it has a
lot of details.

When the forms are filled out and the "Post" button is submitted, the task's
metadata will be posted in a div generated in #saved-tasks, along with two
buttons:
"Edit" - edits the task text, and 
"Delete" - deletes the current task.

Note: input is sanitized to prevent XSS from the client side, but this MUST 
be done on the server, as JavaScript could be disabled in the browser and 
the sanitizer wouldn't run.

Note: neglecting to fill out the fields will result in an empty task being 
submitted.
