import styled from 'styled-components';



export const WorkSection = styled.div`
    overflow: hidden;
`

export const WorkTitle = styled.h2`
    font-size: 40px;
    font-weight: 700;
    font-family: italic;
`

export const Span = styled.span`
    font-weight: 400;
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

export const WorkPart = styled.div`
    width: 30%;
    margin-top: 20px;
    float: left;
    padding: 100px 0;
    text-align: center;
    margin-left: 5%;
    box-sizing: border-box;
    border: 1px solid #888;
    margin-left: ${props => props.first === 1 ? '0' : '5%'}
`



export const Icon = styled.i`
    color: #888;
    margin-bottom: 20px
`

export const PartTitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px
`

export const Line = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px
`

export const PartDesc = styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px
`