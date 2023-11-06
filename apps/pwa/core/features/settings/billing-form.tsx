"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Icons } from "@lucky-ui/assets/icons/icons";
import cn from "clsx";
import {
	Button,
	Input,
	Form,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	toast,
	Label,
	RadioGroup,
	RadioGroupItem,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@lucky-ui/components";

const accountFormSchema = z.object({
	name: z
		.string()
		.min(2, {
			message: "Name must be at least 2 characters.",
		})
		.max(30, {
			message: "Name must not be longer than 30 characters.",
		}),
	dob: z.date({
		required_error: "A date of birth is required.",
	}),
	language: z.string({
		required_error: "Please select a language.",
	}),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
	// name: "Your name",
	// dob: new Date("2023-01-23"),
};

export default function BillingSettingsForm() {
	const form = useForm<AccountFormValues>({
		resolver: zodResolver(accountFormSchema),
		defaultValues,
	});

	function onSubmit(data: AccountFormValues) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="language"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Method</FormLabel>
							<RadioGroup
								defaultValue="card"
								className="grid grid-cols-3 gap-4"
							>
								<div>
									<RadioGroupItem
										value="card"
										id="card"
										className="peer sr-only"
									/>
									<Label
										htmlFor="card"
										className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="mb-3 h-6 w-6"
										>
											<rect
												width="20"
												height="14"
												x="2"
												y="5"
												rx="2"
											/>
											<path d="M2 10h20" />
										</svg>
										Card
									</Label>
								</div>
								<div>
									<RadioGroupItem
										value="paypal"
										id="paypal"
										className="peer sr-only"
									/>
									<Label
										htmlFor="paypal"
										className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
									>
										<Icons.paypal className="mb-3 h-6 w-6" />
										Paypal
									</Label>
								</div>
								<div>
									<RadioGroupItem
										value="apple"
										id="apple"
										className="peer sr-only"
									/>
									<Label
										htmlFor="apple"
										className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
									>
										<Icons.apple className="mb-3 h-6 w-6" />
										Apple
									</Label>
								</div>
							</RadioGroup>
							<div className="grid gap-2">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="First Last" />
							</div>
							<div className="grid gap-2">
								<Label htmlFor="number">Card number</Label>
								<Input id="number" placeholder="" />
							</div>
							<div className="grid grid-cols-3 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="month">Expires</Label>
									<Select>
										<SelectTrigger id="month">
											<SelectValue placeholder="Month" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1">
												January
											</SelectItem>
											<SelectItem value="2">
												February
											</SelectItem>
											<SelectItem value="3">
												March
											</SelectItem>
											<SelectItem value="4">
												April
											</SelectItem>
											<SelectItem value="5">
												May
											</SelectItem>
											<SelectItem value="6">
												June
											</SelectItem>
											<SelectItem value="7">
												July
											</SelectItem>
											<SelectItem value="8">
												August
											</SelectItem>
											<SelectItem value="9">
												September
											</SelectItem>
											<SelectItem value="10">
												October
											</SelectItem>
											<SelectItem value="11">
												November
											</SelectItem>
											<SelectItem value="12">
												December
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="year">Year</Label>
									<Select>
										<SelectTrigger id="year">
											<SelectValue placeholder="Year" />
										</SelectTrigger>
										<SelectContent>
											{Array.from(
												{ length: 10 },
												(_, i) => (
													<SelectItem
														key={i}
														value={`${
															new Date().getFullYear() +
															i
														}`}
													>
														{new Date().getFullYear() +
															i}
													</SelectItem>
												),
											)}
										</SelectContent>
									</Select>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="cvc">CVC</Label>
									<Input id="cvc" placeholder="CVC" />
								</div>
							</div>
							<FormDescription>
								This is the language that will be used in the
								dashboard.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Update account</Button>
			</form>
		</Form>
	);
}
