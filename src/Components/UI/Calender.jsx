import React, { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Calendar = ({ theme = "primary" }) => {
	const style = {
		primary: "bg-primary text-white",
		secondary: "bg-secondary text-white",
		tertiary: "bg-tertiary text-white",
	};

	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		renderCalendar(currentDate);
	}, [currentDate]);

	const renderCalendar = (date) => {
		const calendarGrid = document.getElementById("calendarGrid");
		if (!calendarGrid) return;

		const year = date.getFullYear();
		const month = date.getMonth();

		document.getElementById("monthYear").textContent =
			`${date.toLocaleString("default", { month: "long" })} ${year}`;

		// Clear previous calendar
		calendarGrid.innerHTML = "";

		// Calculate first and last days of the month
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const firstDayOfWeek =
			firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;
		const lastDate = lastDay.getDate();

		// Generate empty days before the first day
		for (let i = 0; i < firstDayOfWeek; i++) {
			const emptyDiv = document.createElement("div");
			calendarGrid.appendChild(emptyDiv);
		}

		// Generate the days of the month
		for (let i = 1; i <= lastDate; i++) {
			const dayDiv = document.createElement("div");
			dayDiv.classList.add("cursor-pointer");
			dayDiv.textContent = i;
			dayDiv.addEventListener("click", () => {
				// Remove highlight from all days
				document
					.querySelectorAll("#calendarGrid div")
					.forEach((div) => {
						style[theme].split(" ").forEach((className) => {
							div.classList.remove(className);
						});
					});
				// Add highlight to the clicked day
				style[theme].split(" ").forEach((className) => {
					dayDiv.classList.add(className);
				});
			});
			calendarGrid.appendChild(dayDiv);
		}
	};

	const handlePrevMonth = () => {
		setCurrentDate(
			new Date(currentDate.setMonth(currentDate.getMonth() - 1)),
		);
	};

	const handleNextMonth = () => {
		setCurrentDate(
			new Date(currentDate.setMonth(currentDate.getMonth() + 1)),
		);
	};

	return (
		<div className="flex flex-col max-w-xl items-center gap-5 bg-zinc-100 rounded-lg pb-12 shadow-lg">
			<div className={`${style[theme]} w-full p-5 rounded-t-lg`}>
				<div className="flex justify-between justify-items-center items-center w-full px-3 md:w-3/4 mx-auto pb-5 text-xl text-white">
					<button
						className={`hover:opacity-70 active:bg-${theme}-dark rounded-full p-2`}
					>
						<LuChevronLeft
							onClick={handlePrevMonth}
							className="cursor-pointer"
						/>
					</button>
					<p id="monthYear"></p>
					<button
						className={`hover:opacity-70 active:bg-${theme}-dark rounded-full p-2`}
					>
						<LuChevronRight
							onClick={handleNextMonth}
							className="cursor-pointer"
						/>
					</button>
				</div>

				<div className="grid grid-cols-7 mx-auto justify-items-center w-full sm:w-11/12 gap-5 bg-zinc-100 !text-black rounded-md p-5 *:cursor-default">
					<div>Mon</div>
					<div>Tue</div>
					<div>Wed</div>
					<div>Thu</div>
					<div>Fri</div>
					<div>Sat</div>
					<div>Sun</div>
				</div>
			</div>

			<div
				className="grid grid-cols-7 w-full sm:w-11/12 mx-auto justify-items-center *:w-full *:py-1 *:rounded gap-5 px-10 bg-zinc-100 !text-black justify-around text-center"
				id="calendarGrid"
			></div>
		</div>
	);
};

export default Calendar;
