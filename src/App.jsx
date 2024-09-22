import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { UserProvider } from "./contexts/User";
import { NotesProvider } from "./contexts/Notes";

function App() {
	function scrollToElement(id) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<UserProvider>
			<Header />
			<NotesProvider>
				<Outlet />
			</NotesProvider>
			<Footer smoothScroll={scrollToElement} />
		</UserProvider>
	);
}

export default App;
