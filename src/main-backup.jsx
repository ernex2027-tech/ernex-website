
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const links = {
  youtube: 'https://youtube.com/@ernex2027',
  telegram: 'https://t.me/+KHfXFT80XhU1Y2Y0',
}

const games = [
  {
    id: 0,
    image: '/images/escape.jpg',
    symbol: '↗',
    title: {
      en: 'The Great Escape 2',
      fa: 'فرار بزرگ ۲',
    },
    type: {
      en: 'ENDLESS RUNNER · GAME',
      fa: 'رانر ریلی · بازی',
    },
    description: {
      en: 'An exciting rail-runner adventure featuring quick reactions, lane switching and obstacle challenges.',
      fa: 'یک ماجراجویی ریلی هیجان‌انگیز با واکنش سریع، جابه‌جایی بین مسیرها و عبور از موانع.',
    },
    details: {
      en: 'The Great Escape 2 is an independent ERNEX game project. Explore the gameplay, discover new challenges and follow its development.',
      fa: 'فرار بزرگ ۲ یکی از پروژه‌های مستقل بازی‌سازی ERNEX است. گیم‌پلی بازی را تجربه کن و مسیر توسعه آن را دنبال کن.',
    },
    specs: {
      en: [
        { label: 'GENRE', value: 'Endless Runner' },
        { label: 'PLATFORM', value: 'PC / Web' },
        { label: 'GAME MODE', value: 'Single Player' },
        { label: 'DEVELOPER', value: 'ERNEX Studio' },
      ],
      fa: [
        { label: 'ژانر', value: 'رانر بی‌پایان' },
        { label: 'پلتفرم', value: 'کامپیوتر / وب' },
        { label: 'حالت بازی', value: 'تک‌نفره' },
        { label: 'سازنده', value: 'ERNEX Studio' },
      ],
    },
    status: {
      en: 'PROJECT',
      fa: 'پروژه',
    },
  },
  {
    id: 1,
    image: '/images/zombie.png',
    symbol: '☣',
    title: {
      en: 'Zombie Survival Shooter',
      fa: 'Zombie Survival Shooter',
    },
    type: {
      en: '2D · SURVIVAL SHOOTER',
      fa: 'دوبعدی · بقا و تیراندازی',
    },
    description: {
      en: 'A 2D survival shooter featuring challenging enemy waves, movement and arcade-style action.',
      fa: 'یک بازی بقای دوبعدی با موج‌های چالش‌برانگیز دشمنان، حرکت و مبارزه با سبک آرکید.',
    },
    details: {
      en: 'An original ERNEX project currently in development. More gameplay features, screenshots and updates will be added soon.',
      fa: 'یک پروژه اختصاصی ERNEX که در حال توسعه است. تصاویر واقعی، قابلیت‌های جدید و جزئیات بیشتر به‌زودی اضافه می‌شوند.',
    },
    specs: {
      en: [
        { label: 'GENRE', value: '2D Survival Shooter' },
        { label: 'PLATFORM', value: 'To Be Announced' },
        { label: 'GAME MODE', value: 'Survival' },
        { label: 'DEVELOPER', value: 'ERNEX Studio' },
      ],
      fa: [
        { label: 'ژانر', value: 'بقای دوبعدی و تیراندازی' },
        { label: 'پلتفرم', value: 'به‌زودی اعلام می‌شود' },
        { label: 'حالت بازی', value: 'بقا' },
        { label: 'سازنده', value: 'ERNEX Studio' },
      ],
    },
    status: {
      en: 'IN DEVELOPMENT',
      fa: 'در حال توسعه',
    },
  },
  {
    id: 2,
    image: '/images/bmw.png',
    symbol: '🏎️',
    title: {
      en: 'BMW Night Racer',
      fa: 'BMW Night Racer',
    },
    type: {
      en: 'NIGHT RACING · CAR GAME',
      fa: 'مسابقه شبانه · ماشین‌سواری',
    },
    description: {
      en: 'A night racing experience featuring BMW cars, neon-lit streets and high-speed driving.',
      fa: 'یک تجربه مسابقه‌ای شبانه با خودروهای BMW، خیابان‌های نئونی و رانندگی پرسرعت.',
    },
    details: {
      en: 'An original ERNEX racing game project. More information and gameplay details will be revealed soon.',
      fa: 'یک پروژه مسابقه‌ای اختصاصی ERNEX. اطلاعات و جزئیات گیم‌پلی به‌زودی منتشر می‌شود.',
    },
    specs: {
      en: [
        { label: 'GENRE', value: 'Night Racing' },
        { label: 'PLATFORM', value: 'To Be Announced' },
        { label: 'GAME MODE', value: 'Racing' },
        { label: 'DEVELOPER', value: 'ERNEX Studio' },
      ],
      fa: [
        { label: 'ژانر', value: 'مسابقه شبانه' },
        { label: 'پلتفرم', value: 'به‌زودی اعلام می‌شود' },
        { label: 'حالت بازی', value: 'مسابقه‌ای' },
        { label: 'سازنده', value: 'ERNEX Studio' },
      ],
    },
    status: {
      en: 'PROJECT',
      fa: 'پروژه',
    },
  },
]

