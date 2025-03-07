import Realm from "realm";
import { Brand } from "./models/Brand";
import { Gender } from "./models/Gender";
import { Category } from "./models/Category";
import { Size } from "./models/Size";
import { Shipping } from "./models/Shipping";
import { Product, ProductImage } from "./models/Product";
import { UserLoginId,User } from "./models/User";

const realm = new Realm({
    schema: [
        Brand,
        Gender,
        Category,
        Size,
        Shipping,
        Product,
        ProductImage,
        User,
        UserLoginId,
    ],
});
export default realm;