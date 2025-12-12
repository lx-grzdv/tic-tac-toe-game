# Tic Tac Toe Web Game

A simple, beautiful Tic Tac Toe game built with pure HTML, CSS, and JavaScript.

## Features

- 🎮 Two-player gameplay (X and O)
- 🏆 Win detection for all 8 winning combinations
- 🤝 Draw detection
- ✨ Winning cells highlighted in gold
- 🔄 Reset button to start new game
- 📱 Responsive design
- 🎨 Beautiful gradient background

## Play Online

🚀 **Live Demo**: [Coming soon on Netlify]

## Deploy to Netlify

### Option 1: Drag & Drop (Easiest)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the `index.html` file
3. Your site is live! 🎉

### Option 2: GitHub + Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add index.html netlify.toml README.md
   git commit -m "Initial commit: Tic Tac Toe game"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Build settings are auto-detected from `netlify.toml`
   - Click "Deploy site"
   - Your site will be live at `https://random-name.netlify.app`

3. **Custom Domain (Optional)**:
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Follow instructions to configure DNS

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Local Development

Simply open `index.html` in your browser. No build process or server needed!

## Project Structure

```
.
├── index.html       # Standalone game (all CSS/JS inline)
├── netlify.toml     # Netlify configuration
├── README.md        # This file
├── app.py          # Flask version (legacy, not needed for Netlify)
├── templates/      # Flask templates (legacy)
└── static/         # Flask static files (legacy)
```

## Technologies

- **HTML5** - Structure
- **CSS3** - Styling with animations
- **Vanilla JavaScript** - Game logic
- **Netlify** - Hosting

## License

MIT License - Feel free to use this project however you like!

## Author

Built with ❤️ for learning and fun!
