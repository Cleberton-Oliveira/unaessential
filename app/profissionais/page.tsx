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

type ProfileTab = "sobre" | "trajetoria" | "formacoes" | "servicos";

type Professional = {
  id: string;
  name: string;
  role: string;
  subtitle: string;
  image: string;
  imagePosition?: string;
  alt: string;
  summary: string;
  experience: string;
  about: string[];
  journey: { title: string; text: string }[];
  education: { title: string; type: string; text?: string; featured?: boolean }[];
  services: { name: string; description?: string; featured?: boolean }[];
  detailsLabel: string;
  detailsEyebrow: string;
  detailsTitle: string;
  quote: string;
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
    imagePosition: "center 24%",
    alt: "Laura Araujo, CEO e esteticista da Unaessential",
    summary: "Técnicas manuais, terapias integrativas e tecnologias em atendimentos personalizados.",
    experience: "Mais de 10 anos de experiência em estética, saúde e bem-estar.",
    about: [
      "Laura iniciou sua trajetória na Fisioterapia, mas encontrou na Estética e Cosmetologia a possibilidade de unir massagens, tecnologias e cuidado integral. Desde então, construiu uma atuação voltada tanto aos resultados estéticos quanto ao bem-estar físico e emocional.",
      "A experiência em franquias mostrou a ela que o atendimento precisava ir além de metas e protocolos engessados. Mais tarde, ao acompanhar em domicílio uma cliente com linfedema, passou a estudar profundamente linfedema, lipedema e lipolinfedema, especializando-se e trabalhando em uma clínica dedicada ao tema em Florianópolis.",
      "A Unaessential nasceu dessa visão: oferecer presença, escuta e protocolos personalizados em um ambiente no qual estética, saúde e acolhimento caminham juntos. Durante sua especialização, Laura também descobriu que tem lipedema, ampliando ainda mais sua compreensão e conexão com cada jornada de cuidado.",
    ],
    journey: [
      { title: "Da fisioterapia à estética", text: "Laura iniciou a faculdade de Fisioterapia, mas, a dois anos da formação, percebeu que seu caminho não estava exatamente na reabilitação. Migrou para Estética e Cosmetologia, área em que encontrou a união entre massagens, bem-estar e tecnologias capazes de cuidar de questões que afetam a autoestima de muitas mulheres, como flacidez e gordura localizada." },
      { title: "Um propósito encontrado no cuidado", text: "Depois de vivenciar franquias muito orientadas ao lucro, Laura escolheu atender com presença e combinar resultados estéticos com técnicas de relaxamento. Durante os atendimentos em domicílio, conheceu uma cliente com linfedema e passou a estudar também lipedema e lipolinfedema. Especializou-se, trabalhou em uma clínica dedicada ao lipedema em Florianópolis e, já envolvida com esse propósito, descobriu que ela mesma também tem a condição." },
      { title: "Nasce a Unaessential", text: "A Unaessential nasceu para reunir tudo o que Laura considera essencial em uma jornada de cuidado: técnica, personalização, bem-estar físico e acolhimento emocional. Um lugar em que cada atendimento respeita a pessoa como um todo e busca aliviar não apenas inseguranças estéticas, mas também desconfortos como edema, sensibilidade, peso e dores." },
    ],
    education: [
      { title: "Cosmetologia e Estética", type: "Graduação — UNISUL, 2017" },
      { title: "Terapias Integrativas e Complementares", type: "Pós-graduação — Instituto Fisiomar" },
      { title: "Lipedema e Linfedema", type: "Especialização — Dra. Valquíria Monteiro" },
      { title: "Criolipólise para pernas e braços", type: "Especialização", text: "Formação específica com aplicações voltadas também ao cuidado de pessoas com lipedema." },
      { title: "Criolipólise para abdômen, costas e mama", type: "Especialização", text: "Aprofundamento em protocolos e particularidades das regiões corporais." },
      { title: "Criolipólise para colo, pescoço, papada, contorno facial e face", type: "Especialização", text: "Formação direcionada às regiões delicadas e ao contorno facial." },
      { title: "Método próprio de criolipólise", type: "Método exclusivo", text: "A experiência clínica e os diferentes referenciais estudados deram origem a um método exclusivo desenvolvido por Laura.", featured: true },
      { title: "Método Renata França", type: "Aperfeiçoamento" },
      { title: "Método Amanda Fernandes", type: "Aperfeiçoamento" },
      { title: "Lipoescultura gessada", type: "Formação" },
      { title: "Harmonização corporal e facial não invasiva", type: "Especialização — Chris Tofoli" },
      { title: "Tecnologias estéticas", type: "Especialização — Aline Canicais" },
    ],
    services: [
      { name: "Criolipólise — método exclusivo", description: "Método exclusivo desenvolvido pela profissional para lipedema, gordura localizada e flacidez de pele.", featured: true },
      { name: "Tratamento para lipedema", description: "Drenagem linfática combinada a tecnologias para desinflamar, melhorar a circulação e aliviar a sensação de peso e as dores, com foco na redução dos sintomas e no controle da evolução do lipedema." },
      { name: "Tratamento corporal", description: "Protocolos para gordura localizada, flacidez, celulite e outras necessidades corporais." },
      { name: "Tratamento facial", description: "Cuidados para gordura, flacidez, manchas e outras necessidades da pele." },
      { name: "Drenagem linfática para gestantes e lactantes", description: "Atendimento especializado e adaptado às necessidades de cada fase." },
      { name: "Drenagem linfática pré e pós-operatória", description: "Protocolo especializado com tecnologias associadas para favorecer uma recuperação mais rápida." },
      { name: "Limpeza de pele", description: "Inclui peeling de diamante e extração manual e a vácuo para uma pele limpa e radiante, sempre respeitando a sensibilidade, a dor e os limites da pele para evitar desconfortos e manchas desnecessárias." },
      { name: "Massagem relaxante", description: "Pode combinar pedras quentes, ventosas, pistola de liberação miofascial, LED para desinflamar e outros recursos." },
    ],
    detailsLabel: "Formações",
    detailsEyebrow: "Formação & aperfeiçoamento",
    detailsTitle: "Conhecimento em movimento.",
    quote: "Mais do que resultados estéticos, acredito em oferecer conforto, ética, presença e acolhimento.",
    values: ["Acolhimento", "Escuta", "Resultado"],
    whatsappUrl: "https://wa.me/5548991904131?text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20e%20agendar%20com%20a%20Laura%20Araujo",
  },
  {
    id: "andreza-saraiva",
    name: "Andreza Saraiva",
    role: "Biomédica Esteta & Tricologista",
    subtitle: "Saúde capilar, estética avançada e arquitetura da imagem",
    image: "/image/profissionais/Andreza.jpeg",
    imagePosition: "center 31%",
    alt: "Andreza Saraiva, biomédica esteta e tricologista da Unaessential",
    summary: "Ciência, tecnologia e olhar integrativo para cuidar dos cabelos, da pele e da imagem.",
    experience: "Mais de 30 anos de experiência dedicados à beleza, saúde e bem-estar.",
    about: [
      "Andreza Saraiva é biomédica esteta, tricologista e arquiteta de imagem. Sua atuação é voltada a quem deseja cuidar dos cabelos e da pele de forma integrativa, unindo ciência, tecnologia e um olhar individualizado.",
      "Em cada consulta, investiga as possíveis causas das alterações capilares e estéticas para criar protocolos personalizados, respeitando a história, o estilo de vida e os objetivos de cada paciente.",
      "Mais do que tratar sintomas, seu propósito é promover saúde, autoestima e resultados duradouros por meio de uma experiência de cuidado, acolhimento e excelência.",
    ],
    journey: [
      { title: "Mais de três décadas de cuidado", text: "Uma trajetória dedicada à beleza, à saúde e ao bem-estar, construída com estudo contínuo e atenção às transformações de cada paciente." },
      { title: "Investigação e individualidade", text: "Cada atendimento começa com uma avaliação cuidadosa das possíveis causas das alterações capilares e estéticas, considerando história, rotina e objetivos." },
      { title: "Ciência que acolhe", text: "Protocolos personalizados combinam tecnologias avançadas, estética regenerativa e uma visão integrativa para promover resultados naturais e duradouros." },
    ],
    education: [
      { title: "Tricologia Integrativa", type: "Saúde capilar", text: "Avaliação clínica detalhada e protocolos personalizados para investigar queda de cabelo e alterações do couro cabeludo." },
      { title: "Terapia Capilar", type: "Tratamento", text: "Fortalecimento dos fios, controle da queda e estímulo ao crescimento com tecnologias regenerativas e ativos selecionados." },
      { title: "Head Spa Terapêutico", type: "Experiência", text: "Massagem, aromaterapia, limpeza do couro cabeludo e cuidados específicos para saúde capilar e relaxamento profundo." },
      { title: "Harmonização Facial", type: "Estética avançada", text: "Procedimentos minimamente invasivos que valorizam proporções, naturalidade e a beleza individual." },
      { title: "Harmonização Corporal", type: "Estética avançada", text: "Protocolos para contornos, qualidade da pele, flacidez, estímulo de colágeno e equilíbrio das proporções corporais." },
      { title: "Estética Regenerativa", type: "Regeneração", text: "Tratamentos que estimulam o reparo dos tecidos, a produção de colágeno e a revitalização progressiva da pele." },
      { title: "Tecnologias Avançadas", type: "Alta performance", text: "Equipamentos de última geração para potencializar tratamentos faciais, corporais e capilares baseados em evidências." },
      { title: "Visagismo e Arquitetura da Imagem", type: "Imagem pessoal", text: "Análise de traços, proporções, personalidade e estilo de vida para construir uma imagem autêntica e harmoniosa." },
    ],
    services: [
      { name: "Terapia capilar feminina e masculina" },
      { name: "Botox" },
      { name: "Bioestimulador" },
      { name: "Microagulhamento com ou sem sangria" },
      { name: "Ozônio" },
      { name: "Head Spa" },
      { name: "Subcisão" },
      { name: "Harmonização corporal e facial com injetáveis" },
    ],
    detailsLabel: "Especialidades",
    detailsEyebrow: "Tratamentos & especialidades",
    detailsTitle: "Ciência, saúde e beleza em harmonia.",
    quote: "Ciência, saúde e beleza em perfeita harmonia.",
    values: ["Ciência", "Individualidade", "Excelência"],
    whatsappUrl: "https://wa.me/5548991904131?text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20e%20agendar%20com%20a%20Andreza%20Saraiva",
  },
  {
    id: "luana-finco",
    name: "Luana Finco",
    role: "Massoterapeuta & Cabeleireira",
    subtitle: "Terapias integrativas, bem-estar e cuidado capilar",
    image: "/image/profissionais/Luana-Finco.jpeg",
    imagePosition: "center 28%",
    alt: "Luana Finco, massoterapeuta e cabeleireira da Unaessential",
    summary: "Massoterapia, experiências de SPA e técnicas integrativas conduzidas com uma visão holística.",
    experience: "Técnicas integrativas desde 2020 e atuação em massoterapia desde 2021.",
    about: [
      "Luana Finco é massoterapeuta, cabeleireira e terapeuta holística. Na Unaessential, realiza protocolos de massagens, Head Spa, Day Spa, plástica dos pés, SPA dos pés e outros cuidados voltados à saúde, à beleza e ao bem-estar.",
      "Sua atuação combina técnicas manuais e integrativas para compreender cada pessoa de forma ampla, respeitando as necessidades do corpo, da mente e do momento vivido.",
      "Com uma abordagem acolhedora e individualizada, busca proporcionar leveza, equilíbrio e resultados que façam sentido para cada jornada de cuidado.",
    ],
    journey: [
      { title: "O início nas práticas integrativas", text: "Desde 2020, Luana trabalha com técnicas integrativas e desenvolve uma abordagem orientada pela escuta, pelo equilíbrio e pela visão holística." },
      { title: "A massoterapia como caminho", text: "Em 2021, aprofundou sua atuação em massoterapia, reunindo diferentes técnicas manuais para aliviar tensões, recuperar movimentos e promover bem-estar." },
      { title: "Cuidado completo na Unaessential", text: "Hoje, combina massagens, terapias integrativas, experiências de SPA e cuidados capilares em protocolos personalizados, olhando para cada pessoa como um todo." },
    ],
    education: [
      { title: "Massoterapia", type: "Formação profissional" },
      { title: "Liberação Miofascial", type: "Aperfeiçoamento" },
      { title: "Ventosaterapia", type: "Técnica integrativa" },
      { title: "Liberação Muscular Sistêmica", type: "Aperfeiçoamento" },
      { title: "Terapia Holística", type: "Formação" },
      { title: "ThetaHealing", type: "Técnica integrativa" },
      { title: "Terapia Multifuncional", type: "Formação" },
    ],
    services: [
      { name: "Massagens integrativas", description: "Atendimento 100% manual ou combinado com pedras quentes, ventosas, bambu e pantalas." },
      { name: "Liberação miofascial" },
      { name: "Liberação muscular sistêmica" },
      { name: "Head Spa" },
      { name: "Day Spa" },
      { name: "Plástica dos pés" },
      { name: "SPA dos pés" },
    ],
    detailsLabel: "Formações",
    detailsEyebrow: "Formação & técnicas",
    detailsTitle: "Olhar o todo para cuidar melhor.",
    quote: "Acredito que é preciso olhar o todo para alcançar objetivos e construir resultados com saúde, leveza, beleza e bem-estar.",
    values: ["Saúde", "Leveza", "Bem-estar"],
    whatsappUrl: "https://wa.me/5548991904131?text=Oii%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20e%20agendar%20com%20a%20Luana%20Finco",
  },

];

const getServiceWhatsappUrl = (professional: Professional, serviceName: string) => {
  const message = `Oii, vi no site o serviço de ${serviceName} e tenho interesse em agendar com a profissional ${professional.name}.`;
  return `https://wa.me/5548991904131?text=${encodeURIComponent(message)}`;
};

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
            <p>Cada perfil reúne função, experiência, trajetória e especialidades. Selecione uma profissional para conhecer todos os detalhes.</p>
          </header>

          <div className={styles.teamGrid}>
            {professionals.map((professional, index) => (
              <article className={`${styles.professionalCard} ${styles.revealScale}`} data-professional-reveal key={professional.id}>
                <button className={styles.cardImage} onClick={() => openProfile(professional)} aria-label={`Conhecer o perfil de ${professional.name}`}>
                  <Image src={professional.image} alt={professional.alt} fill sizes="(max-width: 600px) 100vw, 390px" style={{ objectPosition: professional.imagePosition }} />
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
              <div className={styles.modalPhoto}><Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 760px) 100vw, 390px" style={{ objectPosition: selected.imagePosition }} /></div>
              <span className={styles.modalRole}>{selected.role}</span>
              <h2>{selected.name}</h2>
              <p>{selected.subtitle}</p>
              <small>{selected.experience}</small>
              <a href={selected.whatsappUrl} target="_blank" rel="noopener noreferrer">Agendar com {selected.name.split(" ")[0]} <WhatsAppIcon /></a>
            </aside>

            <div className={styles.modalDetails}>
              <nav className={styles.modalTabs} aria-label="Informações do perfil">
                {(["sobre", "trajetoria", "formacoes", "servicos"] as ProfileTab[]).map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={activeTab === tab ? styles.tabActive : ""} aria-pressed={activeTab === tab}>
                    {tab === "sobre" ? "Sobre" : tab === "trajetoria" ? "Trajetória" : tab === "formacoes" ? selected.detailsLabel : "Serviços"}
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
                    <blockquote>“{selected.quote}”</blockquote>
                  </div>
                )}

                {activeTab === "formacoes" && (
                  <div className={styles.educationContent}>
                    <span className={styles.modalEyebrow}>{selected.detailsEyebrow}</span>
                    <h3>{selected.detailsTitle}</h3>
                    <div className={styles.educationList}>{selected.education.map((item) => <article key={item.title} style={item.featured ? { borderColor: "var(--green)", background: "linear-gradient(135deg, var(--sage), #fff)" } : undefined}><SchoolRoundedIcon /><span><small>{item.featured ? "Destaque · " : ""}{item.type}</small><b>{item.title}</b>{item.text ? <p>{item.text}</p> : null}</span></article>)}</div>
                  </div>
                )}

                {activeTab === "servicos" && (
                  <div className={styles.servicesContent}>
                    <span className={styles.modalEyebrow}>Serviços realizados na clínica</span>
                    <h3>Escolha seu próximo <em>momento de cuidado.</em></h3>
                    <div className={styles.servicesList}>
                      {selected.services.map((service) => (
                        <article key={service.name} className={service.featured ? styles.serviceFeatured : ""}>
                          <div>
                            {service.featured ? <small>Destaque</small> : null}
                            <h4>{service.name}</h4>
                            {service.description ? <p>{service.description}</p> : null}
                          </div>
                          <a href={getServiceWhatsappUrl(selected, service.name)} target="_blank" rel="noopener noreferrer" aria-label={`Agendar ${service.name} com ${selected.name}`}>
                            Agendar <WhatsAppIcon />
                          </a>
                        </article>
                      ))}
                    </div>
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
