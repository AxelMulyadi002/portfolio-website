import Image from 'next/image';
import { EXPERIENCE_LIST } from './constant';

const Experience = () => {
	return (
		<div className="lg:max-w-[90%] lg:m-auto lg:mb-40">
			<div className="lg:min-w-[90%] w-32 lg:w-full m-auto lg:m-0">
				<h2 className="text-2xl font-bold text-center lg:text-left lg:text-4xl">
					Experience
				</h2>
				<div className="mt-3 h-0.5 bg-white"></div>
			</div>
			<div className="text-left mx-5 min-w-[80%] mt-4 lg:flex gap-4 lg:justify-center">
				{EXPERIENCE_LIST.map((list, index) => {
					return (
						<div
							key={index}
							className="mb-8 bg-[#323443] rounded-xl p-4 lg:w-2/3"
						>
							<h1 className="text-2xl font-bold">{list.heading}</h1>
							<h4 className="mt-5 text-xl font-bold">{list.subHeading}</h4>

							<div className="bg-[#323443]">
								<Image
									src={list.img}
									alt="event"
									className="w-full h-56 lg:h-96 mt-4"
									style={{ objectFit: 'cover' }}
								/>
							</div>
							<p className="text-lg mt-4 text-justify whitespace-pre-line">
								{list.text}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Experience;
