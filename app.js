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
  totalCost()
}

function orderChocolate(){
  console.log("ordering chocolate")
  let foundIceCream = iceCream.find(scoop=> scoop.name =="Chocolate")
  foundIceCream.quantity++
  console.log(foundIceCream);
  totalCost()
}

function orderStrawberry(){
  console.log("ordering Strawberry")
  let foundIceCream = iceCream.find(scoop=> scoop.name == "Strawberry")
  foundIceCream.quantity++
  console.log(foundIceCream)
  totalCost()
}

function orderSprinkles(){
  console.log("ordering sprinkles")
  let foundTopping = toppings.find(singleTop=> singleTop.name == "Sprinkles")
  foundTopping.quantity++
  console.log(foundTopping)
  totalCost()
}

function orderChocolateChips(){
  console.log("ordering chocolate chips")
  let foundTopping = toppings.find(singleTop=> singleTop.name == "Chocolate Chips")
  foundTopping.quantity++
  console.log(foundTopping)
  totalCost()
}

function orderPretzels(){
  console.log("ordering pretzels")
  let foundTopping = toppings.find(singleTop=> singleTop.name == "Pretzels")
  foundTopping.quantity++
  console.log(foundTopping)
  totalCost()
}

function updateCart(){
 let  template=""
 iceCream.forEach(scoop=>{
  if (iceCream.quantity > 0){
    template += 
    `<div class="border border-white m-3 cardStyle d-flex justify-content-between px-2 text-light">
    <span>${iceCream.name}</span>
    <span>Qty</span>
    <span>Each</span>
    <span>Total</span>
  </div>`
   }
 })
 console.log(template)
 document.getElementById('cart').innerHTML = template
}

function totalCost(){
  //need to know what item they picked
  //need to know what that item costs * how many they picked
  //need to log that to the console
  let total = 0
  iceCream.forEach(scoop=> {
    if(scoop.quantity > 0) {
      total += scoop.quantity * scoop.price
    }
  })
  // another for each that adds in toppings
    toppings.forEach(singleTop=>{
      if(singleTop.quantity >0) {
        total += singleTop.quantity * singleTop.price
      }
    })
  console.log("total", total)
  document.getElementById("total").innerText = total.toFixed(2).toString()
}