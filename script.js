// ---------- Translations ----------
const translations = {
  en: {
    "nav.signin": "Sign In",
    "hero.title": "Unlimited movies, shows, and more",
    "hero.price": "Starts at $9.49. Cancel anytime.",
    "hero.lede": "Ready to watch? Enter your email to create or restart your membership.",
    "hero.placeholder": "Email address",
    "hero.cta": "Get Started",
    "reasons.heading": "More reasons to join",
    "reasons.card1.title": "Enjoy on your TV",
    "reasons.card1.desc": "Smart TVs, consoles, streaming devices, and more.",
    "reasons.card2.title": "Download to watch offline",
    "reasons.card2.desc": "Save your favorites and always have something to watch.",
    "reasons.card3.title": "Watch everywhere",
    "reasons.card3.desc": "Stream on your phone, tablet, laptop, and TV.",
    "reasons.card4.title": "Create profiles for kids",
    "reasons.card4.desc": "A space made just for them — included with your membership.",
    "rail.heading": "Trending now",
    "faq.heading": "Frequently asked questions",
    "faq.q1": "What is MYFLIX?",
    "faq.a1": "A streaming service with movies and shows. Watch ad-free on any device.",
    "faq.q2": "How much does it cost?",
    "faq.a2": "One flat monthly price, no hidden fees. Change or cancel anytime.",
    "faq.q3": "Where can I watch?",
    "faq.a3": "In your browser or the app on phone, TV, and consoles. Progress syncs automatically.",
    "faq.q4": "How do I cancel?",
    "faq.a4": "Two clicks in account settings — no penalties, no phone calls.",
    "footercta.text": "Ready to watch? Enter your email to create an account.",
    "footer.col1.a": "FAQ", "footer.col1.b": "Help Center", "footer.col1.c": "Account",
    "footer.col2.a": "Terms of Use", "footer.col2.b": "Privacy", "footer.col2.c": "Cookie Preferences",
    "footer.col3.a": "About", "footer.col3.b": "Jobs", "footer.col3.c": "Press",
    "footer.col4.a": "Ways to Watch", "footer.col4.b": "Legal Notices",
    "footer.bottom": "MYFLIX is a portfolio demo project, not affiliated with any real streaming service.",
    "signup.title": "Create your account",
    "signup.subtitle": "Enter your email and choose a password to finish setting up MYFLIX.",
    "signup.password": "Password",
    "signup.continue": "Continue",
    "signup.success.title": "You're all set",
    "signup.success.text": "This is a portfolio demo — no real account was created, but that's exactly how the flow would look.",
    "signup.done": "Done"
  },
  de: {
    "nav.signin": "Anmelden",
    "hero.title": "Unbegrenzt Filme, Serien und mehr",
    "hero.price": "Ab 9,49 €. Jederzeit kündbar.",
    "hero.lede": "Bereit loszulegen? Gib deine E-Mail-Adresse ein, um deine Mitgliedschaft zu erstellen oder fortzusetzen.",
    "hero.placeholder": "E-Mail-Adresse",
    "hero.cta": "Loslegen",
    "reasons.heading": "Weitere Gründe mitzumachen",
    "reasons.card1.title": "Auf dem Fernseher genießen",
    "reasons.card1.desc": "Smart-TVs, Konsolen, Streaming-Geräte und mehr.",
    "reasons.card2.title": "Offline herunterladen",
    "reasons.card2.desc": "Speichere deine Favoriten und hab immer etwas zum Anschauen.",
    "reasons.card3.title": "Überall schauen",
    "reasons.card3.desc": "Stream auf Handy, Tablet, Laptop und Fernseher.",
    "reasons.card4.title": "Profile für Kinder",
    "reasons.card4.desc": "Ein eigener Bereich – im Abo enthalten.",
    "rail.heading": "Gerade angesagt",
    "faq.heading": "Häufig gestellte Fragen",
    "faq.q1": "Was ist MYFLIX?",
    "faq.a1": "Ein Streaming-Dienst mit Filmen und Serien. Werbefrei auf jedem Gerät.",
    "faq.q2": "Was kostet es?",
    "faq.a2": "Ein fester monatlicher Preis, keine versteckten Kosten. Jederzeit änderbar oder kündbar.",
    "faq.q3": "Wo kann ich schauen?",
    "faq.a3": "Im Browser oder in der App auf Handy, TV und Konsolen. Der Fortschritt wird automatisch synchronisiert.",
    "faq.q4": "Wie kündige ich?",
    "faq.a4": "Zwei Klicks in den Kontoeinstellungen – keine Strafen, keine Anrufe.",
    "footercta.text": "Bereit loszulegen? Gib deine E-Mail-Adresse ein, um ein Konto zu erstellen.",
    "footer.col1.a": "FAQ", "footer.col1.b": "Hilfe-Center", "footer.col1.c": "Konto",
    "footer.col2.a": "Nutzungsbedingungen", "footer.col2.b": "Datenschutz", "footer.col2.c": "Cookie-Einstellungen",
    "footer.col3.a": "Über uns", "footer.col3.b": "Karriere", "footer.col3.c": "Presse",
    "footer.col4.a": "Wege zum Anschauen", "footer.col4.b": "Rechtliche Hinweise",
    "footer.bottom": "MYFLIX ist ein Portfolio-Demoprojekt und steht in keiner Verbindung zu einem echten Streaming-Dienst.",
    "signup.title": "Konto erstellen",
    "signup.subtitle": "Gib deine E-Mail-Adresse und ein Passwort ein, um die Einrichtung von MYFLIX abzuschließen.",
    "signup.password": "Passwort",
    "signup.continue": "Weiter",
    "signup.success.title": "Alles bereit",
    "signup.success.text": "Das ist eine Portfolio-Demo — es wurde kein echtes Konto erstellt, aber genau so würde der Ablauf aussehen.",
    "signup.done": "Fertig"
  }
};

