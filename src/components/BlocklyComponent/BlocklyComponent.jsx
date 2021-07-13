import React, { useEffect, useRef } from 'react';
import './BlocklyComponent.css';

import Blockly from 'blockly/core';
import locale from 'blockly/msg/en';
import 'blockly/blocks';

Blockly.setLocale(locale);


function BlocklyComponent(props) {
    const blocklyDiv = useRef(null);
    const toolbox = useRef(null);
    var workspace = null;

    useEffect(() => {
        const { initialXml, children, ...rest } = props;
        workspace = Blockly.inject(
            blocklyDiv.current,
            {   ...rest,
                toolbox: toolbox.current,
                
            },
        );

        if (initialXml) {
            Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(initialXml), workspace);
        }
        console.log(workspace)
    },[])


    function getWorkspace() {
        return workspace;
    }

    function setXml(xml){
        Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(xml), workspace);
    }


    const { children } = props;    
    return (
    <>
    <React.Fragment>
            <div ref={blocklyDiv} id="blocklyDiv" />
            <xml xmlns="https://developers.google.com/blockly/xml" is="blockly" style={{ display: 'none' }} ref={toolbox}>
                {children}
            </xml>
        </React.Fragment>
        </>
    );
    
}

export default BlocklyComponent;
