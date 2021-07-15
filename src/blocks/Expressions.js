
import * as Blockly from 'blockly/core';
import React from 'react';


/* Category: Expressions */

var expression_block =

{
  "type": "expression",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "result"
    },
    {
      "type": "field_dropdown",
      "name": "assignment",
      "options": [
        [
          "=",
          "="
        ],
        [
          "<=",
          "<="
        ],
        [
          "",
          ""
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "signal"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 290,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['expression'] = {
  init: function() {
    this.jsonInit(expression_block);
  }
};
