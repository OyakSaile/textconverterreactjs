import { FormEventHandler, useState } from "react";
import logo from "./logo.svg";
import styles from "./styles/Home.module.css";
import { CgFormatUppercase } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbLetterCaseLower, TbListNumbers } from "react-icons/tb";

export function App() {
  const [text, setText] = useState<string | null>("");
  const [lower, setLower] = useState<string | null>("");
  const [upper, setUpper] = useState<string | null>("");
  const [removedNumbers, setRemovedNumbers] = useState<string | null>("");

  function handleLowerCase() {
    setUpper("");
    setRemovedNumbers("");
    const lowerCase = text?.toLowerCase();
    setLower(lowerCase!);
  }

  function handleUpperCase() {
    setLower("");
    setRemovedNumbers("");

    const upperCase = text?.toUpperCase();
    setUpper(upperCase!);
  }
  function handleRemoveNumbers() {
    setLower("");
    setUpper("");

    const removedNumbers = text?.replace(/[0-9]/g, "");
    setRemovedNumbers(removedNumbers!);
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a
          href="https://www.linkedin.com/in/kayoeliasgverdan/"
          target="_blank"
          className={styles.profileButton}
        >
          Desenvolvido por Kayo
        </a>

        <a href="https://www.linkedin.com/in/kayoeliasgverdan/" target="_blank">
          <FaLinkedin />
        </a>

        <a href="https://www.github.com/oyaksaile" target="_blank">
          <FaGithub />
        </a>
      </header>

      <div className={styles.content}>
        <h2>Digite seu Texto</h2>
        <p>E escolha no que deseja converter</p>
        <div
          contentEditable
          className={styles.textBox}
          onBlur={(e) => {
            setText(e.currentTarget.textContent);
          }}
        ></div>

        {
          <div className={styles.textBox}>
            <h1>Seu Novo Texto:</h1>
            <p>
              {lower} {upper} {removedNumbers}
            </p>{" "}
          </div>
        }

        <div className={styles.buttonsContainer}>
          <button onClick={() => handleUpperCase()}>
            Caixa Alta
            <CgFormatUppercase size={24} />
          </button>
          <button onClick={() => handleLowerCase()}>
            Minusculo
            <TbLetterCaseLower size={24} />
          </button>
          <button onClick={() => handleRemoveNumbers()}>
            Remover Números
            <TbListNumbers size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
