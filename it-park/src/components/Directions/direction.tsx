import styles from "./direction.module.css"; 
import Image from "next/image";
import DirectionCards from "./DirectionCards/directionCards";
export default function Directions() {
    return(
        <div className={styles.Direction}>
            <DirectionCards
                title="UX/UI Design "
                backgroundColor="#161616"
                titleColor="#161616"
                textColor="#FFFFFF"
                boxColor="#FFFFFF"

            />
            <DirectionCards
                title="Frontend"
                backgroundColor="#FFFFFF"
                titleColor="#FFFFFF"
                textColor="#161616"
                boxColor="#161616"
            />
            <DirectionCards
                title="Backend"
                backgroundColor="#FEB101"
                titleColor="#161616"
                textColor="#FFFFFF"
                boxColor="#FFFFFF"

            />
        
        </div>
    )       
}