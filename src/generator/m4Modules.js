import * as Blockly from "blockly/core";
import tlVerilogGenerator from "./tl_verilog";

Blockly.Blocks["m4_makerchip_module"] = {
  init: function () {
    this.jsonInit({
      type: "m4_makerchip_module",
      message0: "m4_makerchip_module",
      previousStatement: null,
      nextStatement: null,
      tooltip: "",
      helpUrl: "",
    });
  },
};


tlVerilogGenerator["m4_makerchip_module"] = (block) => "m4_makerchip_module" ;

Blockly.Blocks["m4plus"] = {
  init: function () {
    this.jsonInit({
      type: "m4plus",
      message0: "m4+ %1",
      args0: [
        {
          type: "field_input",
          name: "macro",
          text: "macro",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["m4plus"] = (block) => {
  const text_macro = block.getFieldValue("macro");
  const code = "m4+" + text_macro;
  return code;
};

Blockly.Blocks["m4_include_lib"] = {
  init: function () {
    this.jsonInit({
      type: "m4_include_lib",
      message0: "m4_include_lib([' %1 '])",
      args0: [
        {
          type: "field_input",
          name: "url",
          text: "url",
        },
      ],
      previousStatement: null,
      nextStatement: null,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["m4_include_lib"] = (block) => {
  const text_url = block.getFieldValue("url");
  const code = "m4_include_lib(['" + text_url + "'])";
  return code;
};

Blockly.Blocks["m4asm"] = {
  init: function () {
    this.jsonInit({
      type: "m4asm",
      message0: "m4_asm( %1 )",
      args0: [
        {
          type: "field_input",
          name: "asm",
          text: "ASSEMBLY CODE",
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

tlVerilogGenerator["m4_asm"] = (block) => {
  const text_asm = block.getFieldValue("asm");
  const code = "m4_asm(" + text_asm + ")";
  return code;
};

Blockly.Blocks["m4_general"] = {
  init: function () {
    this.jsonInit({
      type: "m4_general",
      message0: "m4_ %1 ( %2 )",
      args0: [
        {
          type: "field_input",
          name: "func",
          text: "function",
        },
        {
          type: "field_input",
          name: "args",
          text: "args",
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

tlVerilogGenerator["m4_general"] = (block) => {
  const text_func = block.getFieldValue("func");
  const text_args = block.getFieldValue("args");
  const code = "m4_" + text_func + "(" + text_args + ")";
  return code;
};