// ---------- Fictional show data (fully invented — no real titles, posters or descriptions) ----------
const shows = [
  { hue:28,  year:2026, rating:"16+",
    en:{ title:"Midnight Draw",  genres:["Series","Drama"],       desc:"A winning lottery ticket upends the lives of three strangers tied to the same secret in a small town." },
    de:{ title:"Mitternachtslos", genres:["Serie","Drama"],        desc:"Ein Gewinnlos aus der Lotterie stellt das Leben dreier Fremder auf den Kopf, die ein gemeinsames Geheimnis verbindet." } },
  { hue:200, year:2025, rating:"12+",
    en:{ title:"Northern Light", genres:["Series","Adventure"],   desc:"A group of friends heads into the Arctic and finds something that changes everything they knew about their family." },
    de:{ title:"Nordlicht",      genres:["Serie","Abenteuer"],     desc:"Eine Gruppe Freunde bricht in die Arktis auf und entdeckt etwas, das alles verändert, was sie über ihre Familie wussten." } },
  { hue:345, year:2026, rating:"18+",
    en:{ title:"Red Thread",     genres:["Thriller","Drama"],      desc:"Two sisters end up on opposite sides of a corporate conflict that threatens to destroy them both." },
    de:{ title:"Roter Faden",    genres:["Thriller","Drama"],      desc:"Zwei Schwestern geraten auf entgegengesetzte Seiten eines Firmenkonflikts, der beide zu zerstören droht." } },
  { hue:255, year:2024, rating:"16+",
    en:{ title:"Quiet Harbor",   genres:["Mystery","Drama"],       desc:"A retired detective returns to his hometown to investigate a string of strange disappearances." },
    de:{ title:"Stiller Hafen",  genres:["Mystery","Drama"],       desc:"Ein pensionierter Ermittler kehrt in seine Heimatstadt zurück, um eine Reihe seltsamer Verschwindensfälle aufzuklären." } },
  { hue:40,  year:2025, rating:"13+",
    en:{ title:"Far Shore",      genres:["Comedy","Drama"],        desc:"Two childhood friends end up as travel companions on a trip neither of them planned." },
    de:{ title:"Fernes Ufer",    genres:["Komödie","Drama"],       desc:"Zwei Kindheitsfreunde werden zu Reisebegleitern auf einem Trip, den keiner von beiden geplant hat." } },
  { hue:170, year:2026, rating:"16+",
    en:{ title:"Glass City",     genres:["Sci-Fi"],                desc:"In a city where everything is visible, one architect hides a secret that could bring the system down." },
    de:{ title:"Gläserne Stadt", genres:["Science-Fiction"],       desc:"In einer Stadt, in der alles einsehbar ist, verbirgt eine Architektin ein Geheimnis, das das System zu Fall bringen könnte." } }
];

let currentLang = "en";

// ---------- i18n ----------
function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key] !== undefined) el.setAttribute("placeholder", translations[lang][key]);
  });
  document.querySelectorAll(".js-lang").forEach(sel => { sel.value = lang; });
  renderRail();
}

document.querySelectorAll(".js-lang").forEach(sel => {
  sel.addEventListener("change", (e) => applyLanguage(e.target.value));
});

