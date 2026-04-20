import os

directory = r"c:\Users\hp\Desktop\mitsvirtual2\src"

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    new_content = content.replace("AI Building", "New Academic Block")
    new_content = new_content.replace("AI Department", "New Academic Block")
    
    if new_content != content:
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filepath}")
        except Exception as e:
            print(f"Error writing {filepath}: {e}")

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith(('.ts', '.tsx')):
            replace_in_file(os.path.join(root, file))

print("Done")
