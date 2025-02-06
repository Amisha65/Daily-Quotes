import Loading from "./Loading";
import Buttons from "./Buttons";
import css from "./Home.module.css";

const QouteBody = ({
  fetching,
  handleShareButton,
  showButton,
  qoute,
  author,
  handeleNewQoute,
}) => {
  return (
    <>
      <div className={`col-12 d-flex justify-content-center ${css.heading}`}>
        <h1>Quote of the Day</h1>
      </div>

      <div className="col-12 quoteText pt-3">
        <blockquote id={css.qoute}>
          <span>{fetching ? <Loading /> : qoute}</span>
        </blockquote>
        <p id={css.author}>{author} </p>
      </div>

      <div className={`col-12 d-flex justify-content-center gap-4 pt-4 `}>
        <span className={`${css.quoteButtons}`}>
          <button id={css.newQoute} onClick={handeleNewQoute}>
            {fetching ? "Fetching..." : "New Quote"}
          </button>
        </span>

        {!showButton ? (
          <button
            onClick={handleShareButton}
            className={`${css.homeShareButtond}`}
          >
            Share
          </button>
        ) : (
          <Buttons qoute={qoute} author={author} />
        )}
      </div>
    </>
  );
};
export default QouteBody;
