import { CTAButton } from "@/components/CTAButton/CTAButton";
import { FAQ } from "@/components/FAQ/FAQ";
import { Feedbacks } from "@/components/Feedbacks/Feedbacks";
import { SITE_CONFIG } from "@/config/site";
import { getFeedbacks } from "@/lib/getFeedbacks";

const steps = [
  {
    number: "01",
    title: "A base",
    text: "Conta, pixel e rastreamento. O que a Meta precisa enxergar para te entregar as pessoas certas."
  },
  {
    number: "02",
    title: "O criativo",
    text: "Como falar com quem compra, e nao com quem so curte. O anuncio filtra antes do grupo encher."
  },
  {
    number: "03",
    title: "A campanha",
    text: "Subir, acompanhar e ler os numeros sem achismo. Quando cortar, quando esperar, quando mexer."
  },
  {
    number: "04",
    title: "A escala",
    text: "Crescer sem estourar o custo por membro. Como transformar isso em rotina, nao em sorte."
  }
];

const bonuses = [
  {
    icon: "▣",
    title: "Como criar landing pages",
    text: "A pagina que recebe o clique do anuncio e leva para seu grupo. Voce monta sozinho, sem depender de ninguem."
  },
  {
    icon: "↯",
    title: "Como automatizar os grupos",
    text: "Menos trabalho manual todo dia. O que da para automatizar sem perder qualidade."
  },
  {
    icon: "◎",
    title: "Grupo de networking",
    text: "Um lugar para trocar com quem esta fazendo a mesma coisa. Duvida travada, teste que deu certo, parceria."
  }
];

const fitItems = [
  "Voce ja tem um grupo, mesmo pequeno, e quer enche-lo.",
  "Depende so do organico e travou no crescimento.",
  "Topa investir um valor pequeno por dia para testar.",
  "Quer tratar afiliacao como negocio, nao como bico."
];

const notFitItems = [
  "Procura dinheiro rapido sem colocar nada em anuncio.",
  "Espera resultado sem acompanhar numero nenhum.",
  "Quer formula magica ou promessa de valor fixo por mes."
];

const faqs = [
  {
    question: "Preciso investir muito em anuncio?",
    answer:
      "Nao. A ideia e comecar com uma verba pequena, validar o criativo e aumentar apenas quando os numeros fizerem sentido."
  },
  {
    question: "Nao entendo nada de trafego. Consigo acompanhar?",
    answer:
      "Sim. O metodo foi pensado para mostrar a ordem certa: base, criativo, campanha e escala."
  },
  {
    question: "Serve para qualquer nicho de grupo?",
    answer:
      "Serve melhor para grupos com oferta clara e publico comprador, como achadinhos, promocoes e comunidades de recomendacao."
  },
  {
    question: "Em quanto tempo eu vejo resultado?",
    answer:
      "Depende da oferta, verba e execucao. O foco e criar um processo mensuravel, nao depender de sorte."
  },
  {
    question: "Por quanto tempo eu tenho acesso?",
    answer:
      "O acesso fica vinculado ao email usado na compra, com material organizado para consultar quando precisar."
  }
];

