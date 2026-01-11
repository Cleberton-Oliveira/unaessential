import { Container, Typography, Box, Stack, Button, Divider } from "@mui/material";

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
          <Button
            component="a"
            href="#criolipolise-placas"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Criolipólise de placas
          </Button>
          <Button
            component="a"
            href="#radiofrequencia"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Radiofrequência
          </Button>
          <Button
            component="a"
            href="#criofrequencia"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Criofrequência
          </Button>
          <Button
            component="a"
            href="#ultrassom-estetico"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Ultrassom estético
          </Button>
          <Button
            component="a"
            href="#tecarterapia"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Tecarterapia
          </Button>
          <Button
            component="a"
            href="#criotecarterapia"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Criotecarterapia
          </Button>
          <Button
            component="a"
            href="#radiofrequencia-fracionada"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Radiofrequência fracionada
          </Button>
          <Button
            component="a"
            href="#laser-led"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Laser &amp; LED
          </Button>
          <Button
            component="a"
            href="#vacuum-led"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Vacuum LED
          </Button>
          <Button
            component="a"
            href="#microcorrentes"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Microcorrentes
          </Button>
          <Button
            component="a"
            href="#corrente-russa-aussie"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Corrente russa &amp; aussie
          </Button>
          <Button
            component="a"
            href="#massagem-aura"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Massagem Aura
          </Button>
          <Button
            component="a"
            href="#manta-termica-detox"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Manta térmica detox
          </Button>
          <Button
            component="a"
            href="#bota-pneumatica"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Bota pneumática
          </Button>
          <Button
            component="a"
            href="#terapia-combinada"
            size="small"
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", fontSize: 13 }}
          >
            Terapia combinada
          </Button>
        </Box>

        {/* CRIOLIPÓLISE DE PLACAS */}
        <Typography id="criolipolise-placas" variant="h4" sx={{ mt: 5 }}>
          Criolipólise de placas
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal e facial
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              A criolipólise de placas utiliza resfriamento controlado para atuar na gordura localizada, promovendo
              redução de medidas ao mesmo tempo em que estimula a firmeza da pele.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Por meio do resfriamento uniforme, o tratamento auxilia na modelagem corporal, melhora do contorno e
              estímulo de colágeno, podendo ser aplicado no rosto e no corpo, de forma segura, confortável e não
              invasiva.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Na UnaEssential, é realizada de forma estática ou dinâmica, com protocolo e técnica exclusiva, construída
              a partir de referências científicas, com foco em resultados seguros, efetivos e duradouros. Essa forma de
              aplicação busca atuar não só na redução de volume, mas também na qualidade do tecido adiposo, ajudando a
              modular processos inflamatórios, a reduzir a sensação de nódulos de gordura típicos do lipedema e a
              estimular a produção de colágeno, especialmente o colágeno tipo I, que contribui diretamente para a firmeza
              e sustentação da pele.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Por isso, a criolipólise de placas é uma das principais aliadas nos protocolos da clínica para tratamento
              de lipedema em diferentes fases, além de ser integrada a planos de harmonização de contornos faciais e
              corporais, incluindo regiões como face, pescoço, colo, braços, abdômen e costas.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal e facial",
                "Foco em gordura localizada e redução de medidas",
                "Auxilia na modelagem e contorno corporal e facial",
                "Estimula colágeno e firmeza da pele",
                "Protocolo exclusivo, estático ou dinâmico, com forte atuação em protocolos para lipedema",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da criolipólise de placas, mostrando a aplicação das placas em áreas
              corporais e faciais.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* RADIOFREQUÊNCIA */}
        <Typography id="radiofrequencia" variant="h4" sx={{ mt: 5 }}>
          Radiofrequência
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal e facial
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              Estimula a produção natural de colágeno e elastina por meio de ondas eletromagnéticas, que geram uma
              sensação de aquecimento no local aplicado.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Auxilia na melhora da flacidez, definição de contornos, suavização de linhas e devolve firmeza e viço à
              pele do rosto e do corpo, com conforto e segurança.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Uso facial",
                "Auxilia na flacidez",
                "Ajuda na definição de contornos",
                "Contribui para suavização de linhas e viço da pele",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da radiofrequência, evidenciando o aquecimento controlado e a
              aplicação em região corporal ou facial.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* CRIOFREQUÊNCIA */}
        <Typography id="criofrequencia" variant="h4" sx={{ mt: 6 }}>
          Criofrequência
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal e facial
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              É uma radiofrequência que possui a ponteira de aplicação resfriada, podendo atingir até -6 ºC, que
              combina o resfriamento da superfície da pele com o aquecimento das camadas profundas. Esse conjunto
              estimula intensamente a produção de colágeno e elastina.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Auxilia na redução da flacidez, melhora da textura da pele e definição de contornos, promovendo firmeza,
              viço e rejuvenescimento no rosto e no corpo, com conforto e segurança.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Uso facial",
                "Auxilia na flacidez",
                "Melhora textura e contorno corporal e facial",
                "Estimula colágeno e elastina",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da criofrequência em uso, mostrando a ponteira resfriada e o conforto
              do procedimento.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* ULTRASSOM ESTÉTICO */}
        <Typography id="ultrassom-estetico" variant="h4" sx={{ mt: 6 }}>
          Ultrassom estético
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal e facial
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              Atua nas camadas mais profundas da pele, auxiliando na redução de gordura localizada, melhora da
              flacidez e estímulo à circulação.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Ele promove um contorno corporal e facial mais harmônico, melhora a textura da pele e potencializa os
              resultados de outros tratamentos, tudo de forma segura e confortável.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Uso facial",
                "Auxilia na gordura localizada",
                "Auxilia na flacidez",
                "Contribui para melhora da celulite e da circulação",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo do ultrassom estético, mostrando a aplicação e a experiência de
              conforto durante o procedimento.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* TECARTERAPIA */}
        <Typography id="tecarterapia" variant="h4" sx={{ mt: 6 }}>
          Tecarterapia
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Foco terapêutico corporal
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              É uma forma específica de radiofrequência, que atua mais profundamente nos tecidos e tem foco mais
              terapêutico, ajudando na circulação, alívio de dores e regeneração tecidual.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Diferente da radiofrequência tradicional, que tem foco principal na pele, a tecarterapia atua como uma
              importante aliada no tratamento de dores, melhora da flacidez e é especialmente indicada como suporte em
              protocolos para lipedema em fase inicial.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Foco em circulação e regeneração tecidual",
                "Auxilia no alívio de dores",
                "Contribui para melhora da flacidez",
                "Aliada em protocolos para lipedema em fase inicial",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da tecarterapia, evidenciando a aplicação em regiões corporais e o
              foco terapêutico.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* CRIOTECARTERAPIA */}
        <Typography id="criotecarterapia" variant="h4" sx={{ mt: 6 }}>
          Criotecarterapia
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Foco terapêutico corporal
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              É a combinação da tecarterapia com o resfriamento controlado da superfície da pele, unindo estímulo
              profundo dos tecidos com maior conforto térmico.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Essa associação potencializa a circulação, favorece a ação drenante e anti-inflamatória, estimula a
              regeneração celular e também o aumento de colágeno e elastina, contribuindo para uma pele e tecidos mais
              saudáveis.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Combina estímulo profundo com resfriamento superficial",
                "Potencializa a circulação e ação drenante",
                "Auxilia em processos inflamatórios",
                "Estimula colágeno, elastina e regeneração celular",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da criotecarterapia, mostrando o cuidado com o conforto térmico e o
              trabalho profundo nos tecidos.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* RADIOFREQUÊNCIA FRACIONADA */}
        <Typography id="radiofrequencia-fracionada" variant="h4" sx={{ mt: 6 }}>
          Radiofrequência fracionada
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal e facial
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              É a radiofrequência com ou sem resfriamento, realizada por meio de uma ponteira fracionada que emite
              disparos pontuais, promovendo estímulos precisos na pele.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Esses disparos favorecem a renovação cutânea, devolvem a luminosidade natural, com aparência mais
              saudável, e estimulam a produção de colágeno e elastina. Auxilia na melhora de linhas finas, como pés de
              galinha, flacidez localizada (como o chamado “umbigo triste”), estrias e promove o efeito glow nas áreas
              tratadas.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Uso facial",
                "Foco em renovação e luminosidade da pele",
                "Auxilia em linhas finas e flacidez localizada",
                "Pode ser aliado em estrias e efeito glow (bb glow) na pele",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da radiofrequência fracionada, mostrando a ponteira fracionada e as
              áreas de aplicação.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* LASER & LED */}
        <Typography id="laser-led" variant="h4" sx={{ mt: 6 }}>
          Laser &amp; LED
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal e facial
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              Por meio de laser e LED aplicados na cor, intensidade e tempo adequados, a fotobiomodulação estimula
              processos naturais do organismo, promovendo regeneração celular, melhora da circulação e equilíbrio
              inflamatório.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              O ILIB atua de forma sistêmica, auxiliando na oxigenação do sangue, recuperação, estímulo de colágeno e
              melhora da qualidade da pele, com efeito revitalizante e toque de rejuvenescimento.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Uso facial",
                "Auxilia na regeneração celular e equilíbrio inflamatório",
                "Contribui para melhora da circulação e oxigenação",
                "Suporte em dores e rejuvenescimento da pele",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da aplicação de laser e LED, evidenciando a luz sobre a pele e o clima
              de conforto do procedimento.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* VACUUM LED */}
        <Typography id="vacuum-led" variant="h4" sx={{ mt: 6 }}>
          Vacuum LED
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Foco corporal
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              Utiliza sucção associada à estimulação mecânica dos tecidos, promovendo melhora da circulação, drenagem
              linfática e estímulo do colágeno.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Auxilia na redução de celulite, retenção de líquidos e flacidez, melhora o contorno corporal e a textura
              da pele. Na clínica, é possível associar o vácuo com LEDs em diferentes comprimentos de onda para
              potencializar os resultados.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Auxilia na gordura localizada e contorno corporal",
                "Contribui para melhora da flacidez e celulite",
                "Favorece a drenagem linfática e circulação",
                "Ajuda a estimular o metabolismo local",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo do Vacuum LED em ação, mostrando a sucção suave, o uso de luzes e o
              cuidado com o conforto da pele.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* MICROCORRENTES */}
        <Typography id="microcorrentes" variant="h4" sx={{ mt: 6 }}>
          Microcorrentes
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal e facial
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              É a única corrente capaz de imitar a bioeletricidade natural do organismo, por meio de estímulos
              elétricos de baixa intensidade e imperceptíveis, tornando o tratamento indolor.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Auxilia na normalização das funções celulares, tonificação, melhora da flacidez, definição de contornos e
              revitalização da pele, promovendo uma aparência mais firme, iluminada e saudável no rosto e no corpo,
              além de potencializar os resultados de todos os protocolos estéticos.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Uso facial",
                "Melhora a qualidade e o metabolismo celular da pele",
                "Auxilia na eliminação de toxinas",
                "Ajuda a normalizar funções celulares e potencializar protocolos estéticos",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da aplicação de microcorrentes, mostrando a delicadeza e o conforto do
              procedimento.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* CORRENTE RUSSA E AUSSIE */}
        <Typography id="corrente-russa-aussie" variant="h4" sx={{ mt: 6 }}>
          Corrente russa &amp; aussie
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal e facial
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              A corrente russa utiliza estímulos elétricos para promover contrações musculares controladas.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Auxilia no fortalecimento e tonificação muscular, melhora da flacidez, definição de contornos e suporte
              ao contorno corporal e facial, potencializando os resultados dos protocolos estéticos, de forma segura e
              controlada no rosto e no corpo.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Uso facial selecionado",
                "Estimula contração muscular e tonificação",
                "Auxilia na flacidez e definição de contornos",
                "Potencializa protocolos de modelagem corporal e facial",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da corrente russa e aussie, evidenciando a aplicação em áreas
              corporais e de contorno facial.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* MASSAGEM AURA */}
        <Typography id="massagem-aura" variant="h4" sx={{ mt: 6 }}>
          Massagem Aura
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              Massagem com estímulos eletrovibratórios, promovendo relaxamento profundo, melhora da circulação e
              liberação de tensões.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Potencializa os resultados estéticos por ter ação drenante, anti-inflamatória e analgésica para dores,
              proporcionando sensação de leveza, conforto e reconexão com o próprio corpo.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Promove relaxamento e liberação de tensões",
                "Ação drenante e melhora da circulação",
                "Auxilia em processos inflamatórios e dores",
                "Potencializa protocolos estéticos corporais",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da Massagem Aura, transmitindo a sensação de relaxamento e acolhimento
              do ritual.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* MANTA TÉRMICA DETOX */}
        <Typography id="manta-termica-detox" variant="h4" sx={{ mt: 6 }}>
          Manta térmica detox
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              Promove aquecimento controlado, estimulando a circulação, a sudorese e o relaxamento muscular.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Auxilia na eliminação de toxinas, potencializa a redução de medidas, melhora a absorção de ativos e
              contribui para o bem-estar e leveza corporal, sendo uma excelente aliada nos protocolos estéticos, de
              forma confortável e segura.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal",
                "Aquecimento controlado para conforto e relaxamento",
                "Auxilia na eliminação de toxinas e retenção",
                "Potencializa redução de medidas e absorção de ativos",
                "Complemento em protocolos detox e de bem-estar",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da manta térmica detox, mostrando o aconchego e o clima de pausa do
              momento.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* BOTA PNEUMÁTICA */}
        <Typography id="bota-pneumatica" variant="h4" sx={{ mt: 6 }}>
          Bota pneumática
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal (membros inferiores)
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              A bota pneumática utiliza compressão de ar sequencial para estimular a circulação, a drenagem linfática e
              o retorno venoso.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Auxilia na redução de inchaço, sensação de peso e fadiga nas pernas, promovendo alívio, leveza e
              bem-estar, além de potencializar os resultados dos protocolos estéticos.
            </Typography>
            <Checklist
              items={[
                "Não invasivo",
                "Uso corporal (pernas e membros inferiores)",
                "Estimula circulação, drenagem linfática e retorno venoso",
                "Auxilia na redução de inchaço e sensação de peso",
                "Contribui para alívio de fadiga e bem-estar",
                "Potencializa protocolos estéticos corporais",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo da bota pneumática, mostrando o conforto do uso nas pernas.
            </Typography>
          </Box>
        </Stack>

        <Divider sx={{ mt: 6, mb: 4 }} />

        {/* TERAPIA COMBINADA */}
        <Typography id="terapia-combinada" variant="h4" sx={{ mt: 6 }}>
          Terapia combinada
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.5 }}>
          Não invasivo · Corporal e facial (dependendo das tecnologias associadas)
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ mt: 2, alignItems: { xs: "flex-start", md: "stretch" } }}
        >
          <Box sx={{ flex: 2 }}>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
              A terapia combinada permite a associação de duas ou mais tecnologias no mesmo atendimento, seja de forma
              simultânea em diferentes áreas ou por meio de um único aplicador.
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, maxWidth: 760 }}>
              Essa integração potencializa os resultados dos tratamentos, otimiza tempo, estimula diferentes camadas dos
              tecidos e promove melhora da flacidez, contorno e qualidade geral da pele.
            </Typography>
            <Checklist
              items={[
                "Não invasivo (de acordo com as tecnologias associadas)",
                "Pode ser usada em protocolos corporais e faciais",
                "Associação estratégica de tecnologias em uma mesma sessão",
                "Otimiza tempo de atendimento e resultados",
                "Estimula diferentes camadas de tecido",
                "Foco em flacidez, contorno e qualidade global da pele",
              ]}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              border: 1,
              borderColor: "divider",
              bgcolor: "background.paper",
              minHeight: 220,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Espaço reservado para foto ou vídeo de terapia combinada, mostrando o uso de mais de uma tecnologia na
              mesma sessão.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
