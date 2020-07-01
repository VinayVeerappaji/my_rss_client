/**
 *
 * ArticleBox
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import {lightBorder,darkBorder, randomBackgroundColor, fontFamilyTwo, fontFamilyOne} from './constants';

export const Article = styled.article`
  border: ${lightBorder};
  margin: 1%;
  background-color: ${randomBackgroundColor};
  @media only screen and (max-width: 450px) {
    flex-wrap: wrap;
    justify-content:center;
    div {
      margin: 1%;
    }
`

export const Thumbnail = styled.img`
  border: ${lightBorder};;
  margin: 1%;
  width: 100px;
  height: 100px;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
export const H2 = styled.h2`
`

export const Button = styled.button`
border: ${lightBorder};
font-family: ${fontFamilyTwo};
font-weight: bold;
margin-left: 5px;
white-space: nowrap;
background-color: transparent;
`

export const IconButton = styled.button`
border: none;
font-family: ${fontFamilyTwo};
font-weight: bold;
margin-left: 5px;
white-space: nowrap;
background-color: transparent;
font-size: 0.75em;
`

export const P = styled.p`
`

export const Span = styled.span`
`

export const PaginationWrapper = styled.section`
justify-content : space-evenly;
width: 100%;
display: flex;
flex-direction: row;
margin: 2%;
`

export const PageWrapper = styled.div`
max-width: 700px;
margin: auto;
`

export const H1 = styled.h1`
`

export const ControlSectionWrapper = styled.section`
justify-content : space-evenly;
display: flex;
flex-direction: column;
align-items: center;
`

export const MainInput = styled.input`
padding: 10px;
border: ${darkBorder};
border-radius: 0;
background-color: transparent;
font-family: ${fontFamilyTwo};
font-size: 1.5rem;
`
export const MainForm = styled.form`
width: 90%;
display: flex;
flex-direction: column;
* {
  margin: 1%;
}
`
export const MainSubmit = styled.button`
padding: 10px;
border: ${darkBorder};
font-family: ${fontFamilyOne};
background-color: #CFF06A;
font-size: 1.5rem;
border-radius: 500px;
width: 100%;
`
export const HistorySection = styled.section`
border: ${darkBorder};
background-color: white;
width: 90%;
margin: auto;
padding: 1%;
`
export const AudioPlayerWrapper = styled.section`
position: fixed;
bottom: 0;
margin: auto;
max-width: 700px;
width: 100%;
`
export const Padding = styled.div`
padding : 50px;
width : 100%
`