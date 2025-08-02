import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">♔</span>
              </div>
              <span className="text-xl font-bold text-yellow-500">ChessRyu</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-yellow-500 transition-colors">Features</a>
              <a href="#community" className="text-gray-300 hover:text-yellow-500 transition-colors">Community</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-500 transition-colors">About</a>
            </div>
            <button className="bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Revolutionizing
              <span className="text-yellow-500 block">Chess Innovation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the future of chess with AI-powered coaching, advanced anti-cheat systems, 
              and a global community of passionate players.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-lg">
                Start Your Journey
              </button>
              <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 text-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Innovative Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technology meets the timeless game of chess
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Coach Feature */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">AI-Powered Coaching</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence analyzes your games and provides personalized 
                coaching to improve your strategic thinking and tactical skills.
              </p>
            </div>

            {/* Anti-Cheat Feature */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Advanced Anti-Cheat</h3>
              <p className="text-gray-300">
                State-of-the-art detection systems ensure fair play and maintain the integrity 
                of competitive chess matches across our platform.
              </p>
            </div>

            {/* Community Feature */}
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Global Community</h3>
              <p className="text-gray-300">
                Connect with chess enthusiasts worldwide, participate in tournaments, 
                and share strategies with players of all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Join the ChessRyu
                <span className="text-yellow-500 block">Community</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Become part of a thriving ecosystem where innovation meets tradition. 
                Connect with fellow chess enthusiasts, learn from masters, and compete 
                in exciting tournaments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300">Daily tournaments and challenges</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300">Expert analysis and coaching</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-gray-900 font-bold">✓</span>
                  </div>
                  <span className="text-gray-300">Fair and secure gameplay</span>
                </div>
              </div>
              <button className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 mt-8">
                Join Community
              </button>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/10 to-blue-600/10 rounded-2xl p-8 border border-yellow-500/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-500">50K+</div>
                  <div className="text-gray-300">Active Players</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-500">100+</div>
                  <div className="text-gray-300">Daily Tournaments</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-500">24/7</div>
                  <div className="text-gray-300">AI Coaching</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-500">99.9%</div>
                  <div className="text-gray-300">Fair Play Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gradient-to-r from-yellow-500/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Chess Game?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of players who have already elevated their chess skills 
            with ChessRyu's innovative platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-lg">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold px-8 py-4 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-lg">♔</span>
                </div>
                <span className="text-xl font-bold text-yellow-500">ChessRyu</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing chess through innovation and community.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Tournaments</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-yellow-500">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ChessRyu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
