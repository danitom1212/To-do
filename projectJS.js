//save arr for print in html 
let arrWeb = []
//Function  start toDoList 
function start(arr){

    while(true){
        str = prompt("Enter one of the following entries (add, view, delete, end) : ");
        if(str.toLowerCase() == 'add'){
            addToDoList(arr); 
        }
        else if(str.toLowerCase() == 'view'){
            viewToDoList(arr);
        } 
        else if (str.toLowerCase() == 'delete'){
            deleteToDoList(arr);            
        }
        else if (str.toLowerCase() == 'end') {
            end(arr);
            break;
        }
        else alert("!_Something went wrong_! please try again");
    }
}

function newList(arr){
    arr = [];
 
    while(true){
        str = prompt("Enter one of the following entries (add, view, delete, end) : ");
        if(str.toLowerCase() == 'add'){
            addToDoList(arr);
            
        }
        else if(str.toLowerCase() == 'view'){
            viewToDoList(arr);
            
        } 
        else if (str.toLowerCase() == 'delete'){
            deleteToDoList(arr);
            
        }
        else if (str.toLowerCase() == 'end') {
            end(arr);
            break;
        }
        else alert("!_Something went wrong_! please try again");
    }
 }

//Function view toDoList  
function viewToDoList(toDoList){
    let str = "";
    let textarea = document.getElementById('showList');
    if(toDoList.length > 0){
        for (let index = 0; index < toDoList.length; index++) {
            str += index + 1 +" : " + toDoList[index] + "\n";
            textarea.innerHTML = str;
            
        }
        alert(str);
    }
    else{
        alert("Nothing in the list Please enter add");
    }
    
}

//function add task to toDoList 
function addToDoList(toDoList){
    let text = prompt("Add an item to the list: ");

    while(text.length == 0 || text == " "){
        text = prompt("Add an task to the list: ");
    }
    toDoList.push(text);
    alert("The task was added successfully");
    
}

//Function delete task from toDoList 
function deleteToDoList(toDoList){
    let i = prompt("which task number you want to delete? ");

    while(isNaN(i) == true || i > toDoList.length || i <= 0){
        alert("!_Something went wrong_! please try again");
        i = prompt("which task number you want to delete? ");
    }
    return toDoList.splice(i - 1, 1);
}

//Function end toDoList 
function end(toDoList){
    viewToDoListInWeb(toDoList);
    alert("See you next time Bye Bye");
}

//Function view toDoList in web 
function viewToDoListInWeb(toDoList){
    let str = "";
    let textarea = document.getElementById('showList');
    if(toDoList.length > 0){
        for (let index = 0; index < toDoList.length; index++) {
            str += index + 1 +" : " + toDoList[index] + "\n";
            
            
        }
        textarea.innerHTML = str;
    }
    else{
        alert("Nothing in the list Please enter add");
    }
    
}

