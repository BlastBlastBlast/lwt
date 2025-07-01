// ARCHIVED: Previous GitHubStats component with direct GitHub API fetching.
// This file is kept for reference. The active component now uses github-readme-stats SVG cards.

import React, { useState, useEffect } from 'react';
import './style.css';
import { FaGithub, FaCode, FaCodeBranch, FaPlus } from 'react-icons/fa';

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const GitHubStats = () => {
  const [stats, setStats] = useState({
    totalLinesAdded: 0,
    totalCommits: 0,
    totalRepos: 0,
    username: 'BlastBlastBlast',
    name: '',
    avatarUrl: '',
    bio: '',
    languages: [],
    loading: true,
    error: null
  });

  // Helper to fetch all paginated results
  const fetchAllPages = async (url, headers) => {
    let results = [];
    let nextUrl = url;
    while (nextUrl) {
      const res = await fetch(nextUrl, { headers });
      if (!res.ok) throw new Error('Failed fetching ' + nextUrl);
      const data = await res.json();
      results = results.concat(data);
      // Check for next page
      const link = res.headers.get('link');
      if (link && link.includes('rel="next"')) {
        const match = link.match(/<([^>]+)>; rel="next"/);
        nextUrl = match ? match[1] : null;
      } else {
        nextUrl = null;
      }
    }
    return results;
  };

  useEffect(() => {
    const fetchGitHubStats = async () => {
      if (!GITHUB_TOKEN || GITHUB_TOKEN === 'YOUR_GITHUB_TOKEN_HERE') {
        setStats(prev => ({
          ...prev,
          error: 'GitHub token not configured',
          loading: false
        }));
        return;
      }
      try {
        // 1. Fetch user profile info
        const userRes = await fetch('https://api.github.com/users/BlastBlastBlast', {
          headers: {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });
        if (!userRes.ok) throw new Error('Failed to fetch user profile');
        const user = await userRes.json();
        // 2. Fetch all repos owned by the user
        const repos = await fetchAllPages(
          'https://api.github.com/users/BlastBlastBlast/repos?per_page=100&type=owner',
          {
            'Authorization': `token ${GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        );
        let totalLinesAdded = 0;
        let totalCommits = 0;
        // Collect languages
        const languageSet = new Set();
        // 3. For each repo, fetch all commits authored by the user and sum lines added
        for (const repo of repos) {
          // Collect language for this repo
          if (repo.language) {
            languageSet.add(repo.language);
          }
          const commits = await fetchAllPages(
            `https://api.github.com/repos/BlastBlastBlast/${repo.name}/commits?author=BlastBlastBlast&per_page=100`,
            {
              'Authorization': `token ${GITHUB_TOKEN}`,
              'Accept': 'application/vnd.github.v3+json'
            }
          );
          totalCommits += commits.length;
          // For each commit, fetch details for additions
          for (const commit of commits) {
            const commitRes = await fetch(
              `https://api.github.com/repos/BlastBlastBlast/${repo.name}/commits/${commit.sha}`,
              {
                headers: {
                  'Authorization': `token ${GITHUB_TOKEN}`,
                  'Accept': 'application/vnd.github.v3+json'
                }
              }
            );
            if (commitRes.ok) {
              const commitData = await commitRes.json();
              if (commitData.stats && typeof commitData.stats.additions === 'number') {
                totalLinesAdded += commitData.stats.additions;
              }
            }
          }
        }
        setStats(prev => ({
          ...prev,
          totalLinesAdded,
          totalCommits,
          totalRepos: repos.length,
          name: user.name || user.login,
          avatarUrl: user.avatar_url,
          bio: user.bio,
          languages: Array.from(languageSet),
          loading: false,
          error: null
        }));
      } catch (error) {
        setStats(prev => ({ ...prev, error: error.message, loading: false }));
      }
    };
    fetchGitHubStats();
  }, []);

  return (
    <div className="github-stats-container">
      {stats.loading ? (
        <div>Loading GitHub stats...</div>
      ) : stats.error ? (
        <div className="error">Error: {stats.error}</div>
      ) : (
        <div className="stats-content">
          <div className="profile-header">
            <img src={stats.avatarUrl} alt="Profile" className="profile-avatar" style={{ width: 64, height: 64, borderRadius: '50%', marginRight: 16 }} />
            <div>
              <div className="profile-name" style={{ fontWeight: 'bold', fontSize: 20 }}>{stats.name}</div>
              <div className="profile-username">@{stats.username}</div>
              <div className="profile-bio" style={{ color: '#888' }}>{stats.bio}</div>
            </div>
          </div>
          <table className="github-stats-table">
            <tbody>
              <tr>
                <th>Repos</th>
                <td>{stats.totalRepos}</td>
              </tr>
              <tr>
                <th>Commits</th>
                <td>{stats.totalCommits}</td>
              </tr>
              <tr>
                <th>Lines Added</th>
                <td>{stats.totalLinesAdded}</td>
              </tr>
              <tr>
                <th>Languages Touched</th>
                <td>{stats.languages && stats.languages.length > 0 ? stats.languages.join(', ') : 'N/A'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GitHubStats;
