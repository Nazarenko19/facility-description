"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

type ThemeProviderProps = {
	children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	return (
		<CacheProvider>
			<ChakraProvider>{children}</ChakraProvider>
		</CacheProvider>
	);
};
