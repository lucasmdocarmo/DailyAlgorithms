class InsertionSort extends SortingAlgorithm {
    
    i = 1;

    constructor(values) {
        super(values);
    }

    step() {
        let insert = values[this.i];
        let j = this.i;
        while (j > 0 && values[j - 1] > insert) {
            values[j] = values[j - 1];
            j = j - 1;
            super.CountComparisons();
        }
        values[j] = insert;
        this.i++;
        
    }
}