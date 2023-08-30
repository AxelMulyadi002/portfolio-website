import Image from 'next/image';
import profile from '@/assets/profile.png';
import linkedin from '@/assets/linkedin.png';
import instagram from '@/assets/instagram.png';
import ProfileName from '../ProfileName/ProfileName';
import { ItemList } from './constant';

const LandingPage = () => {
	return (
		<main className="mb-36">
			<section className="flex mt-10 lg:mt-20 flex-col items-center ">
				<div className=" text-center mx-auto flex flex-col lg:w-4/5">
					<div className="lg:flex mt-12 gap-4 lg:max-w-[90%]">
						<div className="w-40 lg:w-80 rounded-full  bg-gradient-to-r from-[#3bf586] to-[#42a8c0] p-0.5 lg:z-20 m-auto">
							<Image
								src={profile}
								alt="profil"
								className="w-full bg-[#3a3636]  rounded-full "
							/>
						</div>

						<div className="hidden lg:block  text-left">
							<ProfileName />
						</div>

						<div className="flex w-52 gap-4 justify-center mt-8 lg:order-last m-auto flex-col  lg:w-96">
							<h2 className="hidden lg:block text-xl font-bold">
								Lets Connect
							</h2>
							<div className="flex gap-4 w-20 m-auto">
								<a href="https://www.instagram.com/azxelm03/?hl=id">
									<Image src={instagram} alt="instagram" />
								</a>

								<a href="https://www.linkedin.com/in/axelmulyadi/">
									<Image src={linkedin} alt="linkedin" />
								</a>
							</div>
						</div>
					</div>

					<h1 className="text-2xl text-center mt-8 font-bold  max-w-[70%] lg:max-w-[90%] lg:text-6xl bg-gradient-to-r from-[#3bf586] to-[#42a8c0] bg-clip-text text-transparent lg:order-first lg:text-left lg:p-0 m-auto lg:m-0 lg:mt-10">
						Hi Im Axel Mulyadi, a special human with some ability to love
						learning and working on teamwork
					</h1>
					<div className="lg:hidden">
						<ProfileName />
					</div>
				</div>

				<div className="flex flex-col items-center lg:flex-row lg:max-w-[80%] max-w-[80%] lg:gap-8 justify-evenly">
					<div className="lg:w-2/5 text-center lg:text-left">
						<h2 className="font-bold text-xl mt-8 lg:text-3xl">What I Do</h2>
						<p className="mt-4 text-left lg:max-w-[80%] m-auto lg:m-0 lg:mt-4 lg:text-lg">
							Im a Front-End Developer responsible for crafting engaging and
							responsive website interfaces. As a Back-End Developer, I create
							APIs to support website functionality.
						</p>
					</div>

					<div className="flex gap-4 mt-16  lg:gap-8">
						{ItemList.map((item, index) => {
							return (
								<div
									className="bg-[#323443] rounded-xl w-32 lg:w-64 lg:h-56 h-80"
									key={index}
								>
									<div className="w-20 rounded-full bg-gradient-to-tl from-[#3bf586] to-[#6ad5ed] p-0.5 m-auto -mt-10">
										<Image
											src={item.img}
											alt="profil"
											className="w-full bg-[#323443] h-full rounded-full p-4"
										/>
									</div>
									<div className="max-w-full m-auto lg:text-center">
										<h3 className="text-md font-bold mt-4 p-2 lg:text-xl">
											{item.judul}
										</h3>
										<p className="mt-4 lg:mt-2 p-2 lg:text-lg">{item.text}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
};

export default LandingPage;
