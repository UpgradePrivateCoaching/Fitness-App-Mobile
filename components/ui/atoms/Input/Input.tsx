import React, { useState, useRef } from "react";
import {
  TextInputProps,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Constants from "@constants/Constants";
import Feather from "@expo/vector-icons/Feather";

interface InputProps extends TextInputProps {
  type: "password" | "email" | "text";
  showEye: boolean;
  Icon: any;
  iconName?: any;
}

const Input: React.FC<InputProps> = ({
  iconName,
  Icon,
  showEye = false,
  type,
  ...rest
}) => {
  const [isShowEye, setIsShowEye] = useState(showEye);
  const textInputRef = useRef<
    TextInputProps & {
      focus: () => void;
    }
  >(null);

  return (
    <View style={styles.inputWithIcon}>
      <TouchableOpacity
        style={{ paddingRight: 10 }}
        activeOpacity={0.8}
        onPress={() => textInputRef.current!.focus()}
      >
        {Icon}
      </TouchableOpacity>
      <View style={{ flex: 0.95 }}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder={rest.placeholder}
          secureTextEntry={showEye ? true : false}
          ref={textInputRef}
          {...rest}
        />
      </View>
      {type === "password" && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => setIsShowEye(!isShowEye)}
        >
          {isShowEye ? (
            <Feather name="eye-off" color="#ADA4A5" size={16} />
          ) : (
            <Feather name="eye" color="#ADA4A5" size={16} />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputWithIcon: {
    width: Constants.windowWidth / 1.2,
    backgroundColor: "#F7F8F8",
    borderRadius: 15,
    alignSelf: "center",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#F7F8F8",
    height: 55,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    elevation: 10,
    paddingHorizontal: 10,
    color: "#09051C",
  },
});
