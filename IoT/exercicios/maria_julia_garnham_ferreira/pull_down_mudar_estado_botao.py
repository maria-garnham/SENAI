from machine import Pin
from utime import sleep

# Configurações
botao = Pin(2, Pin.IN)  # Usa PULL_DOWN interno
led = Pin(3, Pin.OUT)

estado_led = False  # Estado inicial do LED
ultimo_estado_botao = 0  # Para detectar borda de subida

while True:
    estado_atual_botao = botao.value()
    
    # Detecta mudança de 0 para 1 (borda de subida)
    if estado_atual_botao == 1 and ultimo_estado_botao == 0:
        estado_led = not estado_led
        led.value(estado_led)
        sleep(0.2)  # Debounce simples

    ultimo_estado_botao = estado_atual_botao
    sleep(0.01)  # Loop mais estável
