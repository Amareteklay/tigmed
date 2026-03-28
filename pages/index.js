import Head from 'next/head'
import Chat from '../components/Chat'

const TAGS = ['ስርዓተ ምግቢ', 'ጽሬት', 'ኣእምሮኣዊ ጥዕና', 'ናይ ኣደ ጥዕና', 'ናይ ህጻን ጥዕና', 'ምክልኻል ሕማም']

const MISSION = [
  { num: '7M+', label: 'ተዛረብቲ ትግርኛ',     desc: 'ብቋንቋኦም ናይ ሕክምና ሓበሬታ ዘይረኽቡ ሰባት' },
  { num: '0',   label: 'ናይ ትግርኛ AI ሕክምና', desc: 'ቅድሚ እፎይታ ዝነበረ ናይ ትግርኛ ሕክምና ሞዴል' },
  { num: '⅓',  label: 'ብኢድ ሓካይም',         desc: 'ምስ ሓካይምን ነርሳትን ካብ ትግራይ ዝህነጽ ዘሎ' },
  { num: '∞',  label: 'ናይ ወለዶ ጽልዋ',       desc: 'ቋንቋ ምዕቃብ ዝፈጥሮ ናይ ዘልኣለም ዋጋ' },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>እፎይታ — ናይ ሕክምና ሓበሬታ ብትግርኛ</title>
        <meta name="description" content="እፎይታ — ናይ ትግርኛ ሕክምና ሓበሬታ ሓጋዚ"/>
      </Head>

      {/* Warning */}
      <div className="warning">
        ⚕ እዚ ናይ ሕክምና ሓበሬታ ጥራሕ እዩ — ንሓኪም ኣይትትክኦ። ህጹጽ ሕሙም እንተለካ ናብ ሕክምና ቤት ብቕልጡፍ ኪድ።
      </div>

      {/* Nav */}
      <nav className="nav">
        <div className="nav-logo">እ<span>ፎይታ</span></div>
        <div className="nav-badge">ቅዲ 1</div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-eyebrow">እፎይታ — ናይ ትግርኛ ሕክምና ሓበሬታ</div>
        <h1 className="hero-title">
          ሕቶ ሕክምና ኣለካ?<br/>
          <em>እፎይታ ምስኻ ኣሎ።</em>
        </h1>
        <p className="hero-sub">
          ሕክምናዊ ሓበሬታ ብቋንቋኻ ምርካብ ናትካ መሰል እዩ።
          እፎይታ ምስ ሓካይምን ነርሳትን ካብ ትግራይ ዝህነጽ ዘሎ ናይ ሕክምና ሓበሬታ ሓጋዚ እዩ።
        </p>
        <div className="tags">
          {TAGS.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      </section>

      {/* Divider */}
      <div className="divider">
        <div className="divider-line"/>
        <div className="divider-text">ሕጂ ፈትን</div>
        <div className="divider-line"/>
      </div>

      {/* Chat */}
      <Chat/>

      {/* Mission */}
      <section className="mission">
        <div className="mission-grid">
          {MISSION.map(c => (
            <div key={c.label} className="mission-cell">
              <div className="mission-num">{c.num}</div>
              <div className="mission-label">{c.label}</div>
              <div className="mission-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta-card">
          <div className="cta-title">
            ሓካይም፡ ነርሳት፡ ፈለጥቲ —<br/><em>ሓግዙና።</em>
          </div>
          <p className="cta-sub">
            እፎይታ ብናትኩም ሕክምናዊ ፍልጠት ይዕቢ።
            ናይ ሕክምና ሕቶታትን ምልስታትን ብምርኣይ ክብርኹም ናብ ቋንቋና ይኣቱ።
            ኣብ ትግራይ ዘሎ ሓካይምን ነርሳትን ቅድምነት ይወሃቦም።
          </p>
          <a className="cta-btn" href="mailto:hello@efoyta.org?subject=እፎይታ — ኣበርክቶ">
            ሓግዘና →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        እፎይታ · ናይ ትግርኛ ሕክምና ሓበሬታ · {new Date().getFullYear()}<br/>
        <span style={{ opacity: 0.6, fontSize: 11 }}>
          እዚ ሕክምናዊ ምኽሪ ኣይኮነን — ንሓኪም ኣይትትክኦ
        </span>
      </footer>
    </>
  )
}
