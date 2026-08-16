"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CTAButton } from "@/components/CTAButton/CTAButton";

export function Feedbacks({ feedbacks }) {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage]);

  if (!feedbacks.length) {
    return null;
  }

  return (
    <section className="cream-card proof-card">
      <div className="narrow">
        <p className="kicker">Provas</p>
        <h2>
          Resultado nao se explica.
          <br />
          Se mostra.
        </h2>
        <p className="section-copy">
          Prints reais de grupo crescendo e de comissao entrando. Arraste para o lado.
          Toque para ampliar.
        </p>
      </div>

      <div className="feedback-strip" aria-label="Feedbacks de alunos">
        {feedbacks.map((feedback) => (
          <button
            type="button"
            className="feedback-item"
            key={feedback.src}
            onClick={() => setActiveImage(feedback)}
          >
            <Image
              src={feedback.src}
              alt={feedback.alt}
              width={360}
              height={640}
              sizes="(max-width: 768px) 82vw, 260px"
            />
          </button>
        ))}
      </div>

      <CTAButton trackingName="provas">Quero membros compradores</CTAButton>

      {activeImage ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Feedback ampliado"
          onMouseDown={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="lightbox__close"
            aria-label="Fechar imagem ampliada"
            onClick={() => setActiveImage(null)}
          >
            ×
          </button>
          <div className="lightbox__image" onMouseDown={(event) => event.stopPropagation()}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={900}
              height={1400}
              sizes="92vw"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
