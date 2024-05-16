export interface InputField {
  label: string;
}

export interface ExpenditureDetailsContentType {
  activeLoans: InputField;
  loanEMI: InputField;
  loanOutstnading: InputField;
  vehicle: InputField;
  vehicleEMI: InputField;
  vehicleOutstanding: InputField;
  children: InputField;
  schoolFee: InputField;
  otherExpenditures: InputField;
  otherAmount: InputField;
}
export const expenditureDetailsContent: ExpenditureDetailsContentType = {
  activeLoans: {
    label: "Do you have any active loans?",
  },
  loanEMI: {
    label: "How much amount will you pay for EMI every month?",
  },
  loanOutstnading: {
    label: "Outstanding amount",
  },
  vehicle: {
    label: "Do you have any vehicle loans?",
  },
  vehicleEMI: {
    label: "How much amount will you pay for your vehicle EMI?",
  },
  vehicleOutstanding: {
    label: "Outstanding amount of your vehicle",
  },
  children: {
    label: "Number of children",
  },
  schoolFee: {
    label: "How much amount will you pay for their school fee per annum?",
  },
  otherExpenditures: {
    label: "Do you have any other expenditures",
  },
  otherAmount: {
    label: "How much amount will you spend on them every month?",
  },
};
