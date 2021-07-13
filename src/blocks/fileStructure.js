import * as Blockly from 'blockly/core';
import React from 'react';



var TLV_version_block=

{
  "type": "tlv_version",
  "message0": "\\TLV_version",
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
;

Blockly.Blocks['tlv_version'] = {
  init: function() {
    this.jsonInit(TLV_version_block);

  }
};


var end_block =
{
    "type": "endmodule",
    "message0": "endmodule",
    "previousStatement": null,
    "colour": 199,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks['endmodule'] = {
  init: function() {
    this.jsonInit(end_block);

  }
};


var include_block = 

{
  "type": "include",
  "message0": "`include \" %1 \"",
  "args0": [
    {
      "type": "field_input",
      "name": "filename",
      "text": "filename"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['include'] = {
  init: function() {
    this.jsonInit(include_block);

  }
};

var tlv_block =
{
  "type": "tlv",
  "message0": "\\TLV %1 %2",
  "args0": [
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['tlv'] = {
  init: function() {
    this.jsonInit(tlv_block);

  }
};

var sv_block =
{
  "type": "sv",
  "message0": "\\SV %1 %2",
  "args0": [
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
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['sv'] = {
  init: function() {
    this.jsonInit(sv_block);

  }
};

var svplus_block = 

{
  "type": "sv_plus",
  "message0": "\\SV_plus %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "SV"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks['sv_plus'] = {
  init: function() {
    this.jsonInit(svplus_block);
  }
};
