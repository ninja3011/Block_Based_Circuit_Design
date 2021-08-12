import React from 'react'
import BlocklyComponent, {
    Block,
    Value,
    Field,
    Shadow,
    Category,
  } from "./BlocklyComponent";
import Blockly from 'blockly'
function Toolbox() {
    return (
        <>
        <Category name="File Structure" colour="199">
            <Block type="tlv" />
            <Block type="tlv_version" />
            <Block type="sv" />
            <Block type="sv_plus" />
            <Block type="always_comb" />

            <Block type="endmodule" />
            <Block type="include" />
          </Category>
          <Category name="Multi Purpose" colour="100">
            <Block type="part_general" />
            <Block type="TLV_CODE_BLOCK">
              <Field name="FIELDNAME"></Field>
            </Block>
            <Block type="parenthesis" />
            <Block type="semicolon" />
            <Block type="sig_type" />
          </Category>
          <Category name="Logic" colour="290">
            <Category name="Expressions">
              <Block type="expression" />
            </Category>
            <Category name="Sequential">
              <Block type="always_ff" />
            </Category>
            <Category name="Components">
              <Block type="signal" />
              <Block type="logical_operator" />
              <Block type="comparison_operator" />
              <Block type="arithmetic_operator" />
              <Block type="retiming" />
              <Block type="dynamic_dropdown" />
              <Block type="any" />
              <Block type="retain" />

            </Category>

            <Category name="ternary">
              <Block type="ternary_shell" />
              <Block type="ternary_fields" />
            </Category>
          </Category>
          <Category name="TLV" colour="160">
            <Category name="Scopes">
              <Block type="pipeline" />
              <Block type="stage_number" />
              <Block type="when" />
              <Block type="hierarchy" />
            </Category>
          </Category>
          <Category name="m4 Modules" colour="20">
            <Block type="m4_makerchip_module" />
            <Block type="m4plus" />
            <Block type="m4asm" />
            <Block type="m4_general" />

            <Block type="m4_include_lib" />
          </Category>
          <Category name="Printing" colour="300">
            <Block type="display" />
          </Category>
          <Category name="Signals" colour="200">
            <Category name="Signal Generator" custom="VARIABLE">
              <Block type="variables_get" />
              <Block type="variables_set" />
            </Category>

            <Category name="$pipesignals">
              <Block type="pipesignal" />
            </Category>
            <Category name="$StateSignals">
              <Block type="statesignal" />
            </Category>
            <Category name="$$assigned_signals">
              <Block type="assignedsignal" />
            </Category>
            <Category name="$$AssignedStateSignals">
              <Block type="assignedstatesignal" />
            </Category>
            <Category name="*SV_signals">
              <Block type="svsignal" />
            </Category>
            <Category name="**SV_types">
              <Block type="svtype" />
            </Category>
          </Category>
          <Category name="Functions" custom="PROCEDURE" colour="134"></Category>
          <Category  name="Javascript" colour="250">
          <category name="Input">
      <block type="input_value">
        <value name="TYPE">
          <shadow type="type_null"></shadow>
        </value>
      </block>
      <block type="input_statement">
        <value name="TYPE">
          <shadow type="type_null"></shadow>
        </value>
      </block>
      <block type="input_dummy"></block>
    </category>
    <category name="Field">
      <block type="field_static"></block>
      <block type="field_label_serializable"></block>
      <block type="field_input"></block>
      <block type="field_number"></block>
      <block type="field_angle"></block>
      <block type="field_dropdown"></block>
      <block type="field_checkbox"></block>
      <block type="field_colour"></block>
      <block type="field_variable"></block>
      <block type="field_image"></block>
    </category>
    <category name="Type">
      <block type="type_group"></block>
      <block type="type_null"></block>
      <block type="type_boolean"></block>
      <block type="type_number"></block>
      <block type="type_string"></block>
      <block type="type_list"></block>
      <block type="type_other"></block>
    </category>
    <category name="Colour" id="colourCategory">
      <block type="colour_hue"><mutation colour="20"></mutation><field name="HUE">20</field></block>
      <block type="colour_hue"><mutation colour="65"></mutation><field name="HUE">65</field></block>
      <block type="colour_hue"><mutation colour="120"></mutation><field name="HUE">120</field></block>
      <block type="colour_hue"><mutation colour="160"></mutation><field name="HUE">160</field></block>
      <block type="colour_hue"><mutation colour="210"></mutation><field name="HUE">210</field></block>
      <block type="colour_hue"><mutation colour="230"></mutation><field name="HUE">230</field></block>
      <block type="colour_hue"><mutation colour="260"></mutation><field name="HUE">260</field></block>
      <block type="colour_hue"><mutation colour="290"></mutation><field name="HUE">290</field></block>
      <block type="colour_hue"><mutation colour="330"></mutation><field name="HUE">330</field></block>
    </category>
    <category name="Logic" colour="210">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null"></block>
      <block type="logic_ternary"></block>
    </category>
    <category name="Loops" colour="120">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
        <value name="BY">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="controls_forEach"></block>
      <block type="controls_flow_statements"></block>
    </category>
    <category name="Math" colour="230">
      <block type="math_number"></block>
      <block type="math_arithmetic">
        <value name="A">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="B">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="math_single">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">9</field>
          </shadow>
        </value>
      </block>
      <block type="math_trig">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">45</field>
          </shadow>
        </value>
      </block>
      <block type="math_constant"></block>
      <block type="math_number_property">
        <value name="NUMBER_TO_CHECK">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="math_round">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">3.1</field>
          </shadow>
        </value>
      </block>
      <block type="math_on_list"></block>
      <block type="math_modulo">
        <value name="DIVIDEND">
          <shadow type="math_number">
            <field name="NUM">64</field>
          </shadow>
        </value>
        <value name="DIVISOR">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="math_constrain">
        <value name="VALUE">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="LOW">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="HIGH">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
      <block type="math_random_int">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
      </block>
      <block type="math_random_float"></block>
    </category>
    <category name="Text" colour="160">
      <block type="text"></block>
      <block type="text_join"></block>
      <block type="text_append">
        <value name="TEXT">
          <shadow type="text"></shadow>
        </value>
      </block>
      <block type="text_length">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_isEmpty">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="text_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
        <value name="FIND">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_charAt">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block>
      <block type="text_getSubstring">
        <value name="STRING">
          <block type="variables_get">
            <field name="VAR">text</field>
          </block>
        </value>
      </block>
      <block type="text_changeCase">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_trim">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_print">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_prompt_ext">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
    </category>
    <category name="Lists" colour="260">
      <block type="lists_create_with">
        <mutation items="0"></mutation>
      </block>
      <block type="lists_create_with"></block>
      <block type="lists_repeat">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
      </block>
      <block type="lists_length"></block>
      <block type="lists_isEmpty"></block>
      <block type="lists_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_getIndex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_setIndex">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_getSublist">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">list</field>
          </block>
        </value>
      </block>
      <block type="lists_split">
        <value name="DELIM">
          <shadow type="text">
            <field name="TEXT">,</field>
          </shadow>
        </value>
      </block>
      <block type="lists_sort"></block>
    </category>
    <category name="Colour" colour="20">
      <block type="colour_picker"></block>
      <block type="colour_random"></block>
      <block type="colour_rgb">
        <value name="RED">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="GREEN">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="BLUE">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="colour_blend">
        <value name="COLOUR1">
          <shadow type="colour_picker">
            <field name="COLOUR">#ff0000</field>
          </shadow>
        </value>
        <value name="COLOUR2">
          <shadow type="colour_picker">
            <field name="COLOUR">#3333ff</field>
          </shadow>
        </value>
        <value name="RATIO">
          <shadow type="math_number">
            <field name="NUM">0.5</field>
          </shadow>
        </value>
      </block>
    </category>
    <sep></sep>
    <category name="Variables" colour="330" custom="VARIABLE"></category>
    <category name="Functions" colour="290" custom="PROCEDURE"></category>
    <sep></sep>
    <category name="Block Library" colour="260" id="blockLibCategory"></category>
  
          </Category>

        </>
    );
}

export default Toolbox
