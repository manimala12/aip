import { getIncomeDetailsAction } from "./get";
import { IncomeDetailsConstants } from "../../constants";
import axios from "axios";
import { errorToast } from "../../../components/toasts";

jest.mock("axios");
jest.mock("../../../components/toasts", () => ({
  errorToast: jest.fn(),
}));

describe("getIncomeDetailsAction", () => {
  let dispatchMock: jest.Mock;
  let getStateMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    getStateMock = jest.fn().mockReturnValue({
      auth: { email: "test@example.com" },
      appData: { incomeDetails: null }, // Assuming incomeDetails is initially null
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should dispatch GET_INCOME_DETAILS_REQUEST and GET_INCOME_DETAILS_SUCCESS on successful fetch", async () => {
    const incomeDetailsData = [{ id: 1, amount: 5000 }];
    (axios.get as jest.Mock).mockResolvedValue({
      status: 200,
      data: incomeDetailsData,
    });

    await getIncomeDetailsAction()(dispatchMock, getStateMock);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: IncomeDetailsConstants.GET_INCOME_DETAILS_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/income-details?email=test@example.com"
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: IncomeDetailsConstants.GET_INCOME_DETAILS_SUCCESS,
      payload: {
        message: "Income details fetched successfully",
        incomeDetails: incomeDetailsData[0],
      },
    });
  });

  test("should not fetch income details if already exists", async () => {
    const getStateMockWithData = jest.fn().mockReturnValue({
      auth: { email: "test@example.com" },
      appData: { incomeDetails: { id: 1, amount: 5000 } }, // Assuming incomeDetails already exists
    });

    await getIncomeDetailsAction()(dispatchMock, getStateMockWithData);

    expect(dispatchMock).not.toHaveBeenCalled();
    expect(axios.get).not.toHaveBeenCalled();
  });

  test("should dispatch GET_INCOME_DETAILS_FAILURE and show error toast on network error", async () => {
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getIncomeDetailsAction()(dispatchMock, getStateMock);

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: IncomeDetailsConstants.GET_INCOME_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });

  test("should dispatch GET_INCOME_DETAILS_FAILURE and show error toast on other errors", async () => {
    const errorMessage = "Server Error";
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getIncomeDetailsAction()(dispatchMock, getStateMock);

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: IncomeDetailsConstants.GET_INCOME_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });
});
