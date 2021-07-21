import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'

Blockly.Blocks['always_ff'] = {
  init: function() {
    this.jsonInit(
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
      }
    );
  }
};

tlVerilogGenerator['always_ff'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var statements_name = tlVerilogGenerator.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'always_ff @ (' + dropdown_name + ') begin\n'+statements_name+'\nend'  ;
    return code;
  }

