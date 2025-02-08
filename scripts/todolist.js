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

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div> 
        <button class = "del" 
        onclick = 
            "todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        `;
        todoListHTML += html;
    }

    document.querySelector(".div1").innerHTML = todoListHTML;
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



