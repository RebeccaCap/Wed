import './App.css'

function App() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Simon och Michaela">
          S<span>&</span>M
        </a>
        <nav className="site-nav" aria-label="Huvudnavigering">
          <a href="#the-day">Dagen</a>
          <a href="#getting-here">Hitta hit</a>
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
              <span className="photo-placeholder__icon" aria-hidden="true"></span>
              <span className="photo-placeholder__label">HÄR KAN ETT FOTO LÄGGAS IN</span>
            </div>
            <figcaption>Plats för ett favoritfoto på oss.</figcaption>
          </figure>
        </section>

        <section className="details" id="the-day" aria-labelledby="details-title">
          <div className="details-intro">
            <p className="eyebrow">VÅR DAG</p>
            <h2 id="details-title">En dag att minnas</h2>
            <p>Vi ser fram emot att fira tillsammans med våra favoritmänniskor.</p>
          </div>
          <div className="schedule" aria-label="Dagens program">
            <div className="schedule-row">
              <time dateTime="13:30">13.30</time>
              <span>Vigsel i Bromma kyrka</span>
            </div>
            <div className="schedule-row">
              <span>Efter ceremonin</span>
              <span>Fortsatt firande på Luckan Ängby</span>
            </div>
          </div>
        </section>

        <section className="getting-here" id="getting-here" aria-labelledby="venue-title">
          <p className="eyebrow">PLATSERNA</p>
          <h2 id="venue-title">Vi ses i Bromma</h2>
          <p>Vigseln äger rum i Bromma kyrka. Efter ceremonin fortsätter firandet på Luckan Ängby.</p>
        </section>

        <section className="rsvp" id="rsvp" aria-labelledby="rsvp-title">
          <p className="eyebrow">HOPPAS VI SES</p>
          <h2 id="rsvp-title">OSA</h2>
          <p>Meddela oss gärna om du kommer och eventuella matrestriktioner.</p>
          <a className="button-link button-link--dark" href="mailto:rebecca.bergekrans@gmail.com?subject=OSA%20-%20Simon%20och%20Michaela">
            OSA via e-post <span aria-hidden="true">-&gt;</span>
          </a>
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
