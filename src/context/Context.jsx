import { createContext, useState } from "react";
import run from "../config/gemini";

// Create a new context
export const Context = createContext();

const ContextProvider = (props) => {
    // State variables
    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    // Function to handle sending a prompt
    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input)
        // Call the Gemini API
        const response = await run(input);
        setResultData(response);
        setLoading(false);
        setInput('');
    }

    // Object containing all the context values
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    };

    // Provide the context to child components
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;