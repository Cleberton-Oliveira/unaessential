"use client";

import { useState } from "react";
import { Container, Typography, Box, Card, CardContent, Stack, Button, Rating } from "@mui/material";

type ResultSlide = {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  alt?: string;
};

type Feedback = {
  id: string;
  name: string;
  rating: number;
  text: string;
};

const resultSlides: ResultSlide[] = [
  {
    id: "resultado-1",
    title: "Antes e depois 1",
    description:
      "Exemplo de resultado real obtido na clínica, ilustrando a diferença visual entre o antes e o depois do protocolo.",
    imageSrc: "/image/resultados/antes_e_depois_1.jpg",
    alt: "Foto de antes e depois ilustrando um resultado de tratamento estético.",
  },
  {
    id: "resultado-2",
    title: "Antes e depois 2",
    description:
      "Sequência de imagens de antes e depois destacando melhora de contorno, volume ou textura da região tratada.",
    imageSrc: "/image/resultados/antes_e_depois_2.jpg",
    alt: "Sequência de fotos mostrando resultado de tratamento com melhora visível.",
  },
  {
    id: "resultado-3",
    title: "Antes e depois 3",
    description:
      "Registro fotográfico de mais um caso acompanhado na clínica, com evolução visível entre o antes e o depois.",
    imageSrc: "/image/resultados/antes_e_depois_3.jpg",
    alt: "Foto de antes e depois evidenciando evolução de tratamento.",
  },
  {
    id: "resultado-4",
    title: "Antes e depois 4",
    description:
      "Outra possibilidade de resultado, reforçando como os protocolos são personalizados para cada necessidade.",
    imageSrc: "/image/resultados/antes_e_depois_4.png",
    alt: "Imagem de antes e depois de tratamento personalizado.",
  },
  {
    id: "resultado-5",
    title: "Pós-cirúrgico",
    description:
      "Registro fotográfico de acompanhamento pós-cirúrgico, evidenciando redução de inchaço e melhora gradual do contorno.",
    imageSrc: "/image/resultados/poscirurgico.jpg",
    alt: "Antes e depois de tratamento pós-cirúrgico, com redução de inchaço.",
  },
  {
    id: "resultado-6",
    title: "Tratamento facial",
    description:
      "Exemplo de resultado facial, com melhora de textura, viço e uniformidade da pele após protocolo estético.",
    imageSrc: "/image/resultados/facial.jpg",
    alt: "Antes e depois de tratamento facial, mostrando pele mais uniforme e luminosa.",
  },
  {
    id: "resultado-7",
    title: "Tratamento em braços",
    description:
      "Resultado em região de braços, com melhora de contorno e aspecto da pele após sequência de atendimentos.",
    imageSrc: "/image/resultados/bracos.png",
    alt: "Antes e depois de tratamento estético em braços.",
  },
];

const RESULTS_PER_PAGE = 4;

const textFeedbacks: Feedback[] = [
  {
    id: "rita-hermann",
    name: "Rita Hermann",
    rating: 5,
    text:
      "Estou muito satisfeita com o tratamento que foi realizado para redução de medidas abdominais e para tratar a flacidez simultaneamente, procedimento este com respostas surpreendentes, realizado pela Laura, profissional muito qualificada, competente e de larga experiência. Sem contar que o ambiente é muito aconchegante e acolhedor. Estou muito satisfeita e SUPER recomendo, uma grande profissional. Com certeza voltarei sempre!",
  },
  {
    id: "larissa-lara",
    name: "Larissa Lara",
    rating: 5,
    text: "O Head Spa era tudo que eu estava imaginando. Recomendo muito a UnaEssential!",
  },
  {
    id: "dayanne-nogueira",
    name: "Dayanne Nogueira",
    rating: 5,
    text:
      "A UnaEssential foi um grande achado na minha vida! Profissionais competentes e que buscam de verdade, a qualidade de vida de seus pacientes.",
  },
  {
    id: "rosenilda-pinheiro",
    name: "Rosenilda Pinheiro",
    rating: 5,
    text:
      "A experiência na Estética Integrativa UnaEssential foi simplesmente maravilhosa! O ambiente é acolhedor, com uma energia super tranquila, e o atendimento é impecável do início ao fim. Os procedimentos foram extremamente relaxantes, saí de lá leve, renovada e com uma sensação incrível de bem-estar. Dá para perceber o cuidado em cada detalhe e o profissionalismo de toda a equipe. Sem dúvida, um espaço que vai muito além da estética, proporcionando um verdadeiro momento de autocuidado e equilíbrio. Super indico!",
  },
  {
    id: "patricia-aguiar",
    name: "Patrícia Aguiar",
    rating: 5,
    text:
      "A Laura é uma excelente profissional! Faço drenagem para tratamento do Lipedema com ela e obtive uma melhora significativa! O espaço é maravilhoso e aconchegante.",
  },
  {
    id: "michelli-martuscelli",
    name: "Michelli Martuscelli",
    rating: 5,
    text:
      "Fiz Terapia Capilar com Head SPA, simplesmente amei! Ambiente climatizado, luz, música relaxante, cheiros dos óleos essenciais maravilhosos! Fiquei quentinha porque tem aquecedor na maca. O procedimento é perfeito do início ao fim. Super recomendo!",
  },
  {
    id: "joao-pedro-lourenco",
    name: "João Pedro Lourenço",
    rating: 5,
    text: "Excelente serviço e ótimo local de atendimento.",
  },
  {
    id: "joice-nunes",
    name: "Joice Nunes",
    rating: 5,
    text:
      "Amei a clínica, super aconchegante com ótimas profissionais. Amei a massagem da Laura e o tratamento do meu couro cabeludo. Sucesso, meninas, vocês são maravilhosas!",
  },
  {
    id: "caroliny-matos",
    name: "Caroliny Matos",
    rating: 5,
    text:
      "Desde a primeira sessão já tivemos um resultado imediato. Não só em volume, mas em sensação de peso e queimação que o lipedema causa. A Laurinha e suas mãozinhas milagrosas fazem total diferença no protocolo de tratamento. É fundamental tê-la cuidando da gente. Sempre atenciosa, cuidadosa e com o profissionalismo exemplar.",
  },
  {
    id: "marlene-sylveira",
    name: "Marlene Sylveira",
    rating: 5,
    text:
      "Atendimento nota 10! Meu pós cirúrgico foi um sucesso, me recuperei muito rápido! obrigada Laura.",
  },
  {
    id: "ana-paula-dutra",
    name: "Ana Paula Dutra",
    rating: 5,
    text:
      "Fiz algumas sessões de massagem relaxante com a Laura e ela é uma profissional muito qualificada, se mostra interessada em realmente tratar as questões apresentadas pelo cliente. Sempre disposta a usar mais de uma técnica para agregar o atendimento e ter os melhores resultados. Gostei muito!!",
  },
];

