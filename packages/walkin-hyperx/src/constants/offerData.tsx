export const offerStepData = [
    {
        id: 1,
        route: 'basicInfo',
        title: 'Basic Info',
    },
    {
        id: 2,
        title: 'Redemption Rule',
        route: 'redemptionRule',
    },
];
export const couponTypeData = [
    {
        id: 1,
        value: 1,
        title: 'Static',
    },
    {
        id: 2,
        value: '2',
        title: 'No Coupon Code',
    },
];
export const offerTypeData = [
    {
        id: 1,
        value: 'PERCENTAGE_DISCOUNT',
        title: 'Discount on the bill',
        extra: '%'
    },
    {
        id: 2,
        value: 'FLATX_DISCOUNT',
        title: 'Flat Xrs off on the bill',
        extra: ' Rs'
    },
    {
        id: 3,
        value: 'PERCENTAGE_CASHBACK',
        title: '% Cashback on the bill',
        extra: '%'
    },
    {
        id: 4,
        value: 'FLATX_CASHBACK',
        title: 'Flat X Cashback on the bill',
    },
    {
        id: 5,
        value: 'FREE_ITMES_FROM_LIST',
        title: 'Any item/items from the list',
    },
];

export var transactionTimeData = [
    {
        id: 1,
        value: 'frequency',
        title: 'Frequency',
    }, {
        id: 2,
        value: 'cartValue',
        title: 'Cart value aka Bill size',
    },
    {
        id: 3,
        value: 'dayPart',
        title: 'Daypart',
    },
];

export var productData = [
    {
        id: 1,
        value: 'product_sku',
        title: 'SKU',
    },
    {
        id: 2,
        value: 'product_brand',
        title: 'Brand',
    },
    {
        id: 3,
        value: 'product_category',
        title: 'Category',
    },
];

export var locationData = [
    {
        id: 1,
        value: 'location_city',
        title: 'City',
    },
    {
        id: 2,
        value: 'location_state',
        title: 'State',
    },
    {
        id: 3,
        value: 'location_pincode',
        title: 'Pincode',
    },
    {
        id: 4,
        value: 'location_store',
        title: 'Store',
    },
];

export var cartValueConditionData = [
    {
        id: 1,
        value: 'EQUALS',
        title: 'Equal to',
    },
    {
        id: 2,
        value: 'NOT_EQUALS',
        title: 'Not Equal to',
    },
    {
        id: 3,
        value: 'GREATER_THAN',
        title: 'Greater than',
    },
    {
        id: 3,
        value: 'LESS_THAN',
        title: 'Less than',
    },
    {
        id: 4,
        value: 'GREATER_THAN_OR_EQUAL',
        title: 'Greater than or equal to',
    },
    {
        id: 5,
        value: 'LESS_THAN_OR_EQUAL',
        title: 'Less than or equal to',
    },
];

export var cappingData = [
    {
        id: 1,
        value: 'redemption_cap_max_discount',
        title: 'Max Discount',
        extra: '%'
    },
    {
        id: 2,
        value: 'redemption_cap_max_cashback',
        title: 'Max Cashback',
        extra: ' Rs'
    },
    {
        id: 3,
        value: 'redemption_cap_no_of_items',
        title: 'No. of Items',
        extra: ''
    },
];

export const dummyBrandData = [
    {
        id: 1,
        title: 'sample1',
        value: 'sampleOne',
    },
    {
        id: 3,
        name: 'sample2',
        value: 'sampleTwo',
    },
];