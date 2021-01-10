// const headerTitle = document.getElementById('header-title');
// const header = document.getElementById('main-header');
// // headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// // const items = document.getElementsByClassName('list-group-item');
// // console.log(items[1]);

// const items = document.querySelectorAll('.list-group-item');
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// const input = document.querySelector('input');
// input.value = 'Hello world';

// const submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// const item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// const lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// const secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

const itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes); => text포함

// childen
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
// console.log(itemList.firstChild); => #text

// firstElementChild
// console.log(itemList.firstElementChild);

// == lastChild, lastElementChild

// == nextSibling, nextElementSibling
// console.log(itemList.nextElementSibling);

// == previousSibling, previousElementSibling

// const newDiv = document.createElement('div');

// newDiv.className = 'hello';

// newDiv.id = 'hello1';

// newDiv.setAttribute('title', 'Hello Div');

// const newDivText = document.createTextNode('Hello World');

// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');
// const h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// Event
// const button = document.querySelector('#button');
// button.addEventListener('click', buttonClick);

// function buttonClick(event) {
//   // console.log(event.target);
//   // document.getElementById('header-title').textContent = 'Changed';
//   // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//   // const output = document.getElementById('output');
//   // output.innerHTML = `<h3>${event.target.id}</h3>`;
//   // console.log(event.clientX);
//   // console.log(event.clientY);
//   // console.log(event.offsetX);
//   // console.log(event.offsetY);
//   // console.log(event.altKey);
//   // console.log(event.ctrlKey);
//   // console.log(event.shiftKey);
// }

const button = document.querySelector('#button');
const box = document.querySelector('#box');
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
button.addEventListener('mouseup', runEvent);
box.addEventListener('mouseenter', runEvent);
box.addEventListener('mouseleave', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
}
