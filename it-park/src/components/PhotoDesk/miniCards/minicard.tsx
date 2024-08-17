import styles from "./minicard.module.css"; 
import Image from "next/image";
interface CardProps {
    opacity?: number;
    backgroundColor?:string;
    
  }
const Card: React.FC<CardProps> = ({opacity,backgroundColor}) => {
    const cardStyle = {
        opacity,
        backgroundColor: backgroundColor || '#f9f9f9'

        
    };
    return(
        <div className={styles.card_box} style={cardStyle} >
            <div className={styles.card_text1}>
                <Image className={styles.img} src="/Images/photoDesk/icon2.svg" alt="" width={20} height={20}  />
                <p>Лучшие курсы, отличные ребята! 
                Понимают что делают</p>
            </div>
            <div className={styles.card_text2}>
                <Image className={styles.img2} src="/Images/photoDesk/photo4.png" alt="" width={30} height={30} />
                Аноним Анонимус, Frontend
            </div>

        </div>
    )
}
export default Card