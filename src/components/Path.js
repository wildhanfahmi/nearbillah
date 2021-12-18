import { matchPath } from "react-router-dom"

export const siderPath = () => {
    const pathList = ['/','/post/list','/post/add','/post/schedule','/post/rate']
    var result = []
    pathList.map(path => {
        matchPath(path,window.location.pathname) !== null ?  result.push('match') : result.push('not match')
    })
    return result.indexOf('match') > -1 ?  [`${result.indexOf('match')+1}`] :  [`1`]
}