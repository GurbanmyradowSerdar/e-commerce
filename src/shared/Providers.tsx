"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { IChildren } from "types";

export default function Providers({ children }: IChildren) {
  return (
    <RecoilRoot>
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </RecoilRoot>
  );
}
