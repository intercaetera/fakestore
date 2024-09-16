import PropTypes from 'prop-types';
import {productPropType} from './types';
import {Layout} from '../shared/Layout';
import {ProductCard} from './ProductCard';
import {SimpleGrid} from '@chakra-ui/react';

export const CategoryPage = ({products}) => (
	<Layout>
		<SimpleGrid w='100%' px={4} minChildWidth='xs' spacing={8} >
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</SimpleGrid>
	</Layout>
);

CategoryPage.propTypes = {
	products: PropTypes.arrayOf(productPropType),
};
