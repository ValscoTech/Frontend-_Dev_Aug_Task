import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Auth from "./pages/auth.jsx";
import Profile from "./pages/profile.jsx";
import Blogs from "./pages/blogs.jsx";
import Notes from "./pages/notes.jsx";
import Offer from "./pages/offer.jsx";
import Rent from "./pages/rent.jsx";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "auth",
				element: <Auth />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
			{
				path: "blogs",
				element: <Blogs />,
			},
			{
				path: "notes",
				element: <Notes />,
			},
			{
				path: "offer",
				element: <Offer />,
			},
			{
				path: "rent",
				element: <Rent />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
