import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import WavesRoundedIcon from "@mui/icons-material/WavesRounded";
import { ShareCardButton } from "./ShareCardButton";
import styles from "./cartao-laura.module.css";

export const metadata: Metadata = {
  title: "Laura Araújo | Cartão virtual | Unaessential",
  description:
    "Conheça Laura Araújo e os cuidados oferecidos na Unaessential, em Florianópolis. Drenagem linfática, protocolos para lipedema, criolipólise e ondas de choque.",
};

const WHATSAPP_URL = `https://wa.me/5548991904131?text=${encodeURIComponent(
  "Olá! Recebi o cartão virtual da Laura Araújo e gostaria de saber mais sobre os serviços oferecidos na Unaessential.",
)}`;
const INSTAGRAM_URL = "https://www.instagram.com/unaessential";
const MAPS_URL =
  "https://www.google.com/maps/place/Est%C3%A9tica,+Sa%C3%BAde+Integrativa+%26+SPA+-+UnaEssential/data=!4m2!3m1!1s0x0:0x39aa12bac372b03f?sa=X&ved=1t:2428&ictx=111";

const protocols = [
  {
    icon: <WavesRoundedIcon />,
    title: "Drenagem linfática com tecnologias",
    text: "Atendimento personalizado que combina drenagem linfática e recursos tecnológicos para auxiliar na redução do inchaço, favorecer a circulação e aliviar desconfortos como peso e sensibilidade corporal.",
  },
  {
    icon: <SpaOutlinedIcon />,
    title: "Cuidados especializados para lipedema",
    text: "Protocolos construídos de acordo com as necessidades e sintomas de cada pessoa, com foco em conforto, bem-estar e acompanhamento individualizado.",
    featured: true,
  },
  {
    icon: <AcUnitRoundedIcon />,
    title: "Criolipólise e ondas de choque",
    text: "Combinações especializadas para diferentes regiões corporais, indicadas após avaliação individual e planejadas conforme cada objetivo e condição clínica.",
  },
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
          <span className={styles.eyebrow}>Cartão virtual</span>
          <h1>Laura Araújo</h1>
          <p className={styles.role}>Esteticista e Cosmetóloga · Atuação especializada em lipedema</p>
          <p className={styles.intro}>
            Proprietária da Unaessential Estética e Saúde Integrativa. Um cuidado que combina escuta, conhecimento técnico, tecnologias e protocolos personalizados para promover conforto, bem-estar e resultados possíveis para cada pessoa.
          </p>

          <div className={styles.primaryActions}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
              <WhatsAppIcon /> Falar com a clínica
            </a>
            <ShareCardButton />
          </div>

          <div className={styles.quickLinks} aria-label="Contatos da Unaessential">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> <span><small>Instagram</small><b>@unaessential</b></span>
            </a>
            <Link href="/laura-araujo">
              <LanguageRoundedIcon /> <span><small>Site</small><b>Conhecer a Laura</b></span>
            </Link>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <LocationOnRoundedIcon /> <span><small>Localização</small><b>Centro · Florianópolis</b></span>
            </a>
          </div>
        </div>
      </section>

      <main>
        <section className={styles.protocolSection}>
          <header>
            <span className={styles.eyebrow}>Principais cuidados</span>
            <h2>Protocolos pensados para o seu corpo e para o seu momento.</h2>
            <p>Todos os atendimentos são definidos após uma conversa e avaliação individual, respeitando necessidades, sensibilidades e orientações médicas.</p>
          </header>

          <div className={styles.protocolGrid}>
            {protocols.map((protocol) => (
              <article key={protocol.title} className={protocol.featured ? styles.protocolFeatured : undefined}>
                <span className={styles.protocolIcon}>{protocol.icon}</span>
                {protocol.featured ? <small>Destaque</small> : null}
                <h3>{protocol.title}</h3>
                <p>{protocol.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.moreServices}>
            <p>A clínica também oferece outros cuidados corporais, faciais, massagens e experiências de SPA.</p>
            <Link href="/tratamentos">Conhecer todos os serviços <ArrowForwardRoundedIcon /></Link>
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
            <h2>Um espaço preparado para receber você com calma e cuidado.</h2>
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
          <div>
            <span className={styles.eyebrow}>Vamos conversar?</span>
            <h2>Quer entender qual cuidado faz sentido para você?</h2>
            <p>Fale com a equipe da Unaessential, conte o que você deseja cuidar e tire suas dúvidas antes de agendar.</p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
            <WhatsAppIcon /> Quero mais informações
          </a>
        </section>
      </main>
    </div>
  );
}
