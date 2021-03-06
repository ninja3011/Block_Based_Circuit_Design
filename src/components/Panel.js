import React, { useRef, useEffect, useState } from "react";
import { ChakraProvider, Box, Stack, Button, Textarea } from "@chakra-ui/react";
import Blockly from "blockly";
import { SimpleGrid } from "@chakra-ui/react";

const Panel = (props) => {
  const {
    simpleWorkspace,
    tlVerilogGenerator,
    programText,
    onSetProgramText,
    copySuccess,
    setCopySuccess,
    makerchipOpening,
    openInMakerchipUrl,
    setOpenInMakerchipUrl,
    setMakerchipOpening,
  } = props;
  const handleConvertToTLV = () => {
    const code = tlVerilogGenerator.workspaceToCode(
      simpleWorkspace.current.workspace
    );
    console.log(
      "Panel, l23",
      code,
      simpleWorkspace,
      tlVerilogGenerator,
      programText,
      onSetProgramText
    );
    console.log(props);
    onSetProgramText(code);
  };
  const handleConvertToJS = () => {
    const code = Blockly.JavaScript.workspaceToCode(
      simpleWorkspace.current.workspace
    );
    console.log(simpleWorkspace.current.workspace);
    onSetProgramText(code);
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
    onSetProgramText(domToPretty);
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
      onSetProgramText(program);
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
    onSetProgramText(textToDom);
    console.log("textToDom:", textToDom);
  };

  // Recover From Code Button, it basically takes the code from the textarea and converts it to blockly blocks
  const handleRecoverFromCode = () => {
    const program = programText;
    console.log(simpleWorkspace.current.workspace);
    simpleWorkspace.current.workspace.clear();
    const textToDom = Blockly.Xml.textToDom(program);
    Blockly.Xml.domToWorkspace(simpleWorkspace.current.workspace, textToDom);
    onSetProgramText(textToDom);
    document.getElementById("textarea").value = program;
    console.log("textToDom:", textToDom);
  };

  // This function is written so the user can make edits in the textarea manually
  const manualtext = (event) => {
    onSetProgramText(event.target.value);
  };

  // Download Button, creates an prompt to ask for filename(with extension) and then downloads the file.
  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([programText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = prompt("file name?");
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const handleOpenInMakerchipButtonClicked = () => {
    {
      setMakerchipOpening(true);
      const formBody = new URLSearchParams();
      formBody.append("source", programText);
      fetch("https://makerchip.com/project/public", {
        method: "POST",
        body: formBody,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((resp) => resp.json())
        .then((json) => {
          const url = json.url;
          openInNewTabOrFallBack(`https://makerchip.com${url}`, "_blank");
          setMakerchipOpening(false);
        });
    }
  };

  const openInNewTabOrFallBack = (urlToRedirectTo, target) => {
    const newWindow = window.open(urlToRedirectTo, target);

    if (
      !newWindow ||
      newWindow.closed ||
      typeof newWindow.closed == "undefined"
    ) {
      // setDisclosureAndUrl(urlToRedirectTo)
    } // fallback
  };

  return (
    <ChakraProvider>
      <Box as="div" pl="72%" bg="white">
        <SimpleGrid minChildWidth="135px">
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            onClick={handleConvertToTLV}
            margin="2px"
          >
            Convert to TLV
          </Button>
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            onClick={handleCopyCodeToClipboard}
            margin="2px"
          >
            Copy to Clipboard
          </Button>
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            onClick={handleSaveToStorage}
            margin="2px"
          >
            Save To Storage
          </Button>
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            onClick={handleRecoverFromStorage}
            margin="2px"
          >
            Storage Recover
          </Button>
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            onClick={handleConvertToJS}
            margin="2px"
          >
            Convert to JS
          </Button>
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            onClick={handleOpenInMakerchipButtonClicked}
            margin="2px"
          >
            Open In Makerchip
          </Button>
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            onClick={handleRecoverFromCode}
            margin="2px"
          >
            Recover from code
          </Button>

          <Button
            size="sm"
            colorScheme="teal"
            margin="2px"
            variant="solid"
            onClick={handleDownload}
          >
            Download
          </Button>
          <Button
            size="sm"
            colorScheme="teal"
            variant="solid"
            margin="2px"
            onClick={() => document.getElementById("fileInput").click()}
          >
            Upload File
          </Button>

          <input
            type="file"
            style={{ visibility: "hidden" }}
            id="fileInput"
            onChange={(event) => handleUploadFile()}
          ></input>
        </SimpleGrid>
        <Textarea
          id="textarea"
          w="95%"
          h="700px"
          variant="outline"
          value={programText}
          size="bg"
          onChange={manualtext}
        />
      </Box>
      {/* <Box as="div" pl="72%"bg="white">
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
            Storage Recover 
          </Button>
          <Button
                      colorScheme="teal"
                      variant="solid"
                      onClick={handleConvertToJS}
          >
              Convert to JS
          </Button>
          <Button
                      colorScheme="teal"
                      variant="solid"
                      onClick={handleOpenInMakerchipButtonClicked}
          >
            Open In Makerchip
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
         id="textarea" w="95%" h ="700px" variant="outline" value={programText} size="bg" onChange={manualtext} />
      </Box> */}
    </ChakraProvider>
  );
};

export default Panel;
