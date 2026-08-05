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
        <Typography variant="h4" sx={{ mt: 1 }}>
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
                  <strong>Idealizadora da UnaEssential</strong>, com <strong>mais de 10 anos de experiência</strong> em
                  <strong> estética, saúde e bem-estar</strong>. Une <strong>técnicas manuais</strong> e
                  <strong> tecnologias</strong> para criar <strong>atendimentos personalizados</strong> com foco em
                  <strong> resultado real</strong>, <strong>conforto</strong> e <strong>acolhimento</strong>.
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
                      Laura Araujo, 30 anos, é a <strong>idealizadora da UnaEssential</strong>. Com
                      <strong> mais de 10 anos de experiência</strong> na área da <strong>estética, saúde e bem-estar</strong>,
                      construiu sua trajetória atuando em <strong>diferentes clínicas</strong> e acompanhando de perto os
                      bastidores do setor.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      Ao longo dessa caminhada, Laura buscou <strong>constante formação e aperfeiçoamento</strong>: realizou
                      cursos nos <strong>métodos Renata França e Amanda Fernandes</strong>, formação em
                      <strong> lipoescultura gessada</strong>, especialização em <strong>lipedema e linfedema</strong>,
                      pós-graduação em <strong>terapias integrativas</strong>, especialização em
                      <strong> harmonização corporal e facial não invasiva</strong> com Chris Tofoli e especialização em
                      <strong> tecnologias</strong> com Aline Canicais. A partir desse repertório técnico e da vivência
                      prática em consultório, hoje ela desenvolveu o <strong>próprio método de atendimento</strong>, unindo o
                      que há de mais eficiente em cada técnica para potencializar <strong>resultados reais</strong>.
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
                      cuidado deve ser oferecido: <strong>atendimentos focados apenas em lucro</strong>,
                      <strong> protocolos engessados</strong> e a exigência de <strong>"pacotes específicos"</strong> para cada
                      demanda — estética, relaxamento ou bem-estar — muitas vezes sem considerar a
                      <strong> real necessidade de cada pessoa</strong>.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      A UnaEssential nasce, então, do <strong>desejo de fazer diferente</strong>. Aqui, o foco não é a
                      <strong> venda a qualquer custo</strong> para bater uma meta, mas sim <strong>você</strong>: sua história, seu
                      momento e aquilo que realmente faz sentido para o seu corpo e para a sua rotina.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      Por isso, o <strong>valor dos tratamentos é único</strong>, independentemente dos
                      <strong> ativos concentrados</strong>, das <strong>técnicas manuais</strong> e das
                      <strong> tecnologias</strong> utilizadas durante o atendimento para atingir o seu objetivo. Cada sessão
                      é conduzida de acordo com o que o corpo ou o rosto realmente precisa naquele momento, considerando
                      também a <strong>resposta ao tratamento</strong>, o que permite ajustar tecnologias e estímulos sem custos
                      adicionais.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      A única exceção é a tecnologia de <strong>criolipólise</strong>, devido ao <strong>alto custo do equipamento</strong>,
                      dos <strong>insumos descartáveis</strong> necessários e por entregar <strong>resultados expressivos</strong> em um
                      número bem mais reduzido de sessões.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      Mais do que <strong>resultados estéticos</strong>, Laura acredita em oferecer
                      <strong> conforto</strong>, <strong>acolhimento</strong>, <strong>ética</strong> e
                      <strong> presença</strong>. A UnaEssential é reflexo dessa visão: uma clínica pensada para promover
                      <strong> resultados reais</strong> e <strong>bem-estar</strong>.
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
          {/* <Card elevation={0} sx={{ border: 1, borderColor: "divider", borderRadius: 4, overflow: "hidden" }}>
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
                  <strong>Especialista em bem-estar e terapias relaxantes</strong>, com
                  <strong> mais de 15 anos de experiência</strong>. Conduz <strong>atendimentos sensoriais e personalizados</strong>,
                  com foco em <strong>desacelerar</strong>, <strong>aliviar tensões</strong> e criar uma
                  <strong> pausa consciente</strong>.
                </Typography>

                <Accordion elevation={0} sx={{ mt: 1.5, bgcolor: "transparent", border: 1, borderColor: "divider" }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography sx={{ fontWeight: 600 }}>Conheça mais</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 900 }}>
                      Amanda Gawain, 38 anos, é especializada em <strong>bem-estar</strong>, atendendo principalmente quem busca
                      <strong> relaxar</strong>, <strong>desacelerar</strong> e sentir o <strong>toque terapêutico</strong> aliado aos
                      <strong> óleos essenciais</strong> no ambiente. Com <strong>mais de 15 anos de experiência</strong> na área, já atuou
                      em <strong>SPAs de grandes hotéis</strong> de Florianópolis e também em <strong>navios</strong>, levando cuidado e
                      acolhimento para diferentes perfis de clientes.
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 900 }}>
                      Em cada atendimento, Amanda busca estar <strong>presente de verdade</strong>, adaptando o momento ao que o
                      seu corpo pede: seja em regiões com mais <strong>dor</strong>, <strong>tensão</strong> ou
                      <strong> cansaço acumulado</strong>. Mais do que uma massagem, a proposta é criar uma
                      <strong> pausa consciente, sensorial e personalizada</strong> para que você se reconecte consigo mesma.
                      Ela também é responsável pelos <strong>Day SPA</strong> da UnaEssential, montando
                      <strong> protocolos exclusivos</strong> que envolvem massagem e drenagem relaxante de corpo e rosto,
                      tratamentos faciais com <strong>dermocosméticos de alta performance</strong> e o famoso
                      <strong> head spa</strong>, com produtos que <strong>hidratam</strong>, <strong>nutrem</strong> e
                      <strong> reconstroem profundamente os fios</strong>. São experiências de <strong>cuidado</strong> e
                      <strong> renovação completa</strong>, que podem durar de <strong>2 a 4 horas consecutivas</strong>.
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
          </Card> */}
        </Stack>
      </Container>
    </Box>
  );
}
