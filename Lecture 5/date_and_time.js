//++++++++++++++++++++++++++ Date ++++++++++++++++++++++++++++
let mydate = new Date()
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.getFullYear());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

const myCreateDate = new Date(2024, 0, 5)
// console.log(myCreateDate.toDateString());


//+++++++++++++++++++++++++++++ Time +++++++++++++++++++++++=

let myTimeStam = Date.now()
// console.log(myTimeStam);
// console.log(myTimeStam);

let date = new Date()
// console.log(date.getDate());
// console.log(date.getFullYear());

const my_date = date.toLocaleDateString('default' , {
    weekday : "narrow",
    dayPeriod : "narrow"
})

console.log(my_date);
