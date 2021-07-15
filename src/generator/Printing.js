import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'


tlVerilogGenerator['display'] = function(block) {
    var text_print = block.getFieldValue('print');
    var text_signals = block.getFieldValue('signals');
    // TODO: Assemble JavaScript into code variable.
    var code = '\\$display( \"'+ text_print + '\" , '+ text_signals+ ');';
    return code;
  };


