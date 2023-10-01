import React, { ComponentPropsWithoutRef } from "react";

import {
  Container,
  Input,
  Label,
} from "@/components/common/commonInput/CommonInputElements";

export interface CommonInputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
}

const CommonInput = ({ label, type = "text", ...rest }: CommonInputProps) => {
  return (
    <Container>
      <Input type={type} placeholder=" " autoComplete="off" {...rest} />
      <Label> {label} </Label>
    </Container>
  );
};

export default CommonInput;
