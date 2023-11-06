"use client";

import { GearIcon } from "@radix-ui/react-icons";
import { Button } from "@lucky-ui/components";
import Link from "next/link";

export default function SearchNavBtn() {
	return (
		<Button className="bg-slate-400 hover:bg-slate-600">
			<Link href={"/settings"}>
				<div className="w-full flex justify-around items-center space-x-2 text-white text-xs">
					<GearIcon />
					<span>Settings</span>
				</div>
			</Link>
		</Button>
	);
}
