// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Create an array of Tasks
let taskArray = new Array();

// Grab the Add Task button to grab data when clicked
const addTask = $('#add-task');

// Modal Inputs
const taskTitleEl = $('input[name="task-title"]');
const dateInputEl = $('input[name="datepicker"]');
const taskDescEl = $('#task-description');

// Todo: create a function to generate a unique task id
function generateTaskId() {
    //Once a card is generated, we want to assign it to the next ID available in local storage
    //grab the nextID from storage, we start at 0 and go to one
    
    //If nextId is null, return 0 and set the nextId at 1
    if(nextId === null){
        localStorage.setItem('nextId', 1);
        return 0;
    }
    else{
        //Increase the value of the nextId by one and return the current nextId
        localStorage.setItem('nextId', nextId+1);
        return nextId;
    }
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    // Give the task:
    // * title pulled from the input
    // * description
    // * a unique ID
    // * assign it a due date
    // * color it based on how many days are left till due

    // Prevent that page from reloading
    event.preventDefault();

    let taskID = generateTaskId();

    // We want to grab the data that is in the modal and send it to local storage
    const titleInput = taskTitleEl.val();
    const dateInput = dateInputEl.val();
    const descInput = taskDescEl.val();

    //Debugging
    console.log('Task Title: ', titleInput);
    console.log('Date: ', dateInput);
    console.log('Desc: ', descInput);

    if(!titleInput || !dateInput || !descInput){
        console.log("Please enter data in the form");
        return;
    }

    const formInput = {
        taskTitle: titleInput,
        dueDate: dateInput,
        taskDesc: descInput,
        taskNo: taskID,
        taskStatus: "to-do"
    };

    console.log(formInput);

    // Push the new tasks onto the array
    if(taskArray !== null){
        taskArray.push(formInput);
    }
    else{
        taskArray = [formInput];
    }
    

    localStorage.setItem('tasks', JSON.stringify(taskArray));

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // Once the document loads in, grab the stored tasks
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if(taskArray !== null){
        taskArray = storedTasks;
    }

    // When the add task button is clicked, run the handleAddTasks
    addTask.on('click', handleAddTask);

});

$( function() {
    $( "#datepicker" ).datepicker();
  } );
