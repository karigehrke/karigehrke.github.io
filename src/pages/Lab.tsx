import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, X } from 'lucide-react';
import Overprint from '../components/Overprint';

type TokenName =
  | 'ink' | 'surface' | 'line' | 'edge' | 'fg' | 'fg-soft'
  | 'muted' | 'faint' | 'design' | 'code' | 'overlap';

type Theme = {
  id: string;
  name: string;
  blurb: string;
  colors: Record<TokenName, string>;
};

// The first theme mirrors the :root tokens in index.css.
const themes: Theme[] = [
  {
    id: 'overprint',
    name: 'Overprint',
    blurb: 'Two inks and their overlap. This site.',
    colors: {
      ink: '#11131D', surface: '#1B1E2C', line: '#2D3248', edge: '#6B7290',
      fg: '#F5F0E6', 'fg-soft': '#D5D7E3', muted: '#A6ACC2', faint: '#8D93AB',
      design: '#FF7A66', code: '#A3AEFF', overlap: '#E6F56B',
    },
  },
  {
    id: 'slate',
    name: 'Slate',
    blurb: 'Calm blues and soft slate.',
    colors: {
      ink: '#0E1A2B', surface: '#16263B', line: '#27405E', edge: '#64809F',
      fg: '#F0F5FA', 'fg-soft': '#CAD7E5', muted: '#9FB3C8', faint: '#8499B0',
      design: '#5CC8FF', code: '#8FB4FF', overlap: '#FFD479',
    },
  },
  {
    id: 'after-dark',
    name: 'After Dark',
    blurb: 'Charcoal with a neon kick.',
    colors: {
      ink: '#141414', surface: '#1F1F1F', line: '#333333', edge: '#757575',
      fg: '#F7F7F2', 'fg-soft': '#D6D6D0', muted: '#ABABA5', faint: '#939390',
      design: '#FF4FD8', code: '#3DF5C4', overlap: '#F5F500',
    },
  },
];

const radii = {
  Sharp: { card: 'rounded-none', button: 'rounded-none' },
  Soft: { card: 'rounded-xl', button: 'rounded-lg' },
  Round: { card: 'rounded-3xl', button: 'rounded-full' },
};

const densities = {
  Compact: { card: 'p-5', button: 'px-3 py-1.5 text-xs' },
  Regular: { card: 'p-8', button: 'px-5 py-2.5 text-sm' },
  Roomy: { card: 'p-12', button: 'px-7 py-3.5 text-base' },
};

const emphases = {
  Filled: 'bg-design text-ink hover:bg-fg',
  Outline: 'border border-design text-design hover:bg-design/10',
};

const contrastChecks: { label: string; fg: TokenName; bg: TokenName; min: number }[] = [
  { label: 'Headline on surface', fg: 'fg', bg: 'surface', min: 4.5 },
  { label: 'Body on surface', fg: 'fg-soft', bg: 'surface', min: 4.5 },
  { label: 'Muted on surface', fg: 'muted', bg: 'surface', min: 4.5 },
  { label: 'Placeholder on ink', fg: 'faint', bg: 'ink', min: 4.5 },
  { label: 'Design ink on surface', fg: 'design', bg: 'surface', min: 4.5 },
  { label: 'Code ink on surface', fg: 'code', bg: 'surface', min: 4.5 },
  { label: 'Button label on design', fg: 'ink', bg: 'design', min: 4.5 },
  { label: 'Control border on ink', fg: 'edge', bg: 'ink', min: 3 },
];

