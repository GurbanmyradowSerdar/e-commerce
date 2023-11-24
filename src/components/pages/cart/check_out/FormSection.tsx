"use client";

import InputWithLabel from "@/components/inputs/InputWithLabel";
import { credentialsState } from "@/shared/recoil_states/atoms";
import { ICheckoutForm } from "@/shared/types";
import { interMediumFont } from "fonts";
import { useFormik } from "formik";
import { useRecoilState } from "recoil";
import { validate } from "./validation";

export default function FormSection() {
  const [credentials, setCredentials] = useRecoilState(credentialsState);
  const {
    apartment,
    city,
    companyName,
    email,
    firstName,
    phoneNumber,
    streetAddress,
  } = credentials;
  const formik = useFormik<ICheckoutForm>({
    initialValues: {
      apartment,
      city,
      companyName,
      email,
      firstName,
      phoneNumber,
      streetAddress,
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validate,
  });
  return (
    <section className="space-y-6">
      <h1 className={`${interMediumFont.className} text-[40px]`}>
        Billing Details
      </h1>
      <div>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <InputWithLabel
            label="First Name"
            labelSpan="*"
            error={formik.errors.firstName}
            inputProps={{
              type: "text",
              required: true,
              value: formik.values.firstName,
              onChange: formik.handleChange,
              id: "firstName",
            }}
          />
        </form>
        checkbox
      </div>
    </section>
  );
}
