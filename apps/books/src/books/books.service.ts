import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'libs/contract/books/create-book.dto';
import { UpdateBookDto } from 'libs/contract/books/update-book.dto';

@Injectable()
export class BooksService {
  private books: CreateBookDto[] = [
    {
      id: 1,
      title: 'atmoic habbit',
      author: 'thapa kaji',
    },
    {
      id: 2,
      title: 'Intillegent Invester',
      author: 'thapa',
    },
  ];

  create(createBookDto: CreateBookDto) {
    const newBook:CreateBookDto={
      ...createBookDto,
      id:this.books.length+1
    };
    this.books.push(newBook);
    return newBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
