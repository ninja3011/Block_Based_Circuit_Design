import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'

  
Blockly.Blocks['ternary_shell'] = {
  init: function() {
    this.jsonInit(
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
        }
    );
  }
};

 tlVerilogGenerator['ternary_shell'] = function(block) {
    var value_result =tlVerilogGenerator.valueToCode(block, 'result',tlVerilogGenerator.PRECEDENCE);
    var value_condition =tlVerilogGenerator.valueToCode(block, 'condition',tlVerilogGenerator.PRECEDENCE);
    var value_sig1 =tlVerilogGenerator.valueToCode(block, 'sig1',tlVerilogGenerator.PRECEDENCE);
    var statements_sig2 =tlVerilogGenerator.statementToCode(block, 'sig2');
    var code =  value_result + ' = ' +  value_condition + ' ? ' + value_sig1 + ' :\n' + statements_sig2; ;
    return code;
  };

  Blockly.Blocks['ternary_fields'] = {
    init: function() {
      this.jsonInit(
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
        }
      );
    }
  };
  

 tlVerilogGenerator['ternary_fields'] = function(block) {
    var value_condition =tlVerilogGenerator.valueToCode(block, 'condition',tlVerilogGenerator.PRECEDENCE);
    var dropdown_option1 = block.getFieldValue('option1');
    var value_sig1 =tlVerilogGenerator.valueToCode(block, 'sig1',tlVerilogGenerator.PRECEDENCE);
    var dropdown_option2 = block.getFieldValue('option2');
     var code =  '        '+ value_condition+' '+dropdown_option1+' '+ value_sig1 +' '+ dropdown_option2  ;
    return code;
  };