const check = document.getElementById('checkbox');
var clicado = false;

let metalCor = document.getElementById('#metal')


const iconAlcalino = document.querySelectorAll('#metaisAlcalino');
const iconTerroso = document.querySelectorAll('#alcalinosTerrosos');
const iconMetal = document.querySelectorAll("#metal");
const iconSemi = document.querySelectorAll("#Semimetais");
const iconNao = document.querySelectorAll("#naoMetal");
const iconHalo = document.querySelectorAll("#halogenio");
const iconNobre = document.querySelectorAll("#gasNobre");
const iconOutros = document.querySelectorAll("#outros");
const iconLatan = document.querySelectorAll("#Lantanídeos");
const iconActn = document.querySelectorAll("#Actinídios");



// Logica do mudar cor

check.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    document.getElementById('tabelaGeral').classList.toggle('dark')
    document.getElementById('label1').classList.toggle('dark')
    document.getElementById('paragrafoTema').classList.toggle('dark')
   
    const naoMetal = document.querySelectorAll('#naoMetal');
    naoMetal.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const alcalinosTerrosos = document.querySelectorAll('#alcalinosTerrosos');
    alcalinosTerrosos.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const Semimetais = document.querySelectorAll('#Semimetais');
    Semimetais.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const gasNobre = document.querySelectorAll('#gasNobre');
    gasNobre.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const halogenio = document.querySelectorAll('#halogenio');
    halogenio.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const outros = document.querySelectorAll('#outros');
    outros.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const Lantanídeos = document.querySelectorAll('#Lantanídeos');
    Lantanídeos.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const Actinídios = document.querySelectorAll('#Actinídios');
    Actinídios.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const metaisAlcalino = document.querySelectorAll('#metaisAlcalino');
    metaisAlcalino.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const hidro = document.querySelectorAll('#hidro');
    hidro.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const metal = document.querySelectorAll('#metal');
    metal.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const hidroLeg = document.querySelectorAll('#corH');
    hidroLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const terraLeg = document.querySelectorAll('#corTer');
    terraLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const alcTerra = document.querySelectorAll('#corAlc');
    alcTerra.forEach(cell => {
        cell.classList.toggle('dark');
    });    
    const metalLeg = document.querySelectorAll('#corMetal');
    metalLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });    
    const semiLeg = document.querySelectorAll('#semiLeg');
    semiLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const naoLeg = document.querySelectorAll('#naoLeg');
    naoLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const haloLeg = document.querySelectorAll('#halogenioLeg');
    haloLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const gasNoLeg = document.querySelectorAll('#gasNoLeg');
    gasNoLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const outrosLeg = document.querySelectorAll('#outrosLeg');
    outrosLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const latanLeg = document.querySelectorAll('#lantanideosLeg');
    latanLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const actnLeg = document.querySelectorAll('#actinidiosLeg');
    actnLeg.forEach(cell => {
        cell.classList.toggle('dark');
    });
    const legendacao = document.querySelectorAll('#legendacoes');
    legendacao.forEach(cell => {
        cell.classList.toggle('dark');
    });
});

// Logica do mostrar dados




