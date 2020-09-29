var navigatorComponent = Vue.component('navigator', {
    template: document.getElementById('navigator_template').innerHTML,
    props: {
        isLoading: Boolean,
        resultsPerPage: Number,
        total: Number
    },
    data: function () {
        return {
            threshold: 9
        }
    },
    methods: {
        nextPage: function (e) {
            if (this.$parent.page < this.numPages)
                this.$parent.page += 1
        },
        prevPage: function (e) {
            if (this.$parent.page > 1)
                this.$parent.page -= 1
        },
        setPage: function (p) {
            this.$parent.page = p
        }
    },
    computed: {
        numPages: function () {
            return Math.ceil( this.total / this.resultsPerPage)
        }
    }

})