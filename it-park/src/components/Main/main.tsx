import styles from "./main.module.css"; 
import Image from "next/image";

export default function Main() {
    return (
      <main className={styles.main}>       
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
          <div className={styles.image_container}>
            <Image className={styles.image} src="/images/mainImg/mainphoto.svg" alt="" width={660} height={700} />
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
                      Ознакомтесь направлением Backend и изучите все аспекты
                    </div>
                  </div>
                  <div className={styles.block}>
                    <div className={styles.link2}>
                      <a href="">
                        +3 направления
                      </a>
                    </div>
                  <Image src="/images/mainImg/upper_right_arrow.svg" alt="" width={40} height={40}/>
                  </div>
                  
              </div>
            </div>

          </div>
          
        </div>
        
      </main>
    );
}
