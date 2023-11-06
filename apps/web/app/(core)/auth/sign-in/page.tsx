import { SignIn } from "@clerk/nextjs";

const styles = {
	container: "h-screen w-screen flex justify-center items-center",
} as const;

export default function SignInPage() {
	return (
		<div className={styles.container}>
			<SignIn
				path="/sign-in"
				routing="hash"
				signUpUrl="/auth/sign-up"
				redirectUrl="https://app.athena-ai.dev"
			/>
		</div>
	);
}
