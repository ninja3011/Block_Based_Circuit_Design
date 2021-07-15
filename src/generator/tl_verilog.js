import * as Blockly from 'blockly';



const tlVerilogGenerator = new Blockly.Generator('TL_Verilog');
tlVerilogGenerator.PRECEDENCE = 0;
tlVerilogGenerator.INDENT = '   ';

tlVerilogGenerator.init = function(workspace) {
    console.log(Blockly.mainWorkspace);
    workspace = Blockly.mainWorkspace;
    // Create a dictionary of definitions to be printed before the code.
    tlVerilogGenerator.definitions_ = Object.create(null);
    // Create a dictionary mapping desired function names in definitions_
    // to actual function names (to avoid collisions with user functions).
    tlVerilogGenerator.functionNames_ = Object.create(null);
  
    if (!tlVerilogGenerator.variableDB_) {
      tlVerilogGenerator.variableDB_ =
          new Blockly.Names(tlVerilogGenerator.RESERVED_WORDS_);
    } else {
      tlVerilogGenerator.variableDB_.reset();
    }
  
    tlVerilogGenerator.variableDB_.setVariableMap(workspace.getVariableMap());
  
    var defvars = [];
    // Add developer variables (not created or named by the user).
    var devVarList = Blockly.Variables.allDeveloperVariables(workspace);
    for (var i = 0; i < devVarList.length; i++) {
      defvars.push(tlVerilogGenerator.variableDB_.getName(devVarList[i],
          Blockly.Names.DEVELOPER_VARIABLE_TYPE));
    }
  
    // Add user variables, but only ones that are being used.
    var variables = Blockly.Variables.allUsedVarModels(workspace);
    for (var i = 0; i < variables.length; i++) {
      defvars.push(tlVerilogGenerator.variableDB_.getName(variables[i].getId(),
          Blockly.VARIABLE_CATEGORY_NAME));
    }
  
    // Declare all of the variables.
    if (defvars.length) {
      tlVerilogGenerator.definitions_['variables'] =
          'var ' + defvars.join(', ') + ';';
    }
    this.isInitialized = true;
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
  
  
  

export default tlVerilogGenerator;
