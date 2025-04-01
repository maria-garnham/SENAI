
from machine import Pin, PWM, ADC
from utime import sleep

vermelho = PWM(Pin(13))
azul = PWM(Pin(14))
vermelho.freq(1000)
azul.freq(1000)
potenciometro = ADC(26)


while True:
    leitura = potenciometro.read_u16()

    azul.duty_u16(leitura)

    vermelho.duty_u16(65535 - leitura)
    sleep(0.05)