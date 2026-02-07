import { useState } from 'react'
{/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */}
import './App.css'
import { ProductCard } from './components/ProductCard.jsx'
import Calculator from './components/Calculator.jsx'


function App() {

  return (
    <div className='container mt-5'>
      <header className="text-center mb-5">
        <h1 className="display-5 fw-bold text-primary">React Component Showcase</h1>
        <p className="text-muted">Interactive Calculator & Product Display</p>
      </header>

      <div className='row'>

        {/* LEFT COLUMN: The Calculator */}
        <div className='col-lg-5 mb-5'>
          <div className="card shadow-sm p-4 border-0 bg-light h-100">
            <h2 className="text-center mb-4">Interactive Calculator</h2>
            <Calculator />
          </div>
        </div>

        {/* RIGHT COLUMN: The Products */}
        <div className='col-lg-7'>
          <h2 className="mb-4 text-center">Featured Product Reviews</h2>
          <div className='row g-4'>

            <div className='col-md-6'>
              <ProductCard
                name={"Laptops"}
                description={"High performance laptops for all your needs."}
                price={999.99}
                imageURL="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
              />
            </div>

            <div className='col-md-6'>
              <ProductCard
                name={"Smartphones"}
                description={"Latest smartphones with cutting-edge features."}
                price={799.99}
                imageURL="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
              />
            </div>

            <div className='col-md-12'>
              <ProductCard
                name={"Headphones"}
                description={"Noise-cancelling headphones for immersive sound."}
                price={199.99}
                imageURL="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
              />
            </div>
          </div>
        </div>

      </div>

      <footer className="mt-5 py-4 text-center border-top">
        <p className="text-muted small">React Lab - Day 1 & 2 Refined</p>
      </footer>
    </div>
  )
}

export default App