import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import { useTheme } from "../../hooks/useTheme";
import { themeStyles } from "./styles";
import { IHeaderProps } from "./types";

const Header: FC<IHeaderProps> = ({ testProp }) => {
  const styles = themeStyles(useTheme());

  return (
    <View style={styles.container}>
      <Image source={require("path/to/your/image")} style={styles.logo} />
      <Text style={styles.headerText}>{testProp}</Text>
    </View>
  );
};

export default Header;
