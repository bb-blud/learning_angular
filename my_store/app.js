(function (){
    var app = angular.module('gemStore', [])
    
    //Controller
    app.controller('StoreController', function(){
        this.products = gems; //property of controller
    });
    
    app.controller('GalleryController', function(){
        this.current = 0;

        this.setCurrent = function(value){
            if(value){
                this.current = value;
             }else{
                 this.current = 0;
             }
        }

    });
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selecTab = function(setTab){
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
        
    });

    app.directive("productDescription", function(){
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });
    // app.directive('productSpecs', function (){
    //     return {
    //         restrict: 'A',
    //         templateUrl: 'product-specs.html',
    //     }
    // });


    app.controller("ReviewController", function(){
        this.review = {};

        this.addReview = function (product){
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    
    //Object
    var gems = [
        
        {
            name: 'Dodecahedron',
            price: 2.00,
            description: 'Some gems have qualities beyond the luster, beyond the shine...Dodeca is one of those gems.',
            shine: 8,
            rarity: 7,
            color: "CCC",
            faces: 12,
            canPurchase: true,
            soldOut: false,
            images: ['pics/dodec_b.png'],
            thumbnails: ['pics/dodec_b_thumb.png','pics/dodec_thumb.png'],
            reviews:[
                {
                    stars:5,
                    body:"This gem is the shitsnizz",
                    author:"toto@gumby",
                    createdOn: 1397490980837
                },

                {
                    stars:1,
                    body:"I hated this thing sooo much",
                    author:"felix@grump",
                    createdOn: 1397490980837
                }
            ]


        },

        {
            name: 'Octahedron Gem',
            price: 5.95,
            description:'The Octahedron Gem is the alpine baron of gems, with hues, blue as the iris of an Austrian maiden',
            shine: 9,
            rarity: 6,
            color: 'EEE',
            faces: 8,
            canPurchase: true,
            images: ['pics/octahedron.jpg'],
            thumbnails:['pics/octahedron_thumb.jpg','pics/octahedron_b_thumb.jpg'],
            reviews:[
                {
                    stars:5,
                    body:"It lights up my netherworld everytime",
                    author:"razgul@mordor",
                    createdOn: 1397490980837
                },

                {
                    stars:2,
                    body:"Ehg, seen better",
                    author:"tony@nyc",
                    createdOn: 1397490980837
                }
            ]

        },
        {
            name: 'Tetrahedron Gem',
            price: 4.32,
            description:'Hard to find this one',
            images: ['pics/no_img.png'],
            reviews:[
                {
                    stars:000,
                    body:"Not reviewed",
                    author:"n/a"
                }

            ]

        }
    ]


})()

