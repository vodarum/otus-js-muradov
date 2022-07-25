// Даны длины трёх сторон треугольника. Определить,
// является ли треугольник прямоугольным.

{
    const triangleSides = [3, 4, 5];
    const idxOfHypotenuse = getIndexOfHypotenuse(triangleSides);

    if (Math.pow(triangleSides[idxOfHypotenuse], 2) === getSumSquareСathetus()) {
        console.log('Треугольник прямоугольный');
    } else {
        console.log('Треугольник не прямоугольный');
    }

    /**
     * Получить индекс гипотенузы треугольника
     */
    function getIndexOfHypotenuse(triangleSides) {
        let idxOfHypotenuse = 0;

        for (let i = 1; i < triangleSides.length; i++) {
            if (triangleSides[i] > triangleSides[idxOfHypotenuse]) {
                idxOfHypotenuse = i;
            }
        }

        return idxOfHypotenuse;
    }

    /**
     * Получить сумму квадратов катетов треугольника
     */
    function getSumSquareСathetus() {
        let sumSquareСathetus = 0;

        for (let i = 0; i < triangleSides.length; i++) {
            if (i === idxOfHypotenuse) {
                continue;
            }

            sumSquareСathetus += Math.pow(triangleSides[i], 2);
        }

        return sumSquareСathetus;
    }
}