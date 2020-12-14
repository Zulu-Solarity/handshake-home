import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.png" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to Johnny Wu's <a href="https://learn.namebase.io/about-handshake/about-handshake" >Handshake</a> page!
      </h1>

      <p className="description">
        You can build this too with <a href="https://learn.namebase.io/starting-from-zero/how-to-use-handshake-names#vercel">this guide</a>.
      </p>
  
       <p className="description">
        Handshake is the only way to truly own <a href="https://namebase.io/domains">.yourname/</a> on the Internet. As part of the decentralized web movement, our community is taking the Internet back from the handful of corporations who currently own it and placing it into the hands of the people by dismantling ICANN's monopoly on top-level domains (.com, .org, .io are all top-level domains controlled by ICANN). I'm always happy to talk about Handshake with anyone, so grab a time that works best for you to chat below!
      </p>

      <div className="grid">
        <a href="https://calendly.com/namebase" className="card">
          <h3>Let's Chat!</h3>
          <p>Pick a time that works best for you.</p>
        </a>

        <a href="https://hns.to/" className="card">
          <h3>HNS.to</h3>
          <p>Use this for Handshake domains.</p>
        </a>

        <a
          href="https://jaywuzer.medium.com/" className="card">
          <h3>Learning Center</h3>
          <p>Learn more about Handshake.</p>
        </a>

        <a
          href="https://discord.gg/V3aTrkp" className="card">
          <h3>Namer Community</h3>
          <p>
            Talk Handshake on Discord.
          </p>
        </a>
      </div>
    </main>

    <footer>
      <a
        href="https://www.namebase.io/">
        <img src="/Namer Community Logo Full.gif" alt="Namebase Logo" width="70" height="70"/>
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
        background-color: #000000
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: #0c75FF;
        text-decoration: none;
      }

      .title a {
        color: #0c75FF;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
        color: #FEAE00;

      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      .description a:hover,
      .description a:focus,
      .description a:active {
        text-decoration: underline;
        color: #FEAE00;

      }
      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: #FEAE00;
        text-decoration: none;
        border: 1px solid #FEAE00;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0C75FF;
        border-color: #0C75FF;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
