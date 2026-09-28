# Post Composer React

A simple React project that validates post length for Twitter and LinkedIn.

## Features

- Select Twitter or LinkedIn
- Twitter character limit: 280
- LinkedIn character limit: 3000
- Live character counter
- Error message when the limit is exceeded
- Controlled textarea using React state

## Technologies

- React
- JavaScript
- Vite
- CSS

## How to Run

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Project Structure

```text
post-composer-react/
├── src/
│   ├── components/
│   │   └── PostComposer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Aim

To create a Post Composer using React that allows users to select Twitter or LinkedIn, enter a post, display the character count, and validate the post according to the platform-specific character limit.
