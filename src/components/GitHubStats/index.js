import React from 'react';
import './style.css';
import { FaJava, FaCss3, FaHtml5, FaCode } from 'react-icons/fa';
import { SiKotlin, SiJavascript } from 'react-icons/si';

const GITHUB_USERNAME = 'BlastBlastBlast';
const PROFILE_PIC_URL = 'https://github.com/BlastBlastBlast.png';

const stats = {
  commits: '550+',
  lines: '15.000+',
  repos: '10+',
  username: 'BlastBlastBlast',
  description: "Ridin' on hoverboards, wipin' out motherboards",
  languages: ['Java', 'Kotlin', 'C', 'JS', 'CSS', 'HTML'],
};

const GitHubStats = () => (
  <div className="github-stats about-section" style={{ margin: '2rem 0', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
      <img src={PROFILE_PIC_URL} alt="Profile" style={{ width: 64, height: 64, borderRadius: '50%', marginRight: 16 }} />
      <div>
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>{stats.username}</div>
        <div style={{ color: '#aaa', fontSize: 14 }}>{stats.description}</div>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 12 }}>
      <div>
        <div className="stat-label">Commits</div>
        <div className="stat-value">{stats.commits}</div>
      </div>
      <div>
        <div className="stat-label">Lines</div>
        <div className="stat-value">{stats.lines}</div>
      </div>
      <div>
        <div className="stat-label">Repos</div>
        <div className="stat-value">{stats.repos}</div>
      </div>
      <div>
        <div className="stat-label">Languages</div>
        <div className="stat-langs-row">
          {[
            { name: 'Java', icon: <FaJava /> },
            { name: 'Kotlin', icon: <SiKotlin /> },
            { name: 'C', icon: <FaCode /> },
            { name: 'JS', icon: <SiJavascript /> },
            { name: 'CSS', icon: <FaCss3 /> },
            { name: 'HTML', icon: <FaHtml5 /> },
          ].map(lang => (
            <span key={lang.name} className="lang-icon-label">
              <span className="lang-icon">{lang.icon}</span>
              <span className="lang-label">{lang.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default GitHubStats;
