import React, { useEffect, useRef } from "react";
import "./index.js";
import Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";

Blockly.setLocale(locale);

class BlocklyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.blocklyDiv = React.createRef();
    this.toolbox = React.createRef();
  }

  componentDidMount() {
    const { blocklyDiv, toolbox, initialXml, children, ...rest } = this.props;
    this.primaryWorkspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
        this.primaryWorkspace
      );
    }
  }

  get workspace() {
    return this.primaryWorkspace;
  }

  setXml(xml) {
    Blockly.Xml.domToWorkspace(
      Blockly.Xml.textToDom(xml),
      this.primaryWorkspace
    );
  }

  render() {
    const blocklyDiv_style = {
      height: "100%",
      width: "70%",
      position: "absolute",
      bottom: 0
      
    };
    const { children } = this.props;

    return (
      <>
        <div ref={this.props.blocklyDiv} id="blocklyDiv" style={blocklyDiv_style} />
        <xml
          xmlns="https://developers.google.com/blockly/xml"
          is="blockly"
          style={{ display: "none" }}
          ref={this.props.toolbox}
        >
          {children}
        </xml>
      </>
    );
  }
}

export default BlocklyComponent;
