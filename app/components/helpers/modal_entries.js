var projects = [
  {
    modal_id: "portfolioModal-hangman",
    title: "Geocities Hangman",
    tech: "(HTML, CSS, Bootstrap, Javascript)",
    pic_url: "img/portfolio/hangman.png",
    desc: "This is one of the first exercises from the UT Coding Bootcamp.  Using HTML, CSS, Bootstrap, and Javascript we were to make a hangman game.  I found an April Fool's Bootstrap Geocities theme so I designeed the page in honor of the dark ages of the web, where Geocities and Frontpage Express ruled the lands.",
    deploy_url: "https://warm-chamber-31184.herokuapp.com/",
    repo_url: "https://github.com/MagentaReds/Hangman-Game-Javascript"
  },
  {
    modal_id: "portfolioModal-rpg-game",
    title: "The STAR WARS HOLIDAY SPECIAL RPG Game!",
    tech: "(HTML, CSS, Bootstrap, Javascript, jQuery)",
    pic_url: "img/portfolio/rpggame.png",
    desc: "In this exercise, I made a simple RPG game based off the infamous STAR WARS HOLIDAY SPECIAL using jQuery for most of the DOM manipulation.  When you select a character from the pool, the others become your enemies.  Defeat them all to claim right to be called the STAR WARS HOLIDAY SPECIAL CHAMPION!",
    deploy_url: "https://gentle-ravine-20092.herokuapp.com/",
    repo_url: "https://github.com/MagentaReds/week-4-game-jQuery"
  },
  {
    modal_id: "portfolioModal-trivia",
    title: "The STAR WARS HOLIDAY SPECIAL Trivia Game!",
    tech: "(HTML, CSS, Bootstrap, Javascript, jQuery)",
    pic_url: "img/portfolio/triviagame.png",
    desc: "<p>With the STAR WARS HOLIDY SPECIAL still weighing heavily on my heart, I based another project off it in a desperate attempt to lessen the pain.</p> <p>Using jQuery with some fancy(ish) CSS animations, can you answer the questions about a show you have probably never seen?!</p>",
    deploy_url: "https://glacial-garden-80224.herokuapp.com/",
    repo_url: "https://github.com/MagentaReds/TriviaGame-Timers"
  },
  {
    modal_id: "portfolioModal-rps",
    title: "RPS Multiplayer Game",
    tech: "(HTML, CSS, Bootstrap, Javascript, jQuery, Firebase)",
    pic_url: "img/portfolio/rpsmultiplayer.png",
    desc: " <p>A simple rocker, paper, scissors multiplayer game using Firebase for the chat and as a means to keep the two client's aware of each other's choices.</p> <p>Using Firebase a semi-back-end device, this let me simulate some server side type logic without having access to the back-end.</p>",
    deploy_url: "https://magentareds.github.io/RPS-Multiplayer/",
    repo_url: "https://github.com/MagentaReds/RPS-Multiplayer-Firebase"
  },
  {
    modal_id: "portfolioModal-burger",
    title: "Virtual Burger Land",
    tech: "(HTML, CSS, Bootstrap, Javascript, jQuery, MySql, Sequelize, Node.js, Express.js, Handlebars)",
    pic_url:  "img/portfolio/burger.png",
    desc: "<p>This is one of the first full-stack web applications I made.  Here I am using MySql to store and retrieve data for a simple app that lets you make virtual burgers, and then virtually eat them!</p> <p>There are two versions of this app, one using a custom ORM, the other using Sequelize as the ORM.</p>",
    deploy_url:"https://pure-retreat-36934.herokuapp.com/",
    repo_url: "https://github.com/MagentaReds/week-14-burger-Express-ORM",
    repo_url2: "https://github.com/MagentaReds/week-15-sequelizedBurger-Sequelize",
  },
  {
    modal_id: "portfolioModal-scrape",
    title: "Scraping The Onion!",
    tech: "(HTML, CSS, Bootstrap, Javascript, jQuery, Node.js, Express.js, Handlebars, MonogoDB, Mongoose, Cheerio)",
    pic_url: "img/portfolio/scrapemongo.png",
    desc: "<p>With this full-stack app, we are scrapping The Onion with Cheerio to save articles to our MongoDB database using Mongoose and building the html with Handlebars templates.  Afterwards, the user can see the articles and choose to save them.  Once saved, notes can be made for an article.</p>",
    deploy_url: "https://evening-headland-19978.herokuapp.com",
    repo_url: "https://github.com/MagentaReds/week-18-scrapped-Handlebars-Cheerio"
  },
  {
    modal_id: "portfolioModal-react",
    title: "Reacting with the NY Times",
    tech: "(HTML, CSS, Bootstrap, Javascript, jQuery, Node.js, Express.js, MonogoDB, Mongoose, React)",
    pic_url: "img/portfolio/react.png",
    desc: "<p>With this project, I am using React to generate the HTML that is served to the client, and using the NY Times article search api to find and save articles to fill the HTML.</p> <p>The styling and workings of the project is based on work I did in a group near the start of the UT Coding Bootcamp, when were just learning about web API's.</p>",
    deploy_url: "https://hidden-mountain-33117.herokuapp.com/",
    repo_url: "https://github.com/MagentaReds/week-19-reactingwithnytimes-React"
  },
  {
    modal_id: "portfolioModal-moviemadness",
    title: "Movie Madness",
    tech: "(HTML, CSS, Bootstrap, Javascript, jQuery, Firebase)",
    pic_url: "img/portfolio/moviemadness.png",
    desc: "<p>This is a multiplayer trivia game for up to 5 people.  Once at least two people have joined the table, and everyone that is joined readies up, then the game begins.  Each player then takes turns getting a random movie title, and has to give hints as the other players try to guess the movie's title.</p> <p>We used TheMovieDB api to get a random movie, and the Wikipedia API for more information about the movie to help the hinter.</p> <p>The major obstacle we had when building this app was not having access to any sort of back-end server-side logic.  So trying to keep each of the player clients synced was a major hurdle.  Luckily Firebase allowed us to at least save the game state and send updates of the game state to each connected client.</p> <p>Project Teammates: Stephen Pino, Toby Boyd, Jeff Mensing</p>",
    deploy_url: "https://ut-bootcamp-project1.firebaseapp.com/",
    repo_url: "https://github.com/MagentaReds/project1-Movie-Madness"
  },
  {
    modal_id: "portfolioModal-vidiveni",
    title: "Vidi Veni",
    tech: "(HTML, CSS, Bootstrap, Javascript, jQuery, Node.js, Express.js, Handlebars, Mysql, Sequelize, Passport.js, Google Apis(Auth, Maps, Geocode, Nodemailer)",
    pic_url: "img/portfolio/vidiveni.png",
    desc: "<p>This fullstack web application allows users to make an event at a specific location with a limited number of slots.  Other users can then search for events they may like to join.  Once a user find an even they'd like to join, and joins it, the app will email everyone currently commited to attend the event that someone new has joined</p> <p>Our biggest obstacle with this app was probably feature creep.  But we felt it was better to learn how to use and integrate those new techologies so that our app would be feature complete, while we knew polishing those features could be done later.  However, time caught up to us and the project is not polished as we would like.</p> <p>But with the limited amount of time we had, we do feel proud of what we made.</p> <p>Project Teammates: Joshua Yap, Fred Camara </p>",
    deploy_url: "https://vidiveni.herokuapp.com/",
    repo_url: "https://github.com/MagentaReds/project-2-VidiVeni"
  },
  {
    modal_id: "portfolioModal-srw",
    title: "SRW Multiplayer",
    tech: "(HTML, CSS, Bootstrap, jQuery, jQuery UI, Socket.io, Ejs, Node.js, Express.js, Passport.js, Bcrypt, MongoDB, Mongoose)",
    pic_url: "img/portfolio/srw.png",
    desc: "<p>This fullstack web application is a fan-game based on Super Robot Taisen: Original Generation 2.  It is a turn based, player versus player strategy-rpg.  Once a player has created an account and choosen a team of units, they can join the game lobby and then join a room to play against other players.</p> <p>While the game idea, names, and images are based on/borrowed from a preexisting game, the game engine, interface between the engine and Socket.io, and the game client are all hand coded by our project team.</p> <p>I will continue to work on this project until I am completely satisfied with it.</p> <p>Project Teammates: Jacob Wallace, Zachary Zador </p>",
    deploy_url: "https://srw-og2-multiplayer.herokuapp.com/",
    repo_url: "https://github.com/MagentaReds/project-3-srw-multiplayer"
  },

];
/*
  {
    modal_id:
    title:
    tech:
    pic_url:
    desc:
    deploy_url:
    repo_url:
  }
*/

module.exports = projects;