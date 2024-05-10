import { Typography, Divider } from "@mui/material";
import React, { FC } from "react";

const FormHeader: FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Agreement In Principle
      </Typography>
      <Typography variant="h2">Your Loan Details</Typography>
      <Divider
        sx={{
          backgroundColor: "white",
          borderBottomWidth: 3,
          width: "1200px",
          marginTop: "30px",
        }}
      />
      {children}
    </>
  );
};

export default FormHeader;
