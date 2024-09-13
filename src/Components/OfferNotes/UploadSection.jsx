import React from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import Button from "../UI/Button";
import DragDrop from "../UI/DragDrop";

function UploadSection() {
	return (
		<div className="flex flex-col h-full lg:w-2/3">
			<h3 className="text-2xl font-semibold py-4">
				Upload Preview of Notes
			</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 place-items-center sm:place-items-end">
				<Card>
					<h3 className="text-xl mb-3 font-medium">
						Upload your files
					</h3>
					<DragDrop acceptedFileTypes={[".pdf"]} />
					<form className="relative sm:hidden flex w-full gap-2">
						<Input
							className="w-2/3"
							name="price"
							id="price"
							variant="static"
							placeholder="Enter price"
						/>
						<Button size="sm" className="w-1/3">
							Save Price
						</Button>
					</form>
				</Card>
				<Card
					className="hidden sm:flex flex-col justify-between items-center"
					theme="primary"
				>
					<h3 className="text-2xl text-white font-medium">
						Set Your Price
					</h3>
					<div className="flex flex-col items-center gap-y-4 w-4/5">
						<Input
							inputClassName="text-white"
							labelClassName="text-white"
							variant="static"
							theme="tertiary"
							id="price"
							name="price"
							size="lg"
							placeholder="Enter price"
						/>
						<Button className="max-w-36 pt-2 pb-6" theme="tertiary">
							Save Price
						</Button>
					</div>
				</Card>
				<Button className="max-w-sm" size="xl">
					Post Offer
				</Button>
			</div>
		</div>
	);
}

export default UploadSection;
