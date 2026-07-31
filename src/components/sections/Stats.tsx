import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Activity, Users, UserPlus, Code2 } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

interface GithubData {
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}

interface LeetcodeData {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

export const Stats: React.FC = () => {
  const [githubData, setGithubData] = useState<GithubData | null>(null);
  const [leetcodeData, setLeetcodeData] = useState<LeetcodeData | null>(null);

  useEffect(() => {
    // Fetch GitHub Data
    fetch('https://api.github.com/users/PoojaK-K')
      .then(res => res.json())
      .then(data => {
        setGithubData({
          followers: data.followers || 0,
          following: data.following || 0,
          public_repos: data.public_repos || 0,
          public_gists: data.public_gists || 0
        });
      })
      .catch(console.error);

    // Fetch LeetCode Data via reliable API
    fetch('https://alfa-leetcode-api.onrender.com/Pooja_K_K/solved')
      .then(res => res.json())
      .then(data => {
        if (data && data.solvedProblem !== undefined) {
          setLeetcodeData({
            solvedProblem: data.solvedProblem,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
          });
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            Developer Metrics
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold">
            Code & <span className="text-gradient">Contributions</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GitHub Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Github size={28} className="text-white" />
              <h4 className="text-2xl font-bold text-white">GitHub Stats</h4>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Activity size={16} /> Repositories
                </div>
                <div className="text-3xl font-bold text-white">{githubData?.public_repos ?? '...'}</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Users size={16} /> Followers
                </div>
                <div className="text-3xl font-bold text-white">{githubData?.followers ?? '...'}</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <UserPlus size={16} /> Following
                </div>
                <div className="text-3xl font-bold text-white">{githubData?.following ?? '...'}</div>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Code2 size={16} /> Public Gists
                </div>
                <div className="text-3xl font-bold text-white">{githubData?.public_gists ?? '...'}</div>
              </div>
            </div>
          </motion.div>

          {/* LeetCode Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 text-yellow-500/10 rotate-12 pointer-events-none">
              <SiLeetcode size={200} />
            </div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <SiLeetcode size={28} className="text-yellow-500" />
              <h4 className="text-2xl font-bold text-white">LeetCode Profile</h4>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              {/* Progress Ring */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                  <circle cx="64" cy="64" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" 
                    strokeDasharray={377} strokeDashoffset={leetcodeData ? 377 - (377 * leetcodeData.solvedProblem) / 500 : 377} 
                    className="text-yellow-500 transition-all duration-1000 ease-out" 
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-bold text-white">{leetcodeData?.solvedProblem ?? '...'}</span>
                  <span className="text-xs text-gray-400">Solved</span>
                </div>
              </div>

              {/* Difficulty Breakdown */}
              <div className="flex-1 w-full space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-green-400 font-medium">Easy</span>
                    <span className="text-white font-bold">{leetcodeData?.easySolved ?? '...'}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: leetcodeData ? `${(leetcodeData.easySolved / leetcodeData.solvedProblem) * 100}%` : '0%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-yellow-500 font-medium">Medium</span>
                    <span className="text-white font-bold">{leetcodeData?.mediumSolved ?? '...'}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: leetcodeData ? `${(leetcodeData.mediumSolved / leetcodeData.solvedProblem) * 100}%` : '0%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-red-500 font-medium">Hard</span>
                    <span className="text-white font-bold">{leetcodeData?.hardSolved ?? '...'}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: leetcodeData ? `${(leetcodeData.hardSolved / leetcodeData.solvedProblem) * 100}%` : '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
