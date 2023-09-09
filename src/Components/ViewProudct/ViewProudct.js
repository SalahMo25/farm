import React, { useEffect, useState, useNavigate, useContext } from 'react';
import "./ViewProudct.css"
import pear from '../Images/pear.png';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { ShoppingCartContext, useShoppingCart } from '../../context/cartContext';
import { Modal } from 'react-bootstrap';






const ViewProudct = () => {
    const { getItemQuantity, increaseCartQuantity, removeFromCart, } = useShoppingCart();
  
    const quantity = getItemQuantity();
    const price = 20;

    const [quntity, setQuntity] = useState(1);
    const [total, setTotal] = useState(20);
    const [isLoading, setLoading] = useState(false);
    const [productDetails, setproductDetails] = useState(null);
    let params = useParams();

    async function getProductDetails(Harvest_id) {


        let { data } = await axios.get(`https://smartfarm.almostafabure.com/api/Harvest/${Harvest_id}`)
        setproductDetails(data.data);

    }


    useEffect(() => {
        getProductDetails(params.id);

        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 18000));
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        setLoading(true);
    }
    const quntityDecrement = () => {
        if (quntity > 1) {

            setQuntity(precount => precount - 1);
            setTotal(total => quntity * price - 20)

        }
    }
    const quntityIncrement = () => {
        if (quntity < 50) {
            setQuntity(precount => precount + 1);
            setTotal(total => quntity * price + 20)

        }
    }








    return (

        <div>
            {productDetails ? <div className='container'>
                <div className='row'>
                    <div id='item-img' className='row col-sm-6  col-lg-4 col-md-6   ' >
                        <img alt='product-img' className='col-4 ' src={productDetails.Image} id='product-img' />
                    </div>


                    <div id='details' className='container col-lg-8 col-md-6 row  col-sm-6 '>
                        <div className='row' >
                            <img alt='icon' src={pear} id='icon-pear' />
                            <p id='p-pear' >ORGANIC FRUITS</p>
                        </div>
                        <h1>{productDetails.Name}</h1>

                        <h5 id='phone'>Phone : 01222222222</h5>



                        <h5 id='price' >Price :{productDetails.Price} EGP / ton</h5>
                        <h5 id='Quntity' >Available Quntity : {productDetails.Quantity} ton</h5>

                        <div className="mt-auto">
                            
                        <Button id='book-btn'
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





                    </div>


                </div>

            </div > :
                <div> <i className='fas fa-spinner fa-spin fa-5x' id='loading'></i> </div>}


        </div>
    );
}

export default ViewProudct;
