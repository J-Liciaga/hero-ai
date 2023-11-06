"use client";

import { useCallback } from "react";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import {
	NavigationLink,
	SearchDialog,
	HelpNavBtn,
	SettingsNavBtn,
	ThemeNavBtn,
} from "@pwa/core/components/atoms";
// import { UserButton } from "@clerk/nextjs";
import { APP_NAV_LINKS } from "@pwa/core/config/app-nav-links";
import LogoBtn from "@pwa/core/components/atoms/logo-btn";

const styles = {
	header: "w-screen flex justify-center items-center border-b-2 max-h-[5vh] h-[5vh]",
	nav: "w-full flex justify-between items-center p-4",
	left_box: "flex justify-center items-center space-x-4",
	home_link:
		"h-10 w-10 bg-red-200 flex justify-center items-center rounded-full",
	ordered_list: "flex justify-center items-center space-x-4",
	avatar: "bg-slate-200 flex justify-center items-center rounded-full",
	right_box: "flex justify-center items-center space-x-4",
} as const;

export default function AppNavigation() {
	const route = usePathname();
	const router = useRouter();

	const getCurrentRoute = (link: string) => route.split("/").includes(link);

	const handleKeydown = useCallback(
		(event: any) => {
			if (event.ctrlKey) {
				if (event.key === "q") {
					router.replace("/session/overview");
				}
			}
			if (event.ctrlKey) {
				if (event.key === "w") {
					router.replace("/session/calendar");
				}
			}
			if (event.ctrlKey) {
				if (event.key === "e") {
					router.replace("/session/kanban");
				}
			}
			if (event.ctrlKey) {
				if (event.key === "r") {
					router.replace("/session/chat");
				}
			}
			if (event.ctrlKey) {
				if (event.key === "t") {
					router.replace("/session/habits");
				}
			}
			if (event.ctrlKey) {
				if (event.key === "y") {
					router.replace("/session/finances");
				}
			}
		},
		[router],
	);

	const renderNavLinks = () => {
		return APP_NAV_LINKS.map(
			({ id, label, defaultShortcut, link }: any) => (
				<NavigationLink
					key={id}
					href={link}
					label={label}
					shortcutKey={defaultShortcut}
					current={getCurrentRoute(label.toLowerCase())}
				/>
			),
		);
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<div className={styles.left_box}>
					<div>
						<LogoBtn />
					</div>
					<ol className={styles.ordered_list}>{renderNavLinks()}</ol>
				</div>
				<div className={styles.right_box}>
					<ol className={styles.ordered_list}>
						<li>
							<SearchDialog />
						</li>
						<li>
							<ThemeNavBtn />
						</li>
						<li>
							<SettingsNavBtn />
						</li>
						<li>
							<HelpNavBtn />
						</li>
					</ol>
					<div>{/* <UserButton /> */}</div>
				</div>
			</nav>
		</header>
	);
}
