
import tlVerilogGenerator from './tl_verilog'
import * as Blockly from 'blockly/core';

Blockly.Blocks['variables_get'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "variables_get",
        "message0": "%1 %2 %3",
        "args0": [
          {
            "type": "input_value",
            "name": "scope"
          },
          {
            "type": "field_dropdown",
            "name": "type",
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
                "$$",
                "$$"
              ],
              [
                "**",
                "**"
              ],
              [
                "!$",
                "!$"
              ],
              [
                "!*",
                "!*"
              ],
              [
                "!$$",
                "!$$"
              ],
              [
                "!**",
                "!**"
              ]
            ]
          },
          {
            "type": "field_variable",
            "name": "VAR",
            "variable": "VAR"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
      }
    );
  }
  
};



  tlVerilogGenerator["variables_get"] = (block) => {
    var value_scope = tlVerilogGenerator.valueToCode(block, 'scope',tlVerilogGenerator.PRECEDENCE);
    console.log(block.getFieldValue('VAR'));
    console.log(Blockly.Variables.NAME_TYPE);
    var dropdown_type = block.getFieldValue('type');
    tlVerilogGenerator.init(Blockly.workspace);
    console.log(tlVerilogGenerator.variableDB_);
    var variable_signal = tlVerilogGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
     var code = value_scope+dropdown_type+variable_signal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };
  
  Blockly.Blocks['variables_set'] = {
    init: function() {
      this.jsonInit(

{
  "type": "variables_set",
  "message0": "set %1 %2 set %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "type",
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
          "$$",
          "$$"
        ],
        [
          "**",
          "**"
        ]
      ]
    },
    {
      "type": "field_variable",
      "name": "VAR",
      "variable": "sig"
    },
    {
      "type": "input_value",
      "name": "signal_val"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""

}
      );
    }
    
  };
  

 
    tlVerilogGenerator["variables_set"] = (block) => {

    var dropdown_type = block.getFieldValue('type');
    var variable_var = tlVerilogGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var value_signal_val = tlVerilogGenerator.valueToCode(block, 'signal_val',tlVerilogGenerator.PRECEDENCE);
    var code = dropdown_type + variable_var + ' = ' +value_signal_val + ';';
    return code;
  };

  Blockly.Blocks['pipesignal'] = {
    init: function() {
      this.jsonInit(

{
  "type": "pipesignal",
  "message0": "%1 $ %2",
  "args0": [
    {
      "type": "input_value",
      "name": "retiming"
    },
    {
      "type": "field_variable",
      "name": "pipesignal",
      "variable": "pipesignal"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 300,
  "tooltip": "",
  "helpUrl": ""
}
      );
    }
    
  };

  tlVerilogGenerator["pipesignal"] = (block) => {

    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_pipesignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('pipesignal'), Blockly.Variables.NAME_TYPE);
    var code = value_retiming+'$'+variable_pipesignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  Blockly.Blocks['statesignal'] = {
    init: function() {
      this.jsonInit(

  {
    "type": "statesignal",
    "message0": "%1 $ %2",
    "args0": [
      {
        "type": "input_value",
        "name": "retiming"
      },
      {
        "type": "field_variable",
        "name": "statesignal",
        "variable": "StateSignal"
      }
    ],
    "output": null,
    "colour": 210,
    "tooltip": "",
    "helpUrl": ""
  }
      );
    }
    
  };

  tlVerilogGenerator["statesignal"] = (block) => {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_statesignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('statesignal'), Blockly.Variables.NAME_TYPE);
    var code = value_retiming+'$'+variable_statesignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  Blockly.Blocks['assignedsignal'] = {
    init: function() {
      this.jsonInit(
         
  {
    "type": "assignedsignal",
    "message0": "%1 $$ %2",
    "args0": [
      {
        "type": "input_value",
        "name": "retiming"
      },
      {
        "type": "field_variable",
        "name": "assignedsignal",
        "variable": "assigned_signal"
      }
    ],
    "output": null,
    "colour": 135,
    "tooltip": "",
    "helpUrl": ""
  }

      );
    }
    
  };

  tlVerilogGenerator["assignedsignal"] = (block) => {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_assignedsignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('assignedsignal'), Blockly.Variables.NAME_TYPE);
    var code = value_retiming+'$$'+variable_assignedsignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  Blockly.Blocks['assignedstatesignal'] = {
    init: function() {
      this.jsonInit(

  {
    "type": "assignedstatesignal",
    "message0": "%1 $$ %2",
    "args0": [
      {
        "type": "input_value",
        "name": "retiming"
      },
      {
        "type": "field_variable",
        "name": "assignedstatesignal",
        "variable": "AssignedStateSignal"
      }
    ],
    "output": null,
    "colour": 195,
    "tooltip": "",
    "helpUrl": ""
  }

      );
    }
    
  };
  tlVerilogGenerator["assignedstatesignal"] = (block) => {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_assignedstatesignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('assignedstatesignal'), Blockly.Variables.NAME_TYPE);
     var code = value_retiming+'$$'+variable_assignedstatesignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  Blockly.Blocks['svsignal'] = {
    init: function() {
      this.jsonInit(

  {
    "type": "svsignal",
    "message0": "%1 * %2",
    "args0": [
      {
        "type": "input_value",
        "name": "retiming"
      },
      {
        "type": "field_variable",
        "name": "svsignal",
        "variable": "SV_signal"
      }
    ],
    "output": null,
    "colour": 240,
    "tooltip": "",
    "helpUrl": ""
  }
      );
    }
    
  };

  tlVerilogGenerator['svsignal'] = function(block) {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_svsignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('svsignal'), Blockly.Variables.NAME_TYPE);
     var code = value_retiming+'*'+variable_svsignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  Blockly.Blocks['svtype'] = {
    init: function() {
      this.jsonInit(

  {
    "type": "svtype",
    "message0": "%1 ** %2",
    "args0": [
      {
        "type": "input_value",
        "name": "retiming"
      },
      {
        "type": "field_variable",
        "name": "svtype",
        "variable": "SV_type"
      }
    ],
    "output": null,
    "colour": 75,
    "tooltip": "",
    "helpUrl": ""
  }
      );
    }
    
  };

  tlVerilogGenerator['svtype'] = function(block) {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_svtype =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('svtype'), Blockly.Variables.NAME_TYPE);
     var code = value_retiming+'**'+variable_svtype;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  
