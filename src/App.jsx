import './App.css'
import som from './assets/som.jpg'

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Simon och Michaela">
          S<span>&</span>M
        </a>
        <nav className="site-nav" aria-label="Huvudnavigering">
          <a href="#the-day">Tider</a>
          <a href="#getting-here">Hitta hit</a>
          <a href="#faq">FAQ</a>
          <a className="nav-rsvp" href="#rsvp">OSA <span aria-hidden="true">-&gt;</span></a>
        </nav>
      </header>

      <main>
        <section className="invitation" aria-labelledby="couple-names">
          <div className="invitation-copy">
            <p className="eyebrow">INBJUDAN TILL VÅR BRÖLLOPSDAG</p>
            <h1 id="couple-names">Simon <span className="name-ampersand">&</span><br />Michaela</h1>
            <p className="invitation-note">Vi vill gärna fira vår stora dag tillsammans med dig.</p>
            <div className="event-date">
              <span className="date-rule" aria-hidden="true"></span>
              <div>
                <time dateTime="2027-06-19T13:30">19 juni 2027 kl. 13.30</time>
                <p>Bromma kyrka</p>
              </div>
            </div>
            <a className="button-link" href="#the-day">Se dagens tider <span aria-hidden="true">-&gt;</span></a>
          </div>

          <figure className="photo-placeholder" role="img" aria-label="Plats för ett foto på Simon och Michaela">
            <div className="photo-placeholder__frame">
              <img src={som} alt="Simon och Michaela" className="photo-placeholder__image" />
            </div>
            <figcaption>♥</figcaption>
          </figure>
        </section>

        <section className="details" id="the-day" aria-labelledby="details-title">
          <div className="details-intro">
            <p className="eyebrow">DAGENS TIDER</p>
            <h2 id="details-title">En dag att minnas</h2>
            <p>Vi ser fram emot att fira tillsammans med våra favoritmänniskor.</p>
          </div>
          <ol className="schedule" aria-label="Dagens program">
            <li className="schedule-row">
              <time dateTime="2027-06-19T13:30">13.30</time>
              <span>Vigsel i Bromma kyrka</span>
            </li>
            <li className="schedule-row">
              <time dateTime="2027-06-19T14:00">14.00</time>
              <span>Vi kommer ut ur kyrkan och fotografering</span>
            </li>
            <li className="schedule-row">
              <time dateTime="2027-06-19T14:30">14.30</time>
              <span>Gästerna tar sig till Luckan, med ett eller två stopp längs vägen</span>
            </li>
            <li className="schedule-row">
              <time dateTime="2027-06-19T15:30">15.30</time>
              <span>Mingel</span>
            </li>
            <li className="schedule-row">
              <time dateTime="2027-06-19T16:30">16.30</time>
              <span>Tårta och brudskål</span>
            </li>
            <li className="schedule-row">
              <time dateTime="2027-06-19T18:00">18.00</time>
              <span>Middag</span>
            </li>
            <li className="schedule-row">
              <time dateTime="2027-06-19T20:00">20.00</time>
              <span>Fest</span>
            </li>
            <li className="schedule-row">
              <time dateTime="2027-06-20T01:00">01.00</time>
              <span>Kvällen avslutas</span>
            </li>
          </ol>
        </section>

        <section className="getting-here" id="getting-here" aria-labelledby="venue-title">
          <p className="eyebrow">PLATSERNA</p>
          <h2 id="venue-title">Vi ses i Bromma</h2>
          <p>Vigseln äger rum i Bromma kyrka. Efter ceremonin fortsätter firandet på Luckan Ängby.</p>
        </section>

        <section className="rsvp" id="rsvp" aria-labelledby="rsvp-title">
          <p className="eyebrow">HOPPAS VI SES</p>
          <h2 id="rsvp-title">OSA</h2>
          <p>Meddela oss gärna om du kommer och eventuella matrestriktioner: michaela.bergekrans@gmail.com</p>
          <a className="button-link button-link--dark" href="mailto:michaela.bergekrans@gmail.com?subject=OSA%20-%20Simon%20och%20Michaela">
            OSA via e-post <span aria-hidden="true">-&gt;</span>
          </a>
        </section>
          <section className="faq" id="faq" aria-labelledby="faq-title">
          <p className="eyebrow">ÖVRIG INFORMATION</p>
          <h2 id="faq-title">FAQ</h2>
          <p>Warner och Hummel är vårt toastpar! Hör av er till dem om ni vill hålla tal eller har andra funderingar.</p>
          <p>Er närvaro är den finaste gåvan vi kan få. För den som ändå vill ge en present önskar vi oss ett bidrag till vår kommande resa.<br /> Swisha gärna till brudens syster: +46 73 982 77 16</p>
        </section>
          <section className="kladkod" id="kladkod" aria-labelledby="kladkod-title">
          <p className="eyebrow">KLÄDKOD</p>
          <h2 id="kladkod-title">Mörk kostym</h2>
          <p>Vi önskar att alla gäster bär mörk kostym.</p>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top" aria-label="Till toppen">S<span>&</span>M</a>
        <p>Med kärlek, till våra favoritmänniskor.</p>
        <a href="#top">Till toppen <span aria-hidden="true">↑</span></a>
      </footer>
    </div>
  )
}

export default App
