import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(Context);

    return(
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="logo" />
            </div>
            <div className="main-container">

                {!showResult ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Joshua.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>
                                    Suggest beatuiful places to visit in Lagos
                                </p>
                                <img src={assets.compass_icon} alt="compass" />
                            </div>
                            <div className="card">
                                <p>
                                    Who is the president of Nigeria?
                                </p>
                                <img src={assets.bulb_icon} alt="bulb" />
                            </div>
                            <div className="card">
                                <p>
                                    How can I get to the top of the Eiffel Tower?
                                </p>
                                <img src={assets.message_icon} alt="message" />
                            </div>
                            <div className="card">
                                <p>
                                    Write a To-do list in python
                                </p>
                                <img src={assets.code_icon} alt="code" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="user" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className='result-data'>
                            <img src={assets.gemini_icon} alt="gemini" />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            )}
                            
                        </div>
                    </div>
                )}


                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text" 
                            placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery" />
                            <img src={assets.mic_icon} alt="microphone" />
                            <img 
                            onClick={() => onSent()}
                            src={assets.send_icon} alt="send" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate information, including information
                        about individuals, so you should verify your answers. 
                        Your privacy and Apps with Gemini
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Main;