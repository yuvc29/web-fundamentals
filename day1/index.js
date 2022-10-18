function getdata(){
  fetch("https://dummyjson.com/users")
  .then((response) => response.json())
  .then((json) => createPage(json));
}

let template = [
  {
      key:"firstName",
      value:""
  },
  {
      key:"lastName",
      value:""
  },
  {
      key:"age",
      value:""
  },
  {
      key:"gender",
      value:""
  }
];

function createCard(user){
  let card = document.createElement("div");
  card.setAttribute("class", "card" );
  let img = document.createElement("img");
  img.setAttribute("class", "img" );
  img.setAttribute("src", user.image );
  card.appendChild(img);
  template.forEach(element => {
      let {key, value, formatter} = element;
      if (formatter)value = formatter(user);
      else value = user[key];
      let keys = document.createElement("h4");
      keys.setAttribute("class", "keys" );
      keys.innerText = key;
      let values = document.createElement("span");
      values.setAttribute("class", "values" );
      values.textContent = value;
      card.appendChild(keys);
      card.appendChild(values);
  });
  return card
}
function createPage(data){
  let page = document.getElementsByClassName("main-container")[0];
  data.users.forEach(element => {
      page.appendChild(createCard(element));
  });
  // page.appendChild(createCard(data.users[0]));
  return page;
}
getdata();



// let config = [
//   { key: "firstName", label: "Name" },
//   { key: "lastName", label: "Age" },
//   { key: "weight", label: "Weight" },
  
// ];

// function getdata(){
//   fetch("https://dummyjson.com/users")
//     .then((response) => response.json())
//     .then((json) => fetchDataFromServer(json));
// }

// function fetchDataFromServer(data) {
//   let user=data.users[0];
//   let card = document.createElement("div");
//   card.setAttribute("class", "card");
//   let img = document.createElement("img");
//   img.setAttribute("class", "img");
//   let details = document.createElement("div");
//   details.setAttribute("class", "details");
  
//   config.forEach((ele)=>{
//     let {key, label} = ele;
//     console.log(user)
//     label = user[key];
//     let col = document.createElement("div");
//     col.setAttribute("class", "col");
//     let field = document.createElement("h4");
//     field.setAttribute("class", "field");
//     let val = document.createElement("span");
//     val.setAttribute("class", "val");
//     field.innerText = key;
//     val.textContent = label;
//     col.appendChild(field);
//     col.appendChild(val);
//     details.appendChild(col);
//   });
//   img.setAttribute("src", user.image);
//   card.appendChild(img);
//   card.appendChild(details);
//   let main = document.getElementsByClassName("main-conatiner")[0];
//   main.appendChild(card);
// }
  
// getdata();

// /*

// let config = [
//   { key: "name", label: "Name", formatter: nameFormatter },
//   { key: "age", label: "Age" },
//   { key: "weight", label: "Weight",for },
  
// ];

// //apicall, card design, configurable, 
// //Avatar, Name, Age, Phone, Blood Group, Company, Position, weight,

// */
