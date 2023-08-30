import { useRouter } from 'next/router';
import { NAV_LIST } from './constant';

const Layout = ({ children }) => {
	const router = useRouter();

	const handleChangePage = (path) => {
		router.push(path);
	};

	return (
		<header>
			<div>
				<nav className="">
					<div className="flex p-2 lg:bg-[#272727] bg-[#232323] min-w-full items-center fixed lg:absolute lg:bottom-[90%] bottom-0 lg:z-10 flex-col">
						<div className="flex min-w-[80%] justify-between">
							<h1 className="hidden lg:block lg:text-3xl font-bold cursor-pointer hover:brightness-50">
								Axel Mulyadi
							</h1>

							<ul className="flex font-semibold cursor-pointer  lg:max-w-sm  m-auto lg:m-0  gap-5">
								{NAV_LIST.map((nav, index) => {
									return (
										<div key={index}>
											<div
												className={
													router.pathname === nav.path
														? 'p-1 m-auto flex justify-center flex-col hover:brightness-75 brightness-50 items-center'
														: 'p-1 m-auto flex justify-center flex-col hover:brightness-75 active:brightness-75 items-center'
												}
												onClick={() => handleChangePage(nav.path)}
											>
												<div className="lg:hidden">{nav.icon}</div>
												<li className="text-center  lg:text-xl">{nav.name}</li>
											</div>
										</div>
									);
								})}
							</ul>
						</div>
						<div className="mt-5 mx-auto w-[80%] h-0.5 bg-[#4c4c4c] hidden lg:block border"></div>
					</div>
				</nav>
			</div>
			{children}
		</header>
	);
};

export default Layout;
