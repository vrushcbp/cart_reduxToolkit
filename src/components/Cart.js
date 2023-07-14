import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { remove } from './store/CartSlice'
import EmptyCart from '../pages/EmptyCart'
const Cart = () => {
  const productCart = useSelector(state=> state.cart)

  const dispatch= useDispatch()

  const removeItem =(id)=>{
    dispatch(remove(id))
  }

  const card = productCart?.map((item, i) => (
    <div  style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
        <Card style={{ width: '18rem' }} key={i} >
                <Card.Img variant="top" src={item.image} style={{width:'100px', height:'130px'}}  />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    INR. {item.price}
                </Card.Text>
            </Card.Body>
            <Card.Footer> 
                 <Button className='btn btn-danger' onClick={()=> removeItem(item.id)} >Remove Item</Button> 
            </Card.Footer> 
        </Card>
    </div>
))
  return (
    <div className='row'>
      {
        (Object.keys(productCart).length) === 0 ?
        <EmptyCart/> : card
      }
    </div>
  )
}

export default Cart