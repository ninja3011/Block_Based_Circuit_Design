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

tlVerilogGenerator['part_general'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_general = tlVerilogGenerator.valueToCode(block, 'general',  tlVerilogGenerator.PRECEDENCE);
    var code = text_name+value_general;
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

tlVerilogGenerator['TLV_CODE_BLOCK'] = function (block) {
  
       var textValue = block.getFieldValue('FIELDNAME');
       var code =  textValue ;
      console.log('multiline\n',code )
      return code;
  };