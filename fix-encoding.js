const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');

// Read file
let content = fs.readFileSync(filePath, 'utf8');

// Fix emoji encoding
const fixes = {
  'ðŸ ': '🏠',
  'ðŸš€': '🚀',
  'âœ¨': '✨',
  'ðŸ'°': '💰',
  'ðŸ"ž': '📞',
  'ðŸŽ‰': '🎉',
  'ðŸŽ¯': '🎯',
  'ðŸ'ª': '💪',
  'ðŸ"¥': '🔥',
  'ðŸŽ': '🎁',
  'ðŸª': '🏪',
  'âœ"': '✓',
  'ðŸ'¥': '👥',
  'ðŸ"Š': '📊',
  'ðŸŒ': '🌐',
  'ðŸ›': '🛍️',
  'ðŸ"±': '📱',
  'ðŸ"'': '🔒',
  'âš¡': '⚡',
  'ðŸŽ¨': '🎨',
  'ðŸ"§': '📧',
  'ðŸ•': '🕐',
  'ðŸ'œ': '🧡',
  'ðŸ"¦': '📦',
  'â­': '⭐',
  'ðŸ"„': '🔄',
  'Â©': '©',
  'ðŸ¤': '🤝',
  'â€"': '—',
  'â€¢': '•',
  'ðŸ"²': '²',
  'ðŸ˜': '😊',
  'ðŸ'': '👍',
  'ðŸ†': '🆕',
  'ðŸ"': '🔍',
  'ðŸŽ­': '🎭',
  'ðŸš¦': '🚦'
};

// Apply all fixes
for (const [bad, good] of Object.entries(fixes)) {
  content = content.split(bad).join(good);
}

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ Encoding fixed successfully!');
