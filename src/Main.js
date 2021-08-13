// Code to manage all the components

// Importing react functionalities
import React, { useRef, useEffect, useState } from "react";
import { createRef } from "react";

import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  Stack,
  Grid,
  Button,
  Textarea,
} from "@chakra-ui/react";
// Importing Blockly-Div Component
import BlocklyComponent, {
  Block,
  Value,
  Field,
  Shadow,
  Category,
} from "./components/BlocklyComponent";

// Run npm --save install blockly
import Blockly, { CONNECTING_SNAP_RADIUS } from "blockly";

import Toolbox from "./components/toolbox";

// Importing the custom generator
import tlVerilogGenerator from "./generator/tl_verilog.js";

// Importing all the block code generators
import "./generator/Components";
import "./generator/Expressions";
import "./generator/fileStructure";
import "./generator/m4Modules";
import "./generator/Printing";
import "./generator/Procedures";
import "./generator/Scopes";
import "./generator/Sequential";
import "./generator/Signals";
import "./generator/Ternary";
import "./generator/MultiPurpose";
import Panel from "./components/Panel";

function Main(props) {
  // value: the code currently being displayed in the textarea
  // copysuccess: to tell whether the copyCodeToClipboard has been executed
  // uploadFile to see if file has been uploaded by a user

  const {
    simpleWorkspace,
    blocklyDiv,
    toolbox,
    value,
    setValue,
    copySuccess,
    setCopySuccess,
  } = props;

  // Reference to pass to blockly div

  useEffect(() => {
    console.log("main mounted");
  }, []);

  // Convert to TLV Button, extracts TLV code from blocks and displays to textarea

  return (
    <Box>
      <Box w="70%" h="100%" bg="blue.500">
        <BlocklyComponent
          ref={simpleWorkspace}
          blocklyDiv={blocklyDiv}
          toolbox={toolbox}
          colour={"black"}
          readOnly={false}
          trashcan={true}
          media={"media/"}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          // Blocks that show up when the component renders
          initialXml={`
        <xml xmlns="https://developers.google.com/blockly/xml">
        <block type="tlv_version" id="i:~1Q]=gvSsiYTmS#{up" x="187" y="59">
          <next>
            <block type="sv" id="/|dHN{#pzZDmwGVlZ\`B*">
              <statement name="NAME">
                <block type="m4_makerchip_module" id="G?]7\`vFN-../Ls7tGwHj"></block>
              </statement>
              <next>
                <block type="tlv" id="X-Z5@s%;fL^z?g0BCtNP">
                  <next>
                    <block type="sv" id="5zFC9udPQJSZocZ\/I)\[s">
                      <statement name="NAME">
                        <block type="endmodule" id="D\[3;mCF|Cx;DpAKz4SfM"></block>
                      </statement>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </next>
        </block>
      </xml> 
      `}
        >
          {" "}
          {/* End of BlocklyComponent */}
          {/* Creating the Toolbox  */}
          {console.log(Toolbox)}
          <Toolbox />
        </BlocklyComponent>
      </Box>
      <Spacer></Spacer>
      <Panel
        simpleWorkspace={simpleWorkspace}
        tlVerilogGenerator={tlVerilogGenerator}
        value={value}
        setValue={setValue}
        copySuccess={copySuccess}
        setCopySuccess={setCopySuccess}
      />

    </Box>
  );
}

export default Main;
