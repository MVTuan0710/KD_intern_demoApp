import express, { Express, Request, Response } from 'express';
import { Router } from "express-serve-static-core";
// import { auth, home, user, contact, notif, message } from "./../controllers/index";
// import {initPassportLocal, initPassportGoogle, initPassportFacebook} from "./../controllers/passportController/index";
// import { authValid, userValid, messageValid } from "./../validation/index";
import passport from "passport";
import BookController from '../controllers/bookController';
const bookController = new BookController();
const route = (app: any) => {  
    app.route('/login')
        .get()
        .post()
        .put()
        .delete();
    app.route('/book')
        .get(bookController.getAllBooks)
        .post(bookController.addBook)
        .put()
        .delete();

    // app.route('/login')
    //     .get(function (req, res) {
    //         res.send('Hello World!');
    //     })
    //     .post(function (req, res) {
    //         res.send('Got a POST request');
    //     })
    //     .put(function (req, res) {
    //         res.send('Got a PUT request at /user');
    //     })
    //     .delete(function (req, res) {
    //         res.send('Got a DELETE request at /user');
    //     });

}
export default route;