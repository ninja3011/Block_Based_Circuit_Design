
import tlVerilogGenerator from './tl_verilog'
import * as Blockly from 'blockly/core';

tlVerilogGenerator['variables_get'] = function(block) {
    var value_scope = tlVerilogGenerator.valueToCode(block, 'scope',tlVerilogGenerator.PRECEDENCE);
    console.log(block.getFieldValue('VAR'));
    console.log(Blockly.Variables.NAME_TYPE);
    var dropdown_type = block.getFieldValue('type');
    tlVerilogGenerator.init(Blockly.workspace);
    console.log(tlVerilogGenerator.variableDB_);
    var variable_signal = tlVerilogGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_scope+dropdown_type+variable_signal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };
  
  tlVerilogGenerator['variables_set'] = function(block) {
    var dropdown_type = block.getFieldValue('type');
    var variable_var = tlVerilogGenerator.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var value_signal_val = tlVerilogGenerator.valueToCode(block, 'signal_val',tlVerilogGenerator.PRECEDENCE);
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_type + variable_var + ' = ' +value_signal_val + ';';
    return code;
  };

  tlVerilogGenerator['pipesignal'] = function(block) {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_pipesignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('pipesignal'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_retiming+'$'+variable_pipesignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  tlVerilogGenerator['statesignal'] = function(block) {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_statesignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('statesignal'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_retiming+'$'+variable_statesignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  tlVerilogGenerator['assignedsignal'] = function(block) {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_assignedsignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('assignedsignal'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_retiming+'$$'+variable_assignedsignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  tlVerilogGenerator['assignedstatesignal'] = function(block) {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_assignedstatesignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('assignedstatesignal'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_retiming+'$$'+variable_assignedstatesignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  tlVerilogGenerator['svsignal'] = function(block) {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_svsignal =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('svsignal'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_retiming+'*'+variable_svsignal;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };


  tlVerilogGenerator['svtype'] = function(block) {
    var value_retiming = tlVerilogGenerator.valueToCode(block, 'retiming',tlVerilogGenerator.PRECEDENCE);
    var variable_svtype =tlVerilogGenerator.nameDB_.getName(block.getFieldValue('svtype'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    var code = value_retiming+'**'+variable_svtype;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  
