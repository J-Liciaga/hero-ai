"use client";

import NavigationMaster from "@web/core/components/navigation";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <NavigationMaster>{children}</NavigationMaster>;
}
