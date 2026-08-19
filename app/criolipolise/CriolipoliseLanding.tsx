"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./criolipolise.module.css";
import { criolipoliseFaqs } from "./faq";

type TreatmentKey = "lipedema" | "gordura" | "flacidez";

type Treatment = {
  key: TreatmentKey;
  label: string;
  hero: string;
  title: string;
  intro: string;
  description: string;
  benefits: { title: string; description: string; icon: "snow" | "heart" | "spark" | "chart" }[];
  testimonials: { name: string; text: string }[];
};

const WHATSAPP_PHONE = "5548991904131";

function buildWhatsAppUrl(objective: string) {
  const text = `Olá! Vim pela página de Criolipólise e gostaria de saber mais sobre o tratamento para ${objective}.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

const treatments: Treatment[] = [
  {
    key: "lipedema",
    label: "Lipedema",
    hero: "Lipedema",
    title: "Tratamento para lipedema",
    intro: "Uma abordagem cuidadosa para acolher as particularidades do seu corpo.",
    description:
      "O lipedema pede escuta, individualização e acompanhamento responsável. Na Unaessential, cada jornada começa com uma avaliação detalhada para entender sintomas, sensibilidade, estágio e objetivos. A criolipólise de placas pode integrar um protocolo estético multidisciplinar, combinado a técnicas manuais e cuidados complementares, sempre respeitando as respostas do seu corpo. O tratamento estético não substitui o acompanhamento médico.",
    benefits: [
      { title: "Cuidado individualizado", description: "Parâmetros e regiões são definidos somente após avaliação, considerando sensibilidade e objetivos pessoais.", icon: "heart" },
      { title: "Tecnologia não invasiva", description: "As placas promovem resfriamento controlado da região, sem cortes e sem necessidade de anestesia.", icon: "snow" },
      { title: "Protocolo integrado", description: "A estratégia pode reunir criolipólise, terapias manuais, suplementação orientada e acompanhamento.", icon: "spark" },
      { title: "Evolução acompanhada", description: "Registros e reavaliações ajudam a observar respostas e ajustar os próximos passos com responsabilidade.", icon: "chart" },
    ],
    testimonials: [
      { name: "Patrícia Aguiar", text: "A Laura é uma excelente profissional! Faço drenagem para tratamento do lipedema com ela e obtive uma melhora significativa. O espaço é maravilhoso e aconchegante." },
      { name: "Caroliny Matos", text: "Desde a primeira sessão já tivemos um resultado imediato, não só em volume, mas na sensação de peso e queimação. Atendimento sempre cuidadoso e com profissionalismo exemplar." },
    ],
  },
  {
    key: "gordura",
    label: "Gordura localizada",
    hero: "Gordura localizada",
    title: "Tratamento para gordura localizada",
    intro: "Tecnologia e estratégia para cuidar das áreas que mais incomodam você.",
    description:
      "A criolipólise de placas utiliza resfriamento controlado para atuar em depósitos de gordura localizada. Por trabalhar com placas, o tratamento permite atender diferentes regiões ao mesmo tempo, sem sucção e com mais conforto. Antes da sessão, avaliamos áreas, objetivos e características individuais para definir a quantidade de placas, o número de sessões e os cuidados que podem complementar o protocolo.",
    benefits: [
      { title: "Ação localizada", description: "As placas são posicionadas nas regiões definidas durante a avaliação para um cuidado direcionado.", icon: "snow" },
      { title: "Sem sucção", description: "A tecnologia de placas dispensa o vácuo e pode proporcionar uma sessão mais confortável em diferentes áreas.", icon: "heart" },
      { title: "Mais áreas por sessão", description: "É possível posicionar múltiplas placas e planejar diferentes regiões de acordo com cada objetivo.", icon: "spark" },
      { title: "Acompanhamento do resultado", description: "A evolução é progressiva e acompanhada por registros e reavaliações ao longo do protocolo.", icon: "chart" },
    ],
    testimonials: [
      { name: "Rita Hermann", text: "Estou muito satisfeita com o tratamento para redução de medidas abdominais e flacidez. O procedimento teve respostas surpreendentes e foi realizado por uma profissional muito qualificada." },
      { name: "Dayanne Nogueira", text: "A Unaessential foi um grande achado na minha vida! Profissionais competentes e que buscam, de verdade, a qualidade de vida de seus pacientes." },
    ],
  },
  {
    key: "flacidez",
    label: "Flacidez",
    hero: "Flacidez",
    title: "Tratamento para flacidez",
    intro: "Protocolos combinados para apoiar contorno, firmeza e qualidade da pele.",
    description:
      "A flacidez pode ter diferentes causas e graus, por isso a avaliação é indispensável. A criolipólise pode fazer parte de um plano estético que combina tecnologias e cuidados complementares voltados ao contorno corporal e à qualidade da pele. Na Unaessential, analisamos tecido, região, rotina e objetivos para indicar um protocolo coerente e acompanhar sua evolução sem promessas irreais.",
    benefits: [
      { title: "Avaliação completa", description: "Analisamos textura, firmeza, região e objetivos antes de indicar qualquer combinação de tratamentos.", icon: "heart" },
      { title: "Estratégia combinada", description: "A criolipólise pode ser associada a outras tecnologias e técnicas conforme a avaliação profissional.", icon: "spark" },
      { title: "Cuidado progressivo", description: "O protocolo respeita o tempo de resposta do organismo e é reavaliado ao longo da jornada.", icon: "chart" },
      { title: "Qualidade da pele", description: "O acompanhamento observa não apenas medidas, mas também contorno, textura e percepção de bem-estar.", icon: "snow" },
    ],
    testimonials: [
      { name: "Rita Hermann", text: "Fiz o tratamento para redução de medidas e flacidez simultaneamente, com respostas surpreendentes. O ambiente também é muito aconchegante e acolhedor." },
      { name: "Rosenilda Pinheiro", text: "A experiência foi maravilhosa. O atendimento é impecável do início ao fim e dá para perceber o cuidado em cada detalhe e o profissionalismo de toda a equipe." },
    ],
  },
];

const protocols = [
  {
    title: "Protocolo Una",
    badge: "Essencial",
    price: "1.990,00",
    theme: "light",
    description: "O primeiro passo para iniciar seu cuidado com avaliação, tecnologia e acompanhamento.",
    icon: <CheckRoundedIcon />,
    items: ["Primeira sessão de análise", "Sessões de criolipólise", "Suplementação orientada", "Registro de evolução"],
  },
  {
    title: "Protocolo Plus",
    badge: "Mais escolhido",
    price: "2.490,00",
    theme: "featured",
    description: "Uma jornada ampliada com mais recursos e reavaliações entre as etapas do protocolo.",
    icon: <AutoAwesomeRoundedIcon />,
    items: ["Primeira sessão de análise", "Sessões de criolipólise", "Suplementação orientada", "Reavaliações programadas"],
    featured: true,
  },
  {
    title: "Protocolo Multidisciplinar",
    badge: "Completo",
    price: "3.090,00",
    theme: "light",
    description: "Cuidado integrado para objetivos que pedem diferentes especialidades e abordagens.",
    icon: <VerifiedRoundedIcon />,
    items: ["Avaliação multidisciplinar", "Sessões de criolipólise", "Suplementação orientada", "Plano integrado de cuidado", "Acompanhamento com nutricionista", "Acompanhamento com personal trainer"],
  },
];

function BenefitIcon({ icon }: { icon: Treatment["benefits"][number]["icon"] }) {
  if (icon === "snow") return <AcUnitRoundedIcon />;
  if (icon === "heart") return <FavoriteBorderRoundedIcon />;
  if (icon === "chart") return <InsightsRoundedIcon />;
  return <AutoAwesomeRoundedIcon />;
}

function Typewriter() {
  const words = treatments.map((item) => item.hero);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const complete = text === word;
    const empty = text === "";
    const timer = window.setTimeout(() => {
      if (complete && !deleting) setDeleting(true);
      else if (empty && deleting) {
        setDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, complete && !deleting ? 1800 : deleting ? 40 : 72);
    return () => window.clearTimeout(timer);
  }, [deleting, text, wordIndex, words]);

  return <span className={styles.typewriter}>{text}<span className={styles.cursor} aria-hidden="true" /></span>;
}

export function CriolipoliseLanding() {
  const [selected, setSelected] = useState<TreatmentKey>("lipedema");
  const [openBenefit, setOpenBenefit] = useState(0);
  const [resultIndex, setResultIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const treatment = useMemo(() => treatments.find((item) => item.key === selected)!, [selected]);
  const results = [
    { src: "/image/resultados/Criopos25.jpg", alt: "Antes e depois de uma sessão de criolipólise de placas após 25 dias" },
    { src: "/image/resultados/criopos252.jpg", alt: "Segundo resultado de uma sessão de criolipólise de placas após 25 dias" },
  ];

  const selectTreatment = (key: TreatmentKey) => {
    setSelected(key);
    setOpenBenefit(0);
    setTestimonialIndex(0);
    document.getElementById("detalhes-crio")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <video className={styles.heroVideo} src="/Reels/teccrio.mp4" autoPlay muted loop playsInline poster="/image/tecnologias/crio.jpg" />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Criolipólise de placas</span>
          <h1>Tratamento para<br /><Typewriter /></h1>
          <p>Protocolos personalizados que unem tecnologia, avaliação e acompanhamento para cuidar do seu corpo de forma consciente.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#protocolos-crio">Conhecer protocolos <ArrowForwardRoundedIcon /></a>
            <a className={styles.secondaryLink} href="#objetivos-crio">Escolher meu objetivo</a>
          </div>
        </div>
        <div className={styles.heroTrust}>
          <span><b>01</b> Avaliação individual</span>
          <span><b>02</b> Tecnologia não invasiva</span>
          <span><b>03</b> Evolução acompanhada</span>
        </div>
      </section>

      <section className={styles.objectives} id="objetivos-crio">
        <div className={styles.sectionHeader}>
          <div><span className={styles.eyebrow}>Escolha o seu objetivo</span><h2>Um cuidado, três caminhos</h2></div>
          <p>Selecione uma opção para conhecer a abordagem, as vantagens e os protocolos indicados.</p>
        </div>
        <div className={styles.objectiveGrid}>
          {treatments.map((item, index) => (
            <button key={item.key} onClick={() => selectTreatment(item.key)} className={`${styles.objectiveCard} ${selected === item.key ? styles.objectiveActive : ""}`} aria-pressed={selected === item.key}>
              <span className={styles.objectiveNumber}>0{index + 1}</span>
              <span className={styles.objectiveIcon}>{index === 0 ? <FavoriteBorderRoundedIcon /> : index === 1 ? <AcUnitRoundedIcon /> : <SpaRoundedIcon />}</span>
              <strong>{item.label}</strong>
              <ArrowForwardRoundedIcon />
            </button>
          ))}
        </div>
      </section>

      <section className={styles.detail} id="detalhes-crio">
        <div className={styles.detailVisual}>
          <div className={styles.deviceHalo} />
          <Image src="/image/tecnologias/crio.jpg" alt="Equipamento de criolipólise de placas utilizado na Unaessential" width={860} height={1280} className={styles.deviceImage} />
          <span className={`${styles.floatingIcon} ${styles.floatingIconTop}`}><AcUnitRoundedIcon /><small>Resfriamento<br />controlado</small></span>
          <span className={`${styles.floatingIcon} ${styles.floatingIconBottom}`}><FavoriteBorderRoundedIcon /><small>Cuidado<br />individualizado</small></span>
          <span className={`${styles.floatingIcon} ${styles.floatingIconSide}`}><AutoAwesomeRoundedIcon /><small>Tecnologia<br />não invasiva</small></span>
          <span className={styles.verticalText}>Tecnologia & cuidado</span>
        </div>
        <div className={styles.detailCopy} key={selected}>
          <span className={styles.eyebrow}>Sobre o tratamento</span>
          <h2>{treatment.title}</h2>
          <p className={styles.intro}>{treatment.intro}</p>
          <p>{treatment.description}</p>
          <a className={styles.inlineLink} href={buildWhatsAppUrl(treatment.label)} target="_blank" rel="noopener noreferrer">Conversar sobre meu objetivo <WhatsAppIcon /></a>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.benefitsHeader}>
          <div><span className={styles.eyebrowLight}>Por que escolher</span><h2>Vantagens</h2></div>
          <p>Confira as vantagens de um tratamento construído a partir da sua avaliação e dos seus objetivos.</p>
        </div>
        <div className={styles.benefitList}>
          {treatment.benefits.map((benefit, index) => {
            const open = openBenefit === index;
            return (
              <button key={benefit.title} className={`${styles.benefitRow} ${open ? styles.benefitOpen : ""}`} onClick={() => setOpenBenefit(open ? -1 : index)} aria-expanded={open}>
                <span className={styles.benefitNumber}>0{index + 1}</span>
                <span className={styles.benefitIcon}><BenefitIcon icon={benefit.icon} /></span>
                <span className={styles.benefitText}><strong>{benefit.title}</strong><span>{benefit.description}</span></span>
                <span className={styles.benefitToggle}>{open ? <CloseRoundedIcon /> : <AddRoundedIcon />}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className={styles.results}>
        <div className={styles.centerHeader}>
          <span className={styles.eyebrow}>Resultados reais</span>
          <h2>Resultados & Feedbacks</h2>
          <p>Registros e relatos de clientes que já viveram a experiência de cuidado da Unaessential.</p>
        </div>
        <div className={styles.resultsGrid}>
          <article className={styles.resultCard}>
            <div className={styles.cardLabel}>Criolipólise de placas · 25 dias</div>
            <div className={styles.resultImageWrap}>
              <Image key={results[resultIndex].src} src={results[resultIndex].src} alt={results[resultIndex].alt} fill sizes="(max-width: 760px) 100vw, 54vw" className={styles.resultImage} />
            </div>
            <p>Resultado após uma sessão. A resposta final é progressiva e varia de pessoa para pessoa.</p>
            <div className={styles.controls}>
              <button onClick={() => setResultIndex((resultIndex + results.length - 1) % results.length)} aria-label="Resultado anterior"><ArrowBackRoundedIcon /></button>
              <span>{resultIndex + 1} / {results.length}</span>
              <button onClick={() => setResultIndex((resultIndex + 1) % results.length)} aria-label="Próximo resultado"><ArrowForwardRoundedIcon /></button>
            </div>
          </article>
          <article className={styles.testimonialCard}>
            <span className={styles.quoteMark}>“</span>
            <blockquote>{treatment.testimonials[testimonialIndex].text}</blockquote>
            <div className={styles.testimonialFooter}>
              <div><span>Cliente Unaessential</span><strong>{treatment.testimonials[testimonialIndex].name}</strong></div>
              <div className={styles.controlsLight}>
                <button onClick={() => setTestimonialIndex((testimonialIndex + treatment.testimonials.length - 1) % treatment.testimonials.length)} aria-label="Depoimento anterior"><ArrowBackRoundedIcon /></button>
                <button onClick={() => setTestimonialIndex((testimonialIndex + 1) % treatment.testimonials.length)} aria-label="Próximo depoimento"><ArrowForwardRoundedIcon /></button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.protocols} id="protocolos-crio">
        <div className={styles.centerHeaderDark}>
          <span className={styles.eyebrowLight}>Sua jornada começa aqui</span>
          <h2>Protocolos para {treatment.label.toLowerCase()}</h2>
          <p>Conheça as opções iniciais. A composição, a quantidade de sessões e o investimento são definidos após avaliação.</p>
        </div>
        <div className={styles.protocolGrid}>
          {protocols.map((protocol) => (
            <article key={protocol.title} className={`${styles.protocolCard} ${protocol.featured ? styles.protocolFeatured : styles.protocolLight}`}>
              <span className={styles.protocolBadge}>{protocol.badge}</span>
              <h3>{protocol.title}<small>{treatment.label}</small></h3>
              <p>{protocol.description}</p>
              <div className={styles.investment}><span>Investimento</span><strong><small>R$</small>{protocol.price}</strong></div>
              <ul>{protocol.items.map((item) => <li key={item}><span>{protocol.icon}</span>{item}</li>)}</ul>
              <a href={buildWhatsAppUrl(`${treatment.label} — ${protocol.title}`)} target="_blank" rel="noopener noreferrer" className={protocol.featured ? styles.primaryButton : styles.outlineButton}>Quero saber mais <WhatsAppIcon /></a>
            </article>
          ))}
        </div>
        <p className={styles.protocolNote}>* A descrição dos protocolos é inicial e deve ser validada pela equipe responsável antes da divulgação comercial.</p>
      </section>

      <section className={styles.faq} id="perguntas-criolipolise">
        <div className={styles.faqIntro}>
          <span className={styles.eyebrow}>Perguntas frequentes</span>
          <h2>Antes de decidir,<br /><em>entenda cada detalhe.</em></h2>
          <p>Reunimos as dúvidas mais comuns sobre sensações, resultados, segurança, criolipólise de placas e cuidados para pessoas com lipedema.</p>
          <a href={buildWhatsAppUrl("criolipólise")} target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>
            Ainda tenho uma dúvida <WhatsAppIcon />
          </a>
        </div>
        <div className={styles.faqList}>
          {criolipoliseFaqs.map((item, index) => {
            const open = openFaq === index;
            const answerId = `resposta-criolipolise-${index}`;
            return (
              <article key={item.question} className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? -1 : index)}
                  aria-expanded={open}
                  aria-controls={answerId}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.question}</strong>
                  <span className={styles.faqToggle}>{open ? <CloseRoundedIcon /> : <AddRoundedIcon />}</span>
                </button>
                <div id={answerId} className={styles.faqAnswer} aria-hidden={!open}>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div><span className={styles.eyebrow}>Comece com uma conversa</span><h2>Seu protocolo começa com uma avaliação individual.</h2></div>
        <Link href="/agendar" className={styles.primaryButton}>Agendar avaliação <ArrowForwardRoundedIcon /></Link>
      </section>
    </div>
  );
}