const channels = (hex: string) =>
  [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

const luminance = (hex: string) => {
  const [r, g, b] = channels(hex).map((value) => {
    const c = value / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrast = (a: string, b: string) => {
  const [light, dark] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (light + 0.05) / (dark + 0.05);
};

const tokenEntries = (theme: Theme) =>
  Object.entries(theme.colors).map(([name, hex]) => [`--${name}`, channels(hex).join(' ')]);

const radioFace = (selected: boolean) =>
  `block border transition-colors duration-200 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-overlap ${
    selected ? 'border-design bg-design/5 text-design' : 'border-edge text-fg-soft hover:border-fg-soft'
  }`;

const Segmented = <T extends string>({ legend, options, value, onChange }: {
  legend: string;
  options: T[];
  value: T;
  onChange: (value: T) => void;
}) => (
  <fieldset>
    <legend className="text-xs tracking-[0.3em] uppercase text-muted mb-3">{legend}</legend>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <label key={option} className="cursor-pointer">
          <input
            type="radio"
            name={legend}
            checked={value === option}
            onChange={() => onChange(option)}
            className="peer sr-only"
          />
          <span className={`${radioFace(value === option)} px-4 py-2 text-xs tracking-[0.15em] uppercase font-semibold`}>
            {option}
          </span>
        </label>
      ))}
    </div>
  </fieldset>
);

const Lab = () => {
  const [themeId, setThemeId] = useState(themes[0].id);
  const [radius, setRadius] = useState<keyof typeof radii>('Sharp');
  const [density, setDensity] = useState<keyof typeof densities>('Regular');
  const [emphasis, setEmphasis] = useState<keyof typeof emphases>('Filled');
  const [copied, setCopied] = useState(false);

  const theme = themes.find((t) => t.id === themeId) ?? themes[0];
  const cardClasses = `border border-line bg-surface ${radii[radius].card} ${densities[density].card}`;
  const buttonClasses = `font-semibold transition-colors ${emphases[emphasis]} ${radii[radius].button} ${densities[density].button}`;
  const scopedTokens = Object.fromEntries(tokenEntries(theme)) as React.CSSProperties;

  const snippet = `:root {
${tokenEntries(theme).map(([name, value]) => `  ${name}: ${value};`).join('\n')}
}

<article className="${cardClasses}">
  <p className="text-xs uppercase tracking-[0.2em] text-code">Engineer</p>
  <h3 className="mt-2 text-2xl font-black text-fg">Solar Lead Form Widget</h3>
  <p className="mt-3 text-sm leading-relaxed text-fg-soft">
    Reusable estimator deployed across major energy platforms.
  </p>
  <button type="button" className="mt-6 ${buttonClasses}">
    View project
  </button>
</article>`;

  const copySnippet = async () => {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-ink text-fg pt-16">

      {/* Header */}
      <section className="px-6 lg:px-12 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.p
                className="text-xs tracking-[0.3em] uppercase text-muted mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Component Sandbox
              </motion.p>
              <motion.h1
                className="text-5xl lg:text-7xl font-black tracking-tighter leading-none"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Overprint>The Lab</Overprint>
              </motion.h1>
            </div>
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-fg-soft leading-relaxed">
                Pull on the design tokens behind this site. The preview, contrast checks, and code all update as you go.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-7xl mx-auto border-t border-line pt-12">
          <div className="grid lg:grid-cols-12 gap-12">

            {/* Controls */}
            <div className="lg:col-span-4 space-y-10">
              <fieldset>
                <legend className="text-xs tracking-[0.3em] uppercase text-muted mb-3">Palette</legend>
                <div className="space-y-2">
                  {themes.map((t) => (
                    <label key={t.id} className="block cursor-pointer">
                      <input
                        type="radio"
                        name="Palette"
                        checked={themeId === t.id}
                        onChange={() => setThemeId(t.id)}
                        className="peer sr-only"
                      />
                      <span className={`${radioFace(themeId === t.id)} p-4`}>
                        <span className="flex items-center justify-between gap-4">
                          <span className="text-sm font-bold">{t.name}</span>
                          <span className="flex" aria-hidden="true">
                            {[t.colors.design, t.colors.code, t.colors.overlap].map((color) => (
                              <span
                                key={color}
                                className="-ml-1.5 h-4 w-4 rounded-full border border-ink"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </span>
                        </span>
                        <span className="block mt-1 text-xs text-muted">{t.blurb}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <Segmented legend="Radius" options={Object.keys(radii) as (keyof typeof radii)[]} value={radius} onChange={setRadius} />
              <Segmented legend="Density" options={Object.keys(densities) as (keyof typeof densities)[]} value={density} onChange={setDensity} />
              <Segmented legend="Button" options={Object.keys(emphases) as (keyof typeof emphases)[]} value={emphasis} onChange={setEmphasis} />
            </div>

            {/* Output */}
            <div className="lg:col-span-8 space-y-10 min-w-0">
              <div style={scopedTokens} className="bg-ink border border-line px-6 py-12 lg:px-16 lg:py-20 transition-colors duration-300">
                <article className={`${cardClasses} max-w-md mx-auto transition-all duration-300`}>
                  <p className="text-xs uppercase tracking-[0.2em] text-code">Engineer</p>
                  <h3 className="mt-2 text-2xl font-black text-fg">Solar Lead Form Widget</h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-soft">
                    Reusable estimator deployed across major energy platforms.
                  </p>
                  <button type="button" className={`mt-6 ${buttonClasses}`}>
                    View project
                  </button>
                </article>
              </div>

              <div>
                <h2 className="text-xs tracking-[0.3em] uppercase text-muted mb-4">Live contrast · {theme.name}</h2>
                <table className="w-full text-sm">
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Pairing</th>
                      <th scope="col">Ratio</th>
                      <th scope="col">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contrastChecks.map((check) => {
                      const ratio = contrast(theme.colors[check.fg], theme.colors[check.bg]);
                      const passes = ratio >= check.min;
                      return (
                        <tr key={check.label} className="border-b border-line">
                          <th scope="row" className="py-3 pr-4 text-left font-normal text-fg-soft">{check.label}</th>
                          <td className="py-3 pr-4 text-right font-mono text-fg">{ratio.toFixed(2)}:1</td>
                          <td className={`py-3 w-24 text-right font-mono text-xs ${passes ? 'text-overlap' : 'text-design'}`}>
                            <span className="inline-flex items-center gap-1">
                              {passes ? <Check className="h-3 w-3" aria-hidden="true" /> : <X className="h-3 w-3" aria-hidden="true" />}
                              {passes ? `AA ${check.min}` : 'Fails'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xs tracking-[0.3em] uppercase text-muted">The code</h2>
                  <button
                    type="button"
                    onClick={copySnippet}
                    className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-semibold text-fg-soft hover:text-design transition-colors"
                  >
                    {copied ? <Check className="h-3 w-3" aria-hidden="true" /> : <Copy className="h-3 w-3" aria-hidden="true" />}
                    <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre
                  tabIndex={0}
                  aria-label="Generated tokens and component code"
                  className="bg-surface border border-line p-5 overflow-x-auto text-xs leading-relaxed font-mono text-fg-soft"
                >
                  <code>{snippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lab;
