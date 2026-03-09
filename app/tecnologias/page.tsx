"use client";

import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
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
import type { ReactNode } from "react";

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
            A criolipólise de placas utiliza resfriamento controlado para atuar na gordura localizada, promovendo
            redução de medidas ao mesmo tempo em que estimula a firmeza da pele.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Por meio do resfriamento uniforme, o tratamento auxilia na modelagem corporal, melhora do contorno e
            estímulo de colágeno, podendo ser aplicado no rosto e no corpo, de forma segura, confortável e não
            invasiva.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Na UnaEssential, é realizada de forma estática ou dinâmica, com protocolo e técnica exclusiva, construída
            a partir de referências científicas, com foco em resultados seguros, efetivos e duradouros. Essa forma de
            aplicação busca atuar não só na redução de volume, mas também na qualidade do tecido adiposo, ajudando a
            modular processos inflamatórios, a reduzir a sensação de nódulos de gordura típicos do lipedema e a
            estimular a produção de colágeno, especialmente o colágeno tipo I, que contribui diretamente para a firmeza
            e sustentação da pele.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Por isso, a criolipólise de placas é uma das principais aliadas nos protocolos da clínica para tratamento
            de lipedema em diferentes fases, além de ser integrada a planos de harmonização de contornos faciais e
            corporais, incluindo regiões como face, pescoço, colo, braços, abdômen e costas.
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
            A radiofrequência estimula a produção natural de colágeno e elastina por meio de ondas eletromagnéticas,
            que geram uma sensação de aquecimento no local aplicado.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na melhora da flacidez, definição de contornos, suavização de linhas e devolve firmeza e viço à
            pele do rosto e do corpo, com conforto e segurança.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Já a criofrequência é uma radiofrequência que possui a ponteira de aplicação resfriada, podendo atingir
            até -6 ºC, que combina o resfriamento da superfície da pele com o aquecimento das camadas profundas.
            Esse conjunto estimula intensamente a produção de colágeno e elastina, por ativar proteínas responsáveis
            por choque térmico.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na redução da flacidez, melhora da textura da pele e definição de contornos, promovendo firmeza,
            viço e rejuvenescimento no rosto e no corpo, com conforto e segurança.
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
            Atua nas camadas mais profundas da pele, auxiliando na redução de gordura localizada, melhora da
            flacidez e estímulo à circulação.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Ele promove um contorno corporal e facial mais harmônico, melhora a textura da pele e potencializa os
            resultados de outros tratamentos, tudo de forma segura e confortável.
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
            A tecarterapia é uma forma específica de radiofrequência, que atua mais profundamente nos tecidos e tem
            foco mais terapêutico, ajudando na circulação, alívio de dores e regeneração tecidual.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Diferente da radiofrequência tradicional, que tem foco principal na pele, a tecarterapia atua como uma
            importante aliada no tratamento de dores, melhora da flacidez e é especialmente indicada como suporte em
            protocolos para lipedema em fase inicial.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Já a criotecarterapia é a combinação da tecarterapia com o resfriamento controlado da superfície da pele,
            unindo estímulo profundo dos tecidos com maior conforto térmico.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Essa associação potencializa a circulação, favorece a ação drenante e anti-inflamatória, estimula a
            regeneração celular e também o aumento de colágeno e elastina, contribuindo para uma pele e tecidos mais
            saudáveis.
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
            Por meio de laser e LED aplicados na cor, intensidade e tempo adequados, a fotobiomodulação estimula
            processos naturais do organismo, promovendo regeneração celular, melhora da circulação e equilíbrio
            inflamatório.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            O ILIB atua de forma sistêmica, auxiliando na oxigenação do sangue, recuperação, estímulo de colágeno e
            melhora da qualidade da pele, com efeito revitalizante e toque de rejuvenescimento.
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
            Utiliza sucção associada à estimulação mecânica dos tecidos, promovendo melhora da circulação, drenagem
            linfática e estímulo do colágeno.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na redução de celulite, retenção de líquidos e flacidez, melhora o contorno corporal e a textura
            da pele. Na clínica, é possível associar o vácuo com LEDs em diferentes comprimentos de onda para
            potencializar os resultados.
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
            É a única corrente capaz de imitar a bioeletricidade natural do organismo, por meio de estímulos
            elétricos de baixa intensidade e imperceptíveis, tornando o tratamento indolor.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na normalização das funções celulares, tonificação, melhora da flacidez, definição de contornos e
            revitalização da pele, promovendo uma aparência mais firme, iluminada e saudável no rosto e no corpo,
            além de potencializar os resultados de todos os protocolos estéticos.
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
            A corrente russa utiliza estímulos elétricos para promover contrações musculares controladas.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia no fortalecimento e tonificação muscular, melhora da flacidez, definição de contornos e suporte
            ao contorno corporal e facial, potencializando os resultados dos protocolos estéticos, de forma segura e
            controlada no rosto e no corpo.
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
            Massagem com estímulos eletrovibratórios, promovendo relaxamento profundo, melhora da circulação e
            liberação de tensões.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Potencializa os resultados estéticos por ter ação drenante, anti-inflamatória e analgésica para dores,
            proporcionando sensação de leveza, conforto e reconexão com o próprio corpo.
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
            Promove aquecimento controlado, estimulando a circulação, a sudorese e o relaxamento muscular.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na eliminação de toxinas, potencializa a redução de medidas, melhora a absorção de ativos e
            contribui para o bem-estar e leveza corporal, sendo uma excelente aliada nos protocolos estéticos, de
            forma confortável e segura.
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
            A bota pneumática utiliza compressão de ar sequencial para estimular a circulação, a drenagem linfática e
            o retorno venoso.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Auxilia na redução de inchaço, sensação de peso e fadiga nas pernas, promovendo alívio, leveza e
            bem-estar, além de potencializar os resultados dos protocolos estéticos.
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
            A terapia combinada permite a associação de duas ou mais tecnologias no mesmo atendimento, seja de forma
            simultânea em diferentes áreas ou por meio de um único aplicador.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25 }}>
            Essa integração potencializa os resultados dos tratamentos, otimiza tempo, estimula diferentes camadas dos
            tecidos e promove melhora da flacidez, contorno e qualidade geral da pele.
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

        {/* MENU INTERNO DE ATALHOS */}
        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {technologyCards.map((card) => (
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
          {technologyCards.map((card) => (
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
