// Conteúdo das páginas de cada projeto. Use só fatos verificáveis: Modrinth, READMEs e os sites dos projetos.
const windowsScripts = [
  ['sync-clock.bat', 'Relógio fora de hora: força a sincronização com servidores NTP', 'System clock out of sync: forces synchronization with NTP servers', 'Reloj desincronizado: fuerza la sincronización con servidores NTP', true],
  ['reset-clock.bat', 'Problemas persistentes no relógio: redefine o serviço de horário do Windows', 'Persistent clock problems: fully resets the Windows Time Service', 'Problemas persistentes de hora: restablece el servicio de hora de Windows', true],
  ['restart-explorer.bat', 'Barra de tarefas ou área de trabalho travada: reinicia o Windows Explorer', 'Frozen taskbar or desktop: restarts Windows Explorer', 'Barra de tareas o escritorio congelado: reinicia el Explorador de Windows', false],
  ['flush-dns.bat', 'Sites que não carregam: limpa o cache de DNS', 'Websites not loading: clears the DNS cache', 'Sitios que no cargan: limpia la caché de DNS', true],
  ['reset-network.bat', '“Conectado, mas sem internet”: renova o IP e redefine Winsock e TCP/IP', '“Connected but no internet”: renews the IP and resets Winsock and TCP/IP', '“Conectado, pero sin internet”: renueva la IP y restablece Winsock y TCP/IP', true],
  ['fix-audio.bat', 'Som parou de funcionar: reinicia o serviço de áudio do Windows', 'Sound stopped working: restarts the Windows Audio service', 'El sonido dejó de funcionar: reinicia el servicio de audio de Windows', true],
  ['reset-print-spooler.bat', 'Impressão presa na fila: limpa os trabalhos e reinicia o spooler', 'Print job stuck in the queue: clears jobs and restarts the spooler', 'Impresión atascada en la cola: limpia los trabajos y reinicia el spooler', true],
  ['fix-windows-update.bat', 'Windows Update travado: redefine componentes e caches de atualização', 'Windows Update stuck: resets update components and caches', 'Windows Update bloqueado: restablece componentes y cachés de actualización', true],
  ['clean-temp.bat', 'Disco quase cheio: apaga arquivos temporários do usuário e do Windows', 'Disk running out of space: deletes user and Windows temp files', 'Disco casi lleno: elimina archivos temporales del usuario y de Windows', true],
  ['clear-icon-cache.bat', 'Ícones em branco ou errados: reconstrói o cache de ícones', 'Blank or wrong desktop icons: rebuilds the icon cache', 'Iconos en blanco o incorrectos: reconstruye la caché de iconos', false],
  ['create-restore-point.bat', 'Antes de mudar o sistema: cria um ponto de restauração', 'Before system changes: creates a System Restore point', 'Antes de cambiar el sistema: crea un punto de restauración', true],
  ['disable-hibernation.bat', 'Liberar vários GB no disco do sistema: desativa a hibernação e remove o hiberfil.sys', 'Free several GB on the system drive: disables hibernation and removes hiberfil.sys', 'Liberar varios GB en el disco del sistema: desactiva la hibernación y elimina hiberfil.sys', true],
  ['check-disk.bat', 'Suspeita de erro no disco: verifica a unidade e pode agendar um chkdsk completo', 'Suspected disk errors: scans the drive and can schedule a full chkdsk', 'Sospecha de errores de disco: analiza la unidad y puede programar un chkdsk completo', true]
];
const scriptRows = index => windowsScripts.map(row => [`<code>${row[0]}</code>`, row[index], row[4] ? (index === 1 ? 'Sim' : index === 2 ? 'Yes' : 'Sí') : (index === 1 ? 'Não' : 'No')]);

