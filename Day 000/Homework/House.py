from turtle import *

#Main body
width(8)
color("Grey")
begin_fill()
forward(200)
left(90)



forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(80)
left(90)
end_fill()
#door
color ("black")

begin_fill()
forward(100)

right(90)
forward(50)
right(90)

forward(100)
penup()
end_fill()
goto (200,200)
#roof starts here
color("blue")
begin_fill()
pendown()
right(150)

forward(200)
left(120)
forward(200)
#window1
end_fill()
begin_fill()
penup()
goto(50,150)

pendown()
right(150)
forward(40)
left(90)

forward(40)
left(90)
forward(40)
left(90)
forward(40)
end_fill()
#window2
penup()
goto(150,150)
pendown()
begin_fill()

forward(40)
left(90)
forward(40)

left(90)
forward(40)
left(90)
forward(40)
end_fill()