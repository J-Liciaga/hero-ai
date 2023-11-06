export default function MainHeader() {
	return (
		<header>
			<nav></nav>
		</header>
	);
}

// "use client";

// import { forwardRef } from "react";
// import Link from "next/link";
// import {
// 	Button,
// 	NavigationMenu,
// 	NavigationMenuContent,
// 	NavigationMenuItem,
// 	NavigationMenuLink,
// 	NavigationMenuList,
// 	NavigationMenuTrigger,
// 	navigationMenuTriggerStyle,
// } from "@lucky-ui/components";
// import { cn } from "@lucky-ui/utils";
// import { mulish_heavy } from "@web/core/fonts";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";

// export default function MainNavigation() {
// 	return (
// 		<header className={styles.header}>
// 			<nav className={styles.nav}>
// 				<div className={styles.left_box}>
// 					<Link href={"/"} className={styles.logo_box}>
// 						<div>HERO.AI</div>
// 					</Link>
// 					<div className={styles.nav_link_wrapper}>
// 						<NavigationMenu>
// 							<NavigationMenuList>
// 								<NavigationMenuItem>
// 									<NavigationMenuTrigger>
// 										Features
// 									</NavigationMenuTrigger>
// 									<NavigationMenuContent>
// 										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
// 											{components.map(component => (
// 												<ListItem
// 													key={component.title}
// 													title={component.title}
// 													href={component.href}
// 												>
// 													{component.description}
// 												</ListItem>
// 											))}
// 										</ul>
// 									</NavigationMenuContent>
// 								</NavigationMenuItem>
// 								<NavigationMenuItem>
// 									<NavigationMenuTrigger>
// 										Solutions
// 									</NavigationMenuTrigger>
// 									<NavigationMenuContent>
// 										<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
// 											{components.map(component => (
// 												<ListItem
// 													key={component.title}
// 													title={component.title}
// 													href={component.href}
// 												>
// 													{component.description}
// 												</ListItem>
// 											))}
// 										</ul>
// 									</NavigationMenuContent>
// 								</NavigationMenuItem>
// 								<NavigationMenuItem>
// 									<Link href="/docs" legacyBehavior passHref>
// 										<NavigationMenuLink
// 											className={navigationMenuTriggerStyle()}
// 										>
// 											Pricing
// 										</NavigationMenuLink>
// 									</Link>
// 								</NavigationMenuItem>
// 								<NavigationMenuItem>
// 									<Link href="/docs" legacyBehavior passHref>
// 										<NavigationMenuLink
// 											className={navigationMenuTriggerStyle()}
// 										>
// 											Teams
// 										</NavigationMenuLink>
// 									</Link>
// 								</NavigationMenuItem>
// 							</NavigationMenuList>
// 						</NavigationMenu>
// 					</div>
// 				</div>
// 				<div className={styles.right_box}>
// 					<div className={styles.auth_links}>
// 						<Link href={"/contact"} className={styles.link}>
// 							<div>Contact Sales</div>
// 						</Link>
// 						<div className={styles.auth_box}>
// 							<Link
// 								href={"/auth/sign-in"}
// 								className={styles.link}
// 							>
// 								<div>Sign In</div>
// 							</Link>
// 							<Link
// 								href={"/auth/sign-up"}
// 								className={styles.link}
// 							>
// 								<div>Sign Up</div>
// 							</Link>
// 						</div>
// 					</div>
// 					<div className={styles.menu_box}>
// 						<Button className="text-[3rem]">
// 							<HamburgerMenuIcon />
// 						</Button>
// 					</div>
// 				</div>
// 			</nav>
// 		</header>
// 	);
// }

// const mobile_styles = {
// 	header: "fixed top-0 h-[6rem] w-screen flex justify-center items-center bg-background z-50",
// 	nav: "w-[80vw] flex justify-between items-center",
// 	left_box: "flex space-x-12",
// 	nav_link_wrapper: "hidden",
// 	right_box: "flex space-x-12",
// 	auth_links: "hidden",
// 	logo_box: `${mulish_heavy.className} py-2 text-[1.5rem]`,
// 	link_box: "flex space-x-4",
// 	auth_box: "flex space-x-4",
// 	menu_box: "flex justify-center items-center",
// 	link: "py-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md",
// 	link_label:
// 		"bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-red-300 via-rose-400 to-blue-100",
// } as const;

