import shutil, os

# Copy the uploaded Invisalign logo from media storage to public assets
src = r"C:\Users\edwin\.gemini\antigravity-ide\brain\57b7afc0-a3e0-4ae5-9bc1-07a32e52f77f\.tempmediaStorage\media_57b7afc0-a3e0-4ae5-9bc1-07a32e52f77f_1783013973644.jpg"
dst_dir = r"c:\Users\edwin\OneDrive\Desktop\perfect_smiles\perfect smiles\dr-abin-website\public\assets\about"
dst = os.path.join(dst_dir, "invisalign_provider_logo.jpg")

# List files in media storage to find the correct one
media_dir = r"C:\Users\edwin\.gemini\antigravity-ide\brain\57b7afc0-a3e0-4ae5-9bc1-07a32e52f77f\.tempmediaStorage"
files = sorted(os.listdir(media_dir))
for f in files[-20:]:  # list last 20 files
    print(f)
