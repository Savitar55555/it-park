import styles from "./main.module.css"; 
import Image from "next/image";

export default function Main() {
    return (
      <main className={styles.main}>
        <div className={styles.mainContent}>         
          <div className={styles.direct_buttons_1}>
            <Image src="/images/mainImg/plus.svg" className={styles.plus_icon} alt="plus" width={21.93} height={21.6}/>
            <div className={`${styles.directions} ${styles.directions_1}`}>
              <div>UX/UI Design</div>
            </div>
          </div>
          <div className={styles.direct_buttons_2}>
            <Image src="/images/mainImg/plus.svg" className={styles.plus_icon} alt="plus" width={21.93} height={21.6}/>
            <div className={`${styles.directions} ${styles.directions_2}`}>
              <div>Frontend</div>
            </div>
          </div>
          <div className={styles.direct_buttons_3}>
            <Image src="/images/mainImg/plus.svg" className={styles.plus_icon} alt="plus" width={21.93} height={21.6}/>
            <div className={`${styles.directions} ${styles.directions_3}`}>
              <div>Backend</div>
            </div>
          </div>
          <div className={styles.main_text}>
            <h1 className={styles.main_text_h1}>
              Передовые технологии обучения        
              <Image className={styles.icons} src="/images/mainImg/icons.svg" alt="d" width={140} height={55} />         
            </h1>
            <p className={styles.main_text_desc}>
              Англия стала объединением  семи <br />
              некогда враждовавших королевств в 927
            </p>
            <div className={styles.arrow_scroll}>
              <Image className={styles.icon_2} src="/images/mainImg/arrow.svg" alt="" width={60} height={60} /> 
              <p className={styles.main_text_scroll}>Скрольте вниз</p> 
            </div>
          </div>
          <Image className={styles.image} src="/images/mainImg/mainphoto.svg" alt="" width={660} height={700} />
          <div className={styles.cards}>
            <div className={styles.card_info}></div>
            <div className={styles.card_info}></div>
          </div> 
        </div>
      </main>
    );
}
