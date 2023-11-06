const styles = {
	container: "container relative h-full w-full",
	wrapper: "h-full w-full flex justify-center items-center",
} as const;

export default function CalendarPage() {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>HELLO WORLD</div>
		</div>
	);
}
