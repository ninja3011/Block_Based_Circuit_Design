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

tlVerilogGenerator["pipeline"] = (block) => {
  const text_pipeline = block.getFieldValue("pipeline");
  const statements_name = tlVerilogGenerator.statementToCode(block, "NAME");
  const code = "|" + text_pipeline + "\n" + statements_name;
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


tlVerilogGenerator["hierarchy"] = (block) => {
  const text_beh_hier = block.getFieldValue("beh_hier");
  const statements_block = tlVerilogGenerator.statementToCode(block, "block");
  const code = "/" + text_beh_hier + "\n" + statements_block;
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

tlVerilogGenerator["stage_number"] = (block) => {

  const number_stage_no = block.getFieldValue("stage_no");
  const statements_expression = tlVerilogGenerator.statementToCode(
    block,
    "expression"
  );
  // TODO: Assemble JavaScript into code variable.
  const code = "@" + number_stage_no + "\n" + statements_expression;
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

tlVerilogGenerator["when"] = (block) => {

  const dropdown_sig_type = block.getFieldValue("sig_type");
  const text_signal = block.getFieldValue("signal");
  const statements_name = tlVerilogGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  const code = "?" + dropdown_sig_type + text_signal + "\n" + statements_name;
  return code;
};
