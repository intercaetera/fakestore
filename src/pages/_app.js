import '@fontsource/inter';
import {ChakraBaseProvider, extendBaseTheme, theme as chakraTheme} from '@chakra-ui/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const {Alert} = chakraTheme.components;

const theme = extendBaseTheme({
	components: {Alert},
	fonts: {
		heading: 'Inter, sans-serif',
		body: 'Inter, sans-serif',
	},
});

// eslint-disable-next-line react/prop-types
const App = ({Component, pageProps}) => (
	<ChakraBaseProvider theme={theme}>
		<QueryClientProvider client={queryClient}>
			<Component {...pageProps} />
		</QueryClientProvider>
	</ChakraBaseProvider>
);

export default App;
