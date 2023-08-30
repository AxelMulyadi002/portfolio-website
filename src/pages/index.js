import LandingPage from '@/components/elements/landingPage/LandingPage';
import Layout from '@/components/layouts/Layout';
import Project from './project';
import TimelineEducation from '@/components/elements/timeline/TimelineEducation';

export default function Home() {
	return (
		<Layout>
			<LandingPage />
			<div className="hidden lg:block">
				<Project />
				<TimelineEducation />
			</div>
		</Layout>
	);
}
