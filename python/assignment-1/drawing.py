import random
from matplotlib import pyplot
x = random.uniform(-0.5, 0.5)
y = random.uniform(-0.5, 0.5)


a = [random.uniform(-2, 2) for i in range(12)]


x_list = [x]
y_list = [y]

for i in range(10):



    xnew = a[0] + a[1]*x + a[2]*x*x + a[3]*y + a[4]*y*y + a[5]*x*y
    ynew = a[6] + a[7]*x + a[8]*x*x + a[9]*y + a[10]*y*y + a[11]*x*y


    x = xnew
    y = ynew


x_list.append(x)
y_list.append(y)

pyplot.scatter(x_list, y_list)
pyplot.show()
