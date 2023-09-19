import React, { useEffect, useState } from "react";
import "./DetailRecipes.css";
import { useParams } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Footer from "../Components/Footer/Footer";

const DetailRecipes = () => {
  let params = useParams();

  const [detail, setDetail] = useState({});

  const recipesDetail = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_BASE}/recipes/${params.id}/information/?page=1&apiKey=${process.env.REACT_APP_API}`
    );
    const detailData = await data.json();
    setDetail(detailData);
    console.log({ data: setDetail });
  };

  useEffect(() => {
    recipesDetail();
  }, [params.name]);

  return (
    <>
      <Nav />
      <div className="detail-wrapper">
        <h1 className="d-title">Full recipes of {detail.title}</h1>
        <div className="detail-content">
          <div className="d-left">
            <img className="d-img" src={detail.image} alt="" />
            <span className="d-title">{detail.title}</span>
          </div>
          <div className="d-right">
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Summary of Product</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>How to Cook</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p
                    dangerouslySetInnerHTML={{ __html: detail.instructions }}
                  ></p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>Ingredients</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div>
                    {detail && detail.extendedIngredients ? (
                      <ul>
                        {detail.extendedIngredients.map((ingredient) => (
                          <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>Loading or no data available</p>
                    )}
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailRecipes;