export const projects = {
  squood: {
    slug: 'squood', related: ['luable', 'gamium', 'ponteiroStudio'],
    schema: { '@type': 'WebApplication', applicationCategory: 'SocialNetworkingApplication', operatingSystem: 'Web', url: 'https://squood.com' },
    'pt-BR': {
      seoTitle: 'Squood — Estudo de caso de rede social de comunidades',
      seoDesc: 'Como o Squood foi pensado: uma rede social de comunidades, posts e conversas com privacidade como princípio. Estudo de caso de Adeilson Siqueira.',
      h1: 'Squood: uma rede social de comunidades com privacidade como princípio',
      facts: [['Papel', 'Fundador e engenheiro de produto'], ['Categoria', 'Rede social / comunidades'], ['Plataforma', 'Web'], ['Ano', '2026']],
      sections: [
        { h: 'O problema', p: 'Boa parte das redes sociais trata atenção e dados como produto. O Squood parte da direção oposta: reunir comunidades, posts e conversas em um lugar com menos ruído, mais autonomia e regras que fazem sentido para quem participa.' },
        { h: 'O que o produto oferece', list: ['Comunidades organizadas por interesse', 'Publicações e acompanhamento dos temas que importam', 'Conversas diretas com outras pessoas', 'Moderação transparente, com regras claras'] },
        { h: 'Engenharia de produto', p: 'O trabalho atravessa arquitetura e experiência: cada decisão técnica é avaliada pelo efeito que tem em quem usa. O produto segue em refinamento e estabilização, guiado por feedback real.' }
      ]
    },
    en: {
      seoTitle: 'Squood Case Study — Community Social Platform',
      seoDesc: 'How Squood was designed: a social platform for communities, posts and conversations, with privacy as a principle. A case study by Adeilson Siqueira.',
      h1: 'Squood: a community social platform built with privacy as a principle',
      facts: [['Role', 'Founder and product engineer'], ['Category', 'Social platform / communities'], ['Platform', 'Web'], ['Year', '2026']],
      sections: [
        { h: 'The problem', p: 'Many social networks treat attention and data as the product. Squood goes the other way: it brings communities, posts, and conversations together with less noise, more autonomy, and rules that make sense to the people taking part.' },
        { h: 'What the product offers', list: ['Communities organized around interests', 'Posts and following the topics that matter', 'Direct conversations with other people', 'Transparent moderation with clear rules'] },
        { h: 'Product engineering', p: 'The work spans architecture and experience: every technical decision is weighed by its effect on the people using it. The product keeps being refined and stabilized through real feedback.' }
      ]
    },
    es: {
      seoTitle: 'Squood — Caso de estudio de red social de comunidades',
      seoDesc: 'Cómo se pensó Squood: una red social de comunidades, publicaciones y conversaciones con la privacidad como principio. Caso de estudio de Adeilson Siqueira.',
      h1: 'Squood: una red social de comunidades con la privacidad como principio',
      facts: [['Rol', 'Fundador e ingeniero de producto'], ['Categoría', 'Red social / comunidades'], ['Plataforma', 'Web'], ['Año', '2026']],
      sections: [
        { h: 'El problema', p: 'Muchas redes sociales tratan la atención y los datos como producto. Squood va en sentido contrario: reúne comunidades, publicaciones y conversaciones con menos ruido, más autonomía y reglas que tienen sentido para quienes participan.' },
        { h: 'Qué ofrece el producto', list: ['Comunidades organizadas por intereses', 'Publicaciones y seguimiento de los temas que importan', 'Conversaciones directas con otras personas', 'Moderación transparente, con reglas claras'] },
        { h: 'Ingeniería de producto', p: 'El trabajo abarca arquitectura y experiencia: cada decisión técnica se evalúa por su efecto en quienes usan el producto. Squood sigue en refinamiento y estabilización, guiado por comentarios reales.' }
      ]
    }
  },

  gamium: {
    slug: 'gamium', related: ['squood', 'scripts', 'luable'],
    schema: { '@type': 'SoftwareApplication', applicationCategory: 'CommunicationApplication', operatingSystem: 'Windows, Linux, macOS', url: 'https://github.com/siqueiraadeilson/gamium' },
    'pt-BR': {
      seoTitle: 'Gamium — Chat P2P descentralizado e criptografado',
      seoDesc: 'Gamium é um app de chat P2P sem servidor central: DMs criptografadas, servidores, voz e tela. Feito com Electron, React, Gun.js e WebRTC.',
      h1: 'Gamium: chat descentralizado, criptografado e P2P',
      facts: [['Tipo', 'Aplicativo desktop'], ['Sistemas', 'Windows, Linux e macOS'], ['Stack', 'Electron, React, TypeScript, Vite, Gun.js, WebRTC, Zustand'], ['Linguagem', 'TypeScript']],
      sections: [
        { h: 'Comunicação sem servidor central', p: 'O Gamium usa Gun.js para a comunicação peer-to-peer e WebRTC para voz e compartilhamento de tela. Não há servidor central guardando as conversas: a identidade é baseada em chaves criptográficas e as mensagens têm criptografia de ponta a ponta.' },
        { h: 'Funcionalidades', list: ['Mensagens diretas com criptografia ECDH', 'Servidores públicos ou privados com múltiplos canais', 'Grupos, sistema de amigos e status online', 'Canais de voz e compartilhamento de tela', 'Janela sem moldura, tema escuro e minimização para a bandeja'] },
        { h: 'Recuperação de conta sem servidor', p: 'Sem servidor, não existe “esqueci minha senha”. A solução é uma frase de recuperação de 12 palavras no padrão BIP39, gerada na criação da conta, que restaura o acesso em outro dispositivo.' },
        { h: 'Instalação', steps: ['Baixe o instalador da sua plataforma na página de releases do GitHub', 'No Windows, execute o instalador; no Linux, use o AppImage ou o pacote .deb; no macOS, abra o .dmg', 'Crie sua conta e guarde a frase de recuperação em um lugar seguro'] }
      ]
    },
    en: {
      seoTitle: 'Gamium — Decentralized, Encrypted P2P Chat App',
      seoDesc: 'Gamium is a P2P chat app with no central server: encrypted DMs, servers, voice and screen sharing. Built with Electron, React, Gun.js and WebRTC.',
      h1: 'Gamium: a decentralized, encrypted P2P chat app',
      facts: [['Type', 'Desktop app'], ['Systems', 'Windows, Linux, and macOS'], ['Stack', 'Electron, React, TypeScript, Vite, Gun.js, WebRTC, Zustand'], ['Language', 'TypeScript']],
      sections: [
        { h: 'Communication without a central server', p: 'Gamium uses Gun.js for peer-to-peer communication and WebRTC for voice and screen sharing. No central server stores conversations: identity is based on cryptographic keys, and messages are end-to-end encrypted.' },
        { h: 'Features', list: ['Direct messages with ECDH encryption', 'Public or private servers with multiple channels', 'Groups, a friends system, and online status', 'Voice channels and screen sharing', 'Frameless window, dark theme, and minimize to tray'] },
        { h: 'Account recovery without a server', p: 'With no server, there is no “forgot my password”. The answer is a 12-word BIP39 recovery phrase, generated when the account is created, which restores access on another device.' },
        { h: 'Installation', steps: ['Download the installer for your platform from the GitHub releases page', 'On Windows, run the installer; on Linux, use the AppImage or .deb package; on macOS, open the .dmg', 'Create your account and store the recovery phrase somewhere safe'] }
      ]
    },
    es: {
      seoTitle: 'Gamium — Chat P2P descentralizado y cifrado',
      seoDesc: 'Gamium es una app de chat P2P sin servidor central: DMs cifrados, servidores, voz y pantalla compartida. Hecha con Electron, React, Gun.js y WebRTC.',
      h1: 'Gamium: chat descentralizado, cifrado y P2P',
      facts: [['Tipo', 'Aplicación de escritorio'], ['Sistemas', 'Windows, Linux y macOS'], ['Stack', 'Electron, React, TypeScript, Vite, Gun.js, WebRTC, Zustand'], ['Lenguaje', 'TypeScript']],
      sections: [
        { h: 'Comunicación sin servidor central', p: 'Gamium usa Gun.js para la comunicación peer-to-peer y WebRTC para la voz y la pantalla compartida. Ningún servidor central guarda las conversaciones: la identidad se basa en claves criptográficas y los mensajes tienen cifrado de extremo a extremo.' },
        { h: 'Funciones', list: ['Mensajes directos con cifrado ECDH', 'Servidores públicos o privados con varios canales', 'Grupos, sistema de amigos y estado en línea', 'Canales de voz y pantalla compartida', 'Ventana sin marco, tema oscuro y minimizar a la bandeja'] },
        { h: 'Recuperación de cuenta sin servidor', p: 'Sin servidor no existe “olvidé mi contraseña”. La solución es una frase de recuperación de 12 palabras con el estándar BIP39, generada al crear la cuenta, que restaura el acceso en otro dispositivo.' },
        { h: 'Instalación', steps: ['Descarga el instalador de tu plataforma en la página de releases de GitHub', 'En Windows, ejecuta el instalador; en Linux, usa el AppImage o el paquete .deb; en macOS, abre el .dmg', 'Crea tu cuenta y guarda la frase de recuperación en un lugar seguro'] }
      ]
    }
  },

  mods: {
    slug: 'auto-best-enchantments', related: ['librarian', 'roblox', 'scripts'],
    schema: { '@type': 'SoftwareApplication', applicationCategory: 'GameApplication', operatingSystem: 'Minecraft (Fabric)', url: 'https://modrinth.com/mod/auto-best-enchantments' },
    'pt-BR': {
      seoTitle: 'Auto Best Enchantments — Mod de bibliotecário automático',
      seoDesc: 'Mod de Minecraft (Fabric) que quebra e recoloca o atril sozinho até o aldeão bibliotecário oferecer o encantamento e o preço que você quer.',
      h1: 'Auto Best Enchantments: mod de bibliotecário automático para Minecraft',
      facts: [['Loader', 'Fabric'], ['Minecraft', '26.1.2, 26.2 e 26.3'], ['Ambiente', 'Client-side'], ['Downloads', 'Mais de 2,6 mil no Modrinth']],
      sections: [
        { h: 'Como conseguir o encantamento certo sem resetar o aldeão na mão', p: 'Conseguir um livro de Mending barato pode levar horas quebrando e recolocando o atril. O Auto Best Enchantments automatiza esse ciclo: você define o que procura, olha para o atril e o mod repete o processo até o aldeão bibliotecário oferecer a troca desejada.' },
        { h: 'Como usar', steps: ['Adicione metas com <code>/autolec add</code>, informando encantamento, nível e preço', 'Olhe diretamente para o atril e rode <code>/autolec start</code>', 'Pare quando quiser com <code>/autolec stop</code> e confira as metas com <code>/autolec list</code>'] },
        { h: 'Exemplos de comandos', code: [['/autolec add minecraft:mending max min', 'Mending no nível máximo pelo menor preço'], ['/autolec add minecraft:sharpness 5 5 any', 'Sharpness V a qualquer preço'], ['/autolec add minecraft:unbreaking any 10 32', 'Unbreaking de qualquer nível entre 10 e 32 esmeraldas']] },
        { h: 'Configuração recomendada', list: ['Machado na mão principal e vários atris na mão secundária', 'Aldeão preso no lugar, com o atril fácil de mirar', '<code>/autolec autoTrade</code> para comprar automaticamente ao encontrar a troca', '<code>/autolec preserveTool</code> para parar antes de a ferramenta quebrar'] }
      ]
    },
    en: {
      seoTitle: 'Auto Best Enchantments — Auto Librarian Minecraft Mod',
      seoDesc: 'Fabric mod for Minecraft that breaks and replaces the lectern for you until the librarian villager offers the enchantment and price you want.',
      h1: 'Auto Best Enchantments: an auto librarian mod for Minecraft',
      facts: [['Loader', 'Fabric'], ['Minecraft', '26.1.2, 26.2, and 26.3'], ['Environment', 'Client-side'], ['Downloads', 'Over 2.6k on Modrinth']],
      sections: [
        { h: 'How to get the right enchantment without rerolling villagers by hand', p: 'Getting a cheap Mending book can take hours of breaking and replacing a lectern. Auto Best Enchantments automates that loop: set what you are looking for, look at the lectern, and the mod repeats the process until the librarian villager offers the trade you want.' },
        { h: 'How to use it', steps: ['Add goals with <code>/autolec add</code>, setting the enchantment, level, and price', 'Look directly at the lectern and run <code>/autolec start</code>', 'Stop at any time with <code>/autolec stop</code> and review goals with <code>/autolec list</code>'] },
        { h: 'Command examples', code: [['/autolec add minecraft:mending max min', 'Mending at max level for the lowest price'], ['/autolec add minecraft:sharpness 5 5 any', 'Sharpness V at any price'], ['/autolec add minecraft:unbreaking any 10 32', 'Any level of Unbreaking between 10 and 32 emeralds']] },
        { h: 'Recommended setup', list: ['Axe in your main hand and several lecterns in your offhand', 'Villager locked in place, with the lectern easy to target', '<code>/autolec autoTrade</code> to buy automatically when the trade appears', '<code>/autolec preserveTool</code> to stop before your tool breaks'] }
      ]
    },
    es: {
      seoTitle: 'Auto Best Enchantments — Mod de bibliotecario automático',
      seoDesc: 'Mod de Minecraft (Fabric) que rompe y recoloca el atril por ti hasta que el aldeano bibliotecario ofrezca el encantamiento y el precio que quieres.',
      h1: 'Auto Best Enchantments: mod de bibliotecario automático para Minecraft',
      facts: [['Loader', 'Fabric'], ['Minecraft', '26.1.2, 26.2 y 26.3'], ['Entorno', 'Client-side'], ['Descargas', 'Más de 2,6 mil en Modrinth']],
      sections: [
        { h: 'Cómo conseguir el encantamiento correcto sin reiniciar al aldeano a mano', p: 'Conseguir un libro de Mending barato puede llevar horas rompiendo y recolocando el atril. Auto Best Enchantments automatiza ese ciclo: defines lo que buscas, miras al atril y el mod repite el proceso hasta que el aldeano bibliotecario ofrece el trato que quieres.' },
        { h: 'Cómo usarlo', steps: ['Añade objetivos con <code>/autolec add</code>, indicando encantamiento, nivel y precio', 'Mira directamente al atril y ejecuta <code>/autolec start</code>', 'Detén cuando quieras con <code>/autolec stop</code> y revisa los objetivos con <code>/autolec list</code>'] },
        { h: 'Ejemplos de comandos', code: [['/autolec add minecraft:mending max min', 'Mending al nivel máximo por el menor precio'], ['/autolec add minecraft:sharpness 5 5 any', 'Sharpness V a cualquier precio'], ['/autolec add minecraft:unbreaking any 10 32', 'Unbreaking de cualquier nivel entre 10 y 32 esmeraldas']] },
        { h: 'Configuración recomendada', list: ['Hacha en la mano principal y varios atriles en la secundaria', 'Aldeano fijo en su lugar, con el atril fácil de apuntar', '<code>/autolec autoTrade</code> para comprar automáticamente al encontrar el trato', '<code>/autolec preserveTool</code> para detenerse antes de que la herramienta se rompa'] }
      ]
    }
  },

  librarian: {
    slug: 'librarian-books-preview', related: ['mods', 'roblox', 'scripts'],
    schema: { '@type': 'SoftwareApplication', applicationCategory: 'GameApplication', operatingSystem: 'Minecraft (Fabric)', url: 'https://modrinth.com/mod/librarian-books-preview', license: 'https://spdx.org/licenses/MIT.html' },
    'pt-BR': {
      seoTitle: 'Librarian Books Preview — Ver trocas do bibliotecário',
      seoDesc: 'Mod de Minecraft (Fabric) que mostra os livros encantados do aldeão bibliotecário e o preço em esmeraldas, só de mirar, sem abrir a tela de troca.',
      h1: 'Librarian Books Preview: veja as trocas do bibliotecário sem abrir a interface',
      facts: [['Loader', 'Fabric (requer Fabric API)'], ['Minecraft', '1.21.11 até 26.3'], ['Ambiente', 'Cliente e servidor opcionais'], ['Licença', 'MIT'], ['Downloads', 'Mais de 2,2 mil no Modrinth']],
      sections: [
        { h: 'O que o mod mostra', p: 'Ao mirar em um aldeão bibliotecário, um HUD discreto exibe até três trocas de livros encantados, com o nome no idioma do seu jogo e o custo real em esmeraldas. Tudo em tempo real, sem clicar no aldeão.' },
        { h: 'Como instalar', steps: ['Instale o Fabric Loader na sua versão do Minecraft', 'Instale a Fabric API', 'Coloque o arquivo .jar do mod na pasta <code>mods</code>', 'Abra o jogo com o perfil do Fabric'] },
        { h: 'Como usar', p: 'Encontre um aldeão bibliotecário e aponte a mira para ele. Os livros disponíveis e os preços aparecem na tela, com ícones de livro e esmeralda.' }
      ]
    },
    en: {
      seoTitle: 'Librarian Books Preview — See Villager Book Trades',
      seoDesc: 'Fabric mod for Minecraft that shows a librarian villager’s enchanted books and emerald prices just by aiming at them, without opening the trade screen.',
      h1: 'Librarian Books Preview: see librarian trades without opening the interface',
      facts: [['Loader', 'Fabric (requires Fabric API)'], ['Minecraft', '1.21.11 through 26.3'], ['Environment', 'Optional on client and server'], ['License', 'MIT'], ['Downloads', 'Over 2.2k on Modrinth']],
      sections: [
        { h: 'What the mod shows', p: 'Aim at a librarian villager and a discreet HUD displays up to three enchanted book trades, with names in your game language and the real emerald cost. Everything updates in real time, with no need to click the villager.' },
        { h: 'How to install', steps: ['Install Fabric Loader for your Minecraft version', 'Install Fabric API', 'Put the mod .jar file in your <code>mods</code> folder', 'Launch the game with the Fabric profile'] },
        { h: 'How to use it', p: 'Find a librarian villager and point your crosshair at them. Available books and prices appear on screen, with book and emerald icons.' }
      ]
    },
    es: {
      seoTitle: 'Librarian Books Preview — Ver tratos del bibliotecario',
      seoDesc: 'Mod de Minecraft (Fabric) que muestra los libros encantados del aldeano bibliotecario y su precio en esmeraldas con solo apuntar, sin abrir la pantalla de comercio.',
      h1: 'Librarian Books Preview: mira los tratos del bibliotecario sin abrir la interfaz',
      facts: [['Loader', 'Fabric (requiere Fabric API)'], ['Minecraft', '1.21.11 a 26.3'], ['Entorno', 'Opcional en cliente y servidor'], ['Licencia', 'MIT'], ['Descargas', 'Más de 2,2 mil en Modrinth']],
      sections: [
        { h: 'Qué muestra el mod', p: 'Al apuntar a un aldeano bibliotecario, un HUD discreto muestra hasta tres tratos de libros encantados, con el nombre en el idioma de tu juego y el coste real en esmeraldas. Todo en tiempo real, sin hacer clic en el aldeano.' },
        { h: 'Cómo instalar', steps: ['Instala Fabric Loader para tu versión de Minecraft', 'Instala Fabric API', 'Coloca el archivo .jar del mod en la carpeta <code>mods</code>', 'Abre el juego con el perfil de Fabric'] },
        { h: 'Cómo usarlo', p: 'Busca un aldeano bibliotecario y apúntale con la mira. Los libros disponibles y sus precios aparecen en pantalla, con iconos de libro y esmeralda.' }
      ]
    }
  },

  roblox: {
    slug: 'steal-mutant-pet', related: ['luable', 'mods', 'librarian'],
    schema: { '@type': 'VideoGame', url: 'https://www.roblox.com/pt/games/110802570526231/Steal-Mutant-Pet', image: 'https://siqueiraadeilson.github.io/assets/roblox/steal-mutant-pet-thumb.webp', gamePlatform: ['PC', 'Console', 'Mobile', 'Tablet'], genre: ['Simulation', 'Tycoon'], playMode: 'MultiPlayer' },
    'pt-BR': {
      seoTitle: 'Steal Mutant Pet — Jogo tycoon multijogador no Roblox',
      seoDesc: 'Steal Mutant Pet é um tycoon multijogador no Roblox: compre e roube ovos, descubra mutações e construa seu império de pets mutantes. Em beta.',
      h1: 'Steal Mutant Pet: tycoon multijogador de pets mutantes no Roblox',
      facts: [['Plataforma', 'Roblox'], ['Gênero', 'Simulação / Tycoon'], ['Dispositivos', 'PC, console, celular e tablet'], ['Jogadores', 'Servidores de até 6'], ['Status', 'Beta']],
      sections: [
        { h: 'Como funciona o jogo', p: 'Você começa comprando ovos e descobrindo o que nasce deles. Cada mutação rende pets mais raros, e os pets constroem o seu império. Só que os outros jogadores do servidor querem o mesmo, então roubar e defender faz parte do jogo.' },
        { h: 'O ciclo principal', steps: ['Compre ovos ou roube-os de outros jogadores', 'Descubra mutações e colecione pets raros', 'Faça seu império crescer enquanto protege o que já conquistou'] },
        { h: 'Beta ativo', p: 'O jogo está em beta e evolui com o feedback dos jogadores.' }
      ]
    },
    en: {
      seoTitle: 'Steal Mutant Pet — Multiplayer Roblox Tycoon Game',
      seoDesc: 'Steal Mutant Pet is a multiplayer Roblox tycoon: buy and steal eggs, discover mutations, and build your mutant pet empire. Now in beta.',
      h1: 'Steal Mutant Pet: a multiplayer mutant pet tycoon on Roblox',
      facts: [['Platform', 'Roblox'], ['Genre', 'Simulation / Tycoon'], ['Devices', 'PC, console, mobile, and tablet'], ['Players', 'Servers of up to 6'], ['Status', 'Beta']],
      sections: [
        { h: 'How the game works', p: 'You start by buying eggs and finding out what hatches. Each mutation brings rarer pets, and those pets build your empire. The other players on the server want the same thing, so stealing and defending are part of the game.' },
        { h: 'The core loop', steps: ['Buy eggs or steal them from other players', 'Discover mutations and collect rare pets', 'Grow your empire while protecting what you have earned'] },
        { h: 'Active beta', p: 'The game is in beta and evolves with player feedback.' }
      ]
    },
    es: {
      seoTitle: 'Steal Mutant Pet — Juego tycoon multijugador en Roblox',
      seoDesc: 'Steal Mutant Pet es un tycoon multijugador en Roblox: compra y roba huevos, descubre mutaciones y construye tu imperio de mascotas mutantes. En beta.',
      h1: 'Steal Mutant Pet: tycoon multijugador de mascotas mutantes en Roblox',
      facts: [['Plataforma', 'Roblox'], ['Género', 'Simulación / Tycoon'], ['Dispositivos', 'PC, consola, móvil y tablet'], ['Jugadores', 'Servidores de hasta 6'], ['Estado', 'Beta']],
      sections: [
        { h: 'Cómo funciona el juego', p: 'Empiezas comprando huevos y descubriendo qué nace de ellos. Cada mutación trae mascotas más raras, y esas mascotas construyen tu imperio. Los demás jugadores del servidor quieren lo mismo, así que robar y defender forma parte del juego.' },
        { h: 'El ciclo principal', steps: ['Compra huevos o róbalos a otros jugadores', 'Descubre mutaciones y colecciona mascotas raras', 'Haz crecer tu imperio mientras proteges lo que has conseguido'] },
        { h: 'Beta activa', p: 'El juego está en beta y evoluciona con los comentarios de los jugadores.' }
      ]
    }
  },

  scripts: {
    slug: 'some-windows-scripts', related: ['gamium', 'ponteiroStudio', 'mods'],
    schema: { '@type': 'SoftwareSourceCode', codeRepository: 'https://github.com/siqueiraadeilson/some-windows-scripts', programmingLanguage: 'Batch', license: 'https://spdx.org/licenses/MIT.html', url: 'https://github.com/siqueiraadeilson/some-windows-scripts' },
    'pt-BR': {
      seoTitle: 'some-windows-scripts — Scripts .bat para consertar o Windows',
      seoDesc: '13 scripts .bat prontos para consertar o Windows: DNS, rede, áudio, Windows Update, impressora, relógio e disco. Sem instalação. Licença MIT.',
      h1: 'some-windows-scripts: 13 scripts .bat para resolver problemas do Windows',
      facts: [['Linguagem', 'Batch'], ['Sistema', 'Windows 10 ou superior'], ['Instalação', 'Nenhuma'], ['Licença', 'MIT']],
      sections: [
        { h: 'Todos os scripts', table: { head: ['Script', 'O que resolve', 'Admin'], rows: scriptRows(1) } },
        { h: 'Como usar', steps: ['Baixe o arquivo .bat de que você precisa ou clone o repositório', 'Veja na tabela se ele exige administrador', 'Clique com o botão direito e escolha “Executar como administrador”, ou dê dois cliques se não exigir', 'Aguarde o script terminar e pressione qualquer tecla para fechar'] }
      ]
    },
    en: {
      seoTitle: 'some-windows-scripts — Batch Scripts to Fix Windows',
      seoDesc: '13 ready-to-use .bat scripts to fix Windows: DNS, network, audio, Windows Update, printer, clock, and disk. No installation needed. MIT licensed.',
      h1: 'some-windows-scripts: 13 batch scripts for common Windows problems',
      facts: [['Language', 'Batch'], ['System', 'Windows 10 or later'], ['Installation', 'None'], ['License', 'MIT']],
      sections: [
        { h: 'All scripts', table: { head: ['Script', 'What it fixes', 'Admin'], rows: scriptRows(2) } },
        { h: 'How to use', steps: ['Download the .bat file you need or clone the repository', 'Check the table to see whether it requires administrator rights', 'Right-click and choose “Run as administrator”, or double-click if it does not', 'Wait for the script to finish and press any key to close'] }
      ]
    },
    es: {
      seoTitle: 'some-windows-scripts — Scripts .bat para reparar Windows',
      seoDesc: '13 scripts .bat listos para reparar Windows: DNS, red, audio, Windows Update, impresora, reloj y disco. Sin instalación. Licencia MIT.',
      h1: 'some-windows-scripts: 13 scripts .bat para problemas comunes de Windows',
      facts: [['Lenguaje', 'Batch'], ['Sistema', 'Windows 10 o superior'], ['Instalación', 'Ninguna'], ['Licencia', 'MIT']],
      sections: [
        { h: 'Todos los scripts', table: { head: ['Script', 'Qué resuelve', 'Admin'], rows: scriptRows(3) } },
        { h: 'Cómo usarlos', steps: ['Descarga el archivo .bat que necesites o clona el repositorio', 'Comprueba en la tabla si requiere administrador', 'Haz clic derecho y elige “Ejecutar como administrador”, o haz doble clic si no lo requiere', 'Espera a que termine y pulsa cualquier tecla para cerrar'] }
      ]
    }
  },

  ponteiroStudio: {
    slug: 'ponteiro-studio', related: ['luable', 'squood', 'scripts'],
    schema: { '@type': 'WebApplication', applicationCategory: 'DesignApplication', operatingSystem: 'Web', url: 'https://ponteirostudio.vercel.app/' },
    'pt-BR': {
      seoTitle: 'Ponteiro Studio — Estudo de caso de editor de cursores',
      seoDesc: 'Como foi construído o Ponteiro Studio, editor web de cursores de mouse em pixel art: desenho 64 × 64, importação de GIF e exportação em PNG, CUR e ANI.',
      h1: 'Ponteiro Studio: editor web para criar cursores de mouse personalizados',
      facts: [['Tipo', 'Aplicação web'], ['Canvas', 'Pixel art 64 × 64'], ['Importa', 'PNG e GIF animado'], ['Exporta', 'PNG, CUR e ANI']],
      sections: [
        { h: 'Do desenho ao cursor no computador', steps: ['Desenhe em uma grade de 64 × 64 ou importe um PNG ou GIF animado', 'Ajuste as cores do cursor, do contorno e do lápis', 'Escolha o ponto de clique, predefinido ou marcado no desenho', 'Teste na prévia ao vivo', 'Exporte em PNG, CUR ou ANI'] },
        { h: 'Decisões de produto', p: 'Criar um cursor costuma exigir um editor de imagem e um conversor à parte. O Ponteiro Studio reúne as etapas no navegador e trata o ponto de clique como parte da criação, porque é ele que define se o cursor funciona bem no uso real.' }
      ]
    },
    en: {
      seoTitle: 'Ponteiro Studio Case Study — Mouse Cursor Editor',
      seoDesc: 'How Ponteiro Studio was built: a web editor for pixel-art mouse cursors with a 64 × 64 canvas, animated GIF import, and PNG, CUR, and ANI export.',
      h1: 'Ponteiro Studio: a web editor for custom mouse cursors',
      facts: [['Type', 'Web app'], ['Canvas', 'Pixel art 64 × 64'], ['Imports', 'PNG and animated GIF'], ['Exports', 'PNG, CUR, and ANI']],
      sections: [
        { h: 'From drawing to a cursor on your computer', steps: ['Draw on a 64 × 64 grid or import a PNG or animated GIF', 'Adjust the cursor, outline, and pencil colors', 'Choose the click hotspot, preset or picked on the drawing', 'Test it in the live preview', 'Export as PNG, CUR, or ANI'] },
        { h: 'Product decisions', p: 'Making a cursor usually takes an image editor plus a separate converter. Ponteiro Studio brings those steps into the browser and treats the click hotspot as part of creation, because it decides whether a cursor works well in real use.' }
      ]
    },
    es: {
      seoTitle: 'Ponteiro Studio — Caso de estudio de editor de cursores',
      seoDesc: 'Cómo se construyó Ponteiro Studio, editor web de cursores en pixel art: lienzo de 64 × 64, importación de GIF animado y exportación en PNG, CUR y ANI.',
      h1: 'Ponteiro Studio: editor web para crear cursores personalizados',
      facts: [['Tipo', 'Aplicación web'], ['Lienzo', 'Pixel art 64 × 64'], ['Importa', 'PNG y GIF animado'], ['Exporta', 'PNG, CUR y ANI']],
      sections: [
        { h: 'Del dibujo al cursor en tu ordenador', steps: ['Dibuja en una cuadrícula de 64 × 64 o importa un PNG o GIF animado', 'Ajusta los colores del cursor, el contorno y el lápiz', 'Elige el punto de clic, predefinido o marcado en el dibujo', 'Pruébalo en la vista previa en vivo', 'Exporta en PNG, CUR o ANI'] },
        { h: 'Decisiones de producto', p: 'Crear un cursor suele exigir un editor de imágenes y un conversor aparte. Ponteiro Studio reúne esos pasos en el navegador y trata el punto de clic como parte de la creación, porque de él depende que el cursor funcione bien en el uso real.' }
      ]
    }
  },

  luable: {
    slug: 'luable', related: ['roblox', 'ponteiroStudio', 'squood'],
    schema: { '@type': 'WebApplication', applicationCategory: 'EducationalApplication', operatingSystem: 'Web', url: 'https://luable.vercel.app/' },
    'pt-BR': {
      seoTitle: 'Luable — Estudo de caso de plataforma de ensino de Roblox',
      seoDesc: 'Como o Luable ensina programação de jogos no Roblox com Lua e Luau: 16 módulos, 132 lições, IDE no navegador e certificado. Estudo de caso.',
      h1: 'Luable: plataforma gamificada para aprender a programar jogos no Roblox',
      facts: [['Tema', 'Programação no Roblox com Lua e Luau'], ['Trilha', '16 módulos e 132 lições'], ['Prática', 'IDE no navegador'], ['Idiomas', 'Português, inglês e espanhol'], ['Público', 'Todas as idades']],
      sections: [
        { h: 'Aprender fazendo, dentro do navegador', p: 'Começar a programar no Roblox costuma esbarrar em instalação e em tutoriais soltos. O Luable troca isso por uma trilha com lições curtas e prática imediata: a pessoa escreve Luau de verdade na IDE do navegador e recebe a correção na hora.' },
        { h: 'Como a trilha é organizada', steps: ['Lições curtas apresentam um conceito por vez', 'Desafios são corrigidos na hora, com dicas e explicações amigáveis', 'XP e progressão mantêm o ritmo ao longo dos 16 módulos', 'Provas validam o conteúdo e liberam o certificado em PDF'] }
      ]
    },
    en: {
      seoTitle: 'Luable Case Study — Roblox Coding Learning Platform',
      seoDesc: 'How Luable teaches Roblox game programming with Lua and Luau: 16 modules, 132 lessons, a browser IDE, and a certificate. A product case study.',
      h1: 'Luable: a gamified platform to learn Roblox game programming',
      facts: [['Subject', 'Roblox programming with Lua and Luau'], ['Path', '16 modules and 132 lessons'], ['Practice', 'Browser IDE'], ['Languages', 'Portuguese, English, and Spanish'], ['Audience', 'All ages']],
      sections: [
        { h: 'Learning by doing, in the browser', p: 'Getting started with Roblox programming often means fighting setup and scattered tutorials. Luable replaces that with a path of short lessons and immediate practice: learners write real Luau in the browser IDE and get instant feedback.' },
        { h: 'How the path is organized', steps: ['Short lessons introduce one concept at a time', 'Challenges are checked instantly, with friendly hints and explanations', 'XP and progression keep the pace across all 16 modules', 'Exams validate the content and unlock the PDF certificate'] }
      ]
    },
    es: {
      seoTitle: 'Luable — Caso de estudio de plataforma para aprender Roblox',
      seoDesc: 'Cómo Luable enseña programación de juegos en Roblox con Lua y Luau: 16 módulos, 132 lecciones, IDE en el navegador y certificado. Caso de estudio.',
      h1: 'Luable: plataforma gamificada para aprender a programar juegos en Roblox',
      facts: [['Tema', 'Programación en Roblox con Lua y Luau'], ['Ruta', '16 módulos y 132 lecciones'], ['Práctica', 'IDE en el navegador'], ['Idiomas', 'Portugués, inglés y español'], ['Público', 'Todas las edades']],
      sections: [
        { h: 'Aprender haciendo, en el navegador', p: 'Empezar a programar en Roblox suele toparse con instalaciones y tutoriales sueltos. Luable lo sustituye por una ruta de lecciones cortas y práctica inmediata: se escribe Luau real en la IDE del navegador y se recibe la corrección al instante.' },
        { h: 'Cómo se organiza la ruta', steps: ['Lecciones cortas presentan un concepto cada vez', 'Los desafíos se corrigen al instante, con pistas y explicaciones amigables', 'XP y progreso mantienen el ritmo a lo largo de los 16 módulos', 'Las pruebas validan el contenido y desbloquean el certificado en PDF'] }
      ]
    }
  }
};
