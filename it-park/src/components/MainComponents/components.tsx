
import Main from "../Main/main";
import styles from "./components.module.css"; 
import Cards from "../Cards/card";
import Advanced from "../AdvancedTech/advancedblock";
import Question from "../Questions/question";
import Directions from "../Directions/direction";
import Desk from "../PhotoDesk/desk";

export default function Components() {
    return (
        <div className={styles.s} >
            <Main></Main>
            <Cards></Cards>
            <Advanced></Advanced>
            <Question></Question>
            <Directions></Directions>
            <Desk></Desk>
        </div>
    );
}
  