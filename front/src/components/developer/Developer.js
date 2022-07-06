import React from 'react'
import './Developer.css'
import Terminal from '../../assets/terminal.png'

const Developer = () => {
  return (
    <div className='developers'>
        <div className="container">
            <div className="left">
                <h2>Workbook for recent conversions</h2>
                <p>Checkout the <span className='blue'>WORKING</span>, the <span className='blue'>quick start </span>
                or a guide below to intergrate your project with thousands of tokens and billions of liquidity. </p>
            </div>
            <div className="right">
                <div className="img-container">
                    <img style={{height: '350px'}} src={Terminal} alt="/" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Developer