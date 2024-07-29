"use client";
import React, { useState } from 'react';
import styles from './ButtonWindow.module.css';
import Image from 'next/image';

interface ButtonWindowProps {
  buttonText: string;
  closeText: string;

}

const ButtonWindow: React.FC<ButtonWindowProps> = ({ buttonText,closeText  }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleWindow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ''}`}>
        <button onClick={toggleWindow} className={styles.button}>
          {buttonText}
          <Image src={isOpen ? "/images/question/arrowtop.svg" : "/images/question/arrowdown.svg"} alt='' width={32} height={32} />
        </button>
        {isOpen && (
        <div className={styles.content}>
            <p>
                {closeText} 
            </p>
            <div className={styles.content_img}>
                <Image className={styles.content_img} src="/images/question.jpg" alt="v" width={660} height={222}  />

            </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWindow;
