from big_sleep import Imagine

dream = Imagine(
    text = "a pyramid made of ice",
    lr = 5e-2,
    save_every = 25,
    save_progress = True
)

dream()