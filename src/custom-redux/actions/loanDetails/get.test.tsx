import { getLoanDetailsAction } from "./get";
import { LoanDetailsConstants } from "../../constants";
import axios from "axios";
import { errorToast } from "../../../components/toasts";

jest.mock("axios");
jest.mock("../../../components/toasts", () => ({
  errorToast: jest.fn(),
}));

describe("getLoanDetailsAction", () => {
  let dispatchMock: jest.Mock;
  let getStateMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    getStateMock = jest.fn().mockReturnValue({
      auth: { email: "test@example.com" },
      appData: { loanDetails: null }, // Assuming loanDetails is initially null
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should dispatch GET_LOAN_DETAILS_REQUEST and GET_LOAN_DETAILS_SUCCESS on successful fetch", async () => {
    const loanDetailsData = [{ id: 1, amount: 5000 }];
    (axios.get as jest.Mock).mockResolvedValue({
      status: 200,
      data: loanDetailsData,
    });

    await getLoanDetailsAction()(dispatchMock, getStateMock);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: LoanDetailsConstants.GET_LOAN_DETAILS_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/loan-details?email=test@example.com"
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: LoanDetailsConstants.GET_LOAN_DETAILS_SUCCESS,
      payload: {
        message: "Loan details fetched successfully",
        loanDetails: loanDetailsData[0],
      },
    });
  });

  test("should not fetch loan details if already exists", async () => {
    const getStateMockWithData = jest.fn().mockReturnValue({
      auth: { email: "test@example.com" },
      appData: { loanDetails: { id: 1, amount: 5000 } }, // Assuming loanDetails already exists
    });

    await getLoanDetailsAction()(dispatchMock, getStateMockWithData);

    expect(dispatchMock).not.toHaveBeenCalled();
    expect(axios.get).not.toHaveBeenCalled();
  });

  test("should dispatch GET_LOAN_DETAILS_FAILURE and show error toast on network error", async () => {
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getLoanDetailsAction()(dispatchMock, getStateMock);

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: LoanDetailsConstants.GET_LOAN_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });

  test("should dispatch GET_LOAN_DETAILS_FAILURE and show error toast on other errors", async () => {
    const errorMessage = "Server Error";
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getLoanDetailsAction()(dispatchMock, getStateMock);

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: LoanDetailsConstants.GET_LOAN_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });
});
