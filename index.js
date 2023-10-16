let customerName;

function upperCaseCustomerName() {
    if (customerName) {
        customerName = customerName.toUpperCase();
    }
}

function setBestCustomer() {
    bestCustomer = 'Essy';
}

function overwriteBestCustomer() {
    bestCustomer = 'Michelle';
}

const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'New Least Favorite';
}

customerName = 'Ashley';
console.log('Original customerName:', customerName);

upperCaseCustomerName();
console.log('Uppercased customerName:', customerName); 

setBestCustomer();
console.log('bestCustomer:', bestCustomer);

overwriteBestCustomer();
console.log('bestCustomer (after overwrite):', bestCustomer); 

console.log('leastFavoriteCustomer:', leastFavoriteCustomer);



