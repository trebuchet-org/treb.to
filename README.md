# treb-cli Presentation Website

A minimalistic presentation website for treb-cli - a smart contract deployment tool that launches your code into the blockchain with trebuchet-like precision.

## 🚀 Features

- **Clean Design**: Minimalistic interface focused on the tool's capabilities
- **Responsive**: Works on all devices
- **Interactive Terminal**: Animated demonstration of treb-cli commands
- **Copy-to-Clipboard**: Easy installation command copying
- **Demo Ready**: Placeholder for ASCII cinema recordings of contract deployments
- **Fast Loading**: Optimized static site

## 📁 Project Structure

```
treb.to/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Customization Guide

### 1. Update Smart Contract Tool Information

Edit `index.html` to customize the content for your specific deployment needs:

#### Hero Section
```html
<!-- Update the hero title and description -->
<h1 class="hero-title">
    <span class="gradient-text">treb-cli</span>
</h1>
<p class="hero-subtitle">
    Deploy smart contracts with precision and force. A command line tool for launching your code into the blockchain with trebuchet-like accuracy.
</p>
```

#### Terminal Demo
```html
<!-- Update the terminal commands and output -->
<div class="terminal-line">
    <span class="prompt">$</span>
    <span class="command">treb-cli deploy --network mainnet</span>
</div>
<div class="terminal-output">
    <div>Compiling contracts...</div>
    <div>Deploying to Ethereum mainnet...</div>
    <div>Contract deployed: 0x1234...abcd</div>
</div>
```

### 2. Update Features

Modify the features section to highlight your deployment tool's capabilities:

```html
<div class="feature-card">
    <div class="feature-icon">🎯</div>
    <h3>Precise Deployment</h3>
    <p>Deploy smart contracts with accuracy and confidence across multiple blockchain networks.</p>
</div>
```

### 3. Installation Instructions

Update the installation methods in the installation section:

```html
<div class="install-card">
    <h3>Your Installation Method</h3>
    <div class="code-block">
        <code>your installation command</code>
        <button class="copy-btn" onclick="copyToClipboard(this)">Copy</button>
    </div>
</div>
```

### 4. Add ASCII Cinema Recordings

Replace the demo placeholder with your contract deployment recordings:

1. Record your deployment workflow using [asciinema](https://asciinema.org/)
2. Upload to asciinema or host the files yourself
3. Replace the demo placeholder with the embedded player:

```html
<div class="demo-container">
    <script id="asciicast-your-id" src="https://asciinema.org/a/your-recording-id.js" async></script>
</div>
```

### 5. Update Links and Metadata

- Update GitHub repository links throughout the file
- Modify the page title and meta description
- Update footer information and copyright

### 6. Customize Colors and Styling

Edit `styles.css` to match your brand:

```css
:root {
    --primary-color: #your-color;
    --gradient: linear-gradient(135deg, #color1 0%, #color2 100%);
    /* Update other color variables */
}
```

## 🎨 Color Scheme

The website uses a modern color palette:

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#f1f5f9` (Slate)
- **Text**: `#1e293b` (Dark slate)
- **Background**: `#ffffff` (White)
- **Surface**: `#f8fafc` (Light slate)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Custom domain support available

### Vercel

1. Import your GitHub repository to Vercel
2. Automatic deployments and preview URLs
3. Edge network for fast global delivery

## 🔧 Development

### Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

### Live Reload (Optional)

For development with live reload, you can use:

```bash
# Using live-server
npm install -g live-server
live-server
```

## 📋 TODO / Customization Checklist

- [ ] Update smart contract tool details
- [ ] Customize terminal demo with real deployment commands
- [ ] Update feature descriptions for your specific blockchain support
- [ ] Add actual installation commands
- [ ] Record contract deployment demos
- [ ] Update GitHub repository links
- [ ] Customize colors to match your brand
- [ ] Add favicon
- [ ] Update meta tags for SEO
- [ ] Test on different devices

## 🎬 ASCII Cinema Integration

To add your deployment recordings:

1. **Record your deployment workflow:**
   ```bash
   asciinema rec deployment-demo.cast
   # Run your treb-cli commands
   # treb-cli init
   # treb-cli compile
   # treb-cli deploy --network testnet
   # Press Ctrl+D to stop recording
   ```

2. **Upload to asciinema:**
   ```bash
   asciinema upload deployment-demo.cast
   ```

3. **Embed in your website:**
   ```html
   <script id="asciicast-123456" src="https://asciinema.org/a/123456.js" async></script>
   ```

## 🤝 Contributing

Feel free to customize this template for your smart contract deployment tool! If you make improvements that could benefit others, consider sharing them.

## 📄 License

This template is open source and available under the MIT License.

---

**Built for smart contract developers who value precision** 