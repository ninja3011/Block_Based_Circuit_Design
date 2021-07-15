import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'


tlVerilogGenerator['signal'] = function(block) {

    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var dropdown_type = block.getFieldValue('type');
    var text_signal = block.getFieldValue('signal');
   
    // TODO: Assemble JavaScript into code variable.
    var code = value_retiming+ dropdown_type +text_signal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };


tlVerilogGenerator['logical_operator'] = function(block) {
    var value_sig1 = tlVerilogGenerator.valueToCode(block, 'sig1', tlVerilogGenerator.PRECEDENCE);
    var dropdown_name = block.getFieldValue('type');
    var value_sig2 = tlVerilogGenerator.valueToCode(block, 'sig2', tlVerilogGenerator.PRECEDENCE);
     // TODO: Assemble JavaScript into code variable.
    var code ='('+value_sig1 + " "+ dropdown_name + " "+ value_sig2+')' ;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };
  
  tlVerilogGenerator['comparison_operator'] = function(block) {
    var value_sig1 = tlVerilogGenerator.valueToCode(block, 'sig1',  tlVerilogGenerator.PRECEDENCE);
    var dropdown_operator = block.getFieldValue('operator');
    var value_sig2 = tlVerilogGenerator.valueToCode(block, 'sig2',  tlVerilogGenerator.PRECEDENCE);
     // TODO: Assemble JavaScript into code variable.
    // TODO: Change ORDER_NONE to the correct strength.
    var code ='('+value_sig1 + " "+ dropdown_operator + " "+ value_sig2+')' ;
    return [code, tlVerilogGenerator.PRECEDENCE];
  };
  
  tlVerilogGenerator['arithmetic_operator'] = function(block) {
    var value_sig1 = tlVerilogGenerator.valueToCode(block, 'sig1', tlVerilogGenerator.PRECEDENCE);
    var dropdown_operator = block.getFieldValue('operator');
    var value_sig2 = tlVerilogGenerator.valueToCode(block, 'sig2',  tlVerilogGenerator.PRECEDENCE);
     // TODO: Assemble JavaScript into code variable.
    // TODO: Change ORDER_NONE to the correct strength.
    var code ='('+value_sig1 + " "+ dropdown_operator + " "+ value_sig2+')' ;
    return [code, tlVerilogGenerator.PRECEDENCE];
  };
  
  tlVerilogGenerator['dynamic_dropdown'] = function(block) {
    
    var dropdown_SCOPE = block.getFieldValue('SCOPE');
     // TODO: Assemble JavaScript into code variable.
    // TODO: Change ORDER_NONE to the correct strength.
    var code = dropdown_SCOPE  ;
    return [code, tlVerilogGenerator.PRECEDENCE];
  };
  
  tlVerilogGenerator['retiming'] = function(block) {
    
    var retiming_value = block.getFieldValue('retimer_val');
     // TODO: Assemble JavaScript into code variable.
    // TODO: Change ORDER_NONE to the correct strength.
  
    var code;
  
    if(retiming_value == 0){
       code = '<>'+retiming_value  ;
    }
    else{
     code = '>>'+retiming_value  ;
    }
    return [code, tlVerilogGenerator.PRECEDENCE];
  };
  
  tlVerilogGenerator['semicolon'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '; \n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };
  
  tlVerilogGenerator['part_general'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_general = tlVerilogGenerator.valueToCode(block, 'general',  tlVerilogGenerator.PRECEDENCE);
    // TODO: Assemble JavaScript into code variable.
    var code = text_name+value_general;
      // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };


tlVerilogGenerator['part_general'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_general = tlVerilogGenerator.valueToCode(block, 'general',  tlVerilogGenerator.PRECEDENCE);
    // TODO: Assemble JavaScript into code variable.
    var code = text_name+value_general;
      // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  tlVerilogGenerator['parenthesis'] = function(block) {
    var value_name = tlVerilogGenerator.valueToCode(block, 'NAME', tlVerilogGenerator.PRECEDENCE);
    // TODO: Assemble JavaScript into code variable.
    var code = '('+ value_name+') '
    // TODO: Change ORDER_NONE to the correct strength.
    return [code,tlVerilogGenerator.PRECEDENCE];
  };