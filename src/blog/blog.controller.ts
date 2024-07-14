import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @HttpCode(200)
  @Get()
  async getAll() {
    return this.blogService.getAll()
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: BlogDto) {
    return this.blogService.create(dto);
  }

  @HttpCode(200)
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.blogService.getOne(id);
  }

  @HttpCode(200)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: BlogDto) {
    return this.blogService.update(id, dto);
  }

  @HttpCode(200)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.blogService.delete(id);
  }
}
