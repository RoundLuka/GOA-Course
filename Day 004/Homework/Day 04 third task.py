from turtle import *
import turtle
#workspace

#workspace s = 900
#workspace height = 760


#enviroment/sky

#general





while True:

    day_night = input("What time is it at GOA World daytime or nighttime (day/night): ").lower()
    if day_night == "day":
        width(8)
        speed(10)
        color("Blue")
        penup()
        goto(450,380)
        pendown()
        left(180)
        begin_fill()
        forward(900)
        left(90)
        forward(760) 
        left(90)
        forward(900)
        left(90)
        forward(760)  
        end_fill()
        #different part sun/moon for day case its sun
        color("Yellow")

        penup()
        left(180)
        goto(300,300)
        pendown()
        begin_fill()
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        end_fill()
        #clouds
        color("white")
        penup()
        right(90)
        goto(0,300)
        pendown()
        begin_fill()
        forward(70)
        right(30)
        forward(100)
        right(40)
        forward(80)
        left(20)
        forward(30)
        left(60)
        forward(80)
        left(60)
        forward(60)
        left(40)
        forward(70)
        left(60)
        forward(240)
        left(50)
        forward(40)
        end_fill()
        #ground
        color("Green")

        penup()

        goto(-450,0)
        pendown()
        right(60)
        begin_fill()
        forward(900)
        right(90)
        forward(300)
        right(90)
        forward(900)
        right(90)
        end_fill()

        #G
        penup()
        goto(-300,120) #goa height
        
        pendown()
        right(90)
        forward(30)
        right(90)
        forward(30)
        right(90)
        forward(30)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        #O
        penup()
        forward(100)
        pendown()
        right(20)
        begin_fill()
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)

        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        end_fill()
        #A
        penup()
        forward(100)
        pendown()
        left(90)
        forward(150)
        right(144)
        forward(150)
        penup()
        right(180)
        forward(75)
        pendown()
        left(90)
        forward(100)
        #Tree
        penup()
        goto(-180,0)
        color("Brown")
        pendown()
        right(80)
        begin_fill()
        forward(90)
        right(90)
        forward(20)
        right(90)
        forward(90)
        right(20)
        end_fill()

        #house
        #house
        penup()
        goto(50,0)
        pendown()
        color("gray")
        left(105)
        #Main blueprint
        
        begin_fill()
        forward(100)
        left(90)



        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(40)
        left(90)
        end_fill()
        #door
        color ("red")

        begin_fill()
        forward(50)

        right(90)
        forward(25)
        right(90)

        forward(50)
        penup()
        end_fill()
        goto (150,100)
        #roof starts here
        color("purple")
        begin_fill()
        pendown()
        right(150)

        forward(100)
        left(120)
        forward(100)
        #window1
        end_fill()
        begin_fill()
        penup()
        goto(75,75)

        pendown()
        right(150)
        forward(20)
        left(90)

        forward(20)
        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #window2
        penup()
        goto(125,75)
        pendown()
        begin_fill()

        forward(20)
        left(90)
        forward(20)

        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #house2
        penup()
        goto(200,0)
        pendown()
        color("gray")
        left(90)
        #Main blueprint
        begin_fill()
        forward(100)
        left(90)



        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(40)
        left(90)
        end_fill()
        #door
        color ("red")

        begin_fill()
        forward(50)

        right(90)
        forward(25)
        right(90)

        forward(50)
        penup()
        end_fill()
        goto (300,100)
        #roof starts here
        color("purple")
        begin_fill()
        pendown()
        right(150)

        forward(100)
        left(120)
        forward(100)
        #window1
        end_fill()
        begin_fill()
        penup()
        goto(225,75)

        pendown()
        right(150)
        forward(20)
        left(90)

        forward(20)
        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #window2
        penup()
        goto(275,75)
        pendown()
        begin_fill()

        forward(20)
        left(90)
        forward(20)

        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #house3
        penup()
        goto(350,0)
        pendown()
        color("gray")
        left(90)
        #Main blueprint
        begin_fill()
        forward(100)
        left(90)



        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(40)
        left(90)
        end_fill()
        #door
        color ("red")

        begin_fill()
        forward(50)

        right(90)
        forward(25)
        right(90)

        forward(50)
        penup()
        end_fill()
        goto (450,100)
        #roof starts here
        color("purple")
        begin_fill()
        pendown()
        right(150)

        forward(100)
        left(120)
        forward(100)
        #window1
        end_fill()
        begin_fill()
        penup()
        goto(375,75)

        pendown()
        right(150)
        forward(20)
        left(90)

        forward(20)
        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #window2
        penup()
        goto(425,75)
        pendown()
        begin_fill()

        forward(20)
        left(90)
        forward(20)

        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #fence1
        penup()
        goto(30,0)
        pendown()
        color("brown")
        right(90)
        forward(40)
        right(180)
        forward(40)
        right(180)
        forward(40)
        left(90)
        forward(100)
        left(90)
        forward(70)
        #gate1
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(60)
        left(90)
        forward(100)
        left(90)
        forward(40)
        #fence2
        penup()
        goto(220,0)
        pendown()
        color("brown")
        
        forward(40)
        right(180)
        forward(40)
        right(180)
        forward(40)
        left(90)
        forward(100)
        left(90)
        forward(70)
        #gate2
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(60)
        left(90)
        forward(100)
        left(90)
        forward(40)
        #fence3
        penup()
        goto(370,0)
        pendown()
        color("brown")
        
        forward(40)
        right(180)
        forward(40)
        right(180)
        forward(40)
        left(90)
        forward(100)
        left(90)
        forward(70)
        #gate3
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(60)
        left(90)
        forward(100)
        left(90)
        forward(40)
       
        


       
        
       



     
        

        break
    elif day_night == "night":
        width(8)
        speed(10)
        color("Black")
        penup()
        goto(450,380)
        pendown()
        left(180)
        
        forward(900)
        begin_fill()
        left(90)
        forward(760) 
        left(90)
        forward(900)
        left(90)
        forward(760)
        end_fill()
        color("Gray")
        #moon
        penup()
        left(180)
        goto(300,300)
        pendown()
        begin_fill()
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        forward(20)
        left(20)
        end_fill()
        #stars
        penup()
        goto(0,300)
        pendown()
        #star1
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        penup()
        #star2
        goto(150,300)
        pendown()
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        penup()
        #star3
        goto(-200,300)
        pendown()
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        penup()
        #4star
        goto(-400,300)
        pendown()
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)
        forward(100)
        right(144)

        #ground
        color("Green")

        penup()

        goto(-450,0)
        pendown()
        right(290)
        begin_fill()
        forward(900)
        right(90)
        forward(300)
        right(90)
        forward(900)
        right(90)
        end_fill()
        penup()
        goto(-300,120) #goa height
        
        pendown()
        right(90)
        forward(30)
        right(90)
        forward(30)
        right(90)
        forward(30)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        #O
        penup()
        forward(100)
        pendown()
        right(20)
        begin_fill()
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)

        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        right(20)
        forward(20)
        end_fill()
        #A
        penup()
        forward(100)
        pendown()
        left(90)
        forward(150)
        right(144)
        forward(150)
        penup()
        right(180)
        forward(75)
        pendown()
        left(90)
        forward(100)
        #Tree
        penup()
        goto(-180,0)
        color("Brown")
        pendown()
        right(80)
        begin_fill()
        forward(90)
        right(90)
        forward(20)
        right(90)
        forward(90)
        right(20)
        end_fill()

        #house
        penup()
        goto(50,0)
        pendown()
        color("gray")
        left(105)
        #Main blueprint
        
        begin_fill()
        forward(100)
        left(90)



        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(40)
        left(90)
        end_fill()
        #door
        color ("red")

        begin_fill()
        forward(50)

        right(90)
        forward(25)
        right(90)

        forward(50)
        penup()
        end_fill()
        goto (150,100)
        #roof starts here
        color("purple")
        begin_fill()
        pendown()
        right(150)

        forward(100)
        left(120)
        forward(100)
        #window1
        end_fill()
        begin_fill()
        penup()
        goto(75,75)

        pendown()
        right(150)
        forward(20)
        left(90)

        forward(20)
        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #window2
        penup()
        goto(125,75)
        pendown()
        begin_fill()

        forward(20)
        left(90)
        forward(20)

        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #house2
        penup()
        goto(200,0)
        pendown()
        color("gray")
        left(90)
        #Main blueprint
        begin_fill()
        forward(100)
        left(90)



        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(40)
        left(90)
        end_fill()
        #door
        color ("red")

        begin_fill()
        forward(50)

        right(90)
        forward(25)
        right(90)

        forward(50)
        penup()
        end_fill()
        goto (300,100)
        #roof starts here
        color("purple")
        begin_fill()
        pendown()
        right(150)

        forward(100)
        left(120)
        forward(100)
        #window1
        end_fill()
        begin_fill()
        penup()
        goto(225,75)

        pendown()
        right(150)
        forward(20)
        left(90)

        forward(20)
        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #window2
        penup()
        goto(275,75)
        pendown()
        begin_fill()

        forward(20)
        left(90)
        forward(20)

        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #house3
        penup()
        goto(350,0)
        pendown()
        color("gray")
        left(90)
        #Main blueprint
        begin_fill()
        forward(100)
        left(90)



        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(100)
        left(90)

        forward(40)
        left(90)
        end_fill()
        #door
        color ("red")

        begin_fill()
        forward(50)

        right(90)
        forward(25)
        right(90)

        forward(50)
        penup()
        end_fill()
        goto (450,100)
        #roof starts here
        color("purple")
        begin_fill()
        pendown()
        right(150)

        forward(100)
        left(120)
        forward(100)
        #window1
        end_fill()
        begin_fill()
        penup()
        goto(375,75)

        pendown()
        right(150)
        forward(20)
        left(90)

        forward(20)
        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #window2
        penup()
        goto(425,75)
        pendown()
        begin_fill()

        forward(20)
        left(90)
        forward(20)

        left(90)
        forward(20)
        left(90)
        forward(20)
        end_fill()
        #fence1
        penup()
        goto(30,0)
        pendown()
        color("brown")
        right(90)
        forward(40)
        right(180)
        forward(40)
        right(180)
        forward(40)
        left(90)
        forward(100)
        left(90)
        forward(70)
        #gate1
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(60)
        left(90)
        forward(100)
        left(90)
        forward(40)
        #fence2
        penup()
        goto(220,0)
        pendown()
        color("brown")
        
        forward(40)
        right(180)
        forward(40)
        right(180)
        forward(40)
        left(90)
        forward(100)
        left(90)
        forward(70)
        #gate2
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(60)
        left(90)
        forward(100)
        left(90)
        forward(40)
        #fence3
        penup()
        goto(370,0)
        pendown()
        color("brown")
        
        forward(40)
        right(180)
        forward(40)
        right(180)
        forward(40)
        left(90)
        forward(100)
        left(90)
        forward(70)
        #gate3
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(30)
        left(90)
        forward(60)
        left(90)
        forward(100)
        left(90)
        forward(40)
        

        
        

    
    
        


        

    
        break
    else:
        print("Invaild answer please try again")
        continue









#workspace

#workspace s = 900
#workspace height = 760


#enviroment/sky




    
         





