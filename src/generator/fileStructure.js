import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'

tlVerilogGenerator.init = function(workspace) {
  console.log("tl verilog generator defined");
};



tlVerilogGenerator['tlv_version'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '\\m4_TLV_version 1d: tl-x.org';
    return code;
  };
  
  tlVerilogGenerator['include'] = function(block) {
    var text_filename = block.getFieldValue('filename');
    // TODO: Assemble JavaScript into code variable.
    var code = '`include \"'+text_filename+'\";';
    return code;
  };
  
  tlVerilogGenerator['endmodule'] = function (block) {
      // TODO: Assemble TLV into code variable.
      var code = 'endmodule\n';
      return code;
  };
  
  tlVerilogGenerator['tlv'] = function(block) {
    var statements_name = tlVerilogGenerator.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '\\TLV\n' + statements_name;
    return code;
  };
  
  tlVerilogGenerator['sv'] = function(block) {
    var statements_name = tlVerilogGenerator.statementToCode(block, 'NAME');
    // TODO: Assemble JavaScript into code variable.
    var code = '\\SV\n'+statements_name ;
    return code;
  };
  
  tlVerilogGenerator['sv_plus'] = function(block) {
    var statements_sv = tlVerilogGenerator.statementToCode(block, 'SV');
    // TODO: Assemble JavaScript into code variable.
    var code = '\\SV_plus\n'+ statements_sv;
    return code;
  };
  

tlVerilogGenerator.scrub_ = function(block, code, opt_thisOnly) {
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    let nextCode = '';
    if (nextBlock) {
        nextCode =
            opt_thisOnly ? '' : '\n' + tlVerilogGenerator.blockToCode(nextBlock);
    }
    return code +  nextCode;
  };
  
  
  