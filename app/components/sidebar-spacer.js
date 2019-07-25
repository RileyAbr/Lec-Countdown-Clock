import Component from '@ember/component';

export default Component.extend({

    sidebarIsOpen: false,

    actions: {
        showSidebar() {
            this.toggleProperty('sidebarIsOpen');
        }
    }
});
