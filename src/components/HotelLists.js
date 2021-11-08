import React from "react";
import { Container, Row } from "react-bootstrap";
import RoomCard from "./RoomCard";
import "./HotelLists.css";
import RoomImage1 from "../img/lux.jpeg";
import RoomImage2 from "../img/double-room.jpeg";
import RoomImage3 from "../img/single-room.jpeg";
import RoomImage4 from "../img/vip.jpeg";
// const RoomData = [
//   {
//     id: 1,
//     src: { RoomImage1 },
//     roomName: "Luxury",
//     location: "Franklin",
//     price: 480,
//   },
//   {
//     id: 2,
//     src: { RoomImage2 },
//     roomName: "Double",
//     location: "Deakin",
//     price: 180,
//   },

//   {
//     id: 3,
//     src: { RoomImage3 },
//     roomName: "Single",
//     location: "Belconne",
//     price: 280,
//   },
//   {
//     id: 4,
//     src: { RoomImage4 },
//     roomName: "VIP",
//     location: "Gungalin",
//     price: 680,
//   },
// ];
const RoomData = [
  {
    id: 1,
    src: "../img/lux.jpeg",
    roomName: "Luxury",
    location: "Franklin",
    price: 480,
  },
  {
    id: 2,
    src: "../img/double-room.jpeg",
    roomName: "Double",
    location: "Deakin",
    price: 180,
  },

  {
    id: 3,
    src: "../img/single-room.jpeg",
    roomName: "Single",
    location: "Belconne",
    price: 280,
  },
  {
    id: 4,
    src: "../img/vip.jpeg",
    roomName: "VIP",
    location: "Gungalin",
    price: 680,
  },
];
function HotelLists() {
  return (
    <Container className='HotelLists_Container'>
      <div className='HotelLists_Header'>Rooms In Grand Hotel</div>
      <div className='HoteLists_line1'></div>
      <div className='HoteLists_line2'></div>
      <Row>
        {RoomData.map((room) => {
          return (
            <RoomCard
              key={room.id}
              src={room.src}
              roomName={room.roomName}
              location={room.location}
              price={room.price}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default HotelLists;
