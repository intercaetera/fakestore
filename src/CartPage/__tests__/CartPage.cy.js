import React from 'react';
import {CartPage} from '../CartPage';

const product1 = {
	id: 1,
	title: 'Test Product',
	price: 100,
	description: 'Epic product',
	category: 'category 1',
	image: 'https://placehold.co/200x200',
	quantity: 5,
};

const product2 = {
	id: 2,
	title: 'Test Product',
	price: 50,
	description: 'Epic product',
	category: 'category 1',
	image: 'https://placehold.co/200x200',
	quantity: 3,
};

describe('<CartPage />', () => {
	it('should display and calculate subtotal', () => {
		cy.mount(<CartPage cart={{products: [product1]}} />);

		cy.get('[data-testid="subtotal"]')
			.should('have.text', '$500.00');
	});

	it('should display and calculate total', () => {
		cy.mount(<CartPage cart={{products: [product1, product2]}} />);

		cy.contains('Total: $650.00')
			.should('exist');
	});
});
