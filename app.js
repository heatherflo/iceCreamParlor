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

// function orderVanilla() {
//   console.log("ordering vanilla")
//   let foundIceCream = iceCream.find(scoop => scoop.name == "Vanilla")
//   foundIceCream.quantity++
//   console.log(foundIceCream);
//   totalCost()
//   updateCart()
// }

// function orderChocolate() {
//   console.log("ordering chocolate")
//   let foundIceCream = iceCream.find(scoop => scoop.name == "Chocolate")
//   foundIceCream.quantity++
//   console.log(foundIceCream);
//   totalCost()
//   updateCart()
// }

// function orderStrawberry() {
//   console.log("ordering Strawberry")
//   let foundIceCream = iceCream.find(scoop => scoop.name == "Strawberry")
//   foundIceCream.quantity++
//   console.log(foundIceCream)
//   totalCost()
//   updateCart()
// }

// function orderSprinkles() {
//   console.log("ordering sprinkles")
//   let foundTopping = toppings.find(singleTop => singleTop.name == "Sprinkles")
//   foundTopping.quantity++
//   console.log(foundTopping)
//   totalCost()
//   updateCart()
// }

// function orderChocolateChips() {
//   console.log("ordering chocolate chips")
//   let foundTopping = toppings.find(singleTop => singleTop.name == "Chocolate Chips")
//   foundTopping.quantity++
//   console.log(foundTopping)
//   totalCost()
//   updateCart()
// }

// function orderPretzels() {
//   console.log("ordering pretzels")
//   let foundTopping = toppings.find(singleTop => singleTop.name == "Pretzels")
//   foundTopping.quantity++
//   console.log(foundTopping)
//   totalCost()
//   updateCart()
// }

function orderTopping(toppingName) {

  console.log("ordering topping", toppingName)
  let foundTopping = toppings.find(singleTop => singleTop.name == toppingName)

  foundTopping.quantity++
  console.log(foundTopping)
  totalCost()
  updateCart()

}

function orderIceCream(iceCreamName) {
  console.log("ordering ice cream")
  let foundIceCream = iceCream.find(scoop => scoop.name == iceCreamName)
  foundIceCream.quantity++
  console.log(foundIceCream)

  totalCost()
  updateCart()
}

function updateCart() {
  let template = ""

  iceCream.forEach(scoop => {

    if (scoop.quantity > 0) {
      template += `
    <div class="cardStyle d-flex justify-content-between px-2 text-light">
    <span>${scoop.name}</span>
    <span>${scoop.quantity}</span>
    <span>$${scoop.price}</span>
    <span>$${scoop.quantity * scoop.price}</span>
  </div>`
    }

  })

  toppings.forEach(singleTop => {
    if (singleTop.quantity > 0) {
      template += `<div class="cardStyle d-flex justify-content-between px-2 text-light">
    <span>${singleTop.name}</span>
    <span>${singleTop.quantity}</span>
    <span>$${singleTop.price}</span>
    <span>$${singleTop.price * singleTop.quantity}</span>
  </div>`
    }
  })


  console.log('template', template)
  document.getElementById('cart').innerHTML = template
}

function totalCost() {
  //need to know what item they picked
  //need to know what that item costs * how many they picked
  //need to log that to the console
  let total = 0
  iceCream.forEach(scoop => {
    if (scoop.quantity > 0) {
      total += scoop.quantity * scoop.price
    }
  })
  // another for each that adds in toppings
  toppings.forEach(singleTop => {
    if (singleTop.quantity > 0) {
      total += singleTop.quantity * singleTop.price
    }
  })
  console.log("total", total)
  document.getElementById("total").innerText = total.toFixed(2).toString()
}



function checkOut() {
  console.log("All Clear")
  document.getElementById('cart').innerHTML = ""
  document.getElementById('total').innerText = "0"

}