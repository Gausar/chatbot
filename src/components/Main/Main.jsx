import React, { useContext } from "react";
import './Main.css';
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input, fileURL, handleFileChange, handleIconClick, fileInputRef, removeImage} = useContext(Context);
    return (
        <div className="main">
            <div className="nav">
                <p>Bot</p>
                <img src={assets.user_icon} alt="" />
            </div> 
            <div className="main-container">

                
                {!showResult
                ?
                <>
                <div className="greet">
                    <p><span>Hello, </span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                :<div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :
                        <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                        }
                    </div>
                </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        {fileURL && (
                            <div className="image-preview">
                                <img src={fileURL} alt="Uploaded" />
                                <button className="remove-btn" onClick={removeImage}>❌</button>
                            </div>
                        )}
                        <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder="Асуултаа энд бичнэ үү?" />
                        <div>
                            <label onClick={handleIconClick}>
                                    <img src={assets.gallery_icon} alt="Upload" />
                            </label>
                            <input
                                type="file"
                                ref={fileInputRef}
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                                // onKeyDown={(e) => {
                                //     if (e.key === "Enter" && !e.shiftKey) {
                                //         e.preventDefault();
                                //         onSent();
                                //     }
                                // }}
                                />
                            <img  src={assets.mic_icon} alt="" />
                            {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Таны асуултанд зөв хариу өгөхгүй байх тохиолдол байж болох тул үргэлж хариугаа нягталаарай!
                        <br/> <span color="blue">Гаусар Амангелди</span>
                    </p>
                </div>
            </div>        
        </div>    
    )
}
 export default Main;