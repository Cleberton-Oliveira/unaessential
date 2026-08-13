"use client";

import { Typography } from "@mui/material";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import BiotechOutlinedIcon from "@mui/icons-material/BiotechOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useEffect, useState, type ReactNode } from "react";
import { ViewportVideo } from "../components/ViewportVideo";
import styles from "./tecnologias.module.css";

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
    <div className={styles.checklist}>
      {items.map((item) => (
        <div key={item}><CheckCircleOutlineIcon /><span>{item}</span></div>
      ))}
    </div>
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

  const filterConfigs = [
    { key: "todas", label: "Todas" },
    { key: "contorno", label: "Contorno & gordura" },
    { key: "pele", label: "Firmeza & pele" },
    { key: "circulacao", label: "Circulação & bem-estar" },
    { key: "lipedema", label: "Lipedema" },
  ] as const;

  const filterGroups: Record<string, string[]> = {
    contorno: [
      "criolipolise-placas",
      "radiofrequencia",
      "ultrassom-estetico",
      "vacuum-led",
      "corrente-russa-aussie",
      "terapia-combinada",
    ],
    pele: [
      "criolipolise-placas",
      "radiofrequencia",
      "radiofrequencia-fracionada",
      "laser-led",
      "microcorrentes",
      "terapia-combinada",
    ],
    circulacao: [
      "tecarterapia",
      "laser-led",
      "vacuum-led",
      "massagem-aura",
      "manta-termica-detox",
      "bota-pneumatica",
      "terapia-combinada",
    ],
    lipedema: [
      "criolipolise-placas",
      "ultrassom-estetico",
      "tecarterapia",
      "laser-led",
      "vacuum-led",
      "bota-pneumatica",
      "microcorrentes",
      "terapia-combinada",
    ],
  };

  const [activeFilter, setActiveFilter] = useState("todas");
  const [query, setQuery] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState<TechnologyCard | null>(null);

  useEffect(() => {
    if (!selectedTechnology) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedTechnology(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedTechnology]);

  const visibleTechnologyCards = technologyCards.filter((card) => {
    const groupIds = activeFilter === "todas" ? null : filterGroups[activeFilter];
    const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
    const matchesFilter = !groupIds || groupIds.includes(card.id);
    const matchesQuery =
      !normalizedQuery ||
      `${card.title} ${card.description} ${card.chips.join(" ")}`
        .toLocaleLowerCase("pt-BR")
        .includes(normalizedQuery);
    return matchesFilter && matchesQuery;
  });

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.heroOrbitOne} />
        <span className={styles.heroOrbitTwo} />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrowLight}>Ciência aplicada ao cuidado</span>
          <h1>Tecnologia a favor de resultados mais <em>naturais.</em></h1>
          <p>
            Recursos não invasivos escolhidos com critério para potencializar tratamentos,
            respeitando a pele, o corpo e os objetivos de cada pessoa.
          </p>
          <button
            type="button"
            className={styles.heroLink}
            onClick={() => document.getElementById("tecnologias")?.scrollIntoView({ behavior: "smooth" })}
          >
            Conhecer tecnologias <ArrowForwardIcon />
          </button>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.heroVideo}>
            <ViewportVideo src="/Reels/teccrio.mp4" objectPosition="50% 50%" />
          </div>
          <div className={styles.heroSeal}>
            <ShieldOutlinedIcon />
            <b>100%</b>
            <small>não invasivas</small>
          </div>
          <div className={styles.heroNote}>
            <BiotechOutlinedIcon />
            <span><small>Protocolos</small><b>personalizados</b></span>
          </div>
        </div>

        <div className={styles.heroTrust}>
          <span><b>01</b> Avaliação individual</span>
          <span><b>02</b> Segurança & conforto</span>
          <span><b>03</b> Combinações inteligentes</span>
        </div>
      </section>

      <section className={styles.explorer} id="tecnologias">
        <header className={styles.sectionHeader}>
          <div>
            <span className={styles.eyebrow}>Conheça os recursos</span>
            <h2>Entenda o que cada tecnologia <em>faz.</em></h2>
          </div>
          <p>
            Organizamos os equipamentos pelo resultado que ajudam a construir. Assim, você
            encontra o que procura sem precisar decifrar nomes técnicos.
          </p>
        </header>

        <div className={styles.toolbar}>
          <div className={styles.filters} role="tablist" aria-label="Filtrar tecnologias por objetivo">
            {filterConfigs.map((filter) => (
              <button
                type="button"
                role="tab"
                key={filter.key}
                aria-selected={activeFilter === filter.key}
                className={activeFilter === filter.key ? styles.filterActive : ""}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <label className={styles.search}>
            <SearchIcon />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar tecnologia"
              aria-label="Buscar tecnologia"
            />
          </label>
        </div>

        <div className={styles.resultCount}>
          <span>{String(visibleTechnologyCards.length).padStart(2, "0")}</span>
          {visibleTechnologyCards.length === 1 ? " tecnologia encontrada" : " tecnologias encontradas"}
        </div>

        {visibleTechnologyCards.length ? (
          <div className={styles.technologyGrid}>
            {visibleTechnologyCards.map((card, index) => (
              <article className={styles.technologyCard} key={card.id} style={{ animationDelay: `${Math.min(index, 8) * 55}ms` }}>
                <button
                  type="button"
                  className={styles.cardMedia}
                  onClick={() => setSelectedTechnology(card)}
                  aria-label={`Ver detalhes de ${card.title}`}
                >
                  {card.media.type === "video" ? (
                    <ViewportVideo
                      src={card.media.src}
                      objectPosition={card.id === "manta-termica-detox" ? "50% 80%" : "50% 50%"}
                    />
                  ) : (
                    <Image
                      src={card.media.src}
                      alt={card.media.alt ?? card.title}
                      width={900}
                      height={680}
                      style={{ objectPosition: card.id === "bota-pneumatica" ? "50% 70%" : "50% 50%" }}
                    />
                  )}
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span>Não invasiva</span>
                    <span>{card.chips.filter((chip) => chip !== "Não invasivo").join(" · ")}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <button type="button" className={styles.cardLink} onClick={() => setSelectedTechnology(card)}>
                    Entender a tecnologia <ArrowForwardIcon />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <SearchIcon />
            <h3>Nenhuma tecnologia encontrada</h3>
            <p>Tente outro termo ou volte para a visualização completa.</p>
            <button type="button" onClick={() => { setQuery(""); setActiveFilter("todas"); }}>Limpar busca</button>
          </div>
        )}
      </section>

      <section className={styles.methodSection}>
        <div className={styles.methodVisual}>
          <Image
            src="/image/tecnologias/ultrassom.jpg"
            alt="Tecnologia estética aplicada em protocolo personalizado"
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
          />
          <span><BiotechOutlinedIcon /> UnaEssential</span>
        </div>
        <div className={styles.methodCopy}>
          <span className={styles.eyebrowLight}>Nossa forma de cuidar</span>
          <h2>A tecnologia não escolhe o protocolo. A <em>avaliação escolhe.</em></h2>
          <p>
            Cada recurso pode atuar de formas diferentes conforme a região, o tecido e o momento do seu corpo.
            Por isso, combinamos conhecimento técnico, escuta e acompanhamento para indicar apenas o que faz sentido.
          </p>
          <div className={styles.methodPoints}>
            <div><b>01</b><span><strong>Entender</strong><small>necessidades e objetivos</small></span></div>
            <div><b>02</b><span><strong>Personalizar</strong><small>tecnologias e intensidade</small></span></div>
            <div><b>03</b><span><strong>Acompanhar</strong><small>evolução e respostas</small></span></div>
          </div>
          <a href={buildWhatsAppUrl("uma avaliação personalizada")} target="_blank" rel="noopener noreferrer">
            Agendar uma avaliação <ArrowForwardIcon />
          </a>
        </div>
      </section>

      {selectedTechnology ? (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedTechnology(null);
        }}>
          <section className={styles.technologyModal} role="dialog" aria-modal="true" aria-labelledby="technology-modal-title">
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setSelectedTechnology(null)}
              aria-label="Fechar detalhes"
            >
              <CloseIcon />
            </button>
            <div className={styles.modalMedia}>
              {selectedTechnology.media.type === "video" ? (
                <ViewportVideo
                  src={selectedTechnology.media.src}
                  objectPosition={selectedTechnology.id === "manta-termica-detox" ? "50% 80%" : "50% 50%"}
                />
              ) : (
                <Image
                  src={selectedTechnology.media.src}
                  alt={selectedTechnology.media.alt ?? selectedTechnology.title}
                  width={900}
                  height={1100}
                  style={{ objectPosition: selectedTechnology.id === "bota-pneumatica" ? "50% 70%" : "50% 50%" }}
                />
              )}
              <span>Não invasiva</span>
            </div>
            <div className={styles.modalDetails}>
              <div className={styles.modalHeading}>
                <span className={styles.modalEyebrow}>Tecnologia UnaEssential</span>
                <h2 id="technology-modal-title">{selectedTechnology.title}</h2>
                <div className={styles.modalTags}>
                  {selectedTechnology.chips.map((chip) => <span key={chip}>{chip}</span>)}
                </div>
              </div>
              <div className={styles.modalBody}>
                <p className={styles.modalLead}>{selectedTechnology.description}</p>
                <div className={styles.richContent}>{selectedTechnology.more}</div>
              </div>
              <a
                href={buildWhatsAppUrl(selectedTechnology.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalCta}
              >
                <WhatsAppIcon /> Conversar sobre esta tecnologia
              </a>
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
