const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const newItem = document.getElementById('item');
const filter = document.getElementById('filter');
const lis = document.querySelectorAll('li');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e) {
  e.preventDefault();

  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerText = newItem.value;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.innerText = 'X';

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
  newItem.value = '';
}

// Remove item
function removeItem(e) {
  if (e.target.tagName == 'BUTTON') {
    if (confirm('Are You Sure?')) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// filter Items
function filterItems(e) {
  const text = e.target.value.toLowerCase();
  lis.forEach((li) => {
    const itemName = li.firstChild.textContent.trim();
    if (itemName.toLowerCase().indexOf(text) != -1) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
}
