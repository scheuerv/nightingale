import React, { Fragment, Component } from "react";
import ProtvistaSequence from "protvista-sequence";
import loadWebComponent from "../utils/load-web-component";

class ProtvistaSequenceWrapper extends Component {
  componentDidMount() {
    const data =
      "MAMYDDEFDTKASDLTFSPWVEVENWKDVTTRLRAIKFALQADRDKIPGVLSDLKTNCPYSAFKRFPDKSLYSVLSKEAVIAVAQIQSASGFKRRADEKNAVSGLVSVTPTQISQSASSSAATPVGLATVKPPRESDSAFQEDTFSYAKFDDASTAFHKALAYLEGLSLRPTYRRKFEKDMNVKWGGSGSAPSGAPAGGSSGSAPPTSGSSGSGAAPTPPPNP";
    document.querySelector("#seq1").data = data;
    document.querySelector("#seq2").data = data;
    document.querySelector("#seq3").data = data;
    document.querySelector("#seq4").data = data;
    document.querySelector("#seq5").data = data;
  }

  render() {
    loadWebComponent("protvista-sequence", ProtvistaSequence);
    return (
      <Fragment>
        <protvista-sequence
          id="seq1"
          length="223"
          displaystart="1"
          displayend="223"
          highlightStart="23"
          highlightEnd="45"
        />
        <protvista-sequence
          id="seq2"
          length="223"
          displaystart="10"
          displayend="150"
          highlightStart="23"
          highlightEnd="45"
        />
        <protvista-sequence
          id="seq3"
          length="223"
          displaystart="18"
          displayend="100"
          highlightStart="23"
          highlightEnd="45"
        />
        <protvista-sequence
          id="seq4"
          length="223"
          displaystart="22"
          displayend="50"
          highlightStart="23"
          highlightEnd="45"
        />
        <protvista-sequence
          id="seq5"
          length="223"
          displaystart="1"
          displayend="4"
          highlightStart="2"
          highlightEnd="2"
        />
      </Fragment>
    );
  }
}

export default ProtvistaSequenceWrapper;
