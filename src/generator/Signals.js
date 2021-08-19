import tlVerilogGenerator from "./tl_verilog";
import * as Blockly from "blockly/core";

const RANGE_MIN = 0;
const RANGE_MAX = 3;

const sig_text = (sig_inputs) => {
  if (sig_inputs == 2) return "vector";
  else if (sig_inputs == 3) return "retiming";
  else return "misc.";
};

Blockly.Blocks["variables_get"] = {
  init: function () {
    var inputsC = RANGE_MIN;
    this.appendDummyInput("in1");
    // this.appendValueInput('in2');
    //         .appendField('foo')
    this.appendDummyInput('var').appendField(
      new Blockly.FieldVariable("signal"),
      "signame"
    );

    this.setOutput(true, null);
    this.setColour(100);
    this.setInputsInline(true);
  },

  mutationToDom: function () {
    var container = Blockly.utils.xml.createElement("mutation");
    container.setAttribute("inputCount", this.inputsC);
    return container;
  },

  domToMutation: function (xmlElement) {
    this.inputsC =
      parseInt(xmlElement.getAttribute("inputCount"), 10) || RANGE_MIN;
    this.updateShape_();
  },

  updateShape_: function () {
    this.removeInput("in1");

    if (this.inputsC == RANGE_MIN) {
      this.appendDummyInput("in1").appendField(
        new Blockly.FieldImage(
          "https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
          15,
          15,
          "*",
          function () {
            this.getSourceBlock().plus_();
          }
        )
      );
    } else if (this.inputsC == RANGE_MAX) {
      this.removeInput("var");
      this.removeInput("in2");

      this.appendValueInput("in" + 2).appendField(sig_text(2));
      this.appendValueInput("in" + 3).appendField(sig_text(3));

      this.appendDummyInput('var').appendField(
        new Blockly.FieldVariable("signal"),
        "signame"
      );
      
      this.appendValueInput("in1").appendField(
        new Blockly.FieldImage(
          "https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
          15,
          15,
          "*",
          function () {
            this.getSourceBlock().minus_();
          }
        )
      );
      this.getInput("in1").appendField("type");
    } else {
      this.appendValueInput("in1")
        .appendField(
          new Blockly.FieldImage(
            "https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
            15,
            15,
            "*",
            function () {
              this.getSourceBlock().minus_();
            }
          )
        )
        .appendField(
          new Blockly.FieldImage(
            "https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
            15,
            15,
            "*",
            function () {
              this.getSourceBlock().plus_();
            }
          )
        );
      this.getInput("in1").appendField("type");
    }

    var i = 2;
    while (this.getInput("in" + i)) {
      this.removeInput("in" + i);
      i++;
    }

    for (var x = 2; x <= this.inputsC; x++) {
      this.appendValueInput("in" + x).appendField(sig_text(x));
      //  .appendField('foo')
    }
  },

  plus_: function () {
    this.inputsC = this.inputsC + 1;
    this.updateShape_();
  },

  minus_: function () {
    this.inputsC = this.inputsC - 1;
    this.updateShape_();
  },
};

