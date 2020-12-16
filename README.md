# Milestone Project 2 - The Asylum
This website is for submission as my second milestone project. 
The goal of this site is to promote the artist Emilie Autumn and associated fandom by doing the folloing:
* Linking fans and potential fans to music and social platforms.
* Providing information about the artist for fans and potential fans.
* Boosting merchandise sales.
* Promoting book sales.
* Providing oracle card readings using the 'Asylum Oracle'.

## UX

### Design
Website design was initially planned using the following wireframes which I created:
 
 #### Desktop
 ![Desktop Home](assets/wireframes/desktop-wireframes-home.jpg)
 ![Desktop About](assets/wireframes/desktop-wireframes-about.jpg)
 ![Desktop Music](assets/wireframes/desktop-wireframes-music.jpg)
 ![Desktop Events](assets/wireframes/desktop-wireframes-events.jpg)
 ![Desktop Merch](assets/wireframes/desktop-wireframes-merch.jpg)

#### Tablet
 ![Tablet Home](assets/wireframes/tablet-wireframes-home.jpg)
 ![Tablet About](assets/wireframes/tablet-wireframes-about.jpg)
 ![Tablet Music](assets/wireframes/tablet-wireframes-music.jpg)
 ![Tablet Events](assets/wireframes/tablet-wireframes-events.jpg)
 ![Tablet Merch](assets/wireframes/tablet-wireframes-merch.jpg)

 #### Mobile
 ![Mobile Home](assets/wireframes/mobile-wireframes-home.jpg)
 ![Mobile About](assets/wireframes/mobile-wireframes-about.jpg)
 ![Mobile Music](assets/wireframes/mobile-wireframes-music.jpg)
 ![Mobile Events](assets/wireframes/mobile-wireframes-events.jpg)
 ![Mobile Merch](assets/wireframes/mobile-wireframes-merch.jpg)

Wireframes available as pdf here:

* [Desktop](assets/wireframes/desktop-wireframes.pdf)
* [Tablet](assets/wireframes/tablet-wireframes.pdf)
* [Mobile](assets/wireframes/mobile-wireframes.pdf)

### User Stories


## Features

### Index
The index page features a gallery of artist photos displayed in a carousel element and links to external music platforms, and a navigation bar which adapt display based on the screensize of the user primarily throught the use of Bootstrap.
The footer contains social media links which will open in a new tab.

### About
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
This page features information about the artist.

### Music
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
This pages layout is achieved utilising rows and columns and embedded videos. This page also contains an emailjs element to contact the artist about live events.

### Book
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
It includes images of the book, a short description and links to buy.

### Oracle
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
This page will give a short introduction into what the Asylum Oracle is and will link to where a deck can be purchased on the shop page. 
Below this there are four buttons labeled buttons for the user to attain their own reading based on four different catagories:

#### Daily
The user will be presented with the card layout with the cards laying face down. 
The cards will be selected by a javascript random number generator and will flip to face up and display of descriptive text using jquery upon users click. The card meaning will be entered into a string specific to this page generating a message specific to the users name, option picked, and card drawn. 
This page will only be accessable through the selection page buttons but will still use the same responsive navigation and footer of the index page promoting familiarity of use.

#### Weekly
The user will be presented with the card layout with the cards laying face down. 
The cards will be selected by a javascript random number generator and will flip to face up and display of descriptive text using jquery upon users click. The card meaning will be entered into a string specific to this page generating a message specific to the users name, option picked, and card drawn. 
This page will only be accessable through the selection page buttons but will still use the same responsive navigation and footer of the index page promoting familiarity of use.

#### Love
The user will be presented with the card layout with the cards laying face down. 
The cards will be selected by a javascript random number generator and will flip to face up and display of descriptive text using jquery upon users click. The card meaning will be entered into a string specific to this page generating a message specific to the users name, option picked, and card drawn. 
This page will only be accessable through the selection page buttons but will still use the same responsive navigation and footer of the index page promoting familiarity of use.

#### Career
The user will be presented with the card layout with the cards laying face down. 
The cards will be selected by a javascript random number generator and will flip to face up and display of descriptive text using jquery upon users click. The card meaning will be entered into a string specific to this page generating a message specific to the users name, option picked, and card drawn. 
This page will only be accessable through the selection page buttons but will still use the same responsive navigation and footer of the index page promoting familiarity of use.

### Shop
The about page features the same responsive navigation and footer of the index page promoting familiarity of use.
This page utilises a free/open source ecommerce api.

## Tecnologies Used
* All wireframes were created using the [balsamiq](https://balsamiq.com/) wireframes software.
* [Bootstrap](https://getbootstrap.com/) was utilised along with user created css stylesheets in the design and function of these pages.
* Javascript elements taken from the [Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/javascript/) website.
* iframe used to embed with the help of [W3Schools](https://www.w3schools.com/html/html_youtube.asp).
* [cdnjs](https://cdnjs.com/) used to insure proper links used.
* [EmailJS](https://www.emailjs.com/) used for passing information sumbitted via form in music.html to specified email address. 

## Testing

### Validating

* style.css validated by [Jigsaw-MarkUpValidationService](https://jigsaw.w3.org/css-validator/)
* index.html validated by [MarkUpValidationService](https://validator.w3.org/)
* about.html validated by [MarkUpValidationService](https://validator.w3.org/)
* music.html validated by [MarkUpValidationService](https://validator.w3.org/)
* events.html validated by [MarkUpValidationService](https://validator.w3.org/)
* merch.html validated by [MarkUpValidationService](https://validator.w3.org/)



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

## Credits

### Content

About information located on the about.html page copied from official site, found [here](https://www.emilieautumn.com/story#the-story).

### Media

* All icons used for this site were sourced at [FontAwesome](https://fontawesome.com/)

#### The following images were used in creation of this site:
* Emilie-1: https://fanart.tv/detailpreview/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-533c075865628.jpg
* Emilie-2: https://fanart.tv/detailpreview/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-533c07586fca5.jpg
* Emilie-3:https://cdn.wegow.com/media/artists/emilie-autumn/emilie-autumn-1525941012.79.2560x1440.jpg
* Emilie-4:https://fanart.tv/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-533c0758a1e9f.jpg
* Emilie-5: https://fanart.tv/detailpreview/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-533c07587a54b.jpg
* Emilie-6: https://fanart.tv/fanart/music/c8bc9ad3-1df2-4c9b-9cf7-cf6fc60441dc/artistbackground/autumn-emilie-535820527684a.jpg

#### Videos
All videos are sourced from the official Emilie Autumn [Youtube](https://www.youtube.com/channel/UC3wbtmpPwifYvxWmlNwHk8g) and the Emilie Autumn [Topic](https://www.youtube.com/channel/UCMOLo6A8N-UqvIVFFqsGQuw).

* Emilie Autumn - Fight Like A Girl - https://youtu.be/dvOXuZwOEvM
* Emilie Autumn - Up She Rises - https://youtu.be/84q1_OJ-vAg
* Emilie Autumn - Dead Is The New Alive - https://youtu.be/grOXa4TiEiM


### Acknoledgements

#### This project and site could not have been completed without the support of the following people:

* Emilie Autumn whom provided inspiration for this project.
* Roman Grubic, my in class co-ordinator whom provided support on a daily basis.
* Excellence Ilesanmi, my mentor whom provided industry perspective and support via the mentor sessions.
* Code institute, for providing this opportunity to take part in this course and for the learning supports provided.
