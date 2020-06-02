const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}
let id = 0

const list = document.getElementById('todo-list')
const checkedList = document.getElementById('checked-todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const inp = document.getElementById('inp')


let uncheckedCount = 0
let totalCount = 0
uncheckedCountSpan.innerHTML = totalCount

function newTodo(){
	totalCount += 1
	uncheckedCount += 1

	let newTodo = document.createElement('li')
	newTodo.setAttribute("class",classNames.TODO_ITEM)
	newTodo.setAttribute("id", id + "li")
	const inputText = inp.value
	let text = document.createTextNode(inputText)
	let checkbox = document.createElement('div')
	checkbox.setAttribute("class",classNames.TODO_CHECKBOX)
	checkbox.setAttribute("id", id)
	id = id + 1
	checkbox.setAttribute("onclick", "colorCheckBox(this.id)");

	newTodo.appendChild(text)
	newTodo.appendChild(checkbox)
	list.appendChild(newTodo)

	uncheckedCountSpan.innerHTML = uncheckedCount
	itemCountSpan.innerHTML = totalCount
}

function colorCheckBox(id){
	checkbox = document.getElementById(id)
	checkbox.style.backgroundColor = "black"

	//disallow a second click
	checkbox.removeAttribute("onclick")
	uncheckedCount = uncheckedCount - 1
	encourage()
	uncheckedCountSpan.innerHTML = uncheckedCount

	//reassign the checked todo
	const identity = id + "li"
	const checkedTodo = document.getElementById(identity)
	list.removeChild(checkedTodo)
	checkedList.appendChild(checkedTodo)


}

//Display random encouragement
function encourage(){
	const rand = Math.floor(Math.random() * 10
	switch(rand) {
  		case 0:
			alert("Yay you did it")
    		break
  		case 1:
			alert("great work!")
		break
		case 2:
			alert("I'm proud of you.")
		break
		case 3:
			alert("Nice!")
		break
		case 4:
			alert("Good job.")
		break
		case 5:
			alert("One step closer to being done!")
		break
		case 6:
			alert("You are unstoppable")
		break
		case 7:
			alert("See? That wasn't so hard!")
		break
		case 8:
			alert("Anything can be accomplished with the help of a great todo list!")
		break
		case 9:
			alert("Good job! You completed your task!")
		break
		default:
			alert("Good job! You completed your task!")
			
	}
}
