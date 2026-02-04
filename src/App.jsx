import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductCard } from './components/ProductCard.jsx'

function App() {

  return (
    <>
      <main className='mt-5 container'>
        <h1> Product Reviews</h1>
        <div className='row'>

          <div className='col-md-4'>
            <ProductCard name={"Laptops"} description={"High performance laptops for all your needs."} price={999.99} />
          </div>
          <div className='col-md-4'>
            <ProductCard name={"Smartphones"} description={"Latest smartphones with cutting-edge features."} price={799.99} />
          </div>
          <div className='col-md-4'>
            <ProductCard name={"Headphones"} description={"Noise-cancelling headphones for immersive sound."} price={199.99} />
          </div>
        </div>


      </main>
    </>
  )
}

export default App
