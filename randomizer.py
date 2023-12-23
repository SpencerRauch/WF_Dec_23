import random
import time

choices = [
"choice 1",
"choice 2",
"choice 3"
]

input("Randomizer started. Hit enter to pull a presenter")
while(len(choices) > 0):
    print("Drum roll please",end="")
    for i in range(5):
        time.sleep(0.5)
        if i <= 3:
            print(". ", end="", flush=True)
        else:
            print(". \n")
    chosen = random.choice(choices)
    choices.remove(chosen)
    print("*" * 20)
    if len(choices) == 0:
        print(f"Last, but certainly not least, we have {chosen}")
        print("*" * 20)
    else:
        print(f"Hey, {chosen} you're up!  \n Remaining folks: {choices}")
        print("*" * 20)
        input("Again? \n")