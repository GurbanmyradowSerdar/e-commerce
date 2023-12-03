"use client";
import { poppinsMediumFont } from "fonts";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputWithLine from "@/components/inputs/InputWithLine";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { ICredentials, IDict } from "@/shared/types";
import { useRecoilState } from "recoil";
import { credentialsState } from "@/shared/recoil_states/atoms";
import { usePathname } from "next/navigation";

export default function SignUpForm({ dict }: IDict) {
  const [credentials, setCredentials] = useRecoilState(credentialsState);
  const formik = useFormik<ICredentials>({
    initialValues: {
      ...credentials,
    },
    onSubmit: ({ firstName, email, password, phoneNumber }) => {
      setCredentials({
        ...credentials,
        firstName,
        phoneNumber,
        password,
        email,
      });
    },
  });

  const locale = usePathname().split("/")[1];

  return (
    <form
      className="flex flex-col gap-14 max-2xl:gap-8"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-12 max-2xl:gap-8">
        <InputWithLine
          props={{
            type: "text",
            placeholder: dict.pages.registration.signUp.inputs.name,
            required: true,
            value: formik.values.firstName,
            onChange: formik.handleChange,
            id: "firstName",
          }}
        />
        <InputWithLine
          props={{
            type: "email",
            placeholder: dict.pages.registration.signUp.inputs.email,
            required: true,
            value: formik.values.email,
            onChange: formik.handleChange,
            id: "email",
          }}
        />
        <InputWithLine
          props={{
            type: "text",
            placeholder: dict.pages.registration.signUp.inputs.phoneNumber,
            required: true,
            value: formik.values.phoneNumber,
            onChange: formik.handleChange,
            id: "phoneNumber",
          }}
        />
        <InputWithLine
          props={{
            type: "password",
            placeholder: dict.pages.registration.signUp.inputs.password,
            required: true,
            value: formik.values.password,
            onChange: formik.handleChange,
            id: "password",
          }}
        />
      </div>
      <div className="flex flex-col gap-5">
        <PrimaryButton
          buttonProps={{
            type: "submit",
          }}
        >
          {dict.pages.registration.signUp.createAcc}
        </PrimaryButton>
        <OutlinedButton className="flex items-center gap-5">
          <Image
            alt=""
            src={"/icons/sign_up/google.svg"}
            width={100}
            height={100}
            className="w-7 h-7 max-2xl:w-6 max-2xl:h-6"
          />
          <span className="text-base">
            {dict.pages.registration.signUp.signGoogle}
          </span>
        </OutlinedButton>
      </div>
      <div className="flex items-center justify-center gap-4 text-color-text-2 text-lg">
        <p className="text-base max-2xl:text-sm">
          {dict.pages.registration.signUp.haveAccount}
        </p>
        <Link
          href={`/${locale}/login`}
          className={`${poppinsMediumFont.className} duration-300 ease-in-out transition-colors underline underline-offset-8 hover:text-color-text-2-hover text-base
          max-2xl:text-sm`}
        >
          {dict.pages.registration.signUp.login}
        </Link>
      </div>
    </form>
  );
}
