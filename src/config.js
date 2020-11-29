let config;

if (process.env.NODE_ENV === 'production') {
    config = {
        api: {
            url: 'http://192.168.0.230/api/v1/web/sa',
            endpoint: {
                signIn:             '/sign-in ',
                profile:            '/profile',
                users:              '/users',
                static:             '/statistics',
                mobileDevices:      '/mobile-devices',
                counselings:        '/counselings',
                hotelGroups:        '/hotel-groups',
                hotelProducts:      '/hotel-products',
                hotelFacilities:    '/facilities',
                hotelReview:        '/hotel-reviews',
                hotelProductsType:  '/hotel-product-types',
                hotelMgt:           '/hotels',
                hotelStaff:         '/staffs',
                homeCategories:     '/home-categories',
                staffs:             '/staffs',
                settings:           '/settings',
                provinces:          '/provinces',
                district:           '/districts',
                roles:              '/roles',
                popups:             '/popups',
                banners:            '/banners'
            },
        },
    };
} else {
    config = {
        api: {
            url: 'http://192.168.0.230/api/v1/web/sa',
            endpoint: {
                signIn:                      '/sign-in ',
                profile:                     '/profile',
                // user
                users:                       '/users',
                static:                      '/statistics',
                mobileDevices:               '/mobile-devices',
                // counselings
                counselings:                 '/counselings',

                hotelGroups:                 '/hotel-groups',
                hotelProducts:               '/hotel-products',
                hotelFacilities:             '/facilities',
                hotelReview:                 '/hotel-reviews',
                hotelProductsType:           '/hotel-product-types',
                hotelMgt:                    '/hotels',
                hotelStaff:                  '/staffs',
                homeCategories:              '/home-categories',
                // staff
                staffs:                      '/staffs',
                // setting
                settings:                    '/settings',

                provinces:                   '/provinces',
                district:                    '/districts',
                roles:                       '/roles',
                // marketing
                popups:                      '/popups',
                banners:                     '/banners',
                // account
                saleIncentiveHistories:      '/sale-incentive-histories',
                saleIncentiveHistoryDetails: '/sale-incentive-history-details',
                saleIncentives:              '/sale-incentives',
                banners:            '/banners'        
            },
        },
    };
}

export default config;
 