import React, { useState } from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import Button from "./UI/Button";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [dropdown, setDropdown] = useState(false);

	return (
		<header id="header">
			<nav className="bg-stone-100 dark:bg-black shadow-md text-black dark:text-white px-4 py-2.5">
				<div className="container flex flex-wrap justify-between items-center w-full mx-auto">
					<NavLink to="" className="flex items-center">
						<img
							src="/favicon.svg" // Replace with your logo image path
							alt="NoteSwap"
							className="h-16 sm:h-20"
						/>

						<span className="hidden sm:block self-center text-2xl font-semibold whitespace-nowrap">
							NOTE
							<br />
							SWAP
						</span>
					</NavLink>
					<div className="flex  items-center lg:order-2 gap-4">
						<NavLink to="offer">
							<Button
								variant="outlined"
								theme="monochrome"
								className="!px-5 sm:!px-10 !rounded-full !text-black dark:!text-white hover:!text-white dark:hover:!text-black dark:hover:!bg-white hover:!bg-slate-800"
							>
								Offer
							</Button>
						</NavLink>
						<NavLink to="rent">
							<Button
								variant="rounded"
								theme="monochrome"
								className="!px-5 sm:!px-10"
							>
								Rent
							</Button>
						</NavLink>
						<button
							onClick={() => setDropdown(!dropdown)}
							className="items-center p-2 ml-1 text-sm hover:text-slate-800 dark:hover:text-slate-200 active:scale-95 duration-100 rounded-lg lg:hidden"
						>
							<LuMenu size={25} />
						</button>
					</div>
					<div
						className={` ${dropdown ? "flex" : "hidden"} grow px-10 lg:justify-end transition-transform duration-500 ease-in-out w-full lg:flex lg:w-auto lg:order-1`}
					>
						<ul className="flex flex-col mt-4 font-medium pl-5 lg:pl-0 lg:flex-row lg:space-x-10 lg:mt-0 gap-4 lg:gap-0">
							<NavLink
								to=""
								className={({ isActive }) =>
									isActive ? "text-secondary" : ""
								}
								onClick={() => setDropdown(false)}
							>
								Home
							</NavLink>
							<NavLink
								to="notes"
								className={({ isActive }) =>
									isActive ? "text-secondary" : ""
								}
								onClick={() => setDropdown(false)}
							>
								Notes
							</NavLink>
							<NavLink
								to="blogs"
								className={({ isActive }) =>
									isActive ? "text-secondary" : ""
								}
								onClick={() => setDropdown(false)}
							>
								Blogs
							</NavLink>
							<div className="flex gap-5 lg:gap-10">
								<NavLink to="profile" className="active:scale-75 duration-100">
									<FaUserCircle
										onClick={() => setDropdown(false)}
										size={25}
									/>
								</NavLink>
								<li className="active:scale-75 duration-100">
									<FaSearch
										onClick={() => setDropdown(false)}
										size={25}
									/>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
