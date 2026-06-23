# KwiatPL - Konteneryzacja aplikacji React (Vite)

## 📌 Opis projektu

KwiatPL jest aplikacją typu SPA (Single Page Application) stworzoną w technologii React z wykorzystaniem narzędzia Vite.

Aplikacja symuluje sklep internetowy z kwiatami i umożliwia:

* przeglądanie produktów,
* wyświetlanie szczegółów produktów,
* zarządzanie koszykiem zakupowym,
* kontakt z użytkownikiem za pomocą formularza.

Projekt został przygotowany zgodnie z podejściem **Docker Multi-Stage Build**, gdzie:

* etap 1: budowanie aplikacji w środowisku Node.js,
* etap 2: serwowanie statycznych plików przez serwer Nginx.

Dzięki temu obraz produkcyjny jest niewielki i zawiera wyłącznie pliki niezbędne do działania aplikacji.

---

# 🏗️ Architektura aplikacji

Aplikacja została podzielona na logiczne moduły.

## Komponenty Layout

Katalog `src/components/layout` zawiera elementy odpowiedzialne za układ strony:

* Header
* Footer
* MobileMenu

## Komponenty UI

Katalog `src/components/ui` zawiera komponenty wielokrotnego użytku:

* ProductCard
* Modal
* QuantityPicker

## Strony aplikacji

Katalog `src/pages` zawiera główne widoki aplikacji:

* Home
* Products
* ProductDetails
* Cart
* Contact
* NotFound

## Zarządzanie stanem

Do zarządzania stanem aplikacji wykorzystano React Context API:

* `cartContext.jsx` – obsługa koszyka zakupowego,
* `themeContext.jsx` – obsługa motywu aplikacji.

## Warstwa danych

Dane produktów przechowywane są w pliku:

```text
src/data/products.js
```

## Funkcje pomocnicze

Katalog `src/utils` zawiera funkcje wspomagające działanie aplikacji, np.:

```text
src/utils/formatPrice.js
```

## Routing

Nawigacja pomiędzy stronami realizowana jest przy pomocy biblioteki:

```text
react-router-dom
```

---

# 🐳 Architektura konteneryzacji

Projekt wykorzystuje wieloetapowe budowanie obrazu Docker.

## Etap 1 – Build

Obraz bazowy:

```text
node:20-alpine
```

W tym etapie:

* instalowane są zależności projektu,
* wykonywany jest proces budowania aplikacji (`npm run build`),
* generowany jest katalog `dist` zawierający gotowe pliki aplikacji.

## Etap 2 – Production

Obraz bazowy:

```text
nginx:alpine
```

W tym etapie:

* kopiowane są wyłącznie pliki z katalogu `dist`,
* aplikacja jest serwowana przez serwer Nginx,
* obsługiwany jest routing aplikacji SPA.

## Schemat działania

```text
React + Vite
      │
      ▼
Node.js (build stage)
      │
      ▼
npm run build
      │
      ▼
dist/
      │
      ▼
Nginx Alpine
      │
      ▼
Przeglądarka użytkownika
```

---

# ⚙️ Technologie

## Frontend

* React
* Vite
* React Router DOM
* React Hook Form
* Zod
* Context API

## Konteneryzacja

* Docker
* Docker Compose
* Nginx (Alpine)
* Node.js (Alpine)

---

# 📁 Struktura projektu

```text
.
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .env.example
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── public/
└── src/
    ├── assets/
    ├── components/
    │   ├── layout/
    │   └── ui/
    ├── context/
    ├── data/
    ├── pages/
    ├── styles/
    ├── utils/
    ├── App.jsx
    └── main.jsx
```

---

# 🚀 Uruchomienie projektu

## 1. Sklonuj repozytorium

```bash
git clone <URL_REPOZYTORIUM>
cd kwiatpl
```

## 2. Konfiguracja środowiska

Projekt wykorzystuje zmienne środowiskowe przechowywane w pliku `.env`.

Ze względów bezpieczeństwa plik `.env` nie jest przechowywany w repozytorium i został dodany do `.gitignore`.

Należy utworzyć własny plik `.env` na podstawie pliku `.env.example`.

Przykładowa zawartość:

```env
APP_PORT=8080
```

## 3. Budowanie i uruchomienie aplikacji

```bash
docker compose up -d --build
```

## 4. Sprawdzenie uruchomionych kontenerów

```bash
docker ps
```

## 5. Dostęp do aplikacji

Po poprawnym uruchomieniu aplikacja będzie dostępna pod adresem:

```text
http://localhost:8080
```

---

# 🛑 Zatrzymanie aplikacji

```bash
docker compose down
```

---

# 📦 Build ręczny (opcjonalnie)

Budowanie obrazu:

```bash
docker build -t kwiatpl-frontend .
```

Uruchomienie kontenera:

```bash
docker run -p 8080:80 kwiatpl-frontend
```

---

# 📉 Optymalizacja obrazu

W projekcie zastosowano następujące techniki optymalizacyjne:

* wykorzystanie obrazu `node:20-alpine`,
* wykorzystanie obrazu `nginx:alpine`,
* zastosowanie Docker Multi-Stage Build,
* wykorzystanie `npm ci`,
* wykorzystanie pliku `.dockerignore`,
* kopiowanie wyłącznie plików statycznych do obrazu produkcyjnego.

Dzięki temu końcowy obraz jest mniejszy i nie zawiera środowiska Node.js.

---

# 🔐 Zmienne środowiskowe

Projekt wykorzystuje plik:

```text
.env
```

Plik `.env` zawiera lokalną konfigurację środowiska uruchomieniowego, nie jest wersjonowany i został dodany do `.gitignore`.

Takie rozwiązanie pozwala oddzielić konfigurację od kodu źródłowego i jest zgodne z dobrymi praktykami konteneryzacji aplikacji.

