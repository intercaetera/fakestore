import {VStack} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import {Navigation} from './Navigation';

export const Layout = ({children}) => (
	<VStack w='100%' alignItems='flex-start'>
		<Navigation />
		{children}
	</VStack>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
