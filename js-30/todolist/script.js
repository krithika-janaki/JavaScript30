class Todo {
    constructor() {
        this.tasks = [];
        this.allTasks = document.querySelector('.task-list');
        this.allTasks.addEventListener('click', this.handleUlClick)
    }

    addTask(val) {
        console.log('inside all task')
        this.tasks.push(val);
        const newDiv = `<li>
        <input type="checkbox" id="task"></input>
        <label for="task">${val}</label>
        <button>Delete</button>
        <button>Edit</button>
        </li>`;
        allTasks.innerHTML += newDiv;
    }

    handleUlClick(e) {
        console.log('this', this);
        console.log('e.target', e.target);
    }
}
const allTodos = [];
const activeTodo = 0;
const note = new Todo();
allTodos.push(note);

const form = document.querySelector('.task-form');
const inputTask = document.querySelector('input[name="input-task"]');
form.addEventListener('submit', handleSubmit);
const allTasks = document.querySelector('.task-list');

function handleSubmit(e) {
    e.preventDefault();
    if(!inputTask.value.length) return;
    console.log(inputTask.value);
    allTodos[0].addTask(inputTask.value);
    this.reset();
};