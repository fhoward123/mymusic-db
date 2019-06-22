# MERN Music DB App *Frontend* Server

*MyMusic-DB*
- A single-page web-app created by Flint Howard using the MERN stack to implement the MVC architecture with full CRUD functionality and deployed to Heroku.

## Technologies Used
- Javascript
- MongooseJS
- MongoDB
- ExpressJS
- ReactJS
- NodeJS
- HTML
- CSS
- Axios
- AJAX
- React-Bootstrap

Go to [MyMusic-DB](https://mymusic-db.herokuapp.com/).

## Approach
- I created an intuitive user-interface that functions equally well on a mobile device as well as on a PC.  The purpose of the app is to manage a music lover's collection of LP/CD/DVD music.

## Features
*Add Album*
- The top of the page has an "Add Album" button that pops-up a modal that includes the data input form.  The user inputs album information into the form which will then POST the data to the MongoDB when the user clicks the "Submit" button.

*Sort Option*
- The collection of music can be selectively sorted by choosing one of four sort methods ('Title', 'Artist', 'Genre', and 'Release Date') available in the popup list.

*Albums in Collection*
- This is a clickable item that will refresh the list of albums by making a GET request to the MongoDB.

*Clickable Icons*
- 'Edit' Icon: Click on to edit the selected album.
- 'Delete' Icon: Click on to remove the selected album from the DB.
- 'Up Arrow' Icon: Click on to return to top of page.
- 'Down Arrow' Icon: Click on to jump to bottom of page.

*Styling*
- React-Bootstrap's for modal functionality.  This was used because of the built-in ability to autofocus and return the the previous view upon closing of the modal.  The rest of the styling is all done in CSS.

## Future Update
- Add sort on type of media (LP/CD/DVD)
- Add search feature
- Add input of songs into DB
- Add icon to click on to display songs in modal.
- Secure login to support multiple users
