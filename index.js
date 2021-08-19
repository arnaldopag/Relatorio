    // WARNING: fetch is not supported in IE, so it may need a polyfill

function execute() {
    const apiKey = "CSSiiAHFVeAqiv4OGeUxmMy61lPKwSqG"
  const url = "https://api.nytimes.com/svc/books/v3/lists.json?api-key=CSSiiAHFVeAqiv4OGeUxmMy61lPKwSqG";
  const options = {
    method: "GET",
    headers: {
      "Accept": "application/json"
    },
  };
  fetch(url, options).then(
    response => {
      if (response.ok) {
        return response.text();
      }
      return response.text().then(err => {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          errorMessage: err,
        });
      });
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}