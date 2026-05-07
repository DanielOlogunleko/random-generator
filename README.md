# **Assignment: Random Generator**

Build a random generator webpage using Express.js and Handlebars, serving one random result from a local JSON file on each page load.

Your random generator page can be of anything: 

- A random motivational quote
- A random number between 1-100
- A magic 8-ball that returns a random answer
- A fortune cookie that returns a random fortune - https://random-generator-ejd7.onrender.com


**Requirements**

Using the initial code provided:

- In your `views/index.hbs` create a “Random Generator” webpage
    - (Optional) Add a CSS file in `stylesheets/` and attach it to `layout.hbs`
    - (Optional) Add any additional interactions in `javascripts/script.js`
- In `data/data.json` , add a list of items that will be displayed on your page
- In your `routes/index.js` , update the `GET /` function to randomly select an item from data.json

**Submission**

1. Fork this repository (before you start coding!)
2. Complete the requirements
3. Push your updates to your forked repository
4. Go to [Render](https://render.com/) and create an account. If you create your Render account with your Github login, then all your repos will be listed to quickly create a project
5. Add a new Web Service linked to your repo
6. Create a Pull request and include a link to your live Render link the description
7. Share your server in class next week!