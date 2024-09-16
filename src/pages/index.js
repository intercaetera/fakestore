import {getAllCategories} from '../shared/routes';
import {MainPage} from '../MainPage';
import Head from 'next/head';

export default function Index(props) {
	return (
		<>
			<Head><title>fakestore | home</title></Head>
			<MainPage {...props} />
		</>
	);
}

export const getServerSideProps = async () => {
	const categories = await fetch(getAllCategories())
		.then(res => res.json());

	return ({
		props: {
			categories,
		},
	});
};
