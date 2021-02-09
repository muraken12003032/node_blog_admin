export default class Blog {
  constructor(){
    this.id = 0;
    this.title = '';
    this.description = '';
    this.content = '';
    this.is_published = false;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}