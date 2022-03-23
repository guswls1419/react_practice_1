import React, { useState } from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";


const Test = (porps) => {
    // console.log(porps)

    const [cir,setCir] = useState([0,1,2,3,4]);
    const [random,setRandom] = useState(Math.floor(Math.random() * 5) + 1);
    // console.log(random)
    return (
        <div className="week_wrapa" style={{textAlign:"center"}} >
            <WeekDay className='weeks_Sat'>
                <Week className="week">{porps.weekday}</Week>
                <div>
                {cir.map((circ,i)=>{
                        return (
                            <Circle
                              key={i}
                              onLoad={() => {
                                setRandom(i);
                                // console.log(i)
                              }}
                              style={{backgroundColor: i <= random ? "#9edeff" : "lightGray"
                              }}
                            ></Circle>
                          );
                    }) }
                </div>
                <Link to ={`/rating/${porps.weekday}`}>
                <Triangle></Triangle>   
                </Link> 
            </WeekDay>    
        </div>
    )
 };

 const Circle = styled.div`
    width: 50px;
    height: 50px;
    background-color: lightgray;
    border-radius:50px;
    float:left;
    margin:5px;
`;

const WeekDay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0px;
    width: 100%;
`;
const Week = styled.div`
    font-weight:bold;
    font-size:30px;
    float:left;
    margin:7px;
    margin-right:15px;
`;

const Triangle = styled.div`
	border-top: 20px solid transparent;
	border-bottom: 20px solid transparent;
	border-left: 30px solid Purple;
    float:left;
    margin:5px;
`;

 export default Test;