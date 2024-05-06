import { loanDetailsFields, personalDetailsFields } from "../../content";
import { AppRoutes } from "../../types";

export interface ReviewSection {
  label: string;
  name: string;
  fieldLabels: {
    [x: string]: string;
  };
  editButtonText: string;
  editLink: AppRoutes;
}

export const reviewSections: ReviewSection[] = [
  {
    label: "Your Loan Details",
    name: "loanDetails",
    fieldLabels: { ...loanDetailsFields },
    editButtonText: "Edit your loan details",
    editLink: AppRoutes.LOAN_DETAILS,
  },
  {
    label: "Personal Details",
    name: "personalDetails",
    fieldLabels: { ...personalDetailsFields },
    editButtonText: "Edit personal details",
    editLink: AppRoutes.PERSONAL_DETAILS,
  },
];
