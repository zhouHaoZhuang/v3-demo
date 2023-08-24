
import router from '@yunlv/router';

const isWx = () => {
    const ua = navigator.userAgent.toLowerCase()
    return ua.indexOf('micromessenger') != -1
}

function isMobile () { // 移动端 true pc false
    let userAgentInfo = navigator.userAgent;
    let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    let getArr = Agents.filter(i => userAgentInfo.includes(i));
    return getArr.length ? true : false;
}
/**
 *  判断是否是苹果设备
 * @returns {Boolean} 
 */

function isiPhone () {
    // 判断浏览器函数
    if (
        window.navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad)/i
        )
    ) {
        return true //苹果设备
    }
    else {
        return false
    }
}

export {
    isWx,
    isiPhone,
    isMobile
}