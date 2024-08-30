import styles from "./main.module.css"; 
import Image from "next/image";

export default function Main() {
    return (
      <main className={styles.main}>
        <div className={styles.text_container}>
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
            <div>
              <h1 className={styles.main_text_h1}>
                Передовые технологии <br /> обучения        
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
          </div>
        </div>
        <div className={styles.image_container}>
          <div className={styles.cards}>
            <div className={styles.card_info}>
              <div className={styles.connection}>
                <div className={styles.contact_text}>
                  <Image className={styles.contact} src="/images/mainImg/contact.svg" alt="" width={36} height={36}  />
                  <div>
                    Адилет
                  </div>
                  <div className={styles.contact_text_1}>
                    Backend Developer
                  </div>
                </div>
                  
                <div className={styles.link}>
                  <a href="">
                    Backend
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.card_info}>
              <div className={styles.connection}>
                <div className={styles.contact_text_2}>                   
                  <Image className={styles.contact} src="/images/mainImg/telegram.svg" alt="" width={36} height={36} />
                  <div>
                    Ознакомтесь <br /> направлением Backend и изучите все аспекты
                  </div>
                </div>
                <div className={styles.block}>
                  <div className={styles.link2}>
                    <a href="">
                      +3 направления
                    </a>
                  </div>
                  <Image className={styles.arrow3} src="/images/mainImg/upper_right_arrow.svg" alt="" width={40} height={40}/>
                </div>
                  
              </div>
            </div>

          </div>
          
        </div>
        
      </main>
    );
}
