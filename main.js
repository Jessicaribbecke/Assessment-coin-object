




let coin = {
    state: 0,




    flip: function (flip) {

        let x = (Math.floor(Math.random() * 2));
        this.state = x

    },

    toString: function () {
        coin.flip()

        if (this.state === 0) {

            
            return "heads"

        }
        else {
            
            return "tails"
        }

    },


    toHTML: function () {
        coin.flip()

        let image = document.createElement('img');



        if (this.state === 0) {
            image.src = "./coin images/heads coin.jpg"
            

        }
        else {
            image.src = "./coin images/tails coin.jpg"
            
        }
        image.style.width = 100 + "px"



        return image;
    }
}

function display20Flips() {
    
   

    for (let index = 0; index < 20; index += 1) {
        
        coin.flip()
        
        document.body.append(coin.toString() + " ")
    }
}

function display20images() {
    const results = [];

    
        for (let index = 0; index < 20; index += 1) {
        
            coin.flip()
            
            document.body.append(coin.toHTML())
       
    }


    coin.toString
}



display20Flips()
display20images()


function check() {
    coin.toString()
    coin.toHTML()



};
check()

