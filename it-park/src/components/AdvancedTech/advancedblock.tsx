import styles from "./advancedblock.module.css"; 
import Image from "next/image";
export default function Advanced() {

  return(
    <div className={styles.advancedblock}> 
      <div className={styles.main_text}>
        <h1 className={styles.main_text_h1}>
          Передовые технологии обучения и не только 
        </h1>
        <p className={styles.main_text_desc}>
          Ну кароче речь тут от директора о том хорошо типо и так далее и все хорошо ну вроде все норм. 
        </p>
      </div>
      <div className={styles.block_1}>
        <div className={styles.mini_cards}>
          <div className={styles.cards}>
            <Image src="/images/advanced/icon1.svg" alt="" width={46} height={46} />
            <div className={styles.card_texts} >
              <p className={styles.chip}>Фишка 1</p>
              <p className={styles.chip_text}>Повышение эстетического качества и пользовательской привлекательности.</p>
            </div>
          </div>
          <div className={styles.cards}>
            <Image src="/images/advanced/icon2.svg" alt="" width={46} height={46} />
            <div className={styles.card_texts} >
              <p className={styles.chip}>Фишка 2</p>
              <p className={styles.chip_text}>Интеграция нюансов, которые улучшают общую пользовательскую.</p>
            </div>
          </div>
          <div className={styles.cards}>
            <Image src="/images/advanced/icon3.svg" alt="" width={46} height={46} />
            <div className={styles.card_texts} >
              <p className={styles.chip}>Фишка 3</p>
              <p className={styles.chip_text}>Повышение общего качества визуального представления продукта.</p>
            </div>
          </div>
          <div className={styles.cards}>
            <Image src="/images/advanced/icon4.svg" alt="" width={46} height={46} />
            <div className={styles.card_texts} >
              <p className={styles.chip}>Фишка 4</p>
              <p className={styles.chip_text}>Внедрение дополнительных элементов для улучшения общего восприятия.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.block_2}>
        <div></div>
        <div className={styles.image_text}>
          <Image  src="/images/advanced/playIcon.svg" alt="" width={64} height={64} />  
          <div className={styles.text_icon}>
            <p className={styles.welcome} >Добро пожаловать в IT </p>
            <p className={styles.chip_text}>02:21</p>
          </div>
        </div>
            
      </div>
    </div>
  )  
}  
