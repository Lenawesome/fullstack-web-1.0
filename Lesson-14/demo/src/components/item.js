import React from 'react';

export default class Item extends React.Component{
   render(){
       return <div>{this.props.index} This is a Component</div>
   }
}