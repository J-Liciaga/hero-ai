import SessionNavigation from "@pwa/core/components/navigation/session-navigation";
import { type ReactNode } from "react";

type SessionLayoutProps = {
	children: ReactNode;
};

const styles = {
	container: "container relative flex flex-col justify-center items-center",
	content_wrapper:
		"container relative flex justify-center items-center max-h-[95vh] h-[95vh] max-w-screen w-screen border-box",
};

export default function SessionLayout({ children }: SessionLayoutProps) {
	return (
		<div className={styles.container}>
			<SessionNavigation />
			<div className={styles.content_wrapper}>{children}</div>
		</div>
	);
}
