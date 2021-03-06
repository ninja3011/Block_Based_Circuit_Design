import * as Blockly from 'blockly/core';
import tlVerilogGenerator from './tl_verilog'



tlVerilogGenerator["procedures_defreturn"] = (block) => {

   // Define a procedure with a return value.
   const funcName =tlVerilogGenerator.nameDB_.getName(
       block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME);
   const xfix1 = '';
  //  if (tlVerilogGenerator.STATEMENT_PREFIX) {
  //    xfix1 +=tlVerilogGenerator.injectId(tlVerilogGenerator.STATEMENT_PREFIX,
  //        block);
  //  }
  //  if (tlVerilogGenerator.STATEMENT_SUFFIX) {
  //    xfix1 +=tlVerilogGenerator.injectId(tlVerilogGenerator.STATEMENT_SUFFIX,
  //        block);
  //  }
  //  if (xfix1) {
  //    xfix1 =tlVerilogGenerator.prefixLines(xfix1,tlVerilogGenerator.INDENT);
  //  }
   const loopTrap = '';
  //  if (tlVerilogGenerator.INFINITE_LOOP_TRAP) {
  //    loopTrap =tlVerilogGenerator.prefixLines(
  //       tlVerilogGenerator.injectId(tlVerilogGenerator.INFINITE_LOOP_TRAP,
  //        block),tlVerilogGenerator.INDENT);
  //  }
   const branch =tlVerilogGenerator.statementToCode(block, 'STACK');
  //  const returnValue =tlVerilogGenerator.valueToCode(block, 'RETURN',
  //     tlVerilogGenerator.ORDER_NONE) || '';
   const xfix2 = '';
  //  if (branch && returnValue) {
  //    // After executing the function body, revisit this block for the return.
  //    xfix2 = xfix1;
  //  }
  //  if (returnValue) {
  //    returnValue =tlVerilogGenerator.INDENT + 'return ' + returnValue + ';\n';
  //  }
  //  const args = [];
  //  const variables = block.getVars();
  //  for (const i = 0; i < variables.length; i++) {
  //    args[i] =tlVerilogGenerator.nameDB_.getName(variables[i],
  //        Blockly.VARIABLE_CATEGORY_NAME);
  //  }
   const code = branch;
  //  code =tlVerilogGenerator.scrub_(block, code);
   // Add % so as not to collide with helper functions in definitions list.
  tlVerilogGenerator.definitions_['%' + funcName] = code;
   return code;
 };
 
 // Defining a procedure without a return value uses the same generator as
 // a procedure with a return value.


 tlVerilogGenerator['procedures_defnoreturn'] =
    tlVerilogGenerator['procedures_defreturn'];
 

 tlVerilogGenerator["procedures_callreturn"] = (block) => {
   // Call a procedure with a return value.
   const funcName =tlVerilogGenerator.nameDB_.getName(
       block.getFieldValue('NAME'), Blockly.PROCEDURE_CATEGORY_NAME);
   const args = [];
   const variables = block.getVars();
   for (let i = 0; i < variables.length; i++) {
     args[i] =tlVerilogGenerator.valueToCode(block, 'ARG' + i,
        tlVerilogGenerator.ORDER_NONE) || 'null';
   }
   const code = funcName + '(' + args.join(', ') + ')';
   return [code,tlVerilogGenerator.ORDER_FUNCTION_CALL];
 };
 


tlVerilogGenerator["procedures_callnoreturn"] = (block) => {
   // Call a procedure with no return value.
   // Generated code is for a function call as a statement is the same as a
   // function call as a value, with the addition of line ending.
   const tuple =tlVerilogGenerator['procedures_callreturn'](block);
   return tuple[0] + ';\n';
 };
 
 tlVerilogGenerator["procedures_ifreturn"] = (block) => {
   // Conditionally return value from a procedure.
   const condition =tlVerilogGenerator.valueToCode(block, 'CONDITION',
      tlVerilogGenerator.ORDER_NONE) || 'false';
   const code = 'if (' + condition + ') {\n';
   if (tlVerilogGenerator.STATEMENT_SUFFIX) {
     // Inject any statement suffix here since the regular one at the end
     // will not get executed if the return is triggered.
     code +=tlVerilogGenerator.prefixLines(
        tlVerilogGenerator.injectId(tlVerilogGenerator.STATEMENT_SUFFIX, block),
        tlVerilogGenerator.INDENT);
   }
   if (block.hasReturnValue_) {
     const value =tlVerilogGenerator.valueToCode(block, 'VALUE',
        tlVerilogGenerator.ORDER_NONE) || 'null';
     code +=tlVerilogGenerator.INDENT + 'return ' + value + ';\n';
   } else {
     code +=tlVerilogGenerator.INDENT + 'return;\n';
   }
   code += '}\n';
   return code;
 };
 