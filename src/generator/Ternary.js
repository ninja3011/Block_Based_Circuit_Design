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
    const value_result =tlVerilogGenerator.valueToCode(block, 'result',tlVerilogGenerator.PRECEDENCE);
    const value_condition =tlVerilogGenerator.valueToCode(block, 'condition',tlVerilogGenerator.PRECEDENCE);
    const value_sig1 =tlVerilogGenerator.valueToCode(block, 'sig1',tlVerilogGenerator.PRECEDENCE);
    const statements_sig2 =tlVerilogGenerator.statementToCode(block, 'sig2');
    const code =  value_result + ' = ' +  value_condition + ' ? ' + value_sig1 + ' :\n' + statements_sig2; ;
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
                  '?',
                  '?'
                ],
                [
                  ";",
                  ";"
                ],
                [
                  ":",
                  ":"
                ],
                [
                  "",
                  ""
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
                ],
                [
                  '?',
                  '?'
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
    const value_condition =tlVerilogGenerator.valueToCode(block, 'condition',tlVerilogGenerator.PRECEDENCE);
    const dropdown_option1 = block.getFieldValue('option1');
    const value_sig1 =tlVerilogGenerator.valueToCode(block, 'sig1',tlVerilogGenerator.PRECEDENCE);
    const dropdown_option2 = block.getFieldValue('option2');
     const code =  '        '+ value_condition+' '+dropdown_option1+' '+ value_sig1 +' '+ dropdown_option2  ;
    return code;
  };
  
  Blockly.Blocks['ternary_simple'] = {
    init: function() {
      this.jsonInit(
  {
    "type": "logic_ternary",
    "message0": "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    "args0": [
      {
        "type": "input_value",
        "name": "IF",
        "check": "Boolean"
      }
    ],
    "message1": "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    "args1": [
      {
        "type": "input_value",
        "name": "THEN"
      }
    ],
    "message2": "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    "args2": [
      {
        "type": "input_value",
        "name": "ELSE"
      }
    ],
    "output": null,
    "style": "logic_blocks",
    "tooltip": "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    "helpUrl": "%{BKY_LOGIC_TERNARY_HELPURL}",
    "extensions": ["logic_ternary"]
  }
);
    }
  };

   tlVerilogGenerator['ternary_simple'] = function(block) {
    // Ternary operator.
    var value_if =  tlVerilogGenerator.valueToCode(block, 'IF',
         tlVerilogGenerator. PRECEDENCE) || 'false';
    var value_then =  tlVerilogGenerator.valueToCode(block, 'THEN',
         tlVerilogGenerator. PRECEDENCE) || 'null';
    var value_else =  tlVerilogGenerator.valueToCode(block, 'ELSE',
         tlVerilogGenerator. PRECEDENCE) || 'null';
    var code = value_if + ' ? ' + value_then + ' : ' + value_else;
    return [code,  tlVerilogGenerator. PRECEDENCE];
  };
  