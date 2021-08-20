const buttonPrint = document.querySelector('#print');
buttonPrint.addEventListener('click', createPDF)


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
function createPDF() {
  var minhaTabela = document.querySelector('#myTable');
  var style = "<style>";
  style = style + "table {width: 100%;font: 20px Calibri;}";
  style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
  style = style + "padding: 2px 3px;text-align: center;}";
  style = style + "</style>";
  // CRIA UM OBJETO WINDOW
  var win = window.open('', '', 'height=700,width=700');
  win.document.write('<html><head>');
  win.document.write('<title>Empregados</title>');   // <title> CABEÇALHO DO PDF.
  win.document.write(style);                                     // INCLUI UM ESTILO NA TAB HEAD
  win.document.write('</head>');
  win.document.write('<body>');
  win.document.write(minhaTabela);                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
  win.document.write('</body></html>');
  win.document.close(); 	                                         // FECHA A JANELA
  win.print();                                                            // IMPRIME O CONTEUDO
}