import { FormEventHandler, useState } from "react";
import logo from "./logo.svg";
import styles from "./styles/Home.module.css";
import { CgClipboard, CgFormatUppercase } from "react-icons/cg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TbLetterCaseLower, TbListNumbers } from "react-icons/tb";
import { toast } from "react-toastify";

export function App() {
  const [text, setText] = useState<string | null>("");
  const [lower, setLower] = useState<string | null>("");
  const [upper, setUpper] = useState<string | null>("");
  const [removedNumbers, setRemovedNumbers] = useState<string | null>("");
  const [result, setResult] = useState<string | null>("");

  function handleLowerCase() {
    if (text === "") {
      toast.error("Você precisa preencher o Texto");
      return;
    }
    const lowerCase = text?.toLowerCase();
    setResult(lowerCase!);
    toast.success("Texto definido para caixa BAIXA");
  }

  function handleUpperCase() {
    if (text === "") {
      toast.error("Você precisa preencher o Texto");
      return;
    }
    const upperCase = text?.toUpperCase();
    setResult(upperCase!);
    toast.success("Texto definido para caixa ALTA");
  }
  function handleRemoveNumbers() {
    if (text === "") {
      toast.error("Você precisa preencher o Texto");
      return;
    }
    const removedNumbers = text?.replace(/[0-9]/g, "");
    toast.success("Números Removidos");

    setResult(removedNumbers!);
  }

  function handleReverseText() {
    if (text === "") {
      toast.error("Você precisa preencher o Texto");
      return;
    }

    const reversedText = text?.split("").reverse().join("");
    setResult(reversedText!);
    toast.success("Texto Invertido");
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

            if (e.currentTarget.textContent === "") {
              setResult("");
            }
          }}
        ></div>
        <p>Quantidade de caracteres {text?.length}</p>

        {result && (
          <div className={styles.textBox}>
            <h1>Seu Novo Texto:</h1>
            <p>{result}</p>{" "}
          </div>
        )}

        <div className={styles.buttonsContainer}>
          <button onClick={() => handleUpperCase()}>
            Caixa Alta
            <CgFormatUppercase size={24} />
          </button>
          <button onClick={() => handleLowerCase()}>
            Minusculo
            <TbLetterCaseLower size={24} />
          </button>
          <button onClick={() => handleReverseText()}>
            Inverter Caracteres
            <TbLetterCaseLower size={24} />
          </button>
          <button onClick={() => handleRemoveNumbers()}>
            Remover Números
            <TbListNumbers size={24} />
          </button>
        </div>
      </div>

      {result && (
        <button
          className={styles.clipboard}
          onClick={() => {
            navigator.clipboard.writeText(result);
            toast.success("Texto Copiado", {
              toastId: "copyText",
              icon: <CgClipboard />,
            });
          }}
        >
          Copiar
          <CgClipboard size={24} />
        </button>
      )}
    </div>
  );
}
