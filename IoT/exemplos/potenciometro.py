from machine import Pin, ADC
from utime import sleep

potenciometro = ADC(26)

while True:
    valor = potenciometro.read_u16()
    print(valor)
    sleep(0.3)