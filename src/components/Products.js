import React, {useContext} from 'react';
import ProductContext from '../context/ProductContext';

// Components
import Product from './Product';

const Products = props => {
	const { product } = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
