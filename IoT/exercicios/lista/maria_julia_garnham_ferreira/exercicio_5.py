from machine import Pin, ADC, PWM
from utime import sleep

botao = Pin(16, Pin.IN)
potenciometro = ADC(26)
led_red = PWM(Pin(14))
led_blue = PWM(Pin(16))
led_green = PWM(Pin(18))

led_red.freq(1000)
led_blue.freq(1000)
led_green.freq(1000)

led_red.duty_u16(0)
led_blue.duty_u16(0)
led_green.duty_u16(0)

controle = 0
ultimo_estado_botao = 0

while True:
    estado_atual_botao = botao.value()

    if estado_atual_botao == 1 and ultimo_estado_botao == 0:
        controle += 1
        sleep(0.2)
        if controle > 2:
            controle = 0
        print (controle)
    
    if controle == 0:
        valor = potenciometro.read_u16()
        led_blue.duty_u16(0)
        led_green.duty_u16(0)
        led_red.duty_u16(valor)
    
    if controle == 1:
        valor = potenciometro.read_u16()
        led_blue.duty_u16(valor)
        led_red.duty_u16(0)
        led_green.duty_u16(0)
    
    if controle == 2:
        valor = potenciometro.read_u16()
        led_green.duty_u16(valor)
        led_red.duty_u16(0)
        led_blue.duty_u16(0)
        
    ultimo_estado_botao = estado_atual_botao
    sleep(0.01)