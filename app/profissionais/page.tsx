"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./profissionais.module.css";

type ProfileTab = "sobre" | "trajetoria" | "formacoes";

type Professional = {
  id: string;
  name: string;
  role: string;
  subtitle: string;
  image: string;
  alt: string;
  summary: string;
  experience: string;
  about: string[];
  journey: { title: string; text: string }[];
  education: { title: string; type: string }[];
  values: string[];
  whatsappUrl: string;
};

const professionals: Professional[] = [
  {
    id: "laura-araujo",
    name: "Laura Araujo",
    role: "CEO & Esteticista",
    subtitle: "Fundadora e idealizadora da Unaessential",
    image: "/image/profissionais/Laura.jpg",
    alt: "Laura Araujo, CEO e esteticista da Unaessential",
    summary: "Técnicas manuais, terapias integrativas e tecnologias em atendimentos personalizados.",
    experience: "Mais de 10 anos de experiência em estética, saúde e bem-estar.",
    about: [
      "Laura une técnicas manuais, terapias integrativas e tecnologias estéticas para criar atendimentos personalizados, com foco em resultados reais, conforto e acolhimento.",
      "Sua forma de trabalhar parte de uma escuta cuidadosa: cada sessão considera o que o corpo ou o rosto realmente precisa naquele momento e como vem respondendo ao tratamento.",
      "Na Unaessential, o foco não é a venda a qualquer custo, mas a história, o momento e aquilo que realmente faz sentido para cada pessoa.",
    ],
    journey: [
      { title: "Experiência que virou visão", text: "Ao longo de mais de uma década em clínicas e consultórios, Laura acompanhou os bastidores da estética e percebeu que protocolos engessados nem sempre respeitavam a real necessidade de cada pessoa." },
      { title: "Conhecimento em movimento", text: "A busca constante por formação reuniu técnicas manuais, tecnologias e terapias integrativas em um repertório amplo e conectado." },
      { title: "Nasce a Unaessential", text: "Uma clínica focada em pessoas, não em metas: cada jornada é ajustada à história, aos objetivos e à resposta de quem escolhe confiar seu cuidado à equipe." },
    ],
    education: [
      { title: "Método Renata França", type: "Aperfeiçoamento" },
      { title: "Método Amanda Fernandes", type: "Aperfeiçoamento" },
      { title: "Lipoescultura gessada", type: "Formação" },
      { title: "Lipedema e linfedema", type: "Especialização" },
      { title: "Terapias integrativas", type: "Pós-graduação" },
      { title: "Harmonização corporal e facial não invasiva", type: "Especialização com Chris Tofoli" },
      { title: "Tecnologias estéticas", type: "Especialização com Aline Canicais" },
    ],
    values: ["Acolhimento", "Escuta", "Resultado"],
    whatsappUrl: "https://wa.me/5548991904131?text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20e%20agendar%20com%20a%20Laura%20Araujo",
  },
];

export default function ProfissionaisPage() {
  const [selected, setSelected] = useState<Professional | null>(null);
  const [activeTab, setActiveTab] = useState<ProfileTab>("sobre");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-professional-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealVisible);
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -35px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  const openProfile = (professional: Professional) => {
    setSelected(professional);
    setActiveTab("sobre");
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroOrbitOne} aria-hidden="true" />
        <span className={styles.heroOrbitTwo} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrowLight}>Quem cuida de você</span>
          <h1>Pessoas que <em>cuidam de pessoas.</em></h1>
          <p>Conhecimento, escuta e presença para construir atendimentos que respeitam a sua história e o seu momento.</p>
          <a href="#equipe" className={styles.heroLink}>Conhecer a equipe <ArrowForwardRoundedIcon /></a>
        </div>
        <div className={styles.heroPortrait}>
          <Image src={professionals[0].image} alt={professionals[0].alt} fill priority sizes="(max-width: 760px) 60vw, 28vw" />
          <span><small>Fundadora</small><b>CEO & Esteticista</b></span>
        </div>
      </section>

      <main>
        <section className={styles.teamSection} id="equipe">
          <header className={`${styles.sectionHeader} ${styles.reveal}`} data-professional-reveal>
            <div><span className={styles.eyebrow}>Nossa equipe</span><h2>Conheça nossos<br /><em>profissionais.</em></h2></div>
            <p>Cada perfil reúne função, experiência, trajetória e formações. Selecione uma profissional para conhecer todos os detalhes.</p>
          </header>

          <div className={styles.teamGrid}>
            {professionals.map((professional, index) => (
              <article className={`${styles.professionalCard} ${styles.revealScale}`} data-professional-reveal key={professional.id}>
                <button className={styles.cardImage} onClick={() => openProfile(professional)} aria-label={`Conhecer o perfil de ${professional.name}`}>
                  <Image src={professional.image} alt={professional.alt} fill sizes="(max-width: 600px) 100vw, 390px" />
                  <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.cardRole}>{professional.role}</span>
                </button>
                <div className={styles.cardContent}>
                  <span>{professional.subtitle}</span>
                  <h3>{professional.name}</h3>
                  <p>{professional.summary}</p>
                  <div className={styles.cardActions}>
                    <button onClick={() => openProfile(professional)}>Ver perfil completo <ArrowForwardRoundedIcon /></button>
                    <a href={professional.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Agendar com ${professional.name}`}><WhatsAppIcon /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.compactCta}>
          <div className={`${styles.ctaSymbol} ${styles.revealScale}`} data-professional-reveal><Image src="/logo/icon_unaessential.svg" alt="" width={30} height={54} /></div>
          <div className={`${styles.ctaCopy} ${styles.reveal}`} data-professional-reveal>
            <span className={styles.eyebrowLight}>Cuidado personalizado</span>
            <h2>Não sabe com quem agendar?</h2>
            <p>Conte seu objetivo para a equipe e ajudamos você a encontrar a profissional e o cuidado ideais.</p>
          </div>
          <Link href="/agendar" className={styles.ctaButton}>Agendar avaliação <ArrowForwardRoundedIcon /></Link>
        </section>
      </main>

      {selected && (
        <div className={styles.modalBackdrop} role="dialog" aria-modal="true" aria-label={`Perfil profissional de ${selected.name}`} onClick={() => setSelected(null)}>
          <article className={styles.profileModal} onClick={(event) => event.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelected(null)} aria-label="Fechar perfil"><CloseRoundedIcon /></button>
            <aside className={styles.modalIdentity}>
              <div className={styles.modalPhoto}><Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 760px) 100vw, 390px" /></div>
              <span className={styles.modalRole}>{selected.role}</span>
              <h2>{selected.name}</h2>
              <p>{selected.subtitle}</p>
              <small>{selected.experience}</small>
              <a href={selected.whatsappUrl} target="_blank" rel="noopener noreferrer">Agendar com {selected.name.split(" ")[0]} <WhatsAppIcon /></a>
            </aside>

            <div className={styles.modalDetails}>
              <nav className={styles.modalTabs} aria-label="Informações do perfil">
                {(["sobre", "trajetoria", "formacoes"] as ProfileTab[]).map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? styles.tabActive : ""} aria-pressed={activeTab === tab}>
                    {tab === "sobre" ? "Sobre" : tab === "trajetoria" ? "Trajetória" : "Formações"}
                  </button>
                ))}
              </nav>

              <div className={styles.tabContent} key={activeTab}>
                {activeTab === "sobre" && (
                  <div className={styles.aboutContent}>
                    <span className={styles.modalEyebrow}>Perfil profissional</span>
                    <h3>Cuidado com técnica,<br /><em>escuta e propósito.</em></h3>
                    {selected.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    <div className={styles.valueList}>{selected.values.map((value) => <span key={value}><FavoriteBorderRoundedIcon /> {value}</span>)}</div>
                  </div>
                )}

                {activeTab === "trajetoria" && (
                  <div className={styles.journeyList}>
                    <span className={styles.modalEyebrow}>Trajetória & propósito</span>
                    {selected.journey.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
                    <blockquote>“Mais do que resultados estéticos, acredito em oferecer conforto, ética, presença e acolhimento.”</blockquote>
                  </div>
                )}

                {activeTab === "formacoes" && (
                  <div className={styles.educationContent}>
                    <span className={styles.modalEyebrow}>Formação & aperfeiçoamento</span>
                    <h3>Conhecimento em<br /><em>movimento.</em></h3>
                    <div className={styles.educationList}>{selected.education.map((item) => <article key={item.title}><SchoolRoundedIcon /><span><small>{item.type}</small><b>{item.title}</b></span></article>)}</div>
                  </div>
                )}
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
