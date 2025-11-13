
        // Scroll animations
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(el => observer.observe(el));
        
        // Animate skill bars
        const skillLevels = document.querySelectorAll('.skill-level');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const level = entry.target.getAttribute('data-level');
                    entry.target.style.width = level + '%';
                }
            });
        }, { threshold: 0.5 });
        
        skillLevels.forEach(el => skillObserver.observe(el));
        
        // Typing effect
        const typingText = document.querySelector('.typing-text');
        const texts = ['FUTURE', 'DIGITAL', 'EXPERIENCES', 'SOLUTIONS'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 100 : 200);
            }
        }
        
        // Start typing effect after page loads
        window.addEventListener('load', () => {
            setTimeout(type, 1000);
        });
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });
        
        // 3D Elements Interaction
        const pyramidContainer = document.querySelector('.pyramid-container');
        const cubeContainer = document.querySelector('.cube-container');
        const sphereContainer = document.querySelector('.sphere-container');
        const cursorEffect = document.querySelector('.cursor-effect');
        const cursorTrail = document.querySelector('.cursor-trail');
        
        // 3D tilt effect based on cursor position
        document.addEventListener('mousemove', (e) => {
            const { clientX: x, clientY: y } = e;
            
            // Calculate rotation based on cursor position
            const rotateY = (x / window.innerWidth) * 40 - 20;
            const rotateX = -(y / window.innerHeight) * 40 + 20;
            
            // Apply 3D transformation to pyramid
            pyramidContainer.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            
            // Apply different transformations to cube and sphere
            cubeContainer.style.transform = `rotateY(${rotateY * 1.5}deg) rotateX(${rotateX * 1.5}deg)`;
            sphereContainer.style.transform = `rotateY(${rotateY * 0.7}deg) rotateX(${rotateX * 0.7}deg)`;
            
            // Update cursor effect position
            cursorEffect.style.left = `${x - 10}px`;
            cursorEffect.style.top = `${y - 10}px`;
            
            // Create cursor trail effect
            createCursorTrail(x, y);
        });
        
        // Create cursor trail effect
        function createCursorTrail(x, y) {
            const trail = document.createElement('div');
            trail.classList.add('cursor-trail');
            trail.style.left = `${x - 4}px`;
            trail.style.top = `${y - 4}px`;
            document.body.appendChild(trail);
            
            // Animate trail
            setTimeout(() => {
                trail.style.opacity = '0.7';
                trail.style.transform = 'scale(1.5)';
            }, 10);
            
            // Remove trail after animation
            setTimeout(() => {
                trail.style.opacity = '0';
                trail.style.transform = 'scale(0.5)';
                setTimeout(() => {
                    if (trail.parentNode) {
                        trail.parentNode.removeChild(trail);
                    }
                }, 300);
            }, 300);
        }
        
        // Logo interaction
        const logo = document.getElementById('logo');
        logo.addEventListener('click', () => {
            logo.style.transform = 'rotate(360deg) scale(1.2)';
            setTimeout(() => {
                logo.style.transform = '';
            }, 600);
        });