import React, { useRef, useEffect, useState } from "react";
import {
    ChakraProvider,
    Box,
    Flex,
    Spacer,
    Stack,
    Grid,
    Button,
    Textarea
  } from "@chakra-ui/react";
import Blockly from "blockly"
function Panel(props) {

  const {
    simpleWorkspace,
    blocklyDiv,
    tlVerilogGenerator,
    toolbox,
    value,
    setValue,
    copySuccess,
    setCopySuccess,
  } = props;

    const handleConvertToTLV = () => {
        const code = tlVerilogGenerator.workspaceToCode(
          simpleWorkspace.current.workspace
        );
        console.log(simpleWorkspace.current.workspace);
        setValue(code);
      };
      const handleConvertToJS = () => {
        const code = Blockly.JavaScript.workspaceToCode(
          simpleWorkspace.current.workspace
        );
        console.log(simpleWorkspace.current.workspace);
        setValue(code);
      };
      
    
      // Copy to Clipboard Button, copies whatever text is showing in the textarea
      const handleCopyCodeToClipboard = () => {
        const el = document.getElementById("textarea");
        el.select();
        document.execCommand("copy");
        setCopySuccess(true);
        try {
          const status = document.execCommand("copy");
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
      const handleSaveToStorage = () => {
        const xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
        const domToPretty = Blockly.Xml.domToPrettyText(xml);
        window.localStorage.setItem("myProgram", domToPretty);
        setValue(domToPretty);
        console.log("pretty text:", domToPretty);
      };
    
      // File upload button so that the user can upload a XML file to the textarea
    
      const handleUploadFile = () => {
        const upload = document.getElementById("fileInput");
        const files = upload.files;
    
        if (files.length == 0) return;
    
        const file = files[0];
    
        let reader = new FileReader();
        console.log(upload, file);
        reader.onload = (e) => {
          const file = e.target.result;
          const program = file;
          console.log(simpleWorkspace.current.workspace);
          console.log("program: ", program, simpleWorkspace.current.workspace);
          setValue(program);
        };
    
        reader.onerror = (e) => alert(e.target.error.name);
    
        reader.readAsText(file);
      };
    
      // Recover From Storage Button, it extracts the file program from local storage and then converts that XML to Blockly Blocks
      const handleRecoverFromStorage = () => {
        const program = window.localStorage.getItem("myProgram");
        simpleWorkspace.current.workspace.clear();
        const textToDom = Blockly.Xml.textToDom(program);
        Blockly.Xml.domToWorkspace(simpleWorkspace.current.workspace, textToDom);
        setValue(textToDom);
        console.log("textToDom:", textToDom);
      };
    
      // Recover From Code Button, it basically takes the code from the textarea and converts it to blockly blocks
      const handleRecoverFromCode = () => {
        const program = value;
        console.log(simpleWorkspace.current.workspace);
        simpleWorkspace.current.workspace.clear();
        const textToDom = Blockly.Xml.textToDom(program);
        Blockly.Xml.domToWorkspace(simpleWorkspace.current.workspace, textToDom);
        setValue(textToDom);
        document.getElementById("textarea").value = program;
        console.log("textToDom:", textToDom);
      };
    
      // This function is written so the user can make edits in the textarea manually
      const manualtext = (event) => {
        setValue(event.target.value);
      };
    
      // Download Button, creates an prompt to ask for filename(with extension) and then downloads the file.
      const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([value], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = prompt("file name?");
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
      };

    return (
        <ChakraProvider>
            
      <Box as="div" pl="72%"bg="white">
        <Stack spacing={1} direction="row" pt = '2%'>
          <Button
            
            colorScheme="teal"
            variant="solid"
            onClick={handleConvertToTLV}
          >
            Convert to TLV
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={handleCopyCodeToClipboard}
          >
            Copy to Clipboard
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={handleSaveToStorage}
          >
            Save To Storage
          </Button>
          </Stack>
          <Stack spacing={1} direction="row" pt='2%'> 
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={handleRecoverFromStorage}
          >
            Recover From Storage
          </Button>
          <Button
                      colorScheme="teal"
                      variant="solid"
                      onClick={handleConvertToJS}
          >
              Convert to JS
          </Button>
        </Stack>
        <Stack spacing={2} direction="row" align="center"  pt='2%'>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={handleRecoverFromCode}
          >
            Recover from code
          </Button>

        
          <Button colorScheme="teal" variant="solid" onClick={handleDownload}>
            Download
          </Button>
          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => document.getElementById("fileInput").click()}
          >
            Upload File
          </Button>
        </Stack>
        <input
          type="file"
          style={{ visibility: "hidden" }}
          id="fileInput"
          onChange={(event) => handleUploadFile()}
        ></input>

        <Textarea
         id="textarea" w="95%" h ="700px" variant="outline" value={value} size="bg" onChange={manualtext} />
      </Box>
      </ChakraProvider>
    )
}

export default Panel