function dados(dados) {
   

    switch (dados) {
        case 1:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O hidrogênio (H) é o elemento mais simples e abundante no universo. É um gás incolor, inodoro e altamente inflamável. Na natureza, é encontrado principalmente na forma de moléculas diatômicas (H2) e desempenha um papel crucial como combustível potencialmente limpo e fonte de energia";
            document.getElementById('nomeE').textContent = "Hidrogênio";
            document.getElementById('ano').textContent = "1766";
            document.getElementById('massa').textContent = "1,00784 u";
            document.getElementById('configuracao').textContent = "1s1";
            if(check.checked){
               document.getElementById('dados').style.backgroundColor  = '#14d10dbd';
               document.getElementById('dados').style.color  = 'black';
            }else{
                document.getElementById('dados').style.backgroundColor  = '#1a4904dc';
                document.getElementById('dados').style.color  = 'wheat';
            }
            break;

        case 2:  
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O hélio (He) é um gás incolor e inodoro, conhecido por sua leveza e segurança, pois não é inflamável. É utilizado em balões, resfriamento industrial e na medicina, contribuindo para pesquisas científicas e aplicações práticas devido às suas propriedades únicas.";
            document.getElementById('nomeE').textContent = "Hélio";
            document.getElementById('ano').textContent = "1868";
            document.getElementById('massa').textContent = "4,002602 u";
            document.getElementById('configuracao').textContent = "1s2";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--gasNobre)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--gasNobreDark)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;  
       
            case 3:  
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O lítio é um metal alcalino macio e prateado, com número atômico 3 na tabela periódica. É altamente reativo e é utilizado em baterias recarregáveis, medicamentos psiquiátricos e em aplicações industriais. Por sua baixa densidade, é também usado na fabricação de ligas metálicas.";
            document.getElementById('nomeE').textContent = "Lítio";
            document.getElementById('ano').textContent = "1817";
            document.getElementById('massa').textContent = "6,941 u";
            document.getElementById('configuracao').textContent = "2s1";
            if(check.checked){
               document.getElementById('dados').style.backgroundColor  = 'var(--terrososDark)';
               document.getElementById('dados').style.color  = 'black';
            }else{
                document.getElementById('dados').style.backgroundColor  = 'var(--terrosos)';
                document.getElementById('dados').style.color  = 'wheat';
            }
            break;      
            case 4:  
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O berílio é um metal leve e duro, com número atômico 4 na tabela periódica. Possui alta resistência à corrosão e é usado em ligas metálicas para aeroespacial, componentes eletrônicos e equipamentos médicos, apesar de sua toxicidade.";
            document.getElementById('nomeE').textContent = "Bérilio";
            document.getElementById('ano').textContent = "1798";
            document.getElementById('massa').textContent = "9,012182 u";
            document.getElementById('configuracao').textContent = "2s2";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--alcalinosDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--alcalinos)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;      
            case 5:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O boro (B) é um elemento sólido e não metálico, com número atômico 5 na tabela periódica. Conhecido por suas propriedades de resistência e leveza, é utilizado em materiais compósitos, como fibras de vidro e cerâmicas. Além disso, o boro desempenha um papel crucial em aplicações nucleares e na indústria eletrônica.";
            document.getElementById('nomeE').textContent = "Boro";
            document.getElementById('ano').textContent = "1808";
            document.getElementById('massa').textContent = "10,81 u";
            document.getElementById('configuracao').textContent = "2s2 2p1";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--semi)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--semiDark)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 6:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O carbono (C), essencial para a vida, com número atômico 6, forma cadeias complexas, base das moléculas orgânicas. Presente em diversas formas, como grafite e diamante, é usado em amplas aplicações, desde materiais industriais até tecnologias avançadas.";
            document.getElementById('nomeE').textContent = "Carbono";
            document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
            document.getElementById('massa').textContent = "12,011 u";
            document.getElementById('configuracao').textContent = "2s2 2p2";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = '#a1d344';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = '#365204';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 7:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O nitrogênio (N) é um elemento gasoso, com número atômico 7 na tabela periódica. Essencial para a vida, está presente em moléculas como proteínas e ácidos nucleicos. Amplamente utilizado na indústria para produção de amônia, o nitrogênio também desempenha papel crucial em fertilizantes e processos de resfriamento.";
            document.getElementById('nomeE').textContent = "Nitrogênio";
            document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
            document.getElementById('massa').textContent = "14,007 u";
            document.getElementById('configuracao').textContent = "2s2 2p3";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = '#a1d344';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = '#365204';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 8:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O oxigênio (O) é um elemento gasoso, com número atômico 8 na tabela periódica. Fundamental para a respiração aeróbica, o oxigênio é essencial para a vida. Além disso, é utilizado em processos industriais, como na produção de aço, e em aplicações médicas, como terapias de oxigênio.";
            document.getElementById('nomeE').textContent = "Oxigênio";
            document.getElementById('ano').textContent = "1772";
            document.getElementById('massa').textContent = "15,999 u";
            document.getElementById('configuracao').textContent = "2s2 2p4";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = '#a1d344';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = '#365204';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 9:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O flúor (F) é um elemento gasoso altamente reativo, com número atômico 9 na tabela periódica. Amplamente utilizado em odontologia, o flúor fortalece o esmalte dentário e previne a cárie. Além disso, é empregado em processos industriais, como na produção de fluoretos.";
            document.getElementById('nomeE').textContent = "Flúor";
            document.getElementById('ano').textContent = "1670";
            document.getElementById('massa').textContent = "18,998403 u";
            document.getElementById('configuracao').textContent = "2s2 2p5";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--halogenioDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--halogenio)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 10:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O Neonio (Ne) é um gás nobre, com número atômico 10 na tabela periódica. Conhecido por sua falta de reatividade, o Neonio é frequentemente utilizado em sinais luminosos e lâmpadas neon. Sua presença em tecnologias de iluminação destaca-se devido à sua capacidade de emitir luz vibrante em várias cores.";
            document.getElementById('nomeE').textContent = "Neonio";
            document.getElementById('ano').textContent = "1898";
            document.getElementById('massa').textContent = "20,1797 u";
            document.getElementById('configuracao').textContent = "2s2 2p6";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--gasNobre)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--gasNobreDark)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 11:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O sódio (Na) é um metal alcalino, com número atômico 11 na tabela periódica. Altamente reativo, é fundamental para processos biológicos e está presente em sais como o cloreto de sódio (sal de cozinha). Além disso, o sódio é utilizado na indústria para produção de produtos químicos e na fabricação de vidro.";
            document.getElementById('nomeE').textContent = "Sódio";
            document.getElementById('ano').textContent = "1807";
            document.getElementById('massa').textContent = "22,98977 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s1";
            if(check.checked){
                document.getElementById('dados').style.backgroundColor  = 'var(--terrososDark)';
                document.getElementById('dados').style.color  = 'black';
             }else{
                 document.getElementById('dados').style.backgroundColor  = 'var(--terrosos)';
                 document.getElementById('dados').style.color  = 'wheat';
             }
            break;
            case 12:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O magnésio (Mg) é um metal alcalino-terroso, com número atômico 12 na tabela periódica. Conhecido por sua leveza, o magnésio desempenha um papel essencial em processos biológicos, sendo um componente central da clorofila. Além disso, é utilizado em ligas metálicas, medicamentos e na indústria de construção.";
            document.getElementById('nomeE').textContent = "Magnésio";
            document.getElementById('ano').textContent = "1808";
            document.getElementById('massa').textContent = "24,305 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--alcalinosDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--alcalinos)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 13:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O alumínio (Al) é um metal leve e resistente, com número atômico 13 na tabela periódica. Amplamente utilizado na indústria, o alumínio é encontrado em objetos do cotidiano, como embalagens, utensílios de cozinha e componentes de aeronaves. Sua resistência à corrosão e baixa densidade o tornam valioso em diversas aplicações.";
            document.getElementById('nomeE').textContent = "Alumínio";
            document.getElementById('ano').textContent = "1825";
            document.getElementById('massa').textContent = "26,981539 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p1";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 14:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O silício (Si) é um elemento semimetálico, com número atômico 14 na tabela periódica. Amplamente utilizado na indústria eletrônica, o silício é um componente essencial em semicondutores, sendo fundamental para a fabricação de chips e dispositivos eletrônicos. Além disso, é encontrado em diversas formas na natureza, como na composição de minerais.";
            document.getElementById('nomeE').textContent = "Silício";
            document.getElementById('ano').textContent = "1824";
            document.getElementById('massa').textContent = "28,085 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p2";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--semi)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--semiDark)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 15:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O fósforo (P) é um elemento não metálico, com número atômico 15 na tabela periódica. Essencial para a vida, o fósforo está presente em moléculas como o DNA e o ATP. Além disso, é utilizado em fertilizantes, produtos químicos e na indústria de alimentos. Em sua forma branca, é altamente reativo.";
            document.getElementById('nomeE').textContent = "Fósforo";
            document.getElementById('ano').textContent = "1669";
            document.getElementById('massa').textContent = "30,973761 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p3";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = '#a1d344';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = '#365204';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 16:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O enxofre (S) é um elemento não metálico, com número atômico 16 na tabela periódica. Presente em aminoácidos e vitaminas, o enxofre é vital para a biologia. Além disso, é utilizado na indústria química, na produção de fertilizantes e na fabricação de materiais como borracha vulcanizada.";
            document.getElementById('nomeE').textContent = "Enxofre";
            document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
            document.getElementById('massa').textContent = "32,06 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p4";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = '#a1d344';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = '#365204';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 17:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O cloro (Cl) é um elemento gasoso, com número atômico 17 na tabela periódica. Conhecido por sua ação desinfetante, o cloro é utilizado no tratamento de água. Além disso, é empregado na indústria química, na produção de produtos de limpeza e em compostos para diversas aplicações.";
            document.getElementById('nomeE').textContent = "Cloro";
            document.getElementById('ano').textContent = "1774";
            document.getElementById('massa').textContent = "35,453 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p5";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--halogenioDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--halogenio)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 18:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O argônio (Ar) é um gás nobre, com número atômico 18 na tabela periódica. Inerte e não reativo, o argônio é frequentemente utilizado em processos de soldagem e em lâmpadas incandescentes. Sua presença na atmosfera contribui para as propriedades termicas da Terra.";
            document.getElementById('nomeE').textContent = "Argônio";
            document.getElementById('ano').textContent = "1894";
            document.getElementById('massa').textContent = "39,948 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--gasNobre)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--gasNobreDark)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 19:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O potássio (K) é um metal alcalino, com número atômico 19 na tabela periódica. Essencial para a função celular, o potássio está presente em muitos alimentos. Além disso, é utilizado em fertilizantes, na indústria química e em aplicações médicas, como tratamentos para distúrbios cardíacos.";
            document.getElementById('nomeE').textContent = "Potássio";
            document.getElementById('ano').textContent = "1807";
            document.getElementById('massa').textContent = "39,0983 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s1";
            if(check.checked){
                document.getElementById('dados').style.backgroundColor  = 'var(--terrososDark)';
                document.getElementById('dados').style.color  = 'black';
             }else{
                 document.getElementById('dados').style.backgroundColor  = 'var(--terrosos)';
                 document.getElementById('dados').style.color  = 'wheat';
             }
            break;
            case 20:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O cálcio (Ca) é um metal alcalino-terroso, com número atômico 20 na tabela periódica. Essencial para a formação dos ossos e dentes, o cálcio desempenha um papel crucial na saúde humana. Além disso, é utilizado na indústria, em processos metalúrgicos e na fabricação de produtos como cimento e lápis de giz.";
            document.getElementById('nomeE').textContent = "Cálcio";
            document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
            document.getElementById('massa').textContent = "40,078 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--alcalinosDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--alcalinos)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 21:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O escândio (Sc) é um metal de transição, com número atômico 21 na tabela periódica. Utilizado em ligas de alumínio para melhorar suas propriedades, o escândio também encontra aplicação em materiais aeroespaciais e eletrônicos.";
            document.getElementById('nomeE').textContent = "Escândio";
            document.getElementById('ano').textContent = "1879";
            document.getElementById('massa').textContent = "44,955908 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d1";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 22:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O titânio (Ti) é um metal de transição, com número atômico 22 na tabela periódica. Conhecido por sua resistência e baixa densidade, o titânio é amplamente utilizado em aplicações aeroespaciais, médicas e na produção de ligas metálicas.";
            document.getElementById('nomeE').textContent = "Titânio";
            document.getElementById('ano').textContent = "1791";
            document.getElementById('massa').textContent = "47,867 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d2";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 23:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O vanádio (V) é um metal de transição, com número atômico 23 na tabela periódica. Amplamente utilizado em ligas de aço, o vanádio contribui para a resistência e durabilidade de materiais usados em ferramentas, molas e equipamentos industriais.";
            document.getElementById('nomeE').textContent = "Vanádio";
            document.getElementById('ano').textContent = "1801";
            document.getElementById('massa').textContent = "50,9415 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d3";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 24:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O cromo (Cr) é um metal de transição, com número atômico 24 na tabela periódica. Conhecido por sua resistência à corrosão, o cromo é utilizado em revestimentos metálicos, ligas de aço inoxidável e na indústria de cromagem.";
            document.getElementById('nomeE').textContent = "Cromo";
            document.getElementById('ano').textContent = "1797";
            document.getElementById('massa').textContent = "51,9961 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s1 3d5";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 25:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O manganês (Mn) é um metal de transição, com número atômico 25 na tabela periódica. Importante para a metalurgia e produção de aço, o manganês é utilizado em ligas metálicas, baterias e como catalisador em processos químicos.";
            document.getElementById('nomeE').textContent = "Manganês";
            document.getElementById('ano').textContent = "1774";
            document.getElementById('massa').textContent = "54,938044 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d5";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 26:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O ferro (Fe) é um metal de transição, com número atômico 26 na tabela periódica. Fundamental para a produção de aço, o ferro é amplamente utilizado na construção, indústria automotiva e fabricação de máquinas.";
            document.getElementById('nomeE').textContent = "Ferro";
            document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
            document.getElementById('massa').textContent = "55,845 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d6";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 27:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O cobalto (Co) é um metal de transição, com número atômico 27 na tabela periódica. Utilizado em ligas metálicas, baterias recarregáveis e na indústria de pigmentos, o cobalto desempenha um papel importante em diversas aplicações tecnológicas.";
            document.getElementById('nomeE').textContent = "Cobalto";
            document.getElementById('ano').textContent = "1735";
            document.getElementById('massa').textContent = "58,933194 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d7";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 28:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O níquel (Ni) é um metal de transição, com número atômico 28 na tabela periódica. Amplamente utilizado em ligas metálicas, especialmente na produção de aço inoxidável, o níquel também é empregado em baterias e revestimentos metálicos.";
            document.getElementById('nomeE').textContent = "Níquel";
            document.getElementById('ano').textContent = "1751";
            document.getElementById('massa').textContent = "58,6934 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d8";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 29:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O cobre (Cu) é um metal de transição, com número atômico 29 na tabela periódica. Conhecido por sua condutividade elétrica, o cobre é utilizado em fios elétricos, componentes eletrônicos e na produção de moedas.";
            document.getElementById('nomeE').textContent = "Cobre";
            document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
            document.getElementById('massa').textContent = "63,546 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s1 3d9";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 30:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O zinco (Zn) é um metal de transição, com número atômico 30 na tabela periódica. Amplamente utilizado em galvanização para proteção contra corrosão, o zinco também está presente em baterias, ligas metálicas e suplementos alimentares.";
            document.getElementById('nomeE').textContent = "Zinco";
            document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
            document.getElementById('massa').textContent = "65,38 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d10";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 31:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O gálio (Ga) é um metal de transição, com número atômico 31 na tabela periódica. Conhecido por seu baixo ponto de fusão, o gálio é utilizado em aplicações como eletrônica, fotônica e como componente de ligas de fusíveis.";
            document.getElementById('nomeE').textContent = "Gálio";
            document.getElementById('ano').textContent = "1875";
            document.getElementById('massa').textContent = "69,723 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d10 4p1";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 32:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O germânio (Ge) é um metalóide, com número atômico 32 na tabela periódica. Utilizado em eletrônica e semicondutores, o germânio desempenha um papel importante na indústria de dispositivos eletrônicos.";
            document.getElementById('nomeE').textContent = "Germânio";
            document.getElementById('ano').textContent = "1886";
            document.getElementById('massa').textContent = "72,630 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d10 4p2";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--semi)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--semiDark)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 33:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O arsênio (As) é um metalóide, com número atômico 33 na tabela periódica. Utilizado em semicondutores, inseticidas e medicamentos, o arsênio é um elemento polivalente com diversas aplicações.";
            document.getElementById('nomeE').textContent = "Arsênio";
            document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
            document.getElementById('massa').textContent = "74,921595 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d10 4p3";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--semi)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--semiDark)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 34:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O selênio (Se) é um não metal, com número atômico 34 na tabela periódica. Importante para a saúde, o selênio é utilizado em suplementos nutricionais, fotocopiadoras e na indústria de semicondutores.";
            document.getElementById('nomeE').textContent = "Selênio";
            document.getElementById('ano').textContent = "1817";
            document.getElementById('massa').textContent = "78,971 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d10 4p4";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--nao)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--naoDark)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 35:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O bromo (Br) é um halogênio, com número atômico 35 na tabela periódica. Líquido à temperatura ambiente, o bromo é utilizado em produtos químicos, retardadores de chama e na indústria farmacêutica.";
            document.getElementById('nomeE').textContent = "Bromo";
            document.getElementById('ano').textContent = "1826";
            document.getElementById('massa').textContent = "79,904 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d10 4p5";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--halogenioDark)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--halogenio)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 36:
            document.getElementById('dados').style.display = 'block';
            document.getElementById('descricao').textContent = "O criptônio (Kr) é um gás nobre, com número atômico 36 na tabela periódica. Incolor e inodoro, o criptônio é utilizado em lâmpadas de flash, lasers e em aplicações de iluminação especializada.";
            document.getElementById('nomeE').textContent = "Criptônio";
            document.getElementById('ano').textContent = "1898";
            document.getElementById('massa').textContent = "83,798 u";
            document.getElementById('configuracao').textContent = "2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10";
            if (check.checked) {
                document.getElementById('dados').style.backgroundColor = 'var(--gasNobre)';
                document.getElementById('dados').style.color = 'black';
            } else {
                document.getElementById('dados').style.backgroundColor = 'var(--gasNobreDark)';
                document.getElementById('dados').style.color = 'wheat';
            }
            break;
            case 37:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O rubídio (Rb) é um metal alcalino macio, com número atômico 37 na tabela periódica. Utilizado em relógios atômicos e em aplicações de pesquisa, o rubídio possui propriedades únicas em sistemas ópticos e eletrônicos.";
                document.getElementById('nomeE').textContent = "Rubídio";
                document.getElementById('ano').textContent = "1861";
                document.getElementById('massa').textContent = "85,4678 u";
                document.getElementById('configuracao').textContent = "5s1";
                if(check.checked){
                    document.getElementById('dados').style.backgroundColor  = 'var(--terrososDark)';
                    document.getElementById('dados').style.color  = 'black';
                 }else{
                     document.getElementById('dados').style.backgroundColor  = 'var(--terrosos)';
                     document.getElementById('dados').style.color  = 'wheat';
                 }
                break;
                case 38:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O estrôncio (Sr) é um metal alcalino terroso, com número atômico 38 na tabela periódica. Utilizado em pirotecnia e em aplicações médicas, o estrôncio contribui para a cor vermelha em fogos de artifício.";
                document.getElementById('nomeE').textContent = "Estrôncio";
                document.getElementById('ano').textContent = "1790";
                document.getElementById('massa').textContent = "87,62 u";
                document.getElementById('configuracao').textContent = "5s2";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--alcalinosDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--alcalinos)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 39:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O ítrio (Y) é um metal de transição, com número atômico 39 na tabela periódica. Utilizado em aplicações de lasers e em equipamentos médicos, o ítrio possui propriedades que o tornam valioso em tecnologias avançadas.";
                document.getElementById('nomeE').textContent = "Ítrio";
                document.getElementById('ano').textContent = "1794";
                document.getElementById('massa').textContent = "88,90584 u";
                document.getElementById('configuracao').textContent = "5s2 4d1";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 40:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O zircônio (Zr) é um metal de transição, com número atômico 40 na tabela periódica. Amplamente utilizado em ligas metálicas e reatores nucleares, o zircônio possui alta resistência à corrosão.";
                document.getElementById('nomeE').textContent = "Zircônio";
                document.getElementById('ano').textContent = "1789";
                document.getElementById('massa').textContent = "91,224 u";
                document.getElementById('configuracao').textContent = "5s2 4d2";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 41:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O nióbio (Nb) é um metal de transição, com número atômico 41 na tabela periódica. Utilizado em superligas, ligas de titânio e em aplicações aeroespaciais, o nióbio possui propriedades que contribuem para a resistência de materiais.";
                document.getElementById('nomeE').textContent = "Nióbio";
                document.getElementById('ano').textContent = "1801";
                document.getElementById('massa').textContent = "92,90638 u";
                document.getElementById('configuracao').textContent = "5s1 4d4";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 42:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O molibdênio (Mo) é um metal de transição, com número atômico 42 na tabela periódica. Utilizado em ligas metálicas, catalisadores e em aplicações industriais, o molibdênio possui alta resistência e ponto de fusão.";
                document.getElementById('nomeE').textContent = "Molibdênio";
                document.getElementById('ano').textContent = "1778";
                document.getElementById('massa').textContent = "95,94 u";
                document.getElementById('configuracao').textContent = "5s1 4d5";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 43:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O tecnécio (Tc) é um elemento artificial, com número atômico 43 na tabela periódica. Sendo um material radioativo, o tecnécio é utilizado em pesquisas nucleares e em medicina nuclear, desempenhando um papel crucial em exames diagnósticos.";
                document.getElementById('nomeE').textContent = "Tecnécio";
                document.getElementById('ano').textContent = "1937";
                document.getElementById('massa').textContent = "(98) u";
                document.getElementById('configuracao').textContent = "5s1 4d5";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 44:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O rutenio (Ru) é um metal de transição, com número atômico 44 na tabela periódica. Utilizado em ligas metálicas, catalisadores e em aplicações elétricas, o rutenio possui alta resistência à corrosão.";
                document.getElementById('nomeE').textContent = "Rutenio";
                document.getElementById('ano').textContent = "1844";
                document.getElementById('massa').textContent = "101,07 u";
                document.getElementById('configuracao').textContent = "5s1 4d7";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 45:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O ródio (Rh) é um metal de transição, com número atômico 45 na tabela periódica. Utilizado em catalisadores, joalheria e em aplicações elétricas, o ródio possui alta resistência e reflete a luz de maneira eficiente.";
                document.getElementById('nomeE').textContent = "Ródio";
                document.getElementById('ano').textContent = "1803";
                document.getElementById('massa').textContent = "102,90550 u";
                document.getElementById('configuracao').textContent = "5s1 4d8";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;        
                case 46:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O paládio (Pd) é um metal de transição, com número atômico 46 na tabela periódica. Utilizado em catalisadores, joalheria e em tecnologias de purificação de gás, o paládio possui alta capacidade de adsorção.";
                document.getElementById('nomeE').textContent = "Paládio";
                document.getElementById('ano').textContent = "1803";
                document.getElementById('massa').textContent = "106,42 u";
                document.getElementById('configuracao').textContent = "5s1 4d10";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 47:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "A prata (Ag) é um metal de transição, com número atômico 47 na tabela periódica. Conhecida por sua beleza e condutividade elétrica, a prata é utilizada em joias, moedas e em aplicações elétricas e eletrônicas.";
                document.getElementById('nomeE').textContent = "Prata";
                document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
                document.getElementById('massa').textContent = "107,8682 u";
                document.getElementById('configuracao').textContent = "5s1 4d10";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 48:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O cádmio (Cd) é um metal de transição, com número atômico 48 na tabela periódica. Utilizado em baterias recarregáveis, pigmentos e em aplicações eletroquímicas, o cádmio possui propriedades úteis em diversas indústrias.";
                document.getElementById('nomeE').textContent = "Cádmio";
                document.getElementById('ano').textContent = "1817";
                document.getElementById('massa').textContent = "112,414 u";
                document.getElementById('configuracao').textContent = "5s1 4d10";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 49:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O índio (In) é um metal pós-transição, com número atômico 49 na tabela periódica. Utilizado em ligas metálicas, eletrônicos e em pesquisas científicas, o índio é um material versátil com propriedades únicas.";
                document.getElementById('nomeE').textContent = "Índio";
                document.getElementById('ano').textContent = "1863";
                document.getElementById('massa').textContent = "114,818 u";
                document.getElementById('configuracao').textContent = "5s2 4d10 5p1";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 50:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O estanho (Sn) é um metal pós-transição, com número atômico 50 na tabela periódica. Utilizado em ligas metálicas, soldas e em embalagens, o estanho é um material histórico com aplicações variadas.";
                document.getElementById('nomeE').textContent = "Estanho";
                document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
                document.getElementById('massa').textContent = "118,710 u";
                document.getElementById('configuracao').textContent = "5s2 4d10 5p2";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 51:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O antimônio (Sb) é um metalóide, com número atômico 51 na tabela periódica. Utilizado em ligas metálicas, pigmentos e em aplicações medicinais, o antimônio possui propriedades únicas e uma longa história de uso.";
                document.getElementById('nomeE').textContent = "Antimônio";
                document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
                document.getElementById('massa').textContent = "121,760 u";
                document.getElementById('configuracao').textContent = "5s2 4d10 5p3";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--semi)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--semiDark)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 52:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O telúrio (Te) é um metalóide, com número atômico 52 na tabela periódica. Utilizado em ligas metálicas, eletrônicos e em aplicações industriais, o telúrio possui propriedades semicondutoras e é vital para várias tecnologias.";
                document.getElementById('nomeE').textContent = "Telúrio";
                document.getElementById('ano').textContent = "1782";
                document.getElementById('massa').textContent = "127,60 u";
                document.getElementById('configuracao').textContent = "5s2 4d10 5p4";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--semi)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--semiDark)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;

                case 53:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O iodo (I) é um halogênio, com número atômico 53 na tabela periódica. Utilizado em produtos farmacêuticos, tinturas e em aplicações médicas, o iodo desempenha um papel essencial na saúde e na indústria.";
                document.getElementById('nomeE').textContent = "Iodo";
                document.getElementById('ano').textContent = "1811";
                document.getElementById('massa').textContent = "126,90447 u";
                document.getElementById('configuracao').textContent = "5s2 4d10 5p5";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--halogenioDark)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--halogenio)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 54:
                document.getElementById('dados').style.display = 'block';
                document.getElementById('descricao').textContent = "O xenônio (Xe) é um gás nobre, com número atômico 54 na tabela periódica. Utilizado em lâmpadas de flash, lasers e em aplicações de iluminação especializada, o xenônio possui propriedades únicas em tecnologias de iluminação.";
                document.getElementById('nomeE').textContent = "Xenônio";
                document.getElementById('ano').textContent = "1898";
                document.getElementById('massa').textContent = "131,293 u";
                document.getElementById('configuracao').textContent = "5s2 4d10 5p6";
                if (check.checked) {
                    document.getElementById('dados').style.backgroundColor = 'var(--gasNobre)';
                    document.getElementById('dados').style.color = 'black';
                } else {
                    document.getElementById('dados').style.backgroundColor = 'var(--gasNobreDark)';
                    document.getElementById('dados').style.color = 'wheat';
                }
                break;
                case 55:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O césio (Cs) é um metal alcalino, com número atômico 55 na tabela periódica. É conhecido por seu uso em relógios atômicos, que são extremamente precisos devido à frequência consistente de oscilação dos átomos de césio.";
                    document.getElementById('nomeE').textContent = "Césio";
                    document.getElementById('ano').textContent = "1860";
                    document.getElementById('massa').textContent = "132,905 u";
                    document.getElementById('configuracao').textContent = "6s1";
                    if(check.checked){
                        document.getElementById('dados').style.backgroundColor  = 'var(--terrososDark)';
                        document.getElementById('dados').style.color  = 'black';
                     }else{
                         document.getElementById('dados').style.backgroundColor  = 'var(--terrosos)';
                         document.getElementById('dados').style.color  = 'wheat';
                     }
                    break;

                case 56:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O bário (Ba) é um metal alcalino-terroso, com número atômico 56 na tabela periódica. É frequentemente usado em fogos de artifício para dar uma cor verde brilhante e em exames médicos de raios-X do trato gastrointestinal.";
                    document.getElementById('nomeE').textContent = "Bário";
                    document.getElementById('ano').textContent = "1808";
                    document.getElementById('massa').textContent = "137,327 u";
                    document.getElementById('configuracao').textContent = "6s2";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--alcalinosDark)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--alcalinos)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 57:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O lantânio (La) é um metal de transição interna, com número atômico 57 na tabela periódica. É um componente crucial em ligas metálicas usadas na fabricação de baterias recarregáveis de íon de lítio, que alimentam muitos dispositivos eletrônicos modernos.";
                    document.getElementById('nomeE').textContent = "Lantânio";
                    document.getElementById('ano').textContent = "1839";
                    document.getElementById('massa').textContent = "138,905 u";
                    document.getElementById('configuracao').textContent = "6s2 5d1";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;
                    case 58:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O cério (Ce) é um elemento de terras raras com número atômico 58. É utilizado em catalisadores automotivos e industriais, bem como em lâmpadas de arco de carbono e em pedras de isqueiro.";
                    document.getElementById('nomeE').textContent = "Cério";
                    document.getElementById('ano').textContent = "1803";
                    document.getElementById('massa').textContent = "140,116 u";
                    document.getElementById('configuracao').textContent = "6s2 4f1";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;
                    case 59:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O praseodímio (Pr) é um elemento de terras raras com número atômico 59. É utilizado em ligas metálicas para produção de ímãs permanentes, sendo essencial em motores elétricos de alta eficiência.";
                    document.getElementById('nomeE').textContent = "Praseodímio";
                    document.getElementById('ano').textContent = "1885";
                    document.getElementById('massa').textContent = "140,907 u";
                    document.getElementById('configuracao').textContent = "6s2 4f3";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;
                    case 60:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O neodímio (Nd) é um elemento de terras raras com número atômico 60. É amplamente utilizado em ímãs de alta resistência para motores de veículos elétricos, geradores e equipamentos de áudio.";
                    document.getElementById('nomeE').textContent = "Neodímio";
                    document.getElementById('ano').textContent = "1885";
                    document.getElementById('massa').textContent = "144,242 u";
                    document.getElementById('configuracao').textContent = "6s2 4f4";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;
                    case 61:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O promécio (Pm) é um lantanídeo, com número atômico 61 na tabela periódica. É o único elemento da série dos lantanídeos que não tem isótopos estáveis e é usado principalmente como fonte de radiação em equipamentos científicos.";
                    document.getElementById('nomeE').textContent = "Promécio";
                    document.getElementById('ano').textContent = "1945";
                    document.getElementById('massa').textContent = "(145) u";
                    document.getElementById('configuracao').textContent = "6s2 4f5";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 62:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O samário (Sm) é um lantanídeo, com número atômico 62 na tabela periódica. É usado na fabricação de ímãs permanentes e em reatores nucleares como um absorvedor de nêutrons.";
                    document.getElementById('nomeE').textContent = "Samário";
                    document.getElementById('ano').textContent = "1879";
                    document.getElementById('massa').textContent = "150,36 u";
                    document.getElementById('configuracao').textContent = "6s2 4f6";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 63:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O európio (Eu) é um lantanídeo, com número atômico 63 na tabela periódica. É usado em telas de televisão e monitores de computador para produzir uma cor vermelha brilhante.";
                    document.getElementById('nomeE').textContent = "Európio";
                    document.getElementById('ano').textContent = "1901";
                    document.getElementById('massa').textContent = "151,964 u";
                    document.getElementById('configuracao').textContent = "6s2 4f7";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 64:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O gadolínio (Gd) é um lantanídeo, com número atômico 64 na tabela periódica. É usado em ressonância magnética e em barras de controle de reatores nucleares.";
                    document.getElementById('nomeE').textContent = "Gadolínio";
                    document.getElementById('ano').textContent = "1880";
                    document.getElementById('massa').textContent = "157,25 u";
                    document.getElementById('configuracao').textContent = "6s2 4f7 5d1";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;
                    case 65:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O térbio (Tb) é um lantanídeo, com número atômico 65 na tabela periódica. É usado em dispositivos de exibição, como televisões e monitores de computador, para produzir cores verdes.";
                    document.getElementById('nomeE').textContent = "Térbio";
                    document.getElementById('ano').textContent = "1843";
                    document.getElementById('massa').textContent = "158,925 u";
                    document.getElementById('configuracao').textContent = "6s2 4f9";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 66:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O disprósio (Dy) é um lantanídeo, com número atômico 66 na tabela periódica. É usado em ímãs permanentes e lasers.";
                    document.getElementById('nomeE').textContent = "Disprósio";
                    document.getElementById('ano').textContent = "1886";
                    document.getElementById('massa').textContent = "162,500 u";
                    document.getElementById('configuracao').textContent = "6s2 4f10";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 67:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O hólmio (Ho) é um lantanídeo, com número atômico 67 na tabela periódica. É usado em lasers e ímãs supercondutores.";
                    document.getElementById('nomeE').textContent = "Hólmio";
                    document.getElementById('ano').textContent = "1878";
                    document.getElementById('massa').textContent = "164,930 u";
                    document.getElementById('configuracao').textContent = "6s2 4f11";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 68:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O érbio (Er) é um lantanídeo, com número atômico 68 na tabela periódica. É usado em lasers, amplificadores ópticos e na indústria de vidro colorido.";
                    document.getElementById('nomeE').textContent = "Érbio";
                    document.getElementById('ano').textContent = "1843";
                    document.getElementById('massa').textContent = "167,259 u";
                    document.getElementById('configuracao').textContent = "6s2 4f12";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 69:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O túlio (Tm) é um lantanídeo, com número atômico 69 na tabela periódica. É usado em lasers e em equipamentos médicos de raios-X.";
                    document.getElementById('nomeE').textContent = "Túlio";
                    document.getElementById('ano').textContent = "1879";
                    document.getElementById('massa').textContent = "168,934 u";
                    document.getElementById('configuracao').textContent = "6s2 4f13";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 70:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O itérbio (Yb) é um lantanídeo, com número atômico 70 na tabela periódica. É usado em lasers, em cristais fosforescentes e como dopante em materiais de fibra óptica.";
                    document.getElementById('nomeE').textContent = "Itérbio";
                    document.getElementById('ano').textContent = "1878";
                    document.getElementById('massa').textContent = "173,045 u";
                    document.getElementById('configuracao').textContent = "6s2 4f14";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;
                    case 71:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O lutécio (Lu) é um lantanídeo, com número atômico 71 na tabela periódica. É usado em cristais de lutécio-alumínio-garnet (LAG), que são usados em lasers e LEDs.";
                    document.getElementById('nomeE').textContent = "Lutécio";
                    document.getElementById('ano').textContent = "1907";
                    document.getElementById('massa').textContent = "174,967 u";
                    document.getElementById('configuracao').textContent = "6s2 4f14 5d1";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--latan)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--latanDark)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 72:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O háfnio (Hf) é um metal de transição, com número atômico 72 na tabela periódica. É usado em barras de controle de reatores nucleares e em chips de computador.";
                    document.getElementById('nomeE').textContent = "Háfnio";
                    document.getElementById('ano').textContent = "1923";
                    document.getElementById('massa').textContent = "178,49 u";
                    document.getElementById('configuracao').textContent = "6s2 4f14 5d2";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 73:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O tântalo (Ta) é um metal de transição, com número atômico 73 na tabela periódica. É usado em capacitores eletrônicos e em equipamentos cirúrgicos.";
                    document.getElementById('nomeE').textContent = "Tântalo";
                    document.getElementById('ano').textContent = "1802";
                    document.getElementById('massa').textContent = "180,947 u";
                    document.getElementById('configuracao').textContent = "6s2 4f14 5d3";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 74:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O tungstênio (W) é um metal de transição, com número atômico 74 na tabela periódica. É usado em filamentos de lâmpadas incandescentes e em eletrodos de solda.";
                    document.getElementById('nomeE').textContent = "Tungstênio";
                    document.getElementById('ano').textContent = "1783";
                    document.getElementById('massa').textContent = "183,84 u";
                    document.getElementById('configuracao').textContent = "6s2 4f14 5d4";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 75:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O rênio (Re) é um metal de transição, com número atômico 75 na tabela periódica. É usado em ligas de alta temperatura e como catalisador em reações químicas.";
                    document.getElementById('nomeE').textContent = "Rênio";
                    document.getElementById('ano').textContent = "1925";
                    document.getElementById('massa').textContent = "186,207 u";
                    document.getElementById('configuracao').textContent = "6s2 4f14 5d5";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;

                case 76:
                    document.getElementById('dados').style.display = 'block';
                    document.getElementById('descricao').textContent = "O ósmio (Os) é um metal de transição, com número atômico 76 na tabela periódica. É usado em canetas-tinteiro e agulhas de toca-discos.";
                    document.getElementById('nomeE').textContent = "Ósmio";
                    document.getElementById('ano').textContent = "1803";
                    document.getElementById('massa').textContent = "190,23 u";
                    document.getElementById('configuracao').textContent = "6s2 4f14 5d6";
                    if (check.checked) {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                        document.getElementById('dados').style.color = 'black';
                    } else {
                        document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                        document.getElementById('dados').style.color = 'wheat';
                    }
                    break;
                    case 77:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O irídio (Ir) é um metal de transição, com número atômico 77 na tabela periódica. É usado em pontas de canetas-tinteiro e em equipamentos que exigem alta resistência à corrosão.";
                        document.getElementById('nomeE').textContent = "Irídio";
                        document.getElementById('ano').textContent = "1803";
                        document.getElementById('massa').textContent = "192,217 u";
                        document.getElementById('configuracao').textContent = "6s2 4f14 5d7";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 78:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O platina (Pt) é um metal de transição, com número atômico 78 na tabela periódica. É usado em joias, catalisadores automotivos e equipamentos de laboratório.";
                        document.getElementById('nomeE').textContent = "Platina";
                        document.getElementById('ano').textContent = "1735";
                        document.getElementById('massa').textContent = "195,084 u";
                        document.getElementById('configuracao').textContent = "6s1 4f14 5d9";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 79:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O ouro (Au) é um metal de transição, com número atômico 79 na tabela periódica. É usado em joias, moedas e em circuitos eletrônicos.";
                        document.getElementById('nomeE').textContent = "Ouro";
                        document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
                        document.getElementById('massa').textContent = "196,967 u";
                        document.getElementById('configuracao').textContent = "6s1 4f14 5d10";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 80:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O mercúrio (Hg) é um metal de transição, com número atômico 80 na tabela periódica. É usado em termômetros, barômetros e lâmpadas fluorescentes.";
                        document.getElementById('nomeE').textContent = "Mercúrio";
                        document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
                        document.getElementById('massa').textContent = "200,59 u";
                        document.getElementById('configuracao').textContent = "6s2 4f14 5d10";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 81:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O tálio (Tl) é um metal pós-transição, com número atômico 81 na tabela periódica. É usado em células fotoelétricas e em dispositivos semicondutores.";
                        document.getElementById('nomeE').textContent = "Tálio";
                        document.getElementById('ano').textContent = "1861";
                        document.getElementById('massa').textContent = "204,383 u";
                        document.getElementById('configuracao').textContent = "6s2 4f14 5d10 6p1";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 82:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O chumbo (Pb) é um metal pós-transição, com número atômico 82 na tabela periódica. É usado em baterias de chumbo-ácido, em blindagens contra radiação e em cristais de vidro.";
                        document.getElementById('nomeE').textContent = "Chumbo";
                        document.getElementById('ano').textContent = "Conhecido desde a Antiguidade";
                        document.getElementById('massa').textContent = "207,2 u";
                        document.getElementById('configuracao').textContent = "6s2 4f14 5d10 6p2";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 83:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O bismuto (Bi) é um metal pós-transição, com número atômico 83 na tabela periódica. É usado em cosméticos, em medicamentos para problemas estomacais e em soldas de baixo ponto de fusão.";
                        document.getElementById('nomeE').textContent = "Bismuto";
                        document.getElementById('ano').textContent = "1753";
                        document.getElementById('massa').textContent = "208,980 u";
                        document.getElementById('configuracao').textContent = "6s2 4f14 5d10 6p3";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;
                        case 84:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O polônio (Po) é um metalóide, com número atômico 84 na tabela periódica. É usado em dispositivos antiestáticos e em fontes de calor para satélites espaciais.";
                        document.getElementById('nomeE').textContent = "Polônio";
                        document.getElementById('ano').textContent = "1898";
                        document.getElementById('massa').textContent = "(209) u";
                        document.getElementById('configuracao').textContent = "6s2 4f14 5d10 6p4";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--semi)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--semiDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 85:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O astato (At) é um halogênio, com número atômico 85 na tabela periódica. É usado em terapias de radiação para tratar certos tipos de câncer.";
                        document.getElementById('nomeE').textContent = "Astato";
                        document.getElementById('ano').textContent = "1940";
                        document.getElementById('massa').textContent = "(210) u";
                        document.getElementById('configuracao').textContent = "6s2 4f14 5d10 6p5";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--halogenioDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--halogenio)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 86:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O radônio (Rn) é um gás nobre, com número atômico 86 na tabela periódica. É usado em terapias de radiação e em pesquisas geológicas.";
                        document.getElementById('nomeE').textContent = "Radônio";
                        document.getElementById('ano').textContent = "1900";
                        document.getElementById('massa').textContent = "(222) u";
                        document.getElementById('configuracao').textContent = "6s2 4f14 5d10 6p6";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--gasNobre)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--gasNobreDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                        case 87:
                            document.getElementById('dados').style.display = 'block';
                            document.getElementById('descricao').textContent = "O frâncio (Fr) é um metal alcalino extremamente raro, com número atômico 87 na tabela periódica. Sua produção é extremamente limitada e é utilizado principalmente em pesquisas científicas devido à sua alta radioatividade.";
                            document.getElementById('nomeE').textContent = "Frâncio";
                            document.getElementById('ano').textContent = "1939";
                            document.getElementById('massa').textContent = "(223) u";
                            document.getElementById('configuracao').textContent = "7s1";
                            if(check.checked){
                                document.getElementById('dados').style.backgroundColor  = 'var(--terrososDark)';
                                document.getElementById('dados').style.color  = 'black';
                             }else{
                                 document.getElementById('dados').style.backgroundColor  = 'var(--terrosos)';
                                 document.getElementById('dados').style.color  = 'wheat';
                             }
                            break;
                       
                        case 88:
                            document.getElementById('dados').style.display = 'block';
                            document.getElementById('descricao').textContent = "O rádio (Ra) é um metal alcalino-terroso altamente radioativo, com número atômico 88 na tabela periódica. Foi descoberto em 1898 por Marie Curie e Pierre Curie e é usado em terapias de radiação para tratar certos tipos de câncer. É extremamente raro e é obtido principalmente como um subproduto do urânio.";
                            document.getElementById('nomeE').textContent = "Rádio";
                            document.getElementById('ano').textContent = "1898";
                            document.getElementById('massa').textContent = "(226) u";
                            document.getElementById('configuracao').textContent = "7s2";
                            if (check.checked) {
                                document.getElementById('dados').style.backgroundColor = 'var(--alcalinosDark)';
                                document.getElementById('dados').style.color = 'black';
                            } else {
                                document.getElementById('dados').style.backgroundColor = 'var(--alcalinos)';
                                document.getElementById('dados').style.color = 'wheat';
                            }
                            break;
                       

                    case 89:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O actínio (Ac) é um metal de transição interna, com número atômico 89 na tabela periódica. É usado em terapias de radiação e como fonte de nêutrons.";
                        document.getElementById('nomeE').textContent = "Actínio";
                        document.getElementById('ano').textContent = "1899";
                        document.getElementById('massa').textContent = "(227) u";
                        document.getElementById('configuracao').textContent = "7s2 6d1";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 90:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O tório (Th) é um metal de transição interna, com número atômico 90 na tabela periódica. É usado como combustível em reatores nucleares.";
                        document.getElementById('nomeE').textContent = "Tório";
                        document.getElementById('ano').textContent = "1828";
                        document.getElementById('massa').textContent = "232,038 u";
                        document.getElementById('configuracao').textContent = "7s2 6d2";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 91:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O protactínio (Pa) é um metal de transição interna, com número atômico 91 na tabela periódica. É usado em pesquisas científicas.";
                        document.getElementById('nomeE').textContent = "Protactínio";
                        document.getElementById('ano').textContent = "1913";
                        document.getElementById('massa').textContent = "231,036 u";
                        document.getElementById('configuracao').textContent = "7s2 6d1 5f2";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;
                        case 91:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O protactínio (Pa) é um metal de transição interna, com número atômico 91 na tabela periódica. É usado em pesquisas científicas.";
                        document.getElementById('nomeE').textContent = "Protactínio";
                        document.getElementById('ano').textContent = "1913";
                        document.getElementById('massa').textContent = "231,036 u";
                        document.getElementById('configuracao').textContent = "7s2 6d1 5f2";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 92:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O urânio (U) é um metal de transição interna, com número atômico 92 na tabela periódica. É usado como combustível em reatores nucleares e na fabricação de armas nucleares.";
                        document.getElementById('nomeE').textContent = "Urânio";
                        document.getElementById('ano').textContent = "1789";
                        document.getElementById('massa').textContent = "238,029 u";
                        document.getElementById('configuracao').textContent = "7s2 6d1 5f3";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 93:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O netúnio (Np) é um metal de transição interna, com número atômico 93 na tabela periódica. É usado em pesquisas científicas e em detectores de nêutrons.";
                        document.getElementById('nomeE').textContent = "Netúnio";
                        document.getElementById('ano').textContent = "1940";
                        document.getElementById('massa').textContent = "(237) u";
                        document.getElementById('configuracao').textContent = "7s2 6d1 5f4";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 94:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O plutônio (Pu) é um metal de transição interna, com número atômico 94 na tabela periódica. É usado como combustível em reatores nucleares e na fabricação de armas nucleares.";
                        document.getElementById('nomeE').textContent = "Plutônio";
                        document.getElementById('ano').textContent = "1940";
                        document.getElementById('massa').textContent = "(244) u";
                        document.getElementById('configuracao').textContent = "7s2 6d1 5f6";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 95:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O amerício (Am) é um metal de transição interna, com número atômico 95 na tabela periódica. É usado em detectores de fumaça e em terapias de radiação.";
                        document.getElementById('nomeE').textContent = "Amerício";
                        document.getElementById('ano').textContent = "1944";
                        document.getElementById('massa').textContent = "(243) u";
                        document.getElementById('configuracao').textContent = "7s2 6d1 5f7";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 96:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O cúrio (Cm) é um metal de transição interna, com número atômico 96 na tabela periódica. É usado em pesquisas científicas e em fontes de calor para satélites espaciais.";
                        document.getElementById('nomeE').textContent = "Cúrio";
                        document.getElementById('ano').textContent = "1944";
                        document.getElementById('massa').textContent = "(247) u";
                        document.getElementById('configuracao').textContent = "7s2 6d1 5f7";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 97:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O berquélio (Bk) é um metal de transição interna, com número atômico 97 na tabela periódica. É usado em pesquisas científicas.";
                        document.getElementById('nomeE').textContent = "Berquélio";
                        document.getElementById('ano').textContent = "1949";
                        document.getElementById('massa').textContent = "(247) u";
                        document.getElementById('configuracao').textContent = "7s2 6d1 5f9";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 98:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O califórnio (Cf) é um metal de transição interna, com número atômico 98 na tabela periódica. É usado em terapias de radiação e como fonte de nêutrons.";
                        document.getElementById('nomeE').textContent = "Califórnio";
                        document.getElementById('ano').textContent = "1950";
                        document.getElementById('massa').textContent = "(251) u";
                        document.getElementById('configuracao').textContent = "7s2 6d1 5f10";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;
                        case 99:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O einstênio (Es) é um metal de transição interna, com número atômico 99 na tabela periódica. É usado principalmente em pesquisas científicas.";
                        document.getElementById('nomeE').textContent = "Einstênio";
                        document.getElementById('ano').textContent = "1952";
                        document.getElementById('massa').textContent = "(252) u";
                        document.getElementById('configuracao').textContent = "7s2 5f11";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 100:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O férmio (Fm) é um metal de transição interna, com número atômico 100 na tabela periódica. É usado principalmente em pesquisas científicas.";
                        document.getElementById('nomeE').textContent = "Férmio";
                        document.getElementById('ano').textContent = "1952";
                        document.getElementById('massa').textContent = "(257) u";
                        document.getElementById('configuracao').textContent = "7s2 5f12";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 101:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O mendelévio (Md) é um metal de transição interna, com número atômico 101 na tabela periódica. É usado principalmente em pesquisas científicas.";
                        document.getElementById('nomeE').textContent = "Mendelévio";
                        document.getElementById('ano').textContent = "1955";
                        document.getElementById('massa').textContent = "(258) u";
                        document.getElementById('configuracao').textContent = "7s2 5f13";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 102:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O nobélio (No) é um metal de transição interna, com número atômico 102 na tabela periódica. É usado principalmente em pesquisas científicas.";
                        document.getElementById('nomeE').textContent = "Nobélio";
                        document.getElementById('ano').textContent = "1958";
                        document.getElementById('massa').textContent = "(259) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 103:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O lourêncio (Lr) é um metal de transição interna, com número atômico 103 na tabela periódica. É usado principalmente em pesquisas científicas.";
                        document.getElementById('nomeE').textContent = "Lourêncio";
                        document.getElementById('ano').textContent = "1961";
                        document.getElementById('massa').textContent = "(266) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d1";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideos)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--actinideosDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                        case 104:
                            document.getElementById('dados').style.display = 'block';
                            document.getElementById('descricao').textContent = "O rutherfórdio (Rf) é um metal de transição altamente radioativo, com número atômico 104 na tabela periódica. Foi sintetizado pela primeira vez em 1969 e é produzido em laboratórios por meio de reações nucleares. Devido à sua rápida decaimento, suas propriedades químicas e físicas ainda estão sendo estudadas.";
                            document.getElementById('nomeE').textContent = "Rutherfórdio";
                            document.getElementById('ano').textContent = "1969";
                            document.getElementById('massa').textContent = "(267) u";
                            document.getElementById('configuracao').textContent = "7s2 5f14 6d2";
                            if (check.checked) {
                                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                                document.getElementById('dados').style.color = 'black';
                            } else {
                                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                                document.getElementById('dados').style.color = 'wheat';
                            }
                            break;
                       
                        case 105:
                            document.getElementById('dados').style.display = 'block';
                            document.getElementById('descricao').textContent = "O dúbnio (Db) é um metal de transição altamente radioativo, com número atômico 105 na tabela periódica. Foi sintetizado pela primeira vez em 1970 e é produzido em laboratórios por meio de reações nucleares. Sua principal aplicação é em pesquisas científicas, devido à sua instabilidade e curta meia-vida.";
                            document.getElementById('nomeE').textContent = "Dúbnio";
                            document.getElementById('ano').textContent = "1970";
                            document.getElementById('massa').textContent = "(270) u";
                            document.getElementById('configuracao').textContent = "7s2 5f14 6d3";
                            if (check.checked) {
                                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                                document.getElementById('dados').style.color = 'black';
                            } else {
                                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                                document.getElementById('dados').style.color = 'wheat';
                            }
                            break;
                       
                        case 106:
                            document.getElementById('dados').style.display = 'block';
                            document.getElementById('descricao').textContent = "O seabórgio (Sg) é um elemento químico altamente radioativo, com número atômico 106 na tabela periódica. Foi sintetizado pela primeira vez em 1974 e é produzido em laboratórios por meio de reações nucleares. Devido à sua rápida decaimento, suas propriedades químicas e físicas ainda estão sendo estudadas.";
                            document.getElementById('nomeE').textContent = "Seabórgio";
                            document.getElementById('ano').textContent = "1974";
                            document.getElementById('massa').textContent = "(271) u";
                            document.getElementById('configuracao').textContent = "7s2 5f14 6d4";
                            if (check.checked) {
                                document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                                document.getElementById('dados').style.color = 'black';
                            } else {
                                document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                                document.getElementById('dados').style.color = 'wheat';
                            }
                            break;
                       

                    case 107:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O bóhrio (Bh) é um metal de transição, com número atômico 107 na tabela periódica. É usado principalmente em pesquisas científicas.";
                        document.getElementById('nomeE').textContent = "Bóhrio";
                        document.getElementById('ano').textContent = "1981";
                        document.getElementById('massa').textContent = "(270) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d5";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;
                        case 108:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O hássio (Hs) é um elemento químico de transição, com número atômico 108 na tabela periódica. O hássio é altamente radioativo e possui uma meia-vida extremamente curta, o que dificulta sua observação e estudo. Sua produção é realizada em laboratórios especializados através de reações nucleares. Devido à sua instabilidade, o hássio não possui aplicações práticas e é utilizado principalmente em pesquisas científicas para expandir nosso conhecimento sobre os elementos transurânicos.";
                        document.getElementById('nomeE').textContent = "Hássio";
                        document.getElementById('ano').textContent = "1984";
                        document.getElementById('massa').textContent = "(277) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d6";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 109:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O meitnério (Mt) é um elemento químico de transição, com número atômico 109 na tabela periódica. O meitnério é extremamente radioativo e possui uma meia-vida muito curta, o que dificulta sua observação e estudo. Sua produção é realizada em laboratórios especializados através de reações nucleares. Devido à sua instabilidade, o meitnério não possui aplicações práticas e é utilizado principalmente em pesquisas científicas para expandir nosso conhecimento sobre os elementos transurânicos.";
                        document.getElementById('nomeE').textContent = "Meitnério";
                        document.getElementById('ano').textContent = "1982";
                        document.getElementById('massa').textContent = "(276) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d7";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 110:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O darmstádtio (Ds) é um elemento químico de transição, com número atômico 110 na tabela periódica. O darmstádtio é altamente radioativo e possui uma meia-vida extremamente curta, o que dificulta sua observação e estudo. Sua produção é realizada em laboratórios especializados através de reações nucleares. Devido à sua instabilidade, o darmstádtio não possui aplicações práticas e é utilizado principalmente em pesquisas científicas para expandir nosso conhecimento sobre os elementos transurânicos.";
                        document.getElementById('nomeE').textContent = "Darmstádtio";
                        document.getElementById('ano').textContent = "1994";
                        document.getElementById('massa').textContent = "(281) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d9";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 111:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O roentgênio (Rg) é um elemento químico de transição, com número atômico 111 na tabela periódica. O roentgênio é altamente radioativo e possui uma meia-vida extremamente curta, o que dificulta sua observação e estudo. Sua produção é realizada em laboratórios especializados através de reações nucleares. Devido à sua instabilidade, o roentgênio não possui aplicações práticas e é utilizado principalmente em pesquisas científicas para expandir nosso conhecimento sobre os elementos transurânicos.";
                        document.getElementById('nomeE').textContent = "Roentgênio";
                        document.getElementById('ano').textContent = "1994";
                        document.getElementById('massa').textContent = "(282) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d10";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 112:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O copernício (Cn) é um elemento químico de transição, com número atômico 112 na tabela periódica. O copernício é altamente radioativo e possui uma meia-vida extremamente curta, o que dificulta sua observação e estudo. Sua produção é realizada em laboratórios especializados através de reações nucleares. Devido à sua instabilidade, o copernício não possui aplicações práticas e é utilizado principalmente em pesquisas científicas para expandir nosso conhecimento sobre os elementos transurânicos.";
                        document.getElementById('nomeE').textContent = "Copernício";
                        document.getElementById('ano').textContent = "1996";
                        document.getElementById('massa').textContent = "(285) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d10 7p2";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorTextDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--metalCorText)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;
                        case 113:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O nihônio (Nh) é um elemento químico sintético, com número atômico 113 na tabela periódica. Foi sintetizado pela primeira vez em 2004 por uma equipe de cientistas japoneses e russos. O nihônio é altamente radioativo e possui uma meia-vida extremamente curta, tornando-o difícil de ser estudado em detalhes. Devido à sua instabilidade, o nihônio não possui aplicações práticas e é utilizado principalmente em pesquisas científicas para expandir nosso conhecimento sobre os elementos transurânicos.";
                        document.getElementById('nomeE').textContent = "Nihônio";
                        document.getElementById('ano').textContent = "2004";
                        document.getElementById('massa').textContent = "(286) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d10 7p3";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 114:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O fleróvio (Fl) é um elemento químico sintético, com número atômico 114 na tabela periódica. Foi sintetizado pela primeira vez em 1998 por uma equipe de cientistas russos e norte-americanos. O fleróvio é altamente radioativo e possui uma meia-vida extremamente curta, o que torna difícil seu estudo e manipulação. Apesar disso, tem sido alvo de interesse científico devido às suas propriedades e possíveis aplicações em pesquisas nucleares.";
                        document.getElementById('nomeE').textContent = "Fleróvio";
                        document.getElementById('ano').textContent = "1998";
                        document.getElementById('massa').textContent = "(289) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d10 7p4";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 115:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O moscóvio (Mc) é um elemento químico sintético, com número atômico 115 na tabela periódica. Foi sintetizado pela primeira vez em 2003 por uma equipe de cientistas russos. O moscóvio é altamente radioativo e possui uma meia-vida extremamente curta, tornando-o difícil de ser estudado. Suas propriedades e possíveis aplicações estão sendo investigadas em pesquisas nucleares.";
                        document.getElementById('nomeE').textContent = "Moscóvio";
                        document.getElementById('ano').textContent = "2003";
                        document.getElementById('massa').textContent = "(290) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d10 7p5";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 116:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O livermório (Lv) é um elemento químico sintético, com número atômico 116 na tabela periódica. Foi sintetizado pela primeira vez em 2000 por uma equipe de cientistas russos e norte-americanos. O livermório é altamente radioativo e possui uma meia-vida extremamente curta, tornando-o difícil de ser estudado. Suas propriedades e possíveis aplicações estão sendo investigadas em pesquisas nucleares.";
                        document.getElementById('nomeE').textContent = "Livermório";
                        document.getElementById('ano').textContent = "2000";
                        document.getElementById('massa').textContent = "(293) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d10 7p6";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--outrosDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--outros)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 117:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O tennessino (Ts) é um elemento químico sintético, com número atômico 117 na tabela periódica. Foi sintetizado pela primeira vez em 2010 por uma equipe de cientistas alemães e russos. O tennessino é altamente radioativo e possui uma meia-vida extremamente curta, tornando-o difícil de ser estudado. Suas propriedades e possíveis aplicações estão sendo investigadas em pesquisas nucleares.";
                        document.getElementById('nomeE').textContent = "Tennessino";
                        document.getElementById('ano').textContent = "2010";
                        document.getElementById('massa').textContent = "(294) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d10 7p5";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--halogenioDark)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--halogenio)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;

                    case 118:
                        document.getElementById('dados').style.display = 'block';
                        document.getElementById('descricao').textContent = "O oganessônio (Og) é um elemento químico sintético, com número atômico 118 na tabela periódica. Foi sintetizado pela primeira vez em 2002 por uma equipe de cientistas russos e norte-americanos. O oganessônio é altamente radioativo e possui uma meia-vida extremamente curta, tornando-o difícil de ser estudado. Suas propriedades e possíveis aplicações estão sendo investigadas em pesquisas nucleares.";
                        document.getElementById('nomeE').textContent = "Oganessônio";
                        document.getElementById('ano').textContent = "2002";
                        document.getElementById('massa').textContent = "(294) u";
                        document.getElementById('configuracao').textContent = "7s2 5f14 6d10 7p6";
                        if (check.checked) {
                            document.getElementById('dados').style.backgroundColor = 'var(--gasNobre)';
                            document.getElementById('dados').style.color = 'black';
                        } else {
                            document.getElementById('dados').style.backgroundColor = 'var(--gasNobreDark)';
                            document.getElementById('dados').style.color = 'wheat';
                        }
                        break;




            }
        }
       

  function clicar() {
    var dadosElement = document.getElementById('dados');
   
    if (clicado) {
      dadosElement.style.display = 'none';
    } else {
      dadosElement.style.display = 'block';
    }
   
    clicado = !clicado;
  }

  function tirarDados() {
    if (!clicado) {
      document.getElementById('dados').style.display = 'none';
    }
    clicado = false;
}

