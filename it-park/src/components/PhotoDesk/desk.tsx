import Image from "next/image";
import styles from "./desk.module.css";
import Card from "./miniCards/minicard";

export default function Desk() {
  return (
    <div className={styles.desk}>
      <div className={styles.block}>
        <div className={styles.photo_container}>
        <div className={styles.title}>
          <h1 className={styles.title_text}>
            Наши ученики — <br />
            наша гордость
          </h1>
          <p className={styles.title_main}>
            Ну кароче речь тут от директора о том хорошо типо и так далее и все хорошо ну <br /> вроде все норм.
          </p>
        </div>
          <div className={styles.photo_big1}>
            <Image className={`${styles.photo} ${styles.photo1}`} src="/Images/photoDesk/photo1.png" alt="d" width={184} height={184} />
            <Image className={styles.icons} src="/Images/photoDesk/icon1.svg" alt="" width={32} height={32} />
          </div>
          <div className={styles.photo_big2}>
            <Image className={`${styles.photo} ${styles.photo2}`} src="/Images/photoDesk/photo2.png" alt="d" width={184} height={187} />
            <Image className={styles.icons} src="/Images/photoDesk/icon1.svg" alt="" width={32} height={32} />
          </div>
          <div className={styles.photo_mid1}>
            <Image className={`${styles.photo} ${styles.photo3}`} src="/Images/photoDesk/photo3.png" alt="d" width={120} height={121} />
            <Image className={styles.icons} src="/Images/photoDesk/icon1.svg" alt="" width={21} height={21} />
          </div>
          <div className={styles.photo_small}>
            <Image className={`${styles.photo} ${styles.photo4}`} src="/Images/photoDesk/photo4.png" alt="d" width={110} height={110} />
            <Image className={styles.icons} src="/Images/photoDesk/icon1.svg" alt="" width={20} height={20} />
          </div>
          <div className={styles.photo_mid2}>
            <Image className={`${styles.photo} ${styles.photo5}`} src="/Images/photoDesk/photo5.png" alt="d" width={120} height={120} />
            <Image className={styles.icons} src="/Images/photoDesk/icon1.svg" alt="" width={20} height={20} />
          </div>
          <div className={styles.photo_big3}>
            <Image className={`${styles.photo} ${styles.photo6}`} src="/Images/photoDesk/photo6.png" alt="d" width={184} height={185} />
            <Image className={styles.icons} src="/Images/photoDesk/icon1.svg" alt="" width={32} height={32} />
          </div>
          <div className={styles.photo_mid3}>
            <Image className={`${styles.photo} ${styles.photo7}`} src="/Images/photoDesk/photo7.png" alt="d" width={120} height={120} />
            <Image className={styles.icons} src="/Images/photoDesk/icon1.svg" alt="" width={20} height={20} />
          </div>
          <div className={styles.photo_mid4}>
            <Image className={`${styles.photo} ${styles.photo8}`} src="/Images/photoDesk/photo8.png" alt="d" width={120} height={119} />
            <Image className={styles.icons} src="/Images/photoDesk/icon1.svg" alt="" width={20} height={20} />
          </div>
          <div className={styles.card1}>
            <Card></Card>
          </div>
          <div className={styles.card2}>
            <Card opacity={0.4} backgroundColor="#007AFF66"></Card>
          </div>
          <div className={styles.card3}>
            <Card opacity={0.4}></Card>
          </div>
          <div className={styles.card4}>
            <Card></Card>
          </div>
          <div className={styles.card5}>
            <Card></Card>
          </div>
        
        </div>
      </div>
      
    </div>
  );
}
