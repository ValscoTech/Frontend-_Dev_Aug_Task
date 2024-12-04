import { useState } from "react";
import Card from "../UI/Card";
import Slider from "../UI/Slider";
import Button from "../UI/Button";
import DragDrop from "../UI/DragDrop";

function UploadSection({ formData, setFormData, addAlert }) {
	const [price, setPrice] = useState(formData.price || 70);

	const handleSubmit = (e) => {
		if (price <= 0) {
			addAlert("Please fix a valid price", "warning");
			return;
		}
		if (formData.price === price) {
			addAlert("Price has not been changed", "warning");
			return;
		}

		setFormData({
			...formData,
			price: price,
		});
		addAlert("Price fixed successfully", "success");
	};

	const handlePriceChange = (e) => {
		const value = e.target.value;
		if (!isNaN(value)) {
			setPrice(value);
		}
	};

	return (
		<div className="flex flex-col h-full lg:w-2/3">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 place-items-center sm:place-items-end mt-16">
				<Card className="relative">
					<h3 className="absolute -top-16 left-0 text-2xl font-semibold py-4 w-80">
						Upload Preview of Notes
					</h3>
					<h3 className="text-xl mb-3 font-medium">
						Upload your files
					</h3>
					<DragDrop
						acceptedFileTypes={[".png", ".jpg", ".jpeg", ".webp"]}
						addAlert={addAlert}
						minFiles={2}
						maxFiles={5}
						setFormData={setFormData}
					/>
					<div className="relative sm:hidden flex w-full gap-2">
						<Slider
							id="price"
							name="price"
							value={price}
							theme="tertiary"
							min={20}
							max={120}
							onChange={handlePriceChange}
						/>

						<Button
							size="sm"
							className="max-w-28"
							onClick={handleSubmit}
						>
							Save Price
						</Button>
					</div>
				</Card>
				<Card
					className="hidden sm:flex flex-col justify-between items-center"
					theme="primary"
				>
					<h3 className="text-2xl text-slate-900 dark:text-white font-medium">
						Set Your Price
					</h3>
					<div className="flex flex-col items-center gap-y-4 w-4/5">
						<Slider
							id="price"
							name="price"
							value={price}
							theme="tertiary"
							min={20}
							max={120}
							onChange={handlePriceChange}
						/>
						<Button
							className="max-w-36 pt-2 pb-6"
							theme="tertiary"
							onClick={handleSubmit}
						>
							Save Price
						</Button>
					</div>
				</Card>
				<Button type="submit" className="max-w-sm" size="xl">
					Post Offer
				</Button>
			</div>
		</div>
	);
}

export default UploadSection;
