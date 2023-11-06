import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { mulish_heavy } from "@web/core/fonts";
import Link from "next/link";

export default function ReturnNavigation() {
	return (
		<header className="fixed h-[6rem] w-screen flex justify-center items-center">
			<nav className="w-[80vw] flex justify-between items-center">
				<div>
					<Link
						href={"/"}
						className="flex justify-center items-center space-x-4 text-[1.25rem]"
					>
						<ArrowLeftIcon />
						<div>Back</div>
					</Link>
				</div>
				<div>
					<Link href={"/"} className={styles.logo_box}>
						<div>HERO.AI</div>
					</Link>
				</div>
			</nav>
		</header>
	);
}

const styles = {
	logo_box: `${mulish_heavy.className} py-2 text-[1.5rem]`,
};
