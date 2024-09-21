import React, { useRef } from "react"; // Add the React import here
import { styled } from "@stitches/react";
import { useTrail, animated } from "@react-spring/web";

const AppContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Container = styled("div", {
  display: "flex",
  gap: 10,
  marginBottom: 80,
});

const Box = styled("div", {
  position: "relative",
  height: 45,
  width: 45,
});

const SharedStyles = {
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontWeight: 800,
  backfaceVisibility: "hidden",
};

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: "#fafafa",
  border: "solid 2px #1a1a1a",
});

const BackBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: "#6cab64",
  border: "solid 2px #6cab64",
  color: "#fafafa",
});

// Array containing "DONT CLICK ME"
const frontItems = [
  "D",
  "O",
  "N",
  "T",
  " ",
  "C",
  "L",
  "I",
  "C",
  "K",
  " ",
  "M",
  "E",
];
const backItems = [
  "Y",
  "O",
  "U",
  " ",
  "F",
  "O",
  "U",
  "N",
  "D",
  " ",
  "M",
  "E",
  "!",
];

export default function WordleAnimation() {
  const [trail, api] = useTrail(frontItems.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);

  const handleClick = () => {
    if (isFlipped.current) {
      api.start({
        rotateX: 0,
      });
      isFlipped.current = false;
    } else {
      api.start({
        rotateX: 180,
      });
      isFlipped.current = true;
    }
  };

  return (
    <AppContainer>
      <Container onClick={handleClick}>
        {trail.map(({ rotateX }, i) => (
          <Box key={i}>
            <FrontBox
              key={frontItems[i]}
              style={{
                transform: rotateX.to(
                  (val) => `perspective(600px) rotateX(${val}deg)`
                ),
                transformStyle: "preserve-3d",
              }}
            >
              {frontItems[i]}
            </FrontBox>
            <BackBox
              style={{
                transform: rotateX.to(
                  (val) => `perspective(600px) rotateX(${180 - val}deg)`
                ),
                transformStyle: "preserve-3d",
              }}
            >
              {backItems[i]}
            </BackBox>
          </Box>
        ))}
      </Container>
    </AppContainer>
  );
}
