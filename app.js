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

    app.controller("ReviewController", function(){
        this.review = {};
        this.addReview = function (product){
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
            canPurchase: true,
            soldOut: false,
            images: ['pics/dodec_b.png',['pics/dodec_b_thumb.png','pics/dodec_thumb.png']],
            reviews:[
                {
                    stars:5,
                    body:"This gem is the shitsnizz",
                    author:"toto@gumby"
                },

                {
                    stars:1,
                    body:"I hated this thing sooo much",
                    author:"felix@grump"
                }
            ]


        },

        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description:'The Pentagonal Gem is the alpine baron of gems, with hues, blue as the iris of an Austrian maiden',
            canPurchase: true,
            images: ['pics/pentag.png',['pics/pentag_thumb.png','pics/pentag_ch_thumb.png']],
            reviews:[
                {
                    stars:5,
                    body:"It lights up my netherworld everytime",
                    author:"razgul@mordor"
                },

                {
                    stars:2,
                    body:"Ehg, seen better",
                    author:"tony@nyc"
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
