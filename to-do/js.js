
(function () {
  let taskList = document.querySelector(".task-list");
  let taskForm = document.querySelector(".tasks-form");
      console.log('2');

  taskList.addEventListener('click', function (e) {
    let btn = e.target;
    let item = btn.closest('.task-list__item');
    let prio = item.querySelector('.task-list__prio');
    let description = item.querySelector('.task-list__description');
    console.log('3');

    let saveTask = (task) => (e) => {
      e.preventDefault()
      description.textContent = taskForm.description.value;
      prio.textContent = taskForm.prio.checked ? "⚡" : "";
      taskForm.reset();
      taskForm.classList.toggle("notshown");
    };

    if (btn.classList.contains("task__button-edit")) {
            taskForm.classList.toggle("notshown")
            taskForm.description.value = description.textContent;
            if (prio.textContent) {
                taskForm.prio.checked = true;
            } else {
                taskForm.prio.checked = false;
            };
            taskForm.onsubmit = saveTask(item);
        };
        if (btn.classList.contains("task__button-del")) {
            item.remove()
        };
  });

  let add_btn = document.querySelector(".add-button");
  add_btn.addEventListener('click', event => {
      taskForm.classList.toggle("notshown")
      let addTask = (e) => {
          e.preventDefault()
          let newtask = document.querySelector('.item1').cloneNode(true);
          newtask.querySelector(".task-list__prio").textContent = taskForm.prio.checked ? '⚡' : '';
          newtask.querySelector(".task-list__description").textContent = taskForm.description.value;
          taskList.append(newtask)
          taskForm.reset()
          taskForm.classList.toggle("notshown")
      }
      taskForm.onsubmit = addTask;
  });
})();