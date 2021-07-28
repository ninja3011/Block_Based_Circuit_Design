import * as Blockly from "blockly/core";
import tlVerilogGenerator from "./tl_verilog";

Blockly.Blocks["tlv_version"] = {
  init: function () {
    this.jsonInit({
      type: "tlv_version",
      message0: "\\TLV_version",
      previousStatement: null,
      nextStatement: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["tlv_version"] = (block) => "\\m4_TLV_version 1d: tl-x.org";

Blockly.Blocks["include"] = {
  init: function () {
    this.jsonInit({
      type: "include",
      message0: '`include " %1 "',
      args0: [
        {
          type: "field_input",
          name: "filename",
          text: "filename",
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


  tlVerilogGenerator["include"] = (block) => {
  var text_filename = block.getFieldValue("filename");
  var code = '`include "' + text_filename + '";';
  return code;
};

Blockly.Blocks["endmodule"] = {
  init: function () {
    this.jsonInit({
      type: "endmodule",
      message0: "endmodule",
      previousStatement: null,
      colour: 199,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["endmodule"] = (block) => "endmodule";

Blockly.Blocks["tlv"] = {
  init: function () {
    this.jsonInit({
      type: "tlv",
      message0: "\\TLV %1 %2",
      args0: [
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
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["tlv"] = (block) => {
  var statements_name = tlVerilogGenerator.statementToCode(block, "NAME");
  // TODO: Assemble JavaScript into code variable.
  var code = "\\TLV\n" + statements_name;
  return code;
};

Blockly.Blocks['sv'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "sv",
        "message0": "\\SV %1 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );

  }
};

tlVerilogGenerator["sv"] = (block) => {
  var statements_name = tlVerilogGenerator.statementToCode(block, "NAME");
  var code = "\\SV\n" + statements_name;
  return code;
};

Blockly.Blocks['sv_plus'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "sv_plus",
        "message0": "\\SV_plus %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "SV"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

tlVerilogGenerator["sv_plus"] = (block) => {
  const statements_sv = tlVerilogGenerator.statementToCode(block, "SV");
  var code = "\\SV_plus\n" + statements_sv;
  return code;
};
