
        // Mobile Menu Toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
        
        // Theme Toggle
        const themeToggle = document.querySelector('.theme-toggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
        
        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('active');
            } else {
                backToTopButton.classList.remove('active');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Testimonials Slider
        const testimonials = document.querySelector('.testimonials');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentIndex = 0;
        
        function showTestimonial(index) {
            testimonials.style.transform = `translateX(-${index * 100}%)`;
        }
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.testimonial').length;
            showTestimonial(currentIndex);
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + document.querySelectorAll('.testimonial').length) % document.querySelectorAll('.testimonial').length;
            showTestimonial(currentIndex);
        });
        
        // Auto slide testimonials
        setInterval(() => {
            currentIndex = (currentIndex + 1) % document.querySelectorAll('.testimonial').length;
            showTestimonial(currentIndex);
        }, 5000);
        
        // Animated Statistics Counter
        const statNumbers = document.querySelectorAll('.stat-number');
        let counted = false;
        
        function animateNumbers() {
            if (!counted && window.scrollY > document.querySelector('.stats').offsetTop - 500) {
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            stat.textContent = target + (stat.getAttribute('data-count') === '95' ? '%' : '+');
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + (stat.getAttribute('data-count') === '95' ? '%' : '+');
                        }
                    }, 16);
                });
                
                counted = true;
            }
        }
        
        window.addEventListener('scroll', animateNumbers);
        
        // Simulated Chat Widget
        const chatWidget = document.querySelector('.chat-widget');
        
        chatWidget.addEventListener('click', () => {
            alert('Hello! How can I help you with your career guidance today?');
        });
        
        // Smooth Scrolling for Navigation Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Initialize
        window.addEventListener('load', () => {
            // Trigger stats animation if stats section is already in view
            animateNumbers();
        });
        //ui
