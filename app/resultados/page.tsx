"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import GoogleIcon from "@mui/icons-material/Google";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./resultados.module.css";

type ResultSlide = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  alt: string;
};

type Feedback = {
  id: string;
  name: string;
  rating: number;
  text: string;
  treatment?: string;
  publishedAt?: string;
  source?: "google";
};

type GoogleReviewsPayload = {
  configured?: boolean;
  reviews?: Feedback[];
  averageRating?: number;
  totalReviewCount?: number;
};

const resultSlides: ResultSlide[] = [
  {
    id: "resultado-1",
    title: "Evolução corporal",
    category: "Protocolo corporal",
    description: "Registro de antes e depois que evidencia a evolução visual alcançada com um protocolo personalizado e acompanhamento profissional.",
    imageSrc: "/image/resultados/antes_e_depois_1.jpg",
    alt: "Foto de antes e depois ilustrando um resultado de tratamento estético.",
  },
  {
    id: "resultado-2",
    title: "Contorno e medidas",
    category: "Protocolo corporal",
    description: "Sequência fotográfica que destaca mudanças no contorno, no volume e no aspecto da região tratada.",
    imageSrc: "/image/resultados/antes_e_depois_2.jpg",
    alt: "Sequência de fotos mostrando resultado de tratamento com melhora visível.",
  },
  {
    id: "resultado-3",
    title: "Evolução acompanhada",
    category: "Cuidado individualizado",
    description: "Mais um caso acompanhado de perto pela equipe, com registros realizados ao longo da jornada de cuidado.",
    imageSrc: "/image/resultados/antes_e_depois_3.jpg",
    alt: "Foto de antes e depois evidenciando evolução de tratamento.",
  },
  {
    id: "resultado-4",
    title: "Protocolo personalizado",
    category: "Estética integrativa",
    description: "Uma possibilidade de resultado construída a partir de avaliação, objetivos individuais e combinação de cuidados.",
    imageSrc: "/image/resultados/antes_e_depois_4.png",
    alt: "Imagem de antes e depois de tratamento personalizado.",
  },
  {
    id: "resultado-5",
    title: "Acompanhamento pós-cirúrgico",
    category: "Pós-operatório",
    description: "Registro de acompanhamento pós-cirúrgico que evidencia a redução do inchaço e a melhora gradual do contorno.",
    imageSrc: "/image/resultados/poscirurgico.jpg",
    alt: "Antes e depois de tratamento pós-cirúrgico, com redução de inchaço.",
  },
  {
    id: "resultado-6",
    title: "Cuidado facial",
    category: "Protocolo facial",
    description: "Evolução da textura, do viço e da uniformidade da pele após um protocolo estético facial.",
    imageSrc: "/image/resultados/facial.jpg",
    alt: "Antes e depois de tratamento facial, mostrando pele mais uniforme e luminosa.",
  },
  {
    id: "resultado-7",
    title: "Contorno dos braços",
    category: "Protocolo corporal",
    description: "Resultado na região dos braços, com evolução do contorno e do aspecto da pele após uma sequência de atendimentos.",
    imageSrc: "/image/resultados/bracos.png",
    alt: "Antes e depois de tratamento estético em braços.",
  },
  {
    id: "criolipolise-placas-25-1",
    title: "Criolipólise · 25 dias",
    category: "1 sessão · resultado em processo",
    description: "Registro após 25 dias de uma sessão de criolipólise de placas. A evolução final costuma ser observada entre 60 e 90 dias.",
    imageSrc: "/image/resultados/Criopos25.jpg",
    alt: "Resultado de criolipólise de placas após 25 dias de uma sessão.",
  },
  {
    id: "criolipolise-placas-25-2",
    title: "Criolipólise · 25 dias",
    category: "1 sessão · resultado em processo",
    description: "Segundo registro após 25 dias de uma sessão de criolipólise de placas, ainda dentro do período de evolução do tratamento.",
    imageSrc: "/image/resultados/criopos252.jpg",
    alt: "Segundo resultado de criolipólise de placas após 25 dias de uma sessão.",
  },
];

const fallbackFeedbacks: Feedback[] = [
  { id: "rita-hermann", name: "Rita Hermann", rating: 5, treatment: "Redução de medidas e flacidez", text: "Estou muito satisfeita com o tratamento que foi realizado para redução de medidas abdominais e para tratar a flacidez simultaneamente, procedimento este com respostas surpreendentes, realizado pela Laura, profissional muito qualificada, competente e de larga experiência. Sem contar que o ambiente é muito aconchegante e acolhedor. Estou muito satisfeita e SUPER recomendo, uma grande profissional. Com certeza voltarei sempre!" },
  { id: "larissa-lara", name: "Larissa Lara", rating: 5, treatment: "Head Spa", text: "O Head Spa era tudo que eu estava imaginando. Recomendo muito a Unaessential!" },
  { id: "dayanne-nogueira", name: "Dayanne Nogueira", rating: 5, treatment: "Experiência Unaessential", text: "A Unaessential foi um grande achado na minha vida! Profissionais competentes e que buscam, de verdade, a qualidade de vida de seus pacientes." },
  { id: "rosenilda-pinheiro", name: "Rosenilda Pinheiro", rating: 5, treatment: "Bem-estar e autocuidado", text: "A experiência na Estética Integrativa UnaEssential foi simplesmente maravilhosa! O ambiente é acolhedor, com uma energia super tranquila, e o atendimento é impecável do início ao fim. Os procedimentos foram extremamente relaxantes, saí de lá leve, renovada e com uma sensação incrível de bem-estar. Dá para perceber o cuidado em cada detalhe e o profissionalismo de toda a equipe. Sem dúvida, um espaço que vai muito além da estética, proporcionando um verdadeiro momento de autocuidado e equilíbrio. Super indico!" },
  { id: "patricia-aguiar", name: "Patrícia Aguiar", rating: 5, treatment: "Drenagem para lipedema", text: "A Laura é uma excelente profissional! Faço drenagem para tratamento do Lipedema com ela e obtive uma melhora significativa! O espaço é maravilhoso e aconchegante." },
  { id: "michelli-martuscelli", name: "Michelli Martuscelli", rating: 5, treatment: "Terapia capilar e Head Spa", text: "Fiz Terapia Capilar com Head SPA, simplesmente amei! Ambiente climatizado, luz, música relaxante, cheiros dos óleos essenciais maravilhosos! Fiquei quentinha porque tem aquecedor na maca. O procedimento é perfeito do início ao fim. Super recomendo!" },
  { id: "joao-pedro-lourenco", name: "João Pedro Lourenço", rating: 5, treatment: "Atendimento", text: "Excelente serviço e ótimo local de atendimento." },
  { id: "joice-nunes", name: "Joice Nunes", rating: 5, treatment: "Massagem e terapia capilar", text: "Amei a clínica, super aconchegante com ótimas profissionais. Amei a massagem da Laura e o tratamento do meu couro cabeludo. Sucesso, meninas, vocês são maravilhosas!" },
  { id: "caroliny-matos", name: "Caroliny Matos", rating: 5, treatment: "Protocolo para lipedema", text: "Desde a primeira sessão já tivemos um resultado imediato. Não só em volume, mas em sensação de peso e queimação que o lipedema causa. A Laurinha e suas mãozinhas milagrosas fazem total diferença no protocolo de tratamento. É fundamental tê-la cuidando da gente. Sempre atenciosa, cuidadosa e com o profissionalismo exemplar." },
  { id: "marlene-sylveira", name: "Marlene Sylveira", rating: 5, treatment: "Pós-cirúrgico", text: "Atendimento nota 10! Meu pós cirúrgico foi um sucesso, me recuperei muito rápido! obrigada Laura." },
  { id: "ana-paula-dutra", name: "Ana Paula Dutra", rating: 5, treatment: "Massagem relaxante", text: "Fiz algumas sessões de massagem relaxante com a Laura e ela é uma profissional muito qualificada, se mostra interessada em realmente tratar as questões apresentadas pelo cliente. Sempre disposta a usar mais de uma técnica para agregar o atendimento e ter os melhores resultados. Gostei muito!!" },
];

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5548991904131&text=Ol%C3%A1!%20Vi%20os%20resultados%20no%20site%20e%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o";
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/Est%C3%A9tica,+Sa%C3%BAde+Integrativa+%26+SPA+-+UnaEssential/data=!4m2!3m1!1s0x0:0x39aa12bac372b03f";

function feedbackSubtitle(feedback: Feedback) {
  if (feedback.source === "google") {
    if (!feedback.publishedAt) return "Avaliação no Google";
    const date = new Intl.DateTimeFormat("pt-BR", { month: "long", year: "numeric" }).format(new Date(feedback.publishedAt));
    return `Google · ${date}`;
  }
  return feedback.treatment;
}

export default function ResultadosPage() {
  const [currentResult, setCurrentResult] = useState(0);
  const [currentFeedback, setCurrentFeedback] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(fallbackFeedbacks);
  const [googleSummary, setGoogleSummary] = useState<{ averageRating: number; totalReviewCount: number } | null>(null);

  const result = resultSlides[currentResult];
  const feedback = feedbacks[currentFeedback];

  useEffect(() => {
    const controller = new AbortController();

    async function loadGoogleReviews() {
      try {
        const response = await fetch("/api/google-reviews", { signal: controller.signal });
        if (!response.ok) return;
        const payload = (await response.json()) as GoogleReviewsPayload;
        if (!payload.reviews?.length) return;

        setFeedbacks(payload.reviews);
        setCurrentFeedback(0);
        setGoogleSummary({
          averageRating: payload.averageRating ?? 5,
          totalReviewCount: payload.totalReviewCount ?? payload.reviews.length,
        });
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }

    void loadGoogleReviews();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-results-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealVisible);
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -45px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isExpanded) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsExpanded(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isExpanded]);

  const changeResult = (direction: number) => {
    setCurrentResult((current) => (current + direction + resultSlides.length) % resultSlides.length);
  };

  const changeFeedback = (direction: number) => {
    setCurrentFeedback((current) => (current + direction + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroOrbOne} aria-hidden="true" />
        <span className={styles.heroOrbTwo} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Resultados & experiências reais</span>
          <h1>Cuidado que você<br />pode <em>sentir e ver.</em></h1>
          <p>Conheça evoluções acompanhadas pela nossa equipe e relatos de quem escolheu viver uma experiência de cuidado na Unaessential.</p>
          <a className={styles.heroLink} href="#galeria-resultados">Explorar resultados <ArrowForwardRoundedIcon /></a>
        </div>
        <div className={styles.heroVisual} aria-label="Seleção de resultados reais da Unaessential">
          <div className={styles.heroImageMain}>
            <Image src="/image/resultados/antes_e_depois_1.jpg" alt="Resultado real de tratamento na Unaessential" fill priority sizes="(max-width: 900px) 70vw, 32vw" />
          </div>
          <div className={styles.heroImageSide}>
            <Image src="/image/resultados/facial.jpg" alt="Resultado de protocolo facial" fill sizes="(max-width: 900px) 34vw, 15vw" />
          </div>
          <span className={styles.heroSeal}><AutoAwesomeRoundedIcon /><b>Resultados</b><small>reais</small></span>
        </div>
        <div className={styles.heroTrust}>
          <span><b>{String(resultSlides.length).padStart(2, "0")}</b> registros compartilhados</span>
          <span><b>{String(googleSummary?.totalReviewCount ?? feedbacks.length).padStart(2, "0")}</b> {googleSummary ? "avaliações no Google" : "relatos de clientes"}</span>
          <span><b>{(googleSummary?.averageRating ?? 5).toFixed(1)}</b> {googleSummary ? "nota no Google" : "experiências avaliadas"}</span>
        </div>
      </section>

      <main>
        <section className={styles.resultsSection} id="galeria-resultados">
          <header className={`${styles.sectionHeader} ${styles.reveal}`} data-results-reveal>
            <div><span className={styles.eyebrow}>Antes & depois</span><h2>Histórias que ganham<br /><em>forma.</em></h2></div>
            <p>Cada corpo responde de uma maneira. Por isso, nossos protocolos começam na avaliação e evoluem com acompanhamento próximo.</p>
          </header>

          <div className={`${styles.resultViewer} ${styles.revealScale}`} data-results-reveal>
            <div className={styles.resultMedia} key={result.id}>
              <Image src={result.imageSrc} alt={result.alt} fill sizes="(max-width: 900px) 100vw, 60vw" className={styles.resultImage} />
              <div className={styles.mediaShade} />
              <span className={styles.realBadge}><VerifiedRoundedIcon /> Resultado real</span>
              <button className={styles.expandButton} onClick={() => setIsExpanded(true)} aria-label={`Ampliar imagem: ${result.title}`}><OpenInFullRoundedIcon /></button>
              <div className={styles.mediaNavigation}>
                <button onClick={() => changeResult(-1)} aria-label="Resultado anterior"><ArrowBackRoundedIcon /></button>
                <span>{String(currentResult + 1).padStart(2, "0")} <i /> {String(resultSlides.length).padStart(2, "0")}</span>
                <button onClick={() => changeResult(1)} aria-label="Próximo resultado"><ArrowForwardRoundedIcon /></button>
              </div>
            </div>

            <div className={styles.resultCopy} key={`${result.id}-copy`} aria-live="polite">
              <span className={styles.resultCategory}>{result.category}</span>
              <h3>{result.title}</h3>
              <p>{result.description}</p>
              <div className={styles.resultNote}>
                <AutoAwesomeRoundedIcon />
                <span><b>Um resultado, uma história.</b> Resultados são individuais e podem variar conforme organismo, hábitos e protocolo indicado.</span>
              </div>
              <Link href="/agendar" className={styles.textLink}>Descobrir meu protocolo <ArrowForwardRoundedIcon /></Link>
            </div>
          </div>

          <div className={`${styles.thumbnailRail} ${styles.reveal}`} data-results-reveal aria-label="Escolher resultado">
            {resultSlides.map((item, index) => (
              <button key={item.id} className={index === currentResult ? styles.thumbnailActive : ""} onClick={() => setCurrentResult(index)} aria-label={`Ver ${item.title}`} aria-current={index === currentResult ? "true" : undefined}>
                <Image src={item.imageSrc} alt="" fill sizes="100px" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.testimonialsSection}>
          <span className={styles.testimonialShapeOne} aria-hidden="true" />
          <span className={styles.testimonialShapeTwo} aria-hidden="true" />
          <header className={`${styles.testimonialsHeader} ${styles.reveal}`} data-results-reveal>
            <span className={styles.eyebrowLight}>A experiência de quem esteve aqui</span>
            <h2>Palavras que<br />acolhem.</h2>
            {googleSummary ? (
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={styles.googleSource}>
                <GoogleIcon /> Avaliações reais do Google · {googleSummary.averageRating.toFixed(1)}
              </a>
            ) : null}
          </header>

          <div className={styles.testimonialLayout}>
            <article className={`${styles.featuredTestimonial} ${styles.reveal}`} data-results-reveal key={feedback.id} aria-live="polite">
              <FormatQuoteRoundedIcon className={styles.quoteIcon} />
              <div className={styles.stars} aria-label={`${feedback.rating} de 5 estrelas`}>
                {Array.from({ length: feedback.rating }).map((_, index) => <StarRoundedIcon key={index} />)}
              </div>
              <blockquote>“{feedback.text}”</blockquote>
              <footer>
                <span className={styles.avatar}>{feedback.name.charAt(0)}</span>
                <span><b>{feedback.name}</b><small>{feedbackSubtitle(feedback)}</small></span>
              </footer>
            </article>

            <div className={`${styles.feedbackSelector} ${styles.revealScale}`} data-results-reveal>
              <span className={styles.selectorLabel}>Outras experiências</span>
              {[0, 1, 2].map((offset) => {
                const index = (currentFeedback + offset) % feedbacks.length;
                const item = feedbacks[index];
                return (
                  <button key={item.id} onClick={() => setCurrentFeedback(index)} className={index === currentFeedback ? styles.feedbackActive : ""}>
                    <span className={styles.miniAvatar}>{item.name.charAt(0)}</span>
                    <span><b>{item.name}</b><small>{feedbackSubtitle(item)}</small></span>
                    <ArrowForwardRoundedIcon />
                  </button>
                );
              })}
              <div className={styles.feedbackArrows}>
                <button onClick={() => changeFeedback(-1)} aria-label="Depoimento anterior"><ArrowBackRoundedIcon /></button>
                <span>{String(currentFeedback + 1).padStart(2, "0")} / {String(feedbacks.length).padStart(2, "0")}</span>
                <button onClick={() => changeFeedback(1)} aria-label="Próximo depoimento"><ArrowForwardRoundedIcon /></button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={`${styles.ctaShape} ${styles.revealScale}`} data-results-reveal><Image src="/logo/icon_unaessential.svg" alt="" width={45} height={80} /></div>
          <div className={`${styles.ctaCopy} ${styles.reveal}`} data-results-reveal>
            <span className={styles.eyebrow}>Sua jornada começa aqui</span>
            <h2>Qual resultado faz sentido para você?</h2>
            <p>Converse com nossa equipe e descubra um plano de cuidado construído a partir dos seus objetivos.</p>
            <div className={styles.ctaActions}>
              <Link href="/agendar" className={styles.primaryButton}>Agendar avaliação <ArrowForwardRoundedIcon /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}><WhatsAppIcon /> Falar no WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      {isExpanded && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`Imagem ampliada: ${result.title}`} onClick={() => setIsExpanded(false)}>
          <button className={styles.lightboxClose} onClick={() => setIsExpanded(false)} aria-label="Fechar imagem ampliada"><CloseRoundedIcon /></button>
          <div className={styles.lightboxImage} onClick={(event) => event.stopPropagation()}>
            <Image src={result.imageSrc} alt={result.alt} fill sizes="95vw" className={styles.resultImage} />
          </div>
          <span>{result.title}</span>
        </div>
      )}
    </div>
  );
}
