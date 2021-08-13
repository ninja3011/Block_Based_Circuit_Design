import React, { useEffect, useRef } from "react";
import "./index.js";
import Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";
import { ChakraProvider, Box, Flex, Spacer,  Grid } from "@chakra-ui/react";

Blockly.setLocale(locale);

import React from 'react'

function BlocklyComponent(props) {
  const { 
    blocklyDiv,
    toolbox,
    initialXml, 
    children,
     ...rest } = props;
  useEffect(() => {
    
    this.primaryWorkspace = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox.current,
      ...rest,
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default BlocklyComponent
