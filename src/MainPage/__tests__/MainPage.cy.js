import React from 'react';
import {MainPage} from '../MainPage';

describe('<MainPage />', () => {
	it('should show categories on the main page', () => {
		const categories = ['category 1', 'category 2'];
		cy.mount(<MainPage categories={categories} />);

		categories.forEach(category => {
			cy.contains(category).should('exist');
		});
	});
});

