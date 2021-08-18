import styled from 'styled-components';


export const HomeSection = styled.div`
     background: url('images/home-bg.jpg') no-repeat; 
    height: 500px;
    background-size: cover;
    background-position: center;
    text-align: center;
    position: relative;
    `


export const HomeInformation = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
    `
    


export const HomeTitle = styled.h2`
font-size: 50px;
font-weight: 700;
font-family: italic;
color: #5e5e5e;
`



export const HomeInfo = styled.h4`
    font-size: 25px;
    font-weight: 800;
    color: rgb(252, 40, 2);
`

export const HomeDesc = styled.p`
    color: gray;
    font-size: 600;
    line-height: 2;
`

export const Span = styled.span`
    color: black;
`

export const HomeBtn = styled.button`
    background-color: tomato;
    padding: 10px 20px;
    color: white;
    border: 1px solid tomato;
    transition: all .5s;
    &:hover{
        background:#fff;
        color:#eb5424;
    }
`