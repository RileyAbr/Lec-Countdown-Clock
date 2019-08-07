import Component from '@ember/component';
import { later } from '@ember/runloop';

// later(partnerType, function() {
//     // code here will execute within a RunLoop in about 500ms with this == myContext
//     partnerType = "SUB";
// }, 500);


export default Component.extend({
    partnerType: "Y",

    // checkPartnerType: function () {
    //     let self = this;

    //     this.set('partnerType', "MAIN");

    //     // Ember.run.later(this, function () {
    //     //     this.partnerType = "SUB";
    //     //     return this.partnerType;
    //     // }, 1000);

    //     return this.partnerType;
    // },

    mainSponsors: ['KIA', 'ALIENWARE'],
    subSponsors: ['Footlocker'],
    mainLogos: ['assets/Kia.png','assets/Alienware.png']


});

