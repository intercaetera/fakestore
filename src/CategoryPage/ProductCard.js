import {
	Heading, Image, VStack, useToast,
} from '@chakra-ui/react';
import {productPropType} from './types';
import {Rating} from './Rating';
import {Button} from '../shared/Button';
import {IconShoppingBagPlus} from '@tabler/icons-react';
import {useMutation} from '@tanstack/react-query';
import {getCart} from '../shared/routes';

export const ProductCard = ({product}) => {
	const toast = useToast();

	const mutation = useMutation({
		mutationFn() {
			const request = fetch(getCart(), {
				method: 'PUT',
				body: JSON.stringify({
					userId: 3,
					date: '2019-12-10',
					products: [{productId: product.id, quantity: 1}],
				}),
			});

			toast.promise(request, {
				success: {title: 'Added to cart', description: product.title},
				error: {title: 'Failed to add to cart'},
				loading: {title: 'Adding to cart...'},
			});
		},
	});

	return (
		<VStack maxW='xs' minW='xs' flex={1} bg='gray.100' borderRadius='lg' justifySelf='center'>
			<Image
				src={product.image}
				alt={`Image of ${product.title}`}
				h='xs'
				w='xs'
				mixBlendMode='multiply'
				objectFit='contain'
				p={4}
			/>
			<VStack p={2} alignItems='flex-start' w='xs' bg='white' spacing={0}>
				<Rating rating={product.rating} />
				<Heading
					fontWeight='bold'
					whiteSpace='nowrap'
					overflow='hidden'
					textOverflow='ellipsis'
					w='100%'
					title={product.title}
				>
					{product.title}
				</Heading>
				<Heading fontSize='1.5rem'>${product.price.toFixed(2)}</Heading>
				<Button
					w='100%'
					h={8}
					leftIcon={<IconShoppingBagPlus />}
					isLoading={mutation.isPending}
					onClick={mutation.mutate}
					size='xs'
				>
					Add to cart
				</Button>
			</VStack>
		</VStack>
	);
};

ProductCard.propTypes = {
	product: productPropType,
};
