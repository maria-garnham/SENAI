from machine import Pin,PWM, ADC
from utime import sleep

potenciometro = ADC(26)          # Leitura do potenciômetro no ADC0
led = PWM(Pin(15))     # LED no pino 15
led.freq(1000)
led.duty_u16(0)

while True:
    valor = potenciometro.read_u16()
    print ("Valor original:", valor)
    sleep(0.5)
    
    
    porcentagem_valor = int((valor * 100) / 65535)
    print(f"Valor porcentagem: {porcentagem_valor}%")
                            
                            
    def mapear(leitura_potenciometro, in_min, in_max, out_min, out_max):
        return int((leitura_potenciometro - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
    
    valor_mapeado = mapear(valor, 0, 65535, 0, 255)
    print(f"Valor mapeado: " , valor_mapeado)
                            
    led.duty_u16(valor)
    sleep(0.3)

