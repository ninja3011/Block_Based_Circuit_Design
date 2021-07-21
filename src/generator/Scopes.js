import * as Blockly from "blockly/core";
import tlVerilogGenerator from "./tl_verilog";

Blockly.Blocks["pipeline"] = {
  init: function () {
    this.jsonInit({
      type: "pipeline",
      message0: "| %1 %2 %3",
      args0: [
        {
          type: "field_input",
          name: "pipeline",
          text: "",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "NAME",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 65,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["pipeline"] = function (block) {
  var text_pipeline = block.getFieldValue("pipeline");
  var statements_name = tlVerilogGenerator.statementToCode(block, "NAME");
  var code = "|" + text_pipeline + "\n" + statements_name;
  return code;
};

Blockly.Blocks["hierarchy"] = {
  init: function () {
    this.jsonInit({
      type: "hierarchy",
      message0: "/ %1 %2 %3",
      args0: [
        {
          type: "field_input",
          name: "beh_hier",
          text: "",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "block",
        },
      ],
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["hierarchy"] = function (block) {
  var text_beh_hier = block.getFieldValue("beh_hier");
  var statements_block = tlVerilogGenerator.statementToCode(block, "block");
  var code = "/" + text_beh_hier + "\n" + statements_block;
  return code;
};

Blockly.Blocks["stage_number"] = {
  init: function () {
    this.jsonInit({
      type: "stage_number",
      message0: "@ %1 %2 %3",
      args0: [
        {
          type: "field_number",
          name: "stage_no",
          value: 0,
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "expression",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["stage_number"] = function (block) {
  var number_stage_no = block.getFieldValue("stage_no");
  var statements_expression = tlVerilogGenerator.statementToCode(
    block,
    "expression"
  );
  // TODO: Assemble JavaScript into code variable.
  var code = "@" + number_stage_no + "\n" + statements_expression;
  return code;
};

Blockly.Blocks["when"] = {
  init: function () {
    this.jsonInit({
      type: "when",
      message0: "? %1 %2 %3 %4",
      args0: [
        {
          type: "field_dropdown",
          name: "sig_type",
          options: [
            ["$", "$"],
            ["*", "*"],
            ["", ""],
          ],
        },
        {
          type: "field_input",
          name: "signal",
          text: "",
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_statement",
          name: "NAME",
        },
      ],
      inputsInline: true,
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["when"] = function (block) {
  var dropdown_sig_type = block.getFieldValue("sig_type");
  var text_signal = block.getFieldValue("signal");
  var statements_name = tlVerilogGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = "?" + dropdown_sig_type + text_signal + "\n" + statements_name;
  return code;
};
