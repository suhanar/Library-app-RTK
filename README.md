# Project Title Library-App

# Demo link: Access my site at google.com

# Table of Content: About The App Screenshots Technologies Installation and Setup Instructions Approach Status Credits License

# About The App Library-App is an app that a user can view ,add and favorite books that he/she interested in.I used Google Book API in this project to fetch data. There is a category of list in the home page ,where user can select then the app will populate with the results of book that user selected. There is an option for add the book into 'My Book List' and user can view that book details in the '/list' router page. Also there is a Favorite option where user can add his favorite books into it. When clicking favorite it will redirect to '/favorite' router. For more details about the book user can click anywhere in the book div. So a modal will pop up and show the details of that particular book.The home page contains 3 carousels. It is based on certain categories of books.

Screenshots Writing

Picture by Suhana

# Technologies HTML CSS JAVASCRIPT REACTJS REACT TOOL KIT

Installations This project was bootstrapped with Create React App To install Redux Tool Kit npm install @reduxjs/toolkit react-redux To install Axios npm install axios To install Carousal npm install react-simply-carousel To install React Router npm i react-router-dom

API used for fetching data is Google Book API https://www.googleapis.com/books/v1/volumes?
# Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

Set Up

npm install

To Run Test Suite:

npm test

To Start Server:

npm start

To Visit App:

localhost:3000/ Approach I adopted the BEM naming style for my css class names and ...

Status Basic functionalities are done. I will add user Authentication in Future. So the version 2 is loading...