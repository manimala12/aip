import { toast } from "react-toastify";

export const successToast = (message: string) =>
  toast.success(message, {
    position: "top-center",
  });

export const errorToast = (message: string) =>
  toast.error(message, {
    position: "top-center",
  });