const content = {
  en: {
    nav: ['Home', 'Games', 'AI Tools', 'Projects', 'Future Lab', 'About'],
    eyebrow: 'INDEPENDENT TECH & CREATIVE STUDIO',
    headline: <>BUILD<span>.</span><br />CREATE<span>.</span><br />INNOVATE<span>.</span></>,
    intro: 'Exploring the edge of gaming, artificial intelligence and software development.',
    explore: 'Explore projects',
    watch: 'Visit YouTube',
    status: 'CREATING WHAT’S NEXT',
    sectionTag: 'SELECTED WORK',
    gamesTitle: 'Games & experiences',
    gamesIntro: 'Playable ideas, experiments and original game projects from ERNEX.',
    aiTitle: 'AI tools, tested in practice.',
    aiDesc: 'A growing collection of AI tools explored, tested and explained through real experiments.',
    aiCta: 'Explore on the channel',
    projectTitle: 'Beyond the screen.',
    projectDesc: 'Small experiments, useful software and creative builds — documented as they evolve.',
    futureTitle: 'The future is a work in progress.',
    futureDesc: 'New games, AI experiments and tools are on the roadmap. Follow the journey.',
    aboutTitle: 'What is ERNEX?',
    aboutDesc: 'ERNEX is an independent technology and creative brand exploring game development, AI and software through hands-on projects.',
    contact: 'CONNECT WITH ERNEX',
    footer: 'Independent ideas. Built one project at a time.',
    soon: 'COMING SOON',
    back: '← BACK TO GAMES',
    gameLabel: 'ERNEX GAME PROJECT',
    overview: 'GAME OVERVIEW',
  },
  fa: {
    nav: ['خانه', 'بازی‌ها', 'ابزارهای AI', 'پروژه‌ها', 'آزمایشگاه آینده', 'درباره ما'],
    eyebrow: 'استودیوی مستقل فناوری و خلاقیت',
    headline: <>بساز<span>.</span><br />خلق کن<span>.</span><br />نوآوری کن<span>.</span></>,
    intro: 'مرزهای بازی‌سازی، هوش مصنوعی و توسعه نرم‌افزار را تجربه می‌کنیم.',
    explore: 'مشاهده پروژه‌ها',
    watch: 'کانال یوتیوب',
    status: 'در حال ساخت آینده',
    sectionTag: 'آثار منتخب',
    gamesTitle: 'بازی‌ها و تجربه‌ها',
    gamesIntro: 'ایده‌ها، آزمایش‌ها و پروژه‌های بازی‌سازی ERNEX.',
    aiTitle: 'ابزارهای هوش مصنوعی؛ در عمل.',
    aiDesc: 'مجموعه‌ای از ابزارهای هوش مصنوعی که با آزمایش‌های واقعی بررسی و معرفی می‌شوند.',
    aiCta: 'مشاهده در کانال',
    projectTitle: 'فراتر از صفحه نمایش.',
    projectDesc: 'آزمایش‌های کوچک، نرم‌افزارهای کاربردی و پروژه‌های خلاقانه؛ از ایده تا اجرا.',
    futureTitle: 'آینده، در حال ساخته‌شدن است.',
    futureDesc: 'بازی‌های جدید، آزمایش‌های هوش مصنوعی و ابزارهای تازه در برنامه ERNEX قرار دارند.',
    aboutTitle: 'ERNEX چیست؟',
    aboutDesc: 'ERNEX یک برند مستقل در حوزه فناوری و خلاقیت است که با پروژه‌های عملی، بازی‌سازی، هوش مصنوعی و توسعه نرم‌افزار را تجربه می‌کند.',
    contact: 'ارتباط با ERNEX',
    footer: 'ایده‌های مستقل؛ هر بار با یک پروژه.',
    soon: 'به‌زودی',
    back: 'بازگشت به بازی‌ها ←',
    gameLabel: 'پروژه بازی ERNEX',
    overview: 'معرفی بازی',
  },
}

