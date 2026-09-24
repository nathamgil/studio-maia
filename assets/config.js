/* =====================================================================
   Studio Maia, a Barbearia dos Craques — configuração
   Único arquivo que precisa ser editado para o site sair do modo de
   demonstração e entrar no ar de verdade.
   ===================================================================== */

window.TV = {

  /* ---- Negócio ---------------------------------------------------- */
  nome:       'Studio Maia',
  slogan:     'Barbearia dos Craques',
  instagram:  'studiomaiabarbearia',

  // WhatsApp da barbearia em formato internacional, só dígitos.
  // A CONFIRMAR com a casa: enquanto estiver vazio, os botões de contato
  // levam para o Direct do Instagram.
  whatsapp:        '',
  whatsappVisivel: '',

  endereco: {
    linha1: 'Rua Waldemar Falcão, 146 · Loja D',
    linha2: 'Horto Florestal, Salvador — BA',
    maps:   'https://www.google.com/maps/search/?api=1&query=Rua+Waldemar+Falc%C3%A3o+146+Horto+Florestal+Salvador+BA',
    busca:  'Barbearia Studio Maia, Rua Waldemar Falcão, 146, Horto Florestal, Salvador - BA'
  },

  /* ---- Supabase ---------------------------------------------------
     Enquanto estes dois campos estiverem vazios, o site roda em MODO
     DEMONSTRAÇÃO: a agenda funciona de verdade na tela, mas os horários
     ficam guardados só no navegador de quem está olhando.

     Para ligar de verdade:
       1. supabase.com  ->  New project (região: South America / São Paulo)
       2. SQL Editor    ->  cole e rode db/schema.sql inteiro
       3. Settings > API -> copie "Project URL" e a chave "anon public"
       4. cole abaixo e suba pro GitHub

     A chave anon é pública por natureza — ela aparece no código do site.
     Quem protege os dados é o RLS + as funções do schema.sql, não ela.
  ------------------------------------------------------------------ */
  supabaseUrl: '',
  supabaseKey: '',

  /* ---- Regras da agenda (espelham o db/schema.sql) ----------------
     Mudou aqui? Mude no banco também — o banco é quem manda de verdade.
  ------------------------------------------------------------------ */
  regras: {
    passoMin:        30,   // grade de meia em meia hora, mesma grade da agenda atual
    antecedenciaMin: 30,   // não dá para marcar para daqui a 20 min
    janelaDias:      30,   // até 30 dias à frente
    cancelamentoH:   2     // cancela sozinho até 2h antes
  },

  /* ---- Expediente (0 = domingo) ------------------------------------
     O mesmo que a Trinks mostra hoje (conferido em 23/09/2026):
     seg a qui 9h às 19h, sexta 8h às 19h, sábado 8h às 17h, domingo fechado.
  ------------------------------------------------------------------ */
  expediente: {
    0: { aberto: false },
    1: { aberto: true, abre: '09:00', fecha: '19:00' },
    2: { aberto: true, abre: '09:00', fecha: '19:00' },
    3: { aberto: true, abre: '09:00', fecha: '19:00' },
    4: { aberto: true, abre: '09:00', fecha: '19:00' },
    5: { aberto: true, abre: '08:00', fecha: '19:00' },
    6: { aberto: true, abre: '08:00', fecha: '17:00' }
  },

  /* ---- Dados usados no modo demonstração --------------------------
     No ar de verdade, barbeiros e serviços vêm do banco, não daqui.
     Os mesmos seis barbeiros da Trinks, com a loja de cada um.
  ------------------------------------------------------------------ */
  barbeirosDemo: [
    { id:'bob',     slug:'bob',     nome:'Bob · Loja 1',     foto:'fotos/bob.jpg',     instagram:'' },
    { id:'gabriel', slug:'gabriel', nome:'Gabriel · Loja 1', foto:'fotos/gabriel.jpg', instagram:'' },
    { id:'lucas',   slug:'lucas',   nome:'Lucas · Loja 1',   foto:'fotos/lucas.jpg',   instagram:'' },
    { id:'mateus',  slug:'mateus',  nome:'Mateus · Loja 2',  foto:'fotos/mateus.jpg',  instagram:'' },
    { id:'patrick', slug:'patrick', nome:'Patrick · Loja 2', foto:'fotos/patrick.jpg', instagram:'' },
    { id:'marlon',  slug:'marlon',  nome:'Marlon · Loja 2',  foto:'fotos/marlon.jpg',  instagram:'' }
  ],

  // Preços, durações e descrições copiados da Trinks do Studio Maia (23/09/2026).
  // preco_centavos 0 = "sob consulta".
  servicosDemo: [
    { id:'corte',         nome:'Corte',                          descricao:'Um corte de cabelo perfeito de acordo com o seu estilo.',  preco_centavos:4000,  a_partir_de:false, duracao_min:40, categoria:'Cabelo' },
    { id:'corte-segunda', nome:'Corte Segunda na Régua',         descricao:'Corte na segunda-feira por R$ 30.',                        preco_centavos:3000,  a_partir_de:false, duracao_min:40, categoria:'Cabelo' },
    { id:'combo',         nome:'Combo Corte + Barba',            descricao:'Combo promocional corte e barba, de R$ 70 por R$ 60.',     preco_centavos:6000,  a_partir_de:false, duracao_min:40, categoria:'Cabelo' },
    { id:'pezinho',       nome:'Pezinho',                        descricao:'Acabamento.',                                              preco_centavos:1500,  a_partir_de:false, duracao_min:10, categoria:'Cabelo' },
    { id:'barba',         nome:'Barba',                          descricao:'Barba e bigode.',                                          preco_centavos:3000,  a_partir_de:false, duracao_min:40, categoria:'Barba e bigode' },
    { id:'nevou-curto',   nome:'Platinado/Nevou · cabelo curto', descricao:'Até o pente 2. O corte vai de brinde.',                    preco_centavos:16990, a_partir_de:false, duracao_min:20, categoria:'Nevou, platinado e luzes' },
    { id:'nevou-medio',   nome:'Platinado/Nevou · cabelo médio', descricao:'Do pente 2 ao pente 6. O corte vai de brinde.',            preco_centavos:18990, a_partir_de:false, duracao_min:40, categoria:'Nevou, platinado e luzes' },
    { id:'nevou-longo',   nome:'Platinado/Nevou · cabelo longo', descricao:'Acima do pente 6 ou tesoura. Descoloração profissional com produtos de primeira linha.', preco_centavos:20990, a_partir_de:true, duracao_min:40, categoria:'Nevou, platinado e luzes' },
    { id:'luzes',         nome:'Luzes (corte incluso)',          descricao:'Luzes platinadas e um corte de brinde.',                   preco_centavos:15000, a_partir_de:true,  duracao_min:40, categoria:'Nevou, platinado e luzes' },
    { id:'barboterapia',  nome:'Barboterapia',                   descricao:'Relaxamento e hidratação dos pelos e da pele do rosto: limpeza, esfoliação e toalha quente.', preco_centavos:3000, a_partir_de:false, duracao_min:10, categoria:'Extras' },
    { id:'choque',        nome:'Choque Disciplinador',           descricao:'Tratamento de choque para alinhamento dos fios.',          preco_centavos:5000,  a_partir_de:false, duracao_min:20, categoria:'Extras' },
    { id:'hidratacao',    nome:'Hidratação',                     descricao:'Hidronutrição para repor aminoácidos e nutrientes no cabelo.', preco_centavos:1500, a_partir_de:false, duracao_min:10, categoria:'Extras' },
    { id:'pigm-barba',    nome:'Pigmentação da barba',           descricao:'Tintura preta na barba.',                                  preco_centavos:2000,  a_partir_de:false, duracao_min:10, categoria:'Extras' },
    { id:'pigm-cabelo',   nome:'Pigmentação do cabelo',          descricao:'Tintura preta no cabelo.',                                 preco_centavos:2000,  a_partir_de:false, duracao_min:10, categoria:'Extras' },
    { id:'sobrancelha',   nome:'Sobrancelha',                    descricao:'Design simples da sobrancelha.',                           preco_centavos:1000,  a_partir_de:false, duracao_min:10, categoria:'Extras' }
  ]
};

window.TV.modoDemo = !(window.TV.supabaseUrl && window.TV.supabaseKey);
