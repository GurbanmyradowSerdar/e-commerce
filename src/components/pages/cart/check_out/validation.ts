import { ICredentials } from "@/shared/types";

export const validate = (values: ICredentials) => {
  const errors: Partial<ICredentials> = {};
  if (values.firstName.length <= 0) {
    errors.firstName = "Required";
  }

  if (values.streetAddress.length <= 0) {
    errors.streetAddress = "Required";
  }

  if (values.city.length <= 0) {
    errors.city = "Required";
  }

  if (values.phoneNumber.length <= 0) {
    errors.phoneNumber = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
