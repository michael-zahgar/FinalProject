import React from 'react';
import {Creative,CreativeInfo,InfoTitle,Span,InfoDir,InfoDesc,Link} from './Style.js';

const About =() => {
 
  return (

    <Creative>
    <div className="container">
        <CreativeInfo>
            <InfoTitle><Span>This is</Span> Me</InfoTitle>
            <InfoDir>Creative Director</InfoDir>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Link>explicabo</Link> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
            <InfoDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </InfoDesc>
        </CreativeInfo>
    </div>
</Creative>

  )
}

export default About;
