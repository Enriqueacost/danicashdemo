import './App.css'

const profile = {
  name: 'Cash',
  handle: '@cashdani_',
  avatar: '/perfil.jpeg',
  bio: 'Accionista en bolsa +38% profit. Educacion financiera y bursatil.',
}

const links = [
  {
    label: 'Aprende a invertir desde 0',
    text: 'Reserva tu acceso por WhatsApp',
    href: 'https://wa.me/595992037217',
    tag: 'Principal',
    accent: true,
  },
  {
    label: 'TikTok',
    text: 'Contenido corto sobre bolsa e inversiones',
    href: 'https://www.tiktok.com/@bydanicash?_r=1&_t=ZS-96EKiEFqmym',
    tag: 'Videos',
  },
  {
    label: 'YouTube',
    text: 'Guias, analisis y aprendizaje en formato largo',
    href: 'https://youtube.com/@bycashdani?si=vIBg8p5NKxp5yGU2',
    tag: 'Clases',
  },
  {
    label: 'Instagram',
    text: 'Actualizaciones, resultados y comunidad',
    href: 'https://www.instagram.com/cashdani_',
    tag: 'Social',
  },
]

const stats = [
  { value: '+38%', label: 'profit reportado' },
  { value: '0+', label: 'nivel necesario' },
  { value: '1:1', label: 'enfoque practico' },
]

function App() {
  return (
    <main className="page-shell">
      <section className="profile-card" aria-labelledby="profile-title">
        <div className="background-orb orb-one" />
        <div className="background-orb orb-two" />

        <header className="hero">
          <div className="avatar-ring">
            <img className="avatar" src={profile.avatar} alt="Foto de perfil de Cash" />
          </div>

          <p className="handle">{profile.handle}</p>
          <h1 id="profile-title">{profile.name}</h1>
          <p className="bio">{profile.bio}</p>
        </header>

        <section className="stats" aria-label="Datos destacados">
          {stats.map((stat) => (
            <article className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className="links" aria-label="Enlaces principales">
          {links.map((link) => (
            <a
              className={link.accent ? 'link-card link-card-accent' : 'link-card'}
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-tag">{link.tag}</span>
              <span className="link-copy">
                <strong>{link.label}</strong>
                <small>{link.text}</small>
              </span>
              <span className="arrow" aria-hidden="true">
                -&gt;
              </span>
            </a>
          ))}
        </section>

        <section className="pitch" aria-labelledby="pitch-title">
          <span>Para nuevos inversores</span>
          <h2 id="pitch-title">Aprende a leer el mercado antes de poner tu dinero en riesgo.</h2>
          <p>
            Una ruta simple para empezar desde cero, entender la bolsa y tomar decisiones con mas criterio.
          </p>
        </section>

        {/* Sección de gráfico de inversiones */}
        <section className="investments-chart" aria-labelledby="investments-chart-title">
          <h2 id="investments-chart-title">Historial de Inversiones</h2>
          <img src="/grafico.jpeg" alt="Gráfico del rendimiento de inversiones" className="chart-image" />
        </section>

        {/* Sección de testimonios */}
        <section className="testimonials" aria-labelledby="testimonials-title">
          <h2 id="testimonials-title">Testimonios de Clientes</h2>
          <div className="testimonials-grid">
            <img src="/testimonio1.jpeg" alt="Testimonio de cliente 1" className="testimonial-image" />
            <img src="/testimonio2.jpeg" alt="Testimonio de cliente 2" className="testimonial-image" />
            <img src="/testimonio3.jpeg" alt="Testimonio de cliente 3" className="testimonial-image" />
            <img src="/testimonio4.jpeg" alt="Testimonio de cliente 4" className="testimonial-image" />
          </div>
        </section>
      </section>
      <footer className="footer" aria-label="Credito del sitio">
        <p>Creado por enriquedev © 2026. Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}

export default App
