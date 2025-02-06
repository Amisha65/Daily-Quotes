import { useEffect, useState } from "react";
import css from "./QuoteSave.module.css";
import { MdDelete } from "react-icons/md";
import Buttons from "./Buttons";

const QuoteSave = ({ qoute, author, savee, setSave, setRed }) => {
  const [quoteAthor, setQuoteAthor] = useState([]);
  const [showButton, setShowButtons] = useState({});

  useEffect(() => {
    const savedQuotes = JSON.parse(localStorage.getItem("quotes_key")) || [];
    setQuoteAthor(savedQuotes);
  }, []);

  useEffect(() => {
    if (savee && qoute && author) {
      const savedQuotes = JSON.parse(localStorage.getItem("quotes_key")) || [];

      // Check if the quote already exists in localStorage
      if (!savedQuotes.some((item) => item.qoute === qoute)) {
        const updatedQuotes = [{ qoute, author }, ...savedQuotes];

        // Update state and localStorage
        setQuoteAthor(updatedQuotes);
        localStorage.setItem("quotes_key", JSON.stringify(updatedQuotes));
      }

      setSave(false);
      setRed(true); // Keep heart red when quote is saved
    }
  }, [savee]);

  const handleDelete = (quoteToDelete) => {
    const updatedQuotes = quoteAthor.filter(
      (item) => item.qoute !== quoteToDelete
    );
    setQuoteAthor(updatedQuotes);
    localStorage.setItem("quotes_key", JSON.stringify(updatedQuotes));

    if (quoteToDelete === qoute) {
      setRed(false); // Turn heart black when deleted
    }
  };

  const handleShareButton = (index) => {
    setShowButtons((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="row p-3">
      <h1>Saved Quotes</h1>

      <ul className={css.quoteGrid}>
        {quoteAthor.length === 0 ? (
          <li>No quotes saved yet.</li>
        ) : (
          quoteAthor.map((item, index) => (
            <li key={index} className={`${css.savedQuote} `}>
              <strong>"{item.qoute}"</strong>
              <br /> - {item.author}
              <div className={`${css.buttonContainer}`}>
                <button
                  className={css.deleteButton}
                  onClick={() => handleDelete(item.qoute)}
                >
                  <MdDelete />
                </button>
                {!showButton[index] ? (
                  <button
                    onClick={() => handleShareButton(index)}
                    className={`${css.shareButton}`}
                  >
                    Share
                  </button>
                ) : (
                  <Buttons qoute={item.qoute} author={item.author} />
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default QuoteSave;
