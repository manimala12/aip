import { getPersonalDetailsAction } from "./get";
import { PersonalDetailsConstants } from "../../constants";
import axios from "axios";
import { errorToast } from "../../../components/toasts";

jest.mock("axios");
jest.mock("../../../components/toasts", () => ({
  errorToast: jest.fn(),
}));

describe("getPersonalDetailsAction", () => {
  let dispatchMock: jest.Mock;
  let getStateMock: jest.Mock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    getStateMock = jest.fn().mockReturnValue({
      auth: { email: "test@example.com" },
      appData: { personalDetails: null },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should dispatch GET_PERSONAL_DETAILS_REQUEST and GET_PERSONAL_DETAILS_SUCCESS on successful fetch", async () => {
    const personalDetailsData = [{ id: 1, name: "John Doe" }];
    (axios.get as jest.Mock).mockResolvedValue({
      status: 200,
      data: personalDetailsData,
    });

    await getPersonalDetailsAction()(dispatchMock, getStateMock);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: PersonalDetailsConstants.GET_PERSONAL_DETAILS_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/personal-details?email=test@example.com"
    );
    expect(dispatchMock).toHaveBeenCalledWith({
      type: PersonalDetailsConstants.GET_PERSONAL_DETAILS_SUCCESS,
      payload: {
        message: "Personal details fetched successfully",
        personalDetails: personalDetailsData[0],
      },
    });
  });

  test("should not fetch personal details if already exists", async () => {
    const getStateMockWithData = jest.fn().mockReturnValue({
      auth: { email: "test@example.com" },
      appData: { personalDetails: { id: 1, name: "John Doe" } },
    });

    await getPersonalDetailsAction()(dispatchMock, getStateMockWithData);

    expect(dispatchMock).not.toHaveBeenCalled();
    expect(axios.get).not.toHaveBeenCalled();
  });

  test("should dispatch GET_PERSONAL_DETAILS_FAILURE and show error toast on network error", async () => {
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getPersonalDetailsAction()(dispatchMock, getStateMock);

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: PersonalDetailsConstants.GET_PERSONAL_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });

  test("should dispatch GET_PERSONAL_DETAILS_FAILURE and show error toast on other errors", async () => {
    const errorMessage = "Server Error";
    (axios.get as jest.Mock).mockResolvedValue({ data: [] });
    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getPersonalDetailsAction()(dispatchMock, getStateMock);

    expect(errorToast).toHaveBeenCalledWith(errorMessage);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: PersonalDetailsConstants.GET_PERSONAL_DETAILS_FAILURE,
      payload: { error: errorMessage },
    });
  });
});
