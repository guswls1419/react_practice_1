import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Rating = (porps) => {
    // console.log(porps)
    
    
    const weeek = useParams();
    console.log(weeek)

    const [gauge] = useState([1,2,3,4,5]);
    const [idx,setIdx] = useState(); 
    // console.log(gauge)
        
     return (
        <div className="rating_wrap" style={{textAlign:"center"}}>
            <DayRat><Tue>{weeek.getweek}요일</Tue> 평점 남기기</DayRat>
                <CircleWrap>{
                      gauge.map((gauges,i)=>{
                        return (
                            <Circle1
                              key={i}
                              onClick={() => {
                                setIdx(i);
                                console.log(idx)
                              }}
                              style={{backgroundColor: i <= idx ? "#9edeff" : "lightGray"
                              }}
                            ></Circle1>
                          );
                    })
                    }</CircleWrap>  
            <Link to = "/" >
            <Button>평점 남기기</Button>
            </Link>
        </div>
    )
 };

 const DayRat = styled.h2`
    text-align : center;
    display: block;
    font-size: 20PX;
    margin-block-start: 20PX;
    margin-block-end: 20PX;
    font-weight: bold;
 `;

 const Tue = styled.span`
    color: white;
    font-weight: 900;
    background: #32166b;
    padding: 4PX;
    border-radius: 5px;
`;

const CircleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20PX 0px;
    width: 100%;
`;

 const Circle1 = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightgray;
    border-radius:50px;
    float:left;
    margin:5px;
`;
const Button = styled.button`
    width: 300px;
    font-size: 18PX;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 12PX;
    color: white;
`;




 export default Rating;