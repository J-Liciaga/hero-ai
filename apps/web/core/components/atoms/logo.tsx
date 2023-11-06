import Link from "next/link";
import { mulish_heavy } from "@web/core/fonts";

export default function Logo() {
	return (
		<Link href={"/"} className={styles.logo}>
			<div>HERO.AI</div>
		</Link>
	);
}

const styles = {
	logo: `${mulish_heavy.className} py-2 text-[1.5rem]`,
} as const;
