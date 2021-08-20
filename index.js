var book = {
  "rank"  : "" , 
  "title" : "" ,
  "author": "" ,
  "date"  : "" ,
}

function get(){

  const url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=CSSiiAHFVeAqiv4OGeUxmMy61lPKwSqG";
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  };
  let  request = fetch(url,options).then(function (data){
    return data.json()
  })
  request.then(function(books){
    return fillTable(books.results)
  })
}

function fillTable(arrayBooks){
    
  let listBooks = arrayBooks.books
  var table = document.getElementById('table')
  listBooks.forEach(element => {
   console.log(element.title)
  });
}