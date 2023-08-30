import {
	faBriefcase,
	faHome,
	faList,
	faSchool,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NAV_LIST = [
	{
		name: 'Home',
		path: '/',
		icon: (
			<FontAwesomeIcon
				icon={faHome}
				style={{ fontSize: 20, color: 'white' }}
				className="m-auto"
			/>
		),
	},
	{
		name: 'Background',
		path: '/background',
		icon: (
			<FontAwesomeIcon
				icon={faSchool}
				style={{ fontSize: 20, color: 'white' }}
				className="m-auto"
			/>
		),
	},
	{
		name: 'Project',
		path: '/project',
		icon: (
			<FontAwesomeIcon
				icon={faList}
				style={{ fontSize: 20, color: 'white' }}
				className="m-auto"
			/>
		),
	},
];
