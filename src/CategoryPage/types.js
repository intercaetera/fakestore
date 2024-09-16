import PropTypes from 'prop-types';

export const ratingPropType = PropTypes.shape({
	rate: PropTypes.number,
	count: PropTypes.number,
});

export const productPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	description: PropTypes.string,
	image: PropTypes.string,
	rating: ratingPropType.isRequired,
	quantity: PropTypes.number,
});
