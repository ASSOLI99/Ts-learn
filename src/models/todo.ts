class Todo{
    title :string;
    id: string;
    constructor(todoTitle:string){
        this.title=todoTitle;
        this.id=new Date().toISOString();
    }
    
}
export default Todo