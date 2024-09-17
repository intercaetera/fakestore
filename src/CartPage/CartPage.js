import PropTypes from 'prop-types';
import {useMemo} from 'react';
import {
	Box, Heading, Table, TableContainer, Thead, Tbody, Th, Tr, Image,
} from '@chakra-ui/react';
import {Cell} from './Cell';
import {Layout} from '../shared/Layout';
import {productPropType} from '../CategoryPage/types';

export const CartPage = ({cart}) => {
	const total = useMemo(() => cart.products.reduce((acc, product) => acc + (product.price * product.quantity), 0), [cart]);

	return (
		<Layout>
			<Box overflowX='auto' overflowY='hidden' maxW='100%'>
				<Table gap={[2, 4]}>
					<Thead fontSize='0.7rem' color='blackAlpha.600' textTransform='uppercase'>
						<Tr>
							<Th>#</Th>
							<Th>Image</Th>
							<Th>Product</Th>
							<Th>Price</Th>
							<Th>Quantity</Th>
							<Th>Value</Th>
						</Tr>
					</Thead>
					<Tbody>
						{cart.products.map((product, index) => (
							<Tr key={product.id}>
								<Cell isNumerical>{index}</Cell>
								<Cell>
									<Image h={8} w={8} src={product.image} objectFit='contain' />
								</Cell>
								<Cell>
									<Heading maxW='md' minW='sm'>
										{product.title}
									</Heading>
								</Cell>
								<Cell isNumerical>${product.price.toFixed(2)}</Cell>
								<Cell isNumerical>{product.quantity}</Cell>
								<Cell isNumerical data-testid='subtotal'>${(product.price * product.quantity).toFixed(2)}</Cell>
							</Tr>
						))}
						<Tr>
							<Cell colSpan={6}>
								<Heading fontSize='1.5rem' textAlign='right'>Total: ${total.toFixed(2)}</Heading>
							</Cell>
						</Tr>
					</Tbody>
				</Table>
			</Box>
		</Layout>
	);
};

CartPage.propTypes = {
	cart: PropTypes.shape({
		products: PropTypes.arrayOf(productPropType),
	}),
};
