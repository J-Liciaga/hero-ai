"use client";

import { Separator } from "@lucky-ui/components";
import BillingSettingsForm from "@pwa/core/features/settings/billing-form";

export default function BillingSettingsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Billing</h3>
				<p className="text-sm text-muted-foreground">
					Update your account billing settings. Set your preferred
					payment method.
				</p>
			</div>
			<Separator />
			<BillingSettingsForm />
		</div>
	);
}
