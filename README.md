# MyAnimeList Yearly Recap

A web application that generates a personalized yearly anime recap based on your watched activity, presented through an interactive and animated card-based experience.

---

## Features
- MyAnimeList OAuth Login using the official authentication flow
- Personalized yearly recap generated from your anime watching history
- Interactive & modern glassmorphism card-based navigation with smooth animations

---

## Tech Stack
- [Nuxt](https://nuxt.com)
- [Vue](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [GSAP](https://gsap.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Installation
### 1. Clone Repository
```bash
git clone https://github.com/DaffaSyauqi/MAL-Yearly-Recap.git
cd mal-yearly-recap
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Configure Environment Variables
#### How to Get MyAnimeList Client ID, Client Secret, and Redirect URI
  This application uses the official MyAnimeList OAuth 2.0 authentication flow. Follow these steps to obtain the required credentials.

#### Step 1: Create a MyAnimeList Account
  If you do not already have one, create an account at: https://myanimelist.net

#### Step 2: Access the MyAnimeList API Settings
  1. Log in to your MyAnimeList account
  2. Open the following page in your browser: https://myanimelist.net/apiconfig

#### Step 3: Register a New Application
  1. Click Create ID
  2. Fill in the application form with the following recommended values:
  - App Name: Any name you prefer (e.g. MyAnimeList Recap)
  - App Type: Web
  - App Description: Any description (e.g. A personal yearly anime recap web application)
  - App Redirect URL: (e.g http://localhost:3000/api/auth)
  
  Make sure the redirect URL exactly matches the redirect URI used in your application. OAuth authentication will fail if they do not match.

#### Step 4: Obtain Client ID and Client Secret
  After creating the application:
  - Client ID will be displayed in the application dashboard
  - Client Secret can be revealed or regenerated from the same page
  Copy both values and store them securely.

#### Step 5: Set Environment Variables
  Update your .env file with the obtained values:
  ```bash
  MAL_CLIENT_ID=your_myanimelist_client_id  
  MAL_CLIENT_SECRET=your_myanimelist_client_secret  
  MAL_REDIRECT_URI=your_myanimelist_redirect_uri
  ```

### 4. Run Local Development Server
```bash
pnpm run dev
```

---

## Future Enhancements

- Support for multiple recap years and all time
- Adding manga recap
- Direct sharing to social media platforms
- Theme customization
- Performance optimizations
---
