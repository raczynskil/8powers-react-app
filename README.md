## 🚀 Wymagania wstępne

- Node.js: Upewnij się, że masz zainstalowaną odpowiednią wersję Node.js. Zalecamy użycie nvm do zarządzania wersjami Node.js.
- npm: Menadżer pakietów.
- Docker (opcjonalnie): Wymagany do uruchomienia aplikacji w kontenerach.

## Technologie

- React
- TypeScript
- Vite – Szybki i nowoczesny bundler do aplikacji frontendowych.
- Docker – Konteneryzacja dla środowisk deweloperskich (dev) i podglądu produkcji (preview).
- shadcn/ui – Komponenty UI zbudowane na bazie Tailwind CSS. https://ui.shadcn.com
- Redux – Zarządzanie stanem globalnym aplikacji.
- React Query – Zarządzanie danymi i cache'owaniem zapytań API.
- Tailwind CSS – CSS framework. https://tailwindcss.com
- ESLint – Narzędzie do analizy statycznej kodu.
- Prettier – Narzędzie do formatowania kodu.
- Vitest – Framework do testowania jednostkowego.
- nvm – Narzędzie do zarządzania wersjami Node.js.
- npm – Menadżer pakietów.

### Zarządzanie wersją Node.js

Projekt używa nvm do zarządzania wersją Node.js. Upewnij się, że masz zainstalowane nvm, a następnie wykonaj:

```bash
   nvm use
```

This will switch to the Node.js version specified in .nvmrc.

## Formatowanie kodu

Projekt używa Prettier do formatowania kodu. Aby sformatować kod, wykonaj:

```bash
   npm run format
```

Możesz również skonfigurować swój edytor, aby formatował kod automatycznie przy zapisie:

### Webstorm

Settings | Languages & Frameworks | JavaScript | Prettier

## 🛠 Rozwój (bez Docker)

Aby uruchomić serwer deweloperski, wykonaj:

```bash
   npm run dev
```

Serwer zostanie uruchomiony, a aplikacja będzie dostępna pod adresem http://localhost:3000.

## 🐳 Docker

Jeśli chcesz używać Dockera, możesz skorzystać z poniższych komend:

### Wersja developerska

Aby uruchomić projekt w kontenerze Docker w wersji developerskiej, wykonaj:

```bash
   npm run dev:docker
```
lub 
```bash
   docker-compose up dev
```

Aplikacja będzie dostępna pod adresem http://localhost:3000.

### Podgląd wersji produkcyjnej

Aby uruchomić projekt w kontenerze Docker w wersji produkcyjnej (podgląd), wykonaj:

```bash
   npm run preview:docker
```
lub
```bash
   docker-compose up preview
```


Aplikacja będzie dostępna pod adresem http://localhost:4173.

### Testy

Aby uruchomić testy, wykonaj:

```bash
   npm run test:docker
```
lub
```bash
   docker-compose up test
```

## Komendy

Uruchomienie trybu deweloperskiego:

```bash
   npm run dev
```

Uruchomienie trybu deweloperskiego w docker:

```bash
   npm run dev:docker
```

Uruchomienie testów:

```bash
   npm run test
```

Uruchomienie testów w docker:

```bash
   npm run test:docker
```

Formatowanie kodu:

```bash
   npm run format
```

Uruchomienie lint:

```bash
   npm run lint
```

Budowanie aplikacji:

```bash
   npm run build
```

Uruchomienie podglądu produkcji:

```bash
   npm run preview
```

Uruchomienie podglądu produkcji w docker:

```bash
   npm run preview:docker
```

