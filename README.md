# Portfólio de Victor Soares Mesquita — versão 3

Site estático em **HTML, CSS e JavaScript**, em francês, inglês e português. Tema preto e amarelo-elétrico. Inclui páginas individuais de cinco projetos.

## Visualizar localmente

1. Extraia **todos** os arquivos do ZIP, preservando as pastas.
2. No VS Code: **File > Open Folder** e abra a pasta extraída.
3. Abra **`index.html`** (página principal em francês). Também funciona com a extensão **Live Server**.
4. Clique em qualquer cartão de projeto. Agora os links apontam para um arquivo `index.html` explícito, inclusive quando você abre o site diretamente do disco.
5. O seletor FR/EN/PT no menu abre os arquivos `index.html` das outras versões.

## Links e contatos

O cartão de perfil contém **LinkedIn** (abre diretamente no navegador) e **E-mail** (`mailto:`, abre o programa de correio configurado em seu computador). O número de telefone foi retirado do site e do currículo que acompanha este pacote.

- LinkedIn: https://www.linkedin.com/in/victor-soares-mesquita-302a3634a/
- Email: meskitasoares79@gmail.com

Se o Windows pedir um aplicativo ao clicar em **E-mail**, esse é o comportamento normal de um link `mailto:` quando ainda não existe um aplicativo padrão configurado. Escolha o Outlook ou outro gerenciador de e-mail, ou configure Gmail como manipulador padrão no navegador.

## Projeto Franka FR3 e artigo

- Estudo de caso em `projects/franka-fr3/index.html` (e versões `/en` e `/pt`).
- Vídeo de demonstração: `assets/videos/land-franka-experiments.mp4` (MP4 H.264 otimizado para web, 2min26s, 720p).
- Manuscrito científico em coautoria: `assets/docs/Visual-Servoing-Laparoscopic-Ultrasound-LAnD-manuscript.pdf`.
- O artigo está identificado como **manuscrito**, não como artigo publicado: ainda não foi fornecido periódico/DOI ou confirmação editorial.
- Resultados quantitativos publicados no site referem-se ao **trabalho de equipe**, sob condições laboratoriais; não implicam validação clínica.

**Antes de tornar o repositório público:** confirme com os coautores/orientadores se o manuscrito, as imagens do laboratório e o vídeo podem ser divulgados abertamente.

## Personalizar

- `assets/style.css`: cores e estilo.
- `assets/site.js`: menu móvel e botão de copiar (comportamentos JS já existentes).
- `index.html`, `en/index.html`, `pt/index.html`: páginas iniciais.
- `projects/*/index.html` e `en/projects/*/index.html`, `pt/projects/*/index.html`: páginas dos projetos.
- `assets/images/`: imagens e miniaturas.
- `assets/docs/CV-Victor-Soares-Mesquita.pdf`: currículo para download. O original foi mantido na conversa; este arquivo está sem telefone e com francês B1.

## Publicar no GitHub Pages

1. Crie um repositório `SEU_USUARIO.github.io` no GitHub.
2. Envie **o conteúdo da pasta extraída**, não a pasta externa inteira. Na raiz do repositório deve existir `index.html`.
3. Em **Settings > Pages > Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/(root)`, e salve.
4. Abra `https://SEU_USUARIO.github.io/` após a publicação concluir.

Se usar outro nome de repositório, por exemplo `portfolio`, a URL padrão será `https://SEU_USUARIO.github.io/portfolio/`. Os links do site são relativos, então também funcionam nessa estrutura.

## Testes

Validação estática: 18 arquivos HTML e mais de 500 referências a arquivos/âncoras locais verificadas, sem destino ausente. Os links locais usam caminhos explícitos terminados em `index.html` e são adequados ao GitHub Pages. A prévia em navegador automatizado não pôde ser executada no ambiente de produção; recomenda-se inspecionar no seu navegador antes de publicar.
