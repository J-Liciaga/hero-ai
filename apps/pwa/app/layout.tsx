import "./global.css";

export const metadata = {
	title: "Hero.AI",
	description: "Supercharged Personal AI Assistant",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
