import React from "react";
import { PureProductCard } from "../ProductCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

const mountComponent = props => cy.mount(
	<QueryClientProvider client={queryClient}>
		<PureProductCard {...props} />
	</QueryClientProvider>
)

const product = {
		id: 1,
		title: 'Test Product',
		price: 100,
		description: 'Epic product',
		category: 'category 1',
		image: 'https://placehold.co/200x200',
		rating: { rate: 5.0, count: 500 },
}

describe('<ProductCard />', () => {
	it('when clicking button, should submit add to cart query', () => {
		const addToCart = cy.stub()

		mountComponent({ product, addToCart })

		cy.contains('Add to cart')
			.scrollIntoView()
			.should('exist')
			.click()
			.then(() => {
				expect(addToCart).to.be.calledWith(product.id)
			})
	})
})
