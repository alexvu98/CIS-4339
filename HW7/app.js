new Vue({
    el: '#app',
    data: {
        pageName: 'Age of Empires 2 Units',
        units: [
            {unit: 'Longbowman', ranged: true, cost: 75},
            {unit: 'Arbalest', ranged: true, cost: 70},
            {unit: 'Heavy Cavalry Archer', ranged: true, cost: 100},
            {unit: 'Hand Cannoneer', ranged: true, cost: 95},
            {unit: 'Imperial Skirmisher', ranged: true, cost: 60},

            {unit: 'Spearman', ranged: false, cost: 60},
            {unit: 'Man-at-arms', ranged: false, cost: 80},
            {unit: 'Huskarl', ranged: false, cost: 78},
            {unit: 'Jaguar Warrior', ranged: false, cost: 90},
            {unit: 'Elite Teutonic Knight', ranged: false, cost: 125}
        ],
        totalRangedCost: 0,
        totalInfantryCost: 0,
        myClasses: ['']
    },

    methods: {
       sumRangedCost() {
           this.myClasses = 'ranged'
           let sum = 0
           for(i = 0; i < this.units.length; i++){
               if(this.units[i].ranged == true){
                   sum += this.units[i].cost
                   this.totalRangedCost = sum
               }
           }
           return this.totalRangedCost
       },

       sumInfantryCost() {
            this.myClasses = 'infantry'
            let sum = 0 
            for(i = 0; i < this.units.length; i++){
                if(this.units[i].ranged == false){
                    sum += this.units[i].cost
                    this.totalInfantryCost = sum
                }
            }
            return this.totalInfantryCost
       }
    },

    /* Filters units json documents by boolean value*/
    /* https://stackoverflow.com/questions/48441005/element-vuejs-conditional-table-rendering */

    computed: {
        filterRanged() {
            return this.units.filter(unit => {
                return unit.ranged == true
            })
        },

        filterInfantry() {
            return this.units.filter(unit => {
                return unit.ranged == false
            })
        }
    }

})