tlVerilogGenerator["variables_get"] = (block) => {
  let in1_block,
    in2_block,
    in3_block = "";

  if (block.getInput("in1")) {
    in1_block = tlVerilogGenerator.valueToCode(
      block,
      "in1",
      tlVerilogGenerator.PRECEDENCE
    );
  }
  else{
    in1_block = "";
  }
  if (block.getInput("in2")) {
    in2_block = tlVerilogGenerator.valueToCode(
      block,
      "in2",
      tlVerilogGenerator.PRECEDENCE
    );
  }
  else{
    in2_block = "";
  }
  if (block.getInput("in3")) {
    in3_block = tlVerilogGenerator.valueToCode(
      block,
      "in3",
      tlVerilogGenerator.PRECEDENCE
    );
  }
  else{
    in3_block = "";
  }
  
  console.log('-------------\n',in1_block , in2_block , in3_block )

  let text_signal =
  tlVerilogGenerator.variableDB_.getName(block.getFieldValue("signame"),  Blockly.Variables.NAME_TYPE);
  let code = "";
  if((in1_block + in2_block + in3_block)==undefined){
    code =  text_signal;
  }
  else{
    code =  in1_block + in3_block +text_signal + in2_block;
  }
   
  console.log(code)
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["variables_set"] = {
  init: function () {
    this.jsonInit({
      type: "variables_set",
      message0: "set %1 %2 set %3",
      args0: [
        {
          type: "field_dropdown",
          name: "type",
          options: [
            ["$", "$"],
            ["*", "*"],
            ["$$", "$$"],
            ["**", "**"],
          ],
        },
        {
          type: "field_variable",
          name: "VAR",
          variable: "sig",
        },
        {
          type: "input_value",
          name: "signal_val",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["variables_set"] = (block) => {
  const dropdown_type = block.getFieldValue("type");
  const variable_var = tlVerilogGenerator.variableDB_.getName(
    block.getFieldValue("VAR"),
    Blockly.Variables.NAME_TYPE
  );
  const value_signal_val = tlVerilogGenerator.valueToCode(
    block,
    "signal_val",
    tlVerilogGenerator.PRECEDENCE
  );
  const code = dropdown_type + variable_var + " = " + value_signal_val + ";";
  return code;
};

let RANGE_MIN_P = 0;
let RANGE_MAX_P = 3;

Blockly.Blocks["pipesignal"] = {
  init: function () {
    var inputsC = RANGE_MIN;
    this.appendDummyInput("in1");
    // this.appendValueInput('in2');
    //         .appendField('foo')
    this.appendDummyInput('sig_pipe').appendField('$');
      
    this.getInput('sig_pipe').appendField(new Blockly.FieldVariable("signal"),
    "signame"
  );

    this.setOutput(true, null);
    this.setColour(300);
    this.setInputsInline(false);
  },

  mutationToDom: function () {
    var container = Blockly.utils.xml.createElement("mutation");
    container.setAttribute("inputCount", this.inputsC);
    return container;
  },

  domToMutation: function (xmlElement) {
    this.inputsC =
      parseInt(xmlElement.getAttribute("inputCount"), 10) || RANGE_MIN_P;
    this.updateShape_();
  },

  updateShape_: function () {
    this.removeInput("in1");

    if (this.inputsC == RANGE_MIN_P) {
      this.appendDummyInput("in1").appendField(
        new Blockly.FieldImage(
          "https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
          15,
          15,
          "*",
          function () {
            this.getSourceBlock().plus_();
          }
        )
      );
    } else if (this.inputsC == RANGE_MAX_P) {
      this.appendValueInput("in1").appendField(
        new Blockly.FieldImage(
          "https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
          15,
          15,
          "*",
          function () {
            this.getSourceBlock().minus_();
          }
        )
      );
      this.getInput("in1").appendField("retiming");
    } else {
      this.appendValueInput("in1")
        .appendField(
          new Blockly.FieldImage(
            "https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
            15,
            15,
            "*",
            function () {
              this.getSourceBlock().minus_();
            }
          )
        )
        .appendField(
          new Blockly.FieldImage(
            "https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
            15,
            15,
            "*",
            function () {
              this.getSourceBlock().plus_();
            }
          )
        );
      this.getInput("in1").appendField("retiming");
    }

    var i = 2;
    while (this.getInput("in" + i)) {
      this.removeInput("in" + i);
      i++;
    }

    for (var x = 2; x <= this.inputsC; x++) {
      this.appendValueInput("in" + x).appendField(sig_text(x));
      //  .appendField('foo')
    }
  },

  plus_: function () {
    this.inputsC = this.inputsC + 1;
    this.updateShape_();
  },

  minus_: function () {
    this.inputsC = this.inputsC - 1;
    this.updateShape_();
  },
};

tlVerilogGenerator["pipesignal"] = (block) => {
  let in1_block,
    in2_block,
    in3_block = "";

  if (block.getInput("in1")) {
    in1_block = tlVerilogGenerator.valueToCode(
      block,
      "in1",
      tlVerilogGenerator.PRECEDENCE
    );
  }
  if (block.getInput("in2")) {
    in2_block = tlVerilogGenerator.valueToCode(
      block,
      "in2",
      tlVerilogGenerator.PRECEDENCE
    );
  }
  if (block.getInput("in3")) {
    in3_block = tlVerilogGenerator.valueToCode(
      block,
      "in3",
      tlVerilogGenerator.PRECEDENCE
    );
  }

  let text_signal =
  tlVerilogGenerator.variableDB_.getName(block.getFieldValue("signame"),  Blockly.Variables.NAME_TYPE);

  const code = in1_block + in2_block + in3_block + '$'+ text_signal;

  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["statesignal"] = {
  init: function () {
    this.jsonInit({
      type: "statesignal",
      message0: "%1 $ %2",
      args0: [
        {
          type: "input_value",
          name: "retiming",
        },
        {
          type: "field_variable",
          name: "statesignal",
          variable: "StateSignal",
        },
      ],
      output: null,
      colour: 210,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["statesignal"] = (block) => {
  const value_retiming = tlVerilogGenerator.valueToCode(
    block,
    "retiming",
    tlVerilogGenerator.PRECEDENCE
  );
  const variable_statesignal = tlVerilogGenerator.nameDB_.getName(
    block.getFieldValue("statesignal"),
    Blockly.Variables.NAME_TYPE
  );
  const code = value_retiming + "$" + variable_statesignal;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["assignedsignal"] = {
  init: function () {
    this.jsonInit({
      type: "assignedsignal",
      message0: "%1 $$ %2",
      args0: [
        {
          type: "input_value",
          name: "retiming",
        },
        {
          type: "field_variable",
          name: "assignedsignal",
          variable: "assigned_signal",
        },
      ],
      output: null,
      colour: 135,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["assignedsignal"] = (block) => {
  const value_retiming = tlVerilogGenerator.valueToCode(
    block,
    "retiming",
    tlVerilogGenerator.PRECEDENCE
  );
  const variable_assignedsignal = tlVerilogGenerator.nameDB_.getName(
    block.getFieldValue("assignedsignal"),
    Blockly.Variables.NAME_TYPE
  );
  const code = value_retiming + "$$" + variable_assignedsignal;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["assignedstatesignal"] = {
  init: function () {
    this.jsonInit({
      type: "assignedstatesignal",
      message0: "%1 $$ %2",
      args0: [
        {
          type: "input_value",
          name: "retiming",
        },
        {
          type: "field_variable",
          name: "assignedstatesignal",
          variable: "AssignedStateSignal",
        },
      ],
      output: null,
      colour: 195,
      tooltip: "",
      helpUrl: "",
    });
  },
};
tlVerilogGenerator["assignedstatesignal"] = (block) => {
  const value_retiming = tlVerilogGenerator.valueToCode(
    block,
    "retiming",
    tlVerilogGenerator.PRECEDENCE
  );
  const variable_assignedstatesignal = tlVerilogGenerator.nameDB_.getName(
    block.getFieldValue("assignedstatesignal"),
    Blockly.Variables.NAME_TYPE
  );
  const code = value_retiming + "$$" + variable_assignedstatesignal;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["svsignal"] = {
  init: function () {
    this.jsonInit({
      type: "svsignal",
      message0: "%1 * %2",
      args0: [
        {
          type: "input_value",
          name: "retiming",
        },
        {
          type: "field_variable",
          name: "svsignal",
          variable: "SV_signal",
        },
      ],
      output: null,
      colour: 240,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["svsignal"] = function (block) {
  const value_retiming = tlVerilogGenerator.valueToCode(
    block,
    "retiming",
    tlVerilogGenerator.PRECEDENCE
  );
  const variable_svsignal = tlVerilogGenerator.nameDB_.getName(
    block.getFieldValue("svsignal"),
    Blockly.Variables.NAME_TYPE
  );
  const code = value_retiming + "*" + variable_svsignal;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["svtype"] = {
  init: function () {
    this.jsonInit({
      type: "svtype",
      message0: "%1 ** %2",
      args0: [
        {
          type: "input_value",
          name: "retiming",
        },
        {
          type: "field_variable",
          name: "svtype",
          variable: "SV_type",
        },
      ],
      output: null,
      colour: 75,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["svtype"] = function (block) {
  const value_retiming = tlVerilogGenerator.valueToCode(
    block,
    "retiming",
    tlVerilogGenerator.PRECEDENCE
  );
  const variable_svtype = tlVerilogGenerator.nameDB_.getName(
    block.getFieldValue("svtype"),
    Blockly.Variables.NAME_TYPE
  );
  const code = value_retiming + "**" + variable_svtype;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, tlVerilogGenerator.PRECEDENCE];
};
