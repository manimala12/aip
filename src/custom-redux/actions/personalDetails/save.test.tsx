import { savePersonalDetailsAction } from "./save";
import { PersonalDetailsConstants } from "../../constants";
import axios from "axios";
import { errorToast, successToast } from "../../../components/toasts";
import { AppRoutes } from "../../../types";

jest.mock("axios");
jest.mock("../../../components/toasts", () => ({
  errorToast: jest.fn(),
  successToast: jest.fn(),
}));

describe("savePersonalDetailsAction", () => {
  let dispatchMock: jest.Mock;
  let getStateMock: jest.Mock;
  let navigateMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    getStateMock = jest.fn().mockReturnValue({
      auth: { email: "test@example.com" },
      appData: { loanDetails: null, navigatedFrom: AppRoutes.LOAN_DETAILS },
    });
    navigateMock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should dispatch SAVE_PERSONAL_DETAILS_REQUEST and SAVE_PERSONAL_DETAILS_SUCCESS on successful save", async () => {
    const personalData = {
      fullName: "Jnaneswari",
      panNumber: "BAJPC4350S",
      gender: "Female",
      mobileNumber: "9876543210",
      address: "ss, skfsdl, sdf",
      email: "jnaneswari@gmail.com",
      id: "1",
    };
    (axios.get as jest.Mock).mockResolvedValue({ data: [personalData] });
    (axios.patch as jest.Mock).mockResolvedValue({});
    const expectedPayload = {
      message: "Personal details saved successfully",
      personalDetails: personalData,
    };

    await savePersonalDetailsAction(personalData, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(dispatchMock).toHaveBeenCalledWith({
      type: PersonalDetailsConstants.SAVE_PERSONAL_DETAILS_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/personal-details?email=test@example.com"
    );
    expect(axios.patch).toHaveBeenCalledWith(
      `http://localhost:8000/personal-details/${personalData.id}`,
      personalData
    );
    expect(successToast).toHaveBeenCalledWith(
      "Personal details saved successfully"
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: PersonalDetailsConstants.SAVE_PERSONAL_DETAILS_SUCCESS,
      payload: expectedPayload,
    });
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.INCOME_DETAILS);
  });

  test("should dispatch SAVE_PERSONAL_DETAILS_SUCCESS on successful creation", async () => {
    const personalData = {
      fullName: "Jnaneswari",
      panNumber: "BAJPC4350S",
      gender: "Female",
      mobileNumber: "9876543210",
      address: "ss, skfsdl, sdf",
      email: "jnaneswari@gmail.com",
    };
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.post as jest.Mock).mockResolvedValue({ status: 201 });
    const expectedPayload = {
      message: "Personal details saved successfully",
      personalDetails: personalData,
    };

    await savePersonalDetailsAction(personalData, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8000/personal-details",
      { ...personalData, email: "test@example.com" }
    );
    expect(successToast).toHaveBeenCalledWith(
      "Personal details saved successfully"
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: PersonalDetailsConstants.SAVE_PERSONAL_DETAILS_SUCCESS,
      payload: expectedPayload,
    });
    expect(navigateMock).toHaveBeenCalledWith(AppRoutes.INCOME_DETAILS);
  });

  test("should dispatch SAVE_PERSONAL_DETAILS_FAILURE and show error toast on network error", async () => {
    const personalData = {
      fullName: "Jnaneswari",
      panNumber: "BAJPC4350S",
      gender: "Female",
      mobileNumber: "9876543210",
      address: "ss, skfsdl, sdf",
      email: "jnaneswari@gmail.com",
    };
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await savePersonalDetailsAction(personalData, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: PersonalDetailsConstants.SAVE_PERSONAL_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });

  test("should dispatch SAVE_PERSONAL_DETAILS_FAILURE and show error toast on other errors", async () => {
    const personalData = {
      fullName: "Jnaneswari",
      panNumber: "BAJPC4350S",
      gender: "Female",
      mobileNumber: "9876543210",
      address: "ss, skfsdl, sdf",
      email: "jnaneswari@gmail.com",
    };
    const errorMessage = "Server Error";
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.post as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await savePersonalDetailsAction(personalData, navigateMock)(
      dispatchMock,
      getStateMock
    );

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: PersonalDetailsConstants.SAVE_PERSONAL_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });
});
