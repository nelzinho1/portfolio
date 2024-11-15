$(document).ready(function() {
    // Adiciona ou remove a classe "sticky" quando o usuário rolar a página
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Exibe/oculta o menu ao clicar no botão de menu
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
    });

    // Fecha o menu ao clicar em um link do menu
    $('.menu-link').click(function() {
        $('.navbar .menu').removeClass("active");
        $('.menu-btn').removeClass("active");
    });

    // Scroll suave para o topo ao clicar no botão "scroll-up-btn"
    $('.scroll-up-btn').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800); // O tempo de animação foi ajustado para 800ms
    });

    // Instâncias do Typed.js para animações de texto
    new Typed(".typing", {
        strings: ["", "SRE | Analista de suporte | AWS | AZURE|", "Programador", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["DevOps", "Programador", "Analista de suporte | AWS | AZURE|", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-3", {
        strings: ["", "SRE", "DevOps"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Inicia o carrossel Owl Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