// ---------- Trending rail ----------
const rail = document.getElementById("rail");

function renderRail(){
  rail.innerHTML = "";
  shows.forEach((s, i) => {
    const t = s[currentLang];
    const card = document.createElement("div");
    card.className = "t-card";
    card.innerHTML = `
      <div class="poster" style="background-image:linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0) 45%), url('images/${i + 1}.webp'); background-size:cover; background-position:center;">
        <span>${t.title}</span>
      </div>
      <div class="rank">${i + 1}</div>
    `;
    card.addEventListener("click", () => openModal(s, i));
    rail.appendChild(card);
  });
  rail.scrollLeft = 0;
  updateRailArrows();
}

const railPrev = document.getElementById("railPrev");
const railNext = document.getElementById("railNext");

railNext.addEventListener("click", () => rail.scrollBy({ left: 400, behavior: "smooth" }));
railPrev.addEventListener("click", () => rail.scrollBy({ left: -400, behavior: "smooth" }));

function updateRailArrows(){
  const maxScroll = rail.scrollWidth - rail.clientWidth - 2;
  railPrev.classList.toggle("is-visible", rail.scrollLeft > 10);
  railNext.classList.toggle("is-hidden", rail.scrollLeft >= maxScroll);
}
rail.addEventListener("scroll", updateRailArrows);
window.addEventListener("resize", updateRailArrows);

// ---------- Modal ----------
const backdrop = document.getElementById("modalBackdrop");
const modalVisual = document.getElementById("modalVisual");
const modalTitle = document.getElementById("modalTitle");
const modalTags = document.getElementById("modalTags");
const modalDesc = document.getElementById("modalDesc");

function openModal(s, index){
  const t = s[currentLang];
  modalVisual.style.backgroundImage = `linear-gradient(to top, rgba(26,26,28,0.9), rgba(26,26,28,0) 55%), url('images/${index + 1}.webp')`;
  modalVisual.style.backgroundSize = "cover";
  modalVisual.style.backgroundPosition = "center";
  modalTitle.textContent = t.title;
  modalTags.innerHTML = `<span>${s.year}</span><span>${s.rating}</span>` + t.genres.map(g => `<span>${g}</span>`).join("");
  modalDesc.textContent = t.desc;
  backdrop.classList.add("open");
}
function closeModal(){ backdrop.classList.remove("open"); }

document.getElementById("modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// ---------- Signup modal ----------
const signupBackdrop = document.getElementById("signupBackdrop");
const signupStep = document.getElementById("signupStep");
const signupSuccess = document.getElementById("signupSuccess");
const signupEmail = document.getElementById("signupEmail");

function openSignup(prefillEmail){
  signupStep.hidden = false;
  signupSuccess.hidden = true;
  signupEmail.value = prefillEmail || "";
  signupBackdrop.classList.add("open");
  if (!prefillEmail) signupEmail.focus();
}
function closeSignup(){ signupBackdrop.classList.remove("open"); }

// Hero + footer "Get Started" forms feed their typed email into the signup modal
["heroForm", "footerForm"].forEach(id => {
  document.getElementById(id).addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    openSignup(email);
  });
});

// The movie-info modal's "Get Started" button opens signup with no prefill
document.querySelectorAll(".js-get-started").forEach(btn => {
  btn.addEventListener("click", () => {
    closeModal();
    openSignup("");
  });
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  signupStep.hidden = true;
  signupSuccess.hidden = false;
});

document.getElementById("signupClose").addEventListener("click", closeSignup);
document.getElementById("signupDone").addEventListener("click", closeSignup);
signupBackdrop.addEventListener("click", (e) => { if (e.target === signupBackdrop) closeSignup(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSignup(); });

// ---------- Hero collage background (generated tiles, not real posters) ----------
const collage = document.getElementById("collage");
const collageWords = ["WINTER","DRIVE","CITY","FLOW","SHADOW","GAME","LIGHT","HOME","FLIGHT","EDGE","STEP","PATH","CHOICE","CIRCLE","LINE","ECHO"];
for (let i = 0; i < 64; i++){
  const tile = document.createElement("div");
  tile.className = "tile";
  const hue = Math.floor(Math.random() * 360);
  tile.style.background = `linear-gradient(160deg, hsl(${hue} 35% 18%), hsl(${hue} 25% 8%))`;
  tile.textContent = collageWords[i % collageWords.length];
  collage.appendChild(tile);
}

// ---------- Init ----------
applyLanguage("en");
