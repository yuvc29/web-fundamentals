import Realm from "realm";
import Schema from '../db/Schema';


const realm = new Realm({
    path: "MyeRealm2",
    schema: [Schema],
});

function postTodo(title,dueDate, status, body){
    realm.write(() => {
            realm.create("Todos", {
              title: title,
              dueDate:dueDate,
              status:status,
              body:body
            });
        });
}
function getAllTodo(){
    return realm.objects("Todos")
}

function updateTodo(title, status){
    realm.write(() => {
        const list = realm.objects("Todos")
        for(let i = 0; i < list.length; i++){
            if(list[i].title === title){
                list[i].status = status;
                break
            }
        }
    })
}



export {postTodo,getAllTodo, updateTodo}