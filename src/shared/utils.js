export const mergeCartWithProducts = (cart, products) => {
	const productsMap = new Map(products.map(({id, ...product}) => ([id, product])));

	return ({
		...cart,
		products: cart.products.map(({productId, quantity}) => ({
			id: productId,
			...productsMap.get(productId),
			quantity,
		})),
	});
};
