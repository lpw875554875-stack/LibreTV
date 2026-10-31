const CUSTOMER_SITES = {
    lzizy: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源'
    },
    ffzy: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: '非凡资源'
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源'
    },
    jszy: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源'
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源'
    },
    ikzy: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    wjzy: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}

// 默认勾选以上片源（否则搜不到）
try {
    var __siteKeys = Object.keys(CUSTOMER_SITES);
    if (!localStorage.getItem('hasInitializedDefaults')) {
        localStorage.setItem('selectedAPIs', JSON.stringify(__siteKeys));
        localStorage.setItem('yellowFilterEnabled', 'true');
        localStorage.setItem('adFilteringEnabled', 'true');
        localStorage.setItem('doubanEnabled', 'true');
        localStorage.setItem('hasInitializedDefaults', 'true');
    } else {
        var __sel = JSON.parse(localStorage.getItem('selectedAPIs') || '[]');
        __siteKeys.forEach(function (__k) {
            if (!__sel.includes(__k)) __sel.push(__k);
        });
        localStorage.setItem('selectedAPIs', JSON.stringify(__sel));
    }
} catch (e) {}
