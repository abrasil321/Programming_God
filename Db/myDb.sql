-- -- DATABASE TABLES
-- CREATE TABLE signUp (
--     firstName            varchar(80)         NOT NULL,
--     lastName             varchar(80)         NOT NULL,
--     email                varchar(80)         NOT NULL         PRIMARY KEY
-- );

-- CREATE TABLE articles (
--     title           varchar(80)         NOT NULL        PRIMARY KEY,
--     content         TEXT                NOT NULL
-- );

UPDATE articles
        SET content = '
    As modern browsers become more powerful with rich features, building full-blown web applications in JavaScript is 
not only feasible, but increasingly popular. Based on trends on HTTP Archive, deployed JavaScript code size has 
grown 45% over the course of the year.

    With JavaScript`s popularity climbing, our client-side applications are much more complex than before. Application 
development requires collaboration from multiple developers. Writing maintainable and reusable code is crucial in the 
new web app era. The Chrome App, with its rich client-side features, is no exception.

    Design patterns are important to write maintainable and reusable code. A pattern is a reusable solution that can be 
applied to commonly occurring problems in software design—in our case—writing Chrome Apps. We recommend that developers 
decouple the app into a series of independent components following the MVC pattern.

    In the last few years, a series of JavaScript MVC frameworks have been developed, such as backbone.js, ember.js, 
AngularJS, Sencha, Kendo UI, and more. While they all have their unique advantages, each one of them follows some form 
of MVC pattern with the goal of encouraging developers to write more structured JavaScript code.


Model

        Model is where the application`s data objects are stored. The model doesn`t know anything about views and 
        controllers. When a model changes, typically it will notify its observers that a change has occurred.


View

        View is what`s presented to the users and how users interact with the app. The view is made with HTML, CSS, 
        JavaScript and often templates. This part of your Chrome App has access to the DOM.

        For example, in the above todo list web app, you can create a view that nicely presents the list of todo items 
        to your users. Users can also enter a new todo item through some input format; however, the view doesn`t know 
        how to update the model because that`s the controller`s job.


Controller 

        The controller is the decision maker and the glue between the model and view. The controller updates the view 
    when the model changes. It also adds event listeners to the view and updates the model when the user manipulates 
    the view.

        In the todo list web app, when the user checks an item as completed, the click is forwarded to the controller. 
    The controller modifies the model to mark item as completed. If the data needs to be persistent, it also makes 
    an async save to the server. In rich client-side web app development such as Chrome Apps, keeping the data 
    persistent in local storage is also crucial. In this case, the controller also handles saving the data to the 
    client-side storage such as FileSystem API.

        There are a few variations of the MVC design pattern such as MVP (Model–View–Presenter) and MVVP(Model–View
    –ViewModel). Even with the so called MVC design pattern itself, there is some variation between the traditional 
    MVC pattern vs the modern interpretation in various programming languages. For example, some MVC–based frameworks 
    will have the view observe the changes in the models while others will let the controller handle the view update. 
    This article is not focused on the comparison of various implementations but rather on the separation–of–concerns and 
    it`s importance in writing modern web apps.


To summarize, the MVC pattern brings modularity to application developers and it enables:

    Reusable and extendable code.

    Separation of view logic from business logic.

    Allow simultaneous work between developers who are responsible for different components (such as UI layer and 
    core logic).
    
    Easier to maintain.'
        WHERE title = 'MVC Architecture';

    
-- DATABASE RETRIEVAL
-- SELECT firstName, lastName, email
--     from signUp;


-- -- DATABASE UPDATE
-- INSERT INTO articles (firstName, lastName, email)
--     VALUES ('Alex', 'Brasil', 'alexfbrazil123@gmail.com');

-- INSERT INTO articles (title, content)
--     VALUES('', ' 

-- ');




SELECT title
    from articles;




