import React from 'react'
import * as Blockly from 'blockly/core';

var var_signal_get_block = 

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
//   "extensions": ["var_signal_get_extension"],
};

// var var_signal_get_block = 

// {
//   "type": "variables_get",
//   "message0": "%1 %2 %3",
//   "args0": [
//     {
//         "name": "Retimer_plus",
//         'type': "field_image",
//         'src': "https://img.icons8.com/ios/2x/plus--v2.gif",
//         'width': 18,
//         'height': 18,
//         'alt': "*",
//       },
//     {
//       "type": "field_dropdown",
//       "name": "type",
//       "options": [
//         [
//           "$",
//           "$"
//         ],
//         [
//           "*",
//           "*"
//         ],
//         [
//           "$$",
//           "$$"
//         ],
//         [
//           "**",
//           "**"
//         ],
//         [
//           "!$",
//           "!$"
//         ],
//         [
//           "!*",
//           "!*"
//         ],
//         [
//           "!$$",
//           "!$$"
//         ],
//         [
//           "!**",
//           "!**"
//         ]
//       ]
//     },
//     {
//       "type": "field_variable",
//       "name": "VAR",
//       "variable": "VAR"
//     }
//   ],
//   "inputsInline": true,
//   "output": null,
//   "colour": 230,
//   "tooltip": "",
//   "helpUrl": "",
//   "extensions": ["var_signal_get_extension"],
// };

// Blockly.Extensions.register('var_signal_get_extension', function () {
//     this.getField("Retimer_plus").clickHandler_ = () => {
//     this.appendValueInput('scope');
//     console.log(" plus clicked");
//       };
//     });

 


Blockly.Blocks['variables_get'] = {
  init: function() {
    this.jsonInit(var_signal_get_block);
  }
  
};


var var_signal_set_block =


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

};




Blockly.Blocks['variables_set'] = {
  init: function() {
    this.jsonInit(var_signal_set_block);
  }
  
};

var pipesignal_block = 
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
  };

  Blockly.Blocks['pipesignal'] = {
    init: function() {
      this.jsonInit(pipesignal_block);
    }
    
  };

  var statesignal_block =
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
  };

  Blockly.Blocks['statesignal'] = {
    init: function() {
      this.jsonInit(statesignal_block);
    }
  };

var assignedsignal_block = 
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

  Blockly.Blocks['assignedsignal'] = {
    init: function() {
      this.jsonInit(assignedsignal_block);
    }
  };

var assignedstatesignal_block = 
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

  Blockly.Blocks['assignedstatesignal'] = {
    init: function() {
      this.jsonInit(assignedstatesignal_block);
    }
  };

  var svsignal_block =
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

  Blockly.Blocks['svsignal'] = {
    init: function() {
      this.jsonInit(svsignal_block);
    }
  };

  var svtype_block = 
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
  };

  Blockly.Blocks['svtype'] = {
    init: function() {
      this.jsonInit(svtype_block);
    }
  };
