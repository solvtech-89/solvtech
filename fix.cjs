const fs = require("fs");

// Read the file
const content = fs.readFileSync("./src/App.jsx", "utf8");

// Simple character replacements
let fixed = content;

// Replace one by one - simpler approach
fixed = fixed.replace(/ðŸ /g, "🏠");
fixed = fixed.replace(/ðŸš€/g, "🚀");
fixed = fixed.replace(/âœ¨/g, "✨");
fixed = fixed.replace(/ðŸ'°/g, "💰");
fixed = fixed.replace(/ðŸ"ž/g, "📞");
fixed = fixed.replace(/ðŸŽ‰/g, "🎉");
fixed = fixed.replace(/ðŸŽ¯/g, "🎯");
fixed = fixed.replace(/ðŸ'ª/g, "💪");
fixed = fixed.replace(/ðŸ"¥/g, "🔥");
fixed = fixed.replace(/ðŸŽ/g, "🎁");
fixed = fixed.replace(/ðŸª/g, "🏪");
fixed = fixed.replace(/âœ"/g, "✓");
fixed = fixed.replace(/ðŸ'¥/g, "👥");
fixed = fixed.replace(/ðŸ"Š/g, "📊");
fixed = fixed.replace(/ðŸŒ/g, "🌐");
fixed = fixed.replace(/ðŸ›/g, "🛍️");
fixed = fixed.replace(/ðŸ"±/g, "📱");
fixed = fixed.replace(/ðŸ"'/g, "🔒");
fixed = fixed.replace(/âš¡/g, "⚡");
fixed = fixed.replace(/ðŸŽ¨/g, "🎨");
fixed = fixed.replace(/ðŸ"§/g, "📧");
fixed = fixed.replace(/ðŸ•/g, "🕐");
fixed = fixed.replace(/ðŸ'œ/g, "🧡");
fixed = fixed.replace(/ðŸ"¦/g, "📦");
fixed = fixed.replace(/â­/g, "⭐");
fixed = fixed.replace(/ðŸ"„/g, "🔄");
fixed = fixed.replace(/Â©/g, "©");
fixed = fixed.replace(/ðŸ¤/g, "🤝");

// Write back
fs.writeFileSync("./src/App.jsx", fixed, "utf8");
console.log("Done!");
