import React, { useContext, useState } from "react";
import './Sidebar.css';
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import Help from "../help/help";
import Settings from "../Settings/Settings";

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [theme, setTheme] = useState("light");

    const {onSent, prevPrompts, prevResponses, setResultData, setShowResult, setRecentPrompt, newChat} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        // await onSent(prompt);
        setResultData(prevResponses[prompt] || "No previous response found.");
        setShowResult(true);
    }

    const openHelpModal = () => {
        setShowModal(true);
    };

    const closeHelpModal = () => {
        setShowModal(false);
    };

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="menu" className="menu" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="plus" />
                    {extended? <p>New Chat</p> : null }
                </div>
                {extended ? 
                <div className="recent">
                    <p className="recent-title">
                        Recent
                    </p>
                    {prevPrompts.map((item, index)=>{
                        return (
                            <div onClick={()=>loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0, 18)} ...</p>
                            </div>
                        )
                    })}
                    
                </div>
                : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry" onClick={openHelpModal}>
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry" onClick={() => setShowSettings(true)}>
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>

            <Help 
                show={showModal} 
                onClose={closeHelpModal}
            />
            <Settings 
                show={showSettings} 
                onClose={() => setShowSettings(false)} 
                toggleTheme={toggleTheme} 
                theme={theme} 
            />
        </div>
    )
}

export default Sidebar;