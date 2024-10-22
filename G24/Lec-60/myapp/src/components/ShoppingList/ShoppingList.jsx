import React from 'react'
import Products from '../Products/Products'

const ShoppingList = () => {

    const products = [
        {
            name: 'Iphone 16',
            imgUrl: 'https://images.unsplash.com/photo-1726839662712-83fadeddecff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDE2fGVufDB8fDB8fHww',
            price: 86000
        },
        {
            name: 'ipad',
            imgUrl: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwYWR8ZW58MHx8MHx8fDA%3D',
            price: 120000
        },
        {
            name: 'headphone',
            imgUrl: 'https://images.unsplash.com/photo-1577174881658-0f30ed549adc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D',
            price: 10000
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