import { GoHeartFill } from "react-icons/go";
import { TbBrandAppgallery } from "react-icons/tb";
import css from "./Home.module.css";
import { IoIosArrowBack } from "react-icons/io";

const SaveLike = ({
  qoute,
  setSave,
  setToShowSaved,
  toShowSaved,
  red,
  setRed,
}) => {
  const handleToShowSaved = () => {
    setToShowSaved(true);
  };

  const handleGoBack = () => {
    setToShowSaved(false); // Go back to QouteBody
  };

  const handleHeartClick = () => {
    if (qoute) {
      setSave(true);
    }
    setRed(true);
  };
  return (
    <>
      <span className="pb-5">
        {!toShowSaved && (
          <>
            <span
              className={`position-absolute top-5px start-90 translate-middle badge rounded-pill me-5 ${css.likeSaveButton}`}
            >
              <TbBrandAppgallery
                className={css.toSeeSave}
                onClick={handleToShowSaved} // Show QuoteSave when clicked
              />
            </span>

            <span
              className={`position-absolute top-5px start-90 translate-middle badge rounded-pill ${css.likeSaveButton}`}
            >
              <GoHeartFill
                className={css.likeButton}
                onClick={handleHeartClick}
                style={{
                  color: red
                    ? "rgba(223, 19, 19, 0.948)"
                    : "rgb(161, 157, 157)",
                }}
              />
            </span>
          </>
        )}

        {toShowSaved && (
          <span
            className={`position-absolute top-5px start-90 translate-middle badge rounded-pill ${css.likeSaveButton}`}
          >
            <IoIosArrowBack
              className={css.toSeeSave}
              onClick={handleGoBack} // Go back to QouteBody when clicked
            />
          </span>
        )}
      </span>
    </>
  );
};

export default SaveLike;
