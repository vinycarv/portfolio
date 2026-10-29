// Conteúdo centralizado. Troque textos, links e projetos aqui; o site inteiro se atualiza.

export const site = {
  name: 'Vinícius Carvalho',
  role: 'Editor · Filmmaker · Creative',
  tagline: 'Histórias que prendem a atenção.',
  intro:
    'Edito e filmo vídeos para marcas, artistas e criadores. Cada corte é pensado para o ritmo da história, do primeiro quadro ao último.',
  email: 'vinysilva1914@gmail.com',
  instagram: 'https://www.instagram.com/viny_carv',
  instagramHandle: '@viny_carv',
  // WhatsApp: +55 11 93536-0112
  whatsapp: 'https://wa.me/5511935360112?text=Oi%20Vin%C3%ADcius%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar',
  whatsappLabel: '+55 11 93536-0112',
  // Deixe vazio até ter um showreel real. Com vazio, o hero usa a composição autoral em 3D.
  showreelUrl: '',
};

// Estatísticas informadas por você (verificadas pelo titular).
export const stats = [
  { value: 6, prefix: '', suffix: '', label: 'anos de experiência' },
  { value: 700, prefix: '+', suffix: '', label: 'projetos entregues' },
  { value: 50, prefix: '+', suffix: '', label: 'clientes atendidos' },
];

// Projetos: espaços para você. Troque título, categoria, vídeo e capa quando tiver os arquivos.
// videoUrl: link direto de um .mp4 (o player do Drive não toca sozinho no hover).
export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  role: string;
  format: string;
  thumb: string; // caminho em /public/assets, ou vazio para a capa gerada
  videoUrl: string;
  externalUrl: string;
  tone: [string, string]; // cores da capa gerada enquanto não há miniatura
};

export const projects: Project[] = [
  {
    id: 'p1', number: '01', title: 'Projeto em breve', category: 'Categoria', year: '2026',
    description: 'Espaço reservado para o primeiro trabalho. Substitua por uma descrição real do projeto.',
    role: 'Edição, cor', format: '16:9', thumb: '', videoUrl: '', externalUrl: '',
    tone: ['#ff5a1f', '#1a0d07'],
  },
  {
    id: 'p2', number: '02', title: 'Projeto em breve', category: 'Categoria', year: '2026',
    description: 'Espaço reservado para o segundo trabalho.',
    role: 'Edição, motion', format: '9:16', thumb: '', videoUrl: '', externalUrl: '',
    tone: ['#ffb07a', '#0b0b0d'],
  },
  {
    id: 'p3', number: '03', title: 'Projeto em breve', category: 'Categoria', year: '2026',
    description: 'Espaço reservado para o terceiro trabalho.',
    role: 'Direção, edição', format: '16:9', thumb: '', videoUrl: '', externalUrl: '',
    tone: ['#c2410c', '#151517'],
  },
  {
    id: 'p4', number: '04', title: 'Projeto em breve', category: 'Categoria', year: '2026',
    description: 'Espaço reservado para o quarto trabalho.',
    role: 'Edição, color grading', format: '1:1', thumb: '', videoUrl: '', externalUrl: '',
    tone: ['#ff7a35', '#222225'],
  },
];

export const processSteps = [
  { id: 'roteiro', code: '00:00:00:00', title: 'Roteiro e decupagem', text: 'Antes de gravar, defino o que cada plano precisa dizer. Isso economiza horas de tela e deixa a edição mais limpa.' },
  { id: 'montagem', code: '00:00:21:08', title: 'Montagem e ritmo', text: 'Escolho os melhores takes, construo a narrativa e ajusto o ritmo para a emoção chegar no momento certo.' },
  { id: 'cor', code: '00:01:04:16', title: 'Cor, som e motion', text: 'Tratamento de cor, mixagem, motion graphics e legendas. É aqui que o vídeo ganha identidade.' },
  { id: 'entrega', code: '00:01:37:02', title: 'Entrega em todos os formatos', text: 'Versões para cinema, YouTube, Reels, TikTok e anúncios, cada uma com o corte e a legenda adequados.' },
];

// Serviços: confirme ou ajuste esta lista antes de publicar.
export const services = [
  'Edição de vídeo',
  'Captação audiovisual',
  'Motion design',
  'Direção criativa',
  'Color grading',
  'Conteúdo para redes sociais',
  'Vídeos institucionais',
];
