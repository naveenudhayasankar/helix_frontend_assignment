import { useState } from "react";
import image from '../resources/img-icon.png'
import axios from "axios";

const QuestionPanel = (props) => {

    const [question, setQuestion] = useState({
        question_title: '',
        question_body: '',
        author_id: 4,
        author_name: 'Ethereum Maxi'
    })

    const closeHandler = () => {
        setQuestion({
            question_title: '',
            question_body: '',
            author_id: 4,
            author_name: 'Ethereum Maxi'
        });
        props.handleqpVisible(false)
    };
     
    const handleDataChange = (e) => {
        setQuestion( (prev) => ({...prev, [e.target.name] : e.target.value }))
    };

    const postHandler = async () => {
        try{
            const res = await axios.post('http://localhost:8080/questions', question)
            console.log(res.data)
            props.handleqpVisible(false)
            props.handleqlVisible(true)
        }
        catch(err){
            console.log(err)
        }   
    }

    let questionPanel; 

    if(props.questionPanelVisible) {
        questionPanel = (
            <section className="question-panel-top">
                <div className="new-question-heading">
                    <h3>
                        <span className="new-question-heading-txt">
                            New Question
                        </span>
                    </h3>
                    <button className="question-panel-close-btn" onClick={closeHandler}>X</button>
                </div>
                <hr className="question-panel-line"/>
                <div>
                    <input className="new-question-title" type='text' placeholder="Enter the question title" name="question_title" onChange={handleDataChange}/>
                </div>
                <div>
                    <textarea className="new-question-body" placeholder="Write your question here" name="question_body" onChange={handleDataChange}/>
                </div>
                <div className="question-panel-footer">
                    <hr className="qp-footer-line"/>
                    <div className="qp-footer-contents">
                        <div className="qp-footer-icons">
                            <span className="qp-footer-font-icon">Aa</span>
                            <img src={image} className="qp-footer-img-icon" alt="img-upload"/>
                        </div>
                        <div className="qp-footer-btn-container">
                            <button className="qp-footer-btn" onClick={postHandler}> Post </button>
                        </div>
                    </div>
                </div>
            </section>
        );    
    }
    else {
        questionPanel = (<section></section>);
    };

    return questionPanel;
};

export default QuestionPanel;