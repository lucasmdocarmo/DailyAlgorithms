class SelectionSort extends SortingAlgorithm {

    i = 0;

    constructor(values) {
        super(values);
    }

    step() {

        for (let j = this.i + 1; j < values.length; j++) {
                if (values[this.i] > values[j]) {
                    super.CountComparisons();
                    super.swap(values, this.i, j);
                }
            }
        this.i++;
        }
    }
