// const MAX_VOLUME = 100;
// const MIN_VOLUME = 0;
// const MAX_CHANNEL = 300;
// const MIN_CHANNEL = 0; 

class TV {
    constructor(brandName) {
        this.brandName = brandName;
        this.channel = 1;
        this.volume = 25;
    }

    getBrandName() {
        return this.brandName;
    }

    volumeUp() {
        if(this.volume <= 100) {
        // this.volume = this.volume + 1;
        // this.volume++;
        this.volume += 1;
        }
        console.log(this.volume)

    }

    volumeDown() {
        if(this.volume >= 0) {
        this.volume -= 1;
        }
        console.log(this.volume)

    }

    channelUp() {
        if(this.channel < 26) {
        this.channel += 1;
        }
        console.log(this.channel)

    }

    channelDown() {
        if(this.channel > 0) {
            this.channel -= 1;
        }

        console.log(this.channel)
    }
            
}

var appleTvRemote = new TV("Apple TV");

// console.log(appleTvRemote.getBrandName())

appleTvRemote.volumeDown()