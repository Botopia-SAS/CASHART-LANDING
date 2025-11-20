# ArtFintech - Art Investment Platform

A revolutionary fintech platform connecting art collectors and galleries, built with Next.js 15, TypeScript, and modern web technologies.

## Features

- **Smart i18n with IP Detection**: Automatic language detection using ipquery.io API
  - English (en)
  - Spanish (es)
  - Portuguese (pt)
  - Real-time IP geolocation for seamless localization

- **Dual User Types**:
  - **Collectors**: Manage art portfolios and track investments
  - **Galleries**: Connect with collectors and showcase artwork

- **Authentication**: Google Sheets-based authentication system
  - Secure password hashing with bcrypt
  - Formity-powered JSON-based forms with conditional logic
  - User registration with email, phone, and role selection
  - Protected dashboard routes

- **Modern Dashboard**:
  - Overview: Portfolio statistics and market trends
  - Your Info: Personal account information
  - Status: Portfolio health and active transactions
  - Timeline: Activity history and upcoming events

- **Beautiful UI with Modern Effects**:
  - Built with shadcn/ui components
  - Magic UI animated components (Marquee, Particles, Animated Beams)
  - PatternCraft background patterns
  - Framer Motion animations
  - Lucide React icons
  - Responsive design with Tailwind CSS v4
  - Smooth transitions and hover effects

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animated Components**: Magic UI (Marquee, Particles, Animated Beams)
- **Background Patterns**: PatternCraft
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation + Formity (JSON-based forms)
- **Animations**: Framer Motion + Blendy.js
- **State Management**: Zustand (with persistence)
- **i18n**: next-intl with IP-based detection (ipquery.io)
- **Database**: Google Sheets API
- **Authentication**: Custom auth with bcryptjs

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- Google Cloud Project with Sheets API enabled

### Installation

1. Clone the repository:
```bash
cd art-fintech
```

2. Install dependencies:
```bash
npm install
```

3. Configure Google Sheets:

   a. Create a Google Cloud Project
   b. Enable Google Sheets API
   c. Create a Service Account and download the JSON credentials
   d. Create a Google Sheet with a "Users" sheet
   e. Share the sheet with your service account email

4. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
# Google Sheets Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id

# NextAuth Secret
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
art-fintech/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Internationalized routes
│   │   │   ├── dashboard/     # Dashboard pages
│   │   │   ├── layout.tsx     # Locale layout
│   │   │   └── page.tsx       # Landing page
│   │   └── api/
│   │       └── auth/          # Authentication endpoints
│   ├── components/
│   │   ├── dashboard/         # Dashboard components
│   │   ├── landing/           # Landing page components
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       ├── api/               # API utilities (Google Sheets)
│       ├── store/             # Zustand stores
│       ├── validations/       # Zod schemas
│       └── utils.ts           # Utility functions
├── messages/                  # i18n translation files
├── middleware.ts              # Next.js middleware (i18n)
├── i18n.ts                    # i18n configuration
└── .env.local                 # Environment variables
```

## Google Sheets Schema

Your Google Sheet should have a "Users" sheet with the following columns:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Timestamp | Email | Full Name | Country Code | Phone | User Type | Gallery Name | Password (hashed) |

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Dashboard Features

### Overview
- Portfolio value tracking
- Growth metrics
- Recent activity feed
- Market trends analysis

### Your Info
- Personal information display
- Account statistics
- Profile management

### Status
- Portfolio health monitoring
- Active transactions tracking
- Market opportunities

### Timeline
- Activity history
- Milestone tracking
- Upcoming events

## i18n (Internationalization)

The app automatically detects the user's language based on their IP address and supports:
- English (en)
- Spanish (es)
- Portuguese (pt)

Translation files are located in the `messages/` directory.

## Authentication Flow

1. User registers via the landing page form
2. Data is validated using Zod schemas
3. Password is hashed with bcryptjs
4. User data is stored in Google Sheets
5. On login, credentials are verified against Google Sheets
6. User session is managed with Zustand (persisted to localStorage)
7. Dashboard is protected and redirects unauthenticated users

## Customization

### Adding New Languages

1. Create a new JSON file in `messages/` (e.g., `fr.json`)
2. Add the locale to `middleware.ts` and `i18n.ts`
3. Add translations following the existing structure

### Styling

The project uses Tailwind CSS. Customize themes in:
- `tailwind.config.js` - Tailwind configuration
- `src/app/globals.css` - Global styles and CSS variables

## Security Notes

- Passwords are hashed using bcryptjs before storage
- Google Sheets credentials should never be committed to git
- The `.env.local` file is gitignored by default
- In production, consider moving to a proper database (PostgreSQL, MongoDB, etc.)

## Key Improvements (Latest Update)

- ✅ Implemented IP-based language detection with ipquery.io
- ✅ Added Magic UI animated components (Marquee, Particles)
- ✅ Integrated PatternCraft background patterns
- ✅ Migrated forms to Formity (JSON-based with conditional logic)
- ✅ Added Framer Motion animations
- ✅ Enhanced landing page with modern visual effects
- ✅ Added trending artworks marquee carousel
- ✅ Implemented gradient backgrounds and particle effects

## Future Enhancements

- [ ] Add more Blendy.js morphing animations for transitions
- [ ] Add real-time portfolio value updates
- [ ] Integrate with art market APIs (Artsy, Artnet)
- [ ] Add artwork image upload and management
- [ ] Implement blockchain-based provenance tracking
- [ ] Add payment gateway integration (Stripe)
- [ ] Build mobile app with React Native
- [ ] Add real-time notifications (WebSockets)
- [ ] Implement 3D artwork previews with Three.js
- [ ] Add AI-powered art recommendations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js and modern web technologies.
