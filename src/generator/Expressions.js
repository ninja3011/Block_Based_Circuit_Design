import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'


tlVerilogGenerator['expression'] = function(block) {
    var value_result = tlVerilogGenerator.valueToCode(block, 'result',tlVerilogGenerator.PRECEDENCE);
    var dropdown_assignment = block.getFieldValue('assignment');
    var value_signal = tlVerilogGenerator.valueToCode(block, 'signal',tlVerilogGenerator.PRECEDENCE);
    // TODO: Assemble JavaScript into code variable.
    var code =value_result +  ' '+ dropdown_assignment + ' ' +value_signal+ ';';
    return code;
  };

