import tlVerilogGenerator from './tl_verilog'
import Blockly from 'blockly'


Blockly.Blocks['part_general'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "part_general",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "general"
          },
          {
            "type": "input_value",
            "name": "general"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Blocks['sig_type'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "sig_type",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "type",
            "options": [
              [
                "$",
                "$"
              ],
              [
                "*",
                "*"
              ],
              [
                "$$",
                "$$"
              ],
              [
                "**",
                "**"
              ],
              [
                "!$",
                "!$"
              ],
              [
                "!*",
                "!*"
              ],
              [
                "!$$",
                "!$$"
              ],
              [
                "!**",
                "!**"
              ]
            ]
          }
        ],
        "colour": 230,
        "output": null,
        "tooltip": "",
        "helpUrl": ""
      }
    )}};
    
    tlVerilogGenerator["sig_type"] = (block) => {
      const  dropdown_type = block.getFieldValue('type');
      const code = dropdown_type;
      return [code, tlVerilogGenerator.PRECEDENCE];

    };

tlVerilogGenerator["part_general"] = (block) => {
    const text_name = block.getFieldValue('NAME');
    const value_general = tlVerilogGenerator.valueToCode(block, 'general',  tlVerilogGenerator.PRECEDENCE);
    const code = text_name+value_general;
      // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };


Blockly.Blocks['TLV_CODE_BLOCK'] = {
    init: function() {
      this.jsonInit(
        {
          "type": "TLV_CODE_BLOCK",
           "message0": "Multiline: %1",
           "previousStatement": null,
           "nextStatement": null,
           "args0": [
             {
               "type": "field_multilinetext",
               "name": "FIELDNAME",
               "text": "default text\n with newline character",
               "spellcheck": false
             }
           
           ]
         }
      );
     
    }
  };

  tlVerilogGenerator["TLV_CODE_BLOCK"] = (block) => {
  
       const textValue = block.getFieldValue('FIELDNAME');
       const code =  textValue ;
      console.log('multiline\n',code )
      return code;
  };


  Blockly.Blocks['lists_create_with_TLV'] = {
    /**
     * Block for creating a list with any number of elements of any type.
     * @this {Blockly.Block}
     */
    init: function() {
      this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
      this.setStyle('list_blocks');
      this.itemCount_ = 3;
      this.updateShape_();
      this.setInputsInline(true); 
      this.setOutput(true, 'Array');
      this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
      this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
    },
    /**
     * Create XML to represent list inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function() {
      var container = Blockly.utils.xml.createElement('mutation');
      container.setAttribute('items', this.itemCount_);
      return container;
    },
    /**
     * Parse XML to restore the list inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function(xmlElement) {
      this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
      this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this {Blockly.Block}
     */
    decompose: function(workspace) {
      var containerBlock = workspace.newBlock('lists_create_with_container');
      containerBlock.initSvg();
      var connection = containerBlock.getInput('STACK').connection;
      for (var i = 0; i < this.itemCount_; i++) {
        var itemBlock = workspace.newBlock('lists_create_with_item');
        itemBlock.initSvg();
        connection.connect(itemBlock.previousConnection);
        connection = itemBlock.nextConnection;
      }
      return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    compose: function(containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      // Count number of inputs.
      var connections = [];
      while (itemBlock && !itemBlock.isInsertionMarker()) {
        connections.push(itemBlock.valueConnection_);
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
      }
      // Disconnect any children that don't belong.
      for (var i = 0; i < this.itemCount_; i++) {
        var connection = this.getInput('ADD' + i).connection.targetConnection;
        if (connection && connections.indexOf(connection) == -1) {
          connection.disconnect();
        }
      }
      this.itemCount_ = connections.length;
      this.updateShape_();
      // Reconnect any child blocks.
      for (var i = 0; i < this.itemCount_; i++) {
        Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
      }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this {Blockly.Block}
     */
    saveConnections: function(containerBlock) {
      var itemBlock = containerBlock.getInputTargetBlock('STACK');
      var i = 0;
      while (itemBlock) {
        var input = this.getInput('ADD' + i);
        itemBlock.valueConnection_ = input && input.connection.targetConnection;
        i++;
        itemBlock = itemBlock.nextConnection &&
            itemBlock.nextConnection.targetBlock();
      }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this {Blockly.Block}
     */
    updateShape_: function() {
      if (this.itemCount_ && this.getInput('EMPTY')) {
        this.removeInput('EMPTY');
      } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
        this.appendDummyInput('EMPTY')
            .appendField();
            // .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);

      }
      // Add new inputs.
      for (var i = 0; i < this.itemCount_; i++) {
        if (!this.getInput('ADD' + i)) {
          var input = this.appendValueInput('ADD' + i)
              .setAlign(Blockly.ALIGN_RIGHT);
          if (i == 0) {
            // input.appendField(Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH']);
            input.appendField();

          }
        }
      }
      // Remove deleted inputs.
      while (this.getInput('ADD' + i)) {
        this.removeInput('ADD' + i);
        i++;
      }
    }
  };
  

  tlVerilogGenerator['lists_create_with_TLV'] = function(block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.itemCount_);
  for (var i = 0; i < block.itemCount_; i++) {
    elements[i] = tlVerilogGenerator.valueToCode(block, 'ADD' + i,
    tlVerilogGenerator.PRECEDENCE) || 'null';
  }
  var code =  elements.join('') ;
  return [code,  tlVerilogGenerator.PRECEDENCE];
};



Blockly.Blocks['lists_create_with_TLV_comma'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this {Blockly.Block}
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg['LISTS_CREATE_WITH_HELPURL']);
    this.setStyle('list_blocks');
    this.itemCount_ = 3;
    this.updateShape_();
    this.setInputsInline(true); 
    this.setOutput(true, 'Array');
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.Msg['LISTS_CREATE_WITH_TOOLTIP']);
  },
  /**
   * Create XML to represent list inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.updateShape_();
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this {Blockly.Block}
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var i = 0; i < this.itemCount_; i++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  compose: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    // Count number of inputs.
    var connections = [];
    while (itemBlock && !itemBlock.isInsertionMarker()) {
      connections.push(itemBlock.valueConnection_);
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    // Disconnect any children that don't belong.
    for (var i = 0; i < this.itemCount_; i++) {
      var connection = this.getInput('ADD' + i).connection.targetConnection;
      if (connection && connections.indexOf(connection) == -1) {
        connection.disconnect();
      }
    }
    this.itemCount_ = connections.length;
    this.updateShape_();
    // Reconnect any child blocks.
    for (var i = 0; i < this.itemCount_; i++) {
      Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
    }
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this {Blockly.Block}
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var i = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + i);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      i++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },
  /**
   * Modify this block to have the correct number of inputs.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function() {
    if (this.itemCount_ && this.getInput('EMPTY')) {
      this.removeInput('EMPTY');
    } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
      this.appendDummyInput('EMPTY')
          .appendField('{ , }');
          // .appendField(Blockly.Msg['LISTS_CREATE_EMPTY_TITLE']);

    }
    // Add new inputs.
    for (var i = 0; i < this.itemCount_; i++) {
      if (!this.getInput('ADD' + i)) {
        var input = this.appendValueInput('ADD' + i)
            .setAlign(Blockly.ALIGN_RIGHT);
        if (i == 0) {
          // input.appendField(Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH']);
          input.appendField('{ , }');

        }
      }
    }
    // Remove deleted inputs.
    while (this.getInput('ADD' + i)) {
      this.removeInput('ADD' + i);
      i++;
    }
  }
};


tlVerilogGenerator['lists_create_with_TLV_comma'] = function(block) {
// Create a list with any number of elements of any type.
var elements = new Array(block.itemCount_);
for (var i = 0; i < block.itemCount_; i++) {
  elements[i] = tlVerilogGenerator.valueToCode(block, 'ADD' + i,
  tlVerilogGenerator.PRECEDENCE) || 'null';
}
var code = '{' + elements.join(' , ') + '}';
return [code,  tlVerilogGenerator.PRECEDENCE];
};