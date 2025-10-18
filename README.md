# Webbshop shop-backend

Webbshoppens backend är separerade i webbshops-funktioner och user-funktioner. I detta repository finns webbshops-realterade backenden, lagring av produkter och ordrar etc.

## Versioner

- Node: `22.20.0`
- npm: `10.9.3`
- Express: `^5.1.0`

## Installera nvm, node och npm

### NVM

- ### Linux/Mac installation

  - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`
  - `export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"`
  - `[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"` (Laddar in nvm utan att starta om terminalen)

- ### Windows installation
  - Klicka på 'Download Now!' i [nvm-windows repots Readme](https://github.com/coreybutler/nvm-windows#readme)
  - Installera .exe filen tillhörande den senaste releasen
  - Följ installations programmet

Kontrollera installation genom att köra `nvm -v` i terminalen

### Node och npm

- Kör `nvm install`
  - Kommandot installerar också npm samtidigt
  - Kommandot byter även till den installerade node- och npm versionen

## Kom igång

### Ta hem repot

- Navigera dit du vill klona projektet
- Klona repot: `git clone https://github.com/Frommflin/webshop-shop-backend.git`
- Navigera in i repomappen: `cd webshop-shop-backend`
- Kör: `nvm use`
  - förväntad output: `Now using node v22.20.0 (npm v10.9.3)`

### Installera dependencies

`npm install`

### Kör dev-server

`npm run dev`

## CI workflow

Projektet genomgår test av server-start (`npm run start`) vid varje push in i `main`-branchen. Resultat av bygget hittas under `Actions` > `Node.Js CI` i repo-menyn, alternativ navigera direkt till `https://github.com/Frommflin/webshop-shop-backend/actions`
