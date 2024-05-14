import { saveIncomeDetailsAction } from "./save";
import { IncomeDetailsConstants } from "../../constants";
import axios from "axios";
import { errorToast, successToast } from "../../../components/toasts";
import { AppRoutes } from "../../../types";

jest.mock("axios");
jest.mock("../../../components/toasts", () => ({
  errorToast: jest.fn(),
  successToast: jest.fn(),
}));

describe("saveIncomeDetailsAction", () => {
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

  test("should dispatch SAVE_INCOME_DETAILS_REQUEST and SAVE_INCOME_DETAILS_SUCCESS on successful save", async () => {
    const incomeDetails = {
      typeOfEmployement: "Salaried",
      contractType: "Full Time",
      occupation: "Doctor",
      nameOfTheOccupation: "",
      nameOfTheEmployer: "Jnaneswari",
      oftenYouGetPaid: 2,
      earning: "240000",
      email: "jnaneswari@gmail.com",
      id: "1",
    };
    (axios.get as jest.Mock).mockResolvedValue({ data: [incomeDetails] });
    (axios.patch as jest.Mock).mockResolvedValue({});
    const expectedPayload = {
      message: "Income details saved successfully",
      incomeDetails,
    };

    await saveIncomeDetailsAction(incomeDetails, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(dispatchMock).toHaveBeenCalledWith({
      type: IncomeDetailsConstants.SAVE_INCOME_DETAILS_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/income-details?email=test@example.com"
    );
    expect(axios.patch).toHaveBeenCalledWith(
      `http://localhost:8000/income-details/${incomeDetails.id}`,
      incomeDetails
    );
    expect(successToast).toHaveBeenCalledWith(
      "Income details saved successfully"
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: IncomeDetailsConstants.SAVE_INCOME_DETAILS_SUCCESS,
      payload: expectedPayload,
    });
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.EXPENDITURES);
  });

  test("should dispatch SAVE_INCOME_DETAILS_SUCCESS on successful creation", async () => {
    const incomeDetails = {
      typeOfEmployement: "Salaried",
      contractType: "Full Time",
      occupation: "Doctor",
      nameOfTheOccupation: "",
      nameOfTheEmployer: "Jnaneswari",
      oftenYouGetPaid: 2,
      earning: "240000",
      email: "jnaneswari@gmail.com",
    };
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.post as jest.Mock).mockResolvedValue({ status: 201 });
    const expectedPayload = {
      message: "Income details saved successfully",
      incomeDetails,
    };

    await saveIncomeDetailsAction(incomeDetails, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8000/income-details",
      { ...incomeDetails, email: "test@example.com" }
    );
    expect(successToast).toHaveBeenCalledWith(
      "Income details saved successfully"
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: IncomeDetailsConstants.SAVE_INCOME_DETAILS_SUCCESS,
      payload: expectedPayload,
    });
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.EXPENDITURES);
  });

  test("should dispatch SAVE_INCOME_DETAILS_FAILURE and show error toast on network error", async () => {
    const incomeDetails = {
      typeOfEmployement: "Salaried",
      contractType: "Full Time",
      occupation: "Doctor",
      nameOfTheOccupation: "",
      nameOfTheEmployer: "Jnaneswari",
      oftenYouGetPaid: 2,
      earning: "240000",
      email: "jnaneswari@gmail.com",
    };
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await saveIncomeDetailsAction(incomeDetails, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: IncomeDetailsConstants.SAVE_INCOME_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });

  test("should dispatch SAVE_INCOME_DETAILS_FAILURE and show error toast on other errors", async () => {
    const incomeDetails = {
      typeOfEmployement: "Salaried",
      contractType: "Full Time",
      occupation: "Doctor",
      nameOfTheOccupation: "",
      nameOfTheEmployer: "Jnaneswari",
      oftenYouGetPaid: 2,
      earning: "240000",
      email: "jnaneswari@gmail.com",
    };
    const errorMessage = "Server Error";
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await saveIncomeDetailsAction(incomeDetails, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: IncomeDetailsConstants.SAVE_INCOME_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });
});
