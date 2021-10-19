import { useState, useEffect } from "react";

export default function useCart(productsWithUnits) {
    const [TotalCartItems, setTotalCartItems] = useState(0);
    const [cart, setCart] = useState(()=>{
        try{
          //save cart data into local storage
          return JSON.parse(localStorage.getItem("myCart")) ?? []
        }
        catch{
          console.error("the cart coudn't be parsed into json.");
          return [];
        }
      });
    
      //save any change in the local storage
      useEffect(()=> localStorage.setItem("myCart", JSON.stringify(cart)), [cart]);

    function addToCart(id) {
        setCart((items => {
            //get the item object by id
            const product = productsWithUnits.find(i => i.id === id);
            const itemInCart = items.find(i => i.id === product.id);
            //already in cart
            if (itemInCart) {
                return items.map(i =>
                    i.id === product.id ? { ...i, quantity: i.quantity++ } : i
                )
            }
            else {
                return [...items, { ...product, quantity: 1 }];
            }
        }))
    }

    function updateQuanity(pId, newQuantity){
        setCart((items=>{
             items.map(i=>{
                if (i.id === pId){
                    if (i.units >= newQuantity){
                        return items.map(i=> i.id === pId ? 
                            {...i, quantity:newQuantity, noUnits:false} : i)
                       // return [...items,{...i, quantity:quantity, noUnits:false}] 
                    }
                    else{
                        return items.map(i=> i.id === pId ? {...i, noUnits:true} : i)
                        //return [...items, { ...i, noUnits: true }];
                        //return items.map(i=> i.id !== pId ?)
                        //return[...items,{...i, noUnits:true}]
                    }
                }            
                //return [items]            
            })
               // (i.id === pId && i.units >= quantity) ? {...i, quantity:quantity, noUnits:false} : {...i, noUnits:true})
        }))
    }
    function deleteItem(pId){
        setCart((items=> {
           return items.filter(i=> i.id != pId)}))
    }
    function emptyCart(){
        setCart([]);
    }
    let totalitems = 0
  //  function calculateTotalCartItems(){
       totalitems = cart.reduce((total, item)=>total + item.quantity, 0)
   //    setTotalCartItems(totalitems)
         
  // }
    return{
        cart, 
        addToCart, 
        updateQuanity, 
        deleteItem, 
        emptyCart, 
        totalitems
    }
}