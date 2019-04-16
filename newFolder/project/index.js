'use strict'

let secondButton = document.getElementById('myButton')
let button = document.getElementById('addButton')

button.addEventListener('click', function () {
  let paragraph = document.createElement('p') // Create <p> element
  let text = document.createTextNode('This is a student') // Create text node
  paragraph.appendChild(text) // Append the text to <p>
  let students = document.getElementById('studentList')
  students.appendChild(paragraph) // Append <p> to <body>
}, false)

secondButton.addEventListener('click', function () {
  let headerElement = document.getElementById('heading')
  headerElement.innerHTML = 'My New Heading'
}, false)
