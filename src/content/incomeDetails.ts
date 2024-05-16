export interface InputField {
  label: string;
}

export interface IncomeDetailsContentType {
  typeOfEmployement: InputField;
  contractType: InputField;
  occupation: InputField;
  nameOfTheOccupation: InputField;
  nameOftheEmployer: InputField;
  oftenYouGetPaid: InputField;
  earning: InputField;
}
export const incomeDetailsContent: IncomeDetailsContentType = {
  typeOfEmployement: {
    label: "Type of Employement",
  },
  contractType: {
    label: "Contract Type",
  },
  occupation: {
    label: "Occupation",
  },
  nameOfTheOccupation: {
    label: "Name of the Occupation",
  },
  nameOftheEmployer: {
    label: "Name of the Employer",
  },
  oftenYouGetPaid: {
    label: "How Often do you get paid",
  },
  earning: {
    label: "How much will you earn",
  },
};
