
import { DataUtil } from "../utils/DataUtils";
import { ProductEntity } from "../Entities/Product.entity";
import { ProductType } from "../Types/product/ProductType";

export class ProductConverter {
    private static readonly objectMapper = require('object-mapper')

    private static readonly mappeEntityToResponse = {
            id: "id",
            name: "name",
            value: "value",
            quantities: "quantities",
            createdAt: {
                key: "createdAt",
                transform: (value) => DataUtil.formatDateByFormat(value, 'DD-MM-YYYY, HH:mm:ss')
            },
            updatedAt:{ 
                key: "updatedAt",
                transform: (value) => DataUtil.formatDateByFormat(value, 'DD-MM-YYYY, HH:mm:ss')
            },
    }

    public static convertEntityToResponse(product: ProductEntity): ProductType {
        let productType = new ProductType()
        productType = this.objectMapper(product, productType,this.mappeEntityToResponse)
        return productType
    }
}