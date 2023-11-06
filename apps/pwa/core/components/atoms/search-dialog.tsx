import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassIcon, Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@lucky-ui/components";

export default function SearchDialog() {
	const [inputValue, setInputValue] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const [open, setOpen] = useState(false);

	const handleInputChange = e => setInputValue(e.target.value);

	const handleKeydown = (event: any) => {
		if (event.ctrlKey) {
			if (event.key === "z") {
				// Perform the desired action here
				console.log("Command + t keys were pressed");
				setOpen(!open);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeydown);

		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [open]);

	return (
		<Dialog.Root open={open}>
			<Dialog.Trigger asChild>
				<Button className="bg-black">
					<div className="w-full flex justify-around items-center space-x-2 text-white font-extralight text-xs">
						<MagnifyingGlassIcon />
						<span>⌃ Z</span>
					</div>
				</Button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
				<Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[10%] left-[50%] max-h-[85vh] w-[90vw] max-w-[800px] translate-x-[-50%] p-[25px] focus:outline-none space-y-4 z-50">
					<fieldset className="bg-white text-violet11 inline-flex h-[45px] w-full flex-1 items-center justify-center rounded-lg px-[10px] text-[15px] leading-none outline-none border border-black">
						<div className="text-slate-400">
							<MagnifyingGlassIcon />
						</div>
						<input
							className="text-black inline-flex h-full w-full flex-1 items-center justify-center px-[10px] text-[15px] outline-none leading-none"
							id="username"
							placeholder="Search Notes..."
							value={inputValue}
							onChange={e => handleInputChange(e)}
						/>
						<Dialog.Close asChild>
							<button
								className="text-violet11 hover:bg-violet4 focus:shadow-violet7 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
								aria-label="Close"
							>
								<Cross1Icon />
							</button>
						</Dialog.Close>
					</fieldset>
					<div className="min-h-[200px] max-h-[600px] overflow-y-auto w-full bg-white rounded-lg flex p-4">
						{suggestions.length ? (
							<div className="h-full w-full flex flex-col justify-start items-start space-y-4"></div>
						) : (
							<div className="w-full flex justify-center items-center">
								<span className="text-slate-400">
									No recent searches
								</span>
							</div>
						)}
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
