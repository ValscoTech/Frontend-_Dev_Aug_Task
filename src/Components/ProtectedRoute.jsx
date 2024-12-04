import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/User";

function ProtectedRoute({ children }) {
	const { user, loading } = useUser();
	const location = useLocation();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		// Redirect to the auth page, but save the current location
		return <Navigate to="/auth" state={{ from: location }} replace />;
	}

	return children;
}

export default ProtectedRoute;
