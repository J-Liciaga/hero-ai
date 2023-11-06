import Link from "next/link";
import { Logo } from "@web/core/components/atoms";
import { Separator } from "@lucky-ui/components";
import {
	BookmarkIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function ReturnFooter() {
	return (
		<footer className={styles.footer}>
			<nav className={styles.nav_wrapper}>
				<div className={styles.btm_row}>
					<div className={styles.tdm_box}>
						<div className={styles.logo_box}>
							<Logo />
						</div>
						<div className={styles.link_box}>
							<div>@2023 Hero.AI</div>
							<Separator
								orientation="vertical"
								className="h-[2vh]"
							/>
							<div>Policies</div>
							<Separator
								orientation="vertical"
								className="h-[2vh]"
							/>
							<div>AI Safety</div>
						</div>
					</div>
					<div className={styles.socials_box}>
						<Link href={"https://instagram.com"}>
							<InstagramLogoIcon />
						</Link>
						<Link href={"https://linkedin.com"}>
							<LinkedInLogoIcon />
						</Link>
						<Link href={"https://x.com"}>
							<TwitterLogoIcon />
						</Link>
						<Link href={"https://instagram.com"}>
							<BookmarkIcon />
						</Link>
					</div>
				</div>
			</nav>
		</footer>
	);
}

const mobile_styles = {};

const tablet_styles = {};

const laptop_styles = {};

const styles = {
	footer: "",
	nav_wrapper: "",
	top_row: "hidden",
	link_header: "",
	text_link: "",
	btm_row: "",
	logo_box: "",
	tdm_box: "",
	link_box: "",
	socials_box: "flex justify-center items-center space-x-4",
};

const LINKS = [
	{
		id: "footer_pricing",
		label: "Pricing",
		href: "/pricing",
	},
	{
		id: "footer_contact",
		label: "Contact",
		href: "/contact",
	},
	{
		id: "footer_ai-policy",
		label: "AI Policy",
		href: "/docs/legal/ai-policy",
	},
	{
		id: "footer_terms-and-conditions",
		label: "Terms & Conditions",
		href: "/docs/legal/terms-and-conditions",
	},
	{
		id: "footer_privacy-policy",
		label: "Privacy Policy",
		href: "/docs/legal/privacy-policy",
	},
];
