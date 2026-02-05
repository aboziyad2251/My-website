# Iron Logic - Client Coaching Portal

A Next.js application for client coaching, exercise logging, and nutrition tracking.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Features

- **Industrial Aesthetic**: Dark mode design inspired by precision machining tools.
- **Client Portal**:
    - **Workout Log**: Log exercises with Sets, Reps, Weight, and RPE.
    - **Relief Mode**: Toggle for simplified tracking on high-fatigue days.
    - **Nutrition Log**: Track daily macros (Protein/Carbs/Fats) and log meals.
- **Coach Dashboard**:
    - Centralized view of client logs.
    - Tabular data representation.

## Data Persistence

Currently, the app uses `localStorage` to save data in the browser for immediate demonstration.
To switch to Firebase:
1. Configure `firebase` in a `src/utils/firebase.ts` file.
2. Update `WorkoutLog.tsx` and `NutritionLog.tsx` effects to read/write to Firestore.

## Instructions: Adding New Exercise Videos

To extend the application with exercise videos (e.g. for a video library):

### Option 1: Local Hosting
1. Create a directory `public/videos`.
2. Place `.mp4` files in this directory.
3. Reference them in your components as `/videos/filename.mp4`.

### Option 2: External Hosting (YouTube/Vimeo)
1. Use the embed URL (e.g., `https://www.youtube.com/embed/VIDEO_ID`).

### Implementation Steps
1. Create a `VideoPlayer` component in `src/components/Common/VideoPlayer.tsx`.
   ```tsx
   import { Box, Typography } from '@mui/material';

   export default function VideoPlayer({ url, title }: { url: string, title: string }) {
     return (
       <Box sx={{ mb: 2 }}>
         <Typography variant="subtitle2">{title}</Typography>
         <video controls width="100%" style={{ borderRadius: '8px' }}>
             <source src={url} type="video/mp4" />
         </video>
       </Box>
     );
   }
   ```
2. Integrate into the **Workout Log** or a new **Exercise Library** page.

## Tech Stack

- **Next.js 16** (App Router)
- **Material UI (MUI)**
- **TypeScript**
