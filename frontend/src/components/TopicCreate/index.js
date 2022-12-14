import "./index.css"
import { useSelector,useDispatch } from "react-redux";
import getCurrentUser from "../../store/session"
import { createTopic } from "../../store/topics"
import { useState, useEffect, } from "react";
import { Input } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';
const TopicCreate = () => {
    const dispatch = useDispatch();
    const [topicTitle, setTopicTitle] = useState("");
    const [mood, setMood] = useState("loved");
  

    const errors = useSelector(state => state.errors.session);

     const sessionUser = useSelector(state => state.session.user);

     const history = useHistory();

     const userId = sessionUser._id;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTopic = {
            userId,
            mood,
            title: topicTitle,
        } 
   

        dispatch(createTopic(newTopic)).then((res) => {
         
            history.push("/topic-index");
        }).catch((err) => console.log(`Error ${err.status}: ${err.statusText}`));

        
    }

    useEffect(() => {
        dispatch(getCurrentUser);
    }, []);

    return (
        <>
            <div className="topic-create-container">
                <div className="topic-form">
                    <form onSubmit={handleSubmit}>
                            <select className="topic-mood-dropdown" value={mood} onChange={(e) => setMood(e.target.value)}>
                                <option defaultValue value='invalid'> I'm feeling...</option>
                                <option value="angry">Angry</option>
                                <option value="loved">Loved</option>
                                <option value="anxious">Anxious</option>
                                <option value="happy">Happy</option>
                                <option value="sad">Sad</option>
                            </select>
                             <textarea className="topic-form-text" rows="2" cols="50"
                            value={topicTitle} placeholder="  Enter a title" onChange={(e) => setTopicTitle(e.target.value)} />
                        <input className="topic-submit-button" type="submit" value="Create Topic"/>                       
                    </form>
                </div>
            </div>
        </>
    )
}

export default TopicCreate;