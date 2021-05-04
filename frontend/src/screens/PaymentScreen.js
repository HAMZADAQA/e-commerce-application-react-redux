import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

const PaymentScreen = ({ history }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart)
    const { shippingAddress } = cart

    if(!shippingAddress) {
        history.push('/shipping')
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    

    const submiHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    } 

    return (
        <div>
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submiHandler}>
            <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label>
        <Col>
            <Form.Check type='radio' label='PayPal or Credit Card'
             id='PayPal' name='paymentMethod'
            value='PayPal' checked onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check>

            {/* <Form.Check type='radio' label='Stripe'
             id='Stripe' name='paymentMethod'
            value='Stripe'  onChange={(e) => setPaymentMethod(e.target.value)}>
            </Form.Check> */}
        </Col>
        </Form.Group>
            <Button type='submit' variant='primary'>
                Continue
            </Button>
            </Form>
        </FormContainer>
    </div>
 
    )
}

export default PaymentScreen
