import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import css from "./Button.module.css";

const Buttons = ({ qoute, author }) => {
  const webPageUrl = "https://daily-quotes-j8qw.vercel.app/";
  const whatsApp = () => {
    window.open(
      ` https://wa.me/?text=${encodeURIComponent(
        qoute + "\n\n---by " + author + "\n For more Qoutes-" + webPageUrl
      )} `,
      "Tweet Window",
      "width=600,height=400px"
    );
  };

  const linkedin = () => {
    window.open(
      `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(
        qoute +
          "\n\n" +
          " ".repeat(50) +
          "---by " +
          author +
          "\n For more Qoutes-" +
          webPageUrl
      )} `,
      "Tweet Window",
      "width=600,height=400px"
    );
  };

  const tweet = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        qoute +
          "\n\n" +
          " ".repeat(50) +
          "---by " +
          author +
          "\n For more Qoutes-" +
          webPageUrl
      )} `,
      "Tweet Window",
      "width=600,height=400px"
    );
  };

  return (
    <>
      <div className={`${css.shareButtond} d-flex gap-3`}>
        <button type="button" onClick={whatsApp} id={css.whatsApp}>
          <FaWhatsapp />
        </button>

        <button type="button" onClick={linkedin} id={css.linkedin}>
          <FaLinkedin />
        </button>

        <button type="button" onClick={tweet} id={css.tweet}>
          <FaSquareXTwitter />
        </button>
      </div>
    </>
  );
};
export default Buttons;
