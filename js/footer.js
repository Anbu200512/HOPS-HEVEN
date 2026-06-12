document.addEventListener('DOMContentLoaded', () => {
  const footer = document.createElement('footer');
  footer.className = 'bg-stone-50 dark:bg-black text-stone-600 dark:text-stone-400 mt-auto border-t border-stone-200 dark:border-stone-800/50 relative';
  footer.innerHTML = `
    <div class="absolute top-0 left-0 right-0 h-[2px] footer-glow"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

        <!-- Brand Column -->
        <div class="lg:col-span-2 space-y-5">
          <a href="index.html" class="flex items-center gap-2.5 group">
            <div class="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 dark:from-amber-600 dark:to-amber-800 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <svg class="w-5 h-5 lg:w-5.5 lg:h-5.5 text-amber-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 11h1a3 3 0 0 1 0 6h-1"/>
                <path d="M9 5h6"/>
                <path d="M9 5v2a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V5"/>
                <path d="M9 11v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-8"/>
                <path d="M5 11h4"/>
                <path d="M5 13h4"/>
                <path d="M5 15h3"/>
              </svg>
            </div>
            <div class="flex flex-col leading-none">
              <span class="text-lg lg:text-xl font-medium tracking-tight text-amber-700 dark:text-amber-400 font-heading">Hops Haven</span>
              <span class="text-[10px] lg:text-xs text-stone-400 dark:text-stone-500 font-medium tracking-wider uppercase">Craft Brewery</span>
            </div>
          </a>
          <p class="text-sm leading-relaxed text-stone-500 dark:text-stone-500 max-w-sm">Crafting exceptional, independent microbrews since 2020. Stop by our rustic-industrial taproom and beautiful beer garden in the heart of Portland.</p>
          <div class="flex gap-3 pt-1">
            <a href="#" class="w-9 h-9 rounded-lg bg-stone-200 dark:bg-stone-800/80 hover:bg-amber-200 dark:hover:bg-amber-800/80 border border-stone-300 dark:border-stone-700/50 hover:border-amber-400 dark:hover:border-amber-700/50 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 transition-all duration-300" title="Instagram">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-stone-200 dark:bg-stone-800/80 hover:bg-amber-200 dark:hover:bg-amber-800/80 border border-stone-300 dark:border-stone-700/50 hover:border-amber-400 dark:hover:border-amber-700/50 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 transition-all duration-300" title="Facebook">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" class="w-9 h-9 rounded-lg bg-stone-200 dark:bg-stone-800/80 hover:bg-amber-200 dark:hover:bg-amber-800/80 border border-stone-300 dark:border-stone-700/50 hover:border-amber-400 dark:hover:border-amber-700/50 flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 transition-all duration-300" title="X">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-amber-700 dark:text-amber-400 font-medium mb-5 uppercase tracking-wider text-xs">Explore</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="about.html" class="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200 flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-700 group-hover:bg-amber-500 dark:group-hover:bg-amber-500"></span>About Our Brewery</a></li>
            <li><a href="beers.html" class="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200 flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-700"></span>What's On Tap</a></li>
            <li><a href="events.html" class="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200 flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-700"></span>Events & Tours</a></li>
            <li><a href="contact.html" class="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200 flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-700"></span>Find / Contact Us</a></li>
          </ul>
        </div>

        <!-- Membership -->
        <div>
          <h4 class="text-amber-700 dark:text-amber-400 font-medium mb-5 uppercase tracking-wider text-xs">Mug Club</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="membership.html" class="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200 flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-700"></span>Membership Perks</a></li>
            <li><a href="dashboards/user-dashboard.html" class="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200 flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-700"></span>Member Dashboard</a></li>
            <li><a href="dashboards/admin-dashboard.html" class="text-stone-500 hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200 flex items-center gap-2"><span class="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-700"></span>Staff Portal</a></li>
          </ul>
        </div>

        <!-- Contact / Hours -->
        <div>
          <h4 class="text-amber-700 dark:text-amber-400 font-medium mb-5 uppercase tracking-wider text-xs">Visit Us</h4>
          <div class="space-y-3 text-sm text-stone-500">
            <div class="flex items-start gap-2.5">
              <svg class="w-4 h-4 mt-0.5 text-amber-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span>404 Brewhouse Lane<br>Portland, OR 97201</span>
            </div>
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-amber-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>(503) 555-0199</span>
            </div>
            <div class="flex items-center gap-2.5">
              <svg class="w-4 h-4 text-amber-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>hello@hopshavenbeer.com</span>
            </div>

          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-stone-300 dark:border-stone-800/70 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-600">
        <p>&copy; 2026 Hops Haven Independent Microbrewery. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="#" class="hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200">Privacy Policy</a>
          <a href="#" class="hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200">Terms of Service</a>
          <a href="#" class="hover:text-amber-700 dark:hover:text-amber-300 transition-colors duration-200">Sitemap</a>
        </div>
      </div>
    </div>
  `;
  const style = document.createElement('style');
  style.textContent = `
    @keyframes footerShimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
    .footer-glow {
      background: linear-gradient(90deg, transparent 0%, #d97706 25%, #fbbf24 50%, #d97706 75%, transparent 100%);
      background-size: 200% 100%;
      animation: footerShimmer 3s ease-in-out infinite;
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(footer);
});