// Logica legenda

// function legenda(legenda) {
//     switch (legenda) {
//         case 1:
//             if(check.checked){
//                 document.getElementById('hidro').style.border = 'wheat 3px solid';    
//             }else{
//                 document.getElementById('hidro').style.border = '#302f2d 3px solid';
//             }
//             break;
//         case 2:
//             if(check.checked){
//                 iconAlcalino.forEach(function (elemento) {
//                     elemento.style.border = '3px solid wheat';
//                     elemento.style.borderCollapse = 'collapse';
//                         elemento.style.borderSpacing = '0.2px';
//                 });
//             }else{
//                 iconAlcalino.forEach(function (elemento) {
//                     elemento.style.border = '3px solid #302f2d';
//                     elemento.style.borderCollapse = 'collapse';
//                         elemento.style.borderSpacing = '0.2px';
//                 });
//             }
//             break;
//             case 3:
//                 if(check.checked){
//                     iconTerroso.forEach(function (elemento) {
//                         elemento.style.border = '3px solid wheat';
//                         elemento.style.borderCollapse = 'collapse';
//                         elemento.style.borderSpacing = '0.2px';
//                     });
//                 }else{
//                     iconTerroso.forEach(function (elemento) {
//                         elemento.style.border = '3px solid #302f2d';
//                         elemento.style.borderCollapse = 'collapse';
//                         elemento.style.borderSpacing = '0.2px';
//                     });
//                 }
//                 break;
//             case 4:
//                 if(check.checked){
//                     iconMetal.forEach(function (elemento) {
//                         elemento.style.border = '3px solid wheat';
//                         elemento.style.borderCollapse = 'collapse';
//                         elemento.style.borderSpacing = '0.2px';
//                     });
//                 }else{
//                     iconMetal.forEach(function (elemento) {
//                         elemento.style.border = '3px solid black';
//                         elemento.style.borderCollapse = 'collapse';
//                         elemento.style.borderSpacing = '0.2px';
//                     });
//                 }
//                 break;      
//                 case 5:
//                     if(check.checked){
//                         iconSemi.forEach(function (elemento) {
//                             elemento.style.border = '3px solid wheat';
//                             elemento.style.borderCollapse = 'collapse';
//                             elemento.style.borderSpacing = '0.2px';
//                         });
//                     }else{
//                         iconSemi.forEach(function (elemento) {
//                             elemento.style.border = '3px solid #302f2d';
//                             elemento.style.borderCollapse = 'collapse';
//                             elemento.style.borderSpacing = '0.2px';
//                         });
//                     }
//                     break;      
//     }
// }

