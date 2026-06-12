document.addEventListener('DOMContentLoaded', () => {
  const nav = document.createElement('nav');
  nav.id = 'main-nav';
  nav.className = 'bg-white/95 dark:bg-stone-900/95 backdrop-blur-md text-gray-800 dark:text-gray-100 fixed top-0 left-0 w-full z-50 border-b border-gray-200/50 dark:border-stone-700/50 transition-shadow duration-300';
  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 lg:h-[72px]">

        <!-- Logo -->
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
            <span class="text-lg lg:text-xl font-medium tracking-tight text-amber-800 dark:text-amber-400 font-heading group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">Hops Haven</span>
            <span class="text-[10px] lg:text-xs text-stone-400 dark:text-stone-500 font-medium tracking-wider uppercase">Craft Brewery</span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden xl:flex items-center gap-1">
          <div class="flex items-center bg-stone-50/80 dark:bg-stone-800/60 rounded-xl px-1.5 py-1">

            <!-- Home Dropdown -->
            <div class="relative group" data-page="home">
              <button class="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-stone-700/60 transition-all duration-200 nav-desktop">
                Home
                <svg class="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-500 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-1.5 w-44 bg-white dark:bg-stone-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-stone-100 dark:border-stone-700 overflow-hidden">
                <a href="index.html" class="block px-4 py-3 text-sm text-stone-600 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-stone-700/60 hover:text-amber-700 dark:hover:text-amber-400 transition">Home 1</a>
                <div class="border-t border-stone-100 dark:border-stone-700"></div>
                <a href="home2.html" class="block px-4 py-3 text-sm text-stone-600 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-stone-700/60 hover:text-amber-700 dark:hover:text-amber-400 transition">Home 2</a>
              </div>
            </div>

            <a href="about.html" class="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-stone-700/60 transition-all duration-200 nav-desktop relative" data-page="about">About</a>
            <a href="beers.html" class="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-stone-700/60 transition-all duration-200 nav-desktop relative" data-page="beers">Beers</a>
            <a href="events.html" class="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-stone-700/60 transition-all duration-200 nav-desktop relative" data-page="events">Events</a>
            <a href="membership.html" class="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-stone-700/60 transition-all duration-200 nav-desktop relative" data-page="membership">Membership</a>

            <!-- Dashboard Dropdown -->
            <div class="relative group" data-page="dashboard">
              <button class="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-stone-700/60 transition-all duration-200 nav-desktop">
                Dashboard
                <svg class="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-500 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div class="absolute top-full left-0 mt-1.5 w-48 bg-white dark:bg-stone-800 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-stone-100 dark:border-stone-700 overflow-hidden">
                <a href="dashboards/admin-dashboard.html" class="block px-4 py-3 text-sm text-stone-600 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-stone-700/60 hover:text-amber-700 dark:hover:text-amber-400 transition">Admin</a>
                <div class="border-t border-stone-100 dark:border-stone-700"></div>
                <a href="dashboards/user-dashboard.html" class="block px-4 py-3 text-sm text-stone-600 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-stone-700/60 hover:text-amber-700 dark:hover:text-amber-400 transition">User</a>
              </div>
            </div>

            <a href="contact.html" class="px-3.5 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-white dark:hover:bg-stone-700/60 transition-all duration-200 nav-desktop relative" data-page="contact">Contact</a>
          </div>
        </div>

        <!-- Utility Actions -->
        <div class="flex items-center gap-1.5 sm:gap-2">
          <button id="theme-btn" onclick="themeToggle()" class="hidden xl:inline-flex p-2.5 rounded-xl bg-stone-50/80 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-700/80 text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200 cursor-pointer" title="Toggle theme">
            <svg class="w-4 h-4 sun-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/>
              <path stroke-linecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg class="w-4 h-4 moon-icon hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          </button>
          <button id="rtl-btn" onclick="rtlToggle()" class="hidden xl:inline-flex p-2.5 rounded-xl bg-stone-50/80 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-700/80 text-stone-500 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200 cursor-pointer" title="Toggle text direction">
            <span id="rtl-label" class="text-xs font-medium dir-icon">RTL</span>
          </button>

          <div class="hidden xl:flex items-center gap-2 ml-1">
            <a href="login.html" class="px-4 py-2 rounded-lg text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-all duration-200">Login</a>
            <a href="signup.html" class="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-amber-700 to-amber-800 dark:from-amber-600 dark:to-amber-700 hover:from-amber-800 hover:to-amber-900 shadow-sm hover:shadow-md transition-all duration-200">Sign Up</a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-btn" class="xl:hidden p-2.5 rounded-xl bg-stone-50/80 dark:bg-stone-800/60 hover:bg-stone-100 dark:hover:bg-stone-700/80 text-stone-500 dark:text-stone-400 transition-all duration-200 cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-menu" class="hidden xl:hidden bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-200/50 dark:border-stone-700/50 shadow-lg max-h-[calc(100vh-4.5rem)] overflow-y-auto">
      <div class="px-4 py-4 space-y-1">
        <div class="pb-1">
          <div class="text-xs font-medium uppercase tracking-wider text-amber-700 dark:text-amber-500 px-3 py-2">Home Styles</div>
          <div class="space-y-0.5 ml-2">
            <a href="index.html" class="nav-link flex items-center gap-3 pl-8 pr-3 py-2.5 text-sm text-stone-600 dark:text-stone-300 border-l-2 border-transparent hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-r-lg transition-all duration-200">Home 1</a>
            <a href="home2.html" class="nav-link flex items-center gap-3 pl-8 pr-3 py-2.5 text-sm text-stone-600 dark:text-stone-300 border-l-2 border-transparent hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-r-lg transition-all duration-200">Home 2</a>
          </div>
        </div>
        <hr class="border-stone-200 dark:border-stone-700">
        <a href="about.html" class="nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-200 border-l-2 border-transparent hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-r-lg transition-all duration-200">About</a>
        <hr class="border-stone-200 dark:border-stone-700">
        <a href="beers.html" class="nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-200 border-l-2 border-transparent hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-r-lg transition-all duration-200">Beers</a>
        <hr class="border-stone-200 dark:border-stone-700">
        <a href="events.html" class="nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-200 border-l-2 border-transparent hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-r-lg transition-all duration-200">Events</a>
        <hr class="border-stone-200 dark:border-stone-700">
        <a href="membership.html" class="nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-200 border-l-2 border-transparent hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-r-lg transition-all duration-200">Membership</a>
        <hr class="border-stone-200 dark:border-stone-700">
        <div class="pb-1">
          <div class="text-xs font-medium uppercase tracking-wider text-amber-700 dark:text-amber-500 px-3 py-2">Dashboards</div>
          <div class="space-y-0.5 ml-2">
            <a href="dashboards/admin-dashboard.html" class="nav-link flex items-center gap-3 pl-8 pr-3 py-2.5 text-sm text-stone-600 dark:text-stone-300 border-l-2 border-transparent hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-r-lg transition-all duration-200">Admin</a>
            <a href="dashboards/user-dashboard.html" class="nav-link flex items-center gap-3 pl-8 pr-3 py-2.5 text-sm text-stone-600 dark:text-stone-300 border-l-2 border-transparent hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-r-lg transition-all duration-200">User</a>
          </div>
        </div>
        <hr class="border-stone-200 dark:border-stone-700">
        <a href="contact.html" class="nav-link flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-stone-700 dark:text-stone-200 border-l-2 border-transparent hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-r-lg transition-all duration-200">Contact</a>
        <hr class="border-stone-200 dark:border-stone-700">
      </div>
      <div class="px-4 pb-5 space-y-3">
        <div class="flex items-center gap-3">
          <button onclick="themeToggle()" class="flex-1 flex items-center justify-center gap-2 py-2.5 border border-stone-200 dark:border-stone-700 rounded-xl text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-all duration-200 cursor-pointer" id="mobile-theme-btn">
            <svg class="w-4 h-4 sun-icon" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5"/><path stroke-linecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg class="w-4 h-4 moon-icon hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
            <span id="mobile-theme-label">Dark Mode</span>
          </button>
          <button onclick="rtlToggle()" class="flex-1 flex items-center justify-center gap-2 py-2.5 border border-stone-200 dark:border-stone-700 rounded-xl text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-all duration-200 cursor-pointer" id="mobile-rtl-btn">
            <span id="mobile-rtl-label" class="dir-icon">RTL</span>
          </button>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <a href="login.html" class="text-center py-2.5 border border-stone-200 dark:border-stone-700 rounded-xl text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-all duration-200">Login</a>
          <a href="signup.html" class="text-center py-2.5 bg-gradient-to-r from-amber-700 to-amber-800 dark:from-amber-600 dark:to-amber-700 text-white rounded-xl text-sm font-medium hover:from-amber-800 hover:to-amber-900 transition-all duration-200">Sign Up</a>
        </div>
      </div>
    </div>
  `;

  document.body.prepend(nav);

  // Scroll effect
  window.addEventListener('scroll', () => {
    const navEl = document.getElementById('main-nav');
    if (window.scrollY > 20) {
      navEl.classList.add('shadow-lg');
      navEl.classList.remove('shadow-sm');
    } else {
      navEl.classList.remove('shadow-lg');
      navEl.classList.add('shadow-sm');
    }
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      document.body.style.overflow = isHidden ? '' : 'hidden';
      menuIcon.setAttribute('d', isHidden ? 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' : 'M6 18L18 6M6 6l12 12');
    });
  }

  // Active page highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Mobile active state
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    const linkPage = href ? href.split('/').pop() : '';
    if (linkPage === currentPath) {
      link.classList.add('border-amber-600', 'text-amber-700', 'dark:text-amber-400', 'font-medium');
      link.classList.remove('border-transparent', 'text-stone-600', 'text-stone-700', 'dark:text-stone-300', 'dark:text-stone-200');
    }
  });

  // Desktop active state
  const pageMap = {
    'index.html': 'home',
    'home2.html': 'home',
    'about.html': 'about',
    'beers.html': 'beers',
    'events.html': 'events',
    'membership.html': 'membership',
    'contact.html': 'contact',
    'dashboards/admin-dashboard.html': 'dashboard',
    'dashboards/user-dashboard.html': 'dashboard',
  };
  const activePage = pageMap[currentPath];

  if (activePage) {
    // Find matching desktop nav item and add active styles with underline
    document.querySelectorAll('[data-page]').forEach(group => {
      if (group.dataset.page === activePage) {
        const target = group.querySelector('.nav-desktop') || group;
        target.classList.add('text-amber-700', 'dark:text-amber-400', 'font-medium', 'bg-white', 'dark:bg-stone-700/60', 'shadow-sm');
        target.classList.remove('text-stone-600', 'dark:text-stone-300');
        target.style.position = 'relative';

        // Add underline bar
        const bar = document.createElement('span');
        bar.className = 'absolute -bottom-[5px] left-2 right-2 h-[3px] bg-amber-600 dark:bg-amber-400 rounded-full';
        target.appendChild(bar);
      }
    });
  }

  // Theme icon sync
  function syncThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.sun-icon').forEach(el => el.classList.toggle('hidden', isDark));
    document.querySelectorAll('.moon-icon').forEach(el => el.classList.toggle('hidden', !isDark));
    const label = document.getElementById('mobile-theme-label');
    if (label) label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  }
  syncThemeIcons();

  // RTL label sync
  function syncRtlLabel() {
    const isRtl = document.documentElement.dir === 'rtl';
    document.querySelectorAll('.dir-icon').forEach(el => el.textContent = isRtl ? 'LTR' : 'RTL');
    const btn = document.getElementById('rtl-btn');
    if (btn) btn.title = isRtl ? 'Switch to LTR' : 'Switch to RTL';
  }
  syncRtlLabel();

  const origThemeToggle = window.themeToggle;
  window.themeToggle = function() {
    if (origThemeToggle) origThemeToggle();
    setTimeout(syncThemeIcons, 50);
  };

  const origRtlToggle = window.rtlToggle;
  window.rtlToggle = function() {
    if (origRtlToggle) origRtlToggle();
    setTimeout(syncRtlLabel, 50);
  };
});
