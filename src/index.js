document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(event){
    event.preventDefault();
    const task = document.getElementById('new-task-description').value;
    console.log(task);
    const newTask = document.createElement('li');

    newTask.textContent = task;
    document.getElementById('tasks').appendChild(newTask);
    let delBtn = document.createElement("button")
    delBtn.textContent = 'Delete';
    newTask.appendChild(delBtn);
    delBtn.addEventListener('click', function(event){
      document.getElementById('tasks').removeChild(newTask);
      
    })
  });

  /*function addList(){
    const task = document.getElementbyId('new-task-description');
    const newTask = document.createElement('li');
    newTask.textContent = task;
    document.getElementById('tasks').appendChild(newTask);
  }*/
});
