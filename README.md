# Milestone Project 2 - The Asylum
This website is for submission as my second milestone project. 
The goal of this site is to promote the artist Emilie Autumn and associated fandom by doing the folloing:
* Linking fans and potential fans to music and social platforms.
* Providing information about the artist for fans and potential fans.
* Boosting merchandise sales.
* Promoting book sales.

## UX

### Design
Website design was initially planned using the following wireframes which I created using the Balsamiq software:
 
 #### Desktop
 ![Desktop Home](assets/wireframes/desktop-wireframe-home.jpg)
 ![Desktop About](assets/wireframes/desktop-wireframe-about.jpg)
 ![Desktop Music](assets/wireframes/desktop-wireframe-music.jpg)
 ![Desktop Book](assets/wireframes/desktop-wireframe-book.jpg)
 ![Desktop Shop](assets/wireframes/desktop-wireframe-shop.jpg)
 ![Desktop Checkout](assets/wireframes/desktop-wireframe-checkout.jpg)
 ![Desktop OrderComplete](assets/wireframes/desktop-wireframe-ordercomplete.jpg)

#### Tablet
 ![Tablet Home](assets/wireframes/tablet-wireframe-home.jpg)
 ![Tablet About](assets/wireframes/tablet-wireframe-about.jpg)
 ![Tablet Music](assets/wireframes/tablet-wireframe-music.jpg)
 ![Tablet Book](assets/wireframes/tablet-wireframe-book.jpg)
 ![Tablet Shop](assets/wireframes/tablet-wireframe-shop.jpg)
 ![Tablet Checkout](assets/wireframes/tablet-wireframe-checkout.jpg)
 ![Tablet OrderComplete](assets/wireframes/tablet-wireframe-ordercomplete.jpg)

 #### Mobile
 ![Mobile Home](assets/wireframes/mobile-wireframe-home.jpg)
 ![Mobile About](assets/wireframes/mobile-wireframe-about.jpg)
 ![Mobile Music](assets/wireframes/mobile-wireframe-music.jpg)
 ![Mobile Book](assets/wireframes/mobile-wireframe-book.jpg)
 ![Mobile Shop](assets/wireframes/mobile-wireframe-shop.jpg)
 ![Mobile Checkout](assets/wireframes/mobile-wireframe-checkout.jpg)
 ![Mobile OrderComplete](assets/wireframes/mobile-wireframe-ordercomplete.jpg)

Wireframes available as pdf here:

* [Desktop](assets/wireframes/DesktopWireframes.pdf)
* [Tablet](assets/wireframes/TabletWireframes.pdf)
* [Mobile](assets/wireframes/MobileWireframes.pdf)

### User Stories

#### User 1 - Artist 
As an artist I want to be sure that people can be diverted to our music platforms to increase playcount statistics on our music and in turn increase revenue from this avenue.

#### User 2 - Artist 
As an artist with a deep connect with my community of fans I want to be sure that new fans can find our social media easily and join our community.

#### User 3 - Artist
As my fan community and music features a lot of references to our created lore, I want new fans to easily access the book and join the fun while boosting book sales.

#### User 4 - Artist 
While sales of merchandise is very important to me I also want to thank my customers and let them know they are part of a community.

#### User 5 - Site User
I have come across this artist through youtube suggestions and their look really intrigued me and I want to know more about them.

#### User - 6 Site User
As a fan in a small country I am unable to attend any of the artists shows but I want to support the artist by purchasing branded clothinging and showing my support by what I wear.


## Features

### Index
The index page features a gallery of artist photos displayed in a carousel element and links to external music platforms, and a navigation bar which adapt display based on the screensize of the user primarily throught the use of Bootstrap.
The footer contains social media links which will open in a new tab.

### About
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
This page features information about the artist's history and current projects.

### Music
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
This pages layout is achieved utilising rows and columns and embedded videos. This page also contains an emailjs element to contact the artist about live events.

### Book
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
It includes a promotional image of the book which acts as a link to buy the book and a short description.

### Shop
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
This page utilises the shop.js file which provides functionality to user input. It contains product cards with functioning add to cart buttons. 
It also contains a cart button when clicked alternates between showing and hiding the cart. 
The cart has the capabilty of displaying items in cart, increasing and decreasing quantity, removing individual items from the cart, display running total, clear cart and advance to checkout.

### Checkout
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
This page is only accessible about page. This page features information about the artists history via the checkout button on the cart located within the shop.html page. This page features a standard input form for required details for completing the order. 
This form will not complete to action without all fields complete.

### OrderComplete
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
This page will shop as a result of completing the form on the checkout.html page. It contains a confirmation that the order has been placed and thanks the customer.

### Features left to implement
While this project features a functioning shop page and cart, the checkout and order complete are merely frontend elements. 
With progress in the course I hope to gain the knowledge to add functionality to these elements.

## Tecnologies Used
* HTML 5
* Javascript
* CSS 3
* jQuery
* All wireframes were created using the [balsamiq](https://balsamiq.com/) wireframes software.
* [Bootstrap](https://getbootstrap.com/) was utilised along with user created css stylesheets in the design and function of these pages.
* Javascript elements taken from the [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/javascript/) website.
* iframe used to embed with the help of [W3Schools](https://www.w3schools.com/html/html_youtube.asp).
* [cdnjs](https://cdnjs.com/) used to insure proper links used.
* [EmailJS](https://www.emailjs.com/) used for passing information sumbitted via form in music.html to specified email address. 
* [FreeFormatter](https://www.freeformatter.com/) used for formatting all code.

## Testing

### Website display response 
Website display response was tested for funtionality on destop, tablet and mobile resolutions using chrome developer tools. 
Issues were found with similar elements on different pages using the same tags. This issue was addressed by adding additional styling and tags to the css file and appling them to the effected elements.
Verified no conflicting html and css. Response elements achieved using Bootstrap and Media Query CSS.

### Music video data types
Upon passing the code through the validator error were thrown replating to a placement using a float value and dimensions using px and %. 
These data types were removed and replaced with the correct syntax for iframe elements.

### Checkout form fields
Checkout form was completing to order placed page without all required fields. 
This was addressed by adding the required attribute to the input fields.

### Contact form completion unclear
Upon submitting the contact form which sends an email to the artist, the user recieved no confirmation of completion.
This was addressed by add an alert window which pops up to notify the user the action has been sucessful.

### Order checkout javascript
Within the shop.js file a checkout function was added which passed the cart information to a paypal checkout which would bring the user to a paypal secure checkout.
This was set up to use a sandbox account for the business and personal accounts. 
Due to an issue with testing using sandbox accounts created with no live functionality available the checkout could not complete sign in using sandbox credentials.
The paypay element removed and replaced with a html checkout and order complete page.

### Upon deployment Shop display issue
Upon deployment it was found that the product image and product card elements withing the shop.html page were misaligned. 
This was corrected by adding the object fit value to the product images and defined height and width values for the card elements.

### Homepage element conflicting issue.
Upon deployment it was found that the carousel elements controls overlapped the footer which negated the footer button functionality and gave a novice appearance to the site.
This was addressed by adding a z-index value to the carousel and footer elements to avoid element collision. 

### User Stories Testing

#### User Story 1 - Artist
##### Objective:
As an artist I want to be sure that people can be diverted to our music platforms to increase playcount statistics on our music and in turn increase revenue from this avenue.
##### Addressed:
As the artist's main forte is their music, links to their music platform accounts were placed on the homepage to drive traffic to these platforms while still keeping the website tab open.
![example](assets/testing/user-1.jpg)

#### User Story 2 - Artist
##### Objective:
As an artist with a deep connect with my community of fans I want to be sure that new fans can find our social media easily and join our community.
##### Addressed:
As the artist's has a large community envolvement social links were placed in the footer of all pages. These links open in a new tab so that the website is still open alongside the social sites.
![example](assets/testing/user-2.jpg)

#### User Story 3 - Artist
##### Objective:
As my fan community and music features a lot of references to our created lore, I want new fans to easily access the book and join the fun while boosting book sales.
##### Addressed:
As the artist's created lore is referenced in the music, book and merchandise the book.html page contains a promotional image for the book letting users know a free preview is available. 
This image links to the amazon page where the user can avail of the preview and buy the book. This page also gives a brief description of the book which gives the user a quick insight to the basic lore used in the music, book and merchandise.
![example](assets/testing/user-3.jpg)

#### User Story 4 - Artist
##### Objective:
While sales of merchandise is very important to me I also want to thank my customers and let them know they are part of a community.
##### Addressed:
Upon completion of the checkout form that is launched via the shopping cart located within the shop.html page, the user is directed to a ordercomplete page which displays a thank you and welcome message.
![example](assets/testing/user-4.jpg)

#### User Story 5 - Site User
##### Objective:
I have come across this artist through youtube suggestions and their look really intrigued me and I want to know more about them.
##### Addressed:
This type of user will find information in the clearly labeled and easily accessible about page. This page features a deep artists history and lists their multiple projects including the most current project.
![example](assets/testing/user-5.jpg)

#### User Story 6 - Site User
##### Objective:
As a fan in a small country I am unable to attend any of the artists shows but I want to support the artist by purchasing branded clothinging and showing my support by what I wear.
##### Addressed:
This type of user will find a functioning shop page which displays all the products available. This page also contains a shopping cart which keeps a running total of the combined price. 
The items within the cart can be increased or decreased in quantity or totally removed from the cart. In the footer of the cart alongside the cart total are two functioning buttons to either clear the cart or to progress to checkout.
![example](assets/testing/user-6-a.jpg)
![example](assets/testing/user-6-b.jpg)



### Validating

* style.css validated by [Jigsaw-MarkUpValidationService](https://jigsaw.w3.org/css-validator/)
* index.html validated by [MarkUpValidationService](https://validator.w3.org/)
* about.html validated by [MarkUpValidationService](https://validator.w3.org/)
* music.html validated by [MarkUpValidationService](https://validator.w3.org/)
* book.html validated by [MarkUpValidationService](https://validator.w3.org/)
* shop.html validated by [MarkUpValidationService](https://validator.w3.org/)
* checkout.html validated by [MarkUpValidationService](https://validator.w3.org/)
* ordercomplete.html validated by [MarkUpValidationService](https://validator.w3.org/)
* email.js validated by [JSHint](https://jshint.com/)
* shop.js validated by [JSHint](https://jshint.com/)

## Deployment

Deployment process adapted from official [Github](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/creating-a-github-pages-site) documentation.

The following steps were taken to deploy this site:

1. Created a repository via my Github profile by selecting the 'New Repository' option from the dropdown menu in the upper-right corner of the page.
2. From the owner dropdown menu selector, I chose my username and gave the repository the name 'TheAsylum'.
3. Visibility was set to public as this is a requirement to deploy this page via Github Pages.
4. I selected Initialize this repository with a README so that it would be possible to immediately clone the repository to my pc.
5. I then selected create repository.
6. Using the [Gitpod](https://www.gitpod.io/) development environment I created the required css and html pages. I also uploaded the required media within this environment.
7. Upon completion of these files I opened my github profile and selected the repositories tab.
8. Within the repositories tab I selected 'TheAsylum' repository. 
9. I accessed the settings using the settings tab on the navigation bar of this repository.
10. Scroll down to the Github Pages section of the settings.
11. Within the Github Pages section, under the source heading, I selected the master branch and the root folder.
12. Saved the selected options.

## Cloning
Cloning process adapted from official [Github](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) documentation.

### To clone this projects repository using the command line follow these steps:

1. On GitHub, navigate to the [main page of the repository](https://github.com/Ash066/TheAsylum).
2. Above the list of files, click the "Code" dropdown menu.
3. 
* To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon.
* To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click Use SSH, then click the clipboard icon.
* To clone a repository using GitHub CLI, click Use GitHub CLI, then click the clipboard icon.
4. Open Git Bash.
5. Type git clone, and then paste the URL you copied earlier (example : $ git clone https://github.com/Ash066/TheAsylum)
6. Press Enter to create your local clone.

### To clone this projects repository to GitHub Desktop follow these steps:

1. On GitHub, navigate to the [main page of the repository](https://github.com/Ash066/TheAsylum).
2. Above the list of files, click the "Code" dropdown menu.
3. Click Open with GitHub Desktop button to clone and open the repository with GitHub Desktop.
4. Follow the prompts in GitHub Desktop to complete the clone.


## Credits

### Content

* About information located on the about.html page copied from official site, found [here](https://www.emilieautumn.com/story#the-story).
* The story information located on the book.html page was copied from the official site, found [here](https://www.emilieautumn.com/books#the-book).
* Checkout form found in checkout.html adapted from [w3schools](https://www.w3schools.com/howto/howto_css_checkout_form.asp).

### Media

* All icons used for this site were sourced at [FontAwesome](https://fontawesome.com/)
* Template for product cards on shop.html taken from [W3Schools](https://www.w3schools.com/howto/howto_css_product_card.asp)

#### The following images were used in creation of this site:
* Emilie-1: https://fanart.tv/detailpreview/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-533c075865628.jpg
* Emilie-2: https://fanart.tv/detailpreview/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-533c07586fca5.jpg
* Emilie-3:https://cdn.wegow.com/media/artists/emilie-autumn/emilie-autumn-1525941012.79.2560x1440.jpg
* Emilie-4:https://fanart.tv/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-533c0758a1e9f.jpg
* Emilie-5: https://fanart.tv/detailpreview/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-533c07587a54b.jpg
* Emilie-6: https://fanart.tv/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-535820527684a.jpg
* Emilie-book-1: https://images.squarespace-cdn.com/content/v1/5929c2669de4bbbc0b73714b/1534578264235-TR2FLKOHY49C9ZTZAWKF/ke17ZwdGBToddI8pDm48kDHjBJd2_ybbH2OBFKe4JKx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UV_xSm9jvexS626EUnXNi3fn63Dn63w846fi8JVeyMKH5RMP2GKpYn13DALJiEdXnQ/Paperback-Slide.jpg?format=1500w
* shop-1:https://cdn.shopify.com/s/files/1/0093/7472/products/21_b0e7a9a2-fa0f-4181-9141-c248b3f9c7a8_500x650_crop_center.jpg?v=1604064698
* shop-2: https://cdn.shopify.com/s/files/1/0093/7472/products/COver-Stack-WBG-1300_500x650_crop_center.jpg?v=1594308391
* shop-3:https://cdn.shopify.com/s/files/1/0093/7472/products/CB-Front-1-Ghosted-1300_500x650_crop_center.jpg?v=1594308381
* shop-4:https://cdn.shopify.com/s/files/1/0093/7472/products/CB-Front-1-Ghosted-1300_fe3c78f7-e47e-4410-9df4-9158b13c0ea5_500x650_crop_center.jpg?v=1594308535
* shop-5:https://cdn.shopify.com/s/files/1/0093/7472/products/Black-Flat-1300_500x650_crop_center.jpg?v=1594308427
* shop-6:https://cdn.shopify.com/s/files/1/0093/7472/products/Inmates_-Black-Front-Unisex_500x650_crop_center.jpg?v=1594308467
* shop-7:https://cdn.shopify.com/s/files/1/0093/7472/products/1-S_1428d22f-3f02-4932-8d9d-5f6216f45d06_500x650_crop_center.jpg?v=1594311741
* shop-8:https://cdn.shopify.com/s/files/1/0093/7472/products/Grey-Rat-Mask-Front_500x650_crop_center.jpg?v=1594311800
* shop-9:https://cdn.shopify.com/s/files/1/0093/7472/products/15oz-2_1bc97065-9165-4480-a15d-7e54df82e146_500x650_crop_center.jpg?v=1594308465
* shop-10:https://cdn.shopify.com/s/files/1/0093/7472/products/1_e4c87ceb-aba8-44c1-9947-80c58fa7954d_500x650_crop_center.jpg?v=1594311747

#### Videos
All videos are sourced from the official Emilie Autumn [Youtube](https://www.youtube.com/channel/UC3wbtmpPwifYvxWmlNwHk8g) and the Emilie Autumn [Topic](https://www.youtube.com/channel/UCMOLo6A8N-UqvIVFFqsGQuw).

* Emilie Autumn - Fight Like A Girl - https://youtu.be/dvOXuZwOEvM
* Emilie Autumn - Up She Rises - https://youtu.be/84q1_OJ-vAg
* Emilie Autumn - Dead Is The New Alive - https://youtu.be/grOXa4TiEiM


### Acknoledgements

#### This project and site could not have been completed without the support of the following people:

* Emilie Autumn whom provided inspiration for this project.

