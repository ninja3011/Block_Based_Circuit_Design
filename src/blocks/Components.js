import React from "react";
import * as Blockly from "blockly/core";

var signal_block = {
  type: "signal",
  message0: "%1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "retiming",
      text: "",
    },
    {
      type: "field_dropdown",
      name: "type",
      options: [
        ["$", "$"],
        ["*", "*"],
        ["!$", "!$"],
        ["!*", "!*"],
      ],
    },
    {
      type: "field_input",
      name: "signal",
      text: "signal",
    }
  ],
  inputsInline: true,
  output: null,
  colour: 315,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["signal"] = {
  init: function () {
    this.jsonInit(signal_block);
  },
};

var logical_operator_block = {
  type: "logical_operator",
  message0: "%1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "sig1",
    },
    {
      type: "field_dropdown",
      name: "NAME",
      options: [
        ["&&", "&&"],
        ["||", "||"],
        ["^", "^"],
      ],
    },
    {
      type: "input_value",
      name: "sig2",
    },
  ],
  inputsInline: true,
  output: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["logical_operator"] = {
  init: function () {
    this.jsonInit(logical_operator_block);
  },
};

var arithmetic_operator_block = {
  type: "arithmetic_operator",
  message0: "%1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "sig1",
    },
    {
      type: "field_dropdown",
      name: "operator",
      options: [
        ["+", "+"],
        ["-", "-"],
        ["*", "*"],
        ["**", "**"],
        ["/", "/"],
      ],
    },
    {
      type: "input_value",
      name: "sig2",
    },
  ],
  inputsInline: true,
  output: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["arithmetic_operator"] = {
  init: function () {
    this.jsonInit(arithmetic_operator_block);
  },
};

var comparison_operator_block = {
  type: "comparison_operator",
  message0: "%1 %2 %3",
  args0: [
    {
      type: "input_value",
      name: "sig1",
    },
    {
      type: "field_dropdown",
      name: "operator",
      options: [
        ["==", "=="],
        ["==?", "==?"],
        ["!=", "!="],
        [">", ">"],
        ["<", "<"],
        [">=", ">="],
        ["<=", "<="],
      ],
    },
    {
      type: "input_value",
      name: "sig2",
    },
  ],
  inputsInline: true,
  output: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["comparison_operator"] = {
  init: function () {
    this.jsonInit(comparison_operator_block);
  },
};

var semicolon_block = {
  type: "semicolon",
  message0: ";",
  output: null,
  colour: 230,
  tooltip: "",
  helpUrl: "",
};

Blockly.Blocks["semicolon"] = {
  init: function () {
    this.jsonInit(semicolon_block);
  },
};

var dynamic_dropdown_block = {
  type: "dynamic_dropdown",
  message0: "Scope %1",
  args0: [
    {
      type: "input_dummy",
      name: "INPUT",
    },
  ],

  extensions: ["dynamic_menu_extension"],
  output: null,
};

Blockly.Extensions.register("dynamic_menu_extension", function () {
  const permutations = (arr) => {
    if (arr.length <= 2)
      return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
      (acc, item, i) =>
        acc.concat(
          permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
            item,
            ...val,
          ])
        ),
      []
    );
  };

  this.getInput("INPUT").appendField(
    new Blockly.FieldDropdown(function () {
      var options = [["", ""]];
      var perms = [];
      // var now = Date.now();
      // for(var i = 0; i < 7; i++) {
      //   var dateString = String(new Date(now)).substring(0, 3);
      //   options.push([dateString, dateString.toUpperCase()]);
      //   now += 24 * 60 * 60 * 1000;
      // }

      var blocks = Blockly.mainWorkspace.getAllBlocks();
      console.log(blocks);
      var cnt = 0;
      for (let i = 0; i < blocks.length; i++) {
        var tmp_PIPE = blocks[i].getFieldValue("pipeline");
        var tmp_HIER = blocks[i].getFieldValue("beh_hier");
        var tmp_STAGENO = blocks[i].getFieldValue("stage_no");
        console.log(tmp_PIPE, tmp_HIER, tmp_STAGENO);
        if (tmp_PIPE != null) {
          tmp_PIPE = "|" + tmp_PIPE;
          cnt = cnt + 1;
          perms[cnt] = tmp_PIPE;
        }
        if (tmp_HIER != null) {
          tmp_HIER = "/" + tmp_HIER;
          cnt = cnt + 1;
          perms[cnt] = tmp_HIER;
        }
        if (tmp_STAGENO != null) {
          tmp_STAGENO = "@" + tmp_STAGENO.toString();
          cnt = cnt + 1;
          perms[cnt] = tmp_STAGENO;
        }
      }
      for (var a in permutations(perms)) {
        console.log("perms", perms);
        var combination = permutations(perms)[a].join("");
        console.log(a, "\n", combination);

        options[a] = [combination, combination];
      }
      options.unshift(["", ""]);
      return options;
    }),
    "SCOPE"
  );
});
Blockly.Blocks["dynamic_dropdown"] = {
  init: function () {
    this.jsonInit(dynamic_dropdown_block);
  },
};

var retiming_block = {
  type: "retiming",
  message0: " >> %1 %2 %3",
  args0: [
    {
      type: "field_number",
      name: "retimer_val",
      value: 0,
    },
    {
      name: "Retimer_minus",
      type: "field_image",
      src: "https://img.icons8.com/pastel-glyph/2x/minus--v2.gif",
      width: 18,
      height: 18,
      alt: "*",
    },
    {
      name: "Retimer_plus",
      type: "field_image",
      src: "https://img.icons8.com/ios/2x/plus--v2.gif",
      width: 18,
      height: 18,
      alt: "*",
    },
  ],
  extensions: ["retiming_func"],
  output: null,
};

Blockly.Extensions.register("retiming_func", function () {
  this.getField("Retimer_minus").clickHandler_ = () => {
    this.setFieldValue(this.getField("retimer_val").value_ - 1, "retimer_val");
    console.log(" minus clicked", this.getField("retimer_val").value_);
  };

  this.getField("Retimer_plus").clickHandler_ = () => {
    this.setFieldValue(this.getField("retimer_val").value_ + 1, "retimer_val");
    console.log(" plus clicked", this.getField("retimer_val").value_);
  };
});

Blockly.Blocks["retiming"] = {
  init: function () {
    this.jsonInit(retiming_block);
  },
};


var parenthesis_block = 
{
  "type": "parenthesis",
  "message0": "( %1 )",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks["parenthesis"] = {
  init: function () {
    this.jsonInit(parenthesis_block);
  },
};