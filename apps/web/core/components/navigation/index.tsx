import { type ReactElement, type ReactNode } from "react";
import IndexNavigation from "./header/main-nav";
import ReturnNavigation from "./header/return-nav";
import { usePathname } from "next/navigation";
import { MainFooter, ReturnFooter } from "./footer";

export interface AppNavigationProps {
	children: ReactElement | ReactNode;
}

export default function AppNavigation({ children }: AppNavigationProps) {
	const route = usePathname();

	const handleHeaderRender = () => {
		switch (route) {
			case "/":
				return <IndexNavigation />;
			case "/auth":
				return <ReturnNavigation />;
			case "/pricing":
				return <IndexNavigation />;
			default:
				return <ReturnNavigation />;
		}
	};

	const handleFooterRender = () => {
		switch (route) {
			case "/":
				return <MainFooter />;
			case "/auth":
				return <ReturnFooter />;
			case "/pricing":
				return <MainFooter />;
			default:
				return <ReturnFooter />;
		}
	};

	return (
		<>
			{handleHeaderRender()}
			{children}
			{handleFooterRender()}
		</>
	);
}
