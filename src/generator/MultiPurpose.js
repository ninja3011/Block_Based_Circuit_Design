import tlVerilogGenerator from './tl_verilog'



tlVerilogGenerator['part_general'] = function(block) {
    var text_name = block.getFieldValue('NAME');
    var value_general = tlVerilogGenerator.valueToCode(block, 'general',  tlVerilogGenerator.PRECEDENCE);
    // TODO: Assemble JavaScript into code variable.
    var code = text_name+value_general;
      // TODO: Change ORDER_NONE to the correct strength.
    return [code, tlVerilogGenerator.PRECEDENCE];
  };

  tlVerilogGenerator['TLV_CODE_BLOCK'] = function (block) {
  
       var textValue = block.getFieldValue('FIELDNAME');
      // var textValue = tlVerilogGenerator.valueToCode(block, 'FIELDNAME', tlVerilogGenerator.PRECEDENCE);
      var code =  textValue ;
      console.log('multiline\n',code )
      return code;
  };