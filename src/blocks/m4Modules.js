import * as Blockly from 'blockly/core';
import React from 'react';


var m4_makerchip_module_block =

{
  "type": "m4_makerchip_module",
  "message0": "m4_makerchip_module",
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['m4_makerchip_module'] = {
  init: function() {
    this.jsonInit(m4_makerchip_module_block);
  }
};

var m4plus_block = 


{
  "type": "m4plus",
  "message0": "m4+ %1",
  "args0": [
    {
      "type": "field_input",
      "name": "macro",
      "text": "macro"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['m4plus'] = {
  init: function() {
    this.jsonInit(m4plus_block);
  }
};

var m4_include_lib_block = 

{
  "type": "m4_include_lib",
  "message0": "m4_include_lib([' %1 '])",
  "args0": [
    {
      "type": "field_input",
      "name": "url",
      "text": "url"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['m4_include_lib'] = {
  init: function() {
    this.jsonInit(m4_include_lib_block);
  }
};


var m4asm_block = 


{
  "type": "m4asm",
  "message0": "m4_asm( %1 )",
  "args0": [
    {
      "type": "field_input",
      "name": "asm",
      "text": "ASSEMBLY CODE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['m4asm'] = {
  init: function() {
    this.jsonInit(m4asm_block);
  }
};

var m4_general_block = 

{
  "type": "m4_general",
  "message0": "m4_ %1 ( %2 )",
  "args0": [
    {
      "type": "field_input",
      "name": "func",
      "text": "function"
    },
    {
      "type": "field_input",
      "name": "args",
      "text": "args"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};


Blockly.Blocks['m4_general'] = {
  init: function() {
    this.jsonInit(m4_general_block);
  }
};
