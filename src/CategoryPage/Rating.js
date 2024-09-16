import {Heading, Box} from '@chakra-ui/react';
import {ratingPropType} from './types';

export const Rating = ({rating}) => (
	<Heading fontSize='0.7rem' color='blackAlpha.600'>
		{rating.rate.toFixed(1)} / 5.0
		<Box as='span' color='goldenrod' px={1}>★</Box>
		({rating.count})
	</Heading>
);

Rating.propTypes = {
	rating: ratingPropType,
};
