import type { Metadata } from "next";
import { CriolipoliseLanding } from "./CriolipoliseLanding";
import { criolipoliseFaqs } from "./faq";

export const metadata: Metadata = {
  title: "Criolipólise em Florianópolis | Una Essential",
  description:
    "Entenda como funciona a criolipólise de placas, indicações, cuidados, riscos e resultados. Avaliação individual na Una Essential em Florianópolis.",
};

export default function CriolipolisePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: criolipoliseFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
      />
      <CriolipoliseLanding />
    </>
  );
}
