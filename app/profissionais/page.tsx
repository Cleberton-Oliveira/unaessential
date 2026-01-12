import { Container, Typography, Box, Stack } from "@mui/material";
import Image from "next/image";

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

        <Stack spacing={6} sx={{ mt: 3 }}>
          {/* BLOCO LAURA */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ alignItems: { xs: "flex-start", md: "flex-start" } }}
          >
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: 320 },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 1,
              alignSelf: { xs: "stretch", md: "flex-start" },
            }}
          >
            <Image
              src="/image/profissionais/Laura.jpg"
              alt="Foto de Laura Araujo na UnaEssential"
              width={600}
              height={800}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              priority
            />
          </Box>

            <Box sx={{ flex: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Laura Araujo
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
              Fundadora e idealizadora da UnaEssential
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
              Laura Araujo, 30 anos, é a idealizadora da UnaEssential. Com mais de 10 anos de experiência na
              área da estética, saúde e bem-estar, construiu sua trajetória atuando em diferentes clínicas e
              acompanhando de perto os bastidores do setor.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Ao longo dessa caminhada, Laura buscou constante formação e aperfeiçoamento: realizou cursos nos
              métodos Renata França e Amanda Fernandes, formação em lipoescultura gessada, especialização em
              lipedema e linfedema, pós-graduação em terapias integrativas, especialização em harmonização
              corporal e facial de forma não invasiva com Chris Tofoli e especialização em tecnologias com
              Aline Canicais. A partir desse repertório técnico e da vivência prática em consultório, hoje ela
              desenvolveu o próprio método de atendimento, unindo o que há de mais eficiente em cada técnica
              para potencializar resultados reais.
            </Typography>

            <Box component="ul" sx={{ mt: 1.5, pl: 3, maxWidth: 760, color: "text.secondary" }}>
              <li>Método Renata França</li>
              <li>Método Amanda Fernandes</li>
              <li>Lipoescultura gessada</li>
              <li>Especialização em lipedema e linfedema</li>
              <li>Pós-graduação em terapias integrativas</li>
              <li>
                Especialização em harmonização corporal e facial não invasiva com Chris Tofoli
              </li>
              <li>Especialização em tecnologias com Aline Canicais</li>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Ao longo dessa jornada, percebeu um padrão que não condizia com a forma como acredita que o
              cuidado deve ser oferecido: atendimentos focados apenas em lucro, protocolos engessados e a
              exigência de "pacotes específicos" para cada demanda — estética, relaxamento ou bem-estar —
              muitas vezes sem considerar a real necessidade de cada pessoa.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              A UnaEssential nasce, então, do desejo de fazer diferente. Aqui, o foco não é a venda a qualquer
              custo para bater uma meta, mas sim você: sua história, seu momento e aquilo que realmente faz
              sentido para o seu corpo e para a sua rotina.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Por isso, o valor dos tratamentos é único, independentemente dos ativos concentrados, das técnicas
              manuais e das tecnologias utilizadas durante o atendimento para atingir o seu objetivo. Cada sessão
              é conduzida de acordo com o que o corpo ou o rosto realmente precisa naquele momento, considerando
              também a resposta ao tratamento, o que permite ajustar tecnologias e estímulos sem custos adicionais.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              A única exceção é a tecnologia de criolipólise, devido ao alto custo do equipamento, dos insumos
              descartáveis necessários e por entregar resultados expressivos em um número bem mais reduzido de
              sessões.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Mais do que resultados estéticos, Laura acredita em oferecer conforto, acolhimento, ética e presença.
              A UnaEssential é reflexo dessa visão: uma clínica pensada para promover resultados reais e bem-estar.
            </Typography>
          </Box>
        </Stack>

          {/* BLOCO AMANDA */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ alignItems: { xs: "flex-start", md: "flex-start" } }}
          >
            <Box sx={{ flex: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Amanda Gawain
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
                Especialista em bem-estar e terapias relaxantes
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
                Amanda Gawain, 38 anos, é especializada em bem-estar, atendendo principalmente quem busca relaxar,
                desacelerar e sentir o toque terapêutico aliado aos óleos essenciais no ambiente. Com mais de 15 anos
                de experiência na área, já atuou em SPAs de grandes hotéis de Florianópolis e também em navios,
                levando cuidado e acolhimento para diferentes perfis de clientes.
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
                Em cada atendimento, Amanda busca estar presente de verdade, adaptando o momento ao que o seu corpo
                pede: seja em regiões com mais dor, tensão ou cansaço acumulado. Mais do que uma massagem, a proposta
                é criar uma pausa consciente, sensorial e personalizada para que você se reconecte consigo mesma.
                Ela também é responsável pelos Day SPA da UnaEssential, montando protocolos exclusivos que envolvem
                massagem e drenagem relaxante de corpo e rosto, tratamentos faciais com dermocosméticos de alta
                performance e o famoso head spa, com produtos que hidratam, nutrem e reconstroem profundamente os fios.
                São experiências de cuidado e renovação completa, que podem durar de 2 a 4 horas consecutivas.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                maxWidth: { xs: "100%", md: 320 },
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 1,
                alignSelf: { xs: "stretch", md: "flex-start" },
              }}
            >
              <Image
                src="/image/profissionais/Amanda.jpg"
                alt="Foto de Amanda Gawain na UnaEssential"
                width={600}
                height={800}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
