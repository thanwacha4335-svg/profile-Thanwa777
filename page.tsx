const links = [
  { title: "เว็บไซต์ร้านค้า", detail: "DUDSHOP777 SHOP", href: "https://dudshop777.web2u.xyz/home" },
  { title: "Discord", detail: "ช่องทาง Discord", href: "#" },
  { title: "Facebook", detail: "ช่องทาง Facebook", href: "#" },
  { title: "Instagram", detail: "ช่องทาง Instagram", href: "#" },
];
export default function Home() {
  return <main className="site">
    <header className="nav"><a className="logo" href="/">DUD<span>SHOP</span>777<span className="blink">_</span></a><div className="online"><i/> SYSTEM ONLINE</div></header>
    <section className="hero"><p className="eyebrow">WELCOME TO MY PROFILE</p><div className="avatar">D<span>7</span></div><h1>DUDSHOP<span>777</span></h1><p className="subtitle">OFFICIAL PROFILE <b>/</b> DIGITAL CREATOR</p><p className="intro">ยินดีต้อนรับสู่เว็บไซต์โปรไฟล์อย่างเป็นทางการของ DUDSHOP777</p><div className="tags"><span>THAILAND</span><span>ONLINE</span><span>EST. 2026</span></div></section>
    <section className="columns">
      <article className="panel"><div className="panel-top"><span>01 / ABOUT</span><span className="red">●</span></div><h2>ABOUT <em>ME</em></h2><p>พื้นที่แนะนำตัวและรวบรวมข้อมูลของ DUDSHOP777</p><p className="muted">เว็บไซต์โปรไฟล์นี้แยกจากระบบร้านค้า DUDSHOP777 โดยเฉพาะ</p></article>
      <article className="panel"><div className="panel-top"><span>02 / CONNECT</span><span>LINKS</span></div><h2>MY <em>LINKS</em></h2><div className="links">{links.map(link => <a className="link" href={link.href} key={link.title} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}><span><strong>{link.title}</strong><small>{link.detail}</small></span><b>↗</b></a>)}</div></article>
    </section>
    <footer><span>© 2026 DUDSHOP777</span><span>INDEPENDENT PROFILE WEBSITE <b>●</b></span></footer>
  </main>;
}