// function legenda2(legenda2){
//     console.log(legenda2)
//        switch(legenda2){  
//         case 1:
//             if(check.checked){
//             document.getElementById('hidro').style.border = '1px solid #000000';
//             document.getElementById('hidro').style.borderCollapse = 'collapse';
//             document.getElementById('hidro').style.borderSpacing = '0.2px';
//             }else{
//                 document.getElementById('hidro').style.border = '1px solid #ddd2c0';
//                 document.getElementById('hidro').style.borderCollapse = 'collapse';
//                 document.getElementById('hidro').style.borderSpacing = '0.2px';
//                 }            
//         break;
//         case 2:    
//         if(check.checked){
//             iconAlcalino.forEach(function (elemento) {
//                         elemento.style.border = '1px solid #000000';
//                         elemento.style.borderCollapse = 'collapse';
//                         elemento.style.borderSpacing = '0.2px'; });
//         }else{
//             iconAlcalino.forEach(function (elemento) {
//                 elemento.style.border = '1px solid #ddd2c0';
//                 elemento.style.borderCollapse = 'collapse';
//                 elemento.style.borderSpacing = '0.2px'; });
//         }
       
//         break;
//         case 3:
//             if(check.checked){
//                 iconTerroso.forEach(function (elemento) {
//                             elemento.style.border = '1px solid #000000';
//                             elemento.style.borderCollapse = 'collapse';
//                             elemento.style.borderSpacing = '0.2px'; });
//             }else{
//                 iconTerroso.forEach(function (elemento) {
//                     elemento.style.border = '1px solid #ddd2c0';
//                     elemento.style.borderCollapse = 'collapse';
//                     elemento.style.borderSpacing = '0.2px'; });
//             }
               
//         break;
//         case 4:
//         if(check.checked){
//           iconMetal.forEach(function (elemento) {
//             elemento.style.border = '1px solid #000000';
//             elemento.style.borderCollapse = 'collapse';
//             elemento.style.borderSpacing = '0.2px';
//         });  
//         }else{
//             iconMetal.forEach(function (elemento) {
//                 elemento.style.border = '1px solid #ddd2c0';
//                 elemento.style.borderCollapse = 'collapse';
//                 elemento.style.borderSpacing = '0.2px';
//             });
//         }break;
//         case 5:
//             if(check.checked){
//                 iconSemi.forEach(function (elemento) {
//                     elemento.style.border = '1px solid #0e0e0e';
//                     elemento.style.borderCollapse = 'collapse';
//                     elemento.style.borderSpacing = '0.2px';
//                 });
//             }else{
//                 iconSemi.forEach(function (elemento) {
//                     elemento.style.border = '1px solid #ddd2c0';
//                     elemento.style.borderCollapse = 'collapse';
//                     elemento.style.borderSpacing = '0.2px';
//                 });
//             }
           
       
//     }
// }