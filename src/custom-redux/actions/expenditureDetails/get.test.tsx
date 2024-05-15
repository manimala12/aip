import axios from "axios";
import { Dispatch } from "redux";
import { getExpenditureDetailsAction } from "./get";
import { ExpenditureDetailsConstants } from "../../constants";
import { errorToast } from "../../../components/toasts";
import { AppDataAction } from "../../../types";
import { AppState } from "../../store"; // Assuming you have these types defined
import { ExpenditureDetailsValues } from "../../../pages/Expenditures/types"; // Assuming you have this type defined

jest.mock("axios");
jest.mock("../../../components/toasts", () => ({
  errorToast: jest.fn(),
}));

describe("getExpenditureDetailsAction", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches GET_EXPENDITURE_DETAILS_REQUEST and GET_EXPENDITURE_DETAILS_SUCCESS on successful API call", async () => {
    const dispatch: Dispatch<AppDataAction> = jest.fn();
    const mockExpenditureDetails: ExpenditureDetailsValues = {
      id: "1",
      otherAmount: "100",
      activeLoans: "",
      vehicle: "",
      children: "",
      schoolFee: "",
      otherExpenditures: "",
    };
    const getState: () => AppState = jest.fn(() => ({
      auth: {
        email: "test@example.com",
        loading: false,
        isAuthenticated: true,
      },
      appData: { expenditureDetails: undefined, loading: false },
    }));

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      status: 200,
      data: [mockExpenditureDetails],
    });

    await getExpenditureDetailsAction()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: ExpenditureDetailsConstants.GET_EXPENDITURE_DETAILS_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/expenditures?email=test@example.com"
    );
    expect(dispatch).toHaveBeenCalledWith({
      type: ExpenditureDetailsConstants.GET_EXPENDITURE_DETAILS_SUCCESS,
      payload: {
        message: "Expenditure details fetched successfully",
        expenditureDetails: mockExpenditureDetails,
      },
    });
    expect(errorToast).not.toHaveBeenCalled();
  });

  it("dispatches GET_EXPENDITURE_DETAILS_REQUEST and GET_EXPENDITURE_DETAILS_SUCCESS on the successful API call", async () => {
    const dispatch: Dispatch<AppDataAction> = jest.fn();
    const mockExpenditureDetails: ExpenditureDetailsValues = {
      id: "1",
      otherAmount: "100",
      activeLoans: "",
      vehicle: "",
      children: "",
      schoolFee: "",
      otherExpenditures: "",
    };
    const getState: () => AppState = jest.fn(() => ({
      auth: {
        email: "test@example.com",
        loading: false,
        isAuthenticated: true,
      },
      appData: { expenditureDetails: mockExpenditureDetails, loading: false },
    }));

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      status: 200,
      data: [mockExpenditureDetails],
    });

    await getExpenditureDetailsAction()(dispatch, getState);

    expect(axios.get).not.toHaveBeenCalled();
    expect(dispatch).not.toHaveBeenCalled();
    expect(errorToast).not.toHaveBeenCalled();
  });

  // Write other test cases similarly
});
