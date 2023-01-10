import Banner from './Banner'
import SidePanel from './SidePanel';
import QuestionPanel from './QuestionPanel';
import QuestionList from './QuestionList';
const Body = (props) => {

    const handleqpVisible = (visible) => {
        props.qpvisible(visible)
    }

    const handleqlVisible = (visible) => {
        props.qlVisible(visible)
    }

    return (
        <section className="body-section">
            <Banner />
            <QuestionPanel questionPanelVisible={props.questionPanelVisible} handleqpVisible={handleqpVisible} handleqlVisible={handleqlVisible}/>
            <QuestionList handleqlVisible={handleqlVisible} qlState={props.qlState}/>
            <SidePanel />
        </section>
    );
}

export default Body;