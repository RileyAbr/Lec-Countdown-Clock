import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({

    clock: service("eu-clock"),

    currentClockTime: computed('clock.date', function () {
        var clockValue = "";

        var hours = this.get('clock.date').getHours();
        var minutes = this.get('clock.date').getMinutes();
        var seconds = this.get('clock.date').getSeconds();

        if(hours > 12) {
            hours = hours - 12;
        }
        if(hours < 10) {
            hours = "0" + hours;
        }
        if(minutes <10) {
            minutes = "0" + minutes;
        }
        if(seconds < 10) {
            seconds = "0" + seconds;
        }

        clockValue = hours
                    + ":" + minutes
                    //+ ":" + seconds
                    ;

        return clockValue;
    }),

    currentYear: computed('clock.date', function () {
        var yearValue = "";

        var year = this.get('clock.date').getFullYear();

        yearValue = year.toString().substr(2, 2);

        return yearValue;
    }),

    currentMonth: computed('clock.date', function () {
        var monthValue = "";

        var month = this.get('clock.date').getMonth() + 1; //Month value starts at 0

        if(month > 2
            && month < 6) {
            monthValue = "SPRING";
        }
        else if(month > 5
            && month < 9) {
            monthValue = "SUMMER";
        }
        else if(month > 8
                && month < 12) {
            monthValue = "AUTUMN";
        }
        else {
            monthValue = "WINTER";
        }

        return monthValue;
    })

});