// const tablet_styles = {
// 	header: "",
// 	nav: "",
// 	left_box: "",
// 	right_box: "",
// 	logo_box: "",
// 	link_box: "",
// 	auth_box: "",
// 	link: "",
// 	menu_box: "",
// 	link_label: "",
// } as const;

// const laptop_styles = {
// 	header: "xl:h-[6rem] xl:w-screen xl:flex xl:justify-center xl:items-center",
// 	nav: "xl:w-[80vw] xl:flex vjustify-between xl:items-center",
// 	left_box: "xl:flex xl:space-x-12",
// 	nav_link_wrapper: "xl:block xl:flex xl:justify-center xl:items-center",
// 	right_box: "xl:flex xl:space-x-12",
// 	auth_links: "xl:flex xl:justify-center xl:items-center xl:space-x-12",
// 	logo_box: `xl:${mulish_heavy.className} xl:py-2 xl:text-[2.25rem]`,
// 	link_box: "xl:flex xl:space-x-4",
// 	auth_box: "xl:flex xl:space-x-4",
// 	menu_box: "xl:hidden",
// 	link: "",
// 	link_label: "",
// } as const;

// const styles = {
// 	header: cn(mobile_styles.header, laptop_styles.header),
// 	nav: cn(mobile_styles.nav, laptop_styles.nav),
// 	left_box: cn(mobile_styles.left_box, laptop_styles.left_box),
// 	nav_link_wrapper: cn(
// 		mobile_styles.nav_link_wrapper,
// 		laptop_styles.nav_link_wrapper,
// 	),
// 	right_box: cn(mobile_styles.right_box, laptop_styles.right_box),
// 	auth_links: cn(mobile_styles.auth_links, laptop_styles.auth_links),
// 	logo_box: cn(mobile_styles.logo_box, laptop_styles.logo_box),
// 	link_box: cn(mobile_styles.link_box, laptop_styles.link_box),
// 	auth_box: cn(mobile_styles.auth_box, laptop_styles.auth_box),
// 	link: cn(mobile_styles.link, laptop_styles.link),
// 	menu_box: cn(mobile_styles.menu_box, laptop_styles.menu_box),
// 	link_label: cn(mobile_styles.link_label, laptop_styles.link_label),
// } as const;

// const components: { title: string; href: string; description: string }[] = [
// 	{
// 		title: "Alert Dialog",
// 		href: "/docs/primitives/alert-dialog",
// 		description:
// 			"A modal dialog that interrupts the user with important content and expects a response.",
// 	},
// 	{
// 		title: "Hover Card",
// 		href: "/docs/primitives/hover-card",
// 		description:
// 			"For sighted users to preview content available behind a link.",
// 	},
// 	{
// 		title: "Progress",
// 		href: "/docs/primitives/progress",
// 		description:
// 			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
// 	},
// 	{
// 		title: "Scroll-area",
// 		href: "/docs/primitives/scroll-area",
// 		description: "Visually or semantically separates content.",
// 	},
// 	{
// 		title: "Tabs",
// 		href: "/docs/primitives/tabs",
// 		description:
// 			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
// 	},
// 	{
// 		title: "Tooltip",
// 		href: "/docs/primitives/tooltip",
// 		description:
// 			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
// 	},
// ];

// const ListItem = forwardRef<
// 	React.ElementRef<"a">,
// 	React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
// 	return (
// 		<li>
// 			<NavigationMenuLink asChild>
// 				<a
// 					ref={ref}
// 					className={cn(
// 						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
// 						className,
// 					)}
// 					{...props}
// 				>
// 					<div className="text-sm font-medium leading-none">
// 						{title}
// 					</div>
// 					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
// 						{children}
// 					</p>
// 				</a>
// 			</NavigationMenuLink>
// 		</li>
// 	);
// });
// ListItem.displayName = "ListItem";
