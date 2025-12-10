# 📧 EmailJS Contact App

Een moderne, professionele contactformulier applicatie gebouwd met React, TypeScript en Vite. Uitgerust met een prachtig glasmorfisme UI design en EmailJS integratie voor naadloze email verzending.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.2.7-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC.svg)
![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-red.svg)

## ✨ Features

- 🎨 **Glasmorfisme UI Design** - Moderne, transparante glazen effecten
- 📱 **Volledig Responsief** - Werkt perfect op alle apparaten
- ⚡ **Bliksemsnel** - Gebouwd met Vite voor optimale prestaties
- 🔒 **Type-Safe** - Volledige TypeScript ondersteuning
- 📧 **EmailJS Integratie** - Directe email verzending zonder backend
- ✅ **Form Validatie** - Real-time validatie met Yup en Formik
- 🎭 **Smooth Animaties** - CSS animaties voor betere UX
- 🏗️ **Modulaire Architectuur** - DRY principes toegepast

## 🚀 Live Demo

Bekijk de live demo: [https://email-js-demo.vercel.app](https://email-js-demo.vercel.app)

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.1
- **Build Tool:** Vite 7.2.7
- **Styling:** Tailwind CSS 4.1.17
- **TypeScript:** 5.9.3
- **Form Handling:** Formik + Yup
- **Email Service:** EmailJS
- **Icons:** Font Awesome

## 📋 Prerequisites

- Node.js (versie 18 of hoger)
- npm of yarn

## 🔧 Installatie

1. **Clone de repository**

   ```bash
   git clone https://github.com/HamedSadim1/email-js.git
   cd email-js
   ```

2. **Installeer dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Kopieer `.env.example` naar `.env` en vul je EmailJS credentials in:

   ```bash
   cp .env.example .env
   ```

   Bewerk `.env` met je eigen waarden:

   ```env
   VITE_EMAILJS_SERVICE_ID=jouw_service_id
   VITE_EMAILJS_TEMPLATE_ID=jouw_template_id
   VITE_EMAILJS_PUBLIC_KEY=jouw_public_key
   VITE_EMAIL_TO=jouw@email.com
   VITE_EMAIL_TO_NAME=Jouw Naam
   ```

4. **Start de development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in je browser.

## 📖 Gebruik

### EmailJS Setup

1. Maak een account aan op [EmailJS](https://www.emailjs.com/)
2. Maak een email service aan (bijv. Gmail)
3. Maak een email template aan
4. Kopieer de Service ID, Template ID, en Public Key
5. Voeg deze toe aan je `.env` bestand

### Project Structuur

```plaintext
src/
├── components/          # UI Componenten
│   ├── Header.tsx      # Navigatie header
│   ├── Hero.tsx        # Welkomst sectie
│   ├── ContactUs.tsx   # Contact formulier
│   └── Footer.tsx      # Footer component
├── types/              # TypeScript types
│   └── index.ts        # EmailData interface
├── utils/              # Helper functies
│   ├── constants.ts    # Form schema & initial values
│   └── emailService.ts # Email verzending logica
├── App.tsx             # Hoofdcomponent
├── main.tsx            # Applicatie entry point
├── index.css           # Global styles & Tailwind
└── vite-env.d.ts       # Vite environment types
```

## 🎯 Scripts

```bash
# Development server starten
npm run dev

# Productie build maken
npm run build

# Preview van productie build
npm run preview
```

## 🔐 Environment Variabelen

| Variabele                  | Beschrijving          | Vereist |
| -------------------------- | --------------------- | ------- |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS Service ID    | ✅      |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS Template ID   | ✅      |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS Public Key    | ✅      |
| `VITE_EMAIL_TO`            | Ontvanger email adres | ✅      |
| `VITE_EMAIL_TO_NAME`       | Naam van ontvanger    | ✅      |

## 🎨 Customization

### Kleuren Aanpassen

Bewerk `src/index.css` om de glasmorfisme kleuren aan te passen:

```css
.glass-card {
  @apply bg-white/10 backdrop-blur-md border border-white/20;
}
```

### Email Template

Pas je EmailJS template aan om de volgende variabelen te gebruiken:

- `{{from_name}}` - Naam van afzender
- `{{from_email}}` - Email van afzender
- `{{message}}` - Bericht inhoud
- `{{to_name}}` - Naam van ontvanger

## 🤝 Bijdragen

Bijdragen zijn welkom! Volg deze stappen:

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📝 Licentie

Dit project is gelicentieerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

---

## ❤️ Acknowledgments

- [EmailJS](https://www.emailjs.com/) - Voor de email service
- [Tailwind CSS](https://tailwindcss.com/) - Voor het utility-first CSS framework
- [Vite](https://vitejs.dev/) - Voor de snelle build tool
- [React](https://reactjs.org/) - Voor het UI framework

## 📞 Contact

Hamed Sadim - [hamid.sadim@outlook.com](mailto:hamid.sadim@outlook.com)

Project Link: [https://github.com/HamedSadim1/email-js](https://github.com/HamedSadim1/email-js)

---

Gemaakt met ❤️ en moderne web technologieën

[Terug naar boven](#-emailjs-contact-app)
