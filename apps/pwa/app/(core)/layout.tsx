"use client";

// import "@pwa/xstate/utils/inspect";
import { ThemeProvider } from "@lucky-ui/components";

export default function CoreLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	);
}
