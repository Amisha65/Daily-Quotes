import { useEffect, useState } from "react";
import css from "./Home.module.css";
import SaveLike from "./SaveLike";
import QouteBody from "./QouteBody";
import QuoteSave from "./QuoteSave";

const Home = () => {
  const [fetching, setFetching] = useState(false);
  const [qoute, setQoute] = useState("");
  const [author, setAuthor] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [savee, setSave] = useState(false);
  const [toShowSaved, setToShowSaved] = useState(false);
  const [red, setRed] = useState(false);

  const handeleNewQoute = async () => {
    setFetching(true);
    setShowButton(false);
    const response = await fetch("https://thequoteshub.com/api/random-quote");
    const data = await response.json();

    setQoute(data.text);
    setAuthor(data.author);

    setFetching(false);
    setRed(checkIfSaved(data.text));
  };

  useEffect(() => {
    handeleNewQoute();
  }, []);

  const handleShareButton = () => {
    setShowButton(true);
  };

  const handeleSave = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 201) {
        alert("User registered successfully!");
      }
    };
    if (savee) {
      xhr.send(JSON.stringify({ qoute }));
      console.log({ qoute });
    }
    setSave(false);
  };

  const checkIfSaved = (quote) => {
    const savedQuotes = JSON.parse(localStorage.getItem("quotes_key")) || [];
    return savedQuotes.some((item) => item.qoute === quote);
  };

  return (
    <>
      <div className={`${css.mainContainer} container-fluid`}>
        <div className="container d-flex align-items-center justify-content-center ">
          <div className={`${css.roww} row shadow p-3 mb-5 `}>
            <SaveLike
              qoute={qoute}
              author={author}
              savee={savee}
              setSave={setSave}
              setToShowSaved={setToShowSaved}
              toShowSaved={toShowSaved}
              red={red} // Pass the red state for heart color
              setRed={setRed} // Pass the setRed function to toggle heart color
            />

            {toShowSaved ? (
              <QuoteSave
                qoute={qoute}
                author={author}
                savee={savee}
                setSave={setSave}
                setRed={setRed} // Pass setRed to update when deleting
              />
            ) : (
              <QouteBody
                fetching={fetching}
                handleShareButton={handleShareButton}
                showButton={showButton}
                qoute={qoute}
                author={author}
                handeleNewQoute={handeleNewQoute}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
