# SynxEx Unified Design System & Token Specification

## 1. Brand Palette & Color Tokens

Both projects must reference consistent semantic tokens:

```css
:root {
  /* Surface Tokens */
  --bg-primary: #08080a;
  --bg-card: rgba(18, 18, 22, 0.75);
  --bg-card-inner: rgba(26, 26, 32, 0.6);
  --bg-card-hover: rgba(28, 28, 36, 0.85);

  /* Border Tokens */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.14);
  --border-highlight: rgba(255, 85, 36, 0.35);

  /* Text Tokens */
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.72);
  --text-muted: rgba(255, 255, 255, 0.52);
  --text-faint: rgba(255, 255, 255, 0.36);

  /* Brand Accents */
  --color-lava: #FF5524;
  --color-lava-hover: #ff6a3d;
  --color-burgundy: #5c1023;
  --color-emerald: #10B981;
  --color-rose: #F43F5E;
  --color-amber: #F59E0B;
}
```

---

## 2. Typography Rules
- **Display Headings**: `-apple-system`, `Inter`, `system-ui`, tracking `-0.03em`, font-weight `600` / `700`.
- **Financial Numbers**: Monospace or tabular lining figures (`font-mono font-medium tracking-tight`).
- **Body & Captions**: Clean neutral sans-serif with accessible line-height (`1.5` for body, `1.2` for compact metrics).

---

## 3. UI Component Standards
- **Buttons**:
  - `.btn-lava`: High-value CTA (`background: linear-gradient(135deg, #FF5524 0%, #CC3300 100%)`, white text, shadow `0 4px 14px rgba(255,85,36,0.3)`).
  - `.btn-ghost`: Neutral secondary (`background: rgba(255,255,255,0.05)`, border `1px solid var(--border-subtle)`).
- **Cards**:
  - Restrained backdrop filter blur (`backdrop-blur-md`), subtle border `1px solid var(--border-subtle)`.
  - Avoid excessive neon glow. Focus lighting on active elements and status tags.
- **Status Badges**:
  - `Live`: Emerald background tint with bright dot.
  - `Interactive Demo`: Amber background tint with amber dot.
  - `Concept / Beta`: Purple or Lava background tint.

