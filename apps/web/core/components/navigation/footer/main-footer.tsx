import Link from "next/link";
import { Logo } from "@web/core/components/atoms";
import { Separator } from "@lucky-ui/components";
import { cn } from "@lucky-ui/utils";
import {
	BookmarkIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function MainFooter() {
	const renderHeroLinks = () => {
		return HERO_LINKS.map(link => {
			return (
				<Link
					key={link.id}
					href={link.href}
					className={styles.text_link}
				>
					<div>{link.label}</div>
				</Link>
			);
		});
	};

	const renderResourceLinks = () => {
		return RESOURCE_LINKS.map(link => {
			return (
				<Link
					key={link.id}
					href={link.href}
					className={styles.text_link}
				>
					<div>{link.label}</div>
				</Link>
			);
		});
	};

	const renderLegalLinks = () => {
		return LEGAL_LINKS.map(link => {
			return (
				<Link
					key={link.id}
					href={link.href}
					className={styles.text_link}
				>
					<div>{link.label}</div>
				</Link>
			);
		});
	};

	const renderFeatureLinks = () => {
		return FEATURE_LINKS.map(link => {
			return (
				<Link
					key={link.id}
					href={link.href}
					className={styles.text_link}
				>
					<div>{link.label}</div>
				</Link>
			);
		});
	};

	const renderCommonLinks = () => {
		return COMMON_LINKS.map(link => {
			return (
				<Link
					key={link.id}
					href={link.href}
					className={styles.text_link}
				>
					<div>{link.label}</div>
				</Link>
			);
		});
	};

	return (
		<footer className={styles.footer}>
			<nav className={styles.nav_wrapper}>
				<div className={styles.top_row}>
					<div>
						<div className={styles.link_header}>HERO.AI</div>
						<div>{renderHeroLinks()}</div>
					</div>
					<div>
						<div className={styles.link_header}>Resources</div>
						<div>{renderResourceLinks()}</div>
					</div>
					<div>
						<div className={styles.link_header}>Legal</div>
						<div>{renderLegalLinks()}</div>
					</div>
					<div>
						<div className={styles.link_header}>Features</div>
						<div>{renderFeatureLinks()}</div>
					</div>
					<div>
						<div className={styles.link_header}>Blog</div>
						<div>{renderCommonLinks()}</div>
					</div>
				</div>
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
							<Link href={"/docs/policies"}>
								<div>Policies</div>
							</Link>
							<Separator
								orientation="vertical"
								className="h-[2vh]"
							/>
							<Link href={"/docs/ai"}>
								<div>AI Safety</div>
							</Link>
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

const mobile_styles = {
	footer: "border-t py-4 mt-4",
	nav_wrapper: "",
	top_row: "hidden",
	link_header: "",
	text_link: "",
	btm_row: "",
	logo_box: "",
	tdm_box: "flex flex-col justify-center items-center space-y-2",
	link_box: "flex justify-center items-center space-x-2",
	socials_box: "flex justify-center items-center space-x-4 py-4",
};

const tablet_styles = {
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

const laptop_styles = {
	footer: "",
	nav_wrapper: "",
	top_row: "xl:flex xl:justify-evenly xl:items-start",
	link_header: "xl:font-bold",
	text_link: "xl:font-extralight",
	btm_row: "xl:flex xl:justify-around xl:pt-4 xl:border-t xl:mt-4",
	logo_box: "",
	tdm_box: "xl:justify-start xl:items-start",
	link_box: "",
	socials_box: "flex justify-center items-center space-x-4",
};

const styles = {
	footer: cn(mobile_styles.footer, laptop_styles.footer),
	nav_wrapper: cn(mobile_styles.nav_wrapper, laptop_styles.footer),
	top_row: cn(mobile_styles.top_row, laptop_styles.top_row),
	link_header: cn(mobile_styles.link_header, laptop_styles.link_header),
	text_link: cn(mobile_styles.text_link, laptop_styles.text_link),
	btm_row: cn(mobile_styles.btm_row, laptop_styles.btm_row),
	logo_box: cn(mobile_styles.logo_box, laptop_styles.logo_box),
	tdm_box: cn(mobile_styles.tdm_box, laptop_styles.tdm_box),
	link_box: cn(mobile_styles.link_box, laptop_styles.link_box),
	socials_box: cn(mobile_styles.socials_box, laptop_styles.socials_box),
};

const HERO_LINKS = [
	{
		id: "hero_pricing",
		label: "Download",
		href: "/download",
	},
	{
		id: "hero_contact",
		label: "About Us",
		href: "/about",
	},
	{
		id: "hero_contact",
		label: "Careers",
		href: "/careers",
	},
	{
		id: "hero_ai-policy",
		label: "Reviews",
		href: "/reviews",
	},
	{
		id: "hero_status",
		label: "Status",
		href: "/status",
	},
];

const RESOURCE_LINKS = [
	{
		id: "resource_help",
		label: "Help",
		href: "/help",
	},
	{
		id: "resource_contact",
		label: "Contact Us",
		href: "/contact",
	},
	{
		id: "resource_api",
		label: "API",
		href: "/api",
	},
	{
		id: "resource_partners",
		label: "Partners",
		href: "/partners",
	},
];

const FEATURE_LINKS = [
	{
		id: "feature_gantt-chart",
		label: "Gantt Chart",
		href: "/features/gantt-chart",
	},
	{
		id: "feature_dashboards",
		label: "Dashboards",
		href: "/features/dashboards",
	},
	{
		id: "feature_time-tracking",
		label: "Time Tracking",
		href: "/features/time-tracking",
	},
	{
		id: "feature_mind-maps",
		label: "Mind Maps",
		href: "/features/mind-maps",
	},
	{
		id: "feature_agents",
		label: "Agents",
		href: "/features/agents",
	},
	{
		id: "feature_habit-forge",
		label: "Habit Forge",
		href: "/features/habit-forge",
	},
	{
		id: "feature_kanban",
		label: "Kanban",
		href: "/features/kanban",
	},
	{
		id: "feature_challenges",
		label: "Challenges",
		href: "/features/challenges",
	},
];

const LEGAL_LINKS = [
	{
		id: "legal_ai-policy",
		label: "AI Policy",
		href: "/docs/legal/ai-policy",
	},
	{
		id: "legal_terms-and-conditions",
		label: "Terms & Conditions",
		href: "/docs/legal/terms-and-conditions",
	},
	{
		id: "legal_privacy-policy",
		label: "Privacy Policy",
		href: "/docs/legal/privacy-policy",
	},
];

const COMMON_LINKS = [
	{
		id: "common_pricing",
		label: "Pricing",
		href: "/pricing",
	},
	{
		id: "common_contact",
		label: "Contact",
		href: "/contact",
	},
];
