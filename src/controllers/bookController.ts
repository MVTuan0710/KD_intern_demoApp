import { NextFunction, Request, Response } from 'express';
import { CreateBookDto } from '../dtos/bookDTO';
import { BookEntity } from '../entity/bookEntity';
import  BookService   from '../services/bookService';


// homeBook,getBookById,getAllBooks,addBook,updateBook,deleteBook
class BookController{
    public bookService = new BookService();
    public homeBook = (req: Request, res: Response) => {
        res.send("hello from homeUser");
    }
    
    public getBookById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const bookId = Number(req.params.id);
          const findOneBookData = await this.bookService.findBookById(bookId);
    
            res.status(200).json({ data: findOneBookData, message: 'findOne' });
        } catch (error) {
          res.status(400).json({message: "fail"})
          throw error;
        }
    };
    
    public getAllBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
        //   const pageNumber = Number (req.params.pageNumber)
          const findAllBooksData: BookEntity[] = await this.bookService.find();
    
          res.status(200).json({ data: findAllBooksData, message: 'findAll' });
        } catch (error) {
          res.status(400).json({message: "fail"})
          throw error;
        }
    };

    public addBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const bookData: CreateBookDto = req.body;
          console.log ('hello');
          console.log (req.body);
          const createBookData = await this.bookService.createBook(bookData);
    
          res.status(201).json({ data: createBookData, message: 'created' });
        } catch (error) {
          res.status(400).json({message: "fail"})
          throw error;
        }
    };

    public updateBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const bookId = Number(req.params.id);
          const bookData: CreateBookDto = req.body;
          const updateBookData= await this.bookService.updateBook(bookId, bookData);
    
          res.status(200).json({ data: updateBookData, message: 'updated' });
        } catch (error) {
          res.status(400).json({message: "fail"})
          throw error;
        }
      };

      public deleteBook = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
          const bookId = Number(req.params.id);
          const deleteBookData = await this.bookService.deleteBook(bookId);
    
          res.status(200).json({ data: deleteBookData, message: 'deleted' });
        } catch (error) {
          res.status(400).json({message: "fail"})
          throw error;
        }
      };
}

export default BookController;
