import React, { useRef, useEffect, useState } from "react";
import { createRef } from "react";
import {Button} from 'react-bootstrap'

import BlocklyComponent, {
  Block,
  Value,
  Field,
  Shadow,
} from "./components/BlocklyComponent";
import Blockly from "blockly";

import "./App.css";

import './blocks/fileStructure'
import tlVerilogGenerator from "./generator/tl_verilog.js";
import './generator/fileStructure'

function Main() {
  const [value, setValue] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const simpleWorkspace = createRef();

  const fileInput = useRef(null);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const generateCode = () => {
    var code = tlVerilogGenerator.workspaceToCode(
      simpleWorkspace.current.workspace
    );
    console.log(simpleWorkspace.current.workspace);
    setValue(code);
  };

  const copyCodeToClipboard = () => {
    const el = document.getElementById("textarea");
    el.select();
    document.execCommand("copy");
    setCopySuccess(true);
    try {
      var status = document.execCommand('copy');
      if(!status){
          console.error("Cannot copy text");
      }else{
          console.log("The text is now on the clipboard");
      }
  } catch (err) {
      console.log('Unable to copy.');
  }  };

  const saveWorkspace = () => {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var domToPretty = Blockly.Xml.domToPrettyText(xml);
    window.localStorage.setItem("myProgram", domToPretty);
    setValue( domToPretty);
    console.log('pretty text:', domToPretty);
  

  };

  const handleFileUpload = event => {
    console.log(event)
    const reader = new FileReader()
    reader.readAsText(event.target.files[0])
    reader.onload = async (event) => { 
      const text = (event.target.result)
      console.log(text)
    
      var program = text;
      simpleWorkspace.current.workspace.clear();
      var textToDom = Blockly.Xml.textToDom(program);
      Blockly.Xml.domToWorkspace(simpleWorkspace.current.workspace, textToDom);
      setValue( textToDom);
      console.log('textToDom:', textToDom);
    };
    console.log('handleFileUpload',event.target.files[0]);
  };

  const restoreWorkspace = () => {
    var program = window.localStorage.getItem("myProgram");
    simpleWorkspace.current.workspace.clear();
    var textToDom = Blockly.Xml.textToDom(program);
    Blockly.Xml.domToWorkspace(simpleWorkspace.current.workspace, textToDom);
    setValue( textToDom);
    console.log('textToDom:', textToDom);

  };

  const manualrestoreWorkspace = () => {
    var program = value;
    console.log(simpleWorkspace.current.workspace)
    simpleWorkspace.current.workspace.clear();
    var textToDom = Blockly.Xml.textToDom(program);
    Blockly.Xml.domToWorkspace(simpleWorkspace.current.workspace, textToDom);
    setValue( textToDom);
    console.log('textToDom:', textToDom);

  };

  const manualtext = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <header className="App-header">
        <div>
          <div>
            <Button variant="success" size="sm" onClick={generateCode}>Convert to TLV</Button>
            <Button  variant="success" size="sm"  onClick={() => copyCodeToClipboard()}>
              Copy to Clipboard
            </Button>
            <Button  variant="success" size="sm" onClick={() => saveWorkspace()}>Save To Storage</Button>

            <input
              ref={fileInput}
              onChange={handleFileUpload}
              type="file"
              style={{ display: "none" }}
            />
            {console.log(fileInput)}
            <Button variant="success" size="sm"  onClick={() => fileInput.click()}>Upload File</Button>
            <Button variant="success" size="sm"  onClick={() => restoreWorkspace()}>
              Recover From Storage
            </Button>
            <Button  variant="success" size="sm" onClick={() => manualrestoreWorkspace()}>
              Recover From Code
            </Button>
          </div>
          <textarea  id="textarea" value={value} onChange={manualtext} />
        </div>
      </header>

      <BlocklyComponent
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
        initialXml={`
          <block type="text"></block>

      `}
      >
            <category name = "File Structure"  colour="199">
              <Block type="tlv"/>
              <Block type="tlv_version" />        
              <Block type ="sv" />   
              <Block type = "sv_plus" />  
              <Block type="endmodule" /> 
              <Block type="include"/>
            </category>

            <category name="Text" colour="100">
              <Block type="text" />
              <Block type="TLV_CODE_BLOCK"><field name="FIELDNAME"></field></Block>
            </category>

            <category name = "Logic" colour="290">

              <category name="Expressions">
                <Block type="expression" />
                <Block type="expression_constant" />             
              </category>
              <category name="Sequential">
                <Block type = "always_ff" />
              </category>
              <category name="parts">
                <Block type="math_number" />
                <Block type="signal" />
                <Block type="logical_operator" />
                <Block type="comparison_operator" />
                <Block type="arithmetic_operator" />
                <Block type="semicolon" />
                <Block type="part_general" />
                <Block type ="dynamic_dropdown" />
              </category>

              <category name="ternary">
                <Block type="ternary_shell" />
                <Block type="ternary_fields" />
              </category>

            </category>
            
            <category name="TLV" colour = "160">
              <category name = "Scopes">
                <Block type="pipeline" />    
                <Block type="stage_number" />
                <Block type="when" />
                <Block type ="hierarchy"/>
              </category>
            </category>

            <category name = "m4 Modules" colour="20">
              <Block type="m4_makerchip_module"/>
              <Block type="m4plus"/>
              <Block type="m4asm"/>
              <Block type="m4_general"/>
              
              <Block type="m4_include_lib"/>
            </category>

            <category name="Printing" colour="300">
              <Block type="display"/>
            </category>
      </BlocklyComponent>
    </div>
  );
}

export default Main;
