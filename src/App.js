import React, { useRef, useEffect, useState } from "react";
import { createRef } from "react";
import "./App.css";

import {
  Box,
  Spacer,
  useDisclosure
} from "@chakra-ui/react";
// Importing Blockly-Div Component
import BlocklyComponent, {
} from "./components/BlocklyComponent";

// Importing the toolbox
import Toolbox from "./components/toolbox"

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
import {getWarpVFileForCommit, warpVLatestSupportedCommit} from "warpv-configurator-chakra/src/utils/WarpVUtils";
import {ConfigurationParameters} from "warpv-configurator-chakra/dist/translation/ConfigurationParameters";


function App() {
  const [configuratorGlobalSettings, setConfiguratorGlobalSettings] = useState({
    settings: getInitialSettings(),
    coreJson: null,
    generalSettings: {
        warpVVersion: getWarpVFileForCommit(warpVLatestSupportedCommit),
        isa: 'RISCV',
        isaExtensions: [],
        depth: 4,
        formattingSettings: [
            "--bestsv",
            "--noline",
            "--fmtNoSource"
        ],
        customProgramEnabled: false
    },
    needsPipelineInit: true
})

const [sVForJson, setSVForJson] = useState()
const [tlvForJson, setTlvForJson] = useState()
const [macrosForJson, setMacrosForJson] = useState()
const [coreJson, setCoreJson] = useState(null)
const [configuratorCustomProgramName, setConfiguratorCustomProgramName] = useState("my_custom")
const [programText, setProgramText] = useState("")
const [formErrors, setFormErrors] = useState([]);

const [userChangedStages, setUserChangedStages] = useState([])
const [pipelineDefaultDepth, setPipelineDefaultDepth] = useState()
const [makerchipOpening, setMakerchipOpening] = useState(false)
const [downloadingCode, setDownloadingCode] = useState(false)
const detailsComponentRef = createRef()
const [selectedFile, setSelectedFile] = useState("m4")
const openInMakerchipDisclosure = useDisclosure()
const [openInMakerchipUrl, setOpenInMakerchipUrl] = useState()


const [copySuccess, setCopySuccess] = useState(false);


function getInitialSettings() {
    const settings = {
        cores: 1
    }
    ConfigurationParameters.forEach(param => settings[param.jsonKey] = param.defaultValue)
    return settings
}
// value: the code currently being displayed in the textarea
// copysuccess: to tell whether the copyCodeToClipboard has been executed
// uploadFile to see if file has been uploaded by a user





// Reference to pass to blockly div
const simpleWorkspace = createRef();
const fileInput = useRef(null);
const toolbox = createRef();
const blocklyDiv = createRef();

return (
  
<Box >
  <Box w="70%" h="100%" bg="blue.500">
    <BlocklyComponent
      blocklyDivRef = {blocklyDiv}
      toolboxref= {toolbox}
      ref={simpleWorkspace}
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
  {console.log("app.js 152", programText)}
  <Panel 
         openInMakerchipUrl={openInMakerchipUrl}
         makerchipOpening={makerchipOpening}
         setMakerchipOpening={setMakerchipOpening}
         setOpenInMakerchipUrl={setOpenInMakerchipUrl}
         programText = {programText}
         onSetProgramText ={setProgramText}
         copySuccess = {copySuccess} 
         setCopySuccess={setCopySuccess}
         simpleWorkspace={simpleWorkspace}
         tlVerilogGenerator={tlVerilogGenerator}/>

</Box>
);
}

export default App;



