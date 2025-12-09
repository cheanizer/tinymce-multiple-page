# TinyMCE Multiple Page Editor

A Google Docs-like document editor built with TinyMCE that automatically creates virtual pages when content exceeds A4 page height. The editor provides a realistic document editing experience with automatic page breaks and seamless content flow.

![TinyMCE Editor Screenshot](https://img.shields.io/badge/TinyMCE-6.x-blue)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## Features

### 📄 Virtual Pages
- **Automatic Page Creation**: Creates new pages when content reaches A4 page limits
- **A4 Page Dimensions**: Realistic 21cm × 29.7cm page sizing with proper margins
- **Page Numbering**: Automatic page numbers displayed on each page
- **Print-Ready**: Clean print layout that hides editor controls

### ✨ Smart Content Management
- **Content-Based Detection**: Only creates new pages when substantial content (200px+) reaches page end
- **Cursor Position Aware**: New pages only trigger when cursor is at the very end of content
- **Overflow Handling**: Automatic content flow between pages when editing
- **Real-time Monitoring**: Live detection of page boundaries with visual indicators

### 🎨 Google Docs-Like Experience
- **Visual Feedback**: Blue/orange borders indicate when approaching page limits
- **Smooth Navigation**: Automatic scrolling to new pages
- **Natural Editing**: Edit anywhere without unwanted page breaks
- **Professional Layout**: Document-style appearance with shadows and borders

### 🔧 Technical Features
- **Single TinyMCE Instance**: All pages exist within one editor for unified undo/redo
- **Configurable API Key**: Secure configuration management
- **Responsive Design**: Adapts to different screen sizes
- **Clean Architecture**: Separated HTML, CSS, and JavaScript files

## Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd editor
```

### 2. Configure API Key
Copy the configuration template and add your TinyMCE API key:

```bash
cp config.template.js config.js
```

Edit `config.js` and replace the placeholder with your actual TinyMCE API key:
```javascript
window.APP_CONFIG = {
    TINYMCE_API_KEY: 'your-actual-api-key-here'
};
```

### 3. Serve the Files
Since the editor loads external resources, you'll need to serve it through a web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

### 4. Open in Browser
Navigate to `http://localhost:8000` in your web browser.

## Project Structure

```
editor/
├── index.html              # Main HTML file
├── document-style.css       # Editor styling and page layout
├── js/
│   └── editor.js           # Main editor logic and page management
├── config.js               # Configuration file (create from template)
├── config.template.js      # Template for configuration
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Configuration

### API Key Setup
1. Get a TinyMCE API key from [TinyMCE Cloud](https://www.tiny.cloud/)
2. Copy `config.template.js` to `config.js`
3. Replace the placeholder with your actual API key
4. The `config.js` file is gitignored for security

### Customization Options

#### Page Dimensions
Modify page size constants in `js/editor.js`:
```javascript
const A4_HEIGHT_PX = 1056;  // A4 height in pixels
const PAGE_MARGIN = 40;     // Page margin in pixels
```

#### Content Thresholds
Adjust when new pages are created:
```javascript
const threshold = 100;              // Pixels from bottom to trigger new page
const minimumContentHeight = 200;   // Minimum content before considering page "full"
```

#### Visual Styling
Customize page appearance in the `content_style` section of `js/editor.js`:
- Font family and size
- Page shadows and borders
- Page numbering position
- Print styles

## How It Works

### Page Creation Logic
The editor creates new pages when **both** conditions are met:
1. **Content Height**: Page has substantial content (≥200px) and is near the limit
2. **Cursor Position**: Cursor is at the very end of the page content

### Key Functions
- **`isContentNearPageEnd()`**: Checks if page content is approaching the height limit
- **`isCursorAtEndOfPageContent()`**: Verifies cursor is at the end of content
- **`createNewPage()`**: Creates new virtual page elements
- **`handlePageOverflow()`**: Manages content flow between pages
- **`ensureCursorInPage()`**: Maintains cursor within valid page boundaries

### Event Handling
- **Enter Key**: Creates new page when at bottom of full page
- **Input/Paste**: Monitors content changes and handles overflow
- **Click/Navigation**: Provides visual feedback when near page boundaries

## Browser Compatibility

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+

## Development

### File Organization
- **`index.html`**: Structure and initial content
- **`document-style.css`**: Page layout and print styles
- **`js/editor.js`**: Core functionality and TinyMCE configuration
- **`config.js`**: Environment-specific configuration (gitignored)

### Security Notes
- Keep your TinyMCE API key secure in `config.js`
- Don't commit `config.js` to version control
- Use `config.template.js` for sharing project structure

## Troubleshooting

### Common Issues

**Editor doesn't load:**
- Check that `config.js` exists and contains a valid API key
- Ensure you're serving files through a web server (not file://)
- Check browser console for error messages

**Pages don't create automatically:**
- Make sure content is substantial (≥200px height)
- Verify cursor is at the very end of content
- Check that you're pressing Enter when both conditions are met

**Styling issues:**
- Verify `document-style.css` is loading correctly
- Check for CSS conflicts with other stylesheets
- Ensure proper viewport settings for responsive design

### Debug Mode
Add this to `config.js` for additional logging:
```javascript
window.APP_CONFIG = {
    TINYMCE_API_KEY: 'your-api-key',
    DEBUG: true
};
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly across different browsers
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [TinyMCE](https://www.tiny.cloud/) - The world's most advanced WYSIWYG editor
- Inspired by Google Docs' page management system
- CSS styling adapted for A4 document layout standards

---

**Happy editing!** 🎉

For questions or support, please open an issue in the repository.