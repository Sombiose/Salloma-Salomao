// Dados da linha do tempo (anos e eventos) - Expandido para 40 datas
const timelineData = [
    {
        year: 1961,
        description: "Nascimento de Salloma Salomão em São Paulo.",
        image: "src/images/timeline/1961.jpeg"
    },
    {
        year: 1965,
        description: "Primeiros contatos com a música na infância, por influência de sua família que tinha forte ligação com as tradições culturais afro-brasileiras.",
        image: "src/images/timeline/1965.jpg"
    },
    {
        year: 1970,
        description: "Começa a aprender seus primeiros instrumentos musicais e a participar de grupos culturais comunitários em São Paulo.",
        image: "src/images/timeline/1970.jpg"
    },
    {
        year: 1974,
        description: "Participa de sua primeira apresentação pública durante um festival escolar, onde demonstra seu talento emergente.",
        image: "src/images/timeline/1974.jpg"
    },
    {
        year: 1978,
        description: "Início da carreira musical, participando de grupos de música experimental e fundindo influências do jazz com a música afro-brasileira.",
        image: "src/images/timeline/1978.jpg"
    },
    {
        year: 1980,
        description: "Forma seu primeiro conjunto musical chamado 'Raízes Sonoras', explorando ritmos tradicionais com uma abordagem contemporânea.",
        image: "src/images/timeline/1980.jpg"
    },
    {
        year: 1982,
        description: "Realiza suas primeiras gravações em um estúdio independente, criando material que circularia em formato de fitas cassete.",
        image: "src/images/timeline/1982.jpg"
    },
    {
        year: 1985,
        description: "Lançamento do primeiro álbum solo 'Raízes e Horizontes', que marca o início de sua trajetória como artista independente e pesquisador cultural.",
        image: "src/images/timeline/1985.jpg"
    },
    {
        year: 1987,
        description: "Inicia suas pesquisas sobre música de matriz africana no Brasil, visitando comunidades tradicionais e realizando registros sonoros.",
        image: "src/images/timeline/1987.jpg"
    },
    {
        year: 1989,
        description: "Recebe sua primeira bolsa de estudos para pesquisa musical, permitindo aprofundar seus conhecimentos sobre ritmos afro-brasileiros.",
        image: "src/images/timeline/1989.jpg"
    },
    {
        year: 1992,
        description: "Participação em importantes festivais internacionais de música, levando sua arte para além das fronteiras brasileiras e consolidando seu reconhecimento.",
        image: "src/images/timeline/1992.jpg"
    },
    {
        year: 1993,
        description: "Lança seu segundo álbum 'Vozes da Diáspora', explorando conexões entre ritmos africanos e suas manifestações na música brasileira.",
        image: "src/images/timeline/1993.jpg"
    },
    {
        year: 1995,
        description: "Inicia sua carreira como professor, ministrando oficinas sobre música e cultura afro-brasileira em centros culturais de São Paulo.",
        image: "src/images/timeline/1995.jpg"
    },
    {
        year: 1996,
        description: "Desenvolve parceria com artistas internacionais, participando de um projeto de intercâmbio cultural com músicos africanos.",
        image: "src/images/timeline/1996.jpg"
    },
    {
        year: 1998,
        description: "Publicação do seu primeiro livro 'Ritmos da Resistência', um estudo sobre a música como instrumento de afirmação cultural e resistência política.",
        image: "src/images/timeline/1998.jpg"
    },
    {
        year: 1999,
        description: "Conclui sua formação acadêmica em Música e Estudos Culturais, ampliando seu repertório teórico e prático.",
        image: "src/images/timeline/1999.jpg"
    },
    {
        year: 2000,
        description: "Comemora 20 anos de carreira com uma turnê especial que percorre as principais capitais brasileiras.",
        image: "src/images/timeline/2000.jpg"
    },
    {
        year: 2002,
        description: "Lança o álbum 'Encruzilhadas', onde explora os diálogos entre tradição e modernidade na música afro-brasileira.",
        image: "src/images/timeline/2002.jpg"
    },
    {
        year: 2003,
        description: "Inicia uma série de documentários audiovisuais sobre manifestações culturais tradicionais em comunidades quilombolas.",
        image: "src/images/timeline/2003.jpg"
    },
    {
        year: 2005,
        description: "Criação do projeto social 'Sons da Periferia', dedicado à formação musical de jovens em comunidades vulneráveis de São Paulo.",
        image: "src/images/timeline/2005.jpg"
    },
    {
        year: 2006,
        description: "Publica seu segundo livro 'Tambores Falantes', abordando a linguagem dos tambores nas culturas de matriz africana.",
        image: "src/images/timeline/2006.jpg"
    },
    {
        year: 2007,
        description: "Realiza uma série de concertos temáticos sobre a história da música negra no Brasil, apresentados em espaços culturais e educacionais.",
        image: "src/images/timeline/2007.jpg"
    },
    {
        year: 2008,
        description: "Desenvolve pesquisas sobre música e espiritualidade, investigando os cantos sagrados de religiões de matriz africana.",
        image: "src/images/timeline/2008.jpg"
    },
    {
        year: 2010,
        description: "Recebimento do Prêmio Nacional de Cultura pelo conjunto de sua obra e contribuição para a valorização da cultura afro-brasileira.",
        image: "src/images/timeline/2010.jpg"
    },
    {
        year: 2011,
        description: "Lidera um movimento pela preservação de manifestações culturais tradicionais ameaçadas pelo avanço da urbanização.",
        image: "src/images/timeline/2011.jpg"
    },
    {
        year: 2012,
        description: "Lança o álbum 'Cartografias Sonoras', mapeando diferentes expressões musicais afro-brasileiras de norte a sul do país.",
        image: "src/images/timeline/2012.jpg"
    },
    {
        year: 2013,
        description: "Inicia uma série de palestras internacionais sobre a importância da música como elemento de resistência cultural.",
        image: "src/images/timeline/2013.jpg"
    },
    {
        year: 2014,
        description: "Participa da criação de uma rede de artistas afro-latinoamericanos, promovendo intercâmbios e produções colaborativas.",
        image: "src/images/timeline/2014.jpg"
    },
    {
        year: 2015,
        description: "Lançamento do álbum 'Travessias', considerado pela crítica como um dos trabalhos mais importantes de sua carreira, misturando ritmos tradicionais com elementos contemporâneos.",
        image: "src/images/timeline/2015.jpg"
    },
    {
        year: 2016,
        description: "Desenvolve um programa de residências artísticas para jovens músicos, oferecendo orientação e oportunidades de profissionalização.",
        image: "src/images/timeline/2016.jpg"
    },
    {
        year: 2017,
        description: "Publica o livro 'Poéticas da Ancestralidade', onde reflete sobre o papel da memória e da tradição oral na música contemporânea.",
        image: "src/images/timeline/2017.jpg"
    },
    {
        year: 2018,
        description: "Realiza uma turnê internacional 'Pontes Sonoras', apresentando-se em festivais de world music na Europa e África.",
        image: "src/images/timeline/2018.jpg"
    },
    {
        year: 2019,
        description: "Inaugura um centro cultural dedicado à preservação e difusão da música afro-brasileira em São Paulo.",
        image: "src/images/timeline/2019.jpg"
    },
    {
        year: 2020,
        description: "DLançamento do filme Todos os mortos (Direção de Marco Dutra e Caetano Gotardo) no festival de Cinema de Berlim na qual Salloma é colaborador e assina Trilha Sonora.  Lançamento do ábum digital Mensagens aos terráqueos em parceria com Gui Braz . Ainda ministrou o Curso Raízes Africanas da Música Brasileira no Centro de Música do SESC- SP",
        image: "src/images/timeline/2020.jpg"
    },
    {
        year: 2021,
        description: "Recebe o Troféu Kikito de Ouro, Prêmio de Melhor Trilha Musical no Festival Internacional de Cinema de Gramado, pelo trabalho em “Todos Mortos” de Gotardo e Dutra, coprodução franco-brasileira. Ainda no campo audiovisual, atuou no elenco do Filme Negro em mim  (Direção Macca Ramos). Ainda nesse ano é convidado a participar da Mesa 6 do ciclo de encontros “1922: Mordernismos em debate” organizado pelo instituto Moreira Salles. No campo literário explora o universo infantil no seu livro “As aventuras do pequeno samba” lançado pela sua produtora Aruanda Mundi.",
        image: "src/images/timeline/2021.jpg"
    },
    {
        year: 2022,
        description: "Participação no podcast Mano a Mano dividindo a palavra com a doutora Katiuscia Ribeiro, disponível na plataforma Spotify. Um ano ativo no setor teatral, produzindo a trilha sonora com Gui Braz em dois espetáculos teatrais: Nzinga do Coletivo negro (Direção Aysha Nascimento e Flávio Rodrigues) e Havia um país aqui antes do carnaval da Cia Experimental Kaus (Direção de Reginaldo Pereira). Em novembro o Show Muxima Kumbi de Saloma e Al Andaluz chega ao Sesc Pompéia.",
        image: "src/images/timeline/2022.jpg"
    },
    {
        year: 2023,
        description: "É vencedor do Prêmio Mestres da Cultura pela Fundação Nacional das Artes. Em outubro é convidado a colaborar com seu depoimento no filme Noite e dia, Lima Barreto de Rodrigo Grota disponível no Prime Video. Também realizou consultoria de prosódia para o filme Rota 66 A polícia que mata na direção de Philippe Barcinski e Diego Martins.",
        image: "src/images/timeline/2023.jpg"
    },
    {
        year: 2024,
        description: "Protagonizou a peça teatral 'Transe - Ato 1' (Direção Marcio Castro) com estreia em outubro de 2024, no Sesc Belenzinho, SP. Em dezembro lança o álbum 'Luanda Mana Lua' nas plataformas digitais com parcerias de Lincoln Antonio e Ito Alves.",
        image: "src/images/timeline/2024.jpg"
    },
    {
        year: 2025,
        description: "Começa o ano com o Show Musical Muxima Kumbi de Salloma Sallomão e Al Andaluz. No mesmo ano estreia o filme Montanha em Movimento, mais uma parceria entre Salloma e o diretor Caetano Gotardo, na qual Salloma atua e compõe trilha sonora.lo de Doutor Honoris Causa por sua contribuição à preservação e difusão da cultura afro-brasileira.",
        image: "src/images/timeline/2025.jpeg"
    }
];

