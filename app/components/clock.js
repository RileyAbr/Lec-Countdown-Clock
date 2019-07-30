import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({

    clock: service("eu-clock"),

    currentClockTime: computed('clock.date', function () {
        var clockValue = "";
        
        clockValue = this.get('clock.date').getHours()
                    + ":" + this.get('clock.date').getMinutes()
                    + ":" + this.get('clock.date').getSeconds();

        return clockValue;
    })

});
