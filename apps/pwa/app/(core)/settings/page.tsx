"use client";

import { Separator } from "@lucky-ui/components";
import GeneralSettingsForm from "@pwa/core/features/settings/general-settings-form";

export default function GeneralSettingsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">General</h3>
				<p className="text-sm text-muted-foreground">
					Update your account settings. Set your preferred language
					and timezone.
				</p>
			</div>
			<Separator />
			<GeneralSettingsForm />
		</div>
	);
}
