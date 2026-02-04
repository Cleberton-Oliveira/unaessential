import { Container, Typography, Box, Stack, Button } from "@mui/material";
import Image from "next/image";

export default function TratamentosPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
          tratamentos
        </Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>
          Tratamentos & SPA unaessential
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
          <Button
            component="a"
            href="#tratamentos-corporais"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Tratamentos corporais
          </Button>
          <Button
            component="a"
            href="#tratamento-lipedema"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Lipedema
          </Button>
          <Button
            component="a"
            href="#tratamentos-faciais"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Tratamentos faciais
          </Button>
          <Button
            component="a"
            href="#head-spa"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Head SPA
          </Button>
          <Button
            component="a"
            href="#massagens-spa"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Massagens SPA
          </Button>
          <Button
            component="a"
            href="#experiencias-faciais-spa"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Faciais em clima de SPA
          </Button>
          <Button
            component="a"
            href="#day-spa"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Day SPA
          </Button>
        </Box>

        {/* TRATAMENTOS CORPORAIS */}
        <Typography
          id="tratamentos-corporais"
          variant="h4"
          sx={{ mt: 4, scrollMarginTop: { xs: 96, md: 112 } }}
        >
          Tratamentos corporais
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5, maxWidth: 720 }}>
          Seu corpo não precisa "se encaixar" em um padrão. Ele precisa ser ouvido, cuidado e aliviado das dores e
          tensões que você carrega todos os dias.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              Por aqui você encontra tratamento para gordura, flacidez, celulite, lipedema, linfedema, inchaço,
              constipação, pré e pós-cirúrgicos e até mesmo alívio para aqueles pontos de tensão das costas e lombar.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Cuidamos de forma individualizada e personalizada, com cuidados e condutas específicas para gestantes,
              lactantes e portadoras de lipedema e linfedema. A partir de uma avaliação individual, combinamos
              técnicas manuais e tecnologias não invasivas para atender às reais necessidades do seu corpo — sempre
              com cuidado, segurança e personalização.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/Tratcorp.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* TRATAMENTO PARA LIPEDEMA */}
        <Typography
          id="tratamento-lipedema"
          variant="h4"
          sx={{ mt: 6, scrollMarginTop: { xs: 96, md: 112 } }}
        >
          Tratamento para lipedema
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5, maxWidth: 720 }}>
          Lipedema precisa de cuidado, não de julgamento. Aqui, você encontra acolhimento, orientação e um plano
          pensado para a sua realidade.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              A partir de uma avaliação individual, combinamos técnicas manuais e tecnologias não invasivas para
              atender às reais necessidades do seu corpo — sempre com cuidado, segurança e personalização. Cada plano
              é individualizado, respeitando o tipo e grau do lipedema, assim como a fase da condição e as respostas
              do corpo, sempre com abordagem humanizada e tecnologias seguras.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/Lipe.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* TRATAMENTOS FACIAIS */}
        <Typography
          id="tratamentos-faciais"
          variant="h4"
          sx={{ mt: 6, scrollMarginTop: { xs: 96, md: 112 } }}
        >
          Tratamentos faciais
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5, maxWidth: 720 }}>
          Sua pele conta a sua história, mas não precisa carregar sozinha os sinais de cansaço, estresse e tempo.
          Aqui, o foco é devolver conforto, viço e autoestima para o seu dia a dia.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              Os tratamentos faciais da UnaEssential são pensados para renovar, equilibrar e valorizar a beleza
              natural da pele.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Utilizamos tecnologias não invasivas e técnicas avançadas para estimular colágeno, melhorar textura,
              luminosidade e firmeza.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Cada tratamento é indicado após avaliação, respeitando o momento da sua pele e seus objetivos. Oferecemos
              opções que visam melhorar a pele e o contorno facial, além de diminuir flacidez de pele, linhas de
              expressão, olheiras, manchas, acne, poros dilatados e reequilibrar a pele ressecada, oleosa ou mista.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Também contamos com protocolos específicos para diminuição da papada e para trazer um aspecto saudável
              de pescoço, colo e mãos, valorizando a sua beleza de forma natural e não invasiva.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/Tratfacial.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* LIMPEZA DE PELE */}
        <Typography variant="h4" sx={{ mt: 6 }}>
          Limpeza de pele
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              A limpeza de pele é um cuidado essencial para manter a pele mais equilibrada, macia e com aspecto saudável
              no dia a dia. Ela auxilia na remoção de impurezas, excesso de oleosidade e células mortas que se
              acumulam ao longo da rotina, preparando a pele para absorver melhor os ativos de tratamento.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Indicada para quem sente a pele pesada, com poros aparentes, cravinhos ou brilho excessivo, a limpeza de
              pele também pode ser associada a outros protocolos faciais, potencializando resultados e mantendo a pele
              com toque mais uniforme e confortável.
            </Typography>

            <Box component="ul" sx={{ mt: 1.5, pl: 3, color: "text.secondary" }}>
              <li>Ajuda a desobstruir poros e reduzir a aparência de cravos</li>
              <li>Contribui para controlar oleosidade e brilho excessivo</li>
              <li>Melhora a textura e o viço da pele</li>
              <li>Prepara a pele para receber melhor outros tratamentos faciais</li>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              overflow: "hidden",
            }}
          >
            <Image
              src="/image/tratamentos/limpeza.jpg"
              alt="Limpeza de pele na UnaEssential"
              width={800}
              height={600}
              style={{
                width: "110%",
                height: "110%",
                objectFit: "cover",
                objectPosition: "center 45%",
                display: "block",
              }}
            />
          </Box>
        </Stack>

        {/* SPA & DAY SPA */}

        {/* HEAD SPA */}
        <Typography
          id="head-spa"
          variant="h4"
          sx={{ mt: 8, scrollMarginTop: { xs: 96, md: 112 } }}
        >
          Head SPA
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              O Head SPA é um ritual dedicado ao couro cabeludo, fios e à sua mente. Através de movimentos específicos,
              massagens relaxantes e produtos de alta performance, trabalhamos limpeza profunda, hidratação, nutrição e
              reconstrução dos fios, enquanto promovemos alívio de tensão e sensação de leveza.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Entre os principais benefícios estão a melhora da circulação local, redução de tensão em pescoço e
              ombros, sensação de relaxamento profundo, fios mais alinhados e couro cabeludo equilibrado. É um cuidado
              que integra estética e bem-estar em um único momento.
            </Typography>

            <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
                  head spa basic
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                  60 minutos de cuidado
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                  Ritual pensado para uma pausa mais curta, porém completa: foco em limpeza, massagem relaxante de
                  couro cabeludo e aplicação de produtos que hidratam e nutrem os fios. Uma experiência sensorial com
                  lavagem terapêutica e hidratação, nutrição e reconstrução dos fios, promovendo relaxamento, leveza e
                  bem-estar.
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
                  head spa essential
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                  90 minutos de imersão
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                  Uma experiência mais longa e imersiva, com tempo extra para técnicas manuais, massagens e permanência
                  dos produtos de tratamento, potencializando o resultado de hidratação e reconstrução dos fios. Um
                  cuidado completo que une lavagem terapêutica, hidratação, nutrição e reconstrução capilar, esfoliação e
                  argila com óleos essenciais que estimulam o crescimento e fortalecimento dos fios, além de máscara
                  facial para uma pele cuidada.
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/HSPA.MP4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* MASSAGENS CORPORAIS (SPA) */}
        <Typography
          id="massagens-spa"
          variant="h4"
          sx={{ mt: 8, scrollMarginTop: { xs: 96, md: 112 } }}
        >
          Massagens corporais (SPA)
        </Typography>

        {/* Massagem relaxante */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 4 }}>
          <Box sx={{ flex: 2 }}>
            <Typography variant="h5">Massagem relaxante</Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
              Duração: 50 minutos
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
              A massagem relaxante é ideal para quem sente o corpo pesado, mente acelerada e dificuldade para
              desacelerar. Através de manobras suaves e contínuas, diminui a tensão muscular, melhora a circulação e
              ajuda a aliviar dores ligadas ao estresse do dia a dia.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Indicada para cansaço físico e mental, noites mal dormidas e sensação de sobrecarga, essa massagem
              oferece uma pausa para respirar e se reconectar com o próprio corpo.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 200,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/Relax.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* Massagem com pedras quentes */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 6 }}>
          <Box sx={{ flex: 2 }}>
            <Typography variant="h5">Massagem com pedras quentes</Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
              Duração: 50 minutos
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
              A massagem com pedras quentes combina calor terapêutico e toque suave para aliviar dores musculares
              profundas, rigidez e sensação de corpo travado. As pedras aquecidas deslizam pela pele, promovendo
              relaxamento intenso e conforto imediato.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Indicada para quem sente muita tensão em costas, pescoço e ombros, bem como para momentos de maior
              estresse emocional, ajudando a aquecer, soltar e acalmar o corpo por completo.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 200,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/Pedras.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* Massagem Aura */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 6 }}>
          <Box sx={{ flex: 2 }}>
            <Typography variant="h5">Massagem Aura</Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
              Duração: 50 minutos
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
              A massagem Aura é uma massagem eletrovibracional que utiliza uma corrente terapêutica sensorial e
              relaxante. Essa corrente tem efeito anti-inflamatório, drenante e estimula a oxigenação dos tecidos,
              sendo considerada uma corrente detox.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Indicada para quem sente inchaço, retenção de líquidos, dor localizada e sensação de peso nas pernas ou
              no corpo, ela auxilia na eliminação de toxinas e na melhora da circulação, ao mesmo tempo em que
              proporciona relaxamento profundo.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 200,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/Aura.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* DETOX SPA INTENSIVO */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 8 }}>
          <Box sx={{ flex: 2 }}>
            <Typography variant="h5">Detox SPA intensivo</Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
              Duração: 80 minutos
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
              O Detox Intensivo associa manta térmica para estímulo da sudorese, drenagem linfática e aplicação de
              argila detox. A manta térmica possui massageadores embutidos que promovem uma sudorese intensa, porém
              controlada, auxiliando na eliminação de toxinas e na sensação de bem-estar.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Esse tratamento auxilia na eliminação de toxinas, redução de inchaços, melhora da circulação e sensação
              de leveza, promovendo bem-estar e revitalização corporal, enquanto a argila age na região abdominal e a
              drenagem relaxante completa a experiência.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 200,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/detox.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* TRATAMENTOS FACIAIS EM CLIMA DE SPA */}
        <Typography
          id="experiencias-faciais-spa"
          variant="h4"
          sx={{ mt: 8, scrollMarginTop: { xs: 96, md: 112 } }}
        >
          Experiências faciais em clima de SPA
        </Typography>

        {/* Peeling vulcânico */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 4 }}>
          <Box sx={{ flex: 2 }}>
            <Typography variant="h5">Peeling vulcânico</Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
              Duração: 60 minutos
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
              O peeling vulcânico renova a pele sem descamar, proporcionando textura mais uniforme, toque macio e
              viço saudável. É uma ótima opção para quem sente a pele opaca, com poros aparentes ou marcas leves, mas
              não quer passar pelo desconforto de descamações intensas.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Pode ser realizado como tratamento avulso ou como adicional dentro do tempo do Head SPA ou do Day SPA,
              otimizando o tempo de serviço e potencializando o relaxamento e os resultados. Dessa forma, você
              conquista um melhor custo-benefício ao unir cuidado facial e bem-estar em um único momento.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 200,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/Vulcao.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* Hidratação intensiva facial multicamadas */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 6 }}>
          <Box sx={{ flex: 2 }}>
            <Typography variant="h5">Hidratação intensiva facial multicamadas</Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 0.5 }}>
              Duração: 75 minutos
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
              A hidratação intensiva facial multicamadas promove renovação potente e não agressiva das sete camadas da
              pele, utilizando ativos concentrados que hidratam profundamente, reforçam a barreira de proteção e
              deixam a pele com aparência mais confortável, luminosa e viçosa.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Pode ser realizada como tratamento isolado ou em associação ao Day SPA, otimizando o tempo de sessão ao
              ser combinada com o Head SPA e outros rituais. Assim, você recebe um cuidado completo com melhor
              custo-benefício, cuidando do rosto e do corpo no mesmo encontro.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 200,
              overflow: "hidden",
            }}
          >
            <Box
              component="video"
              src="/Reels/hidrat.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* SPA DOS LÁBIOS */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 6 }}>
          <Box sx={{ flex: 2 }}>
            <Typography variant="h5">Spa dos Lábios</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              A esfoliação remove suavemente as células mortas, preparando a pele para receber ativos hidratantes. Em
              seguida, a hidratação profunda devolve maciez, viço e conforto, deixando os lábios renovados, nutridos e
              com aspecto saudável.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              O Spa dos Lábios é oferecido apenas como serviço adicional, pois é um cuidado que complementa outros
              tratamentos, potencializando o resultado e trazendo mais conforto e beleza para a região.
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 200,
              overflow: "hidden",
            }}
          >
            <Image
              src="/image/tratamentos/spalabio.jpg"
              alt="Spa dos Lábios na UnaEssential"
              width={800}
              height={600}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </Box>
        </Stack>

        {/* DAY SPA */}
        <Typography
          id="day-spa"
          variant="h4"
          sx={{ mt: 8, scrollMarginTop: { xs: 96, md: 112 } }}
        >
          Day SPA unaessential
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
          O Day SPA foi criado para quem deseja algumas horas inteiras de pausa e reconexão consigo mesma. São
          sequências de tratamentos pensadas para aliviar dores, reduzir tensões, cuidar da pele e acalmar a mente em
          uma única experiência.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
          Você pode escolher entre 2h, 3h ou 4h consecutivas de puro relaxamento, sempre com protocolos montados de
          forma personalizada para a sua necessidade: mais foco em corpo, em rosto, em cabeça ou em todos eles ao mesmo
          tempo.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
          O Spa dos Pés é um tratamento completo que inclui escalda-pés, esfoliação, hidratação profunda e massagem
          relaxante. Ele promove alívio de tensões, melhora da circulação, maciez da pele e uma sensação intensa de
          conforto e bem-estar, proporcionando descanso e renovação para os pés.
        </Typography>

        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2, maxWidth: 760 }}>
          Em alguns rituais de Day SPA, o Spa dos Pés já está incluso como parte da experiência completa de cuidado e
          relaxamento.
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ mt: 3 }}>
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              p: 2.5,
            }}
          >
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
              Ritual Not Basic
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              120 minutos de cuidado
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              Sugestão: Head SPA + Massagem relaxante nas costas com ou sem pedras quentes + tratamento facial com
              máscara revitalizadora ou com Máscara Vulcânica, incluso secagem dos fios com escalda-pés aromático.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              p: 2.5,
            }}
          >
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
              Ritual Essential
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              180 minutos de imersão
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              Sugestão: Head SPA Essential + Drenagem Linfática corporal e facial + Massagem relaxante nas costas com
              ou sem pedras quentes + tratamento facial com Máscara Vulcânica ou Rejuvenescimento intensivo
              Multicamadas, finalizando com SPA dos pés (esfoliação e hidratação dos pés), incluso secagem dos fios
              com escalda-pés.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              p: 2.5,
            }}
          >
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 1 }}>
              Ritual Essential Premium
            </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              240 minutos de renovação profunda
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
              Sugestão: Head SPA Essential + Drenagem Linfática corporal e facial + Massagem relaxante nas costas com
              ou sem pedras quentes + Detox Corporal + Tratamento facial com Máscara Vulcânica ou Rejuvenescimento
              Intensivo Multicamadas + SPA dos Lábios (esfoliação e hidratação), finalizando com SPA dos Pés
              (esfoliação e hidratação dos pés) + Reflexologia Podal + Escalda-pés aromático + Escova para finalizar
              os fios.
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            mt: 4,
            borderRadius: 3,
            border: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            minHeight: 220,
            overflow: "hidden",
          }}
        >
          <Box
            component="video"
            src="/Reels/dayspa.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </Box>
      </Container>
    </Box>
  );
}
