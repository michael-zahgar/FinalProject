import React, { Component } from 'react';
import {SocialMediaa,Social,Icon,Parag,Span,SpanInfo} from './Style.js';
import axios from 'axios';


class SocialMedia extends Component {

  state = {
    social : []
  }
 

  componentDidMount () {
    axios.get('js/data.json').then( res => {this.setState({social : res.data.social})})
  }


 render(){

  const {social} = this.state;
  const socialList = social.map( (socialItem) => {
    return(
      <Social key={socialItem.id} item={socialItem.id}>
      <Icon className={socialItem.icon}></Icon>
      <Parag>
          <Span>{socialItem.title}</Span>
          <SpanInfo>{socialItem.body}</SpanInfo>
      </Parag>
  </Social>
    )
  })

  return (
    <SocialMediaa>
            
   {socialList}
    
</SocialMediaa>
  )
}
}
export default SocialMedia;
