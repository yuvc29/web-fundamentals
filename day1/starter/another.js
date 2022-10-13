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