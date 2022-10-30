import { Module } from "module";
import AppDataSource from "../config/connectDB"
import { BookEntity } from "../entity/bookEntity"
import {CreateBookDto} from '../dtos/bookDto'
// import { isEmpty } from '../shared/util/util';
// import { HttpException } from '../shared/util/exceptions/HttpException'
// import { hash } from 'bcrypt';

const bookRepository = AppDataSource.getRepository(BookEntity)
class BookService{

    public async find(): Promise<BookEntity[]> {
        const books: BookEntity[] = await bookRepository.find();
        if (!books) throw console.error('Khong tim thay book');
        return books;

    }

    public async findBookById(bookId: number) {
        if (!bookId) throw console.error('Book data is empty');
    
        const findBook = await bookRepository.findOne({ where: { id: bookId } });
        if (!findBook) throw console.error('Can`t found User by id');
        return findBook;
    }
    
    public async createBook(bookData: CreateBookDto): Promise<BookEntity> {
        if (!bookData) throw console.error('Book data is empty');
    
        const findBook = await bookRepository.findOne({ where: { bookname: bookData.bookname } });
        if (findBook) throw console.error( `This ${bookData.bookname} already exists`);
    
        // const hashedPassword = await hash(userData.password, 10);
        const createBookData: BookEntity = await bookRepository.create({ ...bookData }).save();
    
        return createBookData;
      }
      
    //   public async findBookByName(data_name: string){
    //     if (!data_name) throw console.error('Name is empty');
    
    //     const findUser= await bookRepository.findOne({ where: { username: data_name } });
    //     if (!findUser) throw console.error( "User doesn't exist");
    //     // const hashedPassword = await hash(userData.password, 10);
    //     return findUser;
    //   }
      public async updateBook(bookId: number, bookData: CreateBookDto){
        if (!bookData) throw console.error( "Book data is empty");
    
        const findBook= await bookRepository.findOne({ where: { id: bookId } });
        if (!findBook) throw console.error( "Book doesn't exist");
    
        // const hashedPassword = await hash(userData.password, 10);
        await BookEntity.update(bookId, { ...bookData });
    
        const updateBook= await bookRepository.findOne({ where: { id: bookId } });

        return updateBook;
      }
      public async deleteBook(bookId: number): Promise<BookEntity> {
        if (!bookId) throw console.error( 'UserId is empty');
    
        const findBook = await bookRepository.findOne({ where: { id: bookId } });
        if (!findBook) throw console.error( "Book not found");
    
        await bookRepository.delete({ id: bookId });
        return findBook;
      }
}
export default BookService;