import { Container } from "@mui/material";
import React from "react";
import Inputs from "../form/Inputs";

const AddPage = () => {
  return (
    <>
      <Container>
        <Inputs isEdit={false} />
      </Container>
    </>
  );
};

export default AddPage;
