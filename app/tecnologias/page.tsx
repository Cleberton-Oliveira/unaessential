"use client";

import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  Tabs,
  Tab,
  Chip,
  Card,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMemo, useState, type ReactNode } from "react";

const WHATSAPP_PHONE = "5548991904131";
const WHATSAPP_BASE_TEXT = "oii, vim pelo site e gostaria de saber mais e agendar";

function buildWhatsAppUrl(serviceName: string) {
  const text = `${WHATSAPP_BASE_TEXT} ${serviceName}`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

type TechnologyCardMedia = {
  type: "video" | "image";
  src: string;
  alt?: string;
};

type TechnologyCard = {
  id: string;
  title: string;
  description: string;
  chips: string[];
  media: TechnologyCardMedia;
  more: ReactNode;
};

function Checklist({ items }: { items: string[] }) {
  return (
    <Box
      sx={{
        mt: 2,
        p: 2,
        borderRadius: 2,
        border: 1,
        borderColor: "divider",
        bgcolor: "grey.50",
      }}
    >
      <Stack spacing={0.75}>
        {items.map((item) => (
          <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
            <Box
              sx={{
                mt: "3px",
                width: 14,
                height: 14,
                borderRadius: "50%",
                border: 1,
                borderColor: "primary.main",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
                color: "primary.main",
                flexShrink: 0,
              }}
            >
              ✓
            </Box>
            <Typography variant="body2" color="text.secondary">
              {item}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default function TecnologiasPage() {
  const technologyCards: TechnologyCard[] = [
    {
      id: "criolipolise-placas",
      title: "Criolipólise de placas",
      description:
        "Resfriamento controlado para atuar na gordura localizada, ajudando a reduzir medidas e estimular firmeza da pele, com conforto e segurança.",
      chips: ["Não invasivo", "Corporal", "Facial"],
      media: { type: "video" as const, src: "/Reels/teccrio.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            A criolipólise de placas utiliza <strong>resfriamento controlado</strong> para atuar na
            <strong> gordura localizada</strong>, promovendo <strong>redução de medidas</strong> ao mesmo tempo em que estimula a
            <strong> firmeza da pele</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Por meio do <strong>resfriamento uniforme</strong>, o tratamento auxilia na <strong>modelagem corporal</strong>,
            <strong> melhora do contorno</strong> e <strong>estímulo de colágeno</strong>, podendo ser aplicado no rosto e no corpo,
            de forma <strong>segura</strong>, <strong>confortável</strong> e <strong>não invasiva</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Na UnaEssential, é realizada de forma <strong>estática ou dinâmica</strong>, com <strong>protocolo e técnica exclusiva</strong>,
            construída a partir de <strong>referências científicas</strong>, com foco em resultados <strong>seguros</strong>,
            <strong> efetivos</strong> e <strong>duradouros</strong>. Essa forma de aplicação busca atuar não só na
            <strong>redução de volume</strong>, mas também na <strong>qualidade do tecido adiposo</strong>, ajudando a modular
            <strong>processos inflamatórios</strong>, a reduzir a sensação de <strong>nódulos de gordura</strong> típicos do lipedema e a
            estimular a produção de <strong>colágeno</strong>, especialmente o <strong>colágeno tipo I</strong>, que contribui diretamente
            para a <strong>firmeza</strong> e <strong>sustentação da pele</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Por isso, a criolipólise de placas é uma das <strong>principais aliadas</strong> nos protocolos da clínica para
            tratamento de <strong>lipedema</strong> em diferentes fases, além de ser integrada a planos de
            <strong> harmonização de contornos faciais e corporais</strong>, incluindo regiões como <strong>face</strong>,
            <strong> pescoço</strong>, <strong>colo</strong>, <strong>braços</strong>, <strong>abdômen</strong> e <strong>costas</strong>.
          </Typography>

          <Checklist
            items={[
              "Foco em gordura localizada e redução de medidas",
              "Auxilia na modelagem e contorno corporal e facial",
              "Estimula colágeno e firmeza da pele",
              "Protocolo exclusivo, estático ou dinâmico, com forte atuação em protocolos para lipedema",
            ]}
          />
        </>
      ),
    },
    {
      id: "radiofrequencia",
      title: "Radiofrequência e Criofrequência",
      description:
        "Ondas eletromagnéticas que aquecem tecidos de forma controlada para estimular colágeno e elastina, melhorando firmeza, contorno e textura da pele.",
      chips: ["Não invasivo", "Corporal", "Facial"],
      media: { type: "video" as const, src: "/Reels/tecradio.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            A radiofrequência estimula a produção natural de <strong>colágeno</strong> e <strong>elastina</strong> por meio de
            <strong> ondas eletromagnéticas</strong>, que geram uma sensação de <strong>aquecimento</strong> no local aplicado.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na melhora da <strong>flacidez</strong>, <strong>definição de contornos</strong>,
            <strong> suavização de linhas</strong> e devolve <strong>firmeza</strong> e <strong>viço</strong> à pele do rosto e do corpo, com
            <strong> conforto</strong> e <strong>segurança</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Já a criofrequência é uma radiofrequência que possui a <strong>ponteira de aplicação resfriada</strong>, podendo atingir
            até <strong>-6 ºC</strong>, que combina o <strong>resfriamento da superfície</strong> da pele com o
            <strong>aquecimento das camadas profundas</strong>. Esse conjunto estimula intensamente a produção de
            <strong> colágeno</strong> e <strong>elastina</strong>, por ativar <strong>proteínas de choque térmico</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na redução da <strong>flacidez</strong>, <strong>melhora da textura da pele</strong> e
            <strong> definição de contornos</strong>, promovendo <strong>firmeza</strong>, <strong>viço</strong> e
            <strong> rejuvenescimento</strong> no rosto e no corpo, com <strong>conforto</strong> e <strong>segurança</strong>.
          </Typography>

          <Checklist
            items={[
              "Auxilia na flacidez",
              "Ajuda na definição de contornos",
              "Contribui para suavização de linhas e viço da pele",
              "Melhora textura e contorno corporal e facial",
              "Estimula colágeno e elastina",
            ]}
          />
        </>
      ),
    },
    {
      id: "ultrassom-estetico",
      title: "Ultrassom estético",
      description:
        "Atua em camadas mais profundas auxiliando na redução de gordura localizada, melhora da flacidez e estímulo à circulação, com conforto.",
      chips: ["Não invasivo", "Corporal", "Facial"],
      media: { type: "video" as const, src: "/Reels/tecUS.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Atua nas <strong>camadas mais profundas da pele</strong>, auxiliando na <strong>redução de gordura localizada</strong>,
            <strong> melhora da flacidez</strong> e <strong>estímulo à circulação</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Ele promove um <strong>contorno corporal e facial</strong> mais harmônico, <strong>melhora a textura da pele</strong> e
            <strong> potencializa os resultados</strong> de outros tratamentos, tudo de forma <strong>segura</strong> e
            <strong> confortável</strong>.
          </Typography>

          <Checklist
            items={[
              "Auxilia na gordura localizada",
              "Auxilia na flacidez",
              "Contribui para melhora da celulite e da circulação",
            ]}
          />
        </>
      ),
    },
    {
      id: "tecarterapia",
      title: "Tecarterapia e Criotecarterapia",
      description:
        "Tecnologia com foco terapêutico que atua mais profundamente nos tecidos, auxiliando circulação, regeneração e alívio de dores; pode ser associada ao resfriamento para mais conforto.",
      chips: ["Não invasivo", "Corporal"],
      media: { type: "video" as const, src: "/Reels/tecradio.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            A tecarterapia é uma forma específica de <strong>radiofrequência</strong>, que atua mais
            <strong> profundamente nos tecidos</strong> e tem foco mais <strong>terapêutico</strong>, ajudando na
            <strong> circulação</strong>, <strong>alívio de dores</strong> e <strong>regeneração tecidual</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Diferente da radiofrequência tradicional, que tem foco principal na pele, a tecarterapia atua como uma
            importante aliada no <strong>tratamento de dores</strong>, <strong>melhora da flacidez</strong> e é especialmente indicada
            como suporte em protocolos para <strong>lipedema em fase inicial</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Já a criotecarterapia é a combinação da <strong>tecarterapia</strong> com o
            <strong> resfriamento controlado</strong> da superfície da pele, unindo <strong>estímulo profundo dos tecidos</strong> com
            maior <strong>conforto térmico</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Essa associação potencializa a <strong>circulação</strong>, favorece a ação <strong>drenante e anti-inflamatória</strong>,
            estimula a <strong>regeneração celular</strong> e também o aumento de <strong>colágeno</strong> e
            <strong> elastina</strong>, contribuindo para uma pele e tecidos mais <strong>saudáveis</strong>.
          </Typography>

          <Checklist
            items={[
              "Foco em circulação e regeneração tecidual",
              "Auxilia no alívio de dores",
              "Contribui para melhora da flacidez",
              "Aliada em protocolos para lipedema em fase inicial",
              "Combina estímulo profundo com resfriamento superficial",
              "Potencializa a circulação e ação drenante",
              "Auxilia em processos inflamatórios",
              "Estimula colágeno, elastina e regeneração celular",
            ]}
          />
        </>
      ),
    },
    {
      id: "radiofrequencia-fracionada",
      title: "Radiofrequência e Criofrequência fracionada",
      description:
        "Ponteira fracionada com disparos pontuais para estimular renovação, luminosidade e colágeno, auxiliando em linhas finas, flacidez localizada e efeito glow.",
      chips: ["Não invasivo", "Corporal", "Facial"],
      media: { type: "video" as const, src: "/Reels/tecfracionada.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            É a radiofrequência com ou sem resfriamento, realizada por meio de uma ponteira fracionada que emite
            disparos pontuais, promovendo estímulos precisos na pele.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Esses disparos favorecem a renovação cutânea, devolvem a luminosidade natural, com aparência mais
            saudável, e estimulam a produção de colágeno e elastina. Auxilia na melhora de linhas finas, como pés de
            galinha, flacidez localizada (como o chamado “umbigo triste”), estrias e promove o efeito glow nas áreas
            tratadas.
          </Typography>

          <Checklist
            items={[
              "Foco em renovação e luminosidade da pele",
              "Auxilia em linhas finas e flacidez localizada",
              "Pode ser aliado em estrias e efeito glow (bb glow) na pele",
            ]}
          />
        </>
      ),
    },
    {
      id: "laser-led",
      title: "Laser & LED",
      description:
        "Fotobiomodulação para estimular regeneração celular, circulação e equilíbrio inflamatório; pode incluir ILIB com efeito sistêmico de revitalização e suporte ao colágeno.",
      chips: ["Não invasivo", "Corporal", "Facial"],
      media: {
        type: "image" as const,
        src: "/image/tecnologias/fototerapia.jpg",
        alt: "Aplicação de laser e LED na UnaEssential",
      },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Por meio de <strong>laser</strong> e <strong>LED</strong> aplicados na cor, intensidade e tempo adequados, a
            <strong> fotobiomodulação</strong> estimula processos naturais do organismo, promovendo
            <strong> regeneração celular</strong>, <strong>melhora da circulação</strong> e <strong>equilíbrio inflamatório</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            O <strong>ILIB</strong> atua de forma <strong>sistêmica</strong>, auxiliando na <strong>oxigenação do sangue</strong>,
            <strong> recuperação</strong>, <strong>estímulo de colágeno</strong> e <strong>melhora da qualidade da pele</strong>, com
            efeito <strong>revitalizante</strong> e toque de <strong>rejuvenescimento</strong>.
          </Typography>

          <Checklist
            items={[
              "Auxilia na regeneração celular e equilíbrio inflamatório",
              "Contribui para melhora da circulação e oxigenação",
              "Suporte em dores e rejuvenescimento da pele",
            ]}
          />
        </>
      ),
    },
    {
      id: "vacuum-led",
      title: "Vacuum LED",
      description:
        "Sucção associada à estimulação mecânica para melhorar circulação e drenagem, auxiliar em celulite e flacidez e potencializar resultados com LEDs.",
      chips: ["Não invasivo", "Corporal"],
      media: {
        type: "image" as const,
        src: "/image/tecnologias/endermo.jpg",
        alt: "Aplicação de Vacuum LED na UnaEssential",
      },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Utiliza <strong>sucção</strong> associada à <strong>estimulação mecânica</strong> dos tecidos, promovendo
            <strong> melhora da circulação</strong>, <strong>drenagem linfática</strong> e <strong>estímulo do colágeno</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na redução de <strong>celulite</strong>, <strong>retenção de líquidos</strong> e
            <strong> flacidez</strong>, melhora o <strong>contorno corporal</strong> e a <strong>textura da pele</strong>. Na clínica, é
            possível associar o vácuo com <strong>LEDs</strong> em diferentes comprimentos de onda para
            <strong> potencializar os resultados</strong>.
          </Typography>

          <Checklist
            items={[
              "Auxilia na gordura localizada e contorno corporal",
              "Contribui para melhora da flacidez e celulite",
              "Favorece a drenagem linfática e circulação",
              "Ajuda a estimular o metabolismo local",
            ]}
          />
        </>
      ),
    },
    {
      id: "microcorrentes",
      title: "Microcorrentes",
      description:
        "Corrente de baixa intensidade que imita a bioeletricidade natural, ajudando na tonificação, flacidez e revitalização com um tratamento indolor.",
      chips: ["Não invasivo", "Corporal", "Facial"],
      media: {
        type: "image" as const,
        src: "/image/tecnologias/micro.jpg",
        alt: "Aplicação de microcorrentes na UnaEssential",
      },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            É a única corrente capaz de imitar a <strong>bioeletricidade natural</strong> do organismo, por meio de
            estímulos elétricos de <strong>baixa intensidade</strong> e <strong>imperceptíveis</strong>, tornando o tratamento
            <strong>indolor</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na <strong>normalização das funções celulares</strong>, <strong>tonificação</strong>,
            <strong> melhora da flacidez</strong>, <strong>definição de contornos</strong> e <strong>revitalização da pele</strong>,
            promovendo uma aparência mais <strong>firme</strong>, <strong>iluminada</strong> e <strong>saudável</strong> no rosto e no corpo,
            além de <strong>potencializar os resultados</strong> de todos os protocolos estéticos.
          </Typography>

          <Checklist
            items={[
              "Melhora a qualidade e o metabolismo celular da pele",
              "Auxilia na eliminação de toxinas",
              "Ajuda a normalizar funções celulares e potencializar protocolos estéticos",
            ]}
          />
        </>
      ),
    },
    {
      id: "corrente-russa-aussie",
      title: "Corrente russa & aussie",
      description:
        "Estimulação elétrica para contrações musculares controladas, auxiliando tonificação, flacidez e definição de contornos com segurança.",
      chips: ["Não invasivo", "Corporal", "Facial"],
      media: {
        type: "image" as const,
        src: "/image/tecnologias/russa.jpeg",
        alt: "Aplicação da corrente russa e aussie na UnaEssential",
      },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            A corrente russa utiliza <strong>estímulos elétricos</strong> para promover <strong>contrações musculares controladas</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia no <strong>fortalecimento</strong> e <strong>tonificação muscular</strong>, <strong>melhora da flacidez</strong>,
            <strong> definição de contornos</strong> e suporte ao <strong>contorno corporal e facial</strong>,
            <strong> potencializando os resultados</strong> dos protocolos estéticos, de forma <strong>segura</strong> e
            <strong> controlada</strong> no rosto e no corpo.
          </Typography>

          <Checklist
            items={[
              "Estimula contração muscular e tonificação",
              "Auxilia na flacidez e definição de contornos",
              "Potencializa protocolos de modelagem corporal e facial",
            ]}
          />
        </>
      ),
    },
    {
      id: "massagem-aura",
      title: "Massagem Aura",
      description:
        "Estímulos eletrovibratórios para relaxamento profundo, melhora da circulação e ação drenante, com sensação de leveza e conforto.",
      chips: ["Não invasivo", "Corporal"],
      media: { type: "video" as const, src: "/Reels/Aura.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Massagem com <strong>estímulos eletrovibratórios</strong>, promovendo <strong>relaxamento profundo</strong>,
            <strong> melhora da circulação</strong> e <strong>liberação de tensões</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Potencializa os <strong>resultados estéticos</strong> por ter ação <strong>drenante</strong>,
            <strong> anti-inflamatória</strong> e <strong>analgésica</strong> para dores, proporcionando sensação de
            <strong> leveza</strong>, <strong>conforto</strong> e <strong>reconexão com o próprio corpo</strong>.
          </Typography>

          <Checklist
            items={[
              "Promove relaxamento e liberação de tensões",
              "Ação drenante e melhora da circulação",
              "Auxilia em processos inflamatórios e dores",
              "Potencializa protocolos estéticos corporais",
            ]}
          />
        </>
      ),
    },
    {
      id: "manta-termica-detox",
      title: "Manta térmica detox",
      description:
        "Aquecimento controlado para estimular circulação e sudorese, potencializando eliminação de toxinas, redução de medidas e bem-estar.",
      chips: ["Não invasivo", "Corporal"],
      media: { type: "video" as const, src: "/Reels/detox.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Promove <strong>aquecimento controlado</strong>, estimulando a <strong>circulação</strong>, a
            <strong> sudorese</strong> e o <strong>relaxamento muscular</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na <strong>eliminação de toxinas</strong>, <strong>potencializa a redução de medidas</strong>,
            <strong> melhora a absorção de ativos</strong> e contribui para o <strong>bem-estar</strong> e
            <strong> leveza corporal</strong>, sendo uma excelente aliada nos protocolos estéticos, de forma
            <strong> confortável</strong> e <strong>segura</strong>.
          </Typography>

          <Checklist
            items={[
              "Aquecimento controlado para conforto e relaxamento",
              "Auxilia na eliminação de toxinas e retenção",
              "Potencializa redução de medidas e absorção de ativos",
              "Complemento em protocolos detox e de bem-estar",
            ]}
          />
        </>
      ),
    },
    {
      id: "bota-pneumatica",
      title: "Bota pneumática",
      description:
        "Compressão de ar sequencial para estimular retorno venoso, circulação e drenagem linfática, reduzindo inchaço e sensação de peso nas pernas.",
      chips: ["Não invasivo", "Corporal"],
      media: {
        type: "image" as const,
        src: "/image/tratamentos/botaedrena.jpg",
        alt: "Bota pneumática em uso na UnaEssential",
      },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            A bota pneumática utiliza <strong>compressão de ar sequencial</strong> para estimular a
            <strong> circulação</strong>, a <strong>drenagem linfática</strong> e o <strong>retorno venoso</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na redução de <strong>inchaço</strong>, sensação de <strong>peso</strong> e
            <strong> fadiga nas pernas</strong>, promovendo <strong>alívio</strong>, <strong>leveza</strong> e
            <strong> bem-estar</strong>, além de <strong>potencializar os resultados</strong> dos protocolos estéticos.
          </Typography>

          <Checklist
            items={[
              "Estimula circulação, drenagem linfática e retorno venoso",
              "Auxilia na redução de inchaço e sensação de peso",
              "Contribui para alívio de fadiga e bem-estar",
              "Potencializa protocolos estéticos corporais",
            ]}
          />
        </>
      ),
    },
    {
      id: "terapia-combinada",
      title: "Terapia combinada",
      description:
        "Associação estratégica de duas ou mais tecnologias na mesma sessão para potencializar resultados e otimizar tempo, com foco em contorno, flacidez e qualidade global da pele.",
      chips: ["Não invasivo", "Corporal", "Facial"],
      media: {
        type: "image" as const,
        src: "/image/tratamentos/auraebota.jpg",
        alt: "Terapia combinada com Massagem Aura e bota pneumática na UnaEssential",
      },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            A terapia combinada permite a <strong>associação de duas ou mais tecnologias</strong> no mesmo atendimento, seja de
            forma <strong>simultânea em diferentes áreas</strong> ou por meio de um <strong>único aplicador</strong>.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Essa integração <strong>potencializa os resultados</strong> dos tratamentos, <strong>otimiza tempo</strong>, estimula
            diferentes <strong>camadas dos tecidos</strong> e promove melhora da <strong>flacidez</strong>,
            <strong> contorno</strong> e <strong>qualidade geral da pele</strong>.
          </Typography>

          <Checklist
            items={[
              "Associação estratégica de tecnologias em uma mesma sessão",
              "Otimiza tempo de atendimento e resultados",
              "Estimula diferentes camadas de tecido",
              "Foco em flacidez, contorno e qualidade global da pele",
            ]}
          />
        </>
      ),
    },
  ];

  const tabConfigs = useMemo(
    () =>
      [
        {
          key: "todas",
          label: "TODAS TECNOLOGIAS",
          ids: technologyCards.map((card) => card.id),
        },
        {
          key: "lipedema",
          label: "LIPEDEMA",
          ids: [
            "criolipolise-placas",
            "ultrassom-estetico",
            "tecarterapia",
            "laser-led",
            "vacuum-led",
            "bota-pneumatica",
            "microcorrentes",
            "terapia-combinada",
          ],
        },
        {
          key: "reduz-gordura",
          label: "REDUZ GORDURA",
          ids: [
            "criolipolise-placas",
            "radiofrequencia",
            "ultrassom-estetico",
            "vacuum-led",
            "laser-led",
          ],
        },
        {
          key: "flacidez",
          label: "FLACIDEZ",
          ids: [
            "criolipolise-placas",
            "radiofrequencia",
            "laser-led",
            "vacuum-led",
            "microcorrentes",
            "corrente-russa-aussie",
          ],
        },
        {
          key: "retencao-constipacao-inflamacao",
          label: "RETENÇÃO, CONSTIPAÇÃO E INFLAMAÇÃO",
          ids: [
            "microcorrentes",
            "bota-pneumatica",
            "laser-led",
            "tecarterapia",
            "ultrassom-estetico",
            "massagem-aura",
            "manta-termica-detox",
            "terapia-combinada",
          ],
        },
        {
          key: "detox",
          label: "DETOX",
          ids: ["massagem-aura", "microcorrentes", "tecarterapia", "terapia-combinada"],
        },
      ] as const,
    [technologyCards]
  );

  const [activeTab, setActiveTab] = useState<(typeof tabConfigs)[number]["key"]>("todas");

  const activeTabCardIds = useMemo(() => {
    const config = tabConfigs.find((tab) => tab.key === activeTab);
    return new Set(config?.ids ?? []);
  }, [activeTab, tabConfigs]);

  const visibleTechnologyCards = useMemo(
    () => technologyCards.filter((card) => activeTabCardIds.has(card.id)),
    [activeTabCardIds, technologyCards]
  );

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          tecnologias
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Tecnologias a favor da sua pele
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
          Aqui você encontra, de forma simples e organizada, as principais tecnologias utilizadas nos tratamentos da
          UnaEssential. Todas são não invasivas e pensadas para entregar resultados com segurança, conforto e foco em
          saúde da pele e do corpo.
        </Typography>

        <Tabs
          value={activeTab}
          onChange={(_, value) => setActiveTab(value)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mt: 3 }}
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

        {/* MENU INTERNO DE ATALHOS */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {visibleTechnologyCards.map((card) => (
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
          {visibleTechnologyCards.map((card) => (
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
                      objectPosition: card.id === "manta-termica-detox" ? "50% 80%" : "50% 50%",
                      display: "block",
                    }}
                  />
                ) : (
                  <Image
                    src={card.media.src}
                    alt={card.media.alt ?? ""}
                    width={800}
                    height={600}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: card.id === "bota-pneumatica" ? "50% 70%" : "50% 50%",
                      display: "block",
                    }}
                  />
                )}
              </Box>

              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{card.title}</Typography>

                {card.chips?.length ? (
                  <Box sx={{ mt: 1.25, display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {card.chips.map((label) => (
                      <Chip
                        key={`${card.id}-${label}`}
                        label={label}
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

                <Accordion elevation={0} sx={{ mt: 2, border: 1, borderColor: "divider", borderRadius: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subtitle2">Saiba mais</Typography>
                  </AccordionSummary>
                  <AccordionDetails>{card.more}</AccordionDetails>
                </Accordion>
              </CardContent>

              <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                <Button
                  component="a"
                  href={buildWhatsAppUrl(card.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                >
                  Agendar
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
