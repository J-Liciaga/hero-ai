import Head from "next/head";
import "./global.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
	title: "Hero-AI",
	description: "supercharged ai assistant & daily planner",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Head>
				<title>Hero-AI</title>
			</Head>
			<body>
				<ClerkProvider
					publishableKey={
						process.env.NX_NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
					}
				>
					<main>{children}</main>
				</ClerkProvider>
			</body>
		</html>
	);
}
