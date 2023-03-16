import React from 'react';
import ProductTitleHeader from '../shared/ProductTitleHeader';
import ProductPreviewCard from '../shared/ProductPreviewCard';
import productData from '../../data/products.json';
import ProductCategory from '../shared/ProductCateogry';

function Speakers() {
  const speakers = productData.filter(
    (product) => product.category === 'speakers'
  );

  return (
    <div>
      <ProductTitleHeader title='Speakers' />
      <div className='flex flex-col gap-[120px]'>
        {speakers
          .sort((a, b) => b.new - a.new || a.id - b.id)
          .map((speaker) => (
            <ProductPreviewCard
              key={speaker.id}
              image={speaker.image}
              name={speaker.name}
              description={speaker.description}
              newProduct={speaker.new}
            />
          ))}
      </div>
      <ProductCategory />
    </div>
  );
}

export default Speakers;
