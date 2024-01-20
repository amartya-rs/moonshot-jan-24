import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Searchbar from "../../components/searchbar/Searchbar";
import Modal from "../../components/modal/Modal";
import Loader from "../../assets/loader.gif";
import { supportTerms } from "../../utils/constants";
import "./result.css";

function Result() {
   const { term } = useParams();
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [modal, setModal] = useState({ isOpen: false, data });

   const prepareTerm = () => {
      let preparedTerm;
      if (term) {
         preparedTerm = term.split("")?.map((l) => (l === " " ? "+" : l));
      }
      return preparedTerm.join("");
   };

   useEffect(() => {
      (async () => {
         if (term) {
            try {
               setLoading(true);
               const res = await fetch(
                  `https://pixabay.com/api/?key=24699987-8b2ac8313e70aa1761bfd33e9&q=${prepareTerm()}&image_type=photo`
               );
               const resParsed = await res.json();
               console.log(resParsed);
               setData(resParsed.hits);
               setLoading(false);
            } catch (error) {
               console.error(error);
               setLoading(false);
            }
         }
      })();
   }, [term]);

   return (
      <div className="result">
         <Header />
         <Searchbar placeholder={"Start new search"} />
         <div className="term">Results: {term}</div>
         {loading ? (
            <img src={Loader} alt="" className="loader" />
         ) : (
            <>
               <div className="result-section">
                  <div className="supp-term-wrapper">
                     <div className="supp-terms-container">
                        {supportTerms.map((t) => (
                           <div className="supp-term">{t}</div>
                        ))}
                     </div>
                  </div>
                  <div className="img-wrapper">
                     {data?.map((ele) => {
                        return (
                           <div
                              className="card"
                              onClick={() =>
                                 setModal({ isOpen: true, data: ele })
                              }
                           >
                              <img
                                 src={ele.previewURL}
                                 alt="image"
                                 className="res-img"
                              />
                              <div>
                                 {ele.tags.split(",").map((tag, index) => {
                                    if (index < 3) {
                                       return (
                                          <span className="tags">{tag}</span>
                                       );
                                    }
                                 })}
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
               {modal.isOpen && (
                  <Modal
                     data={modal}
                     handler={() => setModal({ ...modal, isOpen: false })}
                  />
               )}
            </>
         )}
      </div>
   );
}

export default Result;
