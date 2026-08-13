"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import ElevatorRoundedIcon from "@mui/icons-material/ElevatorRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import styles from "./endereco.module.css";

const ADDRESS = "Av. Rio Branco, 354 - Condomínio Centro Executivo Maxim's, Sala 803 - Centro, Florianópolis - SC, 88015-200";
const MAPS_URL = "https://www.google.com/maps/place/Est%C3%A9tica,+Sa%C3%BAde+Integrativa+%26+SPA+-+UnaEssential/data=!4m2!3m1!1s0x0:0x39aa12bac372b03f?sa=X&ved=1t:2428&ictx=111";
const WAZE_URL = "https://waze.com/ul?q=Av.%20Rio%20Branco,%20354%20-%20Sala%20803%20-%20Centro,%20Florian%C3%B3polis%20-%20SC,%2088015-200&navigate=yes";
const UBER_URL = "https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=Av.%20Rio%20Branco,%20354%20-%20Sala%20803%20-%20Centro,%20Florian%C3%B3polis%20-%20SC,%2088015-200";
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5548991904131&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20para%20chegar%20%C3%A0%20Unaessential";

const routes = [
  { label: "Google Maps", detail: "Visualizar rota", href: MAPS_URL, icon: "/icons/google_maps.png" },
  { label: "Waze", detail: "Iniciar navegação", href: WAZE_URL, icon: "/icons/waze.png" },
  { label: "Uber", detail: "Solicitar uma viagem", href: UBER_URL, icon: "/icons/uber.png" },
];

