
import { useState } from "react";
import {
  Rocket,
  ArrowLeftRight,
  LayoutDashboard,
  Wallet,
  Search,
  Plus,
  TrendingUp,
  ChevronDown,
  Zap,
  Menu,
  X
} from "lucide-react";

type Tab = "Launchpad" | "Exchange" | "Dashboard";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("Launchpad");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [amount, setAmount] = useState("100");
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("USDC");

  const projects = [
    {
      name: "Nova Protocol",
      symbol: "NOVA",
      category: "DeFi",
      raised: "$128,500",
      target: "$200,000",
      progress: 64,
      color: "purple",
      status: "LIVE"
    },
    {
      name: "Orbit Finance",
      symbol: "ORBT",
      category: "Infrastructure",
      raised: "$86,000",
      target: "$100,000",
      progress: 86,
      color: "blue",
      status: "LIVE"
    },
    {
      name: "Quantum AI",
      symbol: "QAI",
      category: "AI",
      raised: "$42,000",
      target: "$150,000",
      progress: 28,
      color: "green",
      status: "UPCOMING"
    }
  ];

  const navItems = [
    { name: "Launchpad" as Tab, icon: Rocket },
    { name: "Exchange" as Tab, icon: ArrowLeftRight },
    { name: "Dashboard" as Tab, icon: LayoutDashboard }
  ];

  function renderContent() {
    if (activeTab === "Exchange") {
      return (
        <div className="swap-layout">
          <div className="section-heading">
            <div>
              <span className="eyebrow">TRADE TOKENS</span>
              <h1>Exchange</h1>
              <p>Swap digital assets through NovaX.</p>
            </div>
          </div>

          <div className="swap-card">
            <div className="swap-title">
              <h2>Swap Tokens</h2>
              <span className="network-pill">GIWA TESTNET</span>
            </div>

            <label>You pay</label>
            <div className="token-input">
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                min="0"
              />
              <select
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
              >
                <option>ETH</option>
                <option>USDC</option>
                <option>GIWA</option>
              </select>
            </div>

            <button
              className="switch-button"
              onClick={() => {
                setFromToken(toToken);
                setToToken(fromToken);
              }}
            >
              <ArrowLeftRight size={19} />
            </button>

            <label>You receive</label>
            <div className="token-input">
              <input readOnly value="—" />
              <select
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
              >
                <option>USDC</option>
                <option>ETH</option>
                <option>GIWA</option>
              </select>
            </div>

            <div className="swap-info">
              <span>Network</span>
              <strong>GIWA Sepolia</strong>
              <span>Estimated fee</span>
              <strong>Calculated on-chain</strong>
            </div>

            <button className="primary-button" disabled>
              SDK Integration Pending
            </button>
            <p className="notice">
              Demo interface. Real swaps will be enabled after SDK and
              smart contract integration.
            </p>
          </div>
        </div>
      );
    }

    if (activeTab === "Dashboard") {
      return (
        <div>
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR WEB3 OVERVIEW</span>
              <h1>Dashboard</h1>
              <p>Manage your NovaX activity.</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <span>Portfolio Value</span>
              <h2>$0.00</h2>
              <small>Connect your wallet</small>
            </div>
            <div className="stat-card">
              <span>Active Investments</span>
              <h2>0</h2>
              <small>Your launchpad positions</small>
            </div>
            <div className="stat-card">
              <span>Swap Transactions</span>
              <h2>0</h2>
              <small>Your trading activity</small>
            </div>
          </div>

          <div className="empty-card">
            <Wallet size={32} />
            <h3>Your portfolio starts here</h3>
            <p>Connect your wallet to view your assets and activity.</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="hero">
          <div className="hero-content">
            <span className="hero-label">
              <Zap size={14} /> THE NEXT GENERATION OF DeFi
            </span>
            <h1>
              Launch. Trade.
              <br />
              <span>Explore NovaX.</span>
            </h1>
            <p>
              Discover new token projects and explore decentralized
              trading in one powerful ecosystem.
            </p>
            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => setActiveTab("Exchange")}
              >
                Explore Exchange <ArrowLeftRight size={17} />
              </button>
              <button
                className="secondary-button"
                onClick={() => setActiveTab("Dashboard")}
              >
                My Dashboard
              </button>
            </div>
          </div>
          <div className="hero-orb">
            <div className="orb-inner">
              <Rocket size={62} />
              <span>NOVAX</span>
            </div>
          </div>
        </div>

        <div className="section-heading">
          <div>
            <span className="eyebrow">DISCOVER OPPORTUNITIES</span>
            <h2>Explore Launchpad</h2>
            <p>Discover projects preparing for their next stage.</p>
          </div>
          <button className="outline-button">
            <Plus size={16} /> Submit Project
          </button>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.symbol}>
              <div className="project-top">
                <div className={`project-icon ${project.color}`}>
                  {project.symbol.slice(0, 1)}
                </div>
                <span className="live-pill">{project.status}</span>
              </div>

              <span className="category">{project.category}</span>
              <h3>{project.name}</h3>
              <p className="symbol">{project.symbol} Token</p>

              <div className="progress-info">
                <span>Funds Raised</span>
                <strong>{project.raised}</strong>
              </div>

              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              <div className="progress-info">
                <span>{project.progress}% funded</span>
                <span>Goal: {project.target}</span>
              </div>

              <button className="project-button" disabled>
                Demo Project
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <aside className={`sidebar ${mobileMenu ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-icon">N</div>
          <span>Nova<span className="brand-accent">X</span></span>
          <button className="close-menu" onClick={() => setMobileMenu(false)}>
            <X />
          </button>
        </div>

        <div className="menu-label">PLATFORM</div>

        <nav>
          {navItems.map(({ name, icon: Icon }) => (
            <button
              key={name}
              className={`nav-item ${activeTab === name ? "active" : ""}`}
              onClick={() => {
                setActiveTab(name);
                setMobileMenu(false);
              }}
            >
              <Icon size={19} />
              {name}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="network-card">
            <span className="online-dot" />
            <div>
              <strong>GIWA Sepolia</strong>
              <small>Testnet Environment</small>
            </div>
          </div>
          <p>NovaX Protocol © 2026</p>
        </div>
      </aside>

      {mobileMenu && (
        <div className="overlay" onClick={() => setMobileMenu(false)} />
      )}

      <main className="main">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileMenu(true)}>
            <Menu />
          </button>

          <div className="breadcrumb">
            NovaX <span>/</span> {activeTab}
          </div>

          <div className="top-actions">
            <div className="network-pill">
              <span className="online-dot" /> GIWA Sepolia
            </div>
            <button className="wallet-button" disabled>
              <Wallet size={17} /> Wallet Integration Pending
            </button>
          </div>
        </header>

        <div className="content">
          {renderContent()}

          <footer>
            <span>© 2026 NovaX Protocol</span>
            <span>Powered by Ammora SDK · GIWA Sepolia</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
