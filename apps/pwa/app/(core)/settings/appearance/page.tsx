"use client";

import { Separator } from "@lucky-ui/components";
import AppearanceForm from "@pwa/core/features/settings/appearance-form";

export default function AppearancePage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Appearance</h3>
				<p className="text-sm text-muted-foreground">
					Update your account settings. Set your preferred language
					and timezone.
				</p>
			</div>
			<Separator />
			<AppearanceForm />
		</div>
	);
}
