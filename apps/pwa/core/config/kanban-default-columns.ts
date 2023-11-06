import { Column } from "@pwa/features/kanban/_types";

export const KANBAN_DEFAULT_COLUMNS: Column[] = [
	{
		id: "todo",
		title: "Todo",
	},
	{
		id: "in-progress",
		title: "In Progress",
	},
	{
		id: "on-hold",
		title: "On Hold",
	},
	{
		id: "blocked",
		title: "Blocked",
	},
	{
		id: "cancelled",
		title: "Cancelled",
	},
	{
		id: "done",
		title: "Done",
	},
];
