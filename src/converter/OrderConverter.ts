
import { DataUtil } from "../utils/DataUtils";
import { OrderEntity } from "../Entities/Order.entity";
import { OrderType } from "../Types/order/OrderType";
import { ProductEntity } from "../Entities/Product.entity";
import { ProductType } from "../Types/product/ProductType";


export class OrderConverter {
    private static readonly objectMapper = require('object-mapper')

    private static readonly mappeEntityToResponse = {
        "id": "id",
        "amount": "amount",
        "status": "status",
        "quantities": "quantities",
        "createdAt": { 
            key: "createdAt",
            transform: (value) => DataUtil.formatDateByFormat(value, 'DD/MM/YYYY, HH:mm:ss')
        },
        "updatedAt": { key: "updatedAt",
        transform: (value) => DataUtil.formatDateByFormat(value, 'DD/MM/YYYY, HH:mm:ss')
        },
        "seller.name": "seller.name",
        "products[]":{
            key: "products[]+",
            transform: (value) => this.converter(value)
        }
    }
    
    public static convertEntityToResponse(order: OrderEntity): OrderType {
        let orderType = new OrderType()
        orderType = this.objectMapper(order, orderType,this.mappeEntityToResponse)
        return orderType
    }

    private static converter(values: ProductEntity[]){
        let order = new OrderType()
        order.products = values.map((product) => {
            let productType = new ProductType()
            productType = this.convertEntityToResponseProduct(product)
            return productType
        })
        return order.products
    }

    private static readonly mappeEntityToResponseProduct = {
        name: "name",
        value: "value",
    }

    private static convertEntityToResponseProduct(product: ProductEntity) {
        let productType = new ProductType()
        productType = this.objectMapper(product, productType, this.mappeEntityToResponseProduct)
        return productType
    }

}