import type { Metadata } from "next";
import { ThemeProvider, interFont } from "@/theme";

import "../theme/globals.css";

type RootLayoutProps = { children: React.ReactNode };

export const metadata: Metadata = {
	title: "Facility",
	description: "Facility description",
};

const RootLayout = ({ children }: RootLayoutProps) => (
	<html lang="en">
		<body className={interFont.className}>
			<ThemeProvider>{children}</ThemeProvider>
		</body>
	</html>
);

export default RootLayout;
