function generatePurchaseCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let purchaseCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        purchaseCode += characters[randomIndex];
    }
    return purchaseCode;
}

const purchaseCode = generatePurchaseCode(35);
console.log('Random Purchase Code:', purchaseCode);
