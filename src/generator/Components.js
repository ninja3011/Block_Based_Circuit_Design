import * as Blockly from "blockly/core";
import tlVerilogGenerator from "./tl_verilog";


const RANGE_MIN = 0;
const RANGE_MAX = 3;
Blockly.Blocks['signal'] = {
  init: function() {
	  
	var inputsC = RANGE_MIN;  
  this.appendValueInput('in1');
	// this.appendValueInput('in2');
	//         .appendField('foo')
  this.appendDummyInput()
  .appendField(new Blockly.FieldVariable("signal"), "signame");

	

  this.setOutput(true, null);
  this.setOutput(true, 'signal');
	this.setColour(100);
	this.setInputsInline(true);

  },
  
    mutationToDom: function () {
	    var container = Blockly.utils.xml.createElement('mutation');
        container.setAttribute('inputCount', this.inputsC);
        return container;
    },
	
 
    domToMutation: function (xmlElement) {
		this.inputsC = parseInt(xmlElement.getAttribute('inputCount'), 10) || RANGE_MIN;
        this.updateShape_();
    },
  
    updateShape_: function() {
		this.removeInput('in1');
		
		if(this.inputsC == RANGE_MIN){
			this.appendValueInput('in1')
            .appendField(new Blockly.FieldImage(
                "https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
                15,
                15,
            "*", function() {
            this.getSourceBlock().plus_();
            } ));
		}
		else if(this.inputsC == RANGE_MAX){
			this.appendValueInput('in1')
			.appendField(new Blockly.FieldImage(
                "https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
                15,
                15,
            "*", function() {
            this.getSourceBlock().minus_();
            } ));
		}
		else{
			this.appendValueInput('in1')
			.appendField(new Blockly.FieldImage(
                "https://fonts.gstatic.com/s/i/materialiconsoutlined/remove/v4/24px.svg?download=true",
                15,
                15,
            "*", function() {
            this.getSourceBlock().minus_();
            } ))
            .appendField(new Blockly.FieldImage(
                "https://fonts.gstatic.com/s/i/materialiconsoutlined/add/v4/24px.svg?download=true",
                15,
                15,
            "*", function() {
            this.getSourceBlock().plus_();
            } ));
		}
		
        var i = 2;
        while (this.getInput('in' + i)) {
           this.removeInput('in' + i);
        i++;
        }
	  
	    for (var x = 2; x <= this.inputsC; x++) {
	       this.appendValueInput('in' + x)
	      //  .appendField('foo')
        }
    },
 
 
    plus_: function (){
	    this.inputsC = (this.inputsC + 1);
	    this.updateShape_();
    },
  
    minus_: function (){
	    this.inputsC = (this.inputsC - 1);
	    this.updateShape_();
    }
};




tlVerilogGenerator["signal"] = (block) => {
  const value_retiming = tlVerilogGenerator.valueToCode(
    block,
    "retiming",
    tlVerilogGenerator.PRECEDENCE
  );
  const dropdown_type = block.getFieldValue("type");
  const text_signal = block.getFieldValue("signal");
  const code = value_retiming + dropdown_type + text_signal;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["logical_operator"] = {
  init: function () {
    this.jsonInit({
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
    });
  },
};

tlVerilogGenerator["logical_operator"] = (block) => {
  const value_sig1 = tlVerilogGenerator.valueToCode(
    block,
    "sig1",
    tlVerilogGenerator.PRECEDENCE
  );
  const dropdown_name = block.getFieldValue("type");
  const value_sig2 = tlVerilogGenerator.valueToCode(
    block,
    "sig2",
    tlVerilogGenerator.PRECEDENCE
  );
  const code = "(" + value_sig1 + " " + dropdown_name + " " + value_sig2 + ")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["comparison_operator"] = {
  init: function () {
    this.jsonInit({
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
    });
  },
};

tlVerilogGenerator["comparison_operator"] = (block) => {
  const value_sig1 = tlVerilogGenerator.valueToCode(
    block,
    "sig1",
    tlVerilogGenerator.PRECEDENCE
  );
  const dropdown_operator = block.getFieldValue("operator");
  const value_sig2 = tlVerilogGenerator.valueToCode(
    block,
    "sig2",
    tlVerilogGenerator.PRECEDENCE
  );
  // TODO: Change ORDER_NONE to the correct strength.
  const code =
    "(" + value_sig1 + " " + dropdown_operator + " " + value_sig2 + ")";
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["arithmetic_operator"] = {
  init: function () {
    this.jsonInit({
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
    });
  },
};

tlVerilogGenerator["arithmetic_operator"] = (block) => {
  const value_sig1 = tlVerilogGenerator.valueToCode(
    block,
    "sig1",
    tlVerilogGenerator.PRECEDENCE
  );
  const dropdown_operator = block.getFieldValue("operator");
  const value_sig2 = tlVerilogGenerator.valueToCode(
    block,
    "sig2",
    tlVerilogGenerator.PRECEDENCE
  );
  // TODO: Assemble JavaScript into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  const code =
    "(" + value_sig1 + " " + dropdown_operator + " " + value_sig2 + ")";
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["dynamic_dropdown"] = {
  init: function () {
    this.jsonInit({
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
    });
  },
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
      const options = [["", ""]];
      const perms = [];
      const blocks = Blockly.mainWorkspace.getAllBlocks();
      console.log(blocks);
      const cnt = 0;
      for (let i = 0; i < blocks.length; i++) {
        const tmp_PIPE = blocks[i].getFieldValue("pipeline");
        const tmp_HIER = blocks[i].getFieldValue("beh_hier");
        const tmp_STAGENO = blocks[i].getFieldValue("stage_no");
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
      for (const a in permutations(perms)) {
        console.log("perms", perms);
        const combination = permutations(perms)[a].join("");
        console.log(a, "\n", combination);

        options[a] = [combination, combination];
      }
      options.unshift(["", ""]);
      return options;
    }),
    "SCOPE"
  );
});

tlVerilogGenerator["dynamic_dropdown"] = (block) => {
  const dropdown_SCOPE = block.getFieldValue("SCOPE");
  // TODO: Change ORDER_NONE to the correct strength.
  const code = dropdown_SCOPE;
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["retiming"] = {
  init: function () {
    this.jsonInit({
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
    });
  },
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

tlVerilogGenerator["retiming"] = (block) => {
  const retiming_value = block.getFieldValue("retimer_val");
  // TODO: Change ORDER_NONE to the correct strength.

  const code = "";

  if (retiming_value == 0) {
    code = "<>" + retiming_value;
  } else {
    code = ">>" + retiming_value;
  }
  return [code, tlVerilogGenerator.PRECEDENCE];
};

Blockly.Blocks["semicolon"] = {
  init: function () {
    this.jsonInit({
      type: "semicolon",
      message0: ";",
      output: null,
      colour: 230,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["semicolon"] = (block) => "; ";

Blockly.Blocks["parenthesis"] = {
  init: function () {
    this.jsonInit({
      type: "parenthesis",
      message0: "( %1 )",
      args0: [
        {
          type: "input_value",
          name: "NAME",
        },
      ],
      inputsInline: true,
      output: null,
      colour: 120,
      tooltip: "",
      helpUrl: "",
    });
  },
};

tlVerilogGenerator["parenthesis"] = (block) => {
  const value_name = tlVerilogGenerator.valueToCode(
    block,
    "NAME",
    tlVerilogGenerator.PRECEDENCE
  );
  // TODO: Assemble JavaScript into code variable.
  const code = "(" + value_name + ") ";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, tlVerilogGenerator.PRECEDENCE];
};
