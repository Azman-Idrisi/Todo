// Global function to maintain compatibility with onclick
function addTodo() {
    const newTodoInput = document.getElementById('new-todo');
    const todoText = newTodoInput.value.trim();
    
    if (todoText) {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${todoText}</span>
            <div class="todo-buttons">
                <button class="complete-btn" onclick="toggleComplete(this)">Complete</button>
                <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
            </div>
        `;
        
        todoList.appendChild(li);
        newTodoInput.value = '';
    }
}

// Separate functions for complete and delete
function toggleComplete(button) {
    const li = button.closest('li');
    li.classList.toggle('completed');
}

function deleteTodo(button) {
    const li = button.closest('li');
    li.remove();
}

// Event listener for Enter key
document.addEventListener('DOMContentLoaded', function() {
    const newTodoInput = document.getElementById('new-todo');
    
    newTodoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});