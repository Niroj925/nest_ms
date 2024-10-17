import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { BOOKS_PATTERN } from 'libs/contract/books/books.pattern';
import { bookDto } from './dto/book.dto';
import { map } from 'rxjs';
import { BOOKS_CLIENT } from './constant';

@Injectable()
export class BooksService {
  constructor(
    @Inject(BOOKS_CLIENT) private booksClient:ClientProxy,
  ){}

  private mapBookDto(bookDto:CreateBookDto):bookDto{
    return{
      id:bookDto.id,
      title:bookDto.title,
    }
  }
 async create(createBookDto: CreateBookDto) {
    return this.booksClient.send(
      BOOKS_PATTERN.CREATE,this.booksClient
    )
    .pipe(map(this.mapBookDto));
  }

  findAll() {
    return this.booksClient.send(BOOKS_PATTERN.FIND_ALL,{});
  }

  findOne(id: number) {
    return this.booksClient.send(BOOKS_PATTERN.FIND_ONE,id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.booksClient.send(BOOKS_PATTERN.UPDATE,{id,updateBookDto});
  }

  remove(id: number) {
    return this.booksClient.send(BOOKS_PATTERN.REMOVE,id);
  }
}
