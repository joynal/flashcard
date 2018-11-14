import React, { Component } from "react";
import { Card, Col, Icon, Checkbox, Button } from "antd";

import "./Card.css";

const onChange = e => {
  console.log(`checked = ${e.target.checked}`);
};

export default class extends Component {
  state = { flipped: false };

  flipCardHandler(value = null) {
    this.setState({ flipped: value === null ? !this.state.flipped : value });
  }

  render() {
    return (
      <Col span={12}>
        <Card className={`card ${this.state.flipped && "flipped"}`}>
          <div className="container">
            <div className="front">
              <p style={{ float: "right" }}>JavaScript</p>
              <div style={{ marginTop: "2em" }}>
                <Checkbox onChange={onChange} style={{ float: "left" }} />
                <p style={{ fontSize: "1.2em", marginLeft: "2em" }}>
                  Rethinking the way we treat data and services
                </p>
              </div>
              <div>
                <Button style={{ marginRight: "1em" }}>Delete</Button>
                <Button style={{ marginRight: "1em" }}>Edit</Button>
                <Icon
                  type="arrow-right"
                  onClick={() => this.flipCardHandler(true)}
                />
              </div>
            </div>
            <div
              className="back"
              onClick={() => this.flipCardHandler(false)}
              style={{ cursor: "pointer" }}
            >
              <p>
                Context provides a way to pass data through the component tree
                without having to pass props down manually at every level
              </p>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}
