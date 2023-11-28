const iceCream = [{
  name: 'Chocolate',
  price: 1.25,
  quantity: 0
}, 
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
}, 
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
}, 
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Pretzels',
  price: .5,
  quantity: 0
}]

function orderVanilla() {
  
  console.log("ordering vanilla")
  let foundIceCream = iceCream.find(scoop=> scoop.name == "Vanilla")
  foundIceCream.quantity++
  console.log(foundIceCream);
}

function orderChocolate(){
  console.log("ordering chocolate")
  let foundIceCream = iceCream.find(scoop=> scoop.name =="Chocolate")
  foundIceCream.quantity++
  console.log(foundIceCream);
}

function orderStrawberry(){
  console.log("ordering Strawberry")
  let foundIceCream = iceCream.find(scoop=> scoop.name == "Strawberry")
  foundIceCream.quantity++
  console.log(foundIceCream)
}