import { Controller } from '@nestjs/common';
import { MessagePattern,Payload } from '@nestjs/microservices';
import { BooksService } from './books.service';
import { BOOKS_PATTERN } from 'libs/contract/books/books.pattern';
import { UpdateBookDto } from 'libs/contract/books/update-book.dto';
import { CreateBookDto } from 'libs/contract/books/create-book.dto';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern(BOOKS_PATTERN.CREATE)
  create(@Payload() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @MessagePattern(BOOKS_PATTERN.FIND_ALL)
  findAll() {
    console.log('find all method')
    return this.booksService.findAll();
  }

  @MessagePattern(BOOKS_PATTERN.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.booksService.findOne(id);
  }

  @MessagePattern(BOOKS_PATTERN.UPDATE)
  update(@Payload() updateBookDto: UpdateBookDto) {
    return this.booksService.update(updateBookDto.id, updateBookDto);
  }

  @MessagePattern(BOOKS_PATTERN.REMOVE)
  remove(@Payload() id: number) {
    return this.booksService.remove(id);
  }
}
