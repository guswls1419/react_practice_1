import React from 'react';
import TitleMine from './TitleMine';
import Test from './test';
import { useState } from 'react';
import Rating from './rating';


const now = new Date();
const getweek =['일','월','화','수','목','금','토'];
let datOfWeek = getweek[now.getDay()];

console.log(datOfWeek)

const Days = () => {
    

    return (
        <div className="week_wrap" style={{textAlign:"center"}} >
            <TitleMine/>
            <div>
            {getweek.map((getweek,i)=>{
                        return (
                            <Test weekday = {getweek}
                              key={i}
                            ></Test>
                          );
                    })
                    }
            
            </div>
        </div>
    )
 };


 export default Days;