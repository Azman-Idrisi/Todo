function addTodo() {
    const input = document.getElementById('new-todo');
    const todoText = input.value.trim();
    
    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${todoText}</span>
            <div>
                <button class = "complete" onclick="toggleComplete(this)">Complete</button>
                <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
            </div>
        `;
        
        todoList.appendChild(li);
        input.value = '';
    }
}

function toggleComplete(button) {
    const li = button.closest('li');
    li.classList.toggle('completed');
}

function deleteTodo(button) {
    const li = button.closest('li');
    li.remove();
}

// Allow adding todo with Enter key
document.getElementById('new-todo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});