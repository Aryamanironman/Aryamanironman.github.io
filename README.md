# Aryamanironman.github.io

A single-page interactive love-letter-turned-website — "Would you like to go on a date with me, Miss Radha?"

## Overview

A playful, heartfelt page with a mischievous twist: the **No button runs away** every time you try to hover over it. Keep clicking it and sweet messages float across the screen. Eventually everything falls away and a thank-you message appears.

## Features

- **Elusive No button** — jumps to a random position whenever the cursor approaches it, with a minimum escape distance of 1/3 of the container
- **Progressive text messages** — each escape triggers a new floating message cycling through 11 unique texts
- **Collision detection** — ensures the button never teleports on top of other elements
- **Yes → animation cascade** — clicking Yes triggers a 5-second fall animation on all elements before revealing the thank-you message
- **Floating text** — absolute-positioned messages fade in with randomized placement
- **Neon glow text** — CSS `@keyframes animate` gives the date request a pulsing pink neon text-shadow effect
- **Responsive** — button sizes and font scale down gracefully on mobile

## Tech Stack

- **Vanilla HTML/CSS/JS** — zero dependencies, runs in any browser
- **CSS animations** — `fall` keyframe for the click sequence, `animate` for neon text
- **No build step** — open `index.html` directly

## How It Works

1. The page loads with "Would you like to go on a date with me Miss Radha?" in neon pink, a cute image, and two buttons
2. Hovering the "No" button triggers a `mouseover` handler that calculates a new position at least `containerHeight/3` away from the current position in both axes
3. Each escape appends a new floating text element from the `texts` array, positioned randomly without overlapping previous messages
4. Clicking "Yes" adds the `.fall` class to all elements — they animate off-screen over 5 seconds, then the thank-you message appears
5. Clicking "No" on mobile (no hover) is still required, but the button can be tapped normally

## Setup

```bash
# Open directly in browser
open index.html

# Or serve locally
npx serve .
```

## Note

This was a personal project made with a very specific someone in mind. It's public so the story lives online — not because it's meant to be a template.