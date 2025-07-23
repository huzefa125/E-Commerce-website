import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
  const { products,search,showsearch } = useContext(ShopContext)
  const [showfilter, setshowfilter] = useState(false);
  const [filterProduct, setfilterProduct] = useState([]);
  const [categories, setcategories] = useState([]);
  const [subcategories, setsubcategories] = useState([]);
  const [sortType, setsortType] = useState('relevant') 

  const toggleCategory = (e) => {
    if(categories.includes(e.target.value)){
      setcategories(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setcategories(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subcategories.includes(e.target.value)) {
      setsubcategories(prev => prev.filter(item => item !== e.target.value))  
    }
    else{
      setsubcategories(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

  if(showsearch && search){
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

    if (categories.length > 0) {
      productsCopy = productsCopy.filter(item => categories.includes(item.category))
    }

    if(subcategories.length > 0){
      productsCopy = productsCopy.filter(item => subcategories.includes(item.subCategory))
    }
    
    setfilterProduct(productsCopy);
  }

  const sortProduct = () => {
    let fpCopy = filterProduct.slice()

    switch (sortType) {
      case 'low-high':
        setfilterProduct(fpCopy.sort((a,b) => (a.price - b.price)))
        break;
      case 'high-low':
        setfilterProduct(fpCopy.sort((a,b) => (b.price - a.price)))
        break;
      default:
        applyFilter();
        break;
    }
  }

 
  useEffect(() => {
    setfilterProduct(products);
  }, [products])

  // Filter apply karne ke liye  
  useEffect(() => {
    applyFilter();
  }, [categories, subcategories, products,search,showsearch])

  // Sort apply karne ke liye
  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img 
            src={assets.dropdown_icon} 
            alt="" 
            className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`}
          />
        </p>
        
        {/* Categories Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/>MEN
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} />WOMEN
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/>KIDS
            </p>
          </div>
        </div>

        {/* Sub Categories */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>SUB-CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2' onChange={(e)=>setsortType(e.target.value)}>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProduct.map((item, index) => (
              <ProductItem 
                key={item._id || index} 
                name={item.name} 
                id={item._id} 
                price={item.price} 
                image={item.image} 
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection
