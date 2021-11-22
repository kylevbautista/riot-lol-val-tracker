import React from "react";

import { GridContainer, Row, Col } from "./Grid.styled.js";

function LeaderBoardExpanded({ data, valLeaderBoards }) {
  console.log(valLeaderBoards);
  return (
    <div>
      <GridContainer>
        <Row>
          <Col className="xs-12 sm-5 md-2">sdfsd</Col>
          <Col className="xs-12 sm-5 md-2">sdfsd</Col>
          <Col>sdfsd</Col>
        </Row>
      </GridContainer>
    </div>
  );
}

export default LeaderBoardExpanded;
