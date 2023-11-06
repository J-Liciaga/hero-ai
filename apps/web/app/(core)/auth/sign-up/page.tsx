import { SignUp } from "@clerk/nextjs";

const styles = {
	container: "h-screen w-screen flex justify-center items-center",
} as const;

export default function SignUpPage() {
	return (
		<div className={styles.container}>
			<SignUp
				path="/sign-up"
				routing="hash"
				signInUrl="/auth/sign-in"
				redirectUrl="https://app.athena-ai.dev/onboarding/new-user"
			/>
		</div>
	);
}
