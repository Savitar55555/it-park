import Image from "next/image";
import styles from "./footer.module.css"; 
export default function Footer(){
    return(
        <footer >
            <div className={styles.footer}> 
                <div className={styles.block_1}>
                    <div>
                        <Image className={styles.itpark} src="/images/mainImg/itpark.svg" alt="" width={100} height={96} />
                        <p className={styles.text}>Ну кароче там текст вроде как 123 и так далееНу кароче там текст
                        Ну кароче там текст вроде как 123</p>
                    </div>
                    <div>
                        <div className={styles.links}>
                            <Image className={styles.links_icon} src="/Images/headerImg/facebook.svg" alt="" width={28} height={28} />
                            <a className={styles.links_text} href="">Facebook</a>
                        </div>
                        <div className={styles.links}>
                            <Image className={styles.links_icon} src="/Images/headerImg/whatsapp.svg" alt="" width={28} height={28} />
                            <a className={styles.links_text} href="">Whatsapp</a>
                        </div>
                        <div className={styles.links}>
                            <Image className={styles.links_icon} src="/Images/headerImg/telegram.svg" alt="" width={28} height={28} />
                            <a className={styles.links_text} href="">Telegram</a>
                        </div>
                        <div className={styles.links}>
                            <Image className={styles.links_icon} src="/Images/headerImg/instagram.svg" alt="" width={28} height={28} />
                            <a className={styles.links_text} href="">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className={styles.block_2}>
                    <div className={styles.Inblock_2}>
                        <Image className={styles.mapImg} src="/Images/map.png" alt="" width={148}  height={148}/>
                        <div className={styles.map_text}>
                            <div className={styles.icons}>
                                <Image src="/Images/footerIcons/geoIcon.svg" alt="" width={30} height={30} />
                                Геоданные
                            </div>
                            <hr />
                            <div>
                                <div className={styles.icons}>
                                    <Image src="/Images/footerIcons/cityIcon.svg" alt="" width={30} height={30} />
                                    <p className={styles.icons_text}>Город Ош, ​Улица Ленина, 318 / 3 этаж</p>
                                </div>
                                <div className={styles.icons}>
                                    <Image src="/Images/footerIcons/graph.svg" alt="" width={30} height={30} />
                                    <p className={styles.icons_text}>График работы: 10:00-20:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.textOninput}>
                            <div className={styles.black}>Оставьте свой номер и наши специалисты</div>
                            <p>Описание описание че то там <br /> 
                            кароче и так далее</p>
                        </div>
                        <div className={styles.connection}>
                            <div className={styles.input_box}>
                                <Image className={styles.input_icons} src="/Images/footerIcons/contact.svg" alt="" width={20} height={20} />
                                <input className={styles.input} type="text" name="" id="" placeholder="Ваше имя"/>
                            </div>
                            <div className={styles.input_box}>
                                <Image className={styles.input_icons} src="/Images/footerIcons/call.svg" alt="" width={20} height={20} />
                                <input className={styles.input} type="number" name="" id="" placeholder="Ваш номер"/>
                            </div>
                            <button className={styles.buttonOtpr}>Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.creator_container}>
                <div className={styles.creator}>
                    <Image  src="/Images/tommorow-techs/techs.svg" alt="" width={28} height={26}/>
                    Разработано Tommorow-Techs✨
                </div>  
                
            </div> 
        </footer>
    )
}