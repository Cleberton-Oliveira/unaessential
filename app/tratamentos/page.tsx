'use client';
import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardActions,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Menu,
  MenuItem,
} from "@mui/material";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useMemo, useState, type ReactNode } from "react";

 type TreatmentCardMedia = {
   type: "video" | "image";
   src: string;
   alt?: string;
 };

 type TreatmentCardMoreByDurationItem = {
   duration: string;
   content: ReactNode;
 };

 type TreatmentCard = {
   id: string;
   title: string;
   description: string;
   durations?: string[];
   media: TreatmentCardMedia;
   introMore?: ReactNode;
   more?: ReactNode;
   moreByDuration?: TreatmentCardMoreByDurationItem[];
 };

const WHATSAPP_PHONE = "5548991904131";
const WHATSAPP_BASE_TEXT = "oii, vim pelo site e gostaria de saber mais e agendar";

function buildWhatsAppUrl(serviceName: string) {
  const text = `${WHATSAPP_BASE_TEXT} ${serviceName}`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

const ONLINE_SCHEDULING_LINKS: Record<string, string> = {
  // Tratamentos corporais gerais
  "tratamentos-corporais":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=6073167",
  // Tratamento para lipedema
  "tratamento-lipedema":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=7749360",
  // DrenaDetox (versão não intensiva)
  drenadetox:
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=7631146",
  // Drenadetox intensivo (detox-spa-intensivo)
  "detox-spa-intensivo":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=7631173",
  // Drenagem linfática
  "drenagem-linfatica":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=7136112",
  // DrenaRelax
  drenarelax: "https://online.maapp.com.br/UnaEssential/agenda?servicos=7912969",
  // Massagem Aura (tratamento)
  "massagem-aura":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=7131850",
  // Massagem relaxante
  "massagem-relaxante":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=6679049",
  // Plástica dos pés
  "plastica-dos-pes":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=7132046",
  // Design de sobrancelhas SPA
  "design-de-sobrancelhas-spa":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=7131701",
  // Limpeza de pele
  "limpeza-de-pele":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=7132135",
  // Tratamentos faciais
  "tratamentos-faciais":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=6415394",
  // Peeling vulcânico
  "peeling-vulcanico":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=6155558",
  // Hidratação intensiva facial multicamadas
  "hidratacao-intensiva-facial-multicamadas":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=6155542",
  // Massagem com pedras quentes
  "massagem-pedras-quentes":
    "https://online.maapp.com.br/UnaEssential/agenda?servicos=7131653",
};

const ONLINE_SCHEDULING_OPTIONS: Record<string, { label: string; href: string }[]> = {
  "head-spa": [
    {
      label: "60min",
      href: "https://online.maapp.com.br/UnaEssential/agenda?servicos=6073303",
    },
    {
      label: "90min",
      href: "https://online.maapp.com.br/UnaEssential/agenda?servicos=6073295",
    },
  ],
  "day-spa": [
    {
      label: "120min",
      href: "https://online.maapp.com.br/UnaEssential/agenda?servicos=6132639",
    },
    {
      label: "180min",
      href: "https://online.maapp.com.br/UnaEssential/agenda?servicos=6132678",
    },
    {
      label: "240min",
      href: "https://online.maapp.com.br/UnaEssential/agenda?servicos=6132603",
    },
  ],
};

function ScheduleCardActions({ cardId, title }: { cardId: string; title: string }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const durationOptions = ONLINE_SCHEDULING_OPTIONS[cardId];
  const singleLink = ONLINE_SCHEDULING_LINKS[cardId];
  const hasOnlineScheduling = Boolean(durationOptions?.length || singleLink);

  return (
    <CardActions sx={{ px: 2, pb: 2, pt: 0, gap: 1, flexWrap: "wrap", width: "100%" }}>
      <Button
        component="a"
        href={buildWhatsAppUrl(title)}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        color="primary"
        startIcon={<WhatsAppIcon fontSize="small" />}
        fullWidth={!hasOnlineScheduling}
        sx={{
          textTransform: "none",
          flex: hasOnlineScheduling ? 1 : undefined,
        }}
      >
        Agendar
      </Button>

      {durationOptions?.length ? (
        <>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<EventAvailableIcon fontSize="small" />}
            onClick={(event) => setAnchorEl(event.currentTarget)}
            aria-haspopup="menu"
            aria-expanded={Boolean(anchorEl) ? "true" : undefined}
            sx={{ textTransform: "none", flex: 1 }}
          >
            Agendar pelo link
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            {durationOptions.map((option) => (
              <MenuItem
                key={option.href}
                component="a"
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setAnchorEl(null)}
              >
                {option.label}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : singleLink ? (
        <Button
          component="a"
          href={singleLink}
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          color="primary"
          startIcon={<EventAvailableIcon fontSize="small" />}
          sx={{ textTransform: "none", flex: 1 }}
        >
          Agendar pelo link
        </Button>
      ) : null}
    </CardActions>
  );
}

export default function TratamentosPage() {
  const treatmentCards: TreatmentCard[] = [
    {
      id: "tratamentos-corporais",
      title: "Tratamentos corporais",
      description:
        "Tratamentos para gordura, flacidez, celulite, inchaço e dores, com técnicas manuais e tecnologias não invasivas, de forma personalizada.",
      durations: ["60min"],
      media: { type: "video" as const, src: "/Reels/Tratcorp.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Nossos tratamentos corporais combinam <strong>tecnologias não invasivas</strong> e <strong>terapias manuais</strong> para
            <strong> modelar o corpo</strong>, <strong>reduzir medidas</strong> e <strong>melhorar visivelmente a qualidade da pele</strong>,
            sempre de forma segura e personalizada.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25, maxWidth: 760 }}>
            Atuamos em diferentes necessidades do corpo, como <strong>gordura localizada</strong>, <strong>flacidez</strong>,
            <strong> celulite</strong>, <strong>lipedema</strong>, <strong>linfedema</strong>, <strong>inchaço</strong>,
            <strong> constipação</strong>, além de suporte em <strong>pré e pós-cirúrgicos</strong> e alívio de pontos de tensão em
            costas e lombar.
          </Typography>

          <Typography variant="overline" color="primary" sx={{ letterSpacing: 1, mt: 1 }}>
            Benefícios
          </Typography>

          <Box component="ul" sx={{ mt: 1, pl: 3, color: "text.secondary" }}>
            <li>
              Redução de medidas
            </li>
            <li>
              Melhora da firmeza da pele
            </li>
            <li>
              Diminuição da aparência de celulite
            </li>
            <li>
              Estímulo de colágeno
            </li>
            <li>
              Redução de retenção de líquidos e inchaço
            </li>
            <li>
              Melhora da circulação sanguínea e linfática
            </li>
            <li>
              Aumento da oxigenação dos tecidos
            </li>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25, maxWidth: 760 }}>
            O resultado é um <strong>corpo mais leve e definido</strong>, com <strong>pele mais firme, uniforme e saudável</strong>.
            Cada protocolo é ajustado conforme o objetivo de cada pessoa, proporcionando <strong>resultados progressivos</strong>,
            <strong> naturais</strong> e <strong>duradouros</strong>, com condutas específicas quando necessário, como em casos de
            <strong> gestantes</strong>, <strong>lactantes</strong>, <strong>lipedema</strong> e <strong>linfedema</strong>.
          </Typography>
        </>
      ),
    },
    {
      id: "tratamento-lipedema",
      title: "Tratamento para lipedema",
      description:
        "Plano individualizado com técnicas manuais e tecnologias não invasivas para respeitar a fase e as respostas do seu corpo, com abordagem humanizada.",
      durations: ["60min"],
      media: { type: "video" as const, src: "/Reels/Lipe.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            O lipedema é uma condição crônica caracterizada pelo <strong>acúmulo desproporcional de gordura</strong>,
            <strong> inflamação</strong> e <strong>alterações circulatórias</strong>, principalmente nas pernas. Pode causar
            sintomas como <strong>dor</strong>, <strong>sensibilidade ao toque</strong>, <strong>sensação de peso</strong>,
            <strong> inchaço</strong> e o aspecto de &quot;casca de laranja&quot; na pele.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Mais do que estética, o lipedema precisa de <strong>cuidado</strong>, <strong>acolhimento</strong> e
            <strong> abordagem especializada</strong>. Aqui, cada tratamento começa com uma <strong>avaliação individual</strong>,
            permitindo criar um plano personalizado que respeita o tipo, o grau da condição e as respostas do seu corpo.
          </Typography>

          <Typography variant="overline" color="primary" sx={{ letterSpacing: 1, mt: 1 }}>
            Primeiros passos do tratamento
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
            O primeiro passo do tratamento é <strong>desinflamar o tecido</strong>, ajudando a reduzir sintomas como:
          </Typography>

          <Box component="ul" sx={{ mt: 1, pl: 3, color: "text.secondary" }}>
            <li>Dor nas pernas</li>
            <li>Sensação de peso</li>
            <li>Inchaço e retenção de líquidos</li>
            <li>Sensibilidade ao toque</li>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Também trabalhamos na <strong>redução da predominância estrogênica</strong> — um desequilíbrio hormonal em que o
            estrogênio exerce maior influência no organismo, favorecendo inflamação, retenção de líquidos e acúmulo de
            gordura em regiões específicas.
          </Typography>

          <Typography variant="overline" color="primary" sx={{ letterSpacing: 1, mt: 3 }}>
            Benefícios
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
            Ao longo do tratamento, buscamos:
          </Typography>

          <Box component="ul" sx={{ mt: 1, pl: 3, color: "text.secondary" }}>
            <li>Melhorar a circulação linfática</li>
            <li>Reduzir o edema e a inflamação do tecido</li>
            <li>Melhorar a aparência da celulite e da pele em &quot;casca de laranja&quot;</li>
            <li>Estimular a produção de colágeno</li>
            <li>Melhorar a firmeza e a qualidade da pele</li>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Quando necessário, também podem ser incluídos <strong>suplementos de suporte</strong>, que auxiliam no controle da
            inflamação, na circulação e na saúde metabólica.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            O objetivo é proporcionar <strong>mais conforto</strong>, <strong>leveza</strong> e
            <strong> qualidade de vida</strong>, ajudando você a se sentir melhor no seu corpo, com mais
            <strong> bem-estar</strong> e <strong>confiança</strong> no dia a dia.
          </Typography>
        </>
      ),
    },
    {
      id: "tratamentos-faciais",
      title: "Tratamentos faciais",
      description:
        "Protocolos para renovar, equilibrar e valorizar a beleza natural da pele, estimulando colágeno e melhorando textura, luminosidade e firmeza.",
      durations: ["60min"],
      media: { type: "video" as const, src: "/Reels/Tratfacial.mp4" },
      more: (
        <>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 760 }}>
            Sua pele conta a sua história, mas não precisa carregar sozinha os sinais de <strong>cansaço</strong>,
            <strong> estresse</strong> e <strong>tempo</strong>. Aqui, o foco é devolver <strong>conforto</strong>,
            <strong> viço</strong> e <strong>autoestima</strong> para o seu dia a dia.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Os tratamentos faciais da UnaEssential são pensados para <strong>renovar</strong>, <strong>equilibrar</strong> e
            <strong> valorizar a beleza natural da pele</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Utilizamos <strong>tecnologias não invasivas</strong> e <strong>técnicas avançadas</strong> para estimular
            <strong> colágeno</strong>, melhorar <strong>textura</strong>, <strong>luminosidade</strong> e
            <strong> firmeza</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Cada tratamento é indicado após avaliação, respeitando o momento da sua pele e seus objetivos. Oferecemos
            opções que visam melhorar a pele e o contorno facial, além de diminuir flacidez de pele, linhas de
            expressão, olheiras, manchas, acne, poros dilatados e reequilibrar a pele ressecada, oleosa ou mista.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Também contamos com protocolos específicos para diminuição da papada e para trazer um aspecto saudável de
            pescoço, colo e mãos, valorizando a sua beleza de forma natural e não invasiva.
          </Typography>

          <Typography variant="overline" color="primary" sx={{ letterSpacing: 1, mt: 1 }}>
            Benefícios
          </Typography>

          <Box component="ul" sx={{ mt: 1, pl: 3, color: "text.secondary" }}>
            <li>Melhorar textura e viço da pele</li>
            <li>Reduzir linhas de expressão e sinais de cansaço</li>
            <li>Suavizar manchas, acne e poros aparentes</li>
            <li>Estimular colágeno e firmeza da pele</li>
            <li>Equilibrar oleosidade e ressecamento</li>
            <li>Valorizar contornos de rosto, pescoço, colo e mãos</li>
          </Box>
        </>
      ),
    },
    {
      id: "limpeza-de-pele",
      title: "Limpeza de pele",
      description:
        "Cuidado essencial para equilibrar a pele, remover impurezas e controlar oleosidade, preparando para absorver melhor os ativos de tratamento.",
      durations: ["60 a 120min"],
      media: {
        type: "image" as const,
        src: "/image/tratamentos/limpeza.jpg",
        alt: "Limpeza de pele na UnaEssential",
      },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            A limpeza de pele é um <strong>cuidado essencial</strong> para manter a pele mais <strong>equilibrada</strong>,
            <strong> macia</strong> e com <strong>aspecto saudável</strong> no dia a dia. Ela auxilia na
            <strong> remoção de impurezas</strong>, <strong>excesso de oleosidade</strong> e <strong>células mortas</strong> que se
            acumulam ao longo da rotina, preparando a pele para absorver melhor os <strong>ativos de tratamento</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Indicada para quem sente a pele <strong>pesada</strong>, com <strong>poros aparentes</strong>,
            <strong> cravinhos</strong> ou <strong>brilho excessivo</strong>, a limpeza de pele também pode ser associada a
            outros protocolos faciais, <strong>potencializando resultados</strong> e mantendo a pele com toque mais
            <strong> uniforme</strong> e <strong>confortável</strong>.
          </Typography>

          <Box component="ul" sx={{ mt: 1.5, pl: 3, color: "text.secondary" }}>
            <li>Ajuda a desobstruir poros e reduzir a aparência de cravos</li>
            <li>Contribui para controlar oleosidade e brilho excessivo</li>
            <li>Melhora a textura e o viço da pele</li>
            <li>Prepara a pele para receber melhor outros tratamentos faciais</li>
          </Box>
        </>
      ),
    },
    {
      id: "head-spa",
      title: "Head SPA",
      description:
        "Ritual para couro cabeludo, fios e mente: limpeza, hidratação e massagens relaxantes para aliviar tensões e promover bem-estar.",
      durations: ["60min", "90min"],
      media: { type: "video" as const, src: "/Reels/HSPA.MP4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            O Head SPA é um ritual dedicado ao <strong>couro cabeludo</strong>, <strong>fios</strong> e à sua mente. Através de
            movimentos específicos, <strong>massagens relaxantes</strong> e <strong>produtos de alta performance</strong>, trabalhamos
            <strong> limpeza profunda</strong>, <strong>hidratação</strong>, <strong>nutrição</strong> e <strong>reconstrução dos fios</strong>,
            enquanto promovemos <strong>alívio de tensão</strong> e <strong>sensação de leveza</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Entre os principais benefícios estão a <strong>melhora da circulação local</strong>, <strong>redução de tensão</strong> em
            pescoço e ombros, <strong>sensação de relaxamento profundo</strong>, <strong>fios mais alinhados</strong> e
            <strong> couro cabeludo equilibrado</strong>. É um cuidado que integra <strong>estética</strong> e
            <strong> bem-estar</strong> em um único momento.
          </Typography>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            <strong>Head SPA Basic 60min</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
            Lavagem terapêutica capilar + hidroterapia com arco dourado + hidratação ou nutrição ou reconstrução dos
            fios + massagem relaxante em ombros, pescoço e face + escalda-pés aromático durante a secagem dos fios.
          </Typography>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            <strong>Head SPA Essential 90min</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
            Lavagem terapêutica capilar + hidroterapia com arco dourado + argila detox do couro cabeludo com óleos
            essenciais que estimulam maior limpeza e saúde capilar + hidratação ou nutrição ou reconstrução dos fios +
            massagem relaxante em ombros, pescoço e face + máscara facial revitalizante da pele + escalda-pés aromático
            durante a secagem dos fios.
          </Typography>
        </>
      ),
    },
    {
      id: "massagem-relaxante",
      title: "Massagem relaxante",
      description:
        "Manobras suaves e contínuas com digitopressão (digitopress) em pontos específicos de tensão para reduzir tensão, melhorar circulação e aliviar dores ligadas ao estresse.",
      durations: ["60min"],
      media: { type: "video" as const, src: "/Reels/Relax.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            A massagem relaxante é ideal para quem sente o <strong>corpo pesado</strong>, <strong>mente acelerada</strong> e
            dificuldade para desacelerar. Através de <strong>manobras suaves e contínuas</strong>, diminui a
            <strong> tensão muscular</strong>, <strong>melhora a circulação</strong> e ajuda a <strong>aliviar dores</strong> ligadas ao
            estresse do dia a dia.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Indicada para <strong>cansaço físico e mental</strong>, <strong>noites mal dormidas</strong> e sensação de
            <strong> sobrecarga</strong>, essa massagem oferece uma <strong>pausa</strong> para respirar e se
            <strong> reconectar com o próprio corpo</strong>.
          </Typography>
        </>
      ),
    },
    {
      id: "massagem-pedras-quentes",
      title: "Massagem com pedras quentes",
      description:
        "Combina calor terapêutico e toque suave para aliviar rigidez, dores profundas e promover relaxamento intenso.",
      durations: ["60min"],
      media: { type: "video" as const, src: "/Reels/Pedras.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            A massagem com pedras quentes combina <strong>calor terapêutico</strong> e <strong>toque suave</strong> para aliviar
            <strong> dores musculares profundas</strong>, <strong>rigidez</strong> e sensação de <strong>corpo travado</strong>. As pedras
            aquecidas deslizam pela pele, promovendo <strong>relaxamento intenso</strong> e <strong>conforto imediato</strong>.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Indicada para quem sente muita <strong>tensão em costas, pescoço e ombros</strong>, bem como para momentos de
            <strong> maior estresse emocional</strong>, ajudando a <strong>aquecer</strong>, <strong>soltar</strong> e
            <strong> acalmar o corpo por completo</strong>.
          </Typography>
        </>
      ),
    },
    {
      id: "massagem-aura",
      title: "Massagem Aura",
      description:
        "Massagem eletrovibracional com efeito anti-inflamatório e drenante, auxiliando na circulação, eliminação de toxinas e relaxamento profundo.",
      durations: ["60min"],
      media: { type: "video" as const, src: "/Reels/Aura.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            A massagem Aura é uma <strong>massagem eletrovibracional</strong> que utiliza uma
            <strong> corrente terapêutica sensorial e relaxante</strong>. Essa corrente tem efeito
            <strong> anti-inflamatório</strong>, <strong>drenante</strong> e estimula a <strong>oxigenação dos tecidos</strong>, sendo
            considerada uma <strong>corrente detox</strong>.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Indicada para quem sente <strong>inchaço</strong>, <strong>retenção de líquidos</strong>, <strong>dor localizada</strong> e
            sensação de <strong>peso nas pernas</strong> ou no corpo, ela auxilia na <strong>eliminação de toxinas</strong> e na
            <strong> melhora da circulação</strong>, ao mesmo tempo em que proporciona <strong>relaxamento profundo</strong>.
          </Typography>
        </>
      ),
    },
    {
      id: "detox-spa-intensivo",
      title: "Drenadetox intensivo",
      description:
        "Associa manta térmica, drenagem linfática e argila detox para aliviar inchaços, melhorar circulação e promover leveza e revitalização corporal.",
      durations: ["90min"],
      media: { type: "video" as const, src: "/Reels/detox.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            O Detox Intensivo associa <strong>manta térmica</strong> para estímulo da <strong>sudorese</strong>,
            <strong> drenagem linfática</strong> e aplicação de <strong>argila detox</strong>. A manta térmica possui
            massageadores embutidos que promovem uma <strong>sudorese intensa</strong>, porém controlada, auxiliando na
            <strong> eliminação de toxinas</strong> e na <strong>sensação de bem-estar</strong>.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Esse tratamento auxilia na <strong>eliminação de toxinas</strong>, <strong>redução de inchaços</strong>,
            <strong> melhora da circulação</strong> e <strong>sensação de leveza</strong>, promovendo
            <strong> bem-estar</strong> e <strong>revitalização corporal</strong>, enquanto a argila age na região abdominal e a
            <strong> drenagem relaxante</strong> completa a experiência.
          </Typography>
        </>
      ),
    },
    {
      id: "peeling-vulcanico",
      title: "Peeling vulcânico",
      description:
        "Renova a pele sem descamar, melhorando textura e viço, com conforto. Pode ser combinado com Head SPA ou Day SPA.",
      durations: ["65min"],
      media: { type: "video" as const, src: "/Reels/Vulcao.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            O peeling vulcânico <strong>renova a pele sem descamar</strong>, proporcionando <strong>textura mais uniforme</strong>,
            <strong> toque macio</strong> e <strong>viço saudável</strong>. É uma ótima opção para quem sente a pele
            <strong> opaca</strong>, com <strong>poros aparentes</strong> ou <strong>marcas leves</strong>, mas não quer passar pelo
            desconforto de <strong>descamações intensas</strong>.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Pode ser realizado como <strong>tratamento avulso</strong> ou como <strong>adicional</strong> dentro do tempo do Head
            SPA ou do Day SPA, otimizando o tempo de serviço e <strong>potencializando o relaxamento e os resultados</strong>. Dessa
            forma, você conquista um <strong>melhor custo-benefício</strong> ao unir <strong>cuidado facial</strong> e
            <strong> bem-estar</strong> em um único momento.
          </Typography>
        </>
      ),
    },
    {
      id: "hidratacao-intensiva-facial-multicamadas",
      title: "Hidratação intensiva facial multicamadas",
      description:
        "Hidratação profunda e renovação não agressiva com ativos concentrados para reforçar a barreira de proteção e devolver conforto e luminosidade.",
      durations: ["65min"],
      media: { type: "video" as const, src: "/Reels/hidrat.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            A hidratação intensiva facial multicamadas promove <strong>renovação potente e não agressiva</strong> das sete
            camadas da pele, utilizando <strong>ativos concentrados</strong> que hidratam profundamente, reforçam a
            <strong> barreira de proteção</strong> e deixam a pele com aparência mais <strong>confortável</strong>,
            <strong> luminosa</strong> e <strong>viçosa</strong>.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Pode ser realizada como <strong>tratamento isolado</strong> ou em associação ao <strong>Day SPA</strong>, otimizando o tempo
            de sessão ao ser combinada com o Head SPA e outros rituais. Assim, você recebe um <strong>cuidado completo</strong>
            com <strong>melhor custo-benefício</strong>, cuidando do rosto e do corpo no mesmo encontro.
          </Typography>
        </>
      ),
    },
    {
      id: "spa-dos-labios",
      title: "SPA dos lábios",
      description:
        "Esfoliação suave + hidratação profunda para lábios macios, nutridos e com aspecto saudável. Serviço adicional.",
      durations: ["5 a 15min"],
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            O Spa dos Lábios é um <strong>serviço adicional</strong> que pode ser incluso dentro de qualquer
            <strong> tratamento facial</strong>, <strong>Head SPA</strong> ou <strong>Day SPA</strong>. Ele complementa o seu momento de
            <strong> cuidado</strong> e <strong>bem-estar</strong>, trazendo mais <strong>conforto</strong> e <strong>beleza</strong> para a
            região dos lábios.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Funciona como um <strong>acabamento</strong> — assim como uma escova nos fios — para você sair com a sensação de
            <strong> cuidado completo</strong>.
          </Typography>
        </>
      ),
      media: {
        type: "image" as const,
        src: "/image/tratamentos/spalabio.jpg",
        alt: "Spa dos Lábios na UnaEssential",
      },
    },
    {
      id: "drenagem-linfatica",
      title: "Drenagem linfática",
      description:
        "Manobras que reduz inchaço, melhora a circulação e estimula a eliminação de toxinas. Proporciona leveza imediata, relaxamento e bem-estar em todo o corpo.",
      durations: ["60min"],
      media: {
        type: "image" as const,
        src: "/image/tratamentos/drenagem.jpg",
        alt: "Drenagem linfática na UnaEssential",
      },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            A drenagem linfática é indicada para quem busca reduzir <strong>retenção de líquidos</strong>, sensação de
            <strong> peso</strong> e <strong>inchaço</strong>, além de melhorar o <strong>conforto corporal</strong> e a
            <strong> circulação</strong>.
          </Typography>
          <Box component="ul" sx={{ mt: 1.5, pl: 3, color: "text.secondary" }}>
            <li>Auxilia na redução de inchaço e retenção de líquidos</li>
            <li>Estimula a circulação e a eliminação de toxinas</li>
            <li>Promove sensação de leveza imediata e bem-estar</li>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Pode ser 100% manual ou com auxílio de equipamentos que potencializam a circulação e a drenagem, como a
            fotobiomodulação e a bota pneumática. Para completar a experiência, inclui uma massagem relaxante nas costas.
          </Typography>
        </>
      ),
    },
    {
      id: "design-de-sobrancelhas-spa",
      title: "Design de Sobrancelhas SPA",
      description:
        "Modelagem precisa que realça o olhar, seguida de massagem relaxante na região dos olhos e testa. Suaviza tensões, acalma a pele e proporciona um acabamento natural e descansado.",
      durations: ["35min"],
      media: {
        type: "image" as const,
        src: "/image/tratamentos/sobrancelha.jpg",
        alt: "Design de sobrancelhas SPA na UnaEssential",
      },
    },
    {
      id: "drenadetox",
      title: "DrenaDetox",
      description:
        "Protocolo que associa drenagem linfática com massagem relaxante e argila com ativos detoxificantes, auxiliando na eliminação de toxinas, redução do inchaço e promovendo leveza e bem-estar.",
      durations: ["60min"],
      media: {
        type: "image" as const,
        src: "/image/tratamentos/detox.jpg",
        alt: "DrenaDetox na UnaEssential",
      },
    },
    {
      id: "drenarelax",
      title: "DrenaRelax",
      description:
        "Protocolo que associa manobras de drenagem linfática ao mesmo tempo que realiza manobras de massagem relaxante em corpo todo, auxiliando tanto na redução do inchaço como também reduzindo dores e estresse.",
      durations: ["90min"],
      media: {
        type: "image" as const,
        src: "/image/tratamentos/relax.jpg",
        alt: "DrenaRelax na UnaEssential",
      },
    },
    {
      id: "harmonizacao-corporal-e-facial-sem-cortes",
      title: "Harmonização Corporal e Facial Sem cortes",
      description:
        "Tecnologias não invasivas (com destaque para a criolipólise de placas) que reduzem gordura em áreas estratégicas e estimulam melhora da qualidade da pele e do colágeno — sem cortes e sem dor, com resultados incríveis em 3 a 8 sessões.",
      durations: ["60 a 150min"],
      media: {
        type: "image" as const,
        src: "/image/tratamentos/Ultrassomab.jpg",
        alt: "Harmonização corporal e facial sem cortes na UnaEssential",
      },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            Esse protocolo é ideal para quem busca <strong>definir áreas estratégicas</strong> do corpo e do rosto,
            <strong> reduzir gordura localizada</strong> e <strong>melhorar firmeza e textura da pele</strong>, com
            <strong> tecnologias não invasivas</strong>.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Com destaque para a <strong>criolipólise de placas</strong>, é possível trabalhar <strong>redução de gordura</strong> com
            <strong> conforto</strong> e <strong>segurança</strong>, ao mesmo tempo em que outros recursos estimulam
            <strong> colágeno</strong> e melhoram a <strong>qualidade da pele</strong>.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            A duração varia conforme as áreas tratadas e a combinação de tecnologias, podendo chegar a
            <strong> 150 minutos</strong>. Resultados costumam aparecer ao longo de <strong>3 a 8 sessões</strong>, com um
            plano definido após <strong>avaliação</strong>.
          </Typography>
        </>
      ),
    },
    {
      id: "day-spa",
      title: "Day SPA",
      description:
        "Experiência de pausa e reconexão com sequências de tratamentos (2h, 3h ou 4h) personalizadas para corpo, rosto e bem-estar.",
      durations: ["120min", "180min", "240min"],
      media: { type: "video" as const, src: "/Reels/dayspa.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            O Day SPA foi criado para quem deseja algumas horas inteiras de <strong>pausa</strong> e
            <strong> reconexão consigo mesma</strong>. São sequências de tratamentos pensadas para <strong>aliviar dores</strong>,
            <strong> reduzir tensões</strong>, <strong>cuidar da pele</strong> e <strong>acalmar a mente</strong> em uma única experiência.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Você pode escolher entre <strong>2h, 3h ou 4h consecutivas</strong> de puro relaxamento, sempre com
            <strong> protocolos montados de forma personalizada</strong> para a sua necessidade: mais foco em corpo, em rosto,
            em cabeça ou em todos eles ao mesmo tempo.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Em alguns rituais de Day SPA, o Spa dos Pés já está incluso como parte da experiência completa de cuidado e
            relaxamento.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
              Ritual Not Basic
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Sugestão: Head SPA + Massagem relaxante nas costas com ou sem pedras quentes + tratamento facial com
              máscara revitalizadora ou com Máscara Vulcânica, incluso secagem dos fios com escalda-pés aromático.
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
              Ritual Essential
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Sugestão: Head SPA Essential + Drenagem Linfática corporal e facial + Massagem relaxante nas costas com
              ou sem pedras quentes + tratamento facial com Máscara Vulcânica ou Rejuvenescimento intensivo
              Multicamadas, finalizando com SPA dos pés (esfoliação e hidratação dos pés), incluso secagem dos fios com
              escalda-pés.
            </Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
              Ritual Essential Premium
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Sugestão: Head SPA Essential + Drenagem Linfática corporal e facial + Massagem relaxante nas costas com
              ou sem pedras quentes + Detox Corporal + Tratamento facial com Máscara Vulcânica ou Rejuvenescimento
              Intensivo Multicamadas + SPA dos Lábios (esfoliação e hidratação), finalizando com SPA dos Pés
              (esfoliação e hidratação dos pés) + Reflexologia Podal + Escalda-pés aromático + Escova para finalizar os
              fios.
            </Typography>
          </Box>
        </>
      ),
    },
    {
      id: "spa-dos-pes",
      title: "SPA dos pés",
      description:
        "Ritual para descansar e renovar os pés, com esfoliação, hidratação e massagem relaxante combinados a escalda-pés aromático.",
      durations: ["35min"],
      media: { type: "video" as const, src: "/Reels/Spadospes.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            O Spa dos Pés é um momento de <strong>pausa</strong> e <strong>renovação</strong> dedicado exclusivamente aos seus pés.
            Começamos com uma <strong>esfoliação suave</strong> para remover células mortas, seguida de
            <strong> hidratação profunda</strong> e <strong>massagem relaxante</strong> que ajuda a aliviar tensões e a sensação de peso.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Durante o ritual, você desfruta de um <strong>escalda-pés aromático</strong> que potencializa o relaxamento e o
            conforto. Para completar a experiência, oferecemos <strong>chás quentes ou gelados</strong> e
            <strong> snacks sem glúten e sem lactose</strong>, criando um ambiente acolhedor e cuidadoso em cada detalhe.
          </Typography>
        </>
      ),
    },
    {
      id: "plastica-dos-pes",
      title: "Plástica dos pés",
      description:
        "Renovação completa dos pés com remoção de calosidades e rachaduras, esfoliação e hidratação profunda. Inclui escalda-pés aromático e massagem relaxante, deixando os pés macios, leves e revigorados.",
      durations: ["60min"],
      media: {
        type: "image" as const,
        src: "/image/tratamentos/plastpe.jpg",
        alt: "Plástica dos pés na UnaEssential",
      },
    },
  ];

  const TREATMENT_ORDER: Record<string, number> = {
    "tratamentos-corporais": 1,
    "tratamento-lipedema": 2,
    "tratamentos-faciais": 3,
    "limpeza-de-pele": 3.5,
    "drenagem-linfatica": 4,
    drenarelax: 5,
    drenadetox: 6,
    "detox-spa-intensivo": 7,
    "massagem-relaxante": 8,
    "massagem-pedras-quentes": 9,
    "head-spa": 10,
    "day-spa": 11,
    "massagem-aura": 12,
    "peeling-vulcanico": 13,
    "hidratacao-intensiva-facial-multicamadas": 14,
    "harmonizacao-corporal-e-facial-sem-cortes": 15,
    "design-de-sobrancelhas-spa": 16,
    "spa-dos-labios": 17,
    "spa-dos-pes": 18,
    "plastica-dos-pes": 99,
  };

  const sortedTreatmentCards = [...treatmentCards].sort((a, b) => {
    const orderA = TREATMENT_ORDER[a.id] ?? Number.MAX_SAFE_INTEGER;
    const orderB = TREATMENT_ORDER[b.id] ?? Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });

  const tabConfigs = useMemo(
    () =>
      [
        {
          key: "todos",
          label: "TODOS SERVIÇOS",
          ids: sortedTreatmentCards.map((card) => card.id),
        },
        {
          key: "corpo",
          label: "CORPO",
          ids: [
            "tratamentos-corporais",
            "tratamento-lipedema",
            "drenagem-linfatica",
            "drenarelax",
            "drenadetox",
            "detox-spa-intensivo",
            "massagem-aura",
            "massagem-relaxante",
            "massagem-pedras-quentes",
            "harmonizacao-corporal-e-facial-sem-cortes",
          ],
        },
        {
          key: "rosto",
          label: "ROSTO",
          ids: [
            "tratamentos-faciais",
            "limpeza-de-pele",
            "hidratacao-intensiva-facial-multicamadas",
            "peeling-vulcanico",
            "design-de-sobrancelhas-spa",
            "spa-dos-labios",
            "harmonizacao-corporal-e-facial-sem-cortes",
          ],
        },
        {
          key: "spa",
          label: "SPA",
          ids: [
            "head-spa",
            "day-spa",
            "massagem-relaxante",
            "massagem-pedras-quentes",
            "drenarelax",
            "drenadetox",
            "detox-spa-intensivo",
            "spa-dos-labios",
          ],
        },
        {
          key: "pes",
          label: "PÉS",
          ids: ["spa-dos-pes", "plastica-dos-pes"],
        },
      ] as const,
    [sortedTreatmentCards]
  );

  const [activeTab, setActiveTab] = useState<(typeof tabConfigs)[number]["key"]>("todos");

  const activeTabCardIds = useMemo(() => {
    const config = tabConfigs.find((tab) => tab.key === activeTab);
    return new Set(config?.ids ?? []);
  }, [activeTab, tabConfigs]);

  const visibleTreatmentCards = useMemo(
    () => sortedTreatmentCards.filter((card) => activeTabCardIds.has(card.id)),
    [activeTabCardIds, sortedTreatmentCards]
  );

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          tratamentos
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Estética, saúde & SPA UnaEssential
        </Typography>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flexWrap: "wrap",
          }}
        >
          <Tabs
            value={activeTab}
            onChange={(_, value) => setActiveTab(value)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ flex: "1 1 auto", minHeight: 42 }}
          >
            {tabConfigs.map((tab) => (
              <Tab
                key={tab.key}
                value={tab.key}
                label={tab.label}
                sx={{ fontWeight: 700, letterSpacing: 1, minHeight: 42, textTransform: "none" }}
              />
            ))}
          </Tabs>

          <Chip
            component="a"
            href="https://online.maapp.com.br/UnaEssential"
            target="_blank"
            rel="noopener noreferrer"
            clickable
            icon={<EventAvailableIcon sx={{ color: "text.secondary" }} />}
            label="Catálogo com valores e agendamento online"
            variant="filled"
            sx={{
              bgcolor: "rgba(46, 125, 50, 0.12)",
              color: "text.secondary",
              fontWeight: 700,
              px: 0.5,
            }}
          />
        </Box>

        {/* MENU INTERNO DE ATALHOS */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {visibleTreatmentCards.map((card) => (
            <Button
              key={`shortcut-${card.id}`}
              component="a"
              href={`#card-${card.id}`}
              size="small"
              variant="outlined"
              color="primary"
              sx={{ textTransform: "none", fontSize: 13 }}
            >
              {card.title}
            </Button>
          ))}
        </Box>

        <Box
          sx={{
            mt: 4,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
            gap: 2,
          }}
        >
          {visibleTreatmentCards.map((card) => (
            <Card
              key={card.id}
              id={`card-${card.id}`}
              sx={{
                borderRadius: 3,
                border: 1,
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                scrollMarginTop: { xs: 96, md: 112 },
              }}
            >
              <Box sx={{ width: "100%", height: 220, bgcolor: "background.paper" }}>
                {card.media.type === "video" ? (
                  <Box
                    component="video"
                    src={card.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: card.id === "detox-spa-intensivo" ? "50% 80%" : "50% 50%",
                      display: "block",
                    }}
                  />
                ) : (
                  <Image
                    src={card.media.src}
                    alt={card.media.alt ?? ""}
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                )}
              </Box>

              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{card.title}</Typography>
                {card.durations?.length ? (
                  <Box sx={{ mt: 1.25, display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {card.durations.map((duration) => (
                      <Chip
                        key={`${card.id}-${duration}`}
                        icon={<AccessTimeIcon sx={{ color: "text.secondary" }} />}
                        label={duration}
                        variant="filled"
                        sx={{
                          bgcolor: "rgba(46, 125, 50, 0.12)",
                          color: "text.secondary",
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                ) : null}
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
                  {card.description}
                </Typography>

                {card.introMore ? <Box sx={{ mt: 2 }}>{card.introMore}</Box> : null}

                {card.more ? (
                  <Accordion elevation={0} sx={{ mt: 2, border: 1, borderColor: "divider", borderRadius: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="subtitle2">Saiba mais</Typography>
                    </AccordionSummary>
                    <AccordionDetails>{card.more}</AccordionDetails>
                  </Accordion>
                ) : null}

                {card.moreByDuration?.length ? (
                  <Box sx={{ mt: 2 }}>
                    {card.moreByDuration.map((item: { duration: string; content: ReactNode }) => (
                      <Accordion
                        key={`${card.id}-${item.duration}`}
                        elevation={0}
                        sx={{
                          mt: 1.5,
                          border: 1,
                          borderColor: "divider",
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography variant="subtitle2">{item.duration} · saiba mais</Typography>
                        </AccordionSummary>
                        <AccordionDetails>{item.content}</AccordionDetails>
                      </Accordion>
                    ))}
                  </Box>
                ) : null}
              </CardContent>

              <ScheduleCardActions cardId={card.id} title={card.title} />
            </Card>
          ))}
        </Box>

        {/* SEÇÕES ANTIGAS OCULTAS */}
        <Box sx={{ display: "none" }}>
          {/* ...conteúdo antigo mantido para referência... */}
        </Box>
      </Container>
    </Box>
  );
}
