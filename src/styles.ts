import { StyleSheet, Dimensions } from "react-native";
const WINDOW_WIDTH = Dimensions.get("screen").width;

const spacing = 8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WINDOW_WIDTH,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 32,
  },
  content: { flex: 1, justifyContent: "space-between" },
  column: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  row: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing * 2,
    padding: spacing * 4,
    paddingVertical: spacing * 2,
  },
  footer: {
    borderTopWidth: 2,
    borderTopColor: "#f0f0f0",
    paddingBottom: spacing * 2,
  },
  item: {
    width: WINDOW_WIDTH / 5,
    height: 70,
    paddingVertical: spacing,
    borderRadius: spacing * 1.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#35B6FF",
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#33A1DF",
  },
  topRight: {
    position: "absolute",
    top: -5,
    right: -5,
  },
  topLeft: {
    position: "absolute",
    top: -5,
    left: -5,
  },
  topCenter: {
    position: "absolute",
    top: -5,
  },
  bottomRight: {
    position: "absolute",
    bottom: -5,
    right: -5,
  },
  bottomLeft: {
    position: "absolute",
    bottom: -5,
    left: -5,
  },
  bottomCenter: {
    position: "absolute",
    bottom: -5,
  },
});

export default styles;
