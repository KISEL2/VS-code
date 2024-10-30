let figure;
let length;
let operation;
let state = true;

const operations = {
    perimetr: "Perimetr",
    area: "Area"
}

const figures = {
    square: "Square",
    triangle: "Triangle",
    circle: "Circle",
    
    calculateSquare(length, operation) {
        if (operation === operations.perimetr) {
            alert(`Perimeter: ${length * 4}`);
        } else if (operation === operations.area) {
            alert(`Area: ${length * length}`);
        }
    },
    
    calculateTriangle(length, operation) {
        if (operation === operations.perimetr) {
            alert(`Perimeter: ${length * 3}`);
        } else if (operation === operations.area) {
            alert(`Area: ${(length * length * Math.sqrt(3)) / 4}`);
        }
    },
    
    calculateCircle(length, operation) {
        if (operation === operations.perimetr) {
            alert(`Perimeter: ${2 * Math.PI * length}`);
        } else if (operation === operations.area) {
            alert(`Area: ${Math.PI * (length * length)}`);
        }
    }
}

while (state) {
    figure = prompt(`Choose a figure: ${figures.square}, ${figures.triangle}, or ${figures.circle}`);
    
    if (figure !== figures.square && figure !== figures.triangle && figure !== figures.circle) {
        alert("Invalid figure. Please enter Square, Triangle, or Circle.");
        state = false;
        continue;
    }
    
    operation = prompt(`Choose an operation: ${operations.perimetr} or ${operations.area}`);
    
    if (operation !== operations.perimetr && operation !== operations.area) {
        alert("Invalid operation. Please enter Perimetr or Area.");
        state = false;
        continue;
    }
    
    length = prompt(`Enter the length of a side (all sides are equal):`, 2);
    
    if (isNaN(length) || length <= 0) {
        alert("Invalid length. Please enter a positive number.");
        state = false;
        continue;
    }
    
    if (figure === figures.square) {
        figures.calculateSquare(length, operation);
    } else if (figure === figures.triangle) {
        figures.calculateTriangle(length, operation);
    } else if (figure === figures.circle) {
        figures.calculateCircle(length, operation);
    }
    
    state = confirm("Do you want to repeat?");
}
