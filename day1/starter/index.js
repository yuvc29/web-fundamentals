
let config = [
  { key: "firstName", label: "Name" },
  { key: "lastName", label: "Age" },
  { key: "weight", label: "Weight" },
  
];

function getdata(){
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => fetchDataFromServer(json));
}

function fetchDataFromServer(data) {
  let user=data.users[0];
  let card = document.createElement("div");
  card.setAttribute("class", "card");
  let img = document.createElement("img");
  img.setAttribute("class", "img");
  let details = document.createElement("div");
  details.setAttribute("class", "details");
  
  config.forEach((ele)=>{
    let {key, label} = ele;
    console.log(user)
    label = user[key];
    let col = document.createElement("div");
    col.setAttribute("class", "col");
    let field = document.createElement("h4");
    field.setAttribute("class", "field");
    let val = document.createElement("span");
    val.setAttribute("class", "val");
    field.innerText = key;
    val.textContent = label;
    col.appendChild(field);
    col.appendChild(val);
    details.appendChild(col);
  });
  img.setAttribute("src", user.image);
  card.appendChild(img);
  card.appendChild(details);
  let main = document.getElementsByClassName("main-conatiner")[0];
  main.appendChild(card);
}
  
getdata();

/*

let config = [
  { key: "name", label: "Name", formatter: nameFormatter },
  { key: "age", label: "Age" },
  { key: "weight", label: "Weight",for },
  
];

//apicall, card design, configurable, 
//Avatar, Name, Age, Phone, Blood Group, Company, Position, weight,

*/