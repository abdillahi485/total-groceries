// Good Luck 💪🏾
function getTotalPrice(items){
let price=0
// for(let key of items){
//     // if(key.length >1){
//     //     totalPrie=key.price +key.price
//     // }
    
//     console.log(key1)
// }
let totalPrice=0
for(let i=0; i<items.length; i++){
    if(items.length>1){
    totalPrice=items[0].price +items[1].price
    }else{
    totalPrice=items[i].price
    }
   
}
return totalPrice



}


console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
  ]))
  
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
  ]))
