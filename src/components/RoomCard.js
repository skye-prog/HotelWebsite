import React from "react";
import "./RoomCard.css";
import { BsChevronDoubleRight } from "react-icons/bs";
function RoomCard(props) {
  return (
    <div className='Card-show'>
      <img src={props.src} alt='img' />
      <div className='Card-show__descrption'>
        <div className='roomName'>{props.roomName}</div>
        <div className='location'>{props.location}</div>
        <div className='price'>${props.price}</div>
        <button>
          BOOK NOW <BsChevronDoubleRight />
          <BsChevronDoubleRight />
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
