import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'


tlVerilogGenerator['always_ff'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var statements_name = tlVerilogGenerator.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = 'always_ff @ (' + dropdown_name + ') begin\n'+statements_name+'\nend'  ;
    return code;
  }

