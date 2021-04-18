
var socket;
let algSelection;
let displaySelection;

let canvasWidth = 1550;
let canvasHeight = 750;

let numberOfObjects = 500;
let numberArray = 0;
let maxValueHeight = canvasHeight - 50;
let itemWidth = canvasWidth / numberOfObjects;

let values = new Array(numberOfObjects);
let alg;
let input = '';

function SetupNewArray()
{
    input = createInput(numberArray);
    input.position(350,15);
    input.size(100);
    button = createButton('Submit');
    button.position(input.x + input.width,15);
    button.mousePressed(SubitNewArray());
}
function SubitNewArray()  {
    const value = input.value();

    this.values = new Array(value);
}
function setup() {
   
    socket = io.connect('http://localhost:8080');
    //SetupNewArray();
    algSelection = createSelect();
    algSelection.option('Bubble');
    algSelection.option('Insertion');
    algSelection.option('Selection');
    algSelection.option('Shaker');
    algSelection.option('Merge');
    algSelection.option('Quick');
    algSelection.changed(changeAlg);
    algSelection.position(15, 15);
   
    setRandomValues();
    alg = new BubbleSort(values);
    createCanvas(canvasWidth, canvasHeight);
    frameRate(60);
    displayValues();
}

function draw() {
    alg.step();
    displayValues();
}

function changeAlg() {
    let selection = algSelection.value();

    setRandomValues();

    switch (selection) {
        case 'Bubble':
            alg = new BubbleSort(values);
            break;
        case 'Insertion':
            alg = new InsertionSort(values);
            break;
        case 'Selection':
            alg = new SelectionSort(values);
            break;
        case 'Shaker':
            alg = new ShakerSort(values);
            break;
        case 'Merge':
             alg = new MergeSort(values);
             break;
        case 'Quick':
            alg = new QuickSort(values);
                break;
    }

    displayValues();
}

function changeDisplay() {
    displayValues();
}

function displayValues() {
    resetCanvas();

    for (let i = 0; i < values.length; i++) {
        rect(i * itemWidth, height - values[i], itemWidth, values[i]);
        noStroke();
    }

    noStroke();
    textSize(10);
    text("Comparisons Counter: " + alg.comparisons, 100, 30);
}

function resetCanvas() {
    clear();
    background(0, 0, 0);
    this.resetFillAndStroke();
}

function resetFillAndStroke() {
    fill(250, 250, 250);
    stroke(200, 300, 300);
}

function setRandomValues() {
    for (let i = 0; i < values.length; i++) {
        values[i] = random(maxValueHeight) + 1;
    }
}
