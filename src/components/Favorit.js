import React, { useEffect, useState } from "react";
import Arrow from "./assets/DownArrow.svg";
import bath from "./assets/bath.svg";
import bedroom from "./assets/bedroom.svg";
import heart from "./assets/heart.svg";
import redHeart from "./assets/red-heart.svg";
import Empty from "./assets/empty.png";

const getData = () => {
  let data = localStorage.getItem("state");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

const Favorit = () => {
  const [data, setData] = useState(getData);

  const deleteData = (idx) => {
    data.splice(data.indexOf(data[idx]), 1);
    setData([...data]);
  };

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(data));
  }, [data]);

  return (
    <div>
      <div className="sectionHeader">
        <p>Your Collection</p>
        <span className="searchInput">
          <input type={"text"} placeholder="Search" />
          <img src={Arrow} alt="Search" />
        </span>
      </div>
      <div className="card">
        {data.length > 0 ? (
          data.map((ele, idx) => {
            return (
              <div key={idx} className="cardItems">
                <div
                  className="cardImage"
                  style={{ backgroundImage: `url(${ele.Thumbnail})` }}
                ></div>
                <div className="cardDetails">
                  <div>
                    <span className="locationAndPrice">
                      <span>
                        Rs. {ele.Price}
                        <span> /Week</span>
                      </span>
                      <p>{ele.Location}</p>
                    </span>
                    <img
                      width={"40px"}
                      src={!ele.isclick ? heart : redHeart}
                      alt="heart"
                      onClick={() => deleteData(idx)}
                    />
                  </div>
                  <div className="bedBath">
                    <span>
                      <img src={bedroom} width={"40px"} alt="bedroom" />
                      <p>{ele.Beds}&nbsp;Beds</p>
                    </span>
                    <span>
                      <img src={bath} width={"40px"} alt="bathroom" />
                      <p>{ele.Bath}&nbsp;Bath</p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <img className="empty" width={"150px"} src={Empty} alt="Empty" />
        )}
      </div>
    </div>
  );
};

export default Favorit;
