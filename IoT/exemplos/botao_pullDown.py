from machine import Pin
from utime import sleep

led = Pin (15, Pin.OUT)
botao = Pin (5, Pin.IN)

while True:
  valor = botao.value()

  if valor == 1:
    led.on()
    sleep(0.5)
  else:
    led.off()