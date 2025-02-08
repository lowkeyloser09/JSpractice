const todoList = [{
    name: 'make dinner', 
    dueDate: '2021-12-31' 
}, {
    name: 'wash dishes',
    dueDate: '2011-07-15'
}];

renderTodoList();
function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {

        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button class = "del">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector(".div1").innerHTML = todoListHTML;

    document.querySelectorAll(".del").forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", () => {
            todoList.splice(index, 1);
            renderTodoList();
        })
    });
}


function addTodo() {
    const inputElement = document.querySelector(".inp1");
    const name = inputElement.value;

    const dateInputElement = document.querySelector(".dt1");
    const dueDate = dateInputElement.value;

    todoList.push({
        name: name,
        dueDate: dueDate
    });

    inputElement.value = "";
    renderTodoList();

}

document.querySelector(".b1").addEventListener("click", () => {
    addTodo();
});


