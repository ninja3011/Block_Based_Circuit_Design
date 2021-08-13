import React, { useEffect, useRef } from "react";
import "./index.js";
import Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";
import { ChakraProvider, Box, Flex, Spacer,  Grid } from "@chakra-ui/react";

Blockly.setLocale(locale);

class BlocklyComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const {
      blocklyDiv,
      toolbox,
      initialXml, 
      children,
      ...rest 
    } = this.props;

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
 
      
   
    const { children } = this.props;

    return (
      <>
        <Box ref={this.blocklyDiv} w="70%" h="100%" position="absolute" bottom="0"/>

        <xml

          is="blockly"
          style={{ display: "none" ,height:"91%", overflow: 'hidden',  scrollbar: 'none'
        }}
          ref={this.toolbox}
          move={{
            scrollbars: false
          }}
        >
          {children}
        </xml>
      </>
    );
  }
}

export default BlocklyComponent;
