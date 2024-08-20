import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { LearnService } from './learn.service';
import { CreateLearnDto } from './dto/create-learn.dto';
import { UpdateLearnDto } from './dto/update-learn.dto';
import { CreateResourcesDto } from './dto/create-resouces.dto';

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
  @Get('module/resource')
  findAllResources(@Query('id') id: string) {
    return this.learnService.findAllResourcesByModuleId(+id);
  }

  @Get('resource')
  findAllResourcesById(@Query('id') id: string) {
    return this.learnService.findAllResourcesById(+id);
  }


  @Post('module/resource')
  createResources(
    @Body() createLearnDto: CreateResourcesDto,
    @Query('id') id: string,
  ) {
    return this.learnService.createResources(createLearnDto, +id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.learnService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLearnDto: UpdateLearnDto) {
    return this.learnService.update(+id, updateLearnDto);
  }

  //delete module
  @Delete('module/:id')
  remove(@Param('id') id: string) {
    return this.learnService.removeModule(+id);
  }

  //delete resource
  @Delete('resource/:id')
  removeResource(@Param('id') id: string) {
    return this.learnService.removeResource(+id);
  }

  //edit resource
  @Patch('resource/:id')
  editResource(@Param('id') id: string, @Body() updateLearnDto: CreateResourcesDto) {
    return this.learnService.editResource(+id, updateLearnDto);
  }

  //edit module
  @Patch('module/:id')
  editModule(@Param('id') id: string, @Body() updateLearnDto: CreateLearnDto) {
    return this.learnService.editModule(+id, updateLearnDto);
  }

  @Get('module/:id')
  findOneModule(@Param('id') id: string) {
    return this.learnService.findOneModule(+id);
  }
}
