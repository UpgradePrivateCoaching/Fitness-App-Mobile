import { ViewProps } from "@components/Themed";
import React from "react";
import styled from "styled-components/native";

type ContainerProps = ViewProps & {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return <StyledView {...rest}>{children}</StyledView>;
};

export default Container;

const StyledView = styled.View`
  flex: 1;
  width: "100%";
  height: "100%";
  justify-content: center;
`;
