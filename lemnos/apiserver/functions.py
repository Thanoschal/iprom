
#conversion from degrees to compass direction
def degreestocompass(deg):
    if deg < 45:
        return "North"
    elif deg < 90:
        return "East"
    elif deg < 135:
        return "East"
    elif deg < 180:
        return "South"
    elif deg < 225:
        return "South"
    elif deg < 270:
        return "West"
    elif deg < 315:
        return "West"
    elif deg <= 360:
        return "North"
    else:
        return "Undefined"

#conversion from m/s to bf
def speedtobf(speed):
    if speed <= 0.3:
        return 0
    elif speed <= 1.5:
        return 1
    elif speed <= 3.3:
        return 2
    elif speed <= 6:
        return 3
    elif speed <= 8:
        return 4
    elif speed <= 11:
        return 5
    elif speed <= 14:
        return 6
    elif speed <= 17:
        return 7
    elif speed <= 21:
        return 8
    elif speed <= 25:
        return 9
    elif speed <= 29:
        return 10
    elif speed <= 33:
        return 11
    else:
        return 12
