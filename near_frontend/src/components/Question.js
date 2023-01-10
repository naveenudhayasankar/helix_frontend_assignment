import Avatar from '../resources/avatar.png'
const Question = (props) => {
    return (
        <section className="question-container">
            <span className="question-title">{props.question_title}</span>
            <span className="question-body">{props.question_body}</span>
            <hr className="question-hr"/>
            <section>
                <span className="asked-by">Asked by: </span>
                <section className="author-details">
                    <img className="experts-image" src={Avatar} alt="Avatar"/>
                    <div className="author-metadata">
                        <span className="author-name">{props.author_name}</span>
                        <span className="author-questions">2 Answers. 1 Question</span>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Question;