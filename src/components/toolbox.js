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
              {/* <Block type="dynamic_dropdown" /> */}
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
          <Category name="Input">
      <Block type="input_value">
        <Value name="TYPE">
          <Shadow type="type_null"></Shadow>
        </Value>
      </Block>
      <Block type="input_statement">
        <Value name="TYPE">
          <Shadow type="type_null"></Shadow>
        </Value>
      </Block>
      <Block type="input_dummy"></Block>
    </Category>
    <Category name="Field">
      <Block type="field_static"></Block>
      <Block type="field_label_serializable"></Block>
      <Block type="field_input"></Block>
      <Block type="field_number"></Block>
      <Block type="field_angle"></Block>
      <Block type="field_dropdown"></Block>
      <Block type="field_checkbox"></Block>
      <Block type="field_colour"></Block>
      <Block type="field_variable"></Block>
      <Block type="field_image"></Block>
    </Category>
    <Category name="Type">
      <Block type="type_group"></Block>
      <Block type="type_null"></Block>
      <Block type="type_boolean"></Block>
      <Block type="type_number"></Block>
      <Block type="type_string"></Block>
      <Block type="type_list"></Block>
      <Block type="type_other"></Block>
    </Category>
    <Category name="Colour" id="colourCategory">
      <Block type="colour_hue"><mutation colour="20"></mutation><Field name="HUE">20</Field></Block>
      <Block type="colour_hue"><mutation colour="65"></mutation><Field name="HUE">65</Field></Block>
      <Block type="colour_hue"><mutation colour="120"></mutation><Field name="HUE">120</Field></Block>
      <Block type="colour_hue"><mutation colour="160"></mutation><Field name="HUE">160</Field></Block>
      <Block type="colour_hue"><mutation colour="210"></mutation><Field name="HUE">210</Field></Block>
      <Block type="colour_hue"><mutation colour="230"></mutation><Field name="HUE">230</Field></Block>
      <Block type="colour_hue"><mutation colour="260"></mutation><Field name="HUE">260</Field></Block>
      <Block type="colour_hue"><mutation colour="290"></mutation><Field name="HUE">290</Field></Block>
      <Block type="colour_hue"><mutation colour="330"></mutation><Field name="HUE">330</Field></Block>
    </Category>
    <Category name="Logic" colour="210">
      <Block type="controls_if"></Block>
      <Block type="logic_compare"></Block>
      <Block type="logic_operation"></Block>
      <Block type="logic_negate"></Block>
      <Block type="logic_boolean"></Block>
      <Block type="logic_null"></Block>
      <Block type="logic_ternary"></Block>
    </Category>
    <Category name="Loops" colour="120">
      <Block type="controls_repeat_ext">
        <Value name="TIMES">
          <Shadow type="math_number">
            <Field name="NUM">10</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="controls_whileUntil"></Block>
      <Block type="controls_for">
        <Value name="FROM">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
        <Value name="TO">
          <Shadow type="math_number">
            <Field name="NUM">10</Field>
          </Shadow>
        </Value>
        <Value name="BY">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="controls_forEach"></Block>
      <Block type="controls_flow_statements"></Block>
    </Category>
    <Category name="Math" colour="230">
      <Block type="math_number"></Block>
      <Block type="math_arithmetic">
        <Value name="A">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
        <Value name="B">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_single">
        <Value name="NUM">
          <Shadow type="math_number">
            <Field name="NUM">9</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_trig">
        <Value name="NUM">
          <Shadow type="math_number">
            <Field name="NUM">45</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_constant"></Block>
      <Block type="math_number_property">
        <Value name="NUMBER_TO_CHECK">
          <Shadow type="math_number">
            <Field name="NUM">0</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_round">
        <Value name="NUM">
          <Shadow type="math_number">
            <Field name="NUM">3.1</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_on_list"></Block>
      <Block type="math_modulo">
        <Value name="DIVIDEND">
          <Shadow type="math_number">
            <Field name="NUM">64</Field>
          </Shadow>
        </Value>
        <Value name="DIVISOR">
          <Shadow type="math_number">
            <Field name="NUM">10</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_constrain">
        <Value name="VALUE">
          <Shadow type="math_number">
            <Field name="NUM">50</Field>
          </Shadow>
        </Value>
        <Value name="LOW">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
        <Value name="HIGH">
          <Shadow type="math_number">
            <Field name="NUM">100</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_random_int">
        <Value name="FROM">
          <Shadow type="math_number">
            <Field name="NUM">1</Field>
          </Shadow>
        </Value>
        <Value name="TO">
          <Shadow type="math_number">
            <Field name="NUM">100</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="math_random_float"></Block>
    </Category>
    <Category name="Text" colour="160">
      <Block type="text"></Block>
      <Block type="text_join"></Block>
      <Block type="text_append">
        <Value name="TEXT">
          <Shadow type="text"></Shadow>
        </Value>
      </Block>
      <Block type="text_length">
        <Value name="VALUE">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="text_isEmpty">
        <Value name="VALUE">
          <Shadow type="text">
            <Field name="TEXT"></Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="text_indexOf">
        <Value name="VALUE">
          <Block type="variables_get">
            <Field name="VAR">text</Field>
          </Block>
        </Value>
        <Value name="FIND">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="text_charAt">
        <Value name="VALUE">
          <Block type="variables_get">
            <Field name="VAR">text</Field>
          </Block>
        </Value>
      </Block>
      <Block type="text_getSubstring">
        <Value name="STRING">
          <Block type="variables_get">
            <Field name="VAR">text</Field>
          </Block>
        </Value>
      </Block>
      <Block type="text_changeCase">
        <Value name="TEXT">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="text_trim">
        <Value name="TEXT">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="text_print">
        <Value name="TEXT">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="text_prompt_ext">
        <Value name="TEXT">
          <Shadow type="text">
            <Field name="TEXT">abc</Field>
          </Shadow>
        </Value>
      </Block>
    </Category>
    <Category name="Lists" colour="260">
      <Block type="lists_create_with">
        <mutation items="0"></mutation>
      </Block>
      <Block type="lists_create_with"></Block>
      <Block type="lists_repeat">
        <Value name="NUM">
          <Shadow type="math_number">
            <Field name="NUM">5</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="lists_length"></Block>
      <Block type="lists_isEmpty"></Block>
      <Block type="lists_indexOf">
        <Value name="VALUE">
          <Block type="variables_get">
            <Field name="VAR">list</Field>
          </Block>
        </Value>
      </Block>
      <Block type="lists_getIndex">
        <Value name="VALUE">
          <Block type="variables_get">
            <Field name="VAR">list</Field>
          </Block>
        </Value>
      </Block>
      <Block type="lists_setIndex">
        <Value name="LIST">
          <Block type="variables_get">
            <Field name="VAR">list</Field>
          </Block>
        </Value>
      </Block>
      <Block type="lists_getSublist">
        <Value name="LIST">
          <Block type="variables_get">
            <Field name="VAR">list</Field>
          </Block>
        </Value>
      </Block>
      <Block type="lists_split">
        <Value name="DELIM">
          <Shadow type="text">
            <Field name="TEXT">,</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="lists_sort"></Block>
    </Category>
    <Category name="Colour" colour="20">
      <Block type="colour_picker"></Block>
      <Block type="colour_random"></Block>
      <Block type="colour_rgb">
        <Value name="RED">
          <Shadow type="math_number">
            <Field name="NUM">100</Field>
          </Shadow>
        </Value>
        <Value name="GREEN">
          <Shadow type="math_number">
            <Field name="NUM">50</Field>
          </Shadow>
        </Value>
        <Value name="BLUE">
          <Shadow type="math_number">
            <Field name="NUM">0</Field>
          </Shadow>
        </Value>
      </Block>
      <Block type="colour_blend">
        <Value name="COLOUR1">
          <Shadow type="colour_picker">
            <Field name="COLOUR">#ff0000</Field>
          </Shadow>
        </Value>
        <Value name="COLOUR2">
          <Shadow type="colour_picker">
            <Field name="COLOUR">#3333ff</Field>
          </Shadow>
        </Value>
        <Value name="RATIO">
          <Shadow type="math_number">
            <Field name="NUM">0.5</Field>
          </Shadow>
        </Value>
      </Block>
    </Category>
    <sep></sep>
    <Category name="Variables" colour="330" custom="VARIABLE"></Category>
    <Category name="Functions" colour="290" custom="PROCEDURE"></Category>
    <sep></sep>
    <Category name="Block Library" colour="260" id="blockLibCategory"></Category>
  
          </Category>

        </>
    );
}

export default Toolbox
