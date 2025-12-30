export default function Home() {
  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo-group">
            <div className="logo-icon">
              <span>BR</span>
            </div>
            <div>
              <div className="logo-text-primary">The Bedrock Project</div>
              <div className="logo-text-secondary">Constitutional infrastructure for critical flows</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#story">Story</a>
            <a href="#problem">Problem</a>
            <a href="#use-cases">Use cases</a>
            <a href="#solution">Bedrock layer</a>
            <a href="#alignment">Alignment</a>
            <a href="#privacy">Privacy</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-grid">
              <div>
                <p className="badge">Constitutional control plane · draft 0.9</p>

                <h1>
                  A control plane for AI&apos;s physical reality —
                  <span className="accent"> without</span> a surveillance state.
                </h1>

                <p className="hero-description">
                  Bedrock is a reference design for governing <strong>critical flows</strong>:
                  energy, compute, and constrained materials.
                  It pairs <strong>verifiable receipts</strong> with privacy-preserving proofs and
                  <strong>fail-closed policy gates</strong> — so institutions can distinguish strategic work from waste.
                </p>

                <div className="hero-buttons">
                  <a href="#use-cases" className="btn-primary">Explore use cases</a>
                  <a href="#solution" className="btn-secondary">Read the pattern</a>
                  <a href="#privacy" className="btn-secondary">Privacy & safeguards</a>
                </div>
              </div>

              {/* Right card: diagram */}
              <div>
                <div className="panel shadow-soft">
                  <div className="hero-card-header">
                    <div className="hero-card-title">Bedrock in one page</div>
                    <div className="status-indicator">
                      <span className="status-dot"></span>
                      <span>Rails online</span>
                    </div>
                  </div>
                  <div className="hero-card-body">
                    <div>
                      <div className="stack-label">The 5-layer stack</div>
                      <div className="stack-items">
                        <div className="stack-item">
                          <span className="stack-item-label">Layer 5 · Institutional</span>
                          <span className="stack-item-desc">Rules, debt, capacity</span>
                        </div>
                        <div className="stack-item">
                          <span className="stack-item-label">Layer 4 · Social</span>
                          <span className="stack-item-desc">Media, truth, coordination</span>
                        </div>
                        <div className="stack-item">
                          <span className="stack-item-label">Layer 3 · Human</span>
                          <span className="stack-item-desc">Skills, attention, incentives</span>
                        </div>
                        <div className="stack-item">
                          <span className="stack-item-label">Layer 2 · Biology</span>
                          <span className="stack-item-desc">Health, fertility, safety</span>
                        </div>
                        <div className="stack-item">
                          <span className="stack-item-label">Layer 1 · Physics</span>
                          <span className="stack-item-desc">Energy, materials, grid</span>
                        </div>
                      </div>
                    </div>

                    <div className="hairline"></div>

                    <div>
                      <div className="stack-label">The core primitives</div>
                      <div className="primitives-grid">
                        <div className="primitive-card">
                          <div className="primitive-title cyan">Observe</div>
                          <p className="primitive-desc">Measure critical flows with verifiable receipts.</p>
                        </div>
                        <div className="primitive-card">
                          <div className="primitive-title violet">Prove</div>
                          <p className="primitive-desc">Show rights & limits with minimal disclosure.</p>
                        </div>
                        <div className="primitive-card">
                          <div className="primitive-title gold">Constrain</div>
                          <p className="primitive-desc">No valid proof → fail closed at commit-time.</p>
                        </div>
                      </div>
                    </div>

                    <div className="hairline"></div>

                    <div className="hero-card-footer">
                      <div>Scope: <span style={{ color: "var(--slate-200)", fontWeight: 500 }}>critical flows</span></div>
                      <div>Principle: <span className="accent">privacy by design</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hairline container"></div>

        {/* STORY */}
        <section id="story" className="section">
          <div className="container">
            <div className="section-header" style={{ maxWidth: "36rem" }}>
              <h2>From Extraction to Attribution</h2>
              <p>
                AI is becoming a physical industry. A world-class orchestration layer starts by making
                <strong style={{ color: "var(--slate-100)" }}> energy → compute → outcome</strong> visible — then governing it with minimal disclosure.
              </p>
            </div>

            <div className="grid-2">
              <div className="panel card">
                <div className="card-label">A short story</div>
                <div className="story-content">
                  <p><strong>Once upon a time</strong>, digital systems could consume resources without a meter.</p>
                  <p><strong>Every day</strong>, the grid grew fragile, the internet filled with slop, and scarce materials disappeared into disposable tech.</p>
                  <p><strong>One day</strong>, it became clear the bottleneck wasn&apos;t models. It was <strong>atoms and accountability</strong>.</p>
                  <p><strong>Because of that</strong>, we began designing measurement rails and policy gates for critical flows.</p>
                  <p><strong>Until finally</strong>, we can move toward an Attribution Economy — where strategic compute wins over waste.</p>
                </div>
              </div>

              <div className="panel panel-strong card">
                <div className="card-label cyan">The basics</div>
                <div className="basics-list">
                  <div><strong>Well-to-Inference</strong>: measure the path from energy → compute → outcome so supply and demand can be governed.</div>
                  <div><strong>Policy gates</strong>: high-stakes actions pause until required proofs exist (approve/deny/route with accountability).</div>
                  <div><strong>Portable proofs</strong>: compact evidence packets that can be audited without exposing raw logs or private life.</div>
                  <div><strong>Canonicals + validation</strong>: shared definitions and rules so systems agree on &quot;what counts,&quot; at decision time.</div>
                  <div><strong>Integrity rails</strong>: <strong>Artifact Integrity</strong> (is it real?) and <strong>Agent Integrity</strong> (is it safe to trust?) for high-stakes workflows.</div>
                </div>

                <div className="callout-box">
                  <div className="callout-label">Not a surveillance project</div>
                  <p>Bedrock governs <strong>critical flows</strong> using minimal disclosure and privacy-preserving proofs — not total life-logging.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hairline container"></div>

        {/* PROBLEM */}
        <section id="problem" className="section">
          <div className="container">
            <div className="problem-grid">
              <div className="problem-intro">
                <h2>The polycrisis is an attribution failure.</h2>
                <p>
                  We talk about energy, AI, and trust as separate crises. Underneath, the root cause is the same:
                  <strong>we cannot see who did what, with which resources, under which rules — in time to correct course.</strong>
                </p>
                <p>
                  When purpose is invisible, rationing becomes panic. When provenance is absent, slop wins. When midstream is opaque, rivals gain leverage.
                  Bedrock is a measurement and enforcement substrate designed to restore feedback loops — without collapsing into surveillance.
                </p>
              </div>

              <div className="space-y-4">
                {/* Failure patterns */}
                <div className="panel panel-red card">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <div className="card-label" style={{ marginBottom: 0, color: "var(--slate-300)" }}>Failure patterns</div>
                    <span className="tag">the compounding loop</span>
                  </div>
                  <div className="failure-list">
                    <div><strong>Curtailment → Grid stagnation</strong>: we dump clean power instead of using it.</div>
                    <div><strong>Opaque compute → Grid fragility</strong>: operators see load, not purpose.</div>
                    <div><strong>Model slop</strong>: systems train on their own exhaust; truth and creativity blur.</div>
                    <div><strong>Midstream abdication</strong>: we mine at home, refine abroad, and depend on rivals.</div>
                    <div><strong>Youth betrayal</strong>: blocked housing, fragile work, and no upside in the status quo.</div>
                  </div>
                </div>

                {/* What&apos;s missing today */}
                <div className="panel panel-cyan card">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <div className="card-label cyan" style={{ marginBottom: 0 }}>What&apos;s missing today</div>
                    <span className="tag">the missing layer</span>
                  </div>

                  <div className="missing-grid">
                    <div className="missing-card">
                      <div className="missing-card-label">Meters</div>
                      <p>Verifiable receipts for energy, compute, and constrained materials — at decision time.</p>
                    </div>
                    <div className="missing-card">
                      <div className="missing-card-label">Proof</div>
                      <p>Privacy-preserving proofs of rights, duties, caps, and provenance.</p>
                    </div>
                    <div className="missing-card">
                      <div className="missing-card-label">Gates</div>
                      <p>Automatic, fail-closed enforcement when required evidence is missing.</p>
                    </div>
                    <div className="missing-card">
                      <div className="missing-card-label">Integrity</div>
                      <p>Artifact Integrity (origin) and Agent Integrity (behavior) for high-stakes workflows.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hairline container"></div>

        {/* USE CASES */}
        <section id="use-cases" className="section">
          <div className="container">
            <div className="usecase-header">
              <div style={{ maxWidth: "36rem" }}>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "white", marginBottom: "0.75rem" }}>Use case library</h2>
                <p style={{ fontSize: "0.875rem", color: "var(--slate-300)", lineHeight: "1.7" }}>Concrete, repeatable patterns. Each one is the same shape: receipts → proofs → gates → portable evidence.</p>
                <p style={{ fontSize: "0.75rem", color: "var(--slate-400)", lineHeight: "1.6", marginTop: "0.5rem" }}>Use cases below are illustrative starting points—not an exhaustive catalog. The Bedrock layer applies to any workflow that touches critical flows (energy, compute, materials, integrity, rights).</p>
              </div>
              <div className="usecase-stats">
                <div className="panel stat-box">
                  <div className="stat-number gold">6</div>
                  <div className="stat-label">Core patterns</div>
                </div>
                <div className="panel stat-box">
                  <div className="stat-number cyan">4</div>
                  <div className="stat-label">Integrity rails</div>
                </div>
              </div>
            </div>

            <div className="usecase-grid">
              <div className="panel card usecase-card">
                <div className="usecase-card-header">
                  <div>
                    <h3>Grid draw governance</h3>
                    <p>Prioritize hospitals and critical services when power is constrained — based on purpose, not hype.</p>
                  </div>
                  <span className="tag">Well-to-Inference</span>
                </div>
                <div className="usecase-tags">
                  <span className="tag" style={{ fontSize: "11px" }}>kWh receipts</span>
                  <span className="tag" style={{ fontSize: "11px" }}>priority proofs</span>
                  <span className="tag" style={{ fontSize: "11px" }}>fail-closed caps</span>
                </div>
              </div>

              <div className="panel card usecase-card">
                <div className="usecase-card-header">
                  <div>
                    <h3>Training provenance</h3>
                    <p>Require provenance and composition evidence before a model can train at scale.</p>
                  </div>
                  <span className="tag">Slop control</span>
                </div>
                <div className="usecase-tags">
                  <span className="tag" style={{ fontSize: "11px" }}>dataset receipts</span>
                  <span className="tag" style={{ fontSize: "11px" }}>human/synth labels</span>
                  <span className="tag" style={{ fontSize: "11px" }}>proof packet</span>
                </div>
              </div>

              <div className="panel card usecase-card">
                <div className="usecase-card-header">
                  <div>
                    <h3>Material passports</h3>
                    <p>Prove allied midstream and lawful refinement for critical programs.</p>
                  </div>
                  <span className="tag">Supply chain</span>
                </div>
                <div className="usecase-tags">
                  <span className="tag" style={{ fontSize: "11px" }}>origin receipts</span>
                  <span className="tag" style={{ fontSize: "11px" }}>refining proofs</span>
                  <span className="tag" style={{ fontSize: "11px" }}>contract gates</span>
                </div>
              </div>

              <div className="panel card usecase-card">
                <div className="usecase-card-header">
                  <div>
                    <h3>Data & resource royalties</h3>
                    <p>Attribute value so citizens can share upside when resources are consumed for intelligence.</p>
                  </div>
                  <span className="tag">Attribution</span>
                </div>
                <div className="usecase-tags">
                  <span className="tag" style={{ fontSize: "11px" }}>usage receipts</span>
                  <span className="tag" style={{ fontSize: "11px" }}>settlement rules</span>
                  <span className="tag" style={{ fontSize: "11px" }}>audit proofs</span>
                </div>
              </div>

              <div className="panel card usecase-card">
                <div className="usecase-card-header">
                  <div>
                    <h3>Artifact Integrity</h3>
                    <p>Verify origin and tamper-evidence for content in high-stakes workflows.</p>
                  </div>
                  <span className="tag">Integrity</span>
                </div>
                <div className="usecase-tags">
                  <span className="tag" style={{ fontSize: "11px" }}>origin proofs</span>
                  <span className="tag" style={{ fontSize: "11px" }}>chain-of-custody</span>
                  <span className="tag" style={{ fontSize: "11px" }}>distribution gates</span>
                </div>
              </div>

              <div className="panel card usecase-card">
                <div className="usecase-card-header">
                  <div>
                    <h3>Agent Integrity</h3>
                    <p>Fail closed when systems attempt manipulation, coercion, or policy-evasion.</p>
                  </div>
                  <span className="tag">Integrity</span>
                </div>
                <div className="usecase-tags">
                  <span className="tag" style={{ fontSize: "11px" }}>behavior gates</span>
                  <span className="tag" style={{ fontSize: "11px" }}>policy versions</span>
                  <span className="tag" style={{ fontSize: "11px" }}>operator resolution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hairline container"></div>

        {/* SOLUTION */}
        <section id="solution" className="section">
          <div className="container">
            <div className="solution-intro">
              <h2>The Bedrock Layer: receipts, not revolutions.</h2>
              <p>
                Bedrock is a constitutional control plane that sits under critical infrastructure.
                It doesn&apos;t replace markets or votes — it makes high-stakes flows observable and enforceable where it matters.
                The primitive is always the same: a verifiable receipt attached to a unit of flow, then evaluated by policy at commit-time.
              </p>
            </div>

            <div className="grid-3">
              <div className="panel card solution-card">
                <div className="card-label cyan">01 · Observe</div>
                <p className="lead">You cannot govern what you cannot see.</p>
                <p>Instrument critical flows with verifiable receipts: where power was generated, how compute was spent, where materials were refined.</p>
              </div>

              <div className="panel card solution-card">
                <div className="card-label violet">02 · Prove</div>
                <p className="lead">Prove rights and limits, reveal nothing extra.</p>
                <p>Demonstrate compliance using minimal disclosure: permitted, within caps, using allowed sources — without exposing raw logs or private life.</p>
              </div>

              <div className="panel card solution-card">
                <div className="card-label gold">03 · Constrain</div>
                <p className="lead">No valid proof → no run.</p>
                <p>If required receipts or proofs are missing, the system fails closed and routes decisions to accountable operators.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="hairline container"></div>

        {/* ALIGNMENT */}
        <section id="alignment" className="section">
          <div className="container">
            <div className="alignment-intro">
              <h2>Governance alignment, made enforceable.</h2>
              <p>
                Most frameworks describe what &quot;good&quot; looks like. Bedrock turns those principles into execution:
                <strong>receipts</strong> for evidence,
                <strong>proofs</strong> for verification, and
                <strong>fail-closed gates</strong> for enforcement.
              </p>
              <p className="note">
                Designed to support governance programs aligned with NIST AI RMF, ISO/IEC 42001, OECD AI Principles, and UNESCO Ethics.
                (Not a certification claim.)
              </p>
            </div>

            <div className="grid-3" style={{ gap: "1rem" }}>
              <div className="panel card">
                <div className="card-label cyan">Framework compatibility</div>
                <ul className="framework-list">
                  <li><strong>NIST AI RMF</strong>: Govern / Map / Measure / Manage become concrete control points inside workflows.</li>
                  <li><strong>ISO/IEC 42001</strong>: an evidence layer for AI management systems (policies, monitoring, improvement).</li>
                  <li><strong>OECD</strong>: traceability + accountability via receipts and decision records; safe override/stop via gates.</li>
                  <li><strong>UNESCO</strong>: supports monitoring, transparency, and responsibility through provable lineage and intelligible decision context.</li>
                  <li><strong>EU transparency duties</strong>: helps label inauthentic content and preserve &quot;why&quot; for high-stakes decisions.</li>
                </ul>
              </div>

              <div className="panel card">
                <div className="card-label gold">AI safety primitives</div>
                <p style={{ color: "var(--slate-300)", fontSize: "0.875rem" }}>
                  Safety is a physics problem when AI touches critical flows.
                  Bedrock adds integrity rails that fail closed when the system cannot prove trust.
                </p>

                <div className="safety-cards">
                  <div className="soft">
                    <div className="safety-card-title">Artifact Integrity</div>
                    <div className="safety-card-desc">Prove origin and detect tamper / inauthentic media where trust matters.</div>
                  </div>
                  <div className="soft">
                    <div className="safety-card-title">Agent Integrity</div>
                    <div className="safety-card-desc">Detect policy-breaking behavior (manipulation, deception, unsafe action) and route to accountable human resolution.</div>
                  </div>
                </div>

                <p className="safety-note">
                  The goal is not &quot;more policy.&quot; The goal is fewer ways to cheat the policy.
                </p>
              </div>

              <div className="panel card">
                <div className="card-label violet">Genesis Mission alignment</div>
                <p style={{ color: "var(--slate-300)", fontSize: "0.875rem" }}>
                  Genesis Mission is about accelerating discovery with secure, interoperable compute + data. Bedrock strengthens that stack by making critical flows measurable and governable across partners.
                </p>
                <ul className="framework-list" style={{ marginTop: "0.75rem" }}>
                  <li><strong>Accelerate discovery</strong> with reproducible, auditable lineage for data, models, and runs.</li>
                  <li><strong>Strengthen national security</strong> via fail-closed access, vetting hooks, and tamper-evident audit trails.</li>
                  <li><strong>Secure energy dominance</strong> through Well-to-Inference measurement (energy → compute → outcome).</li>
                  <li><strong>Enable partnerships</strong> with portable proofs that satisfy security, IP, and data-use constraints.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="hairline container"></div>

        {/* PRIVACY */}
        <section id="privacy" className="section">
          <div className="container">
            <div className="privacy-grid">
              <div className="privacy-intro">
                <h2>Privacy is not an afterthought. It is the architecture.</h2>
                <p>
                  The obvious fear is that attribution rails become mass behavioral scoring.
                  Bedrock is designed to prevent that outcome through scope limits and minimal disclosure.
                </p>

                <div className="privacy-points">
                  <div className="privacy-point">
                    <div className="privacy-dot green"></div>
                    <p><strong>Critical flows, not total life-logging.</strong><br />We care about systemic risk surfaces (grids, supply chains, high-stakes systems), not personal communications.</p>
                  </div>
                  <div className="privacy-point">
                    <div className="privacy-dot cyan"></div>
                    <p><strong>Proofs, not dossiers.</strong><br />Actors prove compliance (caps, rights, provenance) without exposing underlying identities or full histories.</p>
                  </div>
                  <div className="privacy-point">
                    <div className="privacy-dot violet"></div>
                    <p><strong>Constitutional constraints by design.</strong><br />The rails that enable governance should also restrict repurposing for mass scoring.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="panel card metaphor-box">
                  <div className="card-label" style={{ color: "var(--slate-400)" }}>Cheap metaphor</div>
                  <p>A bartender doesn&apos;t need your full identity to serve you. They need a single bit: <strong>over / under 21</strong>.</p>
                  <p>Modern systems demand the whole ID. Bedrock demands only the bit — proven via cryptography, not trust.</p>
                </div>

                <div className="panel card">
                  <div className="card-label" style={{ color: "var(--slate-400)" }}>What institutions see</div>
                  <ul className="institution-list">
                    <li>Risk posture and compliance at the <strong>system level</strong>.</li>
                    <li>Which critical thresholds are being approached or breached.</li>
                    <li>Where sovereignty is threatened (e.g., midstream chokepoints).</li>
                  </ul>
                  <p className="institution-note">Not: individual browsing histories, DMs, or private conversations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hairline container"></div>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <div className="footer-brand">The Bedrock Project</div>
              <div>AnchorTrust Holdings LLC · Draft reference design for sovereign attribution rails.</div>
            </div>
            <div className="footer-right">
              <div>Working principle: <span className="accent">Observe · Prove · Constrain</span></div>
              <div className="muted">thebedrockproject.com</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
