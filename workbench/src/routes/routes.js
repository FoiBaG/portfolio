import { createBrowserRouter } from 'react-router-dom';
import WorkBench from '../pages/workbench';
import FormInput from '../components/study/form';

const router = createBrowserRouter([
	{
		path: '/',
		element: <WorkBench />,
	},
	{
		path: '/projects',
		element: <FormInput />,
	},
]);

export default router;