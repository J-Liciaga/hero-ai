"use client";

import { Button, Separator } from "@lucky-ui/components";
import SettingsNavigation from "@pwa/core/components/navigation/settings-navigation";
import { ArrowLeftIcon, QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import Link from "next/link";
// import { UserButton } from "@clerk/nextjs";

const sidebarNavItems = [
	{
		title: "General",
		href: "/settings",
	},
	{
		title: "Billing",
		href: "/settings/billing",
	},
	{
		title: "Appearance",
		href: "/settings/appearance",
	},
	{
		title: "Features",
		href: "/settings/features",
	},
	{
		title: "Notifications",
		href: "/settings/notifications",
	},
];

export default function AccountSettingsLayout({ children }: any) {
	return (
		<div className="hidden space-y-6 p-10 pb-16 md:block">
			<div className="flex justify-between items-center">
				<div className="space-y-0.5">
					<div className="flex space-x-2  items-center">
						<Link href={"/session/overview"}>
							<ArrowLeftIcon />
						</Link>
						<h2 className="text-2xl font-bold tracking-tight">
							Settings
						</h2>
					</div>
					<p className="text-muted-foreground">
						Manage your account settings and preferences.
					</p>
				</div>
				<div className="flex space-x-4 items-center justify-center">
					<Button className="bg-orange-400 hover:bg-orange-600">
						<div className="w-full flex justify-around items-center space-x-2 text-white text-xs">
							<QuestionMarkCircledIcon />
							<span>Help</span>
						</div>
					</Button>
					{/* <UserButton /> */}
				</div>
			</div>
			<Separator className="my-6" />
			<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
				<aside className="-mx-4 lg:w-1/5">
					<SettingsNavigation items={sidebarNavItems} />
				</aside>
				<div className="flex-1 lg:max-w-2xl">{children}</div>
			</div>
		</div>
	);
}
