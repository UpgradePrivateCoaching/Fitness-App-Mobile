import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "../components/common/Container/Container";
import Typography from "../components/ui/atoms/Typography/Typography";
import Input from "../components/ui/atoms/Input/Input";
import { AntDesign } from "@expo/vector-icons";
const SignIn: React.FC = () => {
  return (
    <Container style={{ alignItems: "center" }}>
      <Typography fontWeight="regular" variant="h1">
        Welcome to Fitness App
      </Typography>
      <Input
        Icon={<AntDesign name="mail" size={16} color="#ADA4A5" />}
        showEye={false}
        type="text"
        placeholder="Email"
        placeholderTextColor="#ADA4A5"
      />
      <Input
        Icon={<AntDesign name="lock" size={16} color="#ADA4A5" />}
        showEye={true}
        type="password"
        placeholder="Password"
        placeholderTextColor="#ADA4A5"
      />
    </Container>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
