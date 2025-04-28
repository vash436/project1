// const dscr= "jjjjjjjjjjjj"
// const maxvalue= 5
// const realvalue= dscr.slice(0, maxvalue)

// console.log(realvalue)

// array in JS
const products =[2, 3, 4, 5, 6]
const goods = ["a", "b", "c"]
const tojoin = goods.join("+")
const productsgoods = products.concat(goods)
products.push(10)
products.unshift(1)
products.pop()
products.shift()

// console.log(productsgoods)

const complexproducts = [[1,2,3], [4,5,6, [7,8,9]]]
const simpleproducts = complexproducts.flat()

// console.log(simpleproducts)

//Object
const obj = {
    gender:"female",
    age : 30,
    isComplete: false,
}

const objkey =Object.keys(obj)
const objvalue =Object.values(obj)
const a =obj.age
const b =obj["age"]

// console.log(a, b, objkey, objvalue)

//splice
const names = ["Danny", "Joe", "Sarah", "Molly"];
const namesCopy = [...names];
const slice = names.slice(1, 3)
const index = names.lastIndexOf("Molly")


// namesCopy.splice(0, 3, "Billi", "Norah");
// console.log(names);
// console.log(namesCopy)
// console.log(slice)
// console.log(index)
names.forEach( n=> (
    // console.log(n)
));

//flat
// const nums = [1, 2, 3, 4, [5, 6, [7, 8]], 9]

const flat = nums.flat(2);

// console.log(flat)


//map
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const total = number.reduce((total, currentVal) => total + currentVal, 10)
const max = number.reduce((a, b) => Math.max(a, b), -Infinity)
// console.log(max)


// const doubled = number.map(n => n*2)
// console.log(doubled
// )

const  posts = [
    // (title: "post1", author:'Dan')
]

//some

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const IsGreaterThan5 = nums.some((n) => n > 5);
 
console.log(IsGreaterThan5);


//name function, anonymous function, arrow function

function Handlelogin(IsLogged) {

    if{}
}
