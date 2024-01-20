import React, { useState } from "react";
import "./modal.css";
import { saveAs } from "file-saver";
import Cross from "../../assets/closesquare.png";

const Modal = ({ data, handler }) => {
   console.log(data.data);
   const {
      id,
      largeImageURL,
      tags,
      imageHeight,
      imageWidth,
      user,
      likes,
      type,
      user_id,
      views,
      downloads,
   } = data.data;

   const [dim, setDim] = useState("");

   return (
      <div className="modal">
         <div className="modal-content">
            <div className="modal-header">
               <div>Preview Id: {id}</div>
               <img
                  src={Cross}
                  alt="image"
                  className="cross"
                  onClick={handler}
               />
            </div>
            <div className="modal-body">
               <img src={largeImageURL} alt="image" className="modal-img" />
               <div className="right-content">
                  <div className="download-wrapper">
                     <div className="title">Download</div>
                     <div className="download">
                        <div className="row">
                           <span>Small</span>
                           <span className="dim">640x960</span>
                           <input
                              name="dim"
                              type="radio"
                              className="cbox"
                              value="small"
                              onChange={(e) => setDim(e.target.value)}
                              checked={dim === "small"}
                           />
                        </div>
                        <div className="row">
                           <span>Medium</span>
                           <span className="dim">1920x2260</span>
                           <input
                              name="dim"
                              type="radio"
                              className="cbox"
                              value={"medium"}
                              onChange={(e) => setDim(e.target.value)}
                              checked={dim === "medium"}
                           />
                        </div>
                        <div className="row">
                           <span>Large</span>
                           <span className="dim">2400x3600</span>
                           <input
                              name="dim"
                              type="radio"
                              className="cbox"
                              value={"large"}
                              onChange={(e) => setDim(e.target.value)}
                              checked={dim === "large"}
                           />
                        </div>
                        <div className="row">
                           <span>Original</span>
                           <span className="dim">
                              {imageHeight}x{imageWidth}
                           </span>
                           <input
                              name="dim"
                              type="radio"
                              className="cbox"
                              value={"original"}
                              onChange={(e) => setDim(e.target.value)}
                              checked={dim === "original"}
                           />
                        </div>
                     </div>
                  </div>
                  <button
                     className="modal-btn"
                     onClick={() => {
                        if (!dim) {
                           alert("select an option");
                           return;
                        }
                        saveAs(largeImageURL, id);
                     }}
                  >
                     Download for free!
                  </button>

                  {/**info section */}
                  <div>
                     <div className="title">Information</div>
                     <div className="info-wrapper">
                        <div className="info-row-1">
                           <div>
                              <div>User</div>
                              <div className="val">{user}</div>
                           </div>
                           <div>
                              <div>User Id</div>
                              <div className="val">{user_id}</div>
                           </div>
                           <div>
                              <div>Type</div>
                              <div className="val">{type}</div>
                           </div>
                        </div>
                        <div className="info-row-2">
                           <div>
                              <div>Views</div>
                              <div className="val">{views}</div>
                           </div>
                           <div>
                              <div>Downloads</div>
                              <div className="val">{downloads}</div>
                           </div>
                           <div>
                              <div>Likes</div>
                              <div className="val">{likes}</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tags-wrapper">
               Tags:
               {tags.split(",").map((tag) => (
                  <span className="modal-tags">{tag}</span>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Modal;
