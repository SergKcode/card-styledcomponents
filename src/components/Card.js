import React from 'react';
import styled from 'styled-components';



const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

const CardHeader = styled.header`
display:flex;
justify-content: center;
  padding:10px;
`

const CardImg = styled.img`
  width:90%;
  
`

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

const CardH2 = styled.h2`
font-size:1.5rem;

  
`
const CardP = styled.p`
font-style: italic;
  
`


const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 15px;
  }

  &:nth-last-of-type(2) {
    margin-top: 5px;
  }

  &:last-of-type {
    text-align: center;
  }
`



const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`



export const Card = () => {
    return(
        <CardWrapper>
          <CardHeader>
            <CardImg src="https://ourcodeworld.com/public-media/articles/articleocw-5d07e6b3790af.jpg"/>
          </CardHeader>
          
          <CardBody>
            <CardFieldset>
            <CardH2>Web Development</CardH2>
              
            </CardFieldset>
            
            <CardFieldset>
            <CardP>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</CardP>
            </CardFieldset>
        
            
            
            <CardFieldset>
              <CardButton type='button'>Info</CardButton>
            </CardFieldset>
        
          </CardBody>
        </CardWrapper>
      )
}
