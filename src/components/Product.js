import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Product.css'
import { useDispatch } from 'react-redux'
import { add } from './store/CartSlice'
import Loader from '../pages/Loader'
const Product = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(data => data.json())
            .then(result => setProducts(result))
    }, [])

    const addToCart = (item)=>{
        dispatch(add(item))
    }

    const card = products?.map((item, i) => (
        <div className='cards'>
            <Card style={{ width: '18rem' }} key={i} >
                    <Card.Img variant="top" src={item.image} style={{width:'100px', height:'130px'}}  />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        INR. {item.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className='btn btn-primary' onClick={()=>addToCart(item)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))

    return (
        <div className='styleCard'>
            {
                products ? card : <Loader/>}
        </div>
    )
}

export default Product