import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LearnService } from './learn.service';
import { CreateLearnDto } from './dto/create-learn.dto';
import { UpdateLearnDto } from './dto/update-learn.dto';

@Controller('learn')
export class LearnController {
  constructor(private readonly learnService: LearnService) {}

  @Post('module')
  create(@Body() createLearnDto: CreateLearnDto) {
    return this.learnService.create(createLearnDto);
  }

  @Get('module')
  findAll() {
    return this.learnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.learnService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLearnDto: UpdateLearnDto) {
    return this.learnService.update(+id, updateLearnDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learnService.remove(+id);
  }
}
