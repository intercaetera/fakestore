import PropTypes from 'prop-types';
import {Button as ChakraButton} from '@chakra-ui/react';

export const Button = ({children, ...props}) => (
	<ChakraButton
		px={3}
		py={1}
		borderBottom='2px solid'
		borderBottomColor='transparent'
		_hover={{
			borderBottomColor: 'blackAlpha.800',
		}}
		{...props}
	>
		{children}
	</ChakraButton>
);

Button.propTypes = {
	children: PropTypes.node,
};
