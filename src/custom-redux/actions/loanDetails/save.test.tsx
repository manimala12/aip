import { saveLoanDetailsAction } from "./save";
import { LoanDetailsConstants } from "../../constants";
import axios from "axios";
import { errorToast, successToast } from "../../../components/toasts";
import { AppRoutes } from "../../../types";

jest.mock("axios");
jest.mock("../../../components/toasts", () => ({
  errorToast: jest.fn(),
  successToast: jest.fn(),
}));

describe("saveLoanDetailsAction", () => {
  let dispatchMock: jest.Mock;
  let getStateMock: jest.Mock;
  let navigateMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    getStateMock = jest.fn().mockReturnValue({
      auth: { email: "test@example.com" },
    });
    navigateMock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should dispatch SAVE_LOAN_DETAILS_REQUEST and SAVE_LOAN_DETAILS_SUCCESS on successful save", async () => {
    const loanData = {
      noOfPeople: "1",
      homeType: "Constructing a new home",
      propertyValue: "150000",
      deposit: "34000",
      loanDuration: 23,
      email: "jnaneswari@gmail.com",
      id: "1",
    };
    (axios.get as jest.Mock).mockResolvedValue({ data: [loanData] });
    (axios.patch as jest.Mock).mockResolvedValue({});
    const expectedPayload = {
      message: "Loan details successfully",
      loanDetails: loanData,
    };

    await saveLoanDetailsAction(loanData, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(dispatchMock).toHaveBeenCalledWith({
      type: LoanDetailsConstants.SAVE_LOAN_DETAILS_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/loan-details?email=test@example.com"
    );
    expect(axios.patch).toHaveBeenCalledWith(
      `http://localhost:8000/loan-details/${loanData.id}`,
      loanData
    );
    expect(successToast).toHaveBeenCalledWith("Loan details successfully");
    expect(dispatchMock).toHaveBeenCalledWith({
      type: LoanDetailsConstants.SAVE_LOAN_DETAILS_SUCCESS,
      payload: expectedPayload,
    });
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.PERSONAL_DETAILS);
  });

  test("should dispatch SAVE_LOAN_DETAILS_SUCCESS on successful creation", async () => {
    const loanData = {
      noOfPeople: "1",
      homeType: "Constructing a new home",
      propertyValue: "150000",
      deposit: "34000",
      loanDuration: 23,
      email: "jnaneswari@gmail.com",
      id: "1",
    };
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.post as jest.Mock).mockResolvedValue({ status: 201 });
    const expectedPayload = {
      message: "Loan details successfully",
      loanDetails: loanData,
    };

    await saveLoanDetailsAction(loanData, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8000/loan-details",
      { ...loanData, email: "test@example.com" }
    );
    expect(successToast).toHaveBeenCalledWith("Loan details successfully");
    expect(dispatchMock).toHaveBeenCalledWith({
      type: LoanDetailsConstants.SAVE_LOAN_DETAILS_SUCCESS,
      payload: expectedPayload,
    });
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.PERSONAL_DETAILS);
  });

  test("should dispatch SAVE_LOAN_DETAILS_FAILURE and show error toast on network error", async () => {
    const loanData = {
      noOfPeople: "1",
      homeType: "Constructing a new home",
      propertyValue: "150000",
      deposit: "34000",
      loanDuration: 23,
      email: "jnaneswari@gmail.com",
      id: "1",
    };
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await saveLoanDetailsAction(loanData, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: LoanDetailsConstants.SAVE_LOAN_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });

  test("should dispatch SAVE_LOAN_DETAILS_FAILURE and show error toast on other errors", async () => {
    const loanData = {
      noOfPeople: "1",
      homeType: "Constructing a new home",
      propertyValue: "150000",
      deposit: "34000",
      loanDuration: 23,
      email: "jnaneswari@gmail.com",
      id: "1",
    };
    const errorMessage = "Server Error";
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await saveLoanDetailsAction(loanData, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: LoanDetailsConstants.SAVE_LOAN_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });
});
