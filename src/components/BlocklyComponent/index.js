import React from 'react';
import BlocklyComponent from './BlocklyComponent';

export default BlocklyComponent;

function Block({children, ...rest}) {
    return <block {...rest}>{children}</block>
 }

function Category({children, ...rest}) {
    return <category {...rest}>{children}</category>
 }

 function Value({children, ...rest}) {
    return <value {...rest}>{children}</value>
 }

 function Field({children, ...rest}) {
    return <field {...rest}>{children}</field>
 }

 function Shadow({children, ...rest}) {
    return <shadow {...rest}>{children}</shadow>
 }

export { Block, Category, Value, Field, Shadow }

