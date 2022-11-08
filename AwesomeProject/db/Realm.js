import Realm from "realm";
import Schema from '../db/Schema';


const realm = new Realm({
    path: "myrealm",
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


export {postTodo,getAllTodo}