export default function Home() {
  const feedbacks = getFeedbacks();

  return (
    <main>
      <section className="hero">
        <div className="page-shell hero__inner">
          <div className="hero__copy">
            <h1>
              Lote seus grupos com membros <span>compradores.</span>
            </h1>
            <p className="hero__subtitle">
              Trafego pago para atrair quem compra, nao quem entra e some.
            </p>
          </div>

          <div className="reel">
            <iframe
              title="Apresentacao do metodo Afiliada Pro"
              src="https://www.youtube.com/embed/rUeEl3SgxvU"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <CTAButton trackingName="hero">Quero membros compradores</CTAButton>
        </div>
      </section>

      {feedbacks.length > 0 ? (
        <Feedbacks feedbacks={feedbacks} />
      ) : (
        <section className="cream-card proof-card">
          <div className="narrow">
            <p className="kicker">Provas</p>
            <h2>
              Resultado nao se explica.
              <br />
              Se mostra.
            </h2>
            <p className="section-copy">
              Prints reais de grupo crescendo e de comissao entrando. Quando
              seus resultados entrarem aqui, a pagina mostra tudo automaticamente.
            </p>
            <CTAButton trackingName="provas">Quero membros compradores</CTAButton>
          </div>
        </section>
      )}

      <section className="story-card">
        <div className="story-photo" aria-label="Foto ilustrativa de rotina de trabalho">
          <div className="story-gradient" />
          <p>
            Eu vivo disso. Todo dia.
            <span>Metodo direto para grupos de achadinhos.</span>
          </p>
        </div>
      </section>

      <section className="cream-card intro-card">
        <div className="chat-stack">
          <div className="chat-header">
            <img
              src="/Eu%20vivo%20disso.%20Todo%20dia..jpg"
              alt="Edu Fernandes"
            />
            <div>
              <p>Edu Fernandes</p>
              <span>online</span>
            </div>
          </div>
          <div className="chat-body" aria-label="Conversa de WhatsApp">
            <p className="chat-bubble">
              Oi. Antes de te vender qualquer coisa, deixa eu te contar quem eu sou.
              <span>20:41</span>
            </p>
            <p className="chat-bubble">
              Não sou guru. Sou gestor de tráfego há 4 anos. Antes disso, viver da internet era só um sonho meu.
              <span>20:41</span>
            </p>
            <p className="chat-bubble">
              Sou cristão, marido e pai. Foi no mundo dos achadinhos que eu me encontrei, e foi ali que a minha vida mudou.
              <span>20:42</span>
            </p>
            <p className="chat-bubble">
              E olha, eu não fiz nada que você não possa fazer. O que mudou tudo foi o tráfego pago. Isso se aprende.
              <span>20:42</span>
            </p>
            <p className="chat-bubble chat-bubble--sent">
              Mas eu não entendo nada de anúncio.
              <span>20:43 ✓✓</span>
            </p>
            <p className="chat-bubble">
              Não tem problema. Eu vou pegar na sua mão e te instruir do zero, sem pular etapa.
              <span>20:44</span>
            </p>
            <p className="chat-bubble chat-bubble--sent">
              E se eu gastar e não vender nada?
              <span>20:45 ✓✓</span>
            </p>
            <p className="chat-bubble">
              Você vai começar gastando pouco. Eu te mostro como ler os números antes de escalar, pra você cortar o que não dá retorno em vez de insistir no escuro.
              <span>20:46</span>
            </p>
            <p className="chat-bubble">
              Hoje eu quero repartir o conhecimento que o Senhor me confiou. Ele transformou a minha realidade, e eu acredito que pode transformar a sua.
              <span>20:47</span>
            </p>
            <p className="chat-bubble">
              É exatamente isso que eu ensino no AfiliadaPro.
              <span>20:47</span>
            </p>
          </div>
        </div>
        <CTAButton trackingName="intro">Quero membros compradores</CTAButton>
      </section>

      <section className="dark-section">
        <div className="narrow">
          <p className="kicker">O que voce vai aprender</p>
          <h2>Na ordem que funciona.</h2>
          <p className="section-copy">
            Cada etapa so faz sentido depois da anterior. E por isso que tanta
            gente pula direto para o anuncio e queima dinheiro.
          </p>

          <div className="steps">
            {steps.map((step) => (
              <article className="step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="kicker bonus-kicker">Bonus</p>
          <h2>E ainda vem junto.</h2>
          <div className="bonus-list">
            {bonuses.map((bonus) => (
              <article className="bonus" key={bonus.title}>
                <span aria-hidden="true">{bonus.icon}</span>
                <div>
                  <h3>{bonus.title}</h3>
                  <p>{bonus.text}</p>
                </div>
              </article>
            ))}
          </div>

          <CTAButton trackingName="metodo">Quero membros compradores</CTAButton>
        </div>
      </section>

      <section className="cream-card fit-section">
        <div className="narrow">
          <p className="kicker">Antes de voce comprar</p>
          <h2>Isso nao serve pra todo mundo.</h2>
          <p className="section-copy">
            Prefiro perder uma venda a ter alguem frustrado la dentro.
          </p>

          <div className="fit-grid">
            <article className="fit-box">
              <h3>E pra voce se...</h3>
              <ul>
                {fitItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="fit-box fit-box--no">
              <h3>Nao e pra voce se...</h3>
              <ul>
                {notFitItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <CTAButton trackingName="objecao">Quero membros compradores</CTAButton>
        </div>
      </section>

      <section className="dark-section faq-section">
        <div className="narrow">
          <p className="kicker">Perguntas</p>
          <h2>O que sempre me perguntam.</h2>
          <FAQ items={faqs} />
          <CTAButton trackingName="faq">Quero membros compradores</CTAButton>
        </div>
      </section>

      <section className="cream-card offer-section">
        <div className="offer-box">
          <h2>
            Voce nao precisa
            <br />
            de mais gente.
          </h2>
          <p>Precisa da gente certa. E isso que o trafego bem feito entrega.</p>
          <p className="old-price">De R$ 197 por</p>
          <div className="price">
            <span>R$</span>
            {SITE_CONFIG.productPrice.replace("R$ ", "")}
          </div>
          <CTAButton trackingName="oferta">Comecar agora</CTAButton>
          <small>Compra segura. Voce recebe o acesso no email logo apos o pagamento.</small>
        </div>
      </section>

      <footer className="footer">
        <p>Gilnathan de Araujo Reis</p>
        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.gilnathanreis.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GR Code
          </a>
        </p>
        <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
