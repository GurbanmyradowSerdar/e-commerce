"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { IChildren } from "types";
import { RecoilRoot } from "recoil";

export default function Providers({ children }: IChildren) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <RecoilRoot>{children}</RecoilRoot>
      </ChakraProvider>
    </CacheProvider>
  );
}
