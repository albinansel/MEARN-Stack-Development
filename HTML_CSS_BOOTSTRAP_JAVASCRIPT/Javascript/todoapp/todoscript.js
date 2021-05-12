function createTodo() {
    let no = num.value;
    let uname = username.value;
    let task = todo.value;
    let status = stat.value;

    let todos = {
        slno: no,
        user_name: uname,
        task: task,
        status: status
    }

    localStorage.setItem(no, JSON.stringify(todos))
}


function displayTodo() {

    let html_data=``;
    let len = localStorage.length;
    for (let i = 0; i < len; i++) {
        let todo = JSON.parse(localStorage.getItem(localStorage.key(i)))
        // console.log(todo);  

        html_data += `<div class="card" style="width: 18rem;">
         <div class="card-body">
         <h6 class="card-subtitle mb-2 text-muted">${todo.slno}</h6>
         <h5 class="card-title">${todo.task}</h5>
         <h6 class="card-subtitle mb-2 text-muted">${todo.status}</h6>
         <p class="card-text">${todo.user_name}</p>
        <button type="button" onclick="del_task(${todo.slno})">delete</button>
        </div>
        </div>`

    }
    
    document.querySelector("#resultarea").innerHTML=html_data

}


function del_task(no){
    localStorage.removeItem(no);

}