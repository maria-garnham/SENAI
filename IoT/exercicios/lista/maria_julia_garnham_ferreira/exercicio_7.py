from machine import Pin, PWM
from utime import sleep


botao_aumentar = Pin(16, Pin.IN)
botao_diminuir = Pin(17, Pin.IN)
led_pwm = PWM(Pin(14))

led_pwm.freq(1000)

nivel_brilho = 0

while True:
    if botao_aumentar.value() == 1:
        nivel_brilho += 10
        led_pwm.duty_u16(nivel_brilho)
        print(nivel_brilho)
        sleep(0.5)

    elif botao_diminuir.value() == 1:
        nivel_brilho -= 10
        led_pwm.duty_u16(nivel_brilho)
        print(nivel_brilho)
        sleep(0.5)