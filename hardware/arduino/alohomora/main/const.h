#ifndef const_H
#define const_H
/*-----------
  Packet value
  ------------*/
typedef void (* MFRC522_Data)();
typedef void (* NODEMCU_Data)();
typedef void (* SERVO)();
/*----------
  RFID reader Pins
  -----------*/
#define SS_PIN 10
#define RST_PIN 9
#define delayRead 1000 // Time of delay
/*----------
  LEDS Pins
  -----------*/
#define LedG_PIN 7 // Green LED
#define LedR_PIN 8 // RED LED
/*----------
  SERVO Pin
  -----------*/
#define Servo_PIN 3
/*----------
  BUZZER Pin
  -----------*/
#define Buzzer_PIN 2                                                            //Per mancanza di PIN PWM è stato collegato ad uno digitale senza PWM. Verrà attivato come fosse un LED
/*----------
  TIMER
  -----------*/
#define WaitTime 10000
/*----------
  Baud rates
  -----------*/
#define SERIAL_BAUD_RATE 9600
#define NODEMCU_BAUD_RATE 115200
/*----------
  SoftwareSerial Pins
  -----------*/
#define NODEMCU_RX_PIN 5
#define NODEMCU_TX_PIN 6
/*------
  EVENTS
  ------*/
#define MFRC522_READ_CARD_EVENT 0
#define NODEMCU_READ_EVENT 1
#define SERVO_OPEN_EVENT 2

#endif
