import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
  blogs: BlogDto[];

  constructor() {
    this.blogs = [
      {
        id: 1,
        title: 'title 1',
        name: 'name 1',
        description: 'description 1',
      },
      {
        id: 2,
        title: 'title 2',
        name: 'name 2',
        description: 'description 2',
      },
    ];
  }

  async getAll() {
    return this.blogs;
  }

  async create(dto: BlogDto) {
    let data: BlogDto = {
      id: new Date().getTime(),
      ...dto,
    };
    return [...this.blogs, data];
  }

  async getOne(id: string) {
    return this.blogs.find((blog) => blog.id === Number(id));
  }

  async update(id: string, dto: BlogDto) {
    const index = this.blogs.findIndex((blog) => blog.id === Number(id));
    this.blogs[index] = dto;
    return this.blogs;
  }

  async delete(id: string) {
    this.blogs = this.blogs.filter((blog) => blog.id !== Number(id));
    return this.blogs;
  }
}
