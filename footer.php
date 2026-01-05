  </main>

  <footer id="footer" class="footer light-background">
    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="/" class="logo d-flex align-items-center">
            <span class="sitename">BotPlus</span>
          </a>
          <p>Your AI-powered digital brand ambassador. We create photorealistic virtual agents that deliver human-like customer experiences through emotional intelligence and multilingual support.</p>
          <div class="social-links d-flex mt-4">
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
          </div>
        </div>

        <div class="col-lg-4 col-6 footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products.html">Our Products</a></li>
            <li><a href="/solutions.html">Solutions</a></li>
            <li><a href="/#enterprise-services">For Enterprises</a></li>
            <li><a href="/workflow.html">Workflow</a></li>
            <li><a href="/blog/">Blog</a></li>
            <li><a href="/contact.html">Contact Us</a></li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>BotPlus Technologies</p>
          <p>DIFC</p>
          <p>Dubai, UAE</p><br>
          <p><strong>Phone:</strong> <span>+971 50 150 3004</span></p>
          <p><strong>Email:</strong> <span>sales@botplus.ae</span></p><br><br>
        </div>
      </div>
    </div>
  </footer>

  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
  <div id="preloader"></div>

  <!-- Scripts -->
  <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer></script>
  <script src="/assets/vendor/aos/aos.js" defer></script>
  <script src="/assets/js/main.js" defer></script>

  <!-- Calendly Lazy Load -->
  <script>
    let calendlyLoaded = false;
    function loadCalendly() {
      if (calendlyLoaded) return;
      const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = 'https://assets.calendly.com/assets/external/widget.css'; document.head.appendChild(link);
      const script = document.createElement('script'); script.src = 'https://assets.calendly.com/assets/external/widget.js'; script.async = true; script.onload = () => calendlyLoaded = true; document.body.appendChild(script);
    }
    document.addEventListener('click', function(e) {
      if (e.target.closest('a[onclick*="Calendly"]')) {
        e.preventDefault();
        loadCalendly();
        setTimeout(() => Calendly.initPopupWidget({url: 'https://calendly.com/justin-manj/demo?&hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=364f5d&back=1'}), 500);
      }
    });
  </script>

  <!-- Google Analytics Deferred -->
  <script>
    window.addEventListener('load', () => setTimeout(() => {
      const s = document.createElement('script');
      s.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZQDKP3YCWQ';
      s.async = true;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZQDKP3YCWQ');
    }, 1000));
  </script>

  <?php wp_footer(); // REQUIRED for WordPress plugins, admin bar, etc ?>
</body>
</html>