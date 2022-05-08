def my_func(args, context):
    return {"MyReturn": args["MyInput"] + "-suffix"}

def bad_func(args, context):
    return {"MyReturn": args["INPUT_DOES_NOT_EXIST"] + "-suffix"}
