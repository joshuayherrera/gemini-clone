import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {

  const cardData = [
    { text: "Suggest beautiful places to see in Canada", icon: assets.compass_icon },
    { text: "Plan a low-carb meal with what's available in my fridge", icon: assets.bulb_icon },
    { text: "List power words for my resume that show teamwork", icon: assets.message_icon },
    { text: "Create a list of power phrases for my resume", icon: assets.code_icon },
  ];

  // destructuring the object of context
  const {
    input,
    setInput,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);

  const handleCardClick = (text) => {
    setInput(text);
  };

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="UserIcon" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Joshua</span>
                </p>
                <p className="special-text">How can I help you today?</p>
              </div>
              <div className="cards">
                {cardData.map((card) => (
                  <div className="card" key={card.text} onClick={() => handleCardClick(card.text)}>
                    <p>{card.text}</p>
                    <img src={card.icon} alt="CardIcon" />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="UserIcon" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="GeminiIcon" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
              />
              <div className="search-box-icon">
                <img src={assets.gallery_icon} alt="GalleryIcon" />
                <img src={assets.mic_icon} alt="MicIcon" />
                {input ? (
                  <img
                    onClick={() => onSent()}
                    src={assets.send_icon}
                    alt="SendIcon"
                  />
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, so
              double-check its responses.{" "}
              <a href="https://support.google.com/gemini/answer/13594961?visit_id=638488069169109558-2959892032&p=privacy_notice&rd=1#privacy_notice">
                Your privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;