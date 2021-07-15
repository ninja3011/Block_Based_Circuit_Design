import React from 'react'
import * as Blockly from 'blockly/core';

var stage_number_block =
{
  "type": "stage_number",
  "message0": "@ %1 %2 %3",
  "args0": [
    {
      "type": "field_number",
      "name": "stage_no",
      "value": 0
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "expression"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['stage_number'] = {
  init: function() {
    this.jsonInit(stage_number_block);

  }
};

var pipeline_block =

{
  "type": "pipeline",
  "message0": "| %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "pipeline",
      "text": ""
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
  "colour": 65,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['pipeline'] = {
  init: function() {
    this.jsonInit(pipeline_block);

  }
};

var hierarchy_block = 
{
  "type": "hierarchy",
  "message0": "/ %1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "beh_hier",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "block"
    }
  ],
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['hierarchy'] = {
  init: function() {
    this.jsonInit(hierarchy_block);

  }
};



var when_block =

{
  "type": "when",
  "message0": "? %1 %2 %3 %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "sig_type",
      "options": [
        [
          "$",
          "$"
        ],
        [
          "*",
          "*"
        ],
        [
          "",
          ""
        ]
      ]
    },
    {
      "type": "field_input",
      "name": "signal",
      "text": ""
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};


Blockly.Blocks['when'] = {
  init: function() {
    this.jsonInit(when_block);
  }
};