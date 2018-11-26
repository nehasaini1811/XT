//Model
class Todo {
    constructor(title, date) {
        Todo.nextId++;
        this.id = Todo.nextId; //auto_increment
        this.title = title;
        this.completed = false;
        this.date = date;
    }
}
Todo.nextId = 0; //statis initial ID

//Service
class TodosService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        //
        let newTodo = new Todo(title);
        this.todos = this.todos.concat(newTodo);
    }
    editTodo(id, newTitle) {
        //
        const editIndex = this.todos.findIndex(todoItem => todoItem.id === id);
        this.todos[editIndex].title = newTitle;
    }
    completeTodo(id) {
        //
        const editIndex = this.todos.findIndex(todoItem => todoItem.id === id);
        this.todos[editIndex].completed = true;
    }
    completeAll() {
        //
        this.todos.map(todoItem => todoItem.completed = true);
    }
    deleteTodo(id) {
        //
        const editIndex = this.todos.findIndex(todoItem => todoItem.id === id);
        this.todos.splice(editIndex, 1);
    }
    clearCompleted(id) {
        //
        const editIndex = this.todos.findIndex(todoItem => todoItem.id === id);
        this.todos[editIndex].completed = false;
    }
    viewTodos(filter) {
        // filter ==> ALL, COMLPLETED, ACTIVE, TODAY, WEEK
        let filteredTodos = this.todos;
        if(filter === 'ALL'){
            console.log(filteredTodos);
        }
        if(filter === 'COMPLETED'){
            filteredTodos = this.todos.filter(todoItem => todoItem.completed === true)
            console.log(filteredTodos);
        }
        // if(filter === 'ACTIVE'){
        //     console.log(filteredTodos);
        // }
        // if(filter === 'TODAY'){
        //     console.log(filteredTodos);
        // }
        // if(filter === 'WEEK'){
        //     console.log(filteredTodos);
        // }
    }
}

//test it in console
const service = new TodosService();
service.addTodo('go party')
service.viewTodos('ALL')
