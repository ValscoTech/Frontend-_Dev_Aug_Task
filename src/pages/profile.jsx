import { useEffect } from "react";

function Profile() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return <div className="container mx-auto p-5">Account Details</div>;
}

export default Profile;
