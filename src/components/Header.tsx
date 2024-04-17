import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
	return (
		<header>
			<nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<a href="" className="flex items-center">
						<img
							src="https://flowbite.com/docs/images/logo.svg"
							className="mr-3 h-6 sm:h-9"
							alt="Flowbite Logo"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Quicker
						</span>
					</a>
					<div className="flex items-center lg:order-2">
						<Link href="/auth/login">
							<button className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
								Log in
							</button>
						</Link>
						<Link href="/auth/register">
							<button className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
								Register
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
