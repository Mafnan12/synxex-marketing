"use client";
import Link from "next/link";
import { useState } from "react";
const links = [{ href: "/about", label: "About" }, { href: "/services", label: "Services" }, { href: "/projects", label: "Projects" }, { href: "/technologies", label: "Technologies" }];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav wrap" aria-label="Main navigation"><Link className="brand" href="/" onClick={() => setOpen(false)}><span>SY</span>NXEX</Link><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-menu">{open ? "Close" : "Menu"}<i /></button><div className={`nav-links ${open ? "open" : ""}`} id="site-menu">{links.map((link) => <Link onClick={() => setOpen(false)} href={link.href} key={link.href}>{link.label}</Link>)}<Link className="button button-small" onClick={() => setOpen(false)} href="/contact">Start a conversation <b>↗</b></Link></div></nav></header>;
}
