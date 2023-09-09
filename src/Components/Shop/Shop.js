
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useState, useEffect , useContext } from 'react';
import './Shop.css'
import {  useNavigate  } from 'react-router-dom';

import { ShoppingCartContext } from '../../context/cartContext';



const Shop = () => {
    const view = useNavigate()
    let {dataProduct} = useContext(ShoppingCartContext);
   
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {dataProduct.map((product, i) =>
                        <div key={i} className='row col-xl-4 col-lg-6 col-md-12 col-sm-12 justify-content-center' id='item'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img id='img' variant="top" src={product.Image} />
                                <Card.Body>
                                    <Card.Title>{product.Name}</Card.Title>
                                    <h3>{product.Price} EGP /tons</h3>
                                    <Button id='btn' onClick={() => view(`/viewproduct/${product.Harvest_id}`)}  >View Product</Button>
                                </Card.Body>
                            </Card>
                        </div>


                    )}



                </div>
            </div>
        </div>
    );
}

export default Shop;



