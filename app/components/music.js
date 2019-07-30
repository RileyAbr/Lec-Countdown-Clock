import Component from '@ember/component';

export default Component.extend({

    isPlayCharacter: true,
    musicButtonCharacter: "▶",

    actions: {
        changeMusicButton() {
            // if(this.isPlayCharacter) {
            //     musicButtonCharacter = "▶";
            // }
            // else {
            //     musicButtonCharacter = "❙❙";
            // }
            // this.toggleProperty('isPlayCharacter');
            this.musicButtonCharacter = "Hi";
        }
    }


});
