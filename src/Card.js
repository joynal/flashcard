import React, { Component } from "react";
import { Card, Col, Icon, Checkbox } from "antd";

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
                <h2 style={{ fontSize: "1.2em", marginLeft: "2em" }}>
                  Rethinking the way we treat data and services
                </h2>
              </div>
              <div style={{ float: "right" }}>
                <a style={{ marginRight: "1em" }}>Delete</a>
                <a style={{ marginRight: "1em" }}>Edit</a>
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
