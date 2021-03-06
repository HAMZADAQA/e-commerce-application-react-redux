import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Paginate from '../components/Pageinate'
import { Link } from 'react-router-dom'
import { listProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Fade from 'react-reveal/Fade';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';


const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList) 
    const { loading, error, products, pages, page } = productList;

    useEffect(() => {
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])
    
    return (
        <>
        <Meta/>
          {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light'>
              Go back</Link>}

           <h3 className='Latest__product'>Latest Product</h3>
           {loading ? (
            <Loader />
            ) : error ? (
            <Message variant='danger'>{error} </Message> 
            ) : ( 
                <>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                    
                    <div>
        <Fade top>
        <Product product={product} />
        </Fade>
      </div>
                    </Col>
                )) }
            </Row>
            <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
            </>
            )}   
            
        </>
    )
}

export default HomeScreen
