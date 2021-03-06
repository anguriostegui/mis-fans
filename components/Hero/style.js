import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "120px 90px",

  "@bp1": {
    padding: "90px 20px",
  },
});

export const Content = styled("div", {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});

export const Title = styled("h1", {
  margin: 0,
  color: "white",
  fontSize: 72,
  lineHeight: "115%",
  fontWeight: "bold",

  "@bp1": {
    fontSize: 44,
  },
});

export const Subtitle = styled("p", {
  margin: 0,
  marginTop: 16.88,
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: 19,
  fontWeight: "500",
  lineHeight: "150%",

  "@bp1": {
    fontSize: 18,
  },
});

export const Image = styled("img", {
  marginTop: 99.32,
  width: "100%",
});
