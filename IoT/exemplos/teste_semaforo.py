from machine import Pin, ADC, PWM
from utime import sleep

led = Pin("LED", Pin.OUT)
ledVermelho = Pin(16, Pin.OUT)
ledAmarelo = Pin(17, Pin.OUT)
ledVerde = Pin(18, Pin.OUT)

ledVermelho.value(0)
ledAmarelo.value(0)
ledVerde.value(0)

while True:
    #SEMAFORO ABRIU
    ledVerde.value(1)
    ledAmarelo.value(0)
    ledVermelho.value(0)
    sleep(3)
    
    #SEMAFORO AMARELO
    ledVerde.value(0)
    ledAmarelo(1)
    ledVermelho(0)
    sleep(1)
    
    #semaforo FECHADO
    ledVerde.value(0)
    ledAmarelo.value(0)
    ledVermelho.value(1)
    sleep(2)
