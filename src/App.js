import React, { useRef, useEffect, useState } from "react";
import { createRef } from "react";

import "./App.css";
import Main from "./Main";
import {
  ChakraProvider,
} from "@chakra-ui/react";

function App() {
  
  
  const simpleWorkspace = createRef();
  const blocklyDiv = createRef();
  const toolbox = createRef();

  const [value, setValue] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);


  return (
   
      <Main 
        simpleWorkspace={simpleWorkspace}
        blocklyDiv={blocklyDiv}
        toolbox={toolbox}
        value={value}
        setValue={setValue}
        copySuccess={copySuccess}
        setCopySuccess={setCopySuccess}
      
      />
  



  
  );
}

export default App;
