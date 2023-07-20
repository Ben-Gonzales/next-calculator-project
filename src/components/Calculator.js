import React from "react";
import styles from '@/styles/Home.module.css';
import { useState, useEffect } from 'react';

const Calculator = () => {
    return (
        <div>
            <section className={styles.container}>
                <div>
                    <input type="text" className={styles.display} />
                    <div className={styles.buttons}>
                        <button id="ac" className={styles.operator} data-value="AC">AC</button>
                        <button className={styles.operator} data-value="DEL">DEL</button>
                        <button className={styles.operator} data-value="/">/</button>
                        <button className={styles.number} data-value="7">7</button>
                        <button className={styles.number} data-value="8">8</button>
                        <button className={styles.number} data-value="9">9</button>
                        <button className={styles.operator} data-value="*">*</button>
                        <button className={styles.number} data-value="4">4</button>
                        <button className={styles.number} data-value="5">5</button>
                        <button className={styles.number} data-value="6">6</button>
                        <button className={styles.operator} data-value="-">-</button>
                        <button className={styles.number} data-value="1">1</button>
                        <button className={styles.number} data-value="2">2</button>
                        <button className={styles.number} data-value="3">3</button>
                        <button className={styles.operator} data-value="+">+</button>
                        <button className={styles.number} data-value="0">0</button>
                        <button className={styles.number} data-value="00">00</button>
                        <button className={styles.number} data-value=".">.</button>
                        <button className={styles.operator} data-value="=">=</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Calculator;