import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from "./books.dto";
@Controller('books')
export class BooksController {
    constructor(private booksService:BooksService){}
    //get all books
    @Get('/books')
    getAllBooks(){
        return this.booksService.getBooks();
    }
    @Post('/add')
    add(@Body() book:Book){
    return this.booksService.addBooks(book);
    }

    @Put('/update')
    update(@Body() book:Book){
    return this.booksService.updateBooks(book);
    }

    @Delete('/delete/:id')
    delete(@Param('id') bookid:number){
    return this.booksService.deleteBook(bookid);
    }

}

