import pyperclip
from sys import argv
from secrets import choice

print("\n### Password generator ###")

args = argv[1:]

if len(args) == 2:
    length_str = args[0]
    option_str = args[1]
    if not (length_str.isnumeric() and length_str != "0"):
        print("\nThe length (1st parameter) needs to be a positive number")
        exit()
    if not option_str in ["1", "2", "3", "4"]:
        print("\nThe option (2nd parameter) needs to be one of 1,2,3,4")
        exit()
else:
    while True:
        length_str = input("\nInput the length of the password: ")
        length_str = length_str.strip()
        if length_str.isnumeric() and length_str != "0":
            break
        else:
            print("The length needs to be a positive number")

    print("\nThe following options are available:")
    print("(1) Lowercase letters. Example: rugjsnbvmqqpodl")
    print("(2) Letters. Example: AzRggHlpOqyapt")
    print("(3) Letters and numbers. Example: r81kjAr0I3Dc556z")
    print("(4) Letters, numbers and symbols. Example: G6&_:4@?l5cfh%")

    while True:
        option_str = input("\nPlease choose one of the options: ")
        option_str = option_str.strip().replace("(", "").replace(")", "")
        if option_str in ["1", "2", "3", "4"]:
            break
        else:
            print("The only valid options are 1,2,3,4")


length = int(length_str)
option = int(option_str)

lower_letters = "abcdefghijklmnopqrstuvwxyz"
upper_letters = lower_letters.upper()
letters = lower_letters + upper_letters
numbers = "0123456789"
symbols = "^[]()<>\"'`§$%&@~/\\*+-=#_.,;:!"

all_chars = []
if option == 1:
    all_chars = list(lower_letters)
elif option == 2:
    all_chars = list(letters)
elif option == 3:
    all_chars = list(letters + numbers)
elif option == 4:
    all_chars = list(letters + numbers + symbols)
else:
    exit()

pw = ""

for _ in range(length):
    pw += choice(all_chars)


print("\nPassword:")
print(pw)

try:
    pyperclip.copy(pw)
    print("\nCopied password to clipboard!")
except:
    print("\nCopy function not available")
