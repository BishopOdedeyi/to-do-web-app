const taskForm = document.getElementById("taskForm");
const taskName = document.getElementById("taskName");
const todoList = document.getElementById("todoList");
const completedList = document.getElementById("completedList");

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = taskName.value.trim();
  if (!name) return;

  addTask(name);
  taskName.value = "";
});

function addTask(name) {
  const li = document.createElement("li");
  li.className = "task-card";

  const taskInfo = document.createElement("div");
  taskInfo.className = "task-info";

  const check = document.createElement("div");
  check.className = "task-check";
  check.onclick = () => toggleComplete(li, check, title);

  const title = document.createElement("p");
  title.className = "task-title mb-0";
  title.textContent = name;

  taskInfo.appendChild(check);
  taskInfo.appendChild(title);

  const date = document.createElement("div");
  date.className = "task-date";
  date.textContent = "Due today";

  li.appendChild(taskInfo);
  li.appendChild(date);

  todoList.appendChild(li);
}

function toggleComplete(li, check, title) {
  const isCompleted = check.classList.toggle("completed");
  title.classList.toggle("completed");

  if (isCompleted) {
    completedList.appendChild(li);
  } else {
    todoList.appendChild(li);
  }
}
