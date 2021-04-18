let algSelection;
let displaySelection;

let canvasWidth = 1550;
let canvasHeight = 750;

let numberOfObjects = 800;
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
   

    SetupNewArray();
    algSelection = createSelect();
    algSelection.option('Bubble');
    algSelection.option('Insertion');
    algSelection.option('Selection');
    algSelection.option('Shaker');
    algSelection.changed(changeAlg);
    algSelection.position(15, 15);

    displaySelection = createSelect();
    displaySelection.option('Dots');
    displaySelection.option('Bars');
    displaySelection.changed(changeDisplay);
    displaySelection.position(105, 15);



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
    }

    displayValues();
}

function changeDisplay() {
    displayValues();
}

function displayValues() {
    resetCanvas();
    let selectedDisplay = displaySelection.value();

    for (let i = 0; i < values.length; i++) {
        switch (selectedDisplay) {
            case 'Bars':
                noStroke();
                rect(i * itemWidth, height - values[i], itemWidth, values[i]);
                break;
            case 'Dots':
                strokeWeight(itemWidth);
                point(i * itemWidth + itemWidth / 2, height - values[i]);
                break;
        }

        this.resetFillAndStroke();
    }

    noStroke();
    textSize(10);
    text("Comparisons Counter: " + alg.comparisons, 170, 30);
}

function resetCanvas() {
    clear();
    background(50, 50, 50);
    this.resetFillAndStroke();
}

function resetFillAndStroke() {
    fill(200, 200, 200);
    stroke(100, 100, 200);
}

function setRandomValues() {
    for (let i = 0; i < values.length; i++) {
        values[i] = random(maxValueHeight) + 5;
    }
}
