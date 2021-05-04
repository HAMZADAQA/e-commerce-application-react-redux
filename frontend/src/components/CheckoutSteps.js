import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const CheckoutSteps = ({ step1, step2, step3, step4}) => {
    return (
        <div className='row hamza'>
        <Nav className=' mb-4'>
        <Nav.Item>
            {step1 ? (
                <LinkContainer to='/login'>
                    <Nav.Link className={step1 ? 'fas fa-check-circle' : 'hamza'}>Sign In</Nav.Link>
                </LinkContainer>
            ): (
                <Nav.Link disabled>Sign In</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step2 ? (
                <LinkContainer to='/shipping'>
                    <Nav.Link className={step2 ? 'fas fa-check-circle' : '' }>Shipping</Nav.Link>
                </LinkContainer>
            ): (
                <Nav.Link disabled>Shpping</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step3 ? (
                <LinkContainer to='/payment'>
                    <Nav.Link className={step3 ? 'fas fa-check-circle' : '' }>Payment</Nav.Link>
                </LinkContainer>
            ): (
                <Nav.Link disabled>Payment</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step4 ? (
                <LinkContainer to='/placeorder'>
                    <Nav.Link className={step4 ? 'fas fa-check-circle' : 'hamza'}>Place Order</Nav.Link>
                </LinkContainer>
            ): (
                <Nav.Link disabled>Place Order</Nav.Link>
            )}
        </Nav.Item>
    </Nav>
    </div>
        // <div className="row checkout-steps">
        //     <div className={step1 ? 'active': ''} >
        //     <Nav.Item>
        //         {step1 ? (
        //             <LinkContainer to='/login'>
        //                 <Nav.Link>Sign In</Nav.Link>
        //             </LinkContainer>
        //         ): (
        //             <Nav.Link >Sign In</Nav.Link>
        //         )}
        //     </Nav.Item>
        //     </div>
        //     <div className={step2 ? 'active': ''} >
        //     <Nav.Item>
        //         {step2 ? (
        //             <LinkContainer to='/shpping'>
        //                 <Nav.Link>Shipping</Nav.Link>
        //             </LinkContainer>
        //         ): (
        //             <Nav.Link >Shpping</Nav.Link>
        //         )}
        //     </Nav.Item>
        //     </div>
        //     <div className={step3 ? 'active': ''} >
        //     <Nav.Item>
        //         {step3 ? (
        //             <LinkContainer to='/payment'>
        //                 <Nav.Link>Payment</Nav.Link>
        //             </LinkContainer>
        //         ): (
        //             <Nav.Link >Payment</Nav.Link>
        //         )}
        //     </Nav.Item>
        //     </div>
        //     <div className={step4 ? 'active': ''} >
        //     <Nav.Item>
        //         {step4 ? (
        //             <LinkContainer to='/placeorder'>
        //                 <Nav.Link>Place Order</Nav.Link>
        //             </LinkContainer>
        //         ): (
        //             <Nav.Link >Place Order</Nav.Link>
        //         )}
        //     </Nav.Item>
        //     </div>

        // </div>

    )
}

export default CheckoutSteps
