class SelectionSort extends SortingAlgorithm {

    

    constructor(values) {
        super(values);
    }

    step() {
        this.i = 0;
        for (let j = this.i + 1; j < values.length; j++) {
                if (values[this.i] > values[j]) {
                    super.CountComparisons();
                    super.swap(values, this.i, j);
                }
            }

            this.i++;
        }
    }
