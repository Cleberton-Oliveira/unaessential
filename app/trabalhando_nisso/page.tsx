import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./trabalhando.module.css";

export const metadata: Metadata = {
  title: "Novidades em Criolipólise | Unaessential",
  description: "Estamos preparando novos protocolos personalizados de criolipólise na Unaessential.",
};

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5548991904131&text=Ol%C3%A1!%20Gostaria%20de%20receber%20novidades%20sobre%20o%20lan%C3%A7amento%20dos%20protocolos%20de%20criolip%C3%B3lise.";

export default function TrabalhandoNissoPage() {
  return (
    <div className={styles.page}>
      <div className={styles.ambient} aria-hidden="true">
        <span className={styles.ringOne} />
        <span className={styles.ringTwo} />
        <span className={styles.snowOne}><AcUnitRoundedIcon /></span>
        <span className={styles.snowTwo}><AcUnitRoundedIcon /></span>
      </div>

      <section className={styles.hero}>
        <div className={styles.brandMark}>
          <Image src="/logo/icon_unaessential.svg" alt="" width={55} height={81} />
        </div>

        <div className={styles.copy}>
          <span className={styles.eyebrow}><AutoAwesomeRoundedIcon /> Uma novidade está chegando</span>
          <h1>Estamos preparando<br /><em>algo especial.</em></h1>
          <p className={styles.lead}>Aguarde para conhecer nossos novos protocolos personalizados de criolipólise, com condições especiais de lançamento.</p>

          <div className={styles.features}>
            <div><span><FavoriteBorderRoundedIcon /></span><p><strong>Protocolos personalizados</strong><small>Pensados a partir dos seus objetivos.</small></p></div>
            <div><span><InsightsRoundedIcon /></span><p><strong>Condições de lançamento</strong><small>Valores especiais para essa nova fase.</small></p></div>
            <div><span><AcUnitRoundedIcon /></span><p><strong>Tecnologia & cuidado</strong><small>Uma experiência acompanhada pela nossa equipe.</small></p></div>
          </div>

          <div className={styles.actions}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}><WhatsAppIcon /> Quero receber novidades</a>
            <Link href="/" className={styles.secondaryButton}><ArrowBackRoundedIcon /> Voltar ao início</Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.imageFrame}>
            <Image src="/image/tecnologias/crio.jpg" alt="Tecnologia de criolipólise da Unaessential" fill sizes="(max-width: 900px) 82vw, 42vw" priority />
            <div className={styles.imageVeil} />
          </div>
          <div className={styles.launchSeal}><span>Em breve</span><strong>CRIO</strong><small>UNAESSENTIAL</small></div>
          <div className={styles.sparkBadge}><AutoAwesomeRoundedIcon /><span>Novos<br />protocolos</span></div>
        </div>
      </section>
    </div>
  );
}
