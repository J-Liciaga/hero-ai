"use client";

import { Separator } from "@lucky-ui/components";
import NotificationsForm from "@pwa/core/features/settings/notifications-form";

export default function NotificationSettingsPage() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Notifications</h3>
				<p className="text-sm text-muted-foreground">
					Configure how you receive notifications.
				</p>
			</div>
			<Separator />
			<NotificationsForm />
		</div>
	);
}
