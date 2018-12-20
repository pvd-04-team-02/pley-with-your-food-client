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

<h3>License</h3>
This project is licensed under GA licensing - see the <a href=https://github.com/pvd-04-team-02/pley-with-your-food-client/blob/master/LICENSE> LICENSE.md</a> for more details

<h3>Acknowledgements</h3>
-GA Staff (especially Elizabeth B for explaining merge conflicts to us on at least 5 different occasions and Arjun Ray for fixing my Bash)
-Yelp.com
-opentable.com
