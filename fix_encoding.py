# -*- coding: utf-8 -*-
import codecs

# Read file with UTF-8 encoding
with codecs.open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix all corrupted emoji
fixes = [
    ('ðŸ ', '🏠'),
    ('ðŸš€', '🚀'),
    ('âœ¨', '✨'),
    ('ðŸ'°', '💰'),
    ('ðŸ"ž', '📞'),
    ('ðŸŽ‰', '🎉'),
    ('ðŸŽ¯', '🎯'),
    ('ðŸ'ª', '💪'),
    ('ðŸ"¥', '🔥'),
    ('ðŸŽ', '🎁'),
    ('ðŸª', '🏪'),
    ('âœ"', '✓'),
    ('ðŸ'¥', '👥'),
    ('ðŸ"Š', '📊'),
    ('ðŸŒ', '🌐'),
    ('ðŸ›', '🛍️'),
    ('ðŸ"±', '📱'),
    ('ðŸ"'', '🔒'),
    ('âš¡', '⚡'),
    ('ðŸŽ¨', '🎨'),
    ('ðŸ"§', '📧'),
    ('ðŸ•', '🕐'),
    ('ðŸ'œ', '🧡'),
    ('ðŸ"¦', '📦'),
    ('â­', '⭐'),
    ('ðŸ"„', '🔄'),
    ('Â©', '©'),
    ('ðŸ¤', '🤝'),
]

# Apply all fixes
for bad, good in fixes:
    content = content.replace(bad, good)

# Write back
with codecs.open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('✓ Encoding fixed!')
