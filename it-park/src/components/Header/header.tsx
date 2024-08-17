import styles from "./header.module.css"; 
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Image src="/images/mainImg/itpark.svg" alt="" width={52} height={50} /> 
            </div>
            <div className={styles.rightSection}>
                <div className={styles.button}>
                    <div className={styles.icon}>
                        <Image src="/images/headerImg/instagram.svg" alt="f" width={14} height={14} />
                    </div>
                    <div className={styles.icon}>
                        <Image src="/images/headerImg/whatsapp.svg" alt="f" width={14} height={14}/>
                    </div>
                    <a className={styles.text_a} href="">+996(997) 919-170</a>
                </div>
                <div className={styles.button}>
                    <a className={styles.text_a} href="">Записаться на консультацию</a>
                </div>
                <div className={styles.button_menu}>
                    <Image src="/images/mainImg/menu.svg" alt="j" width={48} height={48} />
                </div>
            </div>
        </header>
    );
}

  