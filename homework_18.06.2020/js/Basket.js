export default class Products {

    setTitle(wrapper) {
        wrapper.append(`
                <h2 class="title">Basket:</h2>
                <div class="result"></div>
            `);
    }

    setTableHeader() {
        $('.result').append(`
                <h3>№</h3>
                <h3>Product</h3>
                <h3>Quantity</h3>
                <h3 class="prices">Price</h3>
            `);
    }

    setItems(number, product, quantity, price, count) {
        $('.result').append(`
            <div>${number}.</div>
            <div>${product}</div>
            <div class="quantity"><input type="number" min="1" max="${count}" step="0.1" value="${quantity}"><span>kg</span></div>
            <div class="price">${price}</div>
        `);
    }
}