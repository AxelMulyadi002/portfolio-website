import Image from 'next/image';
import { PROJECT_LIST } from './constant';

const PageProject = () => {
	return (
		<div className="mb-56 p-4 w-[95%] m-auto lg:max-w-[90%] flex flex-col items-center lg:mt-40">
			<h2 className="text-3xl lg:text-4xl font-bold  lg:min-w-[90%] ">
				Project that i has been <span className="text-[#3bf686]">done</span>
			</h2>
			<div className="w-full mt-5 h-0.5 lg:max-w-[90%] bg-white"></div>

			{PROJECT_LIST.map((item, index) => {
				return (
					<div
						key={index}
						className="lg:flex lg:max-w-[90%] mt-8 lg:mt-8 gap-4"
					>
						<div className="w-full bg-[#323443] rounded-lg p-4 lg:max-w-[80%]">
							<h1 className="text-2xl font-bold lg:hidden">{item.heading}</h1>
							<p className="mt-4 text-lg font-semibold lg:hidden">
								{item.text}
							</p>
							<div className="flex gap-2 mt-8">
								<Image
									src={item.iconLeft}
									alt="react-icon"
									className="bg-white rounded-lg p-1 w-10"
								/>
								<Image
									src={item.iconRight}
									alt="tailwind"
									className="bg-white rounded-lg p-1 w-10"
								/>
							</div>
							<div className="mt-4">
								<Image
									src={item.img}
									alt="ecommerce"
									className="lg:h-56"
									style={{ objectFit: 'cover' }}
								/>
							</div>
						</div>
						<div className="hidden lg:block w-2/3">
							<h1 className="text-xl mt-8 text-[#dedede]">{item.type}</h1>
							<h1 className="text-4xl mt-8 font-bold">{item.heading}</h1>
							<p className="text-xl mt-8">{item.desc}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PageProject;
