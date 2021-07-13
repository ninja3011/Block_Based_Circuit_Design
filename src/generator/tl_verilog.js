import * as Blockly from 'blockly';



const tlVerilogGenerator = new Blockly.Generator('TL_Verilog');
tlVerilogGenerator.PRECEDENCE = 0;
tlVerilogGenerator.INDENT = '   ';

export default tlVerilogGenerator;
