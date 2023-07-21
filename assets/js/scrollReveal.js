const sr = ScrollReveal ({
    origin: 'left',
    distance: '60px',
    duration: 2500,
    delay: 200,
    reset: true,
})

sr.reveal('.content-section');
sr.reveal('.img-section' , {origin: 'right'});

sr.reveal('.svg-ig', {delay: 500})
sr.reveal('.svg-arrow-ig', {delay: 500})
sr.reveal('.svg-web', {delay: 500})
sr.reveal('.svg-arrow-yt', {origin: 'right', delay: 500})
sr.reveal('.svg-yt', {origin: 'right', delay: 500})

const srSVG = ScrollReveal ({
    origin: 'bottom',
    distance: '100px',
    duration: 1500,
    delay: 1000,
    
})

srSVG.reveal('.blob-xl')
srSVG.reveal('.blob-md', {origin:'top'})