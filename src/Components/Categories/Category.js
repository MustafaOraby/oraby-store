import React from 'react'

function Category({CategoryImage,CategoryName}) {
  return (
    <div className='m-auto mb-10 2xl:m-5 '>
    <div className='   w-60 rounded-full overflow-hidden ' >
        <img src={CategoryImage} alt='productImg' className='  ' />
    </div>
        <h5 className='text-center text-3xl text-slate-700 '>{CategoryName}</h5>
    </div>

   
  )
}

export default Category