"use client";

import { useState } from "react";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import styles from "./cartao-laura.module.css";

const CARD_URL = "https://unaessential.com.br/cartao-laura";

export function ShareCardButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: "Laura Araújo | Unaessential",
      text: "Conheça o trabalho de Laura Araújo e as possibilidades de encaminhamento para a Unaessential.",
      url: CARD_URL,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(CARD_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button type="button" className={styles.shareButton} onClick={handleShare} aria-live="polite">
      {copied ? <CheckRoundedIcon /> : <ShareRoundedIcon />}
      {copied ? "Link copiado" : "Compartilhar cartão"}
    </button>
  );
}
