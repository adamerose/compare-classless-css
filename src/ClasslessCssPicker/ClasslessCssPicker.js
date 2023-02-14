import _ from "lodash";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import detailsRaw from "./details";
import Dropzone from "./Dropzone";

// eslint-disable-next-line import/no-webpack-loader-syntax
var htmlModule = require("raw-loader!../demo.html");
var html = htmlModule.default;

const ClasslessCssPicker = ({ handleTemplateChange }) => {
  // Framework details
  const [details, setDetails] = useState(detailsRaw);
  const [ix, setIx] = useState(0);
  const [orderBy, setOrderBy] = useState("Rating");

  let detailsSorted = details;
  if (orderBy === "Name") {
    detailsSorted = _.orderBy(details, [(x) => x.name.toLowerCase()], ["asc"]);
  } else if (orderBy === "Rating") {
    detailsSorted = _.orderBy(
      details,
      [(x) => x.rating * 100000 + x.starCount],
      ["desc"]
    );
  } else if (orderBy === "GitHub Stars") {
    detailsSorted = _.orderBy(details, [(x) => x.starCount], ["desc"]);
  }

  let detailsFull = [
    {
      name: "None",
      docs: "",
      stylesheets: [],
    },
    ...detailsSorted,
  ];

  const currentDetail = detailsFull[ix];

  const handleStyleChange = (name) => {
    setIx(detailsFull.findIndex((x) => x.name === name));

    // Doing this because I'm not sure what event triggers on re-rendered <link> load finished
    setTimeout(() => {
      document.querySelector(window.location.hash).scrollIntoView();
    }, 100);
    setTimeout(() => {
      document.querySelector(window.location.hash).scrollIntoView();
    }, 300);
    setTimeout(() => {
      document.querySelector(window.location.hash).scrollIntoView();
    }, 500);
  };

  useEffect(() => {
    // Get star count for each repo in details
    const detailPromises = details.map(async (detail) => {
      const starCount = await getStarCount(detail.repo);
      return { ...detail, starCount };
    });

    Promise.all(detailPromises).then((newDetails) => {
      console.log("ASDF", newDetails);
      setDetails(newDetails);
    });
  }, []);

  handleTemplateChange = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      <StyledWrapper>
        <div id="picker">
          <label>
            <span>Sort By: </span>
            <select
              onChange={(e) => setOrderBy(e.target.value)}
              value={orderBy}
            >
              {["Name", "GitHub Stars", "Rating"].map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Style: </span>
            <select
              onChange={(e) => handleStyleChange(e.target.value)}
              value={currentDetail.name}
            >
              {detailsFull.map((detail) => (
                <option key={detail.name} value={detail.name}>
                  {detail.name}
                </option>
              ))}
            </select>
          </label>
          <span>
            <button
              disabled={ix === 0}
              onClick={() => {
                handleStyleChange(detailsFull[ix - 1].name);
              }}
            >
              {"<"}
            </button>
            <button
              disabled={ix === detailsFull.length - 1}
              onClick={() => {
                handleStyleChange(detailsFull[ix + 1].name);
              }}
            >
              {">"}
            </button>
          </span>
          {currentDetail.docs && (
            <>
              <a href={currentDetail.docs} target="_blank">
                Website
              </a>
              <img
                src={`https://img.shields.io/github/stars/${currentDetail.repo}.svg`}
                alt=""
              />
              <span>
                {currentDetail.rating === 1 && "★☆☆☆"}
                {currentDetail.rating === 2 && "★★☆☆"}
                {currentDetail.rating === 3 && "★★★☆"}
                {currentDetail.rating === 4 && "★★★★"}
              </span>
            </>
          )}
          <Dropzone
            handleFileDrop={(acceptedFiles) => {
              acceptedFiles[0].text().then((text) => {
                document.getElementById("demo").innerHTML = text;
              });
            }}
          />
          <button
            onClick={() => {
              const stylesheetLinks = currentDetail.stylesheets.map(
                (stylesheet, ix) =>
                  `<link rel="stylesheet" href=${stylesheet} />`
              );
              navigator.clipboard.writeText(stylesheetLinks.join("\n"));
            }}
          >
            Copy &lt;link&gt; Tags
          </button>
        </div>

        {currentDetail.stylesheets.map((stylesheet, ix) => (
          <link key={ix} rel="stylesheet" href={stylesheet} />
        ))}
      </StyledWrapper>

      <div id="demo" dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};

// I do this to get repo star count and get around the GitHub unathenticated API limit
let getStarCount = async (repo) => {
  let response = await fetch(`https://img.shields.io/github/stars/${repo}.svg`);
  let responseText = await response.text();
  let element = new DOMParser().parseFromString(responseText, "image/svg+xml");
  let starCountRaw = element.querySelectorAll("text")[3].textContent;
  let starCount = starCountRaw.includes("k")
    ? Number(starCountRaw.replace("k", "")) * 1000
    : Number(starCountRaw);
  return starCount;
};

const StyledWrapper = styled.div`
  #picker {
    /* This section prevents the classless CSS stylesheets from modifying the picker overlay */
    all: revert;
    & * {
      all: revert;

      font-family: Arial, Helvetica, sans-serif !important;
      line-height: 1 !important;
      font-size: 15px !important;
      color: black !important;
      background-color: white !important;
      letter-spacing: 0.5px !important;
    }
    & *::before,
    & *::after,
    & *::selection {
      all: revert !important;
    }

    z-index: 99999 !important;
    background-color: white;
    padding: 10px;
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    position: fixed;
    z-index: 999;
    right: 10px;
    top: 10px;

    & label {
      & select {
        width: 120px !important;
      }
      width: 100% !important;
      display: flex !important;
      justify-content: flex-end !important;
      align-items: center !important;
      gap: 10px !important;
    }

    & img {
      height: 20px !important;
    }

    & .drag_over {
      background-color: red !important;
    }
  }
`;
export default ClasslessCssPicker;
