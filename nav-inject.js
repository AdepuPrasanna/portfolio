// Injects the shared nav into any element with id="nav-placeholder"
(function() {
  const nav = `
  <nav>
    <a class="nav-name" href="index.html">PA<span>.</span></a>
    <div class="nav-links">
      <a class="nb" href="index.html">Home</a>
      <a class="nb" href="about.html">About</a>
      <div class="proj-dropdown-wrap" id="projWrap">
        <button class="proj-dropdown-btn" id="projBtn" onclick="toggleDropdown()">
          Projects <i class="ti ti-chevron-down"></i>
        </button>
        <div class="proj-menu" id="projMenu">
          <div class="proj-menu-section">
            <div class="proj-menu-label">All projects</div>
            <a class="proj-menu-item" href="projects.html">
              <span class="dot" style="background:var(--ink3)"></span>View all projects
            </a>
          </div>
          <div class="proj-menu-divider"></div>
          <div class="proj-menu-section">
            <div class="proj-menu-label">Full-stack &amp; SaaS</div>
            <a class="proj-menu-item" href="p1.html"><span class="dot" style="background:var(--blue-mid)"></span>MRECW Results Portal</a>
            <a class="proj-menu-item" href="p2.html"><span class="dot" style="background:var(--purple-mid)"></span>ASAF</a>
            <a class="proj-menu-item" href="p3.html"><span class="dot" style="background:var(--teal-mid)"></span>BizEase</a>
          </div>
          <div class="proj-menu-divider"></div>
          <div class="proj-menu-section">
            <div class="proj-menu-label">AI / ML</div>
            <a class="proj-menu-item" href="p4.html"><span class="dot" style="background:var(--coral-mid)"></span>Deepfake Detection</a>
            <a class="proj-menu-item" href="p5.html"><span class="dot" style="background:var(--amber-mid)"></span>Accident Detection CNN</a>
          </div>
        </div>
      </div>
      <a class="nb" href="contact.html">Contact</a>
    </div>
  </nav>`;

  const placeholder = document.getElementById('nav-placeholder');
  if (placeholder) placeholder.outerHTML = nav;
})();
