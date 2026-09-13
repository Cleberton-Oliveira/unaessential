import type { Metadata } from "next";
import Link from "next/link";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CoffeeRoundedIcon from "@mui/icons-material/CoffeeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import WashRoundedIcon from "@mui/icons-material/WashRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./trabalhe-conosco.module.css";

export const metadata: Metadata = {
  title: "Trabalhe conosco | Unaessential",
  description: "Conheça as formas de atender e construir sua jornada profissional na Unaessential.",
};

const whatsappUrl =
  "https://wa.me/5548991904131?text=Oii%2C%20vi%20no%20site%20as%20formas%20de%20trabalhar%20na%20Unaessential%20e%20gostaria%20de%20conversar%20sobre%20uma%20poss%C3%ADvel%20parceria.";

const includedItems = [
  { icon: SpaRoundedIcon, title: "Salas preparadas", text: "Macas para diferentes atendimentos, com conforto e privacidade." },
  { icon: WashRoundedIcon, title: "Estrutura para Head Spa", text: "Uma das salas possui lavatório integrado à maca para cuidados capilares." },
  { icon: CoffeeRoundedIcon, title: "Acolhimento na recepção", text: "Café, chás, snacks, frigobar, micro-ondas, xícaras e utensílios de apoio." },
  { icon: CalendarMonthRoundedIcon, title: "Horários flexíveis", text: "Possibilidade de atendimento todos os dias, entre 7h e 22h, conforme disponibilidade." },
];

const plans = [
  {
    eyebrow: "Estrutura",
    title: "Espaço Essencial",
    description: "Para quem já possui sua própria clientela e procura um ambiente profissional, pronto e acolhedor para atender.",
    price: "A partir de R$ 50",
    priceDetail: "por hora",
    items: [
      "Sala tradicional: R$ 50 por hora",
      "Sala com lavatório: R$ 55 por hora",
      "Meio período de 4 horas a partir de R$ 180",
      "Diária de 8 horas a partir de R$ 320",
      "Pacotes mensais para horários recorrentes",
    ],
    note: "A profissional cuida da própria agenda, clientela e dos materiais específicos de seus procedimentos.",
  },
  {
    eyebrow: "Flexibilidade",
    title: "Modelo Flexível",
    description: "Uma forma leve de começar, pagando de acordo com os atendimentos realizados, sem assumir um pacote fixo logo no início.",
    price: "25% por atendimento",
    priceDetail: "mínimo de R$ 45",
    items: [
      "Indicado para clientes trazidos pela profissional",
      "Mínimo referente a atendimentos de até 90 minutos",
      "Uso da estrutura compartilhada da clínica",
      "Sem mensalidade fixa de sala",
      "Possibilidade de migrar para um pacote recorrente",
    ],
    note: "Divulgação individual, captação e materiais específicos não estão incluídos neste formato.",
    featured: true,
  },
  {
    eyebrow: "Crescimento conjunto",
    title: "Parceria UnaEssential",
    description: "Para profissionais que desejam construir presença na clínica com apoio de atendimento, divulgação e geração de oportunidades.",
    price: "Divisão por origem",
    priceDetail: "modelo personalizado",
    items: [
      "Cliente da profissional: 20% a 25% para a clínica",
      "Cliente captada pela UnaEssential: 45% para a clínica",
      "Divisão de 50% quando a clínica assume também materiais, taxas e mídia paga",
      "Apoio da secretaria no contato e agendamento",
      "Possibilidade de conteúdo e divulgação profissional",
    ],
    note: "A composição final considera especialidade, materiais, duração dos atendimentos e investimento necessário para a captação.",
  },
];

export default function TrabalheConoscoPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.orbitOne} aria-hidden="true" />
        <span className={styles.orbitTwo} aria-hidden="true" />
        <div className={styles.heroInner}>
          <Link href="/profissionais" className={styles.backLink}>
            <ArrowBackRoundedIcon /> Voltar para profissionais
          </Link>
          <span className={styles.eyebrowLight}>Trabalhe conosco</span>
          <h1>Seu trabalho, com <em>espaço para crescer.</em></h1>
          <p>
            Acreditamos em parcerias construídas com autonomia, cuidado e clareza. Conheça as formas de atender na UnaEssential e encontre a que mais combina com o seu momento profissional.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.heroButton}>
            Quero conversar <WhatsAppIcon />
          </a>
        </div>
        <aside className={styles.heroCard}>
          <span>Um ambiente para</span>
          <strong>receber bem,<br />cuidar melhor.</strong>
          <p>Duas salas versáteis em uma clínica de estética, saúde integrativa e bem-estar em Florianópolis.</p>
          <div><GroupsRoundedIcon /> Parcerias com identidade e autonomia</div>
        </aside>
      </section>

      <main>
        <section className={styles.environmentSection}>
          <header className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>O ambiente</span>
              <h2>Estrutura que acolhe <em>você e suas clientes.</em></h2>
            </div>
            <p>Você encontra uma estrutura pronta para trabalhar, com liberdade para desenvolver seus atendimentos e uma experiência cuidadosa desde a recepção.</p>
          </header>
          <div className={styles.includedGrid}>
            {includedItems.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.plansSection}>
          <header className={styles.plansHeader}>
            <span className={styles.eyebrow}>Formas de parceria</span>
            <h2>Escolha como deseja <em>começar.</em></h2>
            <p>Os valores abaixo são referências iniciais. A proposta final é construída de acordo com sua especialidade, rotina e estrutura necessária.</p>
          </header>

          <div className={styles.plansGrid}>
            {plans.map((plan) => (
              <article key={plan.title} className={plan.featured ? styles.featuredPlan : undefined}>
                {plan.featured ? <span className={styles.featuredLabel}>Mais flexível para começar</span> : null}
                <span className={styles.planEyebrow}>{plan.eyebrow}</span>
                <h3>{plan.title}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.priceBlock}>
                  <strong>{plan.price}</strong>
                  <span>{plan.priceDetail}</span>
                </div>
                <ul>
                  {plan.items.map((item) => <li key={item}><CheckRoundedIcon /> <span>{item}</span></li>)}
                </ul>
                <p className={styles.planNote}>{plan.note}</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Conversar sobre este modelo <ArrowForwardRoundedIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.detailsSection}>
          <div>
            <span className={styles.eyebrow}>Uma parceria bem combinada</span>
            <h2>Clareza desde <em>o começo.</em></h2>
          </div>
          <div className={styles.detailsList}>
            <p><span>01</span> Agenda, períodos e sala são definidos conforme disponibilidade.</p>
            <p><span>02</span> Materiais, lavanderia específica e taxas são combinados de acordo com cada serviço.</p>
            <p><span>03</span> Clientes próprias e clientes captadas pela clínica têm condições diferentes.</p>
            <p><span>04</span> A parceria começa com um período de adaptação e pode evoluir junto com a agenda.</p>
          </div>
        </section>

        <section className={styles.finalCta}>
          <SupportAgentRoundedIcon />
          <div>
            <span className={styles.eyebrowLight}>Vamos nos conhecer?</span>
            <h2>Conte sobre seu trabalho e o momento da sua carreira.</h2>
            <p>Conversamos para entender seus serviços, sua disponibilidade e qual formato pode fazer sentido para ambas as partes.</p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp <WhatsAppIcon /></a>
        </section>
      </main>
    </div>
  );
}
