const inputBtn = document.querySelector(".searchSection , input");

const form = document.getElementById("head")

const submitBtn = document.getElementById("addTask");

const removeBtn = document.querySelectorAll(".removeTask");

const listofTask = document.querySelector("#taskStock");

const taskList = document.querySelectorAll(".taskList");

const noList = document.getElementById("emptyList");

const CompleteBtn = document.querySelectorAll(".CompleteButton");

let taskExist = document.getElementById("alreadyTaskExist");

form.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    taskAdd()
  }
  else if(event.key === 'Keyz' || event.key === 'meta'){
    inputBtn.value =""
  }
})

function taskAdd(){
  const taskConvert = Array.from(taskList);
  const existCheck = taskConvert.some(
    (task) => task.innerText === inputBtn.value
  );

  function Feedback() {
    setTimeout(() => {
      taskExist.id = "";
      taskExist.innerText = "";
    }, 2000);
  }

  if (inputBtn.value.length < 3) {
    taskExist.innerText = "Please Enter Task.";
    taskExist.id = "alreadyTaskExistex";
    Feedback();
    return;
  } else if (existCheck) {
    console.log("already exist");
    taskExist.id = "alreadyTaskExistex";
    taskExist.innerText = "Task already exist";
    Feedback();
  } else {
    const createDiv = document.createElement("div");

    createDiv.classList = "newEmptyList";

    createDiv.innerHTML = `<li classname="taskList">${
      inputBtn.value[0].toUpperCase() + inputBtn.value.slice(1)
    }</li>`;

    const removbtn = document.createElement("button");

    removbtn.setAttribute("onClick", "removeTask(event)");

    removbtn.classList = "removeButton";

    removbtn.innerText = "Delete";

    const empDiv = document.createElement("div");

    const EditButton = document.createElement("button");

    EditButton.innerText = "Completed";

    EditButton.classList = "CompleteButton";

    EditButton.setAttribute("onClick", "completedAction(event)");

    empDiv.append(EditButton);

    empDiv.append(removbtn);

    createDiv.append(empDiv);

    listofTask.append(createDiv);

    inputBtn.value = "";
  }
};

submitBtn.addEventListener("click", () => {
  addnewtask();
});

function addnewtask() {
  taskAdd();
}

function removeTask(event) {
  const selectedTask = event.target.parentNode.parentNode;
  if (listofTask.childElementCount <= 1) {
    noList.innerText = "No task added yet";
  }
  selectedTask.remove();
}

//   let innertext = event.target.parentNode.parentNode.children[0].innerText;

function completedAction(event) {
  const parentNode = event.target.parentNode.parentNode;
  parentNode.style.backgroundColor = "#3C3D37";
  parentNode.children[0].id = "strike";
  const childOne = parentNode.children[1].children[0];
  const childTwo = parentNode.children[1].children[1];
  childOne.style.backgroundColor = "#3C3D37";
  childTwo.style.backgroundColor = "#973131";
  childOne.innerText = "";
}
