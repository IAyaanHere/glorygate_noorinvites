const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export function renderInvitation(config) {
  const {
    couple,
    copy,
    wedding,
    media,
    venue,
    dressCode,
    preWeddingEvents,
    program,
    rsvp,
    sections,
  } = config;

  return `
    <section class="hero" id="top" aria-label="Opening invitation">
      <video
        class="hero__video"
        id="intro-video"
        preload="auto"
        playsinline
        webkit-playsinline
        muted
        poster="${escapeHtml(media.introPoster)}"
      >
        <source src="${escapeHtml(media.introVideo)}" type="video/mp4" />
      </video>

      <img
        class="hero__poster-frame"
        id="hero-poster-frame"
        src="${escapeHtml(media.introPoster)}"
        alt=""
        aria-hidden="true"
      />

      <div class="botanical-corner botanical-corner--top" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="botanical-corner botanical-corner--bottom" aria-hidden="true"><i></i><i></i><i></i></div>

      <button class="music-control" id="music-control" type="button" aria-label="Turn music on">
        <span class="music-control__icon" aria-hidden="true">♪</span>
        <span class="music-control__label">Sound ready</span>
      </button>

      <button class="opening-gate" id="opening-gate" type="button" aria-label="Open wedding invitation"></button>

      <div class="hero__content" id="hero-content" aria-hidden="true">
        <p class="hero__kicker">${escapeHtml(copy.heroKicker)}</p>
        <p class="hero__intro">${escapeHtml(copy.heroInvitationLineOne)}</p>

        <h1 class="hero__names">
          <span class="hero__person">
            <span class="hero__name">${escapeHtml(couple.brideName)}</span>
            <span class="hero__parents">${escapeHtml(couple.brideParents)}</span>
          </span>

          <span class="hero__ampersand">&amp;</span>

          <span class="hero__person">
            <span class="hero__name">${escapeHtml(couple.groomName)}</span>
            <span class="hero__parents">${escapeHtml(couple.groomParents)}</span>
          </span>
        </h1>

        <p class="hero__intro hero__intro--after">${escapeHtml(copy.heroInvitationLineTwo)}</p>
        <p class="hero__closing-line">${escapeHtml(copy.heroClosingLine)}</p>
      </div>

      <a class="scroll-cue" id="scroll-cue" href="#welcome" aria-label="Scroll to invitation details">
        <span>Scroll down</span><i></i>
      </a>
    </section>

    <audio id="background-music" src="${escapeHtml(media.backgroundMusic)}" preload="auto" loop></audio>

    ${sections.welcome ? `
      <section class="section welcome reveal-on-scroll" id="welcome">
        <div class="section__inner section__inner--narrow">
          <p class="section-kicker">${escapeHtml(copy.welcomeKicker)}</p>
          <h2>${escapeHtml(copy.welcomeTitle)}</h2>
          <p class="lead">${escapeHtml(copy.welcomeBody)}</p>
          <div class="flourish" aria-hidden="true"><span></span><b>❀</b><span></span></div>
        </div>
      </section>
    ` : ""}

    ${sections.scratchReveal ? `
      <section class="section date-reveal reveal-on-scroll" id="date-reveal">
        <div class="section__inner">
          <p class="section-kicker" id="date-kicker">${escapeHtml(copy.dateIntro)}</p>
          <h2 id="date-heading">${escapeHtml(copy.datePrompt)}</h2>
          <p class="gesture-hint">Use your finger across the card</p>

          <div class="scratch-wrap" id="scratch-wrap">
            <div class="date-card" aria-live="polite">
              <span class="date-card__flower" aria-hidden="true">❀</span>
              <p class="date-card__eyebrow">You’re invited</p>
              <p class="date-card__date">${escapeHtml(wedding.displayDate)}</p>
              <div class="date-card__meta">
                <span>${escapeHtml(wedding.day)}</span>
                <i></i>
                <span>${escapeHtml(wedding.time)}</span>
              </div>
              <p class="date-card__venue">${escapeHtml(venue.name)}</p>
            </div>
            <canvas id="scratch-canvas" aria-label="Scratch surface covering the wedding date"></canvas>
          </div>

          <div class="petal-layer" id="petal-layer" aria-hidden="true"></div>
        </div>
      </section>
    ` : ""}

    ${sections.gallery ? `
      <section class="section gallery-section reveal-on-scroll" id="gallery">
        <div class="section__inner">
          <p class="section-kicker">${escapeHtml(copy.galleryKicker)}</p>
          <h2>${escapeHtml(copy.galleryTitle)}</h2>

          <div class="gallery" id="gallery-slider">
            <div class="gallery__track">
              ${media.gallery.map((image, index) => `
                <figure class="gallery__slide ${index === 0 ? "is-active" : ""}" aria-hidden="${index === 0 ? "false" : "true"}">
                  <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" />
                </figure>
              `).join("")}
            </div>

            <div class="gallery__dots" aria-label="Choose gallery image">
              ${media.gallery.map((_, index) => `
                <button
                  type="button"
                  data-slide="${index}"
                  aria-label="View image ${index + 1}"
                  aria-current="${index === 0 ? "true" : "false"}"
                  class="${index === 0 ? "is-active" : ""}"
                ></button>
              `).join("")}
            </div>
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.countdown ? `
      <section class="section countdown-section reveal-on-scroll" id="countdown">
        <div class="section__inner">
          <p class="section-kicker">${escapeHtml(copy.countdownKicker)}</p>
          <h2>${escapeHtml(copy.countdownTitle)}</h2>
          <div class="countdown" id="countdown-clock" data-target="${escapeHtml(wedding.isoDateTime)}">
            ${["Days", "Hours", "Minutes", "Seconds"].map((label) => `
              <div class="countdown__unit">
                <strong data-unit="${label.toLowerCase()}">00</strong>
                <span>${label}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.timeline ? `
      <section class="section timeline-section reveal-on-scroll" id="timeline">
        <div class="section__inner section__inner--narrow">
          <p class="section-kicker">${escapeHtml(copy.timelineKicker)}</p>
          <h2>${escapeHtml(copy.timelineTitle)}</h2>
          <div class="timeline">
            ${program.map((item, index) => `
              <article class="timeline__item">
                <div class="timeline__marker"><span>${index + 1}</span></div>
                <div class="timeline__content">
                  <time>${escapeHtml(item.time)}</time>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.detail)}</p>
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.venue ? `
      <section class="section venue-section reveal-on-scroll" id="venue">
        <div class="venue-card">
          <div class="venue-card__leaves" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
          <div class="venue-card__content">
            <p class="section-kicker">${escapeHtml(copy.venueKicker)}</p>
            <h2>${escapeHtml(copy.venueTitle)}</h2>
            <h3>${escapeHtml(venue.name)}</h3>
            <address>${escapeHtml(venue.address)}</address>
            <p>${escapeHtml(venue.note)}</p>
            <a class="button button--light" href="${escapeHtml(venue.mapsUrl)}" target="_blank" rel="noreferrer">View on Google Maps ↗</a>
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.dressCode ? `
      <section class="section dress-section reveal-on-scroll" id="dress-code">
        <div class="section__inner section__inner--narrow">
          <p class="section-kicker">${escapeHtml(copy.dressCodeKicker)}</p>
          <h2>${escapeHtml(copy.dressCodeTitle)}</h2>
          <h3>${escapeHtml(dressCode.title)}</h3>
          <p class="lead">${escapeHtml(dressCode.description)}</p>
          <div class="palette" aria-label="Suggested colour palette">
            ${dressCode.palette.map((color) => `<span style="--swatch:${escapeHtml(color)}" title="${escapeHtml(color)}"></span>`).join("")}
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.preWeddingEvents ? `
      <section class="section events-section reveal-on-scroll" id="events">
        <div class="section__inner">
          <p class="section-kicker">${escapeHtml(copy.preWeddingKicker)}</p>
          <h2>${escapeHtml(copy.preWeddingTitle)}</h2>
          <div class="event-grid">
            ${preWeddingEvents.map((event) => `
              <article class="event-card">
                <span class="event-card__flower" aria-hidden="true">❀</span>
                <h3>${escapeHtml(event.title)}</h3>
                <p class="event-card__date">${escapeHtml(event.date)}</p>
                <p>${escapeHtml(event.time)} · ${escapeHtml(event.venue)}</p>
                <small>${escapeHtml(event.note)}</small>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    ` : ""}

    ${sections.gifts ? `
      <section class="section gifts-section reveal-on-scroll" id="gifts">
        <div class="section__inner section__inner--narrow">
          <div class="gift-icon" aria-hidden="true">♡</div>
          <h2>${escapeHtml(copy.giftsTitle)}</h2>
          <p class="lead">${escapeHtml(copy.giftsBody)}</p>
        </div>
      </section>
    ` : ""}

    ${sections.rsvp ? `
      <section class="section rsvp-section reveal-on-scroll" id="rsvp">
        <div class="section__inner section__inner--narrow">
          <p class="section-kicker">Répondez s’il vous plaît</p>
          <h2>${escapeHtml(copy.rsvpTitle)}</h2>
          <p class="rsvp-subtitle">${escapeHtml(copy.rsvpSubtitle)}</p>

          <form class="rsvp-form" id="rsvp-form" novalidate>
            <label>
              <span>Your name</span>
              <input name="guestName" type="text" autocomplete="name" placeholder="Full name" required />
            </label>

            <fieldset>
              <legend>Will you attend?</legend>
              <div class="choice-row">
                <label class="choice"><input type="radio" name="attendance" value="Yes, joyfully attending" required /><span>Joyfully attending</span></label>
                <label class="choice"><input type="radio" name="attendance" value="Regretfully unable" required /><span>Regretfully unable</span></label>
              </div>
            </fieldset>

            <label>
              <span>Number of guests</span>
              <select name="guestCount">
                ${[1, 2, 3, 4, 5, 6].map((n) => `<option value="${n}">${n}</option>`).join("")}
              </select>
            </label>

            <fieldset>
              <legend>Events attending</legend>
              <div class="check-grid">
                ${preWeddingEvents.map((event) => `<label class="check"><input type="checkbox" name="events" value="${escapeHtml(event.title)}" /><span>${escapeHtml(event.title)}</span></label>`).join("")}
                <label class="check"><input type="checkbox" name="events" value="Wedding Ceremony & Reception" checked /><span>Wedding Ceremony & Reception</span></label>
              </div>
            </fieldset>

            <label>
              <span>Meal preference</span>
              <select name="mealPreference">
                ${rsvp.mealOptions.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}
              </select>
            </label>

            <label>
              <span>Dietary restrictions</span>
              <input name="dietaryRestrictions" type="text" placeholder="Optional" />
            </label>

            <label>
              <span>A message for the couple</span>
              <textarea name="message" rows="4" placeholder="Share your wishes"></textarea>
            </label>

            <button class="button button--rose button--full" type="submit">Send RSVP</button>
            <p class="form-note">This sample stores responses only in this browser. Connect an API endpoint in the config for production.</p>
            <p class="form-status" id="form-status" role="status"></p>
          </form>
        </div>
      </section>
    ` : ""}

    ${sections.closing ? `
      <footer class="closing" id="closing">
        <div class="closing__botanical" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
        <div class="closing__content reveal-on-scroll">
          <p class="section-kicker">${escapeHtml(copy.closingKicker)}</p>
          <h2>${escapeHtml(copy.closingTitle)}</h2>
          <p>${escapeHtml(copy.closingBody)}</p>
          <div class="closing__names">${escapeHtml(couple.brideShortName || couple.brideName.split(" ")[0])} <span>&amp;</span> ${escapeHtml(couple.groomShortName || couple.groomName.split(" ")[0])}</div>
          <time>${escapeHtml(wedding.displayDate)}</time>
          <a href="#top" class="back-to-top">Back to the beginning ↑</a>
        </div>
      </footer>
    ` : ""}
  `;
}
