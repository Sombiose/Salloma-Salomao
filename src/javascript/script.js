/* SCRIPTS PARA MENU E INTERAÇÕES */
$(document).ready(function() {
    // Toggle do menu mobile
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-x');
    });
    
    // DESKTOP: Dropdown ao clicar
    $('#nav_list .dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Impede a propagação do clique
        
        // Toggle da classe active no dropdown
        $(this).parent('.dropdown').toggleClass('active');
        
        // Fecha outros dropdowns
        $('#nav_list .dropdown').not($(this).parent('.dropdown')).removeClass('active');
    });
    
    // MOBILE: Dropdown ao clicar (no menu mobile)
    $('#mobile_menu .dropdown-toggle').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Impede a propagação do clique
        
        // Toggle da classe active no dropdown
        $(this).parent('.dropdown').toggleClass('active');
    });
    
    // Fecha todos os dropdowns ao clicar fora
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('active');
        }
    });
    
    // Impede que cliques no dropdown menu fechem o dropdown
    $('.dropdown-menu').on('click', function(e) {
        e.stopPropagation();
    });
    
    // Navegação pelos itens do submenu (desktop)
    $('#nav_list .dropdown-menu a').on('click', function(e) {
        e.preventDefault();
        
        // Fecha o dropdown
        $(this).closest('.dropdown').removeClass('active');
        
        // Navegação suave
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // Navegação pelos itens do submenu (mobile)
    $('#mobile_menu .dropdown-menu a').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // Impede que o dropdown feche
        
        const href = $(this).attr('href');
        const target = $(href);
        
        // Navegação suave com atraso
        setTimeout(function() {
            // Fecha o menu mobile após navegação
            $('#mobile_menu').removeClass('active');
            $('#mobile_btn').find('i').removeClass('fa-x').addClass('fa-bars');
            
            // Scroll para a seção
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800);
            }
        }, 300);
    });
    
    // Links normais do menu (exceto dropdowns)
    $('a[href^="#"]').not('.dropdown-toggle, .dropdown-menu a').on('click', function(e) {
        e.preventDefault();
        
        // Fecha o menu mobile se estiver aberto
        $('#mobile_menu').removeClass('active');
        $('#mobile_btn').find('i').removeClass('fa-x').addClass('fa-bars');
        
        // Navegação suave
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // Detecta seção atual durante o scroll
    $(window).on('scroll', function() {
        const scrollPosition = $(this).scrollTop();
        
        // Verificar cada seção
        $('section').each(function() {
            const sectionTop = $(this).offset().top - 100;
            const sectionBottom = sectionTop + $(this).outerHeight();
            const sectionId = $(this).attr('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Remove a classe active de todos os links
                $('#nav_list .nav-item a').removeClass('active');
                $('#mobile_nav_list .nav-item a').removeClass('active');
                
                // Adiciona classe active ao link correspondente
                $(`#nav_list .nav-item a[href="#${sectionId}"]`).addClass('active');
                $(`#mobile_nav_list .nav-item a[href="#${sectionId}"]`).addClass('active');
                
                // Verifica se é um item do submenu e destaca o item pai
                if ($(`#nav_list .dropdown-menu a[href="#${sectionId}"]`).length) {
                    $('#nav_list .dropdown > a').addClass('active');
                    $('#mobile_nav_list .dropdown > a').addClass('active');
                }
            }
        });
    });
});