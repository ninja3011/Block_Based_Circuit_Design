import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'

Blockly.Blocks['expression'] = {
  init: function() {
    this.jsonInit(

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
}
    );
  }
};


tlVerilogGenerator['expression'] = function(block) {
    var value_result = tlVerilogGenerator.valueToCode(block, 'result',tlVerilogGenerator.PRECEDENCE);
    var dropdown_assignment = block.getFieldValue('assignment');
    var value_signal = tlVerilogGenerator.valueToCode(block, 'signal',tlVerilogGenerator.PRECEDENCE);
    var code =value_result +  ' '+ dropdown_assignment + ' ' +value_signal+ ';';
    return code;
  };

