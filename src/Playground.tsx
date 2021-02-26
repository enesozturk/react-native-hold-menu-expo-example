import React from "react";
import { View } from "react-native";

// @ts-ignore
import { HoldItem, HoldMenuProvider } from "react-native-hold-menu";

import styles from "./styles";

const items = [
  {
    title: "Action 1",
    onPress: () => {
      console.log("[onPress]: Action 1");
    },
  },
  {
    title: "Action 2",
    onPress: () => {
      console.log("[onPress]: Action 2");
    },
  },
  {
    title: "Action 3",
    onPress: () => {
      console.log("[onPress]: Action 3");
    },
  },
  {
    title: "Action 4",
    onPress: () => {
      console.log("[onPress]: Action 4");
    },
  },
  {
    title: "Action 5",
    onPress: () => {
      console.log("[onPress]: Action 5");
    },
  },
];

export default function Playground() {
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
