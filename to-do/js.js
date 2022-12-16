
(function () {
  let taskList = document.querySelector(".task-list");
  let taskForm = document.querySelector(".tasks-form");
  let add_btn = document.querySelector(".add-button");
  let todoList = document.querySelector('.todo-list');
  let addButton = todoList.querySelector('.task-list__add-button');
  let taskForms = todoList.querySelector('.task-form');
  let form = todoList.querySelector('form');

  taskList.addEventListener('click', function (e) {
    let btn = e.target;
    let item = btn.closest('.task-list__item'), 
      prio = item.querySelector('.task-list__prio'),
      description = item.querySelector('.task-list__description');

    let saveTask = (task) => (e) => {
      e.preventDefault()
      description.textContent = taskForm.description.value;
      prio.textContent = taskForm.prio.checked ? "⚡" : "";
      taskForm.reset();
      taskForm.classList.toggle("notshown");
    };


    if (btn.classList.contains("task-list__edit-button")) {
            taskForm.classList.toggle("notshown")
            taskForm.description.value = description.textContent;
            if (prio.textContent) {
                taskForm.prio.checked = true;
            } else {
                taskForm.prio.checked = false;
            };
            taskForm.onsubmit = saveTask(item);
        };
        if (btn.classList.contains("task-list__delete-button")) {
            item.remove()
        };
  });

  add_btn.addEventListener('click', event => {
      taskForm.classList.toggle("notshown")
      let addTask = (e) => {
          e.preventDefault()
          // let newtask = document.querySelector('.item1').cloneNode(true);
          let newtask = document.querySelector('.item1').cloneNode(true);
          newtask.querySelector(".task-list__prio").textContent = taskForm.prio.checked ? '⚡' : '';
          newtask.querySelector(".task-list__description").textContent = taskForm.description.value;
          taskList.append(newtask)
          taskForm.reset()
          taskForm.classList.toggle("notshown")
      }
      taskForm.onsubmit = addTask;
  });
  
  addButton.addEventListener('click', (e) => {
    taskForms.classList.toggle('shown');
    // formAction = 'create';
    // form.reset();
    // formItem = null;
  });

  
})();
