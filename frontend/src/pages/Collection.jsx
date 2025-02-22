import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title  from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products , search , showSearch} = useContext(ShopContext);
  const [showFilter , setShowFilter] = useState(false);
  const [filterProducts , setFilterProducts] = useState([]);
  const [category , setCategory] = useState([]);
  const [subCategory , setSubCategory] = useState([]);
  const [sortType , setSortType] = useState('relevant');

  const toggleCategory = (event) => {

    if (category.includes(event.target.value)) {
      
      setCategory(prev => prev.filter(item => item !== event.target.value))

    }

    else{

      setCategory(prev => [...prev , event.target.value])

    }

  } 

  const toggleSubCategory = (event) => {

    if (subCategory.includes(event.target.value)) {
      
      setSubCategory(prev => prev.filter(item => item !== event.target.value))

    }

    else{

      setSubCategory(prev => [...prev , event.target.value])

    }

  }

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch , search) {

      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      
    }

    if (category.length > 0) {

      productsCopy = productsCopy.filter(item => category.includes(item.category))

    }

    if (subCategory.length > 0) {

      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
      
    }

    setFilterProducts(productsCopy)

  }

  const sortProduct = () => {

    let filterProductCopy = filterProducts.slice();

    switch (sortType) {

      case 'low-high':

        setFilterProducts(filterProductCopy.sort((a , b) => (a.price - b.price)))
        
        break;

      case 'high-low':

        setFilterProducts(filterProductCopy.sort((a , b) => (b.price - a.price)))

        break;
    
      default:

        applyFilter();
        break;
    }

  }

  useEffect(() => {

    applyFilter()

  } , [category , subCategory , search , showSearch])

  useEffect(() => {

    sortProduct()

  } , [sortType])

  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

        {/* filter options */}

        <div className='min-w-60'>

            <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => (setShowFilter(!showFilter))}>FILTERS
              <img src={assets.dropdown_icon} alt="Dropdown Icon" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
            </p>

            {/* category filter */}

            <div className={`border border-gray-300 py-3 pl-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>

              <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

                <p className='flex gap-2'>

                  <input type="checkbox" value={'Men'} className='w-3' onChange={toggleCategory} /> Men

                </p>

                <p className='flex gap-2'>

                  <input type="checkbox" value={'Women'} className='w-3' onChange={toggleCategory} /> Women

                </p>

                <p className='flex gap-2'>

                  <input type="checkbox" value={'Kids'} className='w-3' onChange={toggleCategory} /> Kids

                </p>

              </div>

            </div>

            {/* subcategory filter */}

            <div className={`border border-gray-300 py-3 pl-5 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>

              <p className='mb-3 text-sm font-medium'>  TYPE</p>

              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

                <p className='flex gap-2'>

                  <input type="checkbox" value={'Topwear'} className='w-3' onChange={toggleSubCategory} /> Topwear

                </p>

                <p className='flex gap-2'>

                  <input type="checkbox" value={'Bottomwear'} className='w-3' onChange={toggleSubCategory} /> Bottomwear

                </p>

                <p className='flex gap-2'>

                  <input type="checkbox" value={'Winterwear'} className='w-3' onChange={toggleSubCategory} /> Winterwear

                </p>

              </div>

            </div>

        </div>

        {/* right side */}

        <div className='flex-1'>

            <div className='flex justify-between text-base sm:text-2xl mb-4'>

                <Title text1={'ALL'} text2={'COLLECTIONS'} />

                {/* product sort */}

                <select onChange={(event) => (setSortType(event.target.value))} className='border-2 border-gray-300 text-sm px-2'>

                    <option value="relevant">Sort by : Relevant</option>
                    <option value="low-high">Sort by : Low to High</option>
                    <option value="high-low">Sort by : High to Low</option>

                </select>

            </div>

            {/* map products */}

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    
                    {
  
                      filterProducts.map((item , index) => (
  
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
  
                      ))
  
                    }
                  
            </div>

        </div>

    </div>

  )

}

export default Collection