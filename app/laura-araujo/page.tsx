import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./laura.module.css";

export const metadata: Metadata = {
  title: "Laura Araujo | Esteticista e Cosmetóloga | UnaEssential",
  description:
    "Conheça a trajetória, a abordagem e os atendimentos de Laura Araujo, esteticista e cosmetóloga à frente da UnaEssential.",
};

const WHATSAPP_URL =
  "https://wa.me/5548991904131?text=Oii%2C%20vim%20pela%20p%C3%A1gina%20da%20Laura%20e%20gostaria%20de%20conversar%20sobre%20qual%20tratamento%20faz%20mais%20sentido%20para%20mim";

const getServiceWhatsappUrl = (serviceName: string) => {
  const message = `Oii, vim pela página da Laura e tenho interesse no tratamento: ${serviceName}. Gostaria de entender melhor se ele faz sentido para o meu objetivo.`;
  return `https://wa.me/5548991904131?text=${encodeURIComponent(message)}`;
};

const services = [
  {
    number: "01",
    title: "Tratamento para lipedema",
    text: "Drenagem linfática combinada a tecnologias para desinflamar, melhorar a circulação e aliviar a sensação de peso e as dores, com foco na redução dos sintomas e no controle da evolução do lipedema.",
  },
  {
    number: "02",
    title: "Criolipólise — método exclusivo",
    text: "Método desenvolvido por Laura para lipedema, gordura localizada e flacidez de pele, sempre indicado após avaliação individual.",
    featured: true,
  },
  {
    number: "03",
    title: "Tratamentos corporais",
    text: "Protocolos para gordura localizada, flacidez, celulite e outras necessidades corporais, combinados conforme cada objetivo.",
  },
  {
    number: "04",
    title: "Tratamentos faciais",
    text: "Cuidados para gordura, flacidez, manchas e outras necessidades da pele, respeitando características e sensibilidades individuais.",
  },
  {
    number: "05",
    title: "Drenagem linfática especializada",
    text: "Atendimentos adaptados para gestantes, lactantes e acompanhamento pré e pós-operatório, com tecnologias associadas quando indicadas.",
  },
  {
    number: "06",
    title: "Limpeza de pele e massagens",
    text: "Limpeza com peeling de diamante e extrações cuidadosas, além de massagens relaxantes que podem integrar diferentes recursos.",
  },
];

const education = [
  ["Graduação", "Cosmetologia e Estética — UNISUL, 2017"],
  ["Pós-graduação", "Terapias Integrativas e Complementares — Instituto Fisiomar"],
  ["Especialização", "Lipedema e Linfedema — Dra. Valquíria Monteiro"],
  ["Especializações", "Criolipólise para diferentes regiões corporais e faciais"],
  ["Aperfeiçoamentos", "Método Renata França e Método Amanda Fernandes"],
  ["Outras formações", "Lipoescultura gessada, harmonização não invasiva e tecnologias estéticas"],
];

const results = [
  { src: "/image/resultados/antes_e_depois_1.jpg", alt: "Evolução corporal acompanhada na UnaEssential", label: "Evolução corporal" },
  { src: "/image/resultados/Criopos25.jpg", alt: "Resultado de criolipólise após 25 dias", label: "Criolipólise · 25 dias" },
  { src: "/image/resultados/poscirurgico.jpg", alt: "Evolução em acompanhamento pós-cirúrgico", label: "Pós-operatório" },
];

const testimonials = [
  {
    name: "Patrícia Aguiar",
    context: "Drenagem para lipedema",
    text: "A Laura é uma excelente profissional! Faço drenagem para tratamento do lipedema com ela e obtive uma melhora significativa. O espaço é maravilhoso e aconchegante.",
  },
  {
    name: "Ana Paula Dutra",
    context: "Massagem relaxante",
    text: "A Laura é uma profissional muito qualificada e se mostra interessada em realmente tratar as questões apresentadas. Sempre disposta a usar mais de uma técnica para agregar ao atendimento.",
  },
  {
    name: "Caroliny Matos",
    context: "Protocolo para lipedema",
    text: "Desde a primeira sessão tivemos resultado não só em volume, mas na sensação de peso e queimação. Sempre atenciosa, cuidadosa e com profissionalismo exemplar.",
  },
];

