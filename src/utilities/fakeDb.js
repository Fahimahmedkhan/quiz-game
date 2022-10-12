const addToDb = () => {
    let count = 0;
    const stored = localStorage.getItem('correct-count');
    if (stored) {
        count = JSON.parse(stored);
    }
    const quantity = count;

    if (quantity) {
        const newQuantity = quantity + 1;
        count = newQuantity;
    }
    else {
        count = 1;
    }
    localStorage.setItem('correct-count', JSON.stringify(count));
};

const getFromDb = () => localStorage.getItem('correct-count');;


export {
    addToDb,
    getFromDb
}