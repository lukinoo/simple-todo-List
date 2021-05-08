const todo_input = document.getElementById('todo-input');
const todo_button = document.getElementById('todo-button');
const todo_list = document.getElementById('todo-list');
const notification_container = document.querySelector('.notification-container');
const colors = ["#8B95C9","#E83151","#D2CCA1","#A882DD","#49416D","#E08D79","#FF686B","#A5FFD6","#4056F4","#FF8811","#392F5A","#9E1946","#F9564F"];

// events 
todo_button.addEventListener('click',newTodo);
todo_list.addEventListener('click',completedTrash);

// function which creating new todo
function newTodo(e) {
    e.preventDefault();
    // Math random for random border colors =)
    const random_number = Math.floor(Math.random() * colors.length);
    const random_color = colors[random_number];
    // created div tag for todo
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.style.borderLeft = `5px solid ${random_color}`; //random border color genering heree
    // ==new todo ============[+]=[-];
    const new_todo = document.createElement('li');
    new_todo.innerHTML = todo_input.value;
    new_todo.classList.add('new-todo');
    todo.appendChild(new_todo);
    // completed button created here
    const completed_button = document.createElement('button');
    completed_button.innerHTML = `<i class="fas fa-check-circle"></i>`;
    completed_button.classList.add('completed-button');
    todo.appendChild(completed_button);
    // trash button created here
    const trash_button = document.createElement('button');
    trash_button.innerHTML = `<i class="fas fa-trash"></i>`;
    trash_button.classList.add('trash-button');
    todo.appendChild(trash_button);
    // appended todo
    todo_list.appendChild(todo);
    // notification thing []
    if (todo_list.childNodes.length - 1 > 6) {
        getNotification();
    }
    todo_input.value = '';
}

function getNotification() {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerHTML = `<p>There's too many Todo's</p>`;

    notification_container.appendChild(notification);

    setTimeout(() => {
        notification_container.removeChild(notification);
    }, 4000);
}

// function for completed and trash button
function completedTrash(e) {
    const todo = e.target;
    if(todo.classList[0] === 'completed-button') {
        const item = todo.parentElement;
        item.classList.toggle('todo-done');
    }
    if(todo.classList[0] === 'trash-button') {
        const item = todo.parentElement;
        item.classList.add('trash-animation');
        setTimeout(() => {
            item.remove();
        },1000);
    }
}