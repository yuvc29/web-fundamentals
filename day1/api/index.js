// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  let ele = document.getElementById("code");
  let tempData = data.filter((a) => a.id < 50);
  ele.innerHTML = JSON.stringify(tempData);
}

fetchDataFromServer();
