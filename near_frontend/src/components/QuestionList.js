import Question from "./Question";
import axios from "axios";
import { useEffect, useState } from "react";

const QuestionList = (props) => {

    console.log('The question list should be visible: ' + props.qlState);
    console.log('Fetching questions for question list')
    const [questions, setQuestions] = useState([])

    useEffect( () => {
        const getQuestions = async () => {
            try {
                console.log('calling api for getting questions')
                const res = await axios.get("http://localhost:8080/questions")
                console.log(res.data)
                setQuestions(res.data)
            }
            catch (err) {
                console.log(err)
            }
        };
        getQuestions();
    }, [props.qlState])

    if (!props.qlState) {
        console.log('Returning empty question list')
        return (<section></section>)
    }

    
    return (
        <section className="ql-section">
            {
            questions.map(
                (question) => (<Question key={question.id} question_title={question.title} question_body={question.question_text} author_name={question.username} />)
            )}
        </section>
    )
};

export default QuestionList;