export default function ResultadosPage() {
  const [currentResultPage, setCurrentResultPage] = useState(0);
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  const currentFeedback = textFeedbacks[currentFeedbackIndex];

  const totalResultPages = Math.ceil(resultSlides.length / RESULTS_PER_PAGE);

  const handlePrevResult = () => {
    setCurrentResultPage((prev) => (prev - 1 + totalResultPages) % totalResultPages);
  };

  const handleNextResult = () => {
    setCurrentResultPage((prev) => (prev + 1) % totalResultPages);
  };

  const handlePrevFeedback = () => {
    setCurrentFeedbackIndex((prev) => (prev - 1 + textFeedbacks.length) % textFeedbacks.length);
  };

  const handleNextFeedback = () => {
    setCurrentFeedbackIndex((prev) => (prev + 1) % textFeedbacks.length);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          resultados & feedbacks
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Resultados & Feedbacks
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
          Nesta página você encontra resultados de alguns tratamentos estéticos e registros fotográficos de alívio
          imediato após drenagem, além de depoimentos de pessoas que já viveram a experiência na unaessential. Os
          relatos apresentados aqui também podem ser encontrados nas avaliações do Google, reforçando a transparência
          e a realidade da experiência de quem passa por nossos atendimentos.
        </Typography>

        {/* CARROSSEL DE RESULTADOS (FOTOS) */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4">Resultados</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Em breve, aqui você verá fotos de antes e depois organizadas por tipo de tratamento.
          </Typography>

          <Box sx={{ mt: 3 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(4, 1fr)",
                },
                gap: 2,
              }}
            >
              {resultSlides
                .slice(currentResultPage * RESULTS_PER_PAGE, currentResultPage * RESULTS_PER_PAGE + RESULTS_PER_PAGE)
                .map((result) => (
                  <Card
                    key={result.id}
                    sx={{
                      borderRadius: 3,
                      border: 1,
                      borderColor: "divider",
                      boxShadow: "none",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "grey.100",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        px: 2,
                        py: 2,
                      }}
                    >
                      {result.imageSrc ? (
                        <Box
                          component="img"
                          src={result.imageSrc}
                          alt={result.alt || result.title}
                          sx={{
                            width: "100%",
                            maxHeight: 360,
                            objectFit: "contain",
                            borderRadius: 2,
                          }}
                        />
                      ) : (
                        <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 520 }}>
                          {result.description}
                        </Typography>
                      )}
                    </Box>
                    <CardContent>
                      <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
                        {result.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        {result.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
            </Box>

            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 2, alignItems: "center", justifyContent: "space-between" }}
            >
              <Stack direction="row" spacing={1}>
                <Button size="small" variant="outlined" color="primary" onClick={handlePrevResult}>
                  Anterior
                </Button>
                <Button size="small" variant="outlined" color="primary" onClick={handleNextResult}>
                  Próximo
                </Button>
              </Stack>

              <Stack direction="row" spacing={0.5}>
                {Array.from({ length: totalResultPages }).map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: index === currentResultPage ? "primary.main" : "grey.300",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>

        {/* CARROSSEL DE FEEDBACKS (TEXTO ESTILO GOOGLE) */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h4">Feedbacks</Typography>

          <Card
            sx={{
              mt: 3,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              boxShadow: "none",
              p: 3,
            }}
          >
            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    color: "secondary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    fontWeight: 600,
                    textTransform: "uppercase",
                  }}
                >
                  {currentFeedback.name.charAt(0)}
                </Box>
                <Box>
                  <Typography variant="subtitle1">{currentFeedback.name}</Typography>
                  <Rating value={currentFeedback.rating} readOnly size="small" />
                </Box>
              </Stack>

              <Typography variant="body2" color="text.secondary">
                {currentFeedback.text}
              </Typography>
            </Stack>
          </Card>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mt: 2, alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1}>
              <Button size="small" variant="outlined" color="primary" onClick={handlePrevFeedback}>
                Anterior
              </Button>
              <Button size="small" variant="outlined" color="primary" onClick={handleNextFeedback}>
                Próximo
              </Button>
            </Stack>

            <Stack direction="row" spacing={0.5}>
              {textFeedbacks.map((item, index) => (
                <Box
                  key={item.id}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: index === currentFeedbackIndex ? "primary.main" : "grey.300",
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