function App() {
  const [lang, setLang] = useState('en')
  const [selectedGame, setSelectedGame] = useState(null)

  const isFa = lang === 'fa'
  const t = content[lang]

  const openGame = (id) => {
    setSelectedGame(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const closeGame = () => {
    setSelectedGame(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={isFa ? 'app fa' : 'app'} dir={isFa ? 'rtl' : 'ltr'}>
      <header className="header">
        <a className="brand" href="#home" onClick={closeGame}>
          <img src="/images/logo.jpg" alt="ERNEX Logo" className="brand-logo" />
          ERNEX<span>.</span>
        </a>
        <nav className="nav">
          {t.nav.map((item, i) => (
            <a
              key={item}
              href={['#home', '#games', '#ai-tools', '#projects', '#future-lab', '#about'][i]}
              onClick={closeGame}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="lang" onClick={() => setLang(isFa ? 'en' : 'fa')}>
            {isFa ? 'EN' : 'فا'}
          </button>

          <a className="menu-cta" href={links.youtube} target="_blank" rel="noreferrer">
            YouTube ↗
          </a>
        </div>
      </header>

      <main>
        {selectedGame === null ? (
          <>
            <section className="hero section-wrap" id="home">
              <div className="hero-grid"></div>

              <div className="hero-copy">
                <div className="eyebrow"><i></i>{t.eyebrow}</div>

                <h1>{t.headline}</h1>

                <p className="hero-intro">{t.intro}</p>

                <div className="hero-buttons">
                  <a className="button primary" href="#games">
                    {t.explore}<span>↗</span>
                  </a>

                  <a className="button secondary" href={links.youtube} target="_blank" rel="noreferrer">
                    {t.watch}<span>↗</span>
                  </a>
                </div>

                <div className="hero-meta">
                  <span className="pulse"></span>
                  {t.status}
                </div>
              </div>

              <div className="hero-art">
                <div className="orbit orbit-one"></div>
                <div className="orbit orbit-two"></div>
                <div className="core">
                  <img src="/images/logo.jpg" alt="ERNEX Logo" />
                </div>
                <div className="art-label label-top">ERNEX / 2026</div>
                <div className="art-label label-bottom">IDEAS INTO REALITY</div>
                <div className="crosshair cross-a">+</div>
                <div className="crosshair cross-b">+</div>
              </div>

              <div className="hero-bottom">
                <span>01 / 06</span>
                <span>SCROLL TO EXPLORE ↓</span>
                <span>EST. 2026</span>
              </div>
            </section>

            <section className="section-wrap content-section" id="games">
              <div className="section-heading">
                <div>
                  <div className="eyebrow">{t.sectionTag} / 01</div>
                  <h2>{t.gamesTitle}</h2>
                  <p>{t.gamesIntro}</p>
                </div>

                <span className="section-index">01—GAMES</span>
              </div>

              <div className="game-grid">
                {games.map((game) => (
                  <article
                    className="game-card"
                    key={game.id}
                    onClick={() => openGame(game.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') openGame(game.id)
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className={`game-visual visual-${game.id + 1}`}>
                      <img
                        className="game-image"
                        src={game.image}
                        alt={game.title[lang]}
                      />
                      <div className="visual-no">0{game.id + 1}</div>
                      <div className="visual-symbol">{game.symbol}</div>
                      <div className="visual-caption">ERNEX GAMES</div>
                    </div>

                    <div className="game-info">
                      <div className="card-type">{game.type[lang]}</div>
                      <h3>{game.title[lang]}</h3>
                      <p>{game.description[lang]}</p>

                      <div className="card-bottom">
                        <span>{game.status[lang]}</span>
                        <span className="arrow">↗</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="ai-band" id="ai-tools">
              <div className="section-wrap ai-inner">
                <div className="ai-orb"><span>AI</span><i></i></div>

                <div className="ai-copy">
                  <div className="eyebrow">02 / ARTIFICIAL INTELLIGENCE</div>
                  <h2>{t.aiTitle}</h2>
                  <p>{t.aiDesc}</p>

                  <a className="text-link" href={links.youtube} target="_blank" rel="noreferrer">
                    {t.aiCta} <span>↗</span>
                  </a>
                </div>

                <div className="ai-side">EXPERIMENT<br />. TEST<br />. CREATE</div>
              </div>
            </section>

            <section className="section-wrap split-section" id="projects">
              <div>
                <div className="eyebrow">03 / DEVELOPMENT</div>
                <h2>{t.projectTitle}</h2>
              </div>

              <div>
                <p>{t.projectDesc}</p>
                <div className="project-line">
                  <span>GAME DEVELOPMENT</span>
                  <span>SOFTWARE</span>
                  <span>AI EXPERIMENTS</span>
                </div>
              </div>
            </section>

            <section className="future-section" id="future-lab">
              <div className="section-wrap future-inner">
                <div className="eyebrow">04 / FUTURE LAB</div>
                <h2>{t.futureTitle}</h2>
                <p>{t.futureDesc}</p>
                <div className="future-stamp">NEXT<br /><span>IS NOW_</span></div>
                <span className="coming">{t.soon}</span>
              </div>
            </section>

            <section className="section-wrap about-section" id="about">
              <div className="eyebrow">05 / ABOUT</div>
              <h2>{t.aboutTitle}</h2>
              <p>{t.aboutDesc}</p>

              <div className="contact-row">
                <span>{t.contact}</span>
                <div>
                  <a href={links.youtube} target="_blank" rel="noreferrer">YOUTUBE ↗</a>
                  <a href={links.telegram} target="_blank" rel="noreferrer">TELEGRAM ↗</a>
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="section-wrap game-detail">
            <button className="button secondary" onClick={closeGame}>
              {t.back}
            </button>

            <div className={`detail-art visual-${selectedGame + 1}`}>
              <img
                className="detail-image"
                src={games[selectedGame].image}
                alt={games[selectedGame].title[lang]}
              />
              <span>{games[selectedGame].symbol}</span>
              <h2>ERNEX GAMES</h2>
              <div className="art-label">PROJECT 0{selectedGame + 1}</div>
            </div>

            <div className="eyebrow">
              {t.gameLabel} / 0{selectedGame + 1}
            </div>

            <h1>{games[selectedGame].title[lang]}</h1>

            <p className="detail-description">
              {games[selectedGame].description[lang]}
            </p>

            <div className="game-extra">
              <h2>{t.overview}</h2>
              <p>{games[selectedGame].details[lang]}</p>
              <div className="game-specs">
                {games[selectedGame].specs[lang].map((spec, index) => (
                  <div className="spec-card" key={index}>
                    <span>{spec.label}</span>
                    <strong>{spec.value}</strong>
                  </div>
                ))}
              </div>
              <div className="detail-status">
                {games[selectedGame].status[lang]}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <a className="brand" href="#home" onClick={closeGame}>
          ERNEX<span>.</span>
        </a>
        <span>{t.footer}</span>
        <span>© 2026 ERNEX</span>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
