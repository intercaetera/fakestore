import PropTypes from 'prop-types';
import {Td} from '@chakra-ui/react';

export const Cell = ({isNumerical, children, ...rest}) => (
	<Td px={4} textAlign={isNumerical ? 'right' : 'left'} {...rest}>{children}</Td>
);

Cell.propTypes = {
	isNumerical: PropTypes.bool,
	children: PropTypes.node,
};
