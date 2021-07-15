import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'


  tlVerilogGenerator['pipeline'] = function(block) {
    var text_pipeline = block.getFieldValue('pipeline');
    var statements_name = tlVerilogGenerator.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '|' + text_pipeline+'\n'+   statements_name;
    return code;
  };
  
  tlVerilogGenerator['hierarchy'] = function(block) {
    var text_beh_hier = block.getFieldValue('beh_hier');
    var statements_block = tlVerilogGenerator.statementToCode(block, 'block');
    // TODO: Assemble JavaScript into code variable.
    var code = '/' + text_beh_hier+'\n'+   statements_block;
    return code;
  };
  
  tlVerilogGenerator['stage_number'] = function(block) {
    var number_stage_no = block.getFieldValue('stage_no');
    var statements_expression = tlVerilogGenerator.statementToCode(block, 'expression');
    // TODO: Assemble JavaScript into code variable.
    var code = '@'+number_stage_no +'\n'+statements_expression;;
    return code;
  };
  
  tlVerilogGenerator['when'] = function(block) {
    var dropdown_sig_type = block.getFieldValue('sig_type');
    var text_signal = block.getFieldValue('signal');
    var statements_name = tlVerilogGenerator.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '?'+dropdown_sig_type+text_signal +'\n'+ statements_name;
    return code;
  };