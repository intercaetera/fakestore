import PropTypes from 'prop-types';
import Head from 'next/head';
import {CategoryPage} from '../../CategoryPage';
import {getProductsForCategory} from '../../shared/routes';

export default function ProductsCategory({category, ...props}) {
	return (
		<>
			<Head><title>fakestore | {category}</title></Head>
			<CategoryPage {...props} />
		</>
	);
}

export const getServerSideProps = async ({params}) => {
	const {category} = params;
	const products = await fetch(getProductsForCategory(category))
		.then(res => res.json());

	return ({
		props: {
			category,
			products,
		},
	});
};

ProductsCategory.propTypes = {
	category: PropTypes.string.isRequired,
};
