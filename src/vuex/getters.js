// 这个 getter 函数会返回 count 的值
// 在 ES6 里可写成：
// export const getCount = state => state.count

export const getCount = function (state) {
    return state.count
}
