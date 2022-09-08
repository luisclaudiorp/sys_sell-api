
import { DataUtil } from "../utils/DataUtils";
import { SellerEntity } from "../Entities/Seller.entity";
import { SellerType } from "../Types/seller/SellerType";

export class SellerConverter {
    private static readonly objectMapper = require('object-mapper')

    private static readonly mappeEntityToResponse = {
            cpf: "cpf",
            name: "name",
            createdAt: {
                key: "createdAt",
                transform: (value) => DataUtil.formatDateByFormat(value, 'DD/MM/YYYY, HH:mm:ss')
            },
            updatedAt:{ 
                key: "updatedAt",
                transform: (value) => DataUtil.formatDateByFormat(value, 'DD/MM/YYYY, HH:mm:ss')
            },
    }

    public static convertEntityToResponse(seller: SellerEntity): SellerType {
        let sellerType = new SellerType()
        sellerType = this.objectMapper(seller, sellerType,this.mappeEntityToResponse)
        return sellerType
    }
}