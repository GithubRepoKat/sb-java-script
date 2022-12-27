/* Canvas

6.1 В программе задана переменная ctx, которая содержит контекст canvas элемента. 
    Отрисуйте в canvas прямоугольник fillRect с размерами 100 на 65.

6.2 В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas два горизонтальных отрезка длиной 100.
    Координаты первого отрезка: точка 1: x = 100, y = 100; точка 2: x = 200, y = 100.
    Координаты второго отрезка: точка 1: x = 100, y = 150; точка 2: x = 200, y = 150.

6.3 В программе задана переменная ctx, которая содержит контекст canvas элемента. 
    Отрисуйте в canvas три отрезка разных цветов. 
    Первый отрезок красного #e74c3c цвета, второй — зеленого #16a085 цвета, а третий — синего #2980b9 цвета.

6.4 В программе задана переменная ctx, которая содержит контекст canvas элемента. 
    Отрисуйте в canvas четыре квадрата fillRect разных цветов с указанными на картинке размерами и отступами.

6.5 В программе задана переменная ctx, которая содержит контекст canvas элемента. 
    Отрисуйте в canvas 50 окружностей c центром в точке 150:150 и радиусом от 2 до 100. 
    Для решения данной задачи воспользуйтесь циклом.

6.6 В программе задана переменная ctx, которая содержит контекст canvas элемента. 
    Напишите программу, которая отрисовывает круги при движении мышью по canvas (для получения координат мыши используйте offsetX и offsetY). 
    Для решения задачи воспользуйтесь методом addEventListener у объекта document.
*/

// q 6.1
    let canvas = document.getElementById("root");
    let ctx = canvas.getContext("2d");
    ctx.fillRect(5, 5, 100, 65);

// q 6.2
    let canvas2 = document.getElementById("root");
    ctx = canvas2.getContext("2d");
    ctx.beginPath();

    // первый отрезок:
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);

    // второй отрезок:
    ctx.moveTo(100, 150);
    ctx.lineTo(200, 150);

    ctx.stroke();

// q 6.3
    let canvas3 = document.getElementById("root");
    ctx = canvas3.getContext("2d");

    // первый отрезок:
    ctx.beginPath();
    ctx.strokeStyle = '#e74c3c';
    ctx.moveTo(100, 50);
    ctx.lineTo(200, 50);
    ctx.stroke();

    // второй отрезок:
    ctx.beginPath();
    ctx.strokeStyle = '#16a085';
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();

    // третий отрезок:
    ctx.beginPath();
    ctx.strokeStyle = '#2980b9';
    ctx.moveTo(100, 150);
    ctx.lineTo(200, 150);
    ctx.stroke();

// q 6.4
    let canvas4 = document.getElementById("root");
    let ctx = canvas4.getContext("2d");
    ctx.beginPath();

    // первый квадрат:
    ctx.fillStyle = '#ff3d00';
    ctx.fillRect(10, 10, 100, 100);

    // второй квадрат:
    ctx.fillStyle = '#0bdd38';
    ctx.fillRect(120, 10, 100, 100);

    // третий квадрат:
    ctx.fillStyle = '#2e77da';
    ctx.fillRect(10, 120, 100, 100);

    // четвёртый квадрат:
    ctx.fillStyle = '#ffd200';
    ctx.fillRect(120, 120, 100, 100);

    ctx.fill();

// q 6.5
    let canvas5 = document.getElementById("root");
    let ctx = canvas5.getContext("2d");
    let radius = 2;
    for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.arc(150, 150, radius, 0, 2 * Math.PI);
        ctx.fill();
        radius +=2;
    }

// q 6.6
    document.addEventListener('mousemove', e => {
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, 50, 0, 2*Math.PI);
        ctx.stroke();
    })
