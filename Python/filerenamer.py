import os

print("---------------\nFile renamer\n----------------")

files = []

while len(files) == 0:
    path = input("\nWhich directory do you want to work in? ")

    try:
        os.chdir(path)
    except:
        print("\nNo such directory has ben found!")
        continue

    to_replace = ""
    while len(to_replace) == 0:
        to_replace = input("\nWhich string do you want to replace? ")

    all_files = os.listdir()

    files = [file for file in all_files if os.path.isfile(file) and to_replace in file]

    if len(files) == 0:
        print("\nThere are no files with the specified string.")

print("\n Have found the following Files:")
print(",".join(files))

replace_with = input(f'\nWhich string should "{to_replace}" become? ')

new_names = []

for file in files:
    new_name = file.replace(to_replace, replace_with)
    try:
        os.rename(file, new_name)
        new_names.append(new_name)
    except:
        print(f'\nCould not find "{file}" anymore')

print("\nThe new names are: ")
print(", ".join(new_names))
