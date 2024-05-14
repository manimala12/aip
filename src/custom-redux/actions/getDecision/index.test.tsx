import axios from "axios";
import { saveDecisionAction } from "./";
import { GetDecisionConstants } from "../../constants";
import { errorToast } from "../../../components/toasts";
import { AppRoutes } from "../../../types";
import { AppState } from "../../store";

jest.mock("axios");
jest.mock("../../../components/toasts", () => ({
  errorToast: jest.fn(),
}));

describe("saveDecisionAction", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("dispatches SAVE_DECISION_REQUEST and SAVE_DECISION_SUCCESS on successful API call (patch)", async () => {
    const dispatch = jest.fn();
    const getState: () => AppState = jest.fn().mockReturnValue({
      auth: {
        email: "test@example.com",
        loading: false,
        isAuthenticated: true,
      },
      appData: {
        personalDetails: { panNumber: "ABC123" },
        loanDetails: {
          loanDuration: 12,
          propertyValue: 100000,
          deposit: 20000,
        },
        incomeDetails: { oftenYouGetPaid: 1, earning: 5000 },
        expenditureDetails: {
          loanEMI: "1000",
          vehicleEMI: "500",
          schoolFee: 2000,
          otherAmount: "300",
        },
        loading: false,
      },
    });
    const navigate = jest.fn();

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: [{ creditScore: 750 }],
    });
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: [{ id: 1, email: "test@example.com", rollNumber: 123456 }],
    });
    (
      axios.patch as jest.MockedFunction<typeof axios.patch>
    ).mockResolvedValueOnce({ status: 200 });

    await saveDecisionAction(navigate)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: GetDecisionConstants.SAVE_DECISION_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/credit-check?PAN=ABC123"
    );
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/decision?email=test@example.com"
    );
    expect(axios.patch).toHaveBeenCalledWith(
      "http://localhost:8000/decision/1",
      { result: "S" }
    );
    expect(dispatch).toHaveBeenCalledWith({
      type: GetDecisionConstants.SAVE_DECISION_SUCCESS,
      payload: {
        message: "Decision generated successfully",
        result: "S",
        rollNumber: 123456,
      },
    });
    expect(navigate).toHaveBeenCalledWith(AppRoutes.RESULT);
    expect(errorToast).not.toHaveBeenCalled();
  });

  it("dispatches SAVE_DECISION_REQUEST and SAVE_DECISION_SUCCESS on successful API call (post)", async () => {
    const dispatch = jest.fn();
    const getState: () => AppState = jest.fn().mockReturnValue({
      auth: {
        email: "test@example.com",
        loading: false,
        isAuthenticated: true,
      },
      appData: {
        personalDetails: { panNumber: "ABC123" },
        loanDetails: {
          loanDuration: 12,
          propertyValue: 100000,
          deposit: 20000,
        },
        incomeDetails: { oftenYouGetPaid: 1, earning: 5000 },
        expenditureDetails: {
          loanEMI: "1000",
          vehicleEMI: "500",
          schoolFee: 2000,
          otherAmount: "300",
        },
        loading: false,
      },
    });
    const navigate = jest.fn();

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: [{ creditScore: 650 }],
    });
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({
      data: [],
    });
    (
      axios.post as jest.MockedFunction<typeof axios.post>
    ).mockResolvedValueOnce({ status: 201 });

    await saveDecisionAction(navigate)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: GetDecisionConstants.SAVE_DECISION_REQUEST,
    });
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:8000/credit-check?PAN=ABC123"
    );
    expect(axios.post).toHaveBeenCalledWith("http://localhost:8000/decision", {
      result: "F",
      email: "test@example.com",
      rollNumber: expect.any(Number),
    });
    expect(dispatch).toHaveBeenCalledWith({
      type: GetDecisionConstants.SAVE_DECISION_SUCCESS,
      payload: {
        message: "Decision generated successfully",
        result: "F",
        rollNumber: expect.any(Number),
      },
    });
    expect(navigate).toHaveBeenCalledWith(AppRoutes.RESULT);
    expect(errorToast).not.toHaveBeenCalled();
  });

  it("dispatches SAVE_DECISION_FAILURE on unsuccessful API call", async () => {
    const dispatch = jest.fn();
    const getState: () => AppState = jest.fn().mockReturnValue({
      auth: {
        email: "test@example.com",
        loading: false,
        isAuthenticated: true,
      },
      appData: {
        personalDetails: { panNumber: "ABC123" },
        loanDetails: {
          loanDuration: 12,
          propertyValue: 100000,
          deposit: 20000,
        },
        incomeDetails: { oftenYouGetPaid: 1, earning: 5000 },
        expenditureDetails: {
          loanEMI: "1000",
          vehicleEMI: "500",
          schoolFee: 2000,
          otherAmount: "300",
        },
        loading: false,
      },
    });
    const navigate = jest.fn();

    (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(
      new Error("Failed to fetch credit score")
    );

    await saveDecisionAction(navigate)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith({
      type: GetDecisionConstants.SAVE_DECISION_REQUEST,
    });
    expect(errorToast).toHaveBeenCalledWith("Failed to fetch credit score");
    expect(dispatch).toHaveBeenCalledWith({
      type: GetDecisionConstants.SAVE_DECISION_FAILURE,
      payload: { error: "Failed to fetch credit score" },
    });
    expect(navigate).not.toHaveBeenCalled();
  });
});
