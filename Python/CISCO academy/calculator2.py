hour = int(input("Starting time (hours): "))
mins = int(input("Starting time (minutes): "))
dura = int(input("Event duration (minutes): "))
endHour = int ((hour *60 + mins + dura)//60)
endMin = int ((hour *60 + mins + dura)%60)

print ( "If an event starts at", hour, ":", mins, "and lasts", dura, "minutes, it will end at", endHour, ":", endMin, ".")