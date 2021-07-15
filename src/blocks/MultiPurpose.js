import React from 'react'
import Blockly from 'blockly'

var multiline_block = {
    "type": "TLV_CODE_BLOCK",
     "message0": "Multiline: %1",
     "previousStatement": null,
     "nextStatement": null,
     "args0": [
       {
         "type": "field_multilinetext",
         "name": "FIELDNAME",
         "text": "default text\n with newline character",
         "spellcheck": false
       }
     
     ]
   };
 
 
 Blockly.Blocks['TLV_CODE_BLOCK'] = {
   init: function() {
     this.jsonInit(multiline_block);
    
   }
 };


var part_general_block =

{
  "type": "part_general",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "field_input",
      "name": "NAME",
      "text": "general"
    },
    {
      "type": "input_value",
      "name": "general"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['part_general'] = {
  init: function() {
    this.jsonInit(part_general_block);
  }
};