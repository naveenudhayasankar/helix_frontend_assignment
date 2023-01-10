import Body from "./Body";
import { useState } from "react"; 
const Page = () => {
    const [askQuestion, setAskQuestion] = useState(false);
    const [qlVisible, setqlVisible] = useState(false);

    const askQuestionHandler = () => {
        setAskQuestion(!askQuestion);
        setqlVisible(false)
    };

    const handleqpvisible = (visible) => {
        setAskQuestion(visible)
    };
    
    const handleqlvisible = (visible) => {
        console.log("Question posted from Question Panel.")
        setqlVisible(visible)
    }

    return (
        <div className="main-pg">
            <div>
                <button className="header-btn" onClick={askQuestionHandler} disabled={askQuestion}> 
                    <span className="btn-txt">
                        Ask a question
                    </span>
                </button>
            </div>
            <Body questionPanelVisible={askQuestion} qpvisible={handleqpvisible} qlVisible={handleqlvisible} qlState={qlVisible}/>
        </div>
    );
};

export default Page;
