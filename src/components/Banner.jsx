import React from "react";

const Banner = (props) => {
  const { title, description, icon, banner, numOfCourse, numOfGraduates } =
    props;
  const styles = {
    background: `url(${banner}) no-repeat`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };
  return (
    <div className="banner-container" style={styles}>
      <div className="container banner-container">
        <div className="banner-body">
          <div className="icon">
            <img src={icon} alt="" />
          </div>
          <div className="banner-content">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="banner-summary">
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 2H3.5C3.23478 2 2.98043 2.10536 2.79289 2.29289C2.60536 2.48043 2.5 2.73478 2.5 3C2.5 3.26522 2.60536 3.51957 2.79289 3.70711C2.98043 3.89464 3.23478 4 3.5 4H10.5V10.5C10.5 10.6326 10.4473 10.7598 10.3536 10.8536C10.2598 10.9473 10.1326 11 10 11H3.5C2.96957 11 2.46086 10.7893 2.08579 10.4142C1.71071 10.0391 1.5 9.53043 1.5 9V3C1.5 2.46957 1.71071 1.96086 2.08579 1.58579C2.46086 1.21071 2.96957 1 3.5 1H10C10.1326 1 10.2598 1.05268 10.3536 1.14645C10.4473 1.24021 10.5 1.36739 10.5 1.5V2ZM2.5 9C2.5 9.26522 2.60536 9.51957 2.79289 9.70711C2.98043 9.89464 3.23478 10 3.5 10H9.5V5H3.5C3.14891 5.00056 2.80392 4.90828 2.5 4.7325V9ZM10 3.5H3.5C3.36739 3.5 3.24021 3.44732 3.14645 3.35355C3.05268 3.25979 3 3.13261 3 3C3 2.86739 3.05268 2.74021 3.14645 2.64645C3.24021 2.55268 3.36739 2.5 3.5 2.5H10V3.5Z"
                    fill="#101828"
                  />
                </svg>
                {numOfCourse}টি লাইভ কোর্স
              </span>
              <span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 5.5C6.66304 5.5 7.29893 5.76339 7.76777 6.23223C8.23661 6.70107 8.5 7.33696 8.5 8V11H7.5V8C7.50002 7.61739 7.35384 7.24924 7.09136 6.97087C6.82888 6.6925 6.46995 6.52495 6.088 6.5025L6 6.5C5.61739 6.49998 5.24924 6.64616 4.97087 6.90864C4.6925 7.17112 4.52495 7.53005 4.5025 7.912L4.5 8V11H3.5V8C3.5 7.33696 3.76339 6.70107 4.23223 6.23223C4.70107 5.76339 5.33696 5.5 6 5.5ZM2.75 7C2.8895 7 3.025 7.0165 3.155 7.047C3.06951 7.3015 3.01888 7.56641 3.0045 7.8345L3 8V8.043C2.94253 8.02243 2.88275 8.009 2.822 8.003L2.75 8C2.56356 8.00001 2.3838 8.06946 2.24579 8.19481C2.10778 8.32016 2.0214 8.49242 2.0035 8.678L2 8.75V11H1V8.75C1 8.28587 1.18437 7.84075 1.51256 7.51256C1.84075 7.18437 2.28587 7 2.75 7ZM9.25 7C9.71413 7 10.1592 7.18437 10.4874 7.51256C10.8156 7.84075 11 8.28587 11 8.75V11H10V8.75C9.99999 8.56356 9.93054 8.3838 9.80519 8.24579C9.67984 8.10778 9.50758 8.0214 9.322 8.0035L9.25 8C9.1625 8 9.0785 8.015 9 8.0425V8C9 7.667 8.946 7.347 8.8455 7.048C8.975 7.0165 9.1105 7 9.25 7ZM2.75 4C3.08152 4 3.39946 4.1317 3.63388 4.36612C3.8683 4.60054 4 4.91848 4 5.25C4 5.58152 3.8683 5.89946 3.63388 6.13388C3.39946 6.3683 3.08152 6.5 2.75 6.5C2.41848 6.5 2.10054 6.3683 1.86612 6.13388C1.6317 5.89946 1.5 5.58152 1.5 5.25C1.5 4.91848 1.6317 4.60054 1.86612 4.36612C2.10054 4.1317 2.41848 4 2.75 4ZM9.25 4C9.58152 4 9.89946 4.1317 10.1339 4.36612C10.3683 4.60054 10.5 4.91848 10.5 5.25C10.5 5.58152 10.3683 5.89946 10.1339 6.13388C9.89946 6.3683 9.58152 6.5 9.25 6.5C8.91848 6.5 8.60054 6.3683 8.36612 6.13388C8.1317 5.89946 8 5.58152 8 5.25C8 4.91848 8.1317 4.60054 8.36612 4.36612C8.60054 4.1317 8.91848 4 9.25 4ZM2.75 5C2.6837 5 2.62011 5.02634 2.57322 5.07322C2.52634 5.12011 2.5 5.1837 2.5 5.25C2.5 5.3163 2.52634 5.37989 2.57322 5.42678C2.62011 5.47366 2.6837 5.5 2.75 5.5C2.8163 5.5 2.87989 5.47366 2.92678 5.42678C2.97366 5.37989 3 5.3163 3 5.25C3 5.1837 2.97366 5.12011 2.92678 5.07322C2.87989 5.02634 2.8163 5 2.75 5ZM9.25 5C9.1837 5 9.12011 5.02634 9.07322 5.07322C9.02634 5.12011 9 5.1837 9 5.25C9 5.3163 9.02634 5.37989 9.07322 5.42678C9.12011 5.47366 9.1837 5.5 9.25 5.5C9.3163 5.5 9.37989 5.47366 9.42678 5.42678C9.47366 5.37989 9.5 5.3163 9.5 5.25C9.5 5.1837 9.47366 5.12011 9.42678 5.07322C9.37989 5.02634 9.3163 5 9.25 5ZM6 1C6.53043 1 7.03914 1.21071 7.41421 1.58579C7.78929 1.96086 8 2.46957 8 3C8 3.53043 7.78929 4.03914 7.41421 4.41421C7.03914 4.78929 6.53043 5 6 5C5.46957 5 4.96086 4.78929 4.58579 4.41421C4.21071 4.03914 4 3.53043 4 3C4 2.46957 4.21071 1.96086 4.58579 1.58579C4.96086 1.21071 5.46957 1 6 1ZM6 2C5.73478 2 5.48043 2.10536 5.29289 2.29289C5.10536 2.48043 5 2.73478 5 3C5 3.26522 5.10536 3.51957 5.29289 3.70711C5.48043 3.89464 5.73478 4 6 4C6.26522 4 6.51957 3.89464 6.70711 3.70711C6.89464 3.51957 7 3.26522 7 3C7 2.73478 6.89464 2.48043 6.70711 2.29289C6.51957 2.10536 6.26522 2 6 2Z"
                    fill="#101828"
                  />
                </svg>
                {numOfGraduates} জন Ostad গ্র্যাজুয়েট
              </span>
            </div>
            <div className="banner-buttons">
              <button className="btn-banner btn-banner-dark">
                <p>Start Learning</p>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.672 6.99992L7.308 1.63592L8.722 0.221924L16.5 7.99992L8.722 15.7779L7.308 14.3639L12.672 8.99992H0.5V6.99992H12.672Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="btn-banner btn-banner-light">
                <p>Assesment</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;