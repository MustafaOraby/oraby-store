import React from 'react';
import { useAuth } from '../../context/GlobalState';
import ProductContainer from '../../Components/Products/productContainer';


function Favorite() {
  const { favoriteBasket } = useAuth();

  return (
    <div className='container mx-auto px-5 py-24 2xl:py-28'>
      <div className='flex flex-wrap items-center justify-between'>
      {favoriteBasket.map((favItem) => (
        <ProductContainer
          key={favItem.id} 
          id={favItem.id}
          productName={favItem.productName}
          details={favItem.details}
          rating={favItem.rating}
          price={favItem.price}
          image={favItem.image}
          

        />
      )
      
      )
      
      }
    </div>
    </div>
  );
}

export default Favorite;
