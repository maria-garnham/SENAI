from machine import Pin, ADC
from utime import sleep


led = Pin(14, Pin.OUT)
potenciometro = ADC(28)

while True:
    
    valor = potenciometro.read_u16()
    
    
    tempo = 0.01 + (valor / 65535)

    
    led.on()
    sleep(tempo)

    
    led.off()
    sleep(tempo)