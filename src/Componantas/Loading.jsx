import css from "./Button.module.css";

const Loading = () => {
  return (
    <div className={`d-flex justify-content-center ${css.spinner}`}>
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
