import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProduct'; 

function Product() {
    const {productId} = useParams();
    const {products, addToCart} = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');
    
    const fetchProductData = () => {
        products.map((item) => {
            if(item._id === productId){
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        });
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    // ✅ NEW: Auto scroll to top when product changes
    useEffect(() => {
        // Scroll to top when productId changes (when new product is loaded)
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // For smooth scrolling animation
        });
        
        // Reset size selection when product changes
        setSize('');
    }, [productId]);

    if (!productData) {
        return <div className='opacity-0'>Loading...</div>;
    }

    return (
        <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                
                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {productData.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                src={item}
                                key={index}
                                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                                alt=""
                            />
                        ))}
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>

                {/* Product Info */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    
                    {/* Star Ratings */}
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className='w-3 h-3'/>
                        <img src={assets.star_icon} alt="" className='w-3 h-3'/>
                        <img src={assets.star_icon} alt="" className='w-3 h-3'/>
                        <img src={assets.star_icon} alt="" className='w-3 h-3'/>
                        <img src={assets.star_dull_icon} alt="" className='w-3 h-3'/>
                        <p className='pl-2'>(122)</p>
                    </div>
                    
                    <p className='mt-5 text-3xl font-medium'>${productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    
                    {/* Size Selection */}
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 ${item === size ? 'bg-black text-white' : ''}`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={() => addToCart(productData._id, size)} 
                        className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
                    >
                        ADD TO CART
                    </button>
                    
                    <hr className='mt-8 sm:w-4/5'/>
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original Product</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
            </div>

            {/* Description & Review Section */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm cursor-pointer'>Description</b>
                    <p className='border px-5 py-3 text-sm cursor-pointer'>Reviews (122)</p>
                </div>
                
                <div className='flex flex-col gap-4 border border-t px-6 py-6 text-sm text-gray-500'>
                    <p>Experience ultimate comfort with this premium cotton crew neck t-shirt. Crafted from 100% organic cotton with a soft, breathable fabric that feels great against your skin. Features a classic fit that's neither too loose nor too tight, making it perfect for casual outings, gym sessions, or lounging at home.</p>
                    
                    <p>The durable construction ensures it maintains its shape and color even after multiple washes. Available in multiple sizes for the perfect fit. Maximize your workout performance with this moisture-wicking athletic t-shirt engineered with advanced fabric technology.</p>
                </div>
            </div>

            {/* Related Products */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        </div>
    );
}

export default Product;
