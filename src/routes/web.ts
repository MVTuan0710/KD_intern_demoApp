import express from 'express';
import BookController from '../controllers/bookController';
import AuthController from '../controllers/authController';
import passport from 'passport';
import { checkToken } from '../middleware/checkToken';

const route = express.Router()
const bookController = new BookController();
const authController = new AuthController();




//Login
    route.post(`/login`,
                passport.authenticate('local', {
                    failureRedirect: '/login/register'
                }),authController.login);
    route.post(`/login/register`,
                authController.register);





//Book
    route.get(`/book/home-book`,
                checkToken,
                bookController.homeBook);
    route.get(`/book/get-book-by-id/:id`,
                checkToken,
                bookController.getBookById);
    route.get(`/book/get-all-book`,
                checkToken,
                bookController.getAllBooks);
    route.delete(`/book/delete-book`,
                checkToken,
                bookController.deleteBook);
    route.post(`/book/add-book`,
                checkToken,
                bookController.addBook);
    route.put(`/book/update-book`,
                checkToken,
                bookController.updateBook);



export default route;

