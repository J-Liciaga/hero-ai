"use client";

import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@lucky-ui/components";
import Link from "next/link";

export default function HelpNavBtn() {
	return (
		<Button className="bg-orange-400 hover:bg-orange-600">
			<Link href={"help.hero-ai.dev"}>
				<div className="w-full flex justify-around items-center space-x-2 text-white text-xs">
					<QuestionMarkCircledIcon />
					<span>Help</span>
				</div>
			</Link>
		</Button>
	);
}
