import { Product } from '../types';

const products: Product[] = [
  // Estimulantes de Energia
  {
    id: '1',
    name: 'Melzinho Árabe (Exotic Honey)',
    price: 87.00,
    originalPrice: 174.00,
    description: 'O Melzinho Árabe (Exotic Honey) é um potente estimulante natural desenvolvido a partir de uma antiga fórmula do Oriente Médio. Composto por mel puro enriquecido com extratos concentrados de ginseng, maca peruana, tribulus terrestris e outros afrodisíacos naturais. Sua consistência cremosa e dourada preserva todos os nutrientes bioativos em sua forma mais potente, sem adição de conservantes artificiais ou componentes sintéticos. Adultos devem consumir uma colher de chá (5g) diretamente na boca, deixando dissolver lentamente, ou diluído em 200ml de água morna ou chá (não fervente para preservar os princípios ativos). Recomenda-se o consumo pela manhã em jejum ou 30 minutos antes da atividade física ou íntima para maximizar os efeitos.',
    features: [
      'Proporciona explosão imediata de energia e disposição física por até 72 horas',
      'Potencializa a circulação sanguínea periférica e central',
      'Aumenta significativamente a libido e a resistência durante atividades íntimas',
      'Eleva os níveis de testosterona naturalmente sem efeitos colaterais',
      'Equilibra o sistema hormonal masculino e feminino',
      'Reduz a fadiga mental e melhora a concentração',
      'Fortalece o sistema imunológico graças aos compostos antioxidantes',
      '100% natural, sem contraindicações para adultos saudáveis'
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
    name: 'Rivosex',
    price: 59.90,
    originalPrice: 119.80,
    description: 'Rivosex Gel é um estimulante tópico de última geração, formulado com nanotecnologia para penetração transdérmica profunda. Sua composição exclusiva combina L-arginina concentrada, extrato de guaraná, ginkgo biloba e mentol natural em uma base de gel não-gordurosa que proporciona efeitos perceptíveis em minutos. O produto foi desenvolvido após anos de pesquisa para garantir máxima eficácia sem causar irritações ou efeitos colaterais indesejados. Aplicar uma pequena quantidade (equivalente a uma ervilha) nas áreas íntimas externas masculinas ou femininas, massageando gentilmente com movimentos circulares até completa absorção. Os primeiros efeitos são perceptíveis após 5-10 minutos, com intensidade máxima entre 15-30 minutos após aplicação.',
    features: [
      'Proporciona aumento imediato da sensibilidade local por até 4 horas',
      'Produz efeito triplo: aquecimento, formigamento e resfriamento sequenciais',
      'Intensifica as sensações durante o ato íntimo em até 300%',
      'Promove vasodilatação localizada que potencializa a experiência',
      'Fórmula dermatologicamente testada e hipoalergênica',
      'Compatível com todos os tipos de preservativos',
      'pH balanceado para não alterar a flora natural',
      'Textura ultraleve que não deixa resíduos ou manchas'
    ],
    availability: 'inStock',
    category: 'estimulantes',
    images: [
      'https://images.weserv.nl/?url=https://miess.vteximg.com.br/arquivos/ids/167217-900-900/SL059_1.jpg?v=637181026233800000&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 59.90 },
      { quantity: 2, price: 79.90 },
      { quantity: 3, price: 99.90 },
      { quantity: 5, price: 149.90 },
      { quantity: 10, price: 280.00 }
    ]
  },
  {
    id: '3',
    name: 'Gel Volumetrão',
    price: 87.00,
    originalPrice: 174.00,
    description: 'O Gel Volumetrão é uma fórmula revolucionária desenvolvida por especialistas em fisiologia masculina, que combina ativos vasodilatadores potentes como L-citrulina, Ginsenosídeos e extratos de Muira Puama em uma base de silicone médico. Esta tecnologia patenteada cria um efeito visual e sensorial imediato através de micro-expansão tecidual temporária. O produto passa por rigorosos testes de segurança e eficácia, garantindo resultados impressionantes sem comprometer a saúde. Com as mãos limpas, aplicar uma fina camada (aproximadamente 2-3ml) ao longo de toda a extensão do órgão genital masculino, massageando suavemente até completa absorção. Para melhores resultados, aplicar 20-30 minutos antes da atividade íntima.',
    features: [
      'Proporciona aumento visual temporário de até 30% em volume e 25% em comprimento',
      'Cria sensação térmica progressiva que estimula os receptores nervosos locais',
      'Aumenta o fluxo sanguíneo através de vasodilatação localizada por até 5 horas',
      'Proporciona maior firmeza e rigidez durante a ereção',
      'Fórmula não-gordurosa de absorção ultrarrápida (menos de 60 segundos)',
      'Desenvolvido com tecnologia anti-transpirante que mantém o efeito mesmo com transpiração',
      'Textura invisível após aplicação, não transfere para o parceiro',
      'Sem parabenos, ftalatos ou ingredientes potencialmente tóxicos'
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
    name: 'PIKASSO GEL',
    price: 97.00,
    originalPrice: 194.00,
    description: 'Pikasso Gel representa o ápice da biotecnologia aplicada ao prazer masculino. Sua fórmula exclusiva combinando peptídeos bioativos, niacina em alta concentração e extratos naturais de Catuaba e Marapuama foi desenvolvida após extensas pesquisas clínicas. O gel utiliza um sistema de liberação prolongada (SLP) que garante a distribuição gradual dos princípios ativos por até 8 horas, maximizando sua eficácia sem picos de intensidade desconfortáveis. Aplicar uma quantidade equivalente a uma moeda pequena (aproximadamente 1ml) na região genital masculina, com ênfase nas áreas mais sensíveis. Massagear em movimentos circulares por 30-60 segundos até completa absorção.',
    features: [
      'Provoca vasodilatação progressiva e controlada nas regiões íntimas',
      'Amplia a capacidade de percepção sensorial em até 400%',
      'Prolonga o tempo de atividade sexual em média 45 minutos',
      'Reduz o período refratário entre estímulos consecutivos',
      'Fórmula hipoalergênica testada dermatologicamente',
      'Compatível com todos os tipos de preservativos, incluindo látex e poliuretano',
      'Textura seca ao toque após absorção, não mancha roupas ou tecidos',
      'Contém antioxidantes que protegem as células contra radicais livres'
    ],
    availability: 'inStock',
    category: 'estimulantes',
    images: [
      'https://images.weserv.nl/?url=https://miess.vteximg.com.br/arquivos/ids/271658-900-900/PB357_1.jpg?v=637957406956400000&w=800&h=800&fit=inside&output=jpg&q=85'
    ],
    variants: [
      { quantity: 1, price: 97.00 },
      { quantity: 2, price: 137.00 },
      { quantity: 3, price: 177.00 },
      { quantity: 5, price: 237.00 }
    ]
  },
  // Saúde e Beleza
  {
    id: '5',
    name: 'Mounja Fit Black',
    price: 127.00,
    originalPrice: 254.00,
    description: 'Mounja Fit Black é um suplemento termogênico avançado desenvolvido após 5 anos de pesquisa nutricional, combinando 17 ingredientes ativos em sua formulação premium. Cada cápsula preta contém extrato padronizado de café verde (50% de ácido clorogênico), gengibre micronizado, pimenta preta (95% de piperina), chá verde concentrado e cromo quelato, encapsulados através de tecnologia de liberação progressiva que mantém níveis estáveis dos bioativos no organismo por até 12 horas. Ingerir 1 cápsula 30 minutos antes do café da manhã e 1 cápsula 30 minutos antes do almoço, sempre com 300ml de água filtrada.',
    features: [
      'Reduz o apetite em até 65% através da modulação de hormônios da saciedade',
      'Acelera o metabolismo basal em até 23% mesmo em períodos de descanso',
      'Potencializa a termogênese adaptativa, convertendo gordura branca em marrom',
      'Otimiza a sensibilidade à insulina, reduzindo picos glicêmicos',
      'Proporciona energia sustentada sem oscilações durante todo o dia',
      'Contém antioxidantes que combatem o estresse oxidativo celular',
      'Melhora a eficiência da digestão e absorção de nutrientes',
      'Auxilia na eliminação de líquidos retidos através de efeito diurético suave'
    ],
    availability: 'inStock',
    category: 'saude_beleza',
    images: [
      'https://images.weserv.nl/?url=https://i.pinimg.com/736x/e6/90/8a/e6908a935cbc561b8b859b3d0ebe9671.jpg&w=800&h=800&fit=inside&output=jpg&q=85'
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
    description: 'Lipo Extremo representa a vanguarda da suplementação termogênica, formulado com uma sinergia de 22 compostos bioativos em concentração clínica comprovada. Suas cápsulas vegetais contêm um complexo termogênico tríplice de guaraná amazônico (22% de cafeína natural), chá verde (98% de catequinas) e café verde (60% de ácido clorogênico), potencializados por L-carnitina, colina, cromo picolinato e canela de ceilão. Ingerir 1 cápsula ao despertar (em jejum) e 1 cápsula 30 minutos antes do treino ou 30 minutos antes do almoço nos dias sem exercício.',
    features: [
      'Aumenta a taxa metabólica em repouso em até 30% por até 8 horas após ingestão',
      'Promove lipólise acelerada, convertendo gordura armazenada em energia disponível',
      'Reduz picos de fome compulsiva através da estabilização dos níveis de glicose',
      'Potencializa a performance durante exercícios físicos em até 45%',
      'Melhora a capacidade de concentração e foco mental',
      'Estimula a produção de enzimas hepáticas que auxiliam na metabolização de gorduras',
      'Possui efeito termogênico que aumenta a temperatura corporal e gasto calórico',
      'Contém adaptógenos que reduzem os hormônios do estresse relacionados ao ganho de peso'
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
    description: 'MenoGold é um complexo fitoterápico premium desenvolvido exclusivamente para mulheres em fase de climatério e menopausa. Sua fórmula avançada combina isoflavonas de soja não-transgênica altamente padronizadas (40% de isoflavonas ativas), cálcio citrato-malato de alta biodisponibilidade, magnésio glicil-quelato, vitaminas D3, K2-MK7 e todo o complexo B em formas bioativas. Consumir 1 cápsula dourada durante o café da manhã e 1 cápsula durante o jantar, sempre com alimentos contendo alguma fonte de gordura para otimizar a absorção dos componentes lipossolúveis.',
    features: [
      'Reduz a intensidade e frequência das ondas de calor em até 83% após 45 dias',
      'Diminui os suores noturnos, melhorando a qualidade do sono REM em até 67%',
      'Equilibra naturalmente os níveis hormonais através de fitoestrógenos biocompatíveis',
      'Previne a perda de densidade óssea com sistema triplo de absorção de cálcio',
      'Estabiliza o humor, reduzindo irritabilidade e oscilações emocionais',
      'Melhora a hidratação das mucosas, incluindo tecidos vaginais',
      'Promove saúde cardiovascular através de antioxidantes específicos',
      'Apoia a função cognitiva e memória, frequentemente afetadas nesta fase'
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
    description: 'LovelyGummy representa uma revolução nos nutricosméticos, apresentada na forma de deliciosas gomas mastigáveis sabor frutas vermelhas. Cada goma contém uma formulação científica de peptídeos de colágeno hidrolisado de baixo peso molecular (2kDa) para máxima absorção, ácido hialurônico de alta concentração, biotina (vitamina B7) em dose clínica de 10.000mcg, zinco quelato, silício orgânico, vitaminas A, C, E e D3, MSM (metilsulfonilmetano) e extrato de bambu rico em sílica natural. Consumir 2 gomas diariamente, preferencialmente pela manhã, mastigando completamente antes de engolir para ativar as enzimas salivares que potencializam a absorção dos nutrientes.',
    features: [
      'Reduz a queda capilar em até 89% após 60 dias de uso contínuo',
      'Acelera o crescimento dos fios em até 27% mais rápido que o ciclo normal',
      'Aumenta a densidade capilar em até 30% após 90 dias',
      'Fortalece as unhas, reduzindo quebras e lascas em 78%',
      'Acelera o crescimento ungueal em até 40%',
      'Aumenta a hidratação cutânea em até 85% já nas primeiras duas semanas',
      'Reduz linhas finas e rugas em até 32% após 12 semanas',
      'Melhora a elasticidade da pele em até 61% após uso continuado',
      'Uniformiza o tom da pele e reduz manchas hiperpigmentadas'
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
    description: 'O Tônico MXD20 Barbudom representa o ápice da tecnologia capilar facial masculina, contendo uma formulação exclusiva com minoxidil estabilizado a 20% (o dobro da concentração convencional) em um sistema carreador nanossomado que potencializa a penetração folicular. Sua fórmula é enriquecida com fatores de crescimento peptídico, extrato de Piper nigrum para aumentar a biodisponibilidade local, Procapil® (complexo anti-DHT), óleo de rícino jamaicano, cafeína anidra, Redensyl® e D-pantenol. Aplicar 1ml (equivalente a 6-8 sprays) nas áreas faciais desejadas duas vezes ao dia, com intervalo de 12 horas entre aplicações.',
    features: [
      'Estimula o crescimento acelerado de pelos faciais em áreas com falhas',
      'Ativa folículos dormentes, convertendo velos em pelos terminais mais grossos',
      'Aumenta a densidade da barba em até 75% após 120 dias de uso contínuo',
      'Fortalece os folículos existentes, reduzindo a queda e afinamento',
      'Proporciona cobertura mais uniforme, preenchendo áreas desconexas',
      'Nutre a pele sob a barba, reduzindo ressecamento e descamação',
      'Combate diretamente o efeito da DHT, hormônio responsável pela miniaturização folicular',
      'Contém antioxidantes que protegem os folículos contra danos do estresse oxidativo'
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
    description: 'Cresce +Hair é um complexo nutricional avançado especificamente formulado para potencializar o crescimento e vitalidade capilar. Cada cápsula contém um blend científico de biotina (10.000mcg), zinco glicil-quelato, cisteína, metionina, silício orgânico, vitaminas do complexo B em formas bioativas (incluindo folato metilado e B12 metilcobalamina), MSM (metilsulfonilmetano), extrato de bambu padronizado, selênio quelato, vitamina D3 (5.000UI) e colágeno hidrolisado tipo I e III. Ingerir 2 cápsulas diariamente, sendo 1 cápsula pela manhã e 1 cápsula à noite, sempre junto às refeições principais que contenham alguma fonte de gordura para otimizar a absorção.',
    features: [
      'Acelera o crescimento dos fios em até 48% além da taxa natural mensal',
      'Reduz a queda capilar em mais de 85% em 60 dias de uso contínuo',
      'Aumenta o diâmetro dos fios em até 32%, proporcionando volume visível',
      'Revitaliza folículos capilares enfraquecidos, recuperando áreas com afinamento',
      'Intensifica o brilho natural através da melhoria da cutícula capilar',
      'Equilibra a produção sebácea do couro cabeludo',
      'Previne o envelhecimento prematuro dos folículos capilares',
      'Potencializa a ação da queratina endógena para maior resistência dos fios',
      'Proporciona proteção UV natural, reduzindo danos solares aos fios'
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