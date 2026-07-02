with open(r'c:\Users\edwin\OneDrive\Desktop\perfect_smiles\perfect smiles\dr-abin-website\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

badge_block = '''

          <!-- Invisalign Provider Badge -->
          <div style="margin-top: 2.5rem; display: flex; justify-content: center;">
            <img src="./assets/about/invisalign_provider_logo.svg" alt="Invisalign Provider" class="invisalign-section-badge" />
          </div>'''

# Insert after the stats-grid closing div (</div>), before the about-content closing div
marker = '          </div>\n        </div>\n      </div>\n    </section>\n\n    <div class="gold-glow-divider"></div>\n\n    <!-- Services Section -->'
replacement = '          </div>' + badge_block + '\n        </div>\n      </div>\n    </section>\n\n    <div class="gold-glow-divider"></div>\n\n    <!-- Services Section -->'

if marker in content:
    content = content.replace(marker, replacement, 1)
    with open(r'c:\Users\edwin\OneDrive\Desktop\perfect_smiles\perfect smiles\dr-abin-website\index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Done! Badge inserted after languages grid.')
else:
    print('Marker not found. Searching for nearby text...')
    idx = content.find('Languages Spoken')
    print(repr(content[idx:idx+200]))
