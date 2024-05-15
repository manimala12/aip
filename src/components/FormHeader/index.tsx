import { Typography, Divider } from "@mui/material";
import React, { FC } from "react";

interface FormLayoutProps {
  heading: string;
  children: React.ReactNode;
}

const FormHeader: FC<FormLayoutProps> = ({ children, heading }) => {
  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        Agreement In Principle
      </Typography>
      <Typography variant="h2">{heading}</Typography>
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
