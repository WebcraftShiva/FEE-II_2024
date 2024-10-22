import React from 'react'
import Products from '../Products/Products'

const ShoppingList = () => {

    const products = [
        {
            name: 'Burger',
            imgUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QnVyZ2VyfGVufDB8fDB8fHww',
            price: 150
        },
        {
            name: 'Pizza',
            imgUrl: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8fDB8fHww',
            price: 350
        },
        {
            name: 'Pasta',
            imgUrl: 'https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHx8fDA%3D',
            price: 250
        },
    ]
  return (
    <section>
        {products.map((product,idx)=>{
            return (
                <Products key={idx} name={product.name} 
                imgUrl={product.imgUrl} price={product.price}/>
            )
        })}
    </section>
  )
}

export default ShoppingList