let input = document.getElementById("input");
let list = document.getElementById("list");
let iconErase = document.getElementsByClassName(".fa-solid fa-eraser")
let iconEdit = document.getElementsByClassName(".fa-solid fa-pen-to-square")
let checkBoox = document.getElementById('checkBoox')


function lastMessage() {
  var scroll = list;
  scroll.scrollTop = scroll.scrollHeight;
}
// add items on enter press function
function addItemEnter(event) {

    if (event.keyCode === 13) {
      if (input.value !== '') {
        
        list.innerHTML += `<li class = 'inputList' ><input onclick = 'delTag(event)'  type="checkbox" id ="checkBoox"><input class = 'todo-inp'  type="text" value='${input.value}' disabled><button class='dlt-btn' onclick = 'deleteItem(event)'><i class="fa-solid fa-eraser"></i>erase</button><button class='dlt-btn' onclick = 'editItem(event)' ><i class="fa-solid fa-pen-to-square"></i>edit</button></li>`;
        input.value = "";
        lastMessage() 
      }
    }
  
}


// additem onclick function
function addItem() {
  if (input.value !== '') {
    list.innerHTML += `<li class = 'inputList' ><input onclick = 'delTag(event)' type="checkbox" id ="checkBoox"><input class = 'todo-inp' type="text" value='${input.value}' disabled ><button class='dlt-btn' onclick = 'deleteItem(event)' ><i class="fa-solid fa-eraser"></i></button><button class='dlt-btn' onclick = 'editItem(event)' ><i class="fa-solid fa-pen-to-square"></i></button></li>`;
    input.value = "";
    lastMessage() 
  }
}

function delTag(event) {
  let check = event.target
if (check.checked) {
  let listItem = event.target.nextElementSibling  
  listItem.style.textDecoration = 'line-through';
  listItem.style.color = ' red';
  
  
}else{
  let listItem = event.target.nextElementSibling  
  listItem.style.textDecoration = 'none';
  listItem.style.color = 'grey';

}

}
// deleteItem function
function deleteItem(event) {
  let listItem = event.target.parentElement;
  console.log(listItem);
  list.removeChild(listItem);
}

// Edit nd save function
function editItem(event) {
  let inputField = event.target.parentElement.childNodes[1]
  if (inputField.disabled) {
    inputField.disabled = false;
  } else {
    inputField.disabled = true;
    

  }
}

// Delete all function
function deleteAll() {
  list.innerHTML = "";
}
