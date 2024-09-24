import { useState } from "react";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import Button from "./UI/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/User";

const Header = () => {
	const [dropdown, setDropdown] = useState(false);
	const [searchActive, setSearchActive] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");
	const { user } = useUser();

	const navigate = useNavigate();
	const handleSearchSubmit = () => {
		if (!searchActive) {
			setSearchActive(true);
		} else if (searchActive && searchQuery.trim() !== "") {
			navigate(`/notes?query=${searchQuery}`);
			setSearchQuery("");
			setSearchActive(false);
		} else {
			setSearchActive(false);
		}
	};

	return (
		<header id="header">
			<nav className="bg-stone-100 dark:bg-black shadow-md text-black dark:text-white px-4 py-2.5">
				<div className="container flex flex-wrap justify-between items-center w-full mx-auto">
					<NavLink to="" className="flex items-center">
						<img
							src="/favicon.svg"
							alt="NoteSwap"
							className="h-16 sm:h-20"
						/>
						<span className="hidden sm:block self-center text-2xl font-semibold whitespace-nowrap">
							NOTE
							<br />
							SWAP
						</span>
					</NavLink>
					<div className="flex items-center lg:order-2 gap-4">
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
						<ul className="flex flex-col lg:justify-end items-end lg:items-center mt-4 font-medium pl-5 lg:pl-0 lg:flex-row lg:space-x-10 lg:mt-0 gap-4 lg:gap-0 w-full">
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
							<div className="flex gap-5 lg:gap-10 items-center flex-row-reverse lg:flex-row">
								<button className="active:scale-75 duration-100 w-fit rounded-full">
									<NavLink
										to="profile"
										onClick={() => setDropdown(false)}
									>
										<div className="rounded-full w-8 h-8 bg-slate-300 p-[2px]">
											{user && user.profile !== "" ? (
												<img
													src={user.profile}
													alt="Profile"
													className="rounded-full"
												/>
											) : (
												<FaUserCircle className="w-full h-full text-slate-800" />
											)}
										</div>
									</NavLink>
								</button>
								<div className="relative flex items-center">
									<button
										className={`active:scale-75 duration-100 w-fit absolute right-3 ${searchActive ? "text-slate-900" : "dark:text-slate-300"}`}
										onClick={handleSearchSubmit}
									>
										<FaSearch size={25} />
									</button>
									<input
										type="text"
										className={`border-gray-500 rounded-full text-black px-3 py-2 duration-300 transition-all focus:outline-none ${searchActive ? "w-60 sm:w-96 lg:w-40 xl:w-72 visible bg-white border" : "w-0 bg-transparent invisible border-none"}`}
										value={searchQuery}
										onChange={(e) =>
											setSearchQuery(e.target.value)
										}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												handleSearchSubmit();
											}
										}}
										placeholder="Search..."
									/>
								</div>
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
