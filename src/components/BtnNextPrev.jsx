import React from "react";

const BtnNextPrev = (props) => {
  const { onClickHandler, type } = props;
  const styles = {
    width: "46px",
    height: "46px",
    backgroundColor: "#ffe699",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <button onClick={onClickHandler} style={styles}>
      {type === "prev" ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22205L13.192 5.63605L7.828 11Z"
            fill="#050400"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
            fill="#050400"
          />
        </svg>
      )}
    </button>
  );
};

export default BtnNextPrev;