export default function EnderecoPage() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-address-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.revealVisible);
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -45px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <video className={styles.heroVideo} src="/video/clinica.mp4" autoPlay muted loop playsInline preload="metadata" poster="/image/banners/recepcao.jpg" />
        <div className={styles.heroOverlay} />
        <span className={styles.heroOrbitOne} aria-hidden="true" />
        <span className={styles.heroOrbitTwo} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <span className={styles.eyebrowLight}>Nossa casa em Florianópolis</span>
          <h1>Um espaço para<br /><em>desacelerar.</em></h1>
          <p>No coração da cidade, um ambiente pensado para receber você com conforto, calma e cuidado em cada detalhe.</p>
          <a href="#como-chegar" className={styles.heroLink}>Como chegar <ArrowForwardRoundedIcon /></a>
        </div>
        <div className={styles.heroAddress}>
          <LocationOnRoundedIcon />
          <span><small>Centro · Florianópolis</small><b>Av. Rio Branco, 354 · Sala 803</b></span>
        </div>
        <div className={styles.heroIndex}><span>Unaessential</span><i /><b>08º andar</b></div>
      </section>

      <main>
        <section className={styles.arrivalSection} id="como-chegar">
          <header className={`${styles.sectionHeader} ${styles.reveal}`} data-address-reveal>
            <div><span className={styles.eyebrow}>Seu caminho até aqui</span><h2>Chegar é mais<br /><em>simples do que parece.</em></h2></div>
            <p>Estamos no Centro Executivo Maxim&apos;s, na Avenida Rio Branco. Escolha abaixo a forma mais prática de traçar a sua rota.</p>
          </header>

          <div className={styles.arrivalLayout}>
            <article className={`${styles.addressCard} ${styles.revealScale}`} data-address-reveal>
              <span className={styles.cardNumber}><LocationOnRoundedIcon className={styles.addressIcon} /></span>

              <span className={styles.cardEyebrow}>Endereço completo</span>
              <h3>Clínica<br />Unaessential</h3>
              <address>Av. Rio Branco, 354<br />Condomínio Centro Executivo Maxim&apos;s<br /><b>Sala 803 · Centro</b><br />Florianópolis · SC · 88015-200</address>
              <button className={styles.copyButton} onClick={handleCopyAddress} aria-live="polite">
                {copied ? <CheckRoundedIcon /> : <ContentCopyRoundedIcon />}
                {copied ? "Endereço copiado" : "Copiar endereço"}
              </button>
            </article>

            <div className={styles.routeArea}>
              <div className={`${styles.routeIntro} ${styles.reveal}`} data-address-reveal>
                <NearMeRoundedIcon />
                <div><span className={styles.cardEyebrow}>Escolha sua rota</span><h3>Abra no seu aplicativo preferido.</h3></div>
              </div>
              <div className={styles.routeList}>
                {routes.map((route, index) => (
                  <a href={route.href} target="_blank" rel="noopener noreferrer" className={`${styles.routeCard} ${styles.reveal}`} data-address-reveal key={route.label} style={{ transitionDelay: `${index * 90}ms` }}>
                    <span className={styles.routeIcon}><Image src={route.icon} alt="" width={34} height={34} /></span>
                    <span><b>{route.label}</b><small>{route.detail}</small></span>
                    <ArrowForwardRoundedIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mapSection}>
          <div className={`${styles.mapCopy} ${styles.reveal}`} data-address-reveal>
            <span className={styles.eyebrowLight}>Localização</span>
            <h2>Bem no coração<br />de Floripa.</h2>
            <p>Uma localização central para tornar o seu momento de cuidado ainda mais conveniente.</p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Ver mapa ampliado <ArrowForwardRoundedIcon /></a>
          </div>
          <div className={`${styles.mapFrame} ${styles.revealScale}`} data-address-reveal>
            <iframe title="Mapa da Unaessential" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.901397631423!2d-48.55733002471387!3d-27.59237767622432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527381f5f5da1d9%3A0xf4dd317e14956ca9!2sAv.%20Rio%20Branco%2C%20354%20-%20Sala%20803%20-%20Centro%2C%20Florian%C3%B3polis%20-%20SC%2C%2088015-200!5e0!3m2!1spt-BR!2sbr!4v1736512770000!5m2!1spt-BR!2sbr" width="100%" height="100%" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
            <span className={styles.mapPin}><LocationOnRoundedIcon /><small>Você chegou</small></span>
          </div>
        </section>

        <section className={styles.referenceSection}>
          <header className={`${styles.referenceHeader} ${styles.reveal}`} data-address-reveal>
            <span className={styles.eyebrow}>Para reconhecer o local</span>
            <h2>Da rua até<br />a nossa porta.</h2>
          </header>
          <div className={styles.referenceGrid}>
            <figure className={`${styles.facadeFigure} ${styles.revealScale}`} data-address-reveal>
              <Image src="/image/faixada.jpg" alt="Fachada do edifício onde fica a clínica Unaessential" fill sizes="(max-width: 800px) 100vw, 58vw" />
              <figcaption><span>803</span><b>Centro Executivo Maxim&apos;s</b><small>Av. Rio Branco, 354</small></figcaption>
            </figure>
            <div className={styles.arrivalSteps}>
              <article className={`${styles.stepCard} ${styles.reveal}`} data-address-reveal>
                <span><CorporateFareRoundedIcon /></span>
                <div><small>Ao chegar</small><h3>Procure pelo Centro Executivo Maxim&apos;s.</h3><p>A fachada do edifício ajuda você a identificar o endereço ainda na Avenida Rio Branco.</p></div>
              </article>
              <article className={`${styles.stepCard} ${styles.reveal}`} data-address-reveal>
                <span><ElevatorRoundedIcon /></span>
                <div><small>Dentro do edifício</small><h3>Suba até o 8º andar.</h3><p>A Unaessential espera por você na sala 803.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={`${styles.ctaShape} ${styles.revealScale}`} data-address-reveal><Image src="/logo/icon_unaessential.svg" alt="" width={45} height={80} /></div>
          <div className={`${styles.ctaCopy} ${styles.reveal}`} data-address-reveal>
            <span className={styles.eyebrowLight}>Estamos esperando você</span>
            <h2>Pronta para viver essa experiência?</h2>
            <p>Agende seu horário ou fale com a equipe caso precise de ajuda para chegar.</p>
            <div className={styles.ctaActions}>
              <Link href="/agendar" className={styles.primaryButton}>Agendar horário <ArrowForwardRoundedIcon /></Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}><WhatsAppIcon /> Falar com a equipe</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
