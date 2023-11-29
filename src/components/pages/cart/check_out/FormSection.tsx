"use client";

import InputWithLabel from "@/components/inputs/InputWithLabel";
import { credentialsState } from "@/shared/recoil_states/atoms";
import { ICredentials } from "@/shared/types";
import { interMediumFont } from "fonts";
import { useFormik } from "formik";
import { useRecoilValue } from "recoil";
import { validate } from "./validation";
import { Checkbox } from "@chakra-ui/react";
import { twMerge as tw } from "tailwind-merge";

export default function FormSection() {
  const credentials = useRecoilValue(credentialsState);
  const formik = useFormik<ICredentials>({
    initialValues: {
      ...credentials,
    },
    onSubmit: (values) => {},
    validate,
  });

  return (
    <section className="gap-8 flex flex-col flex-[0_0_30%] max-3xl:flex-[0_0_35%] max-2xl:flex-[0_0_30%]">
      <h1
        className={tw(
          "text-[40px] max-3xl:text-4xl max-2xl:text-2xl",
          interMediumFont.className
        )}
      >
        Billing Details
      </h1>
      <div className="space-y-2">
        <form className="space-y-3" onSubmit={formik.handleSubmit}>
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
          <InputWithLabel
            label="Company Name"
            error={formik.errors.companyName}
            inputProps={{
              type: "text",
              value: formik.values.companyName,
              onChange: formik.handleChange,
              id: "companyName",
            }}
          />
          <InputWithLabel
            label="Street Address"
            labelSpan="*"
            error={formik.errors.streetAddress}
            inputProps={{
              type: "text",
              required: true,
              value: formik.values.streetAddress,
              onChange: formik.handleChange,
              id: "streetAddress",
            }}
          />
          <InputWithLabel
            label="Apartment, floor, etc."
            error={formik.errors.apartment}
            inputProps={{
              type: "text",
              value: formik.values.apartment,
              onChange: formik.handleChange,
              id: "apartment",
            }}
          />
          <InputWithLabel
            label="City"
            labelSpan="*"
            error={formik.errors.city}
            inputProps={{
              type: "text",
              required: true,
              value: formik.values.city,
              onChange: formik.handleChange,
              id: "city",
            }}
          />
          <InputWithLabel
            label="Phone Number"
            labelSpan="*"
            error={formik.errors.phoneNumber}
            inputProps={{
              type: "text",
              required: true,
              value: formik.values.phoneNumber,
              onChange: formik.handleChange,
              id: "phoneNumber",
            }}
          />
          <InputWithLabel
            label="Email Address"
            labelSpan="*"
            error={formik.errors.email}
            inputProps={{
              type: "text",
              required: true,
              value: formik.values.email,
              onChange: formik.handleChange,
              id: "email",
            }}
          />
        </form>
        <Checkbox colorScheme="red">
          Save this information for faster check-out next time
        </Checkbox>
      </div>
    </section>
  );
}
