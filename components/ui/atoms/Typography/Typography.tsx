import React from "react";
import styled from "styled-components/native";
import Colors from "../../../../constants/Colors";
import { useColorScheme, ColorSchemeName, StyleSheet } from "react-native";
import { TextProps } from "@components/Themed";

type TypographyProps = {
  children: React.ReactNode;
  fontWeight: "regular" | "bold" | "light" | "thin";
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "subtitle"
    | "large"
    | "medium"
    | "small"
    | "caption";
};

const Typography: React.FC<TypographyProps & TextProps> = ({
  children,
  fontWeight,
  variant,
  ...rest
}) => {
  const colorScheme = useColorScheme();

  return (
    <StyledText
      colorScheme={colorScheme}
      style={[styles[fontWeight], styles[variant]]}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

export default Typography;

const styles = StyleSheet.create({
  regular: {
    fontFamily: "PoppinsRegular",
  },
  bold: {
    fontFamily: "PoppinsBold",
  },
  light: {
    fontFamily: "PoppinsLight",
  },
  thin: {
    fontFamily: "PoppinsThin",
  },
  h1: {
    fontSize: 26,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 22,
  },
  h4: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 18,
  },
  large: {
    fontSize: 16,
  },
  medium: {
    fontSize: 14,
  },
  small: {
    fontSize: 12,
  },
  caption: {
    fontSize: 10,
  },
});

const StyledText = styled.Text<{ colorScheme: ColorSchemeName }>`
  color: ${(p) => Colors[p.colorScheme ?? "light"].text};
`;
