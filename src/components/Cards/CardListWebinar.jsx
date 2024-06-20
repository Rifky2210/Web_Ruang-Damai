import React, { useState } from "react";
import { webinarData } from "../../data/webinarData";
import { useNavigate } from 'react-router-dom';

const CardListWebinar = ({ limit }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate('/webinar/'+id);
  };

  return (
    <div className="w-full grid grid-flow-row grid-cols-2 gap-10">
      {webinarData.slice(0, limit).map((data, index) => {
        return (
          <div
          key={index}
          className="w-2/3 bg-[#D9D9D95C] p-5"
          onClick={() => handleCardClick(data.id)}
          >
            <div
              className="w-full"
              >
              <img className="w-full h-full object-cover" src={data.image} alt="Placeholder" />
              
            </div>
            <div className="text-start">
                <div className="font-bold text-xl mt-3">{data.title}</div>
                {/* <p className="text-gray-700 text-base pt-7">{data.description}</p> */}
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardListWebinar;