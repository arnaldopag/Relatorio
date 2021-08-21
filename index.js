
function get(){

  const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=CSSiiAHFVeAqiv4OGeUxmMy61lPKwSqG";
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  };
  let  request = fetch(url,options).then(function (data){
    return data.json();
  })
  request.then(function(books){
    return fillTable(books);
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

function fillTable(arrayBooks){
    
  let listBooks = arrayBooks.results.books
  var tbody = document.querySelector('tbody')
  listBooks.forEach(element => {
    let line  = createLine(element)
    tbody.appendChild(line)
  });

  $(document).ready( function () {
    $('#Table').DataTable();
  } );
}
get();

function getInput(){
  var titleInput = document.querySelector('#titulo').value;
  var authorInput = document.querySelector('#autor').value;

  console.log(authorInput)
  console.log(titleInput)
}
