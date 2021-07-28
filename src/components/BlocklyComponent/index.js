import React from 'react';
import BlocklyComponent from './BlocklyComponent';

export default BlocklyComponent;

function Block({children, ...rest}) {
    return React.createElement("block", rest, children);
 }

function Category({children, ...rest}) {
    return React.createElement("category", rest, children);
 }

 function Value({children, ...rest}) {
    return React.createElement("value", rest, children);
 }

 function Field({children, ...rest}) {
    return React.createElement("field", rest, children);
 }

 function Shadow({children, ...rest}) {
   //  return React.createElement("shadow", rest, children);
    return <shadow {...rest}>{children}</shadow>
 }

export { Block, Category, Value, Field, Shadow }

<Shadow>ygygy</Shadow>