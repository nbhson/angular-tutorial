class ProductModel {
    name: string;
    price: number;
}

interface CartItem {
    product: ProductModel;
    quantity: number;
}

class CartService {
    private selectedProducts: CartItem[] = [];

    public addToCart(product: CartItem): void {
        this.selectedProducts.push(product)
    }

    public getTotalProducts(): CartItem[] {
        return this.selectedProducts;
    }
}

/** 
 * DI cách cho một component quản lí instance của những thằng service
 * Component lúc này sẽ đang phụ thuộc những thằng server được tiêm vào
 * Một thư viện để tạo DI trong TS: https://github.com/microsoft/tsyringe
 */

/** CÁCH 1 - Tạo instance quản lí từ bên trong */
// class ProductComponent {
//     cách viết 1
//     cartService: CartService = new CartService();
//     cách viết 2
//     constructor(public cartService: CartService = new CartService()) {}
// }
// const productComponent = new ProductComponent()
// console.log(productComponent);

/** CÁCH 2 - Tạo instance quản lí bên ngoài */
class ProductComponent {
    constructor(public cartService: CartService) { }
}

const cartService: CartService = new CartService();
const productDetailComponent = new ProductComponent(cartService)

productDetailComponent.cartService.addToCart({
    product: {
        name: 'Iphone 14',
        price: 34000000
    },
    quantity: 1
});

console.log(productDetailComponent.cartService.getTotalProducts());

const cartComponent = new ProductComponent(cartService)

console.log(cartComponent.cartService.getTotalProducts());