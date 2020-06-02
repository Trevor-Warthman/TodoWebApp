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

//To be added to later
function encourage(){
	alert("Good job! You completed your task!")
}
