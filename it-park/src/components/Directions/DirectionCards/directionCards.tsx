
import styles from "./directionCards.module.css"; 
import Image from "next/image";
interface DirectionProps {
    title: string;
    backgroundColor?:string;
    titleColor?:string;
    textColor?:string;
    boxColor?:string;

}
const DirectionCards: React.FC<DirectionProps> = ({ title,backgroundColor,titleColor,textColor,boxColor }) => {
    return(
        <div className={styles.directions}
        style={{ backgroundColor: backgroundColor || '#f9f9f9' }} 

        >
            <div className={styles.block_1}>
                <div className={styles.title_block}>
                    <div style={{ backgroundColor: boxColor || '#000000' }} className={styles.title_box}>
                        <h1 style={{ color: titleColor || '#000000' }} className={styles.title}>{title}</h1>
                    </div>
                    <p style={{ color: textColor || '#000000' }} className={styles.title_text}>Практический курс по веб дизайну. 
                    Теория и основы веб дизайна и ui/ux для новичка. Практика создания макетов по ТЗ и улучшение.</p>
                
                </div> 
                <div className={styles.add_card}>
                    <div className={styles.aboutCourse}>
                        <h3 className={styles.course_title}>Подробности курса</h3>
                        <div className={styles.li_block}>
                            <li className={styles.li}>9000 сом за месяц</li>
                            <li className={styles.li}>Обучение 4 месяца</li>
                            <li className={styles.li}>Лучших берем на стажировку</li>
                        </div>
                        
                    </div>
                    <div >
                        <a className={styles.button_get} href="">Получить консультацию</a>
                    </div>
                </div>
            </div>
            <div className={styles.block_2}>
                <div className={styles.bigCard}>
                    <Image className={styles.bigCard_img} src="/images/direction/bigCard.jpeg" alt="" width={660} height={360} />
                    <div className={styles.more_button}>
                        <a className={styles.more} href="">
                            Узнать подробнее
                            <Image src="/images/direction/arrow.svg" alt="" width={12} height={12} />
                        </a>
                    </div>
                    <div className={styles.card_text_box}>
                        <div className={styles.card_text}>
                            <h3 className={styles.for_creators}>Курс для творческих 
                            людей и <span className={styles.span}>for creators</span>
                            </h3>
                            <p className={styles.create_text}>Cборная Шотландии, победившая в 
                            финале сборную России. Бронзовы</p>
                        </div>
                        <div className={styles.card_b}>
                            <div className={`${styles.rotation} ${styles.rotation1}`}>Web-design</div>
                            <div className={`${styles.rotation} ${styles.rotation2}`}>Mobile</div>
                            <div className={styles.rotation3}><Image src="/images/direction/circle.svg" alt="" width={28} height={31} /></div>
                            <div className={`${styles.rotation} ${styles.rotation4}`}>Figma</div>
                            <div className={`${styles.rotation} ${styles.rotation5}`}>Photoshop</div>
                        </div>
                    </div>
                </div>
                <div className={styles.mini_cards}>
                    <div className={styles.card_1}>
                        <div className={styles.box}>
                            <div className={styles.rotation}>
                            /Преимущества
                            </div>
                            <Image src="\Images\direction\light.svg" alt="" width={36} height={36}/>
                        </div>
                        <div className={styles.icons_box}>
                            <div className={styles.icons_text}>
                                <Image src="/Images/direction/textIcon1.svg" alt="" width={25} height={20}/>
                                Тут кароче учат магии
                            </div>
                            <div className={styles.icons_text}>
                                <Image src="/Images/direction/textIcon2.svg" alt="" width={25} height={20}/>
                                Полный курс обучения
                            </div>
                            <div className={styles.icons_text}>
                                <Image src="/Images/direction/textIcon3.svg" alt="" width={25} height={20}/>
                                Дизайн для всех устройств
                            </div>
                            <div className={styles.icons_text}>
                                <Image src="/Images/direction/textIcon4.svg" alt="" width={25} height={20}/>
                                Высокое качество исполнения
                            </div>
                        </div>

                    </div>
                    <div className={styles.card_2}>
                        <Image src="/Images\direction\miniCard.svg" alt="" width={270} height={360} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DirectionCards