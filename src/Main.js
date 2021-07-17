// Code to manage all the components

// Importing react functionalities
import React, { useRef, useEffect, useState } from "react";
import { createRef } from "react";
import { Button } from "react-bootstrap";

// Importing Blockly-Div Component
import BlocklyComponent, {
  Block,
  Value,
  Field,
  Shadow,
  Category
} from "./components/BlocklyComponent";

// Run npm --save install blockly
import Blockly, { CONNECTING_SNAP_RADIUS } from "blockly";

// Stylings for panel
import "./App.css";

// Importing the custom generator
import tlVerilogGenerator from "./generator/tl_verilog.js";

// Importing all block definitions
import "./blocks/Components";
import "./blocks/Expressions";
import "./blocks/fileStructure";
import "./blocks/m4Modules";
import "./blocks/Printing";
import "./blocks/Procedures";
import "./blocks/Scopes";
import "./blocks/Sequential";
import "./blocks/Signals";
import "./blocks/Ternary";
import "./blocks/MultiPurpose";

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








function Main() {

  // value: the code currently being displayed in the textarea
  // copysuccess: to tell whether the copyCodeToClipboard has been executed
  // uploadFile to see if file has been uploaded by a user

  const [value, setValue] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [uploadFile, setUploadFile] = useState(false)

  // Reference to pass to blockly div
  const simpleWorkspace = createRef();

  const fileInput = useRef(null);

  useEffect(() => {
    console.log("main mounted");
  }, []);

  // Convert to TLV Button, extracts TLV code from blocks and displays to textarea
  const generateCode = () => {
    var code = tlVerilogGenerator.workspaceToCode(
      simpleWorkspace.current.workspace
    );
    console.log(simpleWorkspace.current.workspace);
    setValue(code);
  };

  // Copy to Clipboard Button, copies whatever text is showing in the textarea
  const copyCodeToClipboard = () => {
    const el = document.getElementById("textarea");
    el.select();
    document.execCommand("copy");
    setCopySuccess(true);
    try {
      var status = document.execCommand("copy");
      if (!status) {
        console.error("Cannot copy text");
      } else {
        console.log("The text is now on the clipboard");
      }
    } catch (err) {
      console.log("Unable to copy.");
    }
  };


  // Save Workspace Button, saves whatever is in the workspace to a file called program in the local storage 
  // after converting it to XML and displaying it to the textarea
  const saveWorkspace = () => {
    var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var domToPretty = Blockly.Xml.domToPrettyText(xml);
    window.localStorage.setItem("myProgram", domToPretty);
    setValue(domToPretty);
    console.log("pretty text:", domToPretty);
  };

  s

  const  handleFileUpload = () => {
  var upload = document.getElementById('fileInput')
  var files = upload.files;
      
      if (files.length == 0) return;
    
      const file = files[0];
    
      let reader = new FileReader();
      console.log(upload, file)
      reader.onload = (e) => {
          const file = e.target.result;
          var program = file;
          console.log(simpleWorkspace.current.workspace);
          console.log('program: ', program, simpleWorkspace.current.workspace)
          setValue(program);
      };
    
      reader.onerror = (e) => alert(e.target.error.name);
    
      reader.readAsText(file);
  };

  const restoreWorkspace = () => {
    var program = window.localStorage.getItem("myProgram");
    simpleWorkspace.current.workspace.clear();
    var textToDom = Blockly.Xml.textToDom(program);
    Blockly.Xml.domToWorkspace(simpleWorkspace.current.workspace, textToDom);
    setValue(textToDom);
    console.log("textToDom:", textToDom);
  };

  const manualrestoreWorkspace = () => {
    var program = value;
    console.log(simpleWorkspace.current.workspace);
    simpleWorkspace.current.workspace.clear();
    var textToDom = Blockly.Xml.textToDom(program);
    Blockly.Xml.domToWorkspace(simpleWorkspace.current.workspace, textToDom);
    setValue(textToDom);
    document.getElementById('textarea').value=program;
    console.log("textToDom:", textToDom);
  };

  const manualtext = (event) => {
    setValue(event.target.value);
  };

  const downloadXmlFile = () => {
    const element = document.createElement("a");
    const file = new Blob([value], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = prompt('file name?');
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  const pipesignal_callback = () => {
    console.log("clicked")
  };

  

  return (
    <div>
      <header className="App-header">
        <div>
          <div id="buttons_xml">
            <Button variant="success" size="sm" onClick={generateCode}>
              Convert to TLV
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => copyCodeToClipboard()}
            >
              Copy to Clipboard
            </Button>
            <Button variant="success" size="sm" onClick={() => saveWorkspace()}>
              Save To Storage
            </Button>


            <Button
              variant="success"
              size="sm"
              onClick={() => restoreWorkspace()}
            >
              Recover From Storage
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => manualrestoreWorkspace()}
            >
              Recover From Code
            </Button>


            {console.log(fileInput)}
            <Button
              variant="success"
              size="sm"
              onClick={() => downloadXmlFile()}
            >
             Download
            </Button>
            <Button
              variant="success"
              size="sm"
              onClick={() => document.getElementById("fileInput").click()}
            >
              Upload File
            </Button>
            <input type="file" 
                   style={{visibility:"hidden"}}
                   id="fileInput"
                   onChange={(event) => handleFileUpload()}
            ></input>
          </div>
          <textarea id="textarea" value={value} onChange={manualtext} />
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
        <Category name="File Structure" colour="199">
          <Block type="tlv" />
          <Block type="tlv_version" />
          <Block type="sv" />
          <Block type="sv_plus" />
          <Block type="endmodule" />
          <Block type="include" />
        </Category>

        <Category name="Multi Purpose" colour="100">
          <Block type="part_general" />
          <Block type="TLV_CODE_BLOCK">
            <Field name="FIELDNAME"></Field>
          </Block>
          <Block type="parenthesis"/>
          <Block type="semicolon" />
        </Category>

        <Category name="Logic" colour="290">
          <Category name="Expressions">
            <Block type="expression" />
          </Category>
          <Category name="Sequential">
            <Block type="always_ff" />
          </Category>
          <Category name="Components">
            <Block type="signal" />
            <Block type="logical_operator" />
            <Block type="comparison_operator" />
            <Block type="arithmetic_operator" />
            <Block type="retiming" />
            <Block type="dynamic_dropdown" />
          </Category>

          <Category name="ternary">
            <Block type="ternary_shell" />
            <Block type="ternary_fields" />
          </Category>
        </Category>

        <Category name="TLV" colour="160">
          <Category name="Scopes">
            <Block type="pipeline" />
            <Block type="stage_number" />
            <Block type="when" />
            <Block type="hierarchy" />
          </Category>
        </Category>

        <Category name="m4 Modules" colour="20">
          <Block type="m4_makerchip_module" />
          <Block type="m4plus" />
          <Block type="m4asm" />
          <Block type="m4_general" />

          <Block type="m4_include_lib" />
        </Category>

        <Category name="Printing" colour="300">
          <Block type="display" />
        </Category>

        <Category name="Signals" colour="200">
          <Category name="Signal Generator" custom="VARIABLE">
            <Block type="variables_get" />
            <Block type="variables_set" />
          </Category>

          <Category name="$pipesignals">
            <Block type="pipesignal" />
          </Category>
          <Category name="$StateSignals">
            <Block type="statesignal" />
          </Category>
          <Category name="$$assigned_signals">
            <Block type="assignedsignal" />
          </Category>
          <Category name="$$AssignedStateSignals">
            <Block type="assignedstatesignal" />
          </Category>
          <Category name="*SV_signals">
            <Block type="svsignal" />
          </Category>
          <Category name="**SV_types">
            <Block type="svtype" />
          </Category>     
          </Category>
        

        <Category name="Functions" custom="PROCEDURE" colour="134"></Category>
      </BlocklyComponent>
    </div>
  );
}

export default Main;
