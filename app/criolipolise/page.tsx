import type { Metadata } from "next";
import { CriolipoliseLanding } from "./CriolipoliseLanding";

export const metadata: Metadata = {
  title: "Criolipólise personalizada | Unaessential",
  description:
    "Conheça os protocolos personalizados de criolipólise da Unaessential para lipedema, gordura localizada e flacidez.",
};

export default function CriolipolisePage() {
  return <CriolipoliseLanding />;
}
