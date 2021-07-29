import React, { useEffect, useRef } from "react";
import "./index.js";
import Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";

Blockly.setLocale(locale);


function BlocklyComponent(props) {
  const { blocklyDiv, toolbox, initialXml, children, ...rest } = props;
  var primaryWorkspace;



  const blocklyDiv_style = {
    height: "100%",
    width: "70%",
    position: "absolute",
    bottom: 0
    
  };

  return (
    <>
    <div ref={ref => {
    var primaryWorkspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox,
      ...rest,
    });

    if (initialXml) {
      Blockly.Xml.domToWorkspace(
        Blockly.Xml.textToDom(initialXml),
        primaryWorkspace
      );
    }

    }} id="blocklyDiv" style={blocklyDiv_style} />
    <xml
      xmlns="https://developers.google.com/blockly/xml"
      is="blockly"
      style={{ display: "none" }}
      ref={toolbox}
    >
      {children}
    </xml>
  </>
  )
}



export default BlocklyComponent;
