import React from "react";

import { GridContainer, Row, Col } from "./Grid.styled.js";

function LeaderBoardExpanded({ data, valLeaderBoards }) {
  console.log(valLeaderBoards);
  return (
    <div>
      <GridContainer>
        <Row>
          <Col className="col-s-1 col-md-10">sdfsd</Col>
          <Col className="col-s-1">sdfsd</Col>
          <Col className="col-s-1">sdfsd</Col>
        </Row>
      </GridContainer>
    </div>
  );
}

export default LeaderBoardExpanded;
