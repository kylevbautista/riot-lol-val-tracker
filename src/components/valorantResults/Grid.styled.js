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
  border: solid;
  margin: 0.2em;
  flex-grow: 1;
  @media only screen and (min-width: 0px) {
    &.xs-1 {
      flex-basis: 8.33%;
      flex-grow: 0;
    }
    &.xs-2 {
      flex-basis: 16.66%;
    }
    &.xs-3 {
      flex-basis: 25%;
    }
    &.xs-4 {
      flex-basis: 33.33%;
    }
    &.xs-5 {
      flex-basis: 41.66%;
    }
    &.xs-6 {
      flex-basis: 50%;
      flex-grow: 0;
    }
    &.xs-7 {
      flex-basis: 58.33%;
      flex-grow: 0;
    }
    &.xs-8 {
      flex-basis: 66.66%;
      flex-grow: 0;
    }
    &.xs-9 {
      flex-basis: 75%;
      flex-grow: 0;
    }
    &.xs-10 {
      flex-basis: 83.33%;
      flex-grow: 0;
    }
    &.xs-11 {
      flex-basis: 91.66%;
      flex-grow: 0;
    }
    &.xs-12 {
      flex-basis: 100%;
      flex-grow: 0;
    }
  }
  @media only screen and (min-width: 576px) {
    &.sm-1 {
      flex-basis: 8.33%;
      flex-grow: 0;
    }
    &.sm-2 {
      flex-basis: 16.66%;
      flex-grow: 0;
    }
    &.sm-3 {
      flex-basis: 25%;
      flex-grow: 0;
    }
    &.sm-4 {
      flex-basis: 33.33%;
      flex-grow: 0;
    }
    &.sm-5 {
      flex-basis: 41.66%;
      flex-grow: 0;
    }
    &.sm-6 {
      flex-basis: 50%;
      flex-grow: 0;
    }
    &.sm-7 {
      flex-basis: 58.33%;
      flex-grow: 0;
    }
    &.sm-8 {
      flex-basis: 66.66%;
      flex-grow: 0;
    }
    &.sm-9 {
      flex-basis: 75%;
      flex-grow: 0;
    }
    &.sm-10 {
      flex-basis: 83.33%;
      flex-grow: 0;
    }
    &.sm-11 {
      flex-basis: 91.66%;
      flex-grow: 0;
    }
    &.sm-12 {
      flex-basis: 100%;
      flex-grow: 0;
    }
  }
  @media only screen and (min-width: 768px) {
    &.md-1 {
      flex-basis: 8.33%;
      flex-grow: 0;
    }
    &.md-2 {
      flex-basis: 16.66%;
    }
    &.md-3 {
      flex-basis: 25%;
    }
    &.md-4 {
      flex-basis: 33.33%;
    }
    &.md-5 {
      flex-basis: 41.66%;
    }
    &.md-6 {
      flex-basis: 50%;
      flex-grow: 0;
    }
    &.md-7 {
      flex-basis: 58.33%;
      flex-grow: 0;
    }
    &.md-8 {
      flex-basis: 66.66%;
      flex-grow: 0;
    }
    &.md-9 {
      flex-basis: 75%;
      flex-grow: 0;
    }
    &.md-10 {
      flex-basis: 83.33%;
      flex-grow: 0;
    }
    &.md-11 {
      flex-basis: 91.66%;
      flex-grow: 0;
    }
    &.md-12 {
      flex-basis: 100%;
      flex-grow: 0;
    }
  }
`;

export { GridContainer, Row, Col };
