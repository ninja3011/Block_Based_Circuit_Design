import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'

Blockly.Blocks['display'] = {
  init: function() {
    this.jsonInit(
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
      }
    );
  }
};

tlVerilogGenerator["display"] = (block) => {
    const text_print = block.getFieldValue('print');
    const text_signals = block.getFieldValue('signals');
    // TODO: Assemble JavaScript into code variable.
    const code = '\\$display( \"'+ text_print + '\" , '+ text_signals+ ');';
    return code;
  };


