import tlVerilogGenerator from './tl_verilog'
import Blockly from 'blockly'


Blockly.Blocks['part_general'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "part_general",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "general"
          },
          {
            "type": "input_value",
            "name": "general"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Blocks['sig_type'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "sig_type",
        "message0": "%1",
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
          }
        ],
        "colour": 230,
        "output": null,
        "tooltip": "",
        "helpUrl": ""
      }
    )}};
    
    tlVerilogGenerator["sig_type"] = (block) => {
      const  dropdown_type = block.getFieldValue('type');
      const code = dropdown_type;
      return [code, tlVerilogGenerator.PRECEDENCE];

    };

tlVerilogGenerator["part_general"] = (block) => {
    const text_name = block.getFieldValue('NAME');
    const value_general = tlVerilogGenerator.valueToCode(block, 'general',  tlVerilogGenerator.PRECEDENCE);
    const code = text_name+value_general;
      // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };


Blockly.Blocks['TLV_CODE_BLOCK'] = {
    init: function() {
      this.jsonInit(
        {
          "type": "TLV_CODE_BLOCK",
           "message0": "Multiline: %1",
           "previousStatement": null,
           "nextStatement": null,
           "args0": [
             {
               "type": "field_multilinetext",
               "name": "FIELDNAME",
               "text": "default text\n with newline character",
               "spellcheck": false
             }
           
           ]
         }
      );
     
    }
  };

  tlVerilogGenerator["TLV_CODE_BLOCK"] = (block) => {
  
       const textValue = block.getFieldValue('FIELDNAME');
       const code =  textValue ;
      console.log('multiline\n',code )
      return code;
  };