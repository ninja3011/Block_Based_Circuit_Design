import React from 'react'
import Blockly from 'blockly/core';


var always_ff_block =
{
  "type": "always_ff",
  "message0": "always_ff @ ( %1 ) begin %2 %3 end",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "posedge clk",
          "posedge clk"
        ],
        [
          "posedge clk, posedge reset",
          "posedge clk, posedge reset"
        ],
        [
          "posedge clk, negedge reset",
          "posedge clk, negedge reset"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['always_ff'] = {
  init: function() {
    this.jsonInit(always_ff_block);
  }
};