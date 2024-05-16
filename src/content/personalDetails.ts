export interface InputField {
  label: string;
}

export interface PersonalDetailsContentType {
  fullName: InputField;
  panCardNumber: InputField;
  gender: InputField;
  mobileNumber: InputField;
  address: InputField;
}
export const personalDetailsContent: PersonalDetailsContentType = {
  fullName: {
    label: "Full Name",
  },
  panCardNumber: {
    label: "PAN Card Number",
  },
  gender: {
    label: "Gender",
  },
  mobileNumber: {
    label: "Mobile Number",
  },
  address: {
    label: "Address",
  },
};
