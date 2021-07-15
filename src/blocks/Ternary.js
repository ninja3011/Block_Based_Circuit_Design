import React from 'react'
import * as Blockly from 'blockly/core';

var ternary_shell_block =
{
"type": "ternary_shell",
"message0": "%1 = %2 ? %3 %4 : %5 %6",
"args0": [
  {
    "type": "input_value",
    "name": "result"
  },
  {
    "type": "input_value",
    "name": "condition"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_value",
    "name": "sig1"
  },
  {
    "type": "input_dummy"
  },
  {
    "type": "input_statement",
    "name": "sig2"
  }
],
"inputsInline": true,
"previousStatement": null,
"nextStatement": null,
"colour": 230,
"tooltip": "",
"helpUrl": ""
};

Blockly.Blocks['ternary_shell'] = {
  init: function() {
    this.jsonInit(ternary_shell_block);
  }
};

var ternary_fields_block = 
{
  "type": "ternary_fields",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "input_value",
      "name": "condition"
    },
    {
      "type": "field_dropdown",
      "name": "option1",
      "options": [
        [
          "?",
          "?"
        ],
        [
          ";",
          ";"
        ],
        [
          "option",
          "OPTIONNAME"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "sig1"
    },
    {
      "type": "field_dropdown",
      "name": "option2",
      "options": [
        [
          ":",
          ":"
        ],
        [
          ";",
          ";"
        ],
        [
          "",
          ""
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};



Blockly.Blocks['ternary_fields'] = {
  init: function() {
    this.jsonInit(ternary_fields_block);
  }
};
