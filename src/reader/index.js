import React, { Component } from "react";
import { Container } from "reactstrap";
import ReaderContainer from "./containers/ReaderContainer";

class Reader extends Component {
  render() {
    return (
      <div id="reader">
        <Container>
          <ReaderContainer />
        </Container>
      </div>
    );
  }
}

export default Reader;
