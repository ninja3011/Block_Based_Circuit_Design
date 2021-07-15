import React from 'react'
import Blockly from 'blockly'
var display_block = 

{
  "type": "display",
  "message0": "\\$display( \" %1  \" , %2 )",
  "args0": [
    {
      "type": "field_input",
      "name": "print",
      "text": "print statement"
    },
    {
      "type": "field_input",
      "name": "signals",
      "text": "signals"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['display'] = {
  init: function() {
    this.jsonInit(display_block);
  }
};