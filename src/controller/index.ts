import { Generic } from '../models/Generic'
import { JsonController, Param, Body, Get, Post, Delete, Patch } from 'routing-controllers';

@JsonController()
class RestController {
  
  @Get('/')
  async select() {
    return await Generic.find()
  }

  @Post('/')
  async insert(@Body() request: any) {

    const generic = new Generic(request.name)
    generic.save()
    return generic
    
  }

  @Patch('/:id')
  async update(@Param('id') id: number, @Body() request: any) {
    
    const generic = await Generic.findOne(id)

    if (generic) {
      generic.name = request.name
      generic.save()
    } 
    else {
      return 'Id não existe'
    }

    return generic

  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {

    const generic = await Generic.findOne(id)

    if (generic) {
      return Generic.remove(generic)
    }
    else {
      return 'Id não existe'
    }

  }

}

export default RestController