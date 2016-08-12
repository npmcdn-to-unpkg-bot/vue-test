<template>
    <table class="demogrid">
        <thead>
            <tr>
                <th v-for="key in columns"
                    @click="sortBy(key)"
                    :class="{active: sortKey == key}">

                    {{key | capitalize}}

                    <span class="arrow"
                        :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="
                entry in data
                | filterBy filterKey
                | orderBy sortKey sortOrders[sortKey]">

                <td v-for="key in columns">
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style scope>
    
    table.demogrid {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: #fff;
    }

    .demogrid th {
        background-color: #42b983;
        color: rgba(255,255,255,0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -user-select: none;
    }

    .demogrid td {
        background-color: #f9f9f9;
    }

    .demogrid th, .demogrid td {
        min-width: 120px;
        padding: 10px 80px;
        font-size: 30px;
    }

    .demogrid th.active {
        color: #fff;
    }

    .demogrid th.active .arrow {
        opacity: 1;
    }

    .demogrid .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .demogrid .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }
</style>
<script>
    export default{
        props: {
            data: Array,
            columns: Array,
            filterKey: String
        },
        data () {
            var sortOrders = {}
            this.columns.forEach(function (key) {
                sortOrders[key] = 1
            })
            return {
                sortKey: '',
                sortOrders: sortOrders
            }
        },
        methods: {
            sortBy (key) {
                this.sortKey = key
                this.sortOrders[key] = this.sortOrders[key] * -1
            }
        }
    }
</script>
