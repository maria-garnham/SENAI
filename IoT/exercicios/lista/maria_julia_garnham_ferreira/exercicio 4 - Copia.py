from machine import Pin, ADC, PWM
from utime import sleep

potenciometro = ADC(28)
led_red = PWM(Pin(14))
led_blue = PWM(Pin(15))
led_green = PWM(Pin(16))

led_red.freq(1000)
led_blue.freq(1000)
led_green.freq(1000)

while True:
    valor = potenciometro.read_u16()
    print(valor)
    led_red.duty_u16(valor)
    led_blue.duty_u16(0)
    led_green.duty_u16(0)
    sleep(0.3)