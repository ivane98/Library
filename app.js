/*
let myLibrary = [];
let mybook = document.getElementById('book')
let addBook = document.getElementById('add')
addBook.addEventListener('click', addBookToLibrary);


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = read
    this.info = function () {
        return (title + ' by ' + author + ', ' + pages + ', ' + read + ' yet')
    }
}

let i = 0;
function addBookToLibrary() {
while(i < 2) {
        let title = prompt('add the title');
        let author = prompt('add the author');
        let pages = prompt('add the number of pages');
        let status = prompt('add the reading status')
        const newBook = new Book(title, author, pages, status)
        myLibrary.push(newBook)
        mybook.appendChild(document.createTextNode(newBook.title))
        i++
    }
    
  }


*/
let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();
  let newItem = document.getElementById('item').value;
  let li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}


