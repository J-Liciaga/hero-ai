"use client";

import { Separator } from "@lucky-ui/components";
import FeaturesForm from "@pwa/core/features/settings/features-form";

export default function FeatureSettingsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Features</h3>
				<p className="text-sm text-muted-foreground">
					Turn items on or off to control what&apos;s displayed in the
					app.
				</p>
			</div>
			<Separator />
			<FeaturesForm />
		</div>
	);
}
