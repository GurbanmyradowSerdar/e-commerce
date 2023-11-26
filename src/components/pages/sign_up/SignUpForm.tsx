"use client";
import { poppinsMediumFont } from "fonts";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import InputWithLine from "@/components/inputs/InputWithLine";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import { ICredentials } from "@/shared/types";
import { useRecoilState } from "recoil";
import { credentialsState } from "@/shared/recoil_states/atoms";

export default function SignUpForm() {
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
  return (
    <form className="flex flex-col gap-14" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col gap-12">
        <InputWithLine
          props={{
            type: "text",
            placeholder: "name",
            required: true,
            value: formik.values.firstName,
            onChange: formik.handleChange,
            id: "firstName",
          }}
        />
        <InputWithLine
          props={{
            type: "email",
            placeholder: "email",
            required: true,
            value: formik.values.email,
            onChange: formik.handleChange,
            id: "email",
          }}
        />
        <InputWithLine
          props={{
            type: "text",
            placeholder: "phone number",
            required: true,
            value: formik.values.phoneNumber,
            onChange: formik.handleChange,
            id: "phoneNumber",
          }}
        />
        <InputWithLine
          props={{
            type: "password",
            placeholder: "password",
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
          create account
        </PrimaryButton>
        <OutlinedButton className="flex items-center gap-5">
          <Image
            alt=""
            src={"/icons/sign_up/google.svg"}
            width={100}
            height={100}
            className="w-7 h-7"
          />
          <span>sign up with google</span>
        </OutlinedButton>
      </div>
      <div className="flex items-center justify-center gap-4 text-color-text-2 text-lg">
        <p>Already have account</p>
        <Link
          href={"/en/login"}
          className={`${poppinsMediumFont.className} duration-300 ease-in-out transition-colors underline underline-offset-8 hover:text-color-text-2-hover`}
        >
          Log in
        </Link>
      </div>
    </form>
  );
}
