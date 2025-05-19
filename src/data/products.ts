import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Melzinho Árabe (Exotic Honey)',
    price: 87.00,
    originalPrice: 174.00,
    description: 'O Melzinho Árabe é um estimulante natural premium, inspirado em fórmulas ancestrais do Oriente Médio. Feito com mel puro de alta qualidade, enriquecido com: Ginseng (Panax ginseng) – aumenta disposição e combate fadiga. Maca Peruana – melhora resistência física e equilíbrio hormonal. Tribulus Terrestris – estimula a produção natural de testosterona. Outros extratos afrodisíacos (catuaba, damiana) para sinergia máxima. Dose única diária: 1 colher de chá (5 g). Pode ser tomado puro, deixando "derreter" na boca, ou diluído em 200 mL de água morna/ chá (não fervente). Melhor horário: pela manhã em jejum ou 30 min antes de atividade física ou íntima. Dica: manter hidratação e dieta equilibrada para maximizar resultados.',
    features: [
      'Energia prolongada: até 72 h de disposição física e mental',
      'Circulação otimizada: vasodilatação periférica e central',
      'Libido reforçada: intensifica desejo e performance íntima',
      'Equilíbrio hormonal: ação adaptogênica para homens e mulheres',
      'Foco e concentração: reduz cansaço mental',
      'Imunoproteção: antioxidantes que reforçam defesas naturais'
    ],
    availability: 'inStock',
    category: 'estimulantes',
    images: [
      'https://images.weserv.nl/?url=https://miess.vteximg.com.br/arquivos/ids/228302-900-900/SF6056_1.jpg?v=637624824218230000&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 2, price: 87.00 },
      { quantity: 4, price: 127.00 },
      { quantity: 6, price: 177.00 },
      { quantity: 10, price: 257.00 },
      { quantity: 20, price: 367.00 }
    ]
  },
  {
    id: '2',
    name: 'Rivosex Gel',
    price: 100.00,
    originalPrice: 200.00,
    description: 'Gel tópico inovador com nanotecnologia, que entrega ativos diretamente ao tecido para resposta rápida: L‑Arginina concentrada (vasodilatador). Extrato de Guaraná (estimulante). Ginkgo Biloba (microcirculação). Mentol Natural (efeito refrescante). Base não‑gordurosa e hipoalergênica. Aplique pequena quantidade (tamanho de ervilha) nas áreas íntimas externas. Massageie suavemente até completa absorção (5–10 min). Faça teste de sensibilidade 24 h antes (antebraço). Evite contato com olhos, boca e mucosas; lave as mãos após o uso.',
    features: [
      'Sensibilidade local elevada por até 4 h',
      'Efeito triplo: aquecimento inicial → formigamento → resfriamento',
      'Experiência intensificada: sensações até 300%',
      'Vasodilatação direcionada: aumenta fluxo sanguíneo',
      'Segurança dermatológica: testado, pH balanceado e compatível com preservativos'
    ],
    availability: 'inStock',
    category: 'estimulantes',
    images: [
      'https://images.weserv.nl/?url=https://miess.vteximg.com.br/arquivos/ids/167217-900-900/SL059_1.jpg?v=637181026233800000&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 100.00 },
      { quantity: 2, price: 130.00 },
      { quantity: 3, price: 170.00 },
      { quantity: 6, price: 197.00 },
      { quantity: 10, price: 280.00 }
    ]
  },
  {
    id: '3',
    name: 'Gel Volumetrão',
    price: 87.00,
    originalPrice: 174.00,
    description: 'Fórmula de silicone médico com ativos vasodilatadores e tecnologia micro‑expansiva: L‑Citrulina e Ginsenosídeos (vasodilatação). Extrato de Muira Puama (estimulante natural). Base de silicone de média viscosidade, sem óleo. Com as mãos limpas, aplique 2–3 mL ao longo do pênis. Massageie até completa absorção (15–20 s). Ideal 20–30 min antes da relação; efeito pleno em 15 min. Lavar a região após o uso; limite de 2 aplicações em 24 h.',
    features: [
      'Aumento visual temporário: +30% volume e +25% comprimento',
      'Sensação térmica progressiva e estimulante',
      'Fluxo sanguíneo maximizado por até 5 h',
      'Textura ultrarrápida: absorção < 60 s, sem resíduos',
      'Tecnologia anti‑transpiração: mantém efeito em atividade'
    ],
    availability: 'inStock',
    category: 'estimulantes',
    images: [
      'https://images.weserv.nl/?url=https://miess.vteximg.com.br/arquivos/ids/201334-900-900/SL096_1.jpg?v=637225537614470000&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 87.00 },
      { quantity: 2, price: 137.00 },
      { quantity: 3, price: 197.00 },
      { quantity: 5, price: 267.00 },
      { quantity: 12, price: 497.00 }
    ]
  },
  {
    id: '4',
    name: 'Progressiva Vegetal',
    price: 150.00,
    originalPrice: 300.00,
    description: 'A Progressiva Vegetal representa a revolução na química capilar, sendo o primeiro sistema de alisamento 100% livre de formol, parabenos e outros componentes agressivos. Desenvolvida após 7 anos de pesquisa em biotecnologia capilar, sua fórmula inovadora combina proteínas de quinoa hidrolisadas, óleos essenciais amazônicos, manteiga de karité orgânica, aminoácidos de trigo e complexo de ácidos frutais estabilizados (AHAs). O diferencial desta progressiva está em sua tecnologia de nano-ligações moleculares que reorganizam as fibras capilares sem romper as pontes de dissulfeto permanentemente, garantindo alisamento eficaz sem danificar a estrutura interna do fio. O sistema completo consiste em três etapas: shampoo antirresíduos, creme alisante e máscara selante. Pré-tratamento: Lave o cabelo 2-3 vezes com o shampoo antirresíduos. Não utilize condicionador. Seque completamente com secador em temperatura média. Aplicação: Com luvas, separe o cabelo em 4-6 seções. Aplique o creme alisante mecha a mecha (de aproximadamente 1cm) começando a 0,5cm da raiz até as pontas. Aguarde o tempo de pausa de acordo com a porosidade do cabelo: 40 minutos para cabelos finos, 50 minutos para cabelos médios e 60 minutos para cabelos grossos/resistentes. Não exceda o tempo recomendado.',
    features: [
      'Proporciona redução de volume e frizz em até 95% mesmo em cabelos extremamente crespos',
      'Alisa os fios mantendo movimento natural, sem efeito "cabelo de boneca"',
      'Preserva até 87% mais proteínas naturais do cabelo em comparação às progressivas convencionais',
      'Sela as cutículas danificadas, devolvendo brilho instantâneo aos fios',
      'Mantém a hidratação interna do fio através de complexo lipídico biomimético',
      'Contém filtro UV natural que previne desbotamento em cabelos coloridos',
      'Promove reconstrução progressiva, melhorando a saúde do cabelo a cada aplicação',
      'Efeito prolongado de até 5 meses, com redução gradual sem linha de crescimento demarcada',
      'Hipoalergênica, ideal para pessoas com sensibilidade ao couro cabeludo',
      'Perfume exclusivo de longa duração com notas de baunilha e âmbar'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://i.pinimg.com/736x/28/6c/48/286c48c347890aa130b49fcae03a68f2.jpg'
    ],
    variants: [
      { quantity: 1, price: 150.00 },
      { quantity: 2, price: 250.00 },
      { quantity: 3, price: 450.00 },
      { quantity: 6, price: 591.00 }
    ]
  },
  {
    id: '5',
    name: 'Mounja Fit Black',
    price: 127.00,
    originalPrice: 254.00,
    description: 'Suplemento termogênico slow‑release de alta performance: Café Verde (50% ácido clorogênico). Gengibre micronizado. Pimenta Preta (95% de piperina). Chá Verde concentrado. Cromo Quelato – melhora sensibilidade à insulina. 1 cápsula 30 min antes do café; 1 cápsula 30 min antes do almoço. Não tomar após 15 h (não prejudicar sono). Iniciar com 1 cápsula diária na 1ª semana; depois 2 diárias.',
    features: [
      'Supressão de apetite até 65%',
      'Aceleração do metabolismo basal em até 23%',
      'Termogênese adaptativa – queima de gordura branca',
      'Energia estável durante o dia',
      'Efeito antioxidante e diurético suave'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://i.pinimg.com/736x/bf/e7/71/bfe7719b246ae890ba2b19ccbaeda575.jpg'
    ],
    variants: [
      { quantity: 1, price: 127.00 },
      { quantity: 2, price: 189.00 },
      { quantity: 3, price: 247.00 },
      { quantity: 5, price: 367.00 },
      { quantity: 10, price: 897.00 },
      { quantity: 20, price: 967.00 },
      { quantity: 50, price: 1967.00 }
    ]
  },
  {
    id: '6',
    name: 'Lipo Extremo',
    price: 147.00,
    originalPrice: 294.00,
    description: 'Complexo termogênico triplo microencapsulado: Guaraná Amazônico (22% cafeína). Chá Verde (98% catequinas). Café Verde (60% ácido clorogênico). L‑Carnitina, Colina, Cromo Picolinato, Canela de Ceilão. 1 cápsula ao acordar (jejum) + 1 cápsula 30 min antes do treino/almoço. Consumir com ≥ 250 mL de água. Não tomar após 16 h. Ciclo de 60 dias de uso + 15 dias de pausa.',
    features: [
      'Metabolismo elevado +30% por até 8 h',
      'Lipólise acelerada – gordura → energia',
      'Controle de fome – picos glicêmicos estabilizados',
      'Aumento de performance em exercícios (+45%)',
      'Suporte hepático – enzimas facilitam degradação de lipídeos'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://logzz-s3.s3.us-east-2.amazonaws.com/uploads/files/products/20250310-194040prongx7m.png&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 147.00 },
      { quantity: 3, price: 277.00 }
    ]
  },
  {
    id: '7',
    name: 'MenoGold',
    price: 197.00,
    originalPrice: 394.00,
    description: 'Complexo fitoterápico para menopausa/climatério: Isoflavonas de Soja não-GMO (40% ativas). Cálcio Citrato‑Malato, Magnésio Glicil‑Quelato. Vitaminas D₃ / K₂-MK7, Complexo B bioativo. Extrato de Cimicífuga, Tribulus Terrestris (feminino), Óleo de Prímula, Ômega‑3 DHA. 1 cápsula no café + 1 no jantar, junto a gordura. Tratamento inicial: 90 dias contínuos; depois manutenção. Consulte ginecologista se histórico de câncer hormonodependente.',
    features: [
      'Ondas de calor – redução de até 83% após 45 d',
      'Suores noturnos – melhora do sono REM em 67%',
      'Equilíbrio hormonal via fitoestrógenos',
      'Saúde óssea – tripla via de absorção de cálcio',
      'Bem‑estar emocional e cognitivo'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://menogold.com.br/wp-content/uploads/2024/12/Potes-1024x846-1.webp&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 197.00 },
      { quantity: 3, price: 297.00 },
      { quantity: 5, price: 397.00 }
    ]
  },
  {
    id: '8',
    name: 'LovelyGummy Cabelo Pele E unha',
    price: 149.99,
    originalPrice: 299.98,
    description: 'Gomas mastigáveis nutricosméticas sabor frutas vermelhas: Colágeno Hidrolisado (2 kDa). Ácido Hialurônico, Biotina (10 000 mcg). Zinco Quelato, Silício Orgânico, Vitaminas A, C, E, D₃, MSM, Extrato de Bambu. 2 gomas/dia (manhã e noite), mastigar bem. Manter ≥ 2 L de água/dia. Ciclo mínimo de 90 dias para resultados completos.',
    features: [
      'Queda capilar – redução de até 89% em 60 d',
      'Crescimento de fios +27% vs ciclo normal',
      'Unhas – +40% de crescimento e força',
      'Pele – +85% de hidratação e –32% de rugas em 12 sem',
      'Elasticidade e uniformização do tom'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://i.pinimg.com/736x/06/72/d6/0672d645b6c90d8ba1222101b2f19c0f.jpg&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 149.99 },
      { quantity: 2, price: 199.99 },
      { quantity: 3, price: 289.99 },
      { quantity: 5, price: 399.99 }
    ]
  },
  {
    id: '9',
    name: 'TONICO MXD20 BARBUDOM',
    price: 97.00,
    originalPrice: 194.00,
    description: 'Minoxidil 20% nanoencapsulado para barba: Minoxidil estabilizado em 20%. Fatores de Crescimento Peptídico, Procapil® (anti‑DHT). Óleo de Rícino Jamaicano, Cafeína Anidra, Redensyl®, D-Pantenol. 1 mL (6–8 sprays) duas vezes/dia, com 12 h de intervalo. Massagear suavemente; não lavar por 4 h. Teste de sensibilidade 24 h antes; consulte dermatologista se hipertensão.',
    features: [
      'Ativação folicular – converte pelos finos em terminais',
      'Densidade – até +75% em 120 d',
      'Fortalecimento e redução da queda',
      'Nutrição da pele sob a barba',
      'Proteção contra estresse oxidativo'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://pagueaoreceber.com.br/wp-content/uploads/2025/05/TONICO-MXD20-BARBUDOM-30ML.png&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 97.00 },
      { quantity: 2, price: 167.00 },
      { quantity: 3, price: 237.00 },
      { quantity: 5, price: 349.00 },
      { quantity: 10, price: 497.00 },
      { quantity: 15, price: 747.00 },
      { quantity: 20, price: 897.00 }
    ]
  },
  {
    id: '10',
    name: 'Cresce +hair',
    price: 97.00,
    originalPrice: 194.00,
    description: 'Suplemento capilar de liberação controlada: Biotina (10 000 mcg), Zinco Quelato, Cisteína, Metionina, Silício Orgânico. Vitaminas do Complexo B (folato metilado, B₁₂), MSM, Extrato de Bambu, Selênio, Vitamina D₃, Colágeno Tipo I/III. 2 cápsulas/dia (manhã e noite) com refeições contendo gordura. Ingestão de ≥ 2,5 L de água/dia. Ciclo 90–120 dias para resultados máximos; associar a cuidados tópicos.',
    features: [
      'Crescimento +48% vs taxa natural',
      'Queda –85% em 60 d',
      'Espessura dos fios +32%',
      'Revitalização de folículos enfraquecidos',
      'Proteção UV natural e ação anti‑envelhecimento'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://i.pinimg.com/736x/42/b3/41/42b341d07aaa99a577980a0dfa18eb13.jpg',
      'https://i.pinimg.com/736x/27/77/4d/27774ddbd1f52dec2377f4b4b03f2b51.jpg',
      'https://i.pinimg.com/736x/ad/cd/ab/adcdab755d83db3fb79e3c2da8ede69b.jpg',
      'https://i.pinimg.com/736x/ca/cd/7e/cacd7ea7469ef867db06d3c49342d029.jpg'
    ],
    variants: [
      { quantity: 1, price: 97.00 },
      { quantity: 2, price: 127.00 },
      { quantity: 3, price: 197.00 },
      { quantity: 6, price: 397.00 },
      { quantity: 12, price: 627.00 }
    ]
  }
];

export const getProductById = (id: string): Promise<Product> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Produto não encontrado'));
      }
    }, 500);
  });
};

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};