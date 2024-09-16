import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {Center} from '@chakra-ui/react';

export const CategoryCard = ({name, link}) => (
	<Center
		h='xs'
		w='xs'
		p={2}
		textAlign='center'
		fontSize='3rem'
		background='gray.100'
		borderRadius='lg'
		as={NextLink}
		href={link}
	>
		{name}
	</Center>
);

CategoryCard.propTypes = {
	name: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};
