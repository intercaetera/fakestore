import Head from 'next/head';
import {CartPage} from '../CartPage';
import {getCart, getProduct} from '../shared/routes';
import {mergeCartWithProducts} from '../shared/utils';

export default function Cart(props) {
	return (
		<>
			<Head><title>fakestore | cart</title></Head>
			<CartPage {...props} />
		</>
	);
}

export const getServerSideProps = async () => {
	const cart = await fetch(getCart())
		.then(res => res.json());

	const products = await Promise.all(cart.products
		.map(product => fetch(getProduct(product.productId))
			.then(res => res.json())));

	const cartWithProducts = mergeCartWithProducts(cart, products);

	return {
		props: {
			cart: cartWithProducts,
		},
	};
};
