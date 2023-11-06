"use client";

import { Button } from "@lucky-ui/components";
import Link from "next/link";
import { mulish_heavy } from "@pwa/core/config/fonts";

const styles = {
	logo: `${mulish_heavy.className} py-2 text-[1.5rem] w-full flex justify-around items-center text-black`,
} as const;

export default function LogoBtn() {
	return (
		<Button className="bg-transparent">
			<Link href={"/"}>
				<div className={styles.logo}>
					<span>HERO.AI</span>
				</div>
			</Link>
		</Button>
	);
}
