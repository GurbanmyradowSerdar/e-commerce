"use client";

import { credentialsState } from "@/shared/recoil_states/atoms";
import { ICredentials } from "@/shared/types";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { twMerge as tw } from "tailwind-merge";
import { interSemiboldFont, poppinsMediumFont } from "fonts";

export default function AccountSection({ dict }: { dict: any }) {
  const credentials = useRecoilValue(credentialsState);
  const [account, setAccount] = useState<ICredentials>();

  useEffect(() => setAccount(credentials), []);

  return (
    <section className="flex flex-col items-start gap-10">
      <h1
        className={tw(
          "text-3xl text-color-secondary-2 max-2xl:text-2xl",
          interSemiboldFont.className
        )}
      >
        {dict.pages.account.yourProfile}
      </h1>

      <div className="grid grid-cols-6 gap-10 max-3xl:grid-cols-4 max-3xl:gap-14 max-2xl:grid-cols-3">
        <div className="space-y-1">
          <h3
            className={tw(
              "text-2xl capitalize max-2xl:text-xl",
              poppinsMediumFont.className
            )}
          >
            {dict.pages.account.name}
          </h3>
          <p className="text-lg max-2xl:text-base">
            {account?.firstName || "Unknown"}
          </p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw(
              "text-2xl capitalize max-2xl:text-xl",
              poppinsMediumFont.className
            )}
          >
            {dict.pages.account.password}
          </h3>
          <p className="text-lg max-2xl:text-base">
            {account?.password || "Unknown"}
          </p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw(
              "text-2xl capitalize max-2xl:text-xl",
              poppinsMediumFont.className
            )}
          >
            {dict.pages.account.city}
          </h3>
          <p className="text-lg max-2xl:text-base">
            {account?.city || "Unknown"}
          </p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw(
              "text-2xl capitalize max-2xl:text-xl",
              poppinsMediumFont.className
            )}
          >
            {dict.pages.account.streetAddress}
          </h3>
          <p className="text-lg max-2xl:text-base">
            {account?.streetAddress || "Unknown"}
          </p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw(
              "text-2xl capitalize max-2xl:text-xl",
              poppinsMediumFont.className
            )}
          >
            {dict.pages.account.apartment}
          </h3>
          <p className="text-lg max-2xl:text-base">
            {account?.apartment || "Unknown"}
          </p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw(
              "text-2xl capitalize max-2xl:text-xl",
              poppinsMediumFont.className
            )}
          >
            {dict.pages.account.companyName}
          </h3>
          <p className="text-lg max-2xl:text-base">
            {account?.companyName || "Unknown"}
          </p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw(
              "text-2xl capitalize max-2xl:text-xl",
              poppinsMediumFont.className
            )}
          >
            {dict.pages.account.email}
          </h3>
          <p className="text-lg max-2xl:text-base">
            {account?.email || "Unknown"}
          </p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw(
              "text-2xl capitalize max-2xl:text-xl",
              poppinsMediumFont.className
            )}
          >
            {dict.pages.account.phoneNumber}
          </h3>
          <p className="text-lg max-2xl:text-base">
            {account?.phoneNumber || "Unknown"}
          </p>
        </div>
      </div>
    </section>
  );
}
