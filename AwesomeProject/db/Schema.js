
const Schema = {
    name: "Todo",
    primaryKey: "_id",
    properties: {
        _id: "objectId",
        title: "string",
        duDate:"string",
        status:"string",
        body:"string"
    }
};

export default Schema