// Função para gerar a espiral de círculos
function generateSpiral() {
    const container = document.getElementById('timeline-spiral-container');
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;
    
    // Parâmetros da espiral - ajustados para uma espiral mais fechada
    const totalDots = 195; // Número total de círculos aumentado para comportar 40 datas interativas
    const interactiveDotInterval = 5; // A cada 5 círculos, 1 é interativo (agora temos 40 pontos interativos)
   
    
    // Índice dos dados da timeline
    let timelineIndex = 0;
    
    // Criar círculos em formato de espiral
    for (let i = 0; i < totalDots; i++) {
        // Calcular coordenadas polares para uma espiral de Arquimedes
        const theta = 0.175 * i; // Controla a velocidade de rotação da espiral
        const radius = i === 0 ? 0 : 9 + 0.95 * theta; // Primeiro círculo com raio zero, depois crescimento linear
        
        // Converter para coordenadas cartesianas
        const x = centerX + radius * Math.cos(theta) * 9; // Fator de escala ajustado
        const y = centerY + radius * Math.sin(theta) * 9; // Fator de escala ajustado
        
        // Verificar se o círculo deve ser interativo (a cada interactiveDotInterval)
        const isInteractive = i % interactiveDotInterval === 0 && timelineIndex < timelineData.length;
        
        // Criar o círculo com tamanho aleatório
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        
        // Variação aleatória de tamanho para cada círculo
        const baseSizeInPx = 10; // Tamanho base em pixels (aproximadamente 3mm)
        const randomFactor = Math.random() * 0.85 + 0.75; // Varia entre 0.75x e 1.25x do tamanho original
        const dotSize = baseSizeInPx * randomFactor;
        
        // Aplicar tamanho aleatório
        dot.style.width = dotSize + 'px';
        dot.style.height = dotSize + 'px';
        
        if (isInteractive) {
            dot.className += ' interactive';
            dot.dataset.year = timelineData[timelineIndex].year;
            dot.dataset.index = timelineIndex;
            
            // Adicionar evento de clique
            dot.addEventListener('click', function() {
                showModal(this.dataset.index);
            });
            
            // Criar o label do ano e adicioná-lo dentro do dot
            const yearLabel = document.createElement('div');
            yearLabel.className = 'year-label';
            yearLabel.textContent = timelineData[timelineIndex].year;
            
            // Adicionar o label dentro do dot
            dot.appendChild(yearLabel);
            
            timelineIndex++;
        }
        
        // Posicionar o círculo
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        
        container.appendChild(dot);
    }
}

// Função para mostrar o modal com informações do ano
function showModal(index) {
    const modal = document.getElementById('year-modal');
    const yearTitle = document.getElementById('modal-year');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    
    const data = timelineData[index];
    
    yearTitle.textContent = data.year;
    modalDescription.textContent = data.description;
    modalImage.src = data.image;
    modalImage.alt = `Imagem histórica de ${data.year}`;
    
    // Exibir o modal
    modal.style.display = 'flex';
    
    // Adicionar evento de fechamento ao background e botão de fechar
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('year-modal');
    modal.style.display = 'none';
}

// Inicializar a linha do tempo quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Gerar a espiral
    generateSpiral();
    
    // Configurar o botão de fechar do modal
    document.querySelector('.close-modal').addEventListener('click', closeModal);
});

// Ajustar a espiral quando a janela for redimensionada
window.addEventListener('resize', function() {
    // Limpar os círculos existentes
    const container = document.getElementById('timeline-spiral-container');
    container.innerHTML = '';
    
    // Regenerar a espiral
    generateSpiral();
});