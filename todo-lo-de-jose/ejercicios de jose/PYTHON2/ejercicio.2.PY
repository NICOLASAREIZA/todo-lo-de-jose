print("Ejemplo 2")


nota1 = int (input("Escribe tu primer nota: "))
nota2 = int (input("Escribe tu segunda nota: "))
nota3 = int (input("Escribe tu tercer nota "))


suma = (nota1+nota2+nota3)/3

if suma > 70:
    print ("usted aprobo",suma)
    
elif suma <70:
    print ("Usted reprobo",suma)
