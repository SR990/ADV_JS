let tasks = [];

function addTask() {
  const taskInput = document.getElementById("new-task");
  if (taskInput.value.trim() !== "") {
    tasks.push({ text: taskInput.value, isEditing: false });
    taskInput.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const container = document.getElementById("todo-container");
  container.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");

    if (task.isEditing) {
      const input = document.createElement("input");
      input.type = "text";
      input.value = task.text;
      input.id = `edit-${index}`;

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.onclick = () => saveTask(index);

      const cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel";
      cancelBtn.onclick = () => cancelEdit(index);

      taskDiv.appendChild(input);
      taskDiv.appendChild(saveBtn);
      taskDiv.appendChild(cancelBtn);
    } else {
      const span = document.createElement("span");
      span.textContent = task.text;

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.onclick = () => editTask(index);

      taskDiv.appendChild(span);
      taskDiv.appendChild(editBtn);
    }

    container.appendChild(taskDiv);
  });
}

function editTask(index) {
  tasks[index].isEditing = true;
  renderTasks();
}

function saveTask(index) {
  const input = document.getElementById(`edit-${index}`);
  const newText = input.value.trim();
  if (newText !== "") {
    tasks[index].text = newText;
    tasks[index].isEditing = false;
    renderTasks();
  }
}

function cancelEdit(index) {
  tasks[index].isEditing = false;
  renderTasks();
}
