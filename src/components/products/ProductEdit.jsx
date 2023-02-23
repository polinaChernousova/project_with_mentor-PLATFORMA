import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";

import Inputs from "../form/Inputs";

const ProductEdit = () => {
  return (
    <Container>
      <Inputs isEdit={true} />
    </Container>
  );
};

export default ProductEdit;
