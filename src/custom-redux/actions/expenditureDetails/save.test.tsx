import axios from "axios";
import { saveExpenditureDetailsAction } from "./save";
import { ExpenditureDetailsConstants } from "../../constants";
import { successToast, errorToast } from "../../../components/toasts";
import { AppRoutes } from "../../../types";
import { AppState } from "../../store";

jest.mock("axios");
jest.mock("../../../components/toasts", () => ({
  successToast: jest.fn(),
  errorToast: jest.fn(),
}));

describe("saveExpenditureDetailsAction", () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  it("dispatches SAVE_EXPENDITURE_DETAILS_REQUEST and SAVE_EXPENDITURE_DETAILS_SUCCESS on successful API call (patch)", async () => {
    const dispatch = jest.fn();
    const getState: () => AppState = jest.fn().mockReturnValue({
      auth: {
        email: "test@example.com",
        loading: false,
        isAuthenticated: true,
      },
      appData: { expenditureDetails: undefined, loading: false },
    });
    const navigate = jest.fn();
    const mockExpenditureDetails = {
      activeLoans: "No",
      loanEMI: "",
      loanOutstanding: "",
      vehicle: "No",
      vehicleEMI: "",
      vehicleOutstanding: "",
      children: "0",
      schoolFee: "15000",
      otherExpenditures: "Yes",
      otherAmount: "50000",
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: [mockExpenditureDetails],
    });
    (
      axios.patch as jest.MockedFunction<typeof axios.patch>
    ).mockResolvedValueOnce({ status: 200 });

    await saveExpenditureDetailsAction(mockExpenditureDetails, navigate)(
      dispatch,
      getState
    );

    expect(dispatch).toHaveBeenCalledWith({
      type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_REQUEST,
    });
    expect(errorToast).not.toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/expenditures?email=test@example.com"
    );
    expect(axios.patch).toHaveBeenCalledWith(
      `http://localhost:8000/expenditures/${mockExpenditureDetails.id}`,
      {
        ...mockExpenditureDetails,
      }
    );
    expect(successToast).toHaveBeenCalledWith(
      "Expenditure details saved successfully"
    );
    expect(dispatch).toHaveBeenCalledWith({
      type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_SUCCESS,
      payload: {
        message: "Expenditure details saved successfully",
        expenditureDetails: mockExpenditureDetails,
      },
    });
    expect(navigate).toHaveBeenCalledWith(AppRoutes.REVIEW);
    expect(errorToast).not.toHaveBeenCalled();
  });

  it("dispatches SAVE_EXPENDITURE_DETAILS_REQUEST and SAVE_EXPENDITURE_DETAILS_SUCCESS on successful API call (post)", async () => {
    const dispatch = jest.fn();
    const getState: () => AppState = jest.fn().mockReturnValue({
      auth: {
        email: "test@example.com",
        loading: false,
        isAuthenticated: true,
      },
      appData: { expenditureDetails: undefined, loading: false },
    });
    const navigate = jest.fn();
    const mockExpenditureDetails = {
      activeLoans: "No",
      loanEMI: "",
      loanOutstanding: "",
      vehicle: "No",
      vehicleEMI: "",
      vehicleOutstanding: "",
      children: "0",
      schoolFee: "15000",
      otherExpenditures: "Yes",
      otherAmount: "50000",
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: [],
    });
    (
      axios.post as jest.MockedFunction<typeof axios.post>
    ).mockResolvedValueOnce({ status: 201 });

    await saveExpenditureDetailsAction(mockExpenditureDetails, navigate)(
      dispatch,
      getState
    );

    expect(dispatch).toHaveBeenCalledWith({
      type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/expenditures?email=test@example.com"
    );
    expect(axios.post).toHaveBeenCalledWith(
      `http://localhost:8000/expenditures`,
      {
        ...mockExpenditureDetails,
        email: "test@example.com",
      }
    );
    expect(successToast).toHaveBeenCalledWith(
      "Expenditure details saved successfully"
    );
    expect(dispatch).toHaveBeenCalledWith({
      type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_SUCCESS,
      payload: {
        message: "Expenditure details saved successfully",
        expenditureDetails: mockExpenditureDetails,
      },
    });
    expect(navigate).toHaveBeenCalledWith(AppRoutes.REVIEW);
    expect(errorToast).not.toHaveBeenCalled();
  });

  it("dispatches SAVE_EXPENDITURE_DETAILS_FAILURE on unsuccessful API call", async () => {
    const dispatch = jest.fn();
    const getState: () => AppState = jest.fn().mockReturnValue({
      auth: {
        email: "test@example.com",
        loading: false,
        isAuthenticated: true,
      },
      appData: { expenditureDetails: undefined, loading: false },
    });
    const navigate = jest.fn();
    const mockExpenditureDetails = {
      activeLoans: "No",
      loanEMI: "",
      loanOutstanding: "",
      vehicle: "No",
      vehicleEMI: "",
      vehicleOutstanding: "",
      children: "0",
      schoolFee: "15000",
      otherExpenditures: "Yes",
      otherAmount: "50000",
    };

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: [mockExpenditureDetails],
    });
    (
      axios.patch as jest.MockedFunction<typeof axios.patch>
    ).mockRejectedValueOnce(new Error("Failed to update"));

    await saveExpenditureDetailsAction(mockExpenditureDetails, navigate)(
      dispatch,
      getState
    );

    expect(dispatch).toHaveBeenCalledWith({
      type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_REQUEST,
    });
    expect(axios.patch).toHaveBeenCalledWith(
      `http://localhost:8000/expenditures/${mockExpenditureDetails.id}`,
      {
        ...mockExpenditureDetails,
      }
    );
    expect(errorToast).toHaveBeenCalledWith("Failed to update");
    expect(dispatch).toHaveBeenCalledWith({
      type: ExpenditureDetailsConstants.SAVE_EXPENDITURE_DETAILS_FAILURE,
      payload: { error: "Failed to update" },
    });
    expect(navigate).not.toHaveBeenCalled();
    expect(successToast).not.toHaveBeenCalled();
  });
});
