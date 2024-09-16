import React from 'react';
import {CategoryPage} from '../CategoryPage';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const mountComponent = props => cy.mount(<QueryClientProvider client={queryClient}>
	<CategoryPage {...props} />
</QueryClientProvider>);

const products = [
	{
		id: 1,
		title: 'Test Product',
		price: 100,
		description: 'Epic product',
		category: 'category 1',
		image: 'https://placehold.co/200x200',
		rating: {rate: 5.0, count: 500},
	},
	{
		id: 2,
		title: 'Test Product 2',
		price: 50,
		description: 'Epic product 2',
		category: 'category 1',
		image: 'https://placehold.co/200x200',
		rating: {rate: 4.0, count: 200},
	},
];

describe('<CategoryPage />', () => {
	it('should show products', () => {
		mountComponent({products});

		products.forEach(product => {
			cy.contains(product.title).should('exist');
			cy.contains(`${product.price}.00`).should('exist');
		});
	});
});
