import Header from "../Header/header";
import Main from "../Main/main";
import styles from "./info.module.css"; 
import Cards from "../Cards/card";
import Advanced from "../AdvancedTech/advancedblock";
import Question from "../Questions/question";
export default function Info() {
    return (
        <div>
            <Header></Header>
            <Main></Main>
            <Cards></Cards>
            <Advanced></Advanced>
            <Question></Question>
        </div>
      
    );
}
  