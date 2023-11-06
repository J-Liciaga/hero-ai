import cn from "clsx";
import Link from "next/link";

type NavigationLinkProps = {
	href: string;
	label: string;
	shortcutKey: string;
	current: boolean;
};

const styles = {
	navigation_link: "text-md font-medium",
};

export default function NavigationLink({
	href,
	label,
	current,
	shortcutKey,
}: NavigationLinkProps) {
	return (
		<li
			className={cn(
				styles.navigation_link,
				current
					? "border-b-2 border-blue-600"
					: "border-b-4 border-slate-200",
			)}
		>
			<Link href={href} className="space-x-2">
				<span>{label}</span>
				<span className="font-extralight text-xs">^ {shortcutKey}</span>
			</Link>
		</li>
	);
}