export default function LauraAraujoPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Estética, saúde e cuidado individual</span>
          <h1>
            Laura Araujo
            <em>Um olhar criterioso para cuidar de cada pessoa.</em>
          </h1>
          <p>
            Esteticista e cosmetóloga, proprietária da UnaEssential Estética e Saúde Integrativa. Uma atuação que reúne experiência, conhecimento técnico, escuta e protocolos construídos de forma personalizada.
          </p>
          <div className={styles.heroActions}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>
              Conversar com a Laura <WhatsAppIcon />
            </a>
            <a href="#abordagem" className={styles.textButton}>Conhecer sua abordagem <ArrowForwardRoundedIcon /></a>
          </div>
          <div className={styles.heroValues}>
            <span><FavoriteBorderRoundedIcon /> Escuta</span>
            <span><AutoAwesomeRoundedIcon /> Técnica</span>
            <span><SchoolRoundedIcon /> Experiência</span>
          </div>
        </div>
        <div className={styles.heroPortrait}>
          <div className={styles.portraitFrame}>
            <Image src="/image/profissionais/Laura.jpg" alt="Laura Araujo, esteticista e cosmetóloga da UnaEssential" fill priority sizes="(max-width: 800px) 92vw, 42vw" />
          </div>
          <div className={styles.portraitCard}>
            <span>Mais de 10 anos</span>
            <p>de experiência em estética, saúde e bem-estar.</p>
          </div>
        </div>
      </section>

      <main>
        <section className={styles.approach} id="abordagem">
          <div className={styles.approachTitle}>
            <span className={styles.eyebrow}>Sua forma de cuidar</span>
            <h2>Técnica para orientar.<br /><em>Escuta para personalizar.</em></h2>
          </div>
          <div className={styles.approachCopy}>
            <p className={styles.lead}>Laura acredita que um bom tratamento começa antes de qualquer procedimento: começa em compreender a pessoa, seu momento e o que ela realmente deseja cuidar.</p>
            <p>Por isso, cada caso é avaliado individualmente. As técnicas e tecnologias são escolhidas de acordo com as necessidades identificadas, sem protocolos engessados ou promessas genéricas.</p>
            <p>O objetivo é construir uma jornada possível, segura e coerente — combinando resultados estéticos, conforto, bem-estar físico e acolhimento.</p>
          </div>
          <blockquote><FormatQuoteRoundedIcon /> “Mais do que resultados estéticos, acredito em oferecer conforto, ética, presença e acolhimento.”</blockquote>
        </section>

        <section className={styles.storySection}>
          <div className={styles.storyVisual}>
            <Image src="/image/banners/avaliacao.jpg" alt="Atendimento e avaliação individual na UnaEssential" fill sizes="(max-width: 800px) 100vw, 44vw" />
            <span>Uma trajetória guiada pelo cuidado</span>
          </div>
          <div className={styles.storyCopy}>
            <span className={styles.eyebrow}>Trajetória & propósito</span>
            <h2>Da estética integrativa a um cuidado com identidade própria.</h2>
            <div className={styles.timeline}>
              <article><span>01</span><div><h3>Da Fisioterapia à Estética</h3><p>Laura iniciou sua trajetória na Fisioterapia, mas encontrou na Estética e Cosmetologia a possibilidade de unir massagens, tecnologias, autoestima e bem-estar.</p></div></article>
              <article><span>02</span><div><h3>Especialização e propósito</h3><p>Ao acompanhar uma cliente com linfedema, desejou aprofundar seus estudos para ajudar e agregar mais resultados em casos de linfedema, lipedema e lipolinfedema. Iniciou sua trajetória e especialização na área pelo desejo de ajudar outras mulheres que sofriam com a doença e, nesse processo, percebeu e descobriu que também tem lipedema. A condição possui diferentes tipos e graus e, muitas vezes, é associada apenas aos casos mais avançados — embora muitas mulheres convivam com ela sem saber. Hoje, Laura busca entregar resultados para dor, inchaço e estética no menor número de sessões possível.</p></div></article>
              <article><span>03</span><div><h3>Nasce a UnaEssential</h3><p>A clínica nasceu para reunir técnica, personalização e acolhimento em um espaço no qual estética e saúde caminham juntas.</p></div></article>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection} id="servicos">
          <header className={styles.sectionHeader}>
            <div><span className={styles.eyebrow}>Atendimentos realizados</span><h2>Possibilidades de cuidado,<br /><em>não receitas prontas.</em></h2></div>
            <p>A indicação de técnicas, combinações e quantidade de sessões depende da avaliação de cada caso.</p>
          </header>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article key={service.number} className={service.featured ? styles.serviceFeatured : undefined}>
                <span>{service.number}</span>
                {service.featured ? <small>Destaque</small> : null}
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={getServiceWhatsappUrl(service.title)} target="_blank" rel="noopener noreferrer">Quero entender melhor <ArrowForwardRoundedIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.educationSection}>
          <div className={styles.educationIntro}>
            <span className={styles.eyebrowLight}>Formação & especializações</span>
            <h2>Conhecimento que sustenta cada escolha.</h2>
            <p>Uma trajetória de formação contínua para avaliar com critério e combinar diferentes possibilidades de cuidado.</p>
          </div>
          <div className={styles.educationList}>
            {education.map(([type, title]) => <article key={title}><SchoolRoundedIcon /><span><small>{type}</small><h3>{title}</h3></span></article>)}
          </div>
        </section>

        <section className={styles.resultsSection}>
          <header className={styles.sectionHeader}>
            <div><span className={styles.eyebrow}>Resultados reais</span><h2>Cada evolução tem<br /><em>seu próprio caminho.</em></h2></div>
            <p>Registros de atendimentos realizados na clínica. Resultados são individuais e variam conforme organismo, hábitos e protocolo indicado.</p>
          </header>
          <div className={styles.resultsGrid}>
            {results.map((result, index) => <figure key={result.src} className={index === 0 ? styles.resultLarge : undefined}><Image src={result.src} alt={result.alt} fill sizes="(max-width: 700px) 100vw, 34vw" /><figcaption><span>Resultado real</span><b>{result.label}</b></figcaption></figure>)}
          </div>
          <Link href="/resultados" className={styles.moreResults}>Ver outros resultados <ArrowForwardRoundedIcon /></Link>
        </section>

        <section className={styles.testimonialsSection}>
          <header><span className={styles.eyebrowLight}>Relatos de clientes</span><h2>Confiança construída<br />em cada atendimento.</h2></header>
          <div className={styles.testimonialGrid}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.name}>
                <FormatQuoteRoundedIcon className={styles.quoteIcon} />
                <div className={styles.stars} aria-label="5 de 5 estrelas">{Array.from({ length: 5 }).map((_, index) => <StarRoundedIcon key={index} />)}</div>
                <blockquote>“{testimonial.text}”</blockquote>
                <footer><span>{testimonial.name.charAt(0)}</span><div><b>{testimonial.name}</b><small>{testimonial.context}</small></div></footer>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.ctaMark}><Image src="/logo/icon_unaessential.svg" alt="" width={50} height={90} /></div>
          <div><span className={styles.eyebrow}>Seu cuidado começa com uma conversa</span><h2>Qual tratamento faz sentido para o seu objetivo?</h2><p>Conte o que você deseja cuidar. Laura poderá orientar os próximos passos e, se necessário, indicar uma avaliação individual.</p></div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.primaryButton}>Conversar com a Laura <WhatsAppIcon /></a>
        </section>
      </main>
    </div>
  );
}
