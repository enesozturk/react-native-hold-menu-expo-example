import React from "react";
import { View } from "react-native";

import { HoldItem, HoldMenuProvider } from "react-native-hold-menu";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";

const items = [
  {
    text: "Actions",
    isTitle: true,
    onPress: () => {},
  },
  {
    text: "Action 1",
    icon: () => <Feather name="home" size={18} />,
    onPress: () => {
      console.log("[onPress]: Action 1");
    },
  },
  {
    text: "Action 2",
    onPress: () => {
      console.log("[onPress]: Action 2");
    },
    icon: () => <Feather name="edit" size={18} />,
  },
  {
    text: "Action 3",
    onPress: () => {
      console.log("[onPress]: Action 3");
    },
    icon: () => <Feather name="download" size={18} />,
  },
  {
    text: "Action 4",
    onPress: () => {
      console.log("[onPress]: Action 4");
    },
    icon: () => <Feather name="share" size={18} />,
    withSeperator: true,
  },
  {
    text: "Action 5",
    onPress: () => {
      console.log("[onPress]: Action 5");
    },
    icon: () => <Feather name="more-horizontal" size={18} />,
  },
];

export default function Playground() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <HoldMenuProvider theme="light">
      <View style={styles.container}>
        <View style={[styles.column, styles.content]}>
          <View style={[styles.row]}>
            <HoldItem items={items} menuAnchorPosition="bottom-left">
              <View style={styles.item}>
                <View style={[styles.dot, styles.bottomLeft]} />
              </View>
            </HoldItem>
            <HoldItem items={items}>
              <View style={styles.item}>
                <View style={[styles.dot, styles.topCenter]} />
              </View>
            </HoldItem>
            <HoldItem items={items}>
              <View style={styles.item}>
                <View style={[styles.dot, styles.topRight]} />
              </View>
            </HoldItem>
          </View>
          <View style={[styles.row]}>
            <HoldItem items={items}>
              <View style={styles.item}>
                <View style={[styles.dot, styles.topLeft]} />
              </View>
            </HoldItem>
            <HoldItem items={items}>
              <View style={styles.item}>
                <View style={[styles.dot, styles.topCenter]} />
              </View>
            </HoldItem>
            <HoldItem items={items}>
              <View style={styles.item}>
                <View style={[styles.dot, styles.topRight]} />
              </View>
            </HoldItem>
          </View>
        </View>
        <View style={[styles.footer, styles.row]}>
          <HoldItem menuAnchorPosition="bottom-left" items={items}>
            <View style={styles.item}>
              <View style={[styles.dot, styles.bottomLeft]} />
            </View>
          </HoldItem>
          <HoldItem menuAnchorPosition="bottom-center" items={items}>
            <View style={styles.item}>
              <View style={[styles.dot, styles.bottomCenter]} />
            </View>
          </HoldItem>
          <HoldItem menuAnchorPosition="bottom-right" items={items}>
            <View style={styles.item}>
              <View style={[styles.dot, styles.bottomRight]} />
            </View>
          </HoldItem>
        </View>
      </View>
    </HoldMenuProvider>
  );
}
