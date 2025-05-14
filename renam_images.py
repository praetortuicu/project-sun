import os
from pathlib import Path

# Folder containing your .jpeg files
image_dir = Path("./assets/poze")  # Change this if needed

# Get list of .jpeg files
jpeg_files = sorted(
    [f for f in image_dir.iterdir() if f.suffix.lower() == ".jpeg"],
    key=lambda f: f.stat().st_mtime  # Sort by modification time
)

# Rename files
for i, file in enumerate(jpeg_files, start=1):
    new_name = image_dir / f"image{i}.jpeg"
    print(f"Renaming: {file.name} -> {new_name.name}")
    file.rename(new_name)

print("✅ Done renaming images!")
