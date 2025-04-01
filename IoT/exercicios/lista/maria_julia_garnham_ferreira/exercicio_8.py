from machine import Pin, PWM
from utime import sleep
          
led = PWM(Pin(14))
led.freq(1000)
botao1 = Pin(16, Pin.IN)
cont = 0
while True:
    if botao1.value() == 1:
        cont += 1
        print(cont)
        if cont == 1:
            for duty in range(0, 65535, 500):
                led.duty_u16(duty)
                sleep(0.01)
        elif cont == 2:
            for duty in range(65535, 0, -500):
                led.duty_u16(duty)
                sleep(0.01)
        elif contr > 3:
            cont == 0