"use client";

import NavigationMaster from "@web/core/components/navigation";

export default function IndexPage() {
	return (
		<NavigationMaster>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<section className={styles.section}></section>
				</div>
			</div>
		</NavigationMaster>
	);
}

const styles = {
	container: "container h-screen w-screen",
	wrapper: "flex justify-center items-center",
	section: "",
} as const;
