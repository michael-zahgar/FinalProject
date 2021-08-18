import axios from 'axios';
import React , {useState , useEffect} from 'react';
import { PortfolioSection , PortfolioTitle , Span , ProtfolioList , PortfolioItem , SectionDiv , Image , Overlay , OverlaySpan} from './Style.js';

const Portfolio =() => {
 

 const [ images , setImages] = useState([])

  useEffect ( () => {
    axios.get('js/data.json').then( res => {setImages(res.data.portfolio)})
  } , [])

  const portfolioImages = images.map( (imageItem) => {
    return (
      <SectionDiv key={imageItem.id}>
      <Image src={imageItem.image} alt="" />
      <Overlay>
          <OverlaySpan>
              Show Image
          </OverlaySpan>
      </Overlay>
  </SectionDiv>
    )
  })
  return (
    <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <ProtfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </ProtfolioList>
            
            <div className="box">
                
          {portfolioImages}
                
            </div>
            
        </PortfolioSection>
  )
}

export default Portfolio;
