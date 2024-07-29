import styles from "./question.module.css"; 
import Image from "next/image";
import ButtonWindow from "./ButtonWindow/ButtonWindow";
export default function Question() {
    return(
        <div className={styles.question}>
            <div className={styles.block_1}>
                <div>
                    <p className={styles.text_p}>Ваши вопросы - наши ответы</p>
                    <h1 className={styles.title}>Заголовок и весьма <br />
                    интересный вопросик ?</h1>                    
                </div>        
                <div className={styles.image_container}>
                    
                    <Image className={styles.block_image} src="/images/cardphoto.jpeg" alt="" width={630} height={400} />
                    <p className={styles.image_text} >Смотреть больше об IT park</p>
                    
                    <div className={styles.image_text}>
                        <p>
                            <Image src="/images/advanced/playIcon.svg" alt="" width={30} height={30}  />
                            Смотреть
                        </p>
                        <p>
                            0:12
                        </p>
                    </div>
                    
                    
                </div>
                <div className={styles.button_container}>
                    <div className={styles.pinkphoto}>
                        <Image src="/images/pinkphoto.jpeg" alt="" width={54} height={54} />
                        <p>Менеджер Андрей готов <br />
                        ответить на ваши вопросы</p>
                    </div>
                    <div  >
                        <button className={styles.black_button} >Написать ему</button>
                    </div>
                </div>
            </div>
            <div className={styles.block_2}>
                <ButtonWindow buttonText="Что такое IT?" closeText="Шестая планета по удалённости от Солнца и вторая по размерам планета в Солнечной
                    системе после Юпитера. Сатурн классифицируется как газовая планета-гигант.">
                </ButtonWindow>
                <ButtonWindow buttonText="Что такое Front-end?" closeText="Шестая планета по удалённости от Солнца и вторая по размерам планета в Солнечной
                    системе после Юпитера. Сатурн классифицируется как газовая планета-гигант.">
                </ButtonWindow>
                <ButtonWindow buttonText="Что такое Back-end?" closeText="Шестая планета по удалённости от Солнца и вторая по размерам планета в Солнечной
                    системе после Юпитера. Сатурн классифицируется как газовая планета-гигант.">
                </ButtonWindow>
                <ButtonWindow buttonText="Как проводиться обучение?" closeText="Шестая планета по удалённости от Солнца и вторая по размерам планета в Солнечной
                    системе после Юпитера. Сатурн классифицируется как газовая планета-гигант.">
                </ButtonWindow>
            </div>    
        </div>
    )
}