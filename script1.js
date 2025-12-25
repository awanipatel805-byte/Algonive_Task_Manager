let task=[];
let filter="all";

document.getElementById("add-task-btn").addEventListener("click",addTask);

function addTask(){
    const title=document.getElementById("task-title").value;
    const desc=document.getElementById("task-title").value;
    const dueDate=document.getElementById("task-due-date").value;
    const task={
        title,
        desc,
        dueDate,
        completed: false
    };
    tasks.push(task);
    renderTasks();
}

function renderTasks(){
    const taskList=document.getElementById("task-list");
    taskList.innerHTML=" ";
    tasks.forEach((rask, index)=>{
        if(filter==="all")(filter==="pending")&& !task.completed) ||(filter==="completed"&& task.completed)){
            const taskHtml=
            <li class="task">
                <input type="checkbox"${task.completed ? "checked": " "} onclick="toggleTask(${index})"></input>
                <span>${task.title-$}{task.desc} (Due: ${task.dueDate})</span>
            </li>;
            taskList.innerHTML+=taskHtml;
        }
    };
function toggleTask(index){
    task[index].completed=!task[index].completed;
    renderTasks;
}

document.getElementById("all-btn").addEventListener("click",()=>{
    filter="all";
    renderTasks();
});

document.getElementById("pending-btn").addEventListener('click', ()=>{
    filter='pending';
    renderTasks();
});
document.getElementById("completed-btn").addEventListener('click', ()=>{
    filter='completed';
    renderTasks();
});

function addTask() {
    const title = document.getElementById('task-title').value;
    const desc = document.getElementById('task-desc').value;
    const dueDate = document.getElementById('task-due-date').value;
    if (title === '' || desc === '' || dueDate === '') {
        alert('Please fill in all fields');
        return;
    }
    const task = {
        title,
        desc,
        dueDate,
        completed: false
    };
    tasks.push(task);
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function editTask(index) {
    const task = tasks[index];
    const newTitle = prompt('Enter new title', task.title);
    const newDesc = prompt('Enter new description', task.desc);
    const newDueDate = prompt('Enter new due date', task.dueDate);
    task.title = newTitle;
    task.desc = newDesc;
    task.dueDate = newDueDate;
    saveTasks();
    renderTasks();
}