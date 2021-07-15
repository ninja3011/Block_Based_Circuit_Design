import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'



tlVerilogGenerator['m4_makerchip_module'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'm4_makerchip_module';
    return code;
  };
  
  tlVerilogGenerator['m4plus'] = function(block) {
    var text_macro = block.getFieldValue('macro');
    // TODO: Assemble JavaScript into code variable.
    var code = 'm4+' + text_macro;
    return code;
  };
  
  
  tlVerilogGenerator['m4_include_lib'] = function(block) {
    var text_url = block.getFieldValue('url');
    // TODO: Assemble JavaScript into code variable.
    var code = "m4_include_lib([\'" + text_url + "\'])";
    return code;
  };


tlVerilogGenerator['m4asm'] = function(block) {
    var text_asm = block.getFieldValue('asm');
    // TODO: Assemble JavaScript into code variable.
    var code = 'm4_asm(' +text_asm + ')';
    return code;
  };
  
  tlVerilogGenerator['m4_general'] = function(block) {
    var text_func = block.getFieldValue('func');
    var text_args = block.getFieldValue('args');
    // TODO: Assemble JavaScript into code variable.
    var code = 'm4_'+text_func+'(' +text_args + ')' ;
    return code;
  };
  
  