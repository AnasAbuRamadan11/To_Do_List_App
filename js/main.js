// setting up variables

let theInput = document.querySelector(".add-task input")
let theAddButton = document.querySelector(".add-task .plus")
let tasksContainer = document.querySelector(".tasks-content")

let tasksCount = document.querySelector(".tasks-count span")
let tasksCompleted = document.querySelector(".tasks-completed span")



// focus on input field
window.onload = function () {

    theInput.focus()
}


// Adding the task
theAddButton.onclick = function () {

    // if input is empty
    if (theInput.value == "") {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'cant be input field empty',
            // footer: '<a href="">Why do I have this issue?</a>'
        })

    }
    else {


        let noTasksMessage = document.querySelector(".no-tasks-message")

        // check if span with no tasks message is exist
        if(document.body.contains(document.querySelector(".no-tasks-message"))) {

           // Remove No tasks message
            noTasksMessage.remove() 
        }
        

        // create main span element
        let mainSpan = document.createElement("span")

        // create delete button
        let deleteSpan = document.createElement("span")

        // create the main span text
        let spanText = document.createTextNode(theInput.value)

        // create the delete Button text
        let deleteText = document.createTextNode("Delete")

        // add text to main span
        mainSpan.appendChild(spanText)

        // add class to main span
        mainSpan.className = "task-box"

        // add text to main span
        deleteSpan.appendChild(deleteText)

        // add class to delete span
        deleteSpan.className = "delete"

        // add delete button to main span
        mainSpan.appendChild(deleteSpan)


        
        // add the task to the container
        tasksContainer.appendChild(mainSpan)



        // empty the input
        theInput.value = ""

        // return the focus to input field
        theInput.focus()


        // calculated tasks
        calculateTasks()
    }
}





// Delete function
document.addEventListener('click', function (e) {

    if (e.target.className == "delete") {

        // remove current task
        e.target.parentNode.remove()
    }

    // check number of tasks inside the container
    if(tasksContainer.childElementCount == 0) {

        createNoTask()
    }



// Delete function

    if (e.target.classList.contains("task-box")) {

        // toggle class finished 
        e.target.classList.toggle("finished")
    }

    // calculated tasks
    calculateTasks()
})



// Delete function
// document.addEventListener('click', function (e) {

//     if (e.target.className == "deleteAll") {

//         let taskDelete = document.querySelector(".tasks-content");
//         taskDelete.parentNode.removeChild(taskDelete)
//     }
// })




let deleteAll = document.querySelector(".deleteAll") 
// console.log(deleteAll)

deleteAll.onclick = function()
{       
    while(true)
    {
        
        if(document.querySelector('.task-box'))
            {
                document.querySelector('.task-box').remove();  
            }
        else{
            break;
        }
    }    
}


// function to create no tasked message

function createNoTask() {

    // create message span element
    let msgSpan = document.createElement("span")

    // create text message
    let messageText = document.createTextNode("No Tasks To Show")

    // Add text to Message span element
    msgSpan.appendChild(messageText)

    // add class to message span
    msgSpan.className = "no-tasks-message"

    // append the message span ele to the task container
    tasksContainer.appendChild(msgSpan)

}


// function to calculated task
function calculateTasks() {

    // calculate all task
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length

    // calculated completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length
}





