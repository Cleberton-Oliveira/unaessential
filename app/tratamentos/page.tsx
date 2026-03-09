'use client';
import {
  Container,
  Typography,
  Box,
  Stack,
  Button,
  Card,
  CardContent,
  CardActions,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import type { ReactNode } from "react";
import { useState } from "react";

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

export default function TratamentosPage() {
  const [mediaPreview, setMediaPreview] = useState<null | { type: "video" | "image"; src: string; alt?: string }>(
    null
  );

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
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 760 }}>
            Seu corpo não precisa &quot;se encaixar&quot; em um padrão. Ele precisa ser ouvido, cuidado e aliviado das dores e
            tensões que você carrega todos os dias.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Por aqui você encontra tratamento para gordura, flacidez, celulite, lipedema, linfedema, inchaço,
            constipação, pré e pós-cirúrgicos e até mesmo alívio para aqueles pontos de tensão das costas e lombar.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Cuidamos de forma individualizada e personalizada, com cuidados e condutas específicas para gestantes,
            lactantes e portadoras de lipedema e linfedema. A partir de uma avaliação individual, combinamos técnicas
            manuais e tecnologias não invasivas para atender às reais necessidades do seu corpo — sempre com cuidado,
            segurança e personalização.
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
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: 760 }}>
            Lipedema precisa de cuidado, não de julgamento. Aqui, você encontra acolhimento, orientação e um plano
            pensado para a sua realidade.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            A partir de uma avaliação individual, combinamos técnicas manuais e tecnologias não invasivas para atender
            às reais necessidades do seu corpo — sempre com cuidado, segurança e personalização. Cada plano é
            individualizado, respeitando o tipo e grau do lipedema, assim como a fase da condição e as respostas do
            corpo, sempre com abordagem humanizada e tecnologias seguras.
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
            Sua pele conta a sua história, mas não precisa carregar sozinha os sinais de cansaço, estresse e tempo.
            Aqui, o foco é devolver conforto, viço e autoestima para o seu dia a dia.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Os tratamentos faciais da UnaEssential são pensados para renovar, equilibrar e valorizar a beleza natural da
            pele.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Utilizamos tecnologias não invasivas e técnicas avançadas para estimular colágeno, melhorar textura,
            luminosidade e firmeza.
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
            A limpeza de pele é um cuidado essencial para manter a pele mais equilibrada, macia e com aspecto saudável
            no dia a dia. Ela auxilia na remoção de impurezas, excesso de oleosidade e células mortas que se acumulam ao
            longo da rotina, preparando a pele para absorver melhor os ativos de tratamento.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Indicada para quem sente a pele pesada, com poros aparentes, cravinhos ou brilho excessivo, a limpeza de
            pele também pode ser associada a outros protocolos faciais, potencializando resultados e mantendo a pele com
            toque mais uniforme e confortável.
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
            O Head SPA é um ritual dedicado ao couro cabeludo, fios e à sua mente. Através de movimentos específicos,
            massagens relaxantes e produtos de alta performance, trabalhamos limpeza profunda, hidratação, nutrição e
            reconstrução dos fios, enquanto promovemos alívio de tensão e sensação de leveza.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Entre os principais benefícios estão a melhora da circulação local, redução de tensão em pescoço e ombros,
            sensação de relaxamento profundo, fios mais alinhados e couro cabeludo equilibrado. É um cuidado que integra
            estética e bem-estar em um único momento.
          </Typography>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            60min
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
            Ritual pensado para uma pausa mais curta, porém completa: foco em limpeza, massagem relaxante de couro
            cabeludo e aplicação de produtos que hidratam e nutrem os fios. Uma experiência sensorial com lavagem
            terapêutica e hidratação, nutrição e reconstrução dos fios, promovendo relaxamento, leveza e bem-estar.
          </Typography>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            90min
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, maxWidth: 760 }}>
            Uma experiência mais longa e imersiva, com tempo extra para técnicas manuais, massagens e permanência dos
            produtos de tratamento, potencializando o resultado de hidratação e reconstrução dos fios. Um cuidado completo
            que une lavagem terapêutica, hidratação, nutrição e reconstrução capilar, esfoliação e argila com óleos
            essenciais que estimulam o crescimento e fortalecimento dos fios, além de máscara facial para uma pele cuidada.
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
            A massagem relaxante é ideal para quem sente o corpo pesado, mente acelerada e dificuldade para
            desacelerar. Através de manobras suaves e contínuas, diminui a tensão muscular, melhora a circulação e ajuda
            a aliviar dores ligadas ao estresse do dia a dia.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Indicada para cansaço físico e mental, noites mal dormidas e sensação de sobrecarga, essa massagem oferece
            uma pausa para respirar e se reconectar com o próprio corpo.
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
            A massagem com pedras quentes combina calor terapêutico e toque suave para aliviar dores musculares
            profundas, rigidez e sensação de corpo travado. As pedras aquecidas deslizam pela pele, promovendo
            relaxamento intenso e conforto imediato.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Indicada para quem sente muita tensão em costas, pescoço e ombros, bem como para momentos de maior estresse
            emocional, ajudando a aquecer, soltar e acalmar o corpo por completo.
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
            A massagem Aura é uma massagem eletrovibracional que utiliza uma corrente terapêutica sensorial e
            relaxante. Essa corrente tem efeito anti-inflamatório, drenante e estimula a oxigenação dos tecidos, sendo
            considerada uma corrente detox.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Indicada para quem sente inchaço, retenção de líquidos, dor localizada e sensação de peso nas pernas ou no
            corpo, ela auxilia na eliminação de toxinas e na melhora da circulação, ao mesmo tempo em que proporciona
            relaxamento profundo.
          </Typography>
        </>
      ),
    },
    {
      id: "detox-spa-intensivo",
      title: "Detox SPA intensivo",
      description:
        "Associa manta térmica, drenagem linfática e argila detox para aliviar inchaços, melhorar circulação e promover leveza e revitalização corporal.",
      durations: ["60min", "90min"],
      media: { type: "video" as const, src: "/Reels/detox.mp4" },
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            O Detox Intensivo associa manta térmica para estímulo da sudorese, drenagem linfática e aplicação de argila
            detox. A manta térmica possui massageadores embutidos que promovem uma sudorese intensa, porém controlada,
            auxiliando na eliminação de toxinas e na sensação de bem-estar.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Esse tratamento auxilia na eliminação de toxinas, redução de inchaços, melhora da circulação e sensação de
            leveza, promovendo bem-estar e revitalização corporal, enquanto a argila age na região abdominal e a
            drenagem relaxante completa a experiência.
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
            O peeling vulcânico renova a pele sem descamar, proporcionando textura mais uniforme, toque macio e viço
            saudável. É uma ótima opção para quem sente a pele opaca, com poros aparentes ou marcas leves, mas não quer
            passar pelo desconforto de descamações intensas.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Pode ser realizado como tratamento avulso ou como adicional dentro do tempo do Head SPA ou do Day SPA,
            otimizando o tempo de serviço e potencializando o relaxamento e os resultados. Dessa forma, você conquista
            um melhor custo-benefício ao unir cuidado facial e bem-estar em um único momento.
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
            A hidratação intensiva facial multicamadas promove renovação potente e não agressiva das sete camadas da
            pele, utilizando ativos concentrados que hidratam profundamente, reforçam a barreira de proteção e deixam a
            pele com aparência mais confortável, luminosa e viçosa.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Pode ser realizada como tratamento isolado ou em associação ao Day SPA, otimizando o tempo de sessão ao ser
            combinada com o Head SPA e outros rituais. Assim, você recebe um cuidado completo com melhor custo-benefício,
            cuidando do rosto e do corpo no mesmo encontro.
          </Typography>
        </>
      ),
    },
    {
      id: "spa-dos-labios",
      title: "Spa dos Lábios",
      description:
        "Esfoliação suave + hidratação profunda para lábios macios, nutridos e com aspecto saudável. Serviço adicional.",
      durations: ["5 a 15min"],
      more: (
        <>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 760 }}>
            O Spa dos Lábios é um serviço adicional que pode ser incluso dentro de qualquer tratamento facial, Head SPA
            ou Day SPA. Ele complementa o seu momento de cuidado e bem-estar, trazendo mais conforto e beleza para a
            região dos lábios.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Funciona como um acabamento — assim como uma escova nos fios — para você sair com a sensação de cuidado
            completo.
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
            A drenagem linfática é indicada para quem busca reduzir retenção de líquidos, sensação de peso e inchaço,
            além de melhorar o conforto corporal e a circulação.
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
      durations: ["60min"],
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
            Esse protocolo é ideal para quem busca definir áreas estratégicas do corpo e do rosto, reduzir gordura
            localizada e melhorar firmeza e textura da pele, com tecnologias não invasivas.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Com destaque para a criolipólise de placas, é possível trabalhar redução de gordura com conforto e segurança,
            ao mesmo tempo em que outros recursos estimulam colágeno e melhoram a qualidade da pele.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            A duração varia conforme as áreas tratadas e a combinação de tecnologias, podendo chegar a 150 minutos.
            Resultados costumam aparecer ao longo de 3 a 8 sessões, com um plano definido após avaliação.
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
            O Day SPA foi criado para quem deseja algumas horas inteiras de pausa e reconexão consigo mesma. São
            sequências de tratamentos pensadas para aliviar dores, reduzir tensões, cuidar da pele e acalmar a mente em
            uma única experiência.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            Você pode escolher entre 2h, 3h ou 4h consecutivas de puro relaxamento, sempre com protocolos montados de
            forma personalizada para a sua necessidade: mais foco em corpo, em rosto, em cabeça ou em todos eles ao
            mesmo tempo.
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
            O Spa dos Pés é um tratamento completo que inclui escalda-pés, esfoliação, hidratação profunda e massagem
            relaxante. Ele promove alívio de tensões, melhora da circulação, maciez da pele e uma sensação intensa de
            conforto e bem-estar, proporcionando descanso e renovação para os pés.
          </Typography>

          <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
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

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          tratamentos
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Estética, saúde & SPA UnaEssential
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
          {treatmentCards.map((card) => (
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
          {treatmentCards.map((card) => (
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
                    onClick={() => setMediaPreview({ type: "video", src: card.media.src })}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: card.id === "detox-spa-intensivo" ? "50% 80%" : "50% 50%",
                      display: "block",
                      cursor: "pointer",
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

        <Dialog
          open={Boolean(mediaPreview)}
          onClose={() => setMediaPreview(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{ sx: { borderRadius: 3, overflow: "hidden" } }}
        >
          <Box sx={{ position: "relative", bgcolor: "background.paper" }}>
            <IconButton
              aria-label="Fechar"
              onClick={() => setMediaPreview(null)}
              sx={{ position: "absolute", top: 8, right: 8, zIndex: 1, bgcolor: "rgba(0,0,0,0.35)", color: "#fff" }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent sx={{ p: 0 }}>
              {mediaPreview?.type === "video" ? (
                <Box
                  component="video"
                  src={mediaPreview.src}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  sx={{ width: "100%", height: "auto", display: "block", bgcolor: "#000" }}
                />
              ) : mediaPreview?.type === "image" ? (
                <Image
                  src={mediaPreview.src}
                  alt={mediaPreview.alt ?? ""}
                  width={1400}
                  height={900}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              ) : null}
            </DialogContent>
          </Box>
        </Dialog>

        {/* SEÇÕES ANTIGAS OCULTAS */}
        <Box sx={{ display: "none" }}>
          {/* ...conteúdo antigo mantido para referência... */}
        </Box>
      </Container>
    </Box>
  );
}
