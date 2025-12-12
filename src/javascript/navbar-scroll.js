// Script simplificado para controle da navbar
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    let lastScrollTop = 0;
    let scrollTimer = null;
    
    // Função principal para controlar o comportamento da navbar
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Sempre mostrar navbar quando o usuário está rolando (removendo classe hidden)
        header.classList.remove("hidden");
        
        // Adicionar transparência quando não estiver no topo
        if (scrollTop > 100) {
            header.classList.add("scrolling");
        } else {
            header.classList.remove("scrolling");
        }
        
        // Verificar a direção da rolagem
        const scrollDown = scrollTop > lastScrollTop;
        lastScrollTop = scrollTop;
        
        // Limpar timer anterior
        clearTimeout(scrollTimer);
        
        // Configurar novo timer para esconder a navbar após a rolagem parar
        scrollTimer = setTimeout(function() {
            // Esconder apenas se:
            // 1. Rolou para baixo
            // 2. Não está no topo da página
            if (scrollDown && scrollTop > 100) {
                header.classList.add("hidden");
            }
        }, 500); // 1 segundo após parar de rolar
    }
    
    // Adicionar evento de rolagem
    window.addEventListener("scroll", handleScroll);
    
    // Mostrar navbar quando o mouse estiver no topo da tela
    document.addEventListener("mousemove", function(e) {
        if (e.clientY < 40) {
            header.classList.remove("hidden");
        }
    });
});