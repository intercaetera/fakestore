import PropTypes from 'prop-types';
import {Layout} from '../shared/Layout';
import {HStack} from '@chakra-ui/react';
import {CategoryCard} from './CategoryCard';

export const MainPage = ({categories}) => (
	<Layout>
		<HStack flexWrap='wrap' w='100%' justifyContent='center'>
			{categories.map(category => (
				<CategoryCard key={category} name={category} link={`/products/${category}`} />
			))}
		</HStack>
	</Layout>
);

MainPage.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
