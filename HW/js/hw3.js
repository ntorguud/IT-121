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
        // this.volume = this.volume + 1;
        // this.volume++;
        this.volume += 1;
    }

    volumeDown() {
        this.volume -= 1;
    }

    channelUp() {
        this.channel += 1;
    }

    channelDown() {
            this.channel -= 1;
    }            
}

var appleTvRemote = new TV("Apple TV");

// console.log(appleTvRemote.getBrandName())

appleTvRemote.volumeDown()
