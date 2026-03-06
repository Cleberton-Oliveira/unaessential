"use client";

import {
  Container,
  Typography,
  Box,
  Stack,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const WHATSAPP_PHONE = "5548991904131";
const WHATSAPP_BASE_TEXT = "oii, vim pelo site e gostaria de saber mais e agendar";

function buildWhatsAppUrl(extraText?: string) {
  const text = extraText ? `${WHATSAPP_BASE_TEXT} - ${extraText}` : WHATSAPP_BASE_TEXT;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export default function ProfissionaisPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          profissionais
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Quem cuida de você
        </Typography>

        <Stack spacing={{ xs: 4, md: 5 }} sx={{ mt: 3 }}>
          {/* BLOCO LAURA */}
          <Card elevation={0} sx={{ border: 1, borderColor: "divider", borderRadius: 4, overflow: "hidden" }}>
            <Stack direction={{ xs: "column", md: "row" }} sx={{ alignItems: "stretch" }}>
              <Box
                sx={{
                  flex: { xs: "0 0 auto", md: "0 0 360px" },
                  width: { xs: "100%", md: 360 },
                  position: "relative",
                  minHeight: { xs: 260, sm: 320, md: "auto" },
                }}
              >
                <Image
                  src="/image/profissionais/Laura.jpg"
                  alt="Foto de Laura Araujo na UnaEssential"
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  style={{ objectFit: "cover", objectPosition: "50% 35%" }}
                  priority
                />
              </Box>

              <CardContent sx={{ flex: 1, p: { xs: 3, md: 4 } }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Laura Araujo
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
                  Fundadora e idealizadora da UnaEssential
                </Typography>

                <Box sx={{ mt: 1.25, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {[
                    "Renata França",
                    "Amanda Fernandes",
                    "Lipoescultura gessada",
                    "Lipedema e linfedema",
                    "Terapias integrativas",
                    "Harmonização não invasiva",
                    "Tecnologias",
                  ].map((label) => (
                    <Chip
                      key={`laura-${label}`}
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

                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 900 }}>
                  Idealizadora da UnaEssential, com mais de 10 anos de experiência em estética, saúde e bem-estar.
                  Une técnicas manuais e tecnologias para criar atendimentos personalizados com foco em resultado real,
                  conforto e acolhimento.
                </Typography>

                <Accordion
                  elevation={0}
                  sx={{ mt: 1.5, bgcolor: "transparent", border: 1, borderColor: "divider" }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontWeight: 600 }}>Conheça mais</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
                      Laura Araujo, 30 anos, é a idealizadora da UnaEssential. Com mais de 10 anos de experiência na
                      área da estética, saúde e bem-estar, construiu sua trajetória atuando em diferentes clínicas e
                      acompanhando de perto os bastidores do setor.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      Ao longo dessa caminhada, Laura buscou constante formação e aperfeiçoamento: realizou cursos nos
                      métodos Renata França e Amanda Fernandes, formação em lipoescultura gessada, especialização em
                      lipedema e linfedema, pós-graduação em terapias integrativas, especialização em harmonização
                      corporal e facial de forma não invasiva com Chris Tofoli e especialização em tecnologias com
                      Aline Canicais. A partir desse repertório técnico e da vivência prática em consultório, hoje ela
                      desenvolveu o próprio método de atendimento, unindo o que há de mais eficiente em cada técnica
                      para potencializar resultados reais.
                    </Typography>

                    <Box component="ul" sx={{ mt: 1.5, pl: 3, maxWidth: 900, color: "text.secondary" }}>
                      <li>Método Renata França</li>
                      <li>Método Amanda Fernandes</li>
                      <li>Lipoescultura gessada</li>
                      <li>Especialização em lipedema e linfedema</li>
                      <li>Pós-graduação em terapias integrativas</li>
                      <li>Especialização em harmonização corporal e facial não invasiva com Chris Tofoli</li>
                      <li>Especialização em tecnologias com Aline Canicais</li>
                    </Box>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      Ao longo dessa jornada, percebeu um padrão que não condizia com a forma como acredita que o
                      cuidado deve ser oferecido: atendimentos focados apenas em lucro, protocolos engessados e a
                      exigência de &quot;pacotes específicos&quot; para cada demanda — estética, relaxamento ou bem-estar —
                      muitas vezes sem considerar a real necessidade de cada pessoa.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      A UnaEssential nasce, então, do desejo de fazer diferente. Aqui, o foco não é a venda a qualquer
                      custo para bater uma meta, mas sim você: sua história, seu momento e aquilo que realmente faz
                      sentido para o seu corpo e para a sua rotina.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      Por isso, o valor dos tratamentos é único, independentemente dos ativos concentrados, das técnicas
                      manuais e das tecnologias utilizadas durante o atendimento para atingir o seu objetivo. Cada sessão
                      é conduzida de acordo com o que o corpo ou o rosto realmente precisa naquele momento, considerando
                      também a resposta ao tratamento, o que permite ajustar tecnologias e estímulos sem custos adicionais.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      A única exceção é a tecnologia de criolipólise, devido ao alto custo do equipamento, dos insumos
                      descartáveis necessários e por entregar resultados expressivos em um número bem mais reduzido de
                      sessões.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      Mais do que resultados estéticos, Laura acredita em oferecer conforto, acolhimento, ética e presença.
                      A UnaEssential é reflexo dessa visão: uma clínica pensada para promover resultados reais e bem-estar.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Button
                  component="a"
                  href={buildWhatsAppUrl("Agendar consulta com Laura Araujo")}
                  target="_blank"
                  rel="noreferrer"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 1.5, textTransform: "none", borderRadius: 999, py: 1.25 }}
                >
                  Agendar consulta
                </Button>
              </CardContent>
            </Stack>
          </Card>

          {/* BLOCO AMANDA */}
          <Card elevation={0} sx={{ border: 1, borderColor: "divider", borderRadius: 4, overflow: "hidden" }}>
            <Stack direction={{ xs: "column", md: "row" }} sx={{ alignItems: "stretch" }}>
              <CardContent sx={{ flex: 1, p: { xs: 3, md: 4 }, order: { xs: 2, md: 1 } }}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Amanda Gawain
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
                  Especialista em bem-estar e terapias relaxantes
                </Typography>

                <Box sx={{ mt: 1.25, display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {[
                    "Bem-estar",
                    "Terapias relaxantes",
                    "Óleos essenciais",
                    "Day SPA",
                    "Head spa",
                    "Experiência em hotéis",
                    "Experiência em navios",
                  ].map((label) => (
                    <Chip
                      key={`amanda-${label}`}
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

                <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 900 }}>
                  Especialista em bem-estar e terapias relaxantes, com mais de 15 anos de experiência.
                  Conduz atendimentos sensoriais e personalizados, com foco em desacelerar, aliviar tensões e criar
                  uma pausa consciente.
                </Typography>

                <Accordion elevation={0} sx={{ mt: 1.5, bgcolor: "transparent", border: 1, borderColor: "divider" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontWeight: 600 }}>Conheça mais</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
                      Amanda Gawain, 38 anos, é especializada em bem-estar, atendendo principalmente quem busca relaxar,
                      desacelerar e sentir o toque terapêutico aliado aos óleos essenciais no ambiente. Com mais de 15 anos
                      de experiência na área, já atuou em SPAs de grandes hotéis de Florianópolis e também em navios,
                      levando cuidado e acolhimento para diferentes perfis de clientes.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      Em cada atendimento, Amanda busca estar presente de verdade, adaptando o momento ao que o seu corpo
                      pede: seja em regiões com mais dor, tensão ou cansaço acumulado. Mais do que uma massagem, a proposta
                      é criar uma pausa consciente, sensorial e personalizada para que você se reconecte consigo mesma.
                      Ela também é responsável pelos Day SPA da UnaEssential, montando protocolos exclusivos que envolvem
                      massagem e drenagem relaxante de corpo e rosto, tratamentos faciais com dermocosméticos de alta
                      performance e o famoso head spa, com produtos que hidratam, nutrem e reconstroem profundamente os fios.
                      São experiências de cuidado e renovação completa, que podem durar de 2 a 4 horas consecutivas.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Button
                  component="a"
                  href={buildWhatsAppUrl("Agendar sessão com Amanda Gawain")}
                  target="_blank"
                  rel="noreferrer"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 1.5, textTransform: "none", borderRadius: 999, py: 1.25 }}
                >
                  Agendar sessão
                </Button>
              </CardContent>

              <Box
                sx={{
                  flex: { xs: "0 0 auto", md: "0 0 360px" },
                  width: { xs: "100%", md: 360 },
                  position: "relative",
                  minHeight: { xs: 260, sm: 320, md: "auto" },
                  order: { xs: 1, md: 2 },
                }}
              >
                <Image
                  src="/image/profissionais/Amanda.jpg"
                  alt="Foto de Amanda Gawain na UnaEssential"
                  fill
                  sizes="(max-width: 900px) 100vw, 360px"
                  style={{ objectFit: "cover", objectPosition: "50% 35%" }}
                />
              </Box>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
