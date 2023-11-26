"use client";

import { credentialsState } from "@/shared/recoil_states/atoms";
import { ICredentials } from "@/shared/types";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { twMerge as tw } from "tailwind-merge";
import { interSemiboldFont, poppinsMediumFont } from "fonts";

export default function AccountSection() {
  const credentials = useRecoilValue(credentialsState);
  const [account, setAccount] = useState<ICredentials>();

  useEffect(() => setAccount(credentials), []);

  return (
    <section className="flex flex-col items-start gap-10">
      <h1
        className={tw(
          "text-3xl text-color-secondary-2",
          interSemiboldFont.className
        )}
      >
        Your profile
      </h1>

      <div className="grid grid-cols-6 gap-10">
        <div className="space-y-1">
          <h3
            className={tw("text-2xl capitalize", poppinsMediumFont.className)}
          >
            Name
          </h3>
          <p className="text-lg">{account?.firstName || "Unknown"}</p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw("text-2xl capitalize", poppinsMediumFont.className)}
          >
            password
          </h3>
          <p className="text-lg">{account?.password || "Unknown"}</p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw("text-2xl capitalize", poppinsMediumFont.className)}
          >
            city
          </h3>
          <p className="text-lg">{account?.city || "Unknown"}</p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw("text-2xl capitalize", poppinsMediumFont.className)}
          >
            street address
          </h3>
          <p className="text-lg">{account?.streetAddress || "Unknown"}</p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw("text-2xl capitalize", poppinsMediumFont.className)}
          >
            apartment
          </h3>
          <p className="text-lg">{account?.apartment || "Unknown"}</p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw("text-2xl capitalize", poppinsMediumFont.className)}
          >
            company name
          </h3>
          <p className="text-lg">{account?.companyName || "Unknown"}</p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw("text-2xl capitalize", poppinsMediumFont.className)}
          >
            email
          </h3>
          <p className="text-lg">{account?.email || "Unknown"}</p>
        </div>
        <div className="space-y-1">
          <h3
            className={tw("text-2xl capitalize", poppinsMediumFont.className)}
          >
            phone number
          </h3>
          <p className="text-lg">{account?.phoneNumber || "Unknown"}</p>
        </div>
      </div>
    </section>
  );
}
