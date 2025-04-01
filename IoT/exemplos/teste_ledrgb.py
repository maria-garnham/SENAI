from machine import Pin
from utime import sleep

led_red = Pin(17, Pin.OUT)
led_green = Pin(16, Pin.OUT)
led_blue = Pin(18, Pin.OUT)

led_red.value(0)
led_green.off()
led_blue.off()


while True:
    led_red.value(1)
    led_green.value(0)
    led_blue.value(0)
    sleep(1)
    
    led_red.value(0)
    led_green.value(1)
    led_blue.value(0)
    sleep(1)
    
    led_red.value(0)
    led_green.value(0)
    led_blue.value(1)
    sleep(1)
    
    led_red.value(1)
    led_green.value(0)
    led_blue.value(1)
    sleep(1)
    
    led_red.value(1)
    led_green.value(1)
    led_blue.value(0)
    sleep(1)
    
    led_red.value(0)
    led_green.value(1)
    led_blue.value(1)
    sleep(1)
    
    
    
    