import styles from "./card.module.css"; 
import Image from "next/image";

export default function Cards() {
    return (
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.card_1}>
                    <div className={styles.card_text_1}>
                      <h2 className={styles.h2}>
                        <Image src="/images/cardsImg/card.svg" alt="" width={69} height={24} />
                        IT Park — один из лидеров один из лидеров
                      </h2>
                    </div>
                    <div className={styles.arrow_container}>
                        <button className={styles.left_button}>
                          <Image className={styles.left_button} src="images/cardsImg/arrowleft.svg" alt="Левая кнопка" width={34} height={34}/>
                        </button>
                        <button className={styles.right_button}>
                          <Image className={styles.right_button} src="images/cardsImg/arrowright.svg" alt="Правая кнопка" width={34} height={34}/>
                        </button>
                    </div>
                </div>
                <div>
                    <div className={styles.bottom_text}>
                        <Image className={styles.sekiro} src="/images/sekiro.jpeg" alt="sekiro" width={40} height={40}/>
                        <div>
                            <p className={styles.text_p}>Директор Директоров</p>   
                            <div className={styles.text_div}>CEO of IT Park</div>
                        </div>
                    </div>
                    <div className={styles.text_div_2}>
                        Ну кароче речь тут от директора о том 
                        хорошо типо и так далее и все хорошо ну вроде все норм. 
                    </div>
                </div>
                
            </div>
            <div className={styles.card}>
                <div className={styles.card_1}>
                    <div className={styles.card_text_2}>
                        <h2 className={styles.sev}>
                            700+
                        </h2>
                        <div className={styles.stu}>
                            Учеников прошли наши курсы
                        </div>
                    </div>
                    <div className={styles.contact_container}>
                        <Image className={styles.contact} src="images/cardsImg/contactCard.svg" alt="i" width={46} height={46}/>
                    </div>
                </div>
                <div>
    
                </div>
            </div>
            <div className={styles.card_special}>
                <div className={styles.card_1}>
                    <div>
                        <h3 className={styles.events}>Ивенты</h3>
                        <p className={styles.location}>
                            <Image src="/images/cardsImg/icon1.svg" alt="" width={18} height={18} />
                            15.11.23 ноября, 15:00
                        </p>
                        <p className={styles.location}>
                            <Image src="/images/cardsImg/icon2.svg" alt="" width={18} height={18} />
                            Ololo House, 2 этаж
                        </p>
                    </div>
                    <div className={styles.nothing}>

                    </div>
                </div>
                <div>
                    <div >
                        <div className={styles.card_text_3}>
                            Час кода:
                            <h3 className={styles.events}>
                            Приложение на 
                            Flutter за один час.
                            </h3>
                            <div className={styles.button_flutter}>
                                <a className={styles.button_text} href="">Подробнее</a>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>      
        </div>
    )    
}