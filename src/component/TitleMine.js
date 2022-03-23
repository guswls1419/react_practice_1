import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const TitleMine = () => {
    return (
        <div className="titles" style={{textAlign:"center"}} >
        <Title>내 일주일은?</Title>
        </div>
    )
 };

 const Title = styled.h1 `
 text-align: center;
`;


 export default TitleMine;