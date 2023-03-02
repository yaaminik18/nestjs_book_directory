import { Injectable } from '@nestjs/common';
import { Book } from './books.dto';

@Injectable()
export class BooksService {
    public books: Book[]=[];
    
    //find all books
    getBooks() : Book[]{
        return this.books;
    }

    //add books
    addBooks(book:Book) : string{
        this.books.push(book);
        console.log('book has been successfully added');
        return'book has been successfully added';
    }

    //update books
    updateBooks(book:Book) : string{
        let index=this.books.findIndex((currentBook)=>{
            return currentBook.id===book.id;
        })
        this.books[index]=book;
        console.log('book has been successfully updated');
        return'book has been successfully updated';
        
    }

    //delete book
    deleteBook(id:number):string{
       this.books=this.books.filter((book)=>{
        return book.id!==id
       })
        console.log('book has been successfully deleted');
        return'book has been successfully deleted';  
    }
}
