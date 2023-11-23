interface Variation {
    color: string;
    colorCode: string;
    image: string;
}

export interface ProductType {
    id: string,
    category: string,
    type: string,
    name: string,
    gender: string,
    new: boolean,
    sale: boolean,
    rate: number,
    price: number,
    originPrice: number,
    brand: string,
    quantity: number,
    sizes: Array<string>,
    variation: Variation[],
    thumbImage: Array<string>,
    images: Array<string>,
    description: string,
    action: string,
    slug: string
}