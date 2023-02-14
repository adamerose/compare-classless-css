import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

function Dropzone({ handleFileDrop }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "text/html", onDropAccepted: handleFileDrop });

  return (
    <StyledWrapper
      {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
    >
      <input {...getInputProps()} />
      <p>Drop .html</p>
    </StyledWrapper>
  );
}

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const StyledWrapper = styled.div`
  flex: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  padding: 20px !important;
  border-width: 2px !important;
  border-radius: 2px !important;
  border-color: ${(props) => getColor(props)} !important;
  border-style: dashed !important;
  background-color: #fafafa !important;
  color: #bdbdbd !important;
  outline: none !important;
  transition: border 0.24s ease-in-out !important;
`;

export default Dropzone;
