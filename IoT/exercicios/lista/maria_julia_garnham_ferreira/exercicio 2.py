from machine import Pin, PWM
from utime import sleep

led = PWM(Pin(17))
led.freq(1000)

while True:
    
    for i in range(0, 65535, 1000):  
        led.duty_u16(i)               
        sleep(0.01)
        
    for i in range(65535, 0, -1000):  
        led.duty_u16(i)
        sleep(0.01)