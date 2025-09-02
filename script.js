//<!-- Minimal JS for form and reveal-on-scroll -->
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Reveal on scroll
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      })
    }, { threshold: .14 });
    revealEls.forEach(el => io.observe(el));

// Testimonials slider (auto + dots)
    const slides = document.getElementById('slides');
    const dots = document.getElementById('dots');
    function makeDots(){
      const count = slides.children.length; dots.innerHTML='';
      for(let i=0;i<count;i++){const d=document.createElement('span');d.className='dot';dots.appendChild(d)}
      dots.firstChild.classList.add('active')
    }
    makeDots();
    let index=0; setInterval(()=>{
      const count = slides.children.length; index = (index+1)%count;
      slides.scrollTo({left: index* (slides.children[0].offsetWidth+16), behavior:'smooth'});
      dots.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active', i===index));
    }, 4000);

    // Fake form submit (replace with your backend or Formspree/Netlify)
    function submitForm(evt){
      evt.preventDefault();
      const data = Object.fromEntries(new FormData(evt.target).entries());
      const msg = `Thank you, ${data.name}! We will reach you on ${data.phone || data.email}.`;
      alert(msg);
      evt.target.reset();
      return false;
    }

    // WhatsApp quick launcher
    function wa(number, text='Hello AA Dominion Estate — I\'d like to make an enquiry.'){
      window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, '_blank');
    }
  