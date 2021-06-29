import React from 'react';
import FeatureItem from './components/FeatureItem';

const Category = ({ match }) => {
  
  const {
    params: { categoryID },
  } = match;

  // Basic info about the particular user with `userName`
  return (
    <main className="home-page-content">
      <FeatureItem products={[{title: categoryID, description: '', thumbnail: ''}]} />
  </main>
  );
};


export default Category;
