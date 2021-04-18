class InsertionSort extends SortingAlgorithm {
    
    constructor(values) {
        super(values);
    }
    i = -1;
    step() {
        let insert = values[this.i];
        let j = this.i;
        while (j > 0 && values[j - 1] > insert) {
            values[j] = values[j - 1];
            j = j - 1;
            super.CountComparisons();
        }
        this.i++;
        values[j] = insert;
    }
}