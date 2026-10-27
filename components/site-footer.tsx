import Link from "next/link";

export function SiteFooter() {
  return <footer>
    <div className="wrap footer-top">
      <div><Link className="brand" href="/" aria-label="SynxEx home"><span>SY</span>NXEX</Link><p>One connected platform<br />for every market.</p></div>
      <div><p className="eyebrow">Explore</p><Link href="/#products">Markets & services</Link><Link href="/about">About SynxEx</Link><Link href="/#unified">One account</Link></div>
      <div><p className="eyebrow">Connect</p><Link href="/contact">Contact</Link><a href="mailto:hello@synxex.com">hello@synxex.com</a></div>
    </div>
    <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} SynxEx. All rights reserved.</span><span>One Platform. Every Market.</span></div>
  </footer>;
}
