let txtTask = document.getElementById("txtTask");
let elTasks = document.getElementById("tasks");
let actionName = document.getElementById("actionName");

let tasks = [];
let isNew = true;

txtTask.focus();
listTasks();

function listTasks() {
  clearArray();
  let data = "";
  let ls = localStorage.getItem("key");
  if (ls != null) {
    JSON.parse(ls).forEach((item, i) => {
      let iCheck = item.state ? "checked" : "unchecked";
      data += `
            <div class="card">
                <button class="btn-check" onclick="checkTask(${i})">
                <img src="./img/${iCheck}.png" alt="Unchecked" />
                </button>
                <p>${i + 1} - ${item.task}</p>
                <div class="btn-group">
                <button class="btn-edit" onclick="editTask(${i})">
                    <img src="img/pencil.png" alt="Pencil" />
                </button>
                <button class="btn-delete" onclick="deleteTask(${i})">
                    <img src="img/trash.png" alt="Trash" />
                </button>
                </div>
            </div>
            `;
    });
  } else {
    data = '<div class="card"><p>No tasks 💨</p></div>';
  }

  elTasks.innerHTML = data;
}

function addTask(ls) {
  let json = { task: txtTask.value, state: false };
  if (ls != null) tasks = JSON.parse(ls);
  tasks.push(json);
}

function updTask(ls) {
  let json = { task: txtTask.value, state: false };
  let id = txtTask.getAttribute("taskId");
  tasks = JSON.parse(ls);
  tasks[id] = json;
  actionName.innerHTML = "Add";
  isNew = true;
}

function saveTask() {
  if (txtTask.value.trim() !== "") {
    clearArray();
    let ls = localStorage.getItem("key");
    if (isNew) {
      addTask(ls);
    } else {
      updTask(ls);
    }
    localStorage.setItem("key", JSON.stringify(tasks));
    listTasks();
    txtTask.value = "";
    txtTask.focus();
  }
}

function editTask(id) {
  clearArray();
  let ls = localStorage.getItem("key");
  tasks = JSON.parse(ls);
  txtTask.value = tasks[id].task;
  txtTask.setAttribute("taskId", id);
  actionName.innerHTML = "Edit";
  isNew = false;
  txtTask.focus();

  let taskPast = txtTask.value;
  verifyWrite(taskPast);
}

function verifyWrite(taskPast) {
  setTimeout(() => {
    if (taskPast == txtTask.value.trim()) {
      txtTask.value = "";
      actionName.innerHTML = "Add";
      isNew = true;
    } else {
      let newTaskPast = txtTask.value;
      verifyWrite(newTaskPast);
    }
    console.log("setTimeout run ...");
  }, 3000);
}

function checkTask(id) {
  clearArray();
  let ls = localStorage.getItem("key");
  tasks = JSON.parse(ls);
  tasks[id].state = true;
  localStorage.setItem("key", JSON.stringify(tasks));
  listTasks();
}

function deleteTask(id) {
  clearArray();
  let ls = localStorage.getItem("key");
  tasks = JSON.parse(ls);
  if (tasks.length == 1) {
    localStorage.clear();
  } else {
    tasks.splice(id, 1);
    localStorage.setItem("key", JSON.stringify(tasks));
  }
  listTasks();
  txtTask.focus();
}

function deleteAll(){
    localStorage.clear();
}

document.getElementById('body').addEventListener('keydown', (e) => {
    e = e || event;

    if (e.altKey && String.fromCharCode(e.keyCode) == 'C')
    {
        deleteAll();
        listTasks();
    }
})

function clearArray() {
  tasks.splice(0, tasks.length);
}
