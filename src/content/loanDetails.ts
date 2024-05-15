export interface InputField {
  label: string;
}

export interface LoanDetailsContentType {
  noOfPeople: InputField;
  homeType: InputField;
}
export const loanDetailsContent: LoanDetailsContentType = {
  noOfPeople: {
    label: "How many people will be applying for the mortgage?",
  },
  homeType: {
    label: "Firstly, what would you like to do?",
  },
};
