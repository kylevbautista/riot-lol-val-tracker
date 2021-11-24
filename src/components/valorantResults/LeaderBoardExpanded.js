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
          <Col className="xs-12">
            <table
              style={{
                border: "solid",
                backgroundColor: "light",
                width: "100%",
              }}
            >
              <thead style={{ border: "solid" }}>
                <th>Rank</th>
                <th>Player Name</th>
                <th>Ranked Rating</th>
              </thead>
              <tbody style={{ border: "solid" }}>
                {Object.keys(valLeaderBoards).length > 0 ? (
                  valLeaderBoards.players.map((agent, index) => (
                    <tr key="index">
                      <td>{index + 1}</td>
                      <td>{agent.gameName}</td>
                      <td>{agent.rankedRating}</td>
                    </tr>
                  ))
                ) : (
                  <>Loading...</>
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </GridContainer>
    </div>
  );
}

export default LeaderBoardExpanded;
