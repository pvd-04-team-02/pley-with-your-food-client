<h3>FoodSens Restaurant Rating Application</h3>

Project designed by: Sue Fakunle, Seyi Solanke, Eli Wellington, Nathan Bissell.
For project three at General Assembly, we created a single page application called "Pley With Your Food", that takes restaurants allows users to leave ratings and comments.

<h3>Installation</h3>

In order to reach full functionality in this program, we used npm packages by running the following npm packages

``` 
npm install
npm install --save toastr
```

Our additional add on that we used was toastr. Toastr allowed for us to create alerts that were minimailist and did not require any user interaction, and no pesky popups that needed to be closed when a user does an action with the user interface.

<h3>Functionality</h3>

On sign up, a user has the ability to enter their email, password, and also gives them an option to sign up as a Restaurant Owner. If they choose to do so, they will be able to add their own restaurant to the database.

<i>A restaurant owner can ONLY create restaurants, show their own restaurant reviews, edit their restaurant, and delete their restaurant. They will NOT have access to other users restaurants and ratings.</i>

A User will be able to log in, and see a list of restaurants and view the rating and the comments left by other users. Whereas, a restaurant owner (Admin) will be able to view comments and ratings that other users have left on their restaurant.

<i>
Normal users will be able to create comments, create ratings, and show their ratings. They will also be able to delete their ratings and comments or update them at any given point.
</i>

Admin users (restaurant owners) will be able to view their restaurant's ratings and comments (read access) but not able to alter, given that normal users should be protected against the abuse of power that restaurant owners might implement if they are able to delete comments that negatively reflect their restaurant.

Our front-end uses Javascript and incorporates bootstraps, toastr for the UI design, and JQuery to hide and show elements. We also used JQuery to run our show elements that show our ratings and restaurant fields. Our photo collage was created using a bootstrap carousel and the gradient was generated and created by us.

<h3>Wireframe</h3>
<a href="https://imgur.com/urovKoo"><img src="https://i.imgur.com/urovKoo.jpg" title="source: imgur.com" />Wireframe Link</a>

<a href="https://pvd-04-team-02.github.io/pley-with-your-food-client/"/> FoodSens Link to Frontend</a>
<a href="https://sleepy-river-78399.herokuapp.com"/> FoodSens Link to Backend</a>

<br><b>
  Process: Our Scrum master, Seyi, held our morning standups at approximately 9:15 AM EST. Seyi and Nathan worked primarily on our frontend, while Eli and Sue worked on the backend. Our initial backend was scaffolded using Shawn's scaffolding program. We used Trello to prioritize our tasks during operational hours. We used our standup in the morning to delegate those tasks, and to design our overall code push and daily goals of what we expected to do, with the hours that we allocated for a specific task or feature. When we began testing our UI, we hooked my windows laptop to the television located in the classroom and we ran live demo's with the pulled code from our repository. From there we would use VS code's liveshare plugin, and all link to one repository. From there, we would use my laptop to break the site or show features, and then save and demo those changes on my machine. If the changes were successful, we would then commit and push up to our repository. We worked in pairs for the first couple of days, and once we had a functionanl site with CRUD actions that needed to be tested, we worked for the last two or three days with VScode liveshare.


<h3>License</h3>
This project is licensed under GA licensing - see the <a href=https://github.com/pvd-04-team-02/pley-with-your-food-client/blob/master/LICENSE> LICENSE.md</a> for more details

<h3>Acknowledgements</h3>
-GA Staff (especially Elizabeth B for explaining merge conflicts to us on at least 5 different occasions and Arjun Ray for fixing my Bash)
-Yelp.com
-opentable.com
