import DetailsSection from "../Components/OfferNotes/DetailsSection";
import UploadSection from "../Components/OfferNotes/UploadSection";
import DisplaySection from "../Components/OfferNotes/DisplaySection";

function Offer() {
	return (
		<div className="min-h-screen mx-auto relative container px-4">
			<h2 className="text-4xl py-5 font-bold dark:text-white">
				Offer Notes
			</h2>
			<div className="container mx-auto flex flex-col lg:flex-row gap-16 mb-36">
				<DetailsSection />
				<UploadSection />
			</div>
			<DisplaySection />
		</div>
	);
}

export default Offer;
