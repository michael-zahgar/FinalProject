import React, { Component } from 'react';
import { ProfileSkills , ProfileDiv , ProfileList , ProfileItem , ProfileSpan , SpanWeb , Skills , SkillsDesc , Bar , SpanTitle , BarPerc , Parent , ParentBar , Title , TitleSpan} from './Style.js'
import axios from 'axios';


class Profile extends Component {

  state = {
    bars : []
  }

  componentDidMount() {
    axios.get('js/data.json').then ( res => {this.setState({bars : res.data.profile})})
  }

 render(){

  const {bars} = this.state ;
  const barsList = bars.map( (barsItem) => {
    return (
      <Bar  key={barsItem.id}>
      <SpanTitle>{barsItem.title}</SpanTitle>
      <BarPerc>{barsItem.prec}</BarPerc>
      <Parent>
          <ParentBar sp1={barsItem.id}></ParentBar>
      </Parent>
  </Bar>
    )
  } )




  return (
    <ProfileSkills>
    <div className="container">
        <ProfileDiv>
            <Title><TitleSpan>My </TitleSpan>Profile</Title>
            <ProfileList>
                <ProfileItem>
                    <ProfileSpan>Name</ProfileSpan>
                    Hamza Nabil
                </ProfileItem>
                <ProfileItem>
                    <ProfileSpan>Birthday</ProfileSpan>
                    21/1/1996
                </ProfileItem>
                <ProfileItem>
                    <ProfileSpan>Address</ProfileSpan>
                    Ain shams
                </ProfileItem>
                <ProfileItem>
                    <ProfileSpan>Phone</ProfileSpan>
                    4444 5555 6666
                </ProfileItem>
                <ProfileItem>
                    <ProfileSpan>Email</ProfileSpan>
                    hamza@hamza.com
                </ProfileItem>
                <ProfileItem>
                    <ProfileSpan>Website</ProfileSpan>
                    <SpanWeb className="web">www.google.com</SpanWeb>
                </ProfileItem>
            </ProfileList>
        </ProfileDiv>
        
        <Skills>
            <Title>Some <TitleSpan>skills</TitleSpan></Title>
            <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>
         
        {barsList}    
        
        </Skills>
        
    </div>
</ProfileSkills>
  )
}
}
export default Profile;
