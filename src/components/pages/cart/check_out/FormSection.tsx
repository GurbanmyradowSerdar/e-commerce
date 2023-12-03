"use client";

import InputWithLabel from "@/components/inputs/InputWithLabel";
import { credentialsState } from "@/shared/recoil_states/atoms";
import { ICredentials, IDict } from "@/shared/types";
import { interMediumFont } from "fonts";
import { useFormik } from "formik";
import { useRecoilValue } from "recoil";
import { validate } from "./validation";
import { Checkbox } from "@chakra-ui/react";
import { twMerge as tw } from "tailwind-merge";

export default function FormSection({ dict }: IDict) {
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
        {dict.pages.cart.checkOut.form.title}
      </h1>
      <div className="space-y-2">
        <form className="space-y-3" onSubmit={formik.handleSubmit}>
          <InputWithLabel
            label={dict.pages.cart.checkOut.form.firstName}
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
            label={dict.pages.cart.checkOut.form.companyName}
            error={formik.errors.companyName}
            inputProps={{
              type: "text",
              value: formik.values.companyName,
              onChange: formik.handleChange,
              id: "companyName",
            }}
          />
          <InputWithLabel
            label={dict.pages.cart.checkOut.form.streetAddress}
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
            label={dict.pages.cart.checkOut.form.apartment}
            error={formik.errors.apartment}
            inputProps={{
              type: "text",
              value: formik.values.apartment,
              onChange: formik.handleChange,
              id: "apartment",
            }}
          />
          <InputWithLabel
            label={dict.pages.cart.checkOut.form.city}
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
            label={dict.pages.cart.checkOut.form.phoneNumber}
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
            label={dict.pages.cart.checkOut.form.email}
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
          {dict.pages.cart.checkOut.form.checkbox}
        </Checkbox>
      </div>
    </section>
  );
}
