import React from "react";
import { View } from "react-native";

import { HoldItem, HoldMenuProvider } from "react-native-hold-menu";
import { Feather as Icon } from "@expo/vector-icons";

import styles from "./styles";

const items = [
  {
    isTitle: true,
    text: "Actions",
    onPress: () => {},
  },
  {
    text: "Home",
    icon: () => <Icon name="home" size={18} />,
    onPress: () => {
      console.log("[ACTION]: Home");
    },
  },
  {
    text: "Edit",
    icon: () => <Icon name="edit" size={18} />,
    onPress: () => {
      console.log("[ACTION]: Edit");
    },
  },
  {
    text: "Download",
    onPress: () => {
      console.log("[ACTION]: Download");
    },
    icon: () => <Icon name="download" size={18} />,
  },
  {
    text: "Delete",
    onPress: () => {
      console.log("[ACTION]: Delete");
    },
    icon: () => <Icon name="trash" size={18} color={"red"} />,
    withSeperator: true,
    isDestructive: true,
  },
  {
    text: "Share",
    onPress: () => {
      console.log("[ACTION]: Share");
    },
    icon: () => <Icon name="share" size={18} />,
  },
  {
    text: "More",
    onPress: () => {
      console.log("[ACTION]: More");
    },
    icon: () => <Icon name="more-horizontal" size={18} />,
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
