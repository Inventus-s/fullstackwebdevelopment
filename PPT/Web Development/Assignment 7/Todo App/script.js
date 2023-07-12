// Catch
const mainList = document.getElementById("main");
const inputTodo = document.querySelector(".todo-input");

function displayList(){
    
    // para
    if (inputTodo.value === "") {
        alert("Write something to continue..")
    } else{
        const todoList = document.createElement('div');
        todoList.className = 'todo-list';
        const listP1 = document.createElement('p');
        listP1.className = 'list-para';
        listP1.innerHTML = inputTodo.value;
        const listP2 = document.createElement('p');
        listP2.className = 'list-para';
        listP2.innerText = 'Status : Pending'

        // Remove button

        const btnRemove = document.createElement('button');
        btnRemove.className = 'list-btn';
        btnRemove.innerText = 'Remove';
        btnRemove.addEventListener("click",()=>{
            todoList.remove();
        })

        // Mark Buttton

        const btnMark = document.createElement('button');
        btnMark.className = 'list-btn';
        btnMark.innerText = 'Mark Completed';
        btnMark.style.backgroundColor = "#008000";
        btnMark.style.color = "#fff";
        btnMark.addEventListener("click",()=>{
            if (btnMark.innerText === 'Mark Completed') {
                listP2.innerText = 'Status : Completed';
                btnMark.innerText = 'Mark Pending';
                btnMark.style.backgroundColor = '#ffff00';
                btnMark.style.color = 'black';
            } else {
                listP2.innerText = 'Status : Pending';
                btnMark.innerText = 'Mark Completed';
                btnMark.style.backgroundColor = '#008000';
                btnMark.style.color = '#fff'
            }
            
        })

        // Edit Button

        const btnEdit = document.createElement('button');
        btnEdit.className = 'list-btn';
        btnEdit.innerText = 'Edit Task';
        btnEdit.addEventListener('click',()=>{
            const editList = document.createElement('div');
            editList.className = 'edit-list';

            const editInput = document.createElement('input');
            editInput.className = 'edit-input';
            editInput.setAttribute('type','text');
            editInput.setAttribute('value',listP1.textContent);

            const editBtn = document.createElement('div');
            editBtn.className = 'edit-btn';

            const update = document.createElement('button');
            update.className = 'update';
            update.innerText = 'Update';
            update.style.color = '#fff';
            update.addEventListener('click',()=>{
                listP1.innerText = editInput.value;
                editList.remove();
            })

            const close = document.createElement('button');
            close.className = 'close';
            close.innerText = 'Close';
            close.style.color = '#fff';
            close.addEventListener('click', () => { editList.remove();})

            // Append
            mainList.appendChild(editList);
            editList.appendChild(editInput);
            editList.appendChild(editBtn);
            editBtn.appendChild(update);
            editBtn.appendChild(close);
        })

        // Append
        mainList.appendChild(todoList);
        todoList.appendChild(listP1);
        todoList.appendChild(listP2);
        todoList.appendChild(btnRemove);
        todoList.appendChild(btnMark);
        todoList.appendChild(btnEdit);        
    };
    
    inputTodo.value = "";


}