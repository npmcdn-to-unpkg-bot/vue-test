<template>
    <div id="page">
        <svg width="200" height="200">
            <polygraph :stats="stats"></polygraph>
        </svg>
        <!-- controls -->
        <div v-for="stat in stats">
            <label>{{stat.label}}</label>
            <input type="range" v-model="stat.value" min="0" max="100">
            <span>{{stat.value}}</span>
            <button @click="remove(stat)">X</button>
        </div>
        <form id="add">
            <input name="newlabel" v-model="newLabel">
            <button @click="add">Add a Stat</button>
        </form>
        <pre id="raw">{{stats | json}}</pre>
    </div>
</template>
<style type="text/css">
    polygon {
        fill: #42b983;
        opacity: .75;
    }

    circle {
        fill: transparent;
        stroke: #999;
    }

    text {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 10px;
        fill: #666;
    }

    label {
        display: inline-block;
        margin-left: 10px;
        width: 20px;
    }

    #raw {
        position: absolute;
        top: 0;
        left: 300px;
    }
</style>
<script>
    import polygraph from '../components/polygraph.vue'
    import {stats} from '../assets/stats.js'

    export default{
        data () {
            return {
                newLabel: '',
                stats: stats
            }
        },
        methods: {
            add: function (ev) {
                ev.preventDefault()
                if (!this.newLabel) return
                this.stats.push({
                    label: this.newLabel,
                    value: 100
                })
                this.newLabel = ''
            },
            remove (stat) {
                if (this.stats.length > 3) {
                    this.stats.$remove(stat)
                } else {
                    console.log('con\'t ')
                }
            }
        },
        components: {
            polygraph: polygraph
        }
    }
</script>
