import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'

 tlVerilogGenerator['ternary_shell'] = function(block) {
    var value_result =tlVerilogGenerator.valueToCode(block, 'result',tlVerilogGenerator.PRECEDENCE);
    var value_condition =tlVerilogGenerator.valueToCode(block, 'condition',tlVerilogGenerator.PRECEDENCE);
    var value_sig1 =tlVerilogGenerator.valueToCode(block, 'sig1',tlVerilogGenerator.PRECEDENCE);
    var statements_sig2 =tlVerilogGenerator.statementToCode(block, 'sig2');
    // TODO: Assemble JavaScript into code variable.
    var code =  value_result + ' = ' +  value_condition + ' ? ' + value_sig1 + ' :\n' + statements_sig2; ;
    return code;
  };


 tlVerilogGenerator['ternary_fields'] = function(block) {
    var value_condition =tlVerilogGenerator.valueToCode(block, 'condition',tlVerilogGenerator.PRECEDENCE);
    var dropdown_option1 = block.getFieldValue('option1');
    var value_sig1 =tlVerilogGenerator.valueToCode(block, 'sig1',tlVerilogGenerator.PRECEDENCE);
    var dropdown_option2 = block.getFieldValue('option2');
    // TODO: Assemble JavaScript into code variable.
    var code =  '        '+ value_condition+' '+dropdown_option1+' '+ value_sig1 +' '+ dropdown_option2  ;
    return code;
  };