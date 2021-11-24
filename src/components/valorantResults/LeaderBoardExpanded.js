import React from "react";

import { GridContainer, Row, Col } from "./Grid.styled.js";

function LeaderBoardExpanded({ data, valLeaderBoards }) {
  console.log(valLeaderBoards);
  return (
    <div>
      <header style={{ color: "white" }}>Styled Components Test</header>
      <GridContainer>
        <Row>
          <Col className="xs-12 sm-5 md-2">flexbox responsive col</Col>
          <Col className="xs-12 sm-5 md-2">flexbox responsive col</Col>
          <Col>flexbox responsive col</Col>
        </Row>
        <Row>
          <table
            style={{ border: "solid", backgroundColor: "light", width: "100%" }}
          >
            <thead style={{ border: "solid" }}>
              <th>Rank</th>
              <th>Player Name</th>
              <th>Ranked Rating</th>
            </thead>
            <tbody style={{ border: "solid" }}>
              {valLeaderBoards.players.map((agent, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{agent.gameName}</td>
                  <td>{agent.rankedRating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Row>
      </GridContainer>
    </div>
  );
}

export default LeaderBoardExpanded;
