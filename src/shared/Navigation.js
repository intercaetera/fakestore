import {
	HStack, Heading, Spacer,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {Button} from './Button';
import {IconHome, IconShoppingBag} from '@tabler/icons-react';

export const Navigation = () => (
	<HStack w='full' p={2} boxShadow='md'>
		<Heading fontSize='1.5rem' fontWeight='regular'>fakestoré</Heading>
		<Spacer />
		<Button as={NextLink} href='/'>
			<IconHome stroke={1.5} />
		</Button>
		<Button colorScheme='gray' as={NextLink} href='/cart'>
			<IconShoppingBag stroke={1.5} />
		</Button>
	</HStack>
);
