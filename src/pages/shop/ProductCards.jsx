import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import RatingStars from '../../Components/RatingStars';

const ProductCards = ({ products }) => {
    console.log(products)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                products.map((product, index) => (
                    <div key={index} className='product__card'>
                        <div className='relative'>
                            <Link to={'/shop/${product._id}'}>
                                <img src={product.image} alt='product Image' className='max-h-96 md:h-64 w-full object-cover hover:scale-105 
                                                                              transition-all duration-300'
                                />
                            </Link>
                            <div className='hover:block absolute top-3 right-3'>
                                <button>
                                    <i className='ri-shopping-cart-2-line bg-primary p-1.5 text-white hover:bg-primary-dark'></i>
                                </button>
                            </div>
                        </div>
                        <div className='product__card__content'>
                            <h4>{product.name}</h4>
                            <p>${product.price} {product?.oldPrice? <s>{product.oldPrice}</s>: null}</p>
                            <RatingStars rating={product.rating}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
ProductCards.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            description: PropTypes.string,
            price: PropTypes.number.isRequired,
            oldPrice: PropTypes.number,
            image: PropTypes.string.isRequired,
            color: PropTypes.string,
            rating: PropTypes.number,
        })
    ).isRequired,
};


export default ProductCards