import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css'
import Stack from 'react-bootstrap/Stack';
import wheat from '../Images/wheat.png';
import Fade from 'react-bootstrap/Fade';
import { useEffect, useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ShoppingCartContext } from '../../context/cartContext';




const Cart = ({ id, quantity,  onIncrement, onDecrement }) => {
    const { cartItems } = useContext(ShoppingCartContext);
    const [quntity, setQuntity] = useState(0);
    const [open, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const { removeFromCart } = useShoppingCart();

    const quntityDecrement = () => {
        if (quntity > 0) {

            setQuntity(quntity - 1);
        }
    }

    const quntityIncrement = () => {
        if (quntity < 50) {
            setQuntity(quntity + 1);
        }
    }


    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 1800));
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);
    const handleClick = () => {
        setLoading(true);
        setOpen(!open)

    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setLoading(true);
    }


    const item = storeItems.find((i) => i.id === id);
    if (item == null) return null;

    return (
        <div className='all'>

            {cartItems.map((product) => (
                <div className="container">





                    <div id='cart-item'  >
                        <div className='row' >
                            <img className='col-lg-4 col-md-3 ' src={wheat} alt='product-img' />
                            <div id='discrption' className='col-md-1 col-sm-1'>
                                <h3 >{item.name} {" "} </h3>
                                {/* <h4>50.000 EGP</h4> */}
                                {quantity > 1 && (
                                    <span className="text-muted" style={{ fontSize: "0.65rem" }}>
                                        x{quantity}
                                    </span>
                                )}
                            </div>

                            <div id='cart-quntity' className=' col-lg-2 input-group'  >
                                <button id="btnDec" className='input-group-text  ' onClick={quntityDecrement} type="button">-</button>
                                <div id='quntityInput' className='form-control text-center  '>{quntity}</div>
                                <button id='btnInc' className='input-group-text ' onClick={quntityIncrement} type="button">+</button>
                            </div>

                            <h5 className='col-4 col-lg-3  text-center' >150.000 EGP</h5>

                            <Button id='btn-remove' className='col-1 col-md-2  ' variant="danger">Remove</Button>
                        </div>
                    </div>


                    <Button id='btn-book'
                        className='row col-md-4'
                        disabled={isLoading}
                        onClick={!isLoading ? handleShow : null}>
                        {isLoading ? 'Booked' : 'Book'}
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Note</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>سيتم الغاء الحجز بعد 24 ساعه من الحجز ، الرجاء التواصل مع الرقم لتأكيد الحجز ،الدفع عند الاستلام.
                        </Modal.Body>

                    </Modal>









                </div>

            ))}

        </div>
    );
}

export default Cart;
