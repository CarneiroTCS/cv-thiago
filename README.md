# Currículo Interativo — Thiago Carneiro da Silva

Pré-visualização:

![Preview](assets/preview.svg)

## Link do currículo (GitHub Pages)
- https://carneirotcs.github.io/cv-thiago/

## O que este currículo tem de “dev”
- **Onboarding**: pergunta se o recrutador quer participar (modo interativo) ou apenas visualizar

- **Mini Game (CV Quest)**: colete itens para navegar por Experiências/Formação/Skills (compatível com celular)
- **Achievements**: badges desbloqueados conforme o recrutador explora
- **Skill Tree**: nós ativáveis com persistência (localStorage)

- Tema **Dark/Light/ARGB (neon)**
- **Modo Terminal** (comandos abaixo)
- Filtro de experiências por palavra-chave
- Botão **Privacidade** (oculta telefone/local na tela)
- **Exportar PDF** (via impressão do navegador)
- Botão **Baixar JSON** (para reutilizar os dados)

## Mini Game (CV Quest)
Clique em **Mini Game** e colete:
- **EXP** → Experiências
- **EDU** → Formação
- **SKL** → Skills/Resumo

No PC use **WASD/Setas**. No celular use o **D-pad**.

## Comandos do Terminal
Abra o “Modo Terminal” e use:

- `help` — lista comandos
- `about` — resumo
- `skills` — competências
- `exp` — experiências
- `edu` — formação
- `certs` — cursos/certificações
- `copy email` — copia e-mail
- `copy phone` — copia telefone
- `theme` — alterna tema
- `print` — exporta PDF
- `exit` — fecha terminal

## Como atualizar conteúdo
Os dados ficam no arquivo `app.js` (objeto `resume`).  
Edite textos, experiências, chips e cursos diretamente nele.

## Exportar PDF
No site, clique em **Exportar PDF** (ou use `print` no terminal).  
Depois, no navegador:
- “Salvar como PDF”
- Margens: “Padrão”
- Cabeçalhos/rodapés: desativar (se houver)

## Domínio próprio (opcional)
Se quiser usar domínio próprio, configure em **Settings → Pages → Custom domain**.
O GitHub criará/atualizará o arquivo `CNAME` automaticamente no repositório.

---

Última atualização: 2025-12-11


## Alternar modo
Use o botão **Mudar modo** no topo para reabrir a pergunta (participar ou apenas visualizar).


## Foto e identidade
- A foto está em `assets/avatar.webp` (ou `.jpg`).
- O motivo “carneiro” está em `assets/ram.svg` e aparece como detalhe no logo e watermark no tema ARGB.


## Efeito ARGB
- No tema **ARGB**, há um **cursor trail neon** (apenas em dispositivos com mouse/trackpad; respeita `prefers-reduced-motion`).

- O trail agora também funciona em **touch (celular)**, de forma mais sutil.


## Mini Game troubleshooting
Se o botão **Mini Game** não abrir, normalmente é cache ou `index.html` desatualizado. Faça hard reload (aba anônima) e confirme que `index.html` contém `#gameOverlay`.


## PDF limpo
O botão **Exportar PDF** tenta gerar um PDF limpo via `html2pdf.js` (sem cabeçalho/rodapé do navegador). Se a biblioteca não carregar, cai no `window.print()`.
