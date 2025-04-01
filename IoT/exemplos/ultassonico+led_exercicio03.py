from machine import Pin
from utime import sleep, ticks_us, ticks_diff

# Configurações de pinos
trig = Pin(16, Pin.OUT)  
echo = Pin(17, Pin.IN)

led_red= Pin(14, Pin.OUT)
led_green = Pin(13, Pin.OUT)

while True:

    trig.low()
    sleep(0.002)  
    
  
    trig.high()
    sleep(0.00001)
    trig.low()


    while echo.value() == 0:
        start = ticks_us()


    
    while echo.value() == 1:
        end = ticks_us()


    duracao = ticks_diff(end, start)


    distancia = (duracao * 0.0343) / 2
    
    if distancia < 30:
        led_red.on()
        led_green.off()
        
    else:
        led_green.on()
        led_red.off()



    print(f"Distância: {distancia:.2f} cm")
    
    sleep(1)  # Aguarda 1 segundo antes da próxima leitura

