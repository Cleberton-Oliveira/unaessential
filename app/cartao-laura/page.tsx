import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import MedicalServicesOutlinedIcon from "@mui/icons-material/MedicalServicesOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { ShareCardButton } from "./ShareCardButton";
import styles from "./cartao-laura.module.css";

export const metadata: Metadata = {
  title: "Laura Araújo | Encaminhamentos e parcerias | Unaessential",
  description:
    "Cartão profissional de Laura Araújo para encaminhamentos e parcerias de cuidado na Unaessential, em Florianópolis.",
};

const WHATSAPP_URL = `https://wa.me/5548991904131?text=${encodeURIComponent(
  "Olá! Conheci o trabalho da Laura pelo cartão profissional e gostaria de conversar sobre o encaminhamento de uma paciente ou uma parceria de cuidado.",
)}`;
const INSTAGRAM_URL = "https://www.instagram.com/unaessential";
const MAPS_URL =
  "https://www.google.com/maps/place/Est%C3%A9tica,+Sa%C3%BAde+Integrativa+%26+SPA+-+UnaEssential/data=!4m2!3m1!1s0x0:0x39aa12bac372b03f?sa=X&ved=1t:2428&ictx=111";

const referralSteps = [
  {
    number: "01",
    title: "Contato e contexto",
    text: "O profissional, a paciente ou um familiar entra em contato e compartilha o objetivo do encaminhamento.",
  },
  {
    number: "02",
    title: "Avaliação individual",
    text: "Laura avalia as necessidades dentro da sua área de atuação e constrói uma proposta de cuidado personalizada.",
  },
  {
    number: "03",
    title: "Cuidado integrado",
    text: "Quando necessário e autorizado pela paciente, o acompanhamento pode ser alinhado ao profissional responsável.",
  },
];

const specialties = [
  "Acompanhamento complementar para lipedema",
  "Drenagem linfática e recursos não invasivos",
  "Cuidados corporais e tecnologias estéticas",
  "Acompanhamento pré e pós-operatório",
];

export default function CartaoLauraPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.portraitWrap}>
          <div className={styles.portrait}>
            <Image
              src="/image/profissionais/Laura.jpg"
              alt="Laura Araújo, esteticista e cosmetóloga"
              fill
              priority
              sizes="(max-width: 760px) 88vw, 38vw"
            />
          </div>
          <span className={styles.experienceBadge}>
            <b>10+</b>
            <small>anos de experiência</small>
          </span>
        </div>

        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Cartão profissional</span>
          <h1>Laura Araújo</h1>
          <p className={styles.role}>Esteticista e Cosmetóloga · Especialista em Lipedema</p>
          <p className={styles.intro}>
            Proprietária da Unaessential Estética e Saúde Integrativa. Uma atuação voltada ao cuidado individualizado, à escuta e à integração responsável com outros profissionais.
          </p>

          <div className={styles.primaryActions}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
              <WhatsAppIcon /> Encaminhar uma paciente
            </a>
            <ShareCardButton />
          </div>

          <div className={styles.quickLinks} aria-label="Contatos profissionais">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> <span><small>Instagram</small><b>@unaessential</b></span>
            </a>
            <Link href="/laura-araujo">
              <LanguageRoundedIcon /> <span><small>Site profissional</small><b>Conhecer a Laura</b></span>
            </Link>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <LocationOnRoundedIcon /> <span><small>Localização</small><b>Centro · Florianópolis</b></span>
            </a>
            <a href="/contatos/laura-araujo.vcf" download>
              <DownloadRoundedIcon /> <span><small>Contato</small><b>Salvar na agenda</b></span>
            </a>
          </div>
        </div>
      </section>

      <main>
        <section className={styles.partnershipSection}>
          <div className={styles.partnershipIntro}>
            <span className={styles.eyebrow}>Para profissionais da saúde</span>
            <h2>Uma parceria construída com respeito a cada área de atuação.</h2>
            <p>
              O acompanhamento na Unaessential é complementar e não substitui diagnóstico, tratamento ou seguimento médico. A proposta é acolher a paciente, respeitar as orientações recebidas e contribuir com cuidados estéticos e de bem-estar compatíveis com cada caso.
            </p>
          </div>

          <div className={styles.specialtyCard}>
            <MedicalServicesOutlinedIcon className={styles.cardIcon} />
            <span>Principais possibilidades</span>
            <ul>
              {specialties.map((specialty) => <li key={specialty}>{specialty}</li>)}
            </ul>
            <Link href="/laura-araujo" className={styles.inlineLink}>
              Ver trajetória e formações <ArrowForwardRoundedIcon />
            </Link>
          </div>
        </section>

        <section className={styles.referralSection}>
          <header>
            <span className={styles.eyebrow}>Como funciona o encaminhamento</span>
            <h2>Um caminho simples, próximo e individualizado.</h2>
          </header>
          <div className={styles.stepGrid}>
            {referralSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.clinicSection}>
          <div className={styles.clinicImage}>
            <Image
              src="/image/banners/recepcao.jpg"
              alt="Recepção da clínica Unaessential"
              fill
              sizes="(max-width: 760px) 100vw, 47vw"
            />
          </div>
          <div className={styles.clinicCopy}>
            <span className={styles.eyebrowLight}>Unaessential · Florianópolis</span>
            <h2>Um espaço preparado para receber cada encaminhamento com cuidado.</h2>
            <div className={styles.address}>
              <LocationOnRoundedIcon />
              <address>
                Av. Rio Branco, 354 · Sala 803<br />
                Centro Executivo Maxim&apos;s · Centro<br />
                Florianópolis · SC · 88015-200
              </address>
            </div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
              Abrir localização <ArrowForwardRoundedIcon />
            </a>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.finalIcon}><HandshakeOutlinedIcon /></div>
          <div>
            <span className={styles.eyebrow}>Vamos conversar?</span>
            <h2>Encaminhamentos começam por uma boa troca.</h2>
            <p>Entre em contato para apresentar um caso, tirar dúvidas sobre a atuação da Laura ou iniciar uma parceria profissional.</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
            <WhatsAppIcon /> Falar com a Laura
          </a>
          <span className={styles.signature}><BadgeOutlinedIcon /> Laura Araújo · Unaessential</span>
        </section>
      </main>
    </div>
  );
}
