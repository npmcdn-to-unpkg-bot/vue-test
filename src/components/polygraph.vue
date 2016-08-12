<template>
    <g>
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="80"></circle>
        <axis-label
            v-for="stat in stats"
            :stat="stat"
            :index="$index"
            :total="stats.length">
        </axis-label>
    </g>
</template>
<script>
    import {valueToPoint} from '../assets/valueToPoint.js'

    export default{
        props: ['stats'],
        computed: {
            points: function () {
                var total = this.stats.length
                return this.stats.map(function (stat, i) {
                    var point = valueToPoint(stat.value, i, total)
                    return point.x + ',' + point.y
                }).join(' ')
            }
        },
        components: {
            // a sub component for the labels
            'axis-label': {
                props: {
                    stat: Object,
                    index: Number,
                    total: Number
                },
                template: '<text :x="point.x" :y="point.y">{{stat.label}}</text>',
                replace: true,
                computed: {
                    point: function () {
                        return valueToPoint(
                            +this.stat.value + 10,
                            this.index,
                            this.total
                        )
                    }
                }
            }
        }
    }
</script>
