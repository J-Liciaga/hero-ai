import { Mulish, Noto_Sans_Mongolian, Kanit } from "next/font/google";

export const mulish_heavy = Mulish({
	subsets: ["latin"],
	weight: "1000",
});

export const noto_mongolian = Noto_Sans_Mongolian({
	subsets: ["latin"],
	weight: ["400"],
});

export const kanit_heavy = Kanit({
	subsets: ["latin"],
	weight: ["800"],
});

export const kanit = Kanit({
	subsets: ["latin"],
	weight: ["300"],
});
