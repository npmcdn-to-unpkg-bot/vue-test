/*
* @Author: f
* @Date:   2016-07-20 11:16:21
* @Last Modified by:   gaofan
* @Last Modified time: 2016-08-11 15:37:18
*/

'use strict'

import index from './view/index.vue'
import grid from './view/grid.vue'
import tree from './view/tree.vue'
import svg from './view/svg.vue'
import modal from './view/modal.vue'
import elastic from './view/elastic.vue'

export default function (router) {
    router.map({
        '/': {
            name: 'index',
            component: index,
            title: 'index'
        },
        'grid': {
            name: 'grid',
            component: grid,
            title: 'grid'
        },
        'tree': {
            name: 'tree',
            component: tree,
            title: 'tree'
        },
        'svg': {
            name: 'svg',
            component: svg,
            title: 'svg'
        },
        'modal': {
            name: 'modal',
            component: modal,
            title: 'modal'
        },
        'elastic': {
            name: 'elastic',
            component: elastic,
            title: 'elastic'
        }
    })
}
