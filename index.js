var arrayCategory = []
var conteudo = [];

function getListCategory(){
  const url = `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=CSSiiAHFVeAqiv4OGeUxmMy61lPKwSqG`;
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  };
  let  request = fetch(url,options).then(function (data){
    return data.json();
  })
  request.then(function(listCategory){
    arrayCategory = listCategory.results;
    return createOptions(listCategory.results);
  })
  
}
getListCategory()

function createOptions(listCategory){
  let dataList = document.querySelector('#category')

  for(const names of listCategory){
    let options = document.createElement('option')
    options.value = names.list_name
    dataList.appendChild(options)
  }
}
function findListname(){
  let listName = document.querySelector('#list').value
  const selectedCategory = arrayCategory.find((category) => category.list_name == listName);
  getListOfBooks(selectedCategory.list_name_encoded);
}


function getListOfBooks(categoryName){
  const url = `https://api.nytimes.com/svc/books/v3/lists/current/${categoryName}.json?api-key=CSSiiAHFVeAqiv4OGeUxmMy61lPKwSqG`;
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  };
  let  request = fetch(url,options).then(function (data){
    return data.json();
  })
  request.then(function(listBooks){
    conteudo = listBooks.results;
    return fillTable(listBooks.results);
  })

}


function createLine(books){
  let line = document.createElement("tr");
  let tdRank = document.createElement("td");
  let tdTitle = document.createElement("td");
  let tdAuthor = document.createElement("td");

  tdRank.textContent = books.rank;
  tdTitle.textContent = books.title;
  tdAuthor.textContent = books.author;
  line.appendChild(tdRank);
  line.appendChild(tdTitle);
  line.appendChild(tdAuthor);

  return line;
}

function fillTable(arrayBooks) {
  let listBooks = arrayBooks.books
  var tbody = document.querySelector('tbody')
  listBooks.forEach(element => {
    let line  = createLine(element)
    tbody.appendChild(line)
  });

  $(document).ready( function () {
    $('#table').DataTable();
  } );
}


$("#print").click(function(){
  window.print();
  return false;
});

