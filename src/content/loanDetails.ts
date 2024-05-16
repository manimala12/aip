export interface InputField {
  label: string;
}

export interface LoanDetailsContentType {
  noOfPeople: InputField;
  homeType: InputField;
  propertyValue: InputField;
  propertyValueDescription: InputField;
  deposit: InputField;
  depositDescription: InputField;
  loanDuration: InputField;
}
export const loanDetailsContent: LoanDetailsContentType = {
  noOfPeople: {
    label: "How many people will be applying for the mortgage?",
  },
  homeType: {
    label: "Firstly, what would you like to do?",
  },
  propertyValue: {
    label: "Property Value",
  },
  propertyValueDescription: {
    label: "This does not need to be the exact amount right now.",
  },
  deposit: {
    label: "Deposit",
  },
  depositDescription: {
    label: "Tell us roughly how much your deposit wil be.",
  },
  loanDuration: {
    label: "Desired loan duration",
  },
};
