import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  windowWidth: width,
  windowHeight: height,
  ios: Platform.OS === "ios",
  android: Platform.OS === "android",
  isSmallDevice: width < 375,
  isMediumDevice: width >= 375 && width < 414,
  isLargeDevice: width >= 414,
  isXLargeDevice: width >= 768,
};
