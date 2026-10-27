import type { Metadata } from "next";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = { title: "Contact", description: "Contact information for SynxEx." };

export default function Contact() {
  return <>
    <SiteHeader />
    <main>
      <section className="page-hero wrap">
        <p className="eyebrow">Contact information</p>
        <h1>Connect with<br />SynxEx.</h1>
        <p className="lead">This website provides general information about SynxEx and the markets and services associated with its platform concept.</p>
      </section>
      <section className="contact-layout wrap">
        <div>
          <p className="eyebrow">General inquiries</p>
          <h2>For questions about this website.</h2>
          <p>For general questions or feedback about the information presented here, email:</p>
          <p><a className="text-link" href="mailto:hello@synxex.com">hello@synxex.com <b aria-hidden="true">→</b></a></p>
        </div>
        <aside className="contact-info-card">
          <p className="eyebrow">About this site</p>
          <h2>Informational overview</h2>
          <p>The pages introduce topics including crypto, forex, stocks, banking, payment cards, remittance, Web3 wallets, and AI agents.</p>
          <p>No account access, trading, payments, transfers, or other financial transactions are provided through this website.</p>
        </aside>
      </section>
    </main>
    <SiteFooter />
  </>;
}
