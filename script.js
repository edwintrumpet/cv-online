document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Update icon
        if (document.body.classList.contains('dark-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Animate skill bars on scroll
    const skillLevels = document.querySelectorAll('.skill-level');
    
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to animate skill bars when they come into view
    function animateSkillBars() {
        skillLevels.forEach(skill => {
            if (isInViewport(skill)) {
                skill.style.width = skill.style.width;
            }
        });
    }
    
    // Initial check for elements in viewport
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function highlightNavLink() {
        let scrollPosition = window.scrollY + 100; // Adjust for header height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Initial highlight check
    highlightNavLink();
    
    // Check on scroll
    window.addEventListener('scroll', highlightNavLink);
    
    // Add mobile navigation toggle
    const createMobileNav = () => {
        const nav = document.querySelector('.nav');
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        
        // Only add if it doesn't exist and we're on mobile
        if (!document.querySelector('.mobile-menu-btn') && window.innerWidth <= 768) {
            nav.insertBefore(mobileMenuBtn, nav.firstChild);
            
            mobileMenuBtn.addEventListener('click', () => {
                const navLinks = document.querySelector('.nav-links');
                navLinks.classList.toggle('show');
                
                // Toggle icon
                const icon = mobileMenuBtn.querySelector('i');
                if (navLinks.classList.contains('show')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        } else if (document.querySelector('.mobile-menu-btn') && window.innerWidth > 768) {
            // Remove if screen size is larger than mobile
            const btn = document.querySelector('.mobile-menu-btn');
            if (btn) btn.remove();
            document.querySelector('.nav-links').classList.remove('show');
        }
    };
    
    // Initial call
    createMobileNav();
    
    // Update on resize
    window.addEventListener('resize', createMobileNav);
    
    // Add CSS for mobile menu
    const addMobileStyles = () => {
        if (!document.getElementById('mobile-styles')) {
            const styleSheet = document.createElement('style');
            styleSheet.id = 'mobile-styles';
            styleSheet.textContent = `
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                        background: none;
                        border: none;
                        color: var(--text-color);
                        font-size: 1.5rem;
                        cursor: pointer;
                        transition: var(--transition);
                    }
                    
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        background-color: var(--bg-color);
                        flex-direction: column;
                        padding: 20px 0;
                        box-shadow: 0 5px 10px var(--shadow-color);
                    }
                    
                    .nav-links.show {
                        display: flex;
                    }
                    
                    .nav-links li {
                        margin: 10px 0;
                        text-align: center;
                    }
                    
                    .nav-links a {
                        display: block;
                        padding: 10px;
                    }
                    
                    .nav-links a.active {
                        color: var(--primary-color);
                    }
                }
            `;
            document.head.appendChild(styleSheet);
        }
    };
    
    // Add mobile styles
    addMobileStyles();
});