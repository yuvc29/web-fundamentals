
function run(){
    let arr = [
        {
            fname: "John",
            lname: "Doe",
            age: 21
        },
        {
            fname: "Jane",
            lname: "Doe",
            age: 24,
        },
        {
            fname: "Chris",
            lname: "Evans",
            age: 28,
        }
    ]
    const ans = arr.filter( (user) => user.age < 25).map( (user) => (`${user.fname} ${user.fname}`) );
    console.log(ans)

}
run();

