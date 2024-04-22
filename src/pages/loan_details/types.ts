export interface LoanDetailsValues {
  noOfPeople: string;
  homeType: string;
  propertyValue: string;
  deposit: string;
  email?: string;
}

export enum HomeTypeOptions {
  NEW_HOME = "Constructing a new home",
  EXISTING_HOME = "Reconstructing an existing home",
  BUYING_HOME = "Buying a home",
}
