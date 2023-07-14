import React from 'react'
import emptyCart from '../Assets/empty.png'
import Button from 'react-bootstrap/Button'
import Toast from 'react-bootstrap/Toast';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div style={{ backgroundColor:'rgb(238 238 231)', height:'500px'}}>
        <div style={{marginTop:'130px'}}>
            <img src={emptyCart} alt='Not-Found' />
        </div>
        <div style={{marginTop:'20px', fontFamily:'monospace'}}>
            <h1>Ooopppss..! Please add items to the cart...</h1>
            <Link to='/'>
                <Button to='/' >Back</Button>
            </Link>
        </div>
    </div>
  )
}

export default EmptyCart
