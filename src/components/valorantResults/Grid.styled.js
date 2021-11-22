import styled from "styled-components";

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid;
  color: white;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: solid;
  margin: 0.2em;
  justify-content: center;
`;
const Col = styled.div.attrs((props) => ({
  className: props.className,
}))`
  border: ${(props) => (props.primary ? "dashed" : "solid")};
  margin: 0.2em;
  flex-grow: 1;

  &.poop {
    background-color: red;
  }
  @media only screen and (min-width: 600px) {
    &.col-s-1 {
      flex-basis: 8.33%;
      flex-grow: 0;
    }
    &.col-s-2 {
      flex-basis: 16.66%;
      flex-grow: 0;
    }
    &.col-s-3 {
      flex-basis: 25%;
      flex-grow: 0;
    }
    &.col-s-4 {
      flex-basis: 33.33%;
      flex-grow: 0;
    }
    &.col-s-5 {
      flex-basis: 41.66%;
      flex-grow: 0;
    }
    &.col-s-6 {
      flex-basis: 50%;
      flex-grow: 0;
    }
    &.col-s-7 {
      flex-basis: 58.33%;
      flex-grow: 0;
    }
    &.col-s-8 {
      flex-basis: 66.66%;
      flex-grow: 0;
    }
    &.col-s-9 {
      flex-basis: 75%;
      flex-grow: 0;
    }
    &.col-s-10 {
      flex-basis: 83.33%;
      flex-grow: 0;
    }
    &.col-s-11 {
      flex-basis: 91.66%;
      flex-grow: 0;
    }
    &.col-s-12 {
      flex-basis: 100%;
      flex-grow: 0;
    }
  }
  @media only screen and (min-width: 768px) {
    .box {
      width: 45%;
    }
    &.col-md-1 {
      flex-basis: 8.33%;
      flex-grow: 0;
    }
    &.col-md-2 {
      flex-basis: 16.66%;
    }
    &.col-md-3 {
      flex-basis: 25%;
    }
    &.col-md-4 {
      flex-basis: 33.33%;
    }
    &.col-md-5 {
      flex-basis: 41.66%;
    }
    &.col-md-6 {
      flex-basis: 50%;
      flex-grow: 0;
    }
    &.col-md-7 {
      flex-basis: 58.33%;
      flex-grow: 0;
    }
    &.col-md-8 {
      flex-basis: 66.66%;
      flex-grow: 0;
    }
    &.col-md-9 {
      flex-basis: 75%;
      flex-grow: 0;
    }
    &.col-md-10 {
      flex-basis: 83.33%;
      flex-grow: 0;
    }
    &.col-md-11 {
      flex-basis: 91.66%;
      flex-grow: 0;
    }
    &.col-md-12 {
      flex-basis: 100%;
      flex-grow: 0;
    }
  }
`;

export { GridContainer, Row, Col };
