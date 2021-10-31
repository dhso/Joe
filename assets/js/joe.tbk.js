document.addEventListener('DOMContentLoaded', () => {
    let isLoading = false;
    let queryData = { favorites_id: 0, page_size: 20, page_no: 1 };
    let total = -999;
    $.ajax({
        url: Joe.BASE_API,
        type: 'POST',
        dataType: 'json',
        data: { routeType: 'tbk_favorites' },
        success(res) {
            if (res.code !== 1) return $('.joe_wallpaper__type-list').html('<li class="error">数据抓取失败！请联系作者！</li>');
            if (!res.data.length) return $('.joe_wallpaper__type-list').html(`<li class="error">暂无数据！</li>`);
            let htmlStr = '';
            res.data.forEach(_ => (htmlStr += `<li class="item animated swing" data-favorites-id="${_.favorites_id}">${_.favorites_title}</li>`));
            $('.joe_wallpaper__type-list').html(htmlStr);
            $('.joe_wallpaper__type-list .item').first().click();
        }
    });
    $('.joe_wallpaper__type-list').on('click', '.item', function () {
        const favorites_id = $(this).attr('data-favorites-id');
        if (isLoading) return;
        $(this).addClass('active').siblings().removeClass('active');
        queryData.favorites_id = favorites_id;
        queryData.page_no = 1;
        renderDom();
    });
    function renderDom() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        $('.joe_wallpaper__list').html('');
        isLoading = true;
        $.ajax({
            url: Joe.BASE_API,
            type: 'POST',
            dataType: 'json',
            data: {
                routeType: 'tbk_favorite_items',
                favorites_id: queryData.favorites_id,
                page_no: queryData.page_no,
                page_size: queryData.page_size
            },
            success(res) {
                if (res.code !== 1) return (isLoading = false);
                isLoading = false;
                let htmlStr = '';
                res.data.map_data.forEach(_ => {
                    htmlStr += `
                        <a class="item animated bounceIn" data-fancybox="gallery" href="${_.click_url}">
                            <img width="100%" height="100%" class="lazyload" src="${Joe.LAZY_LOAD}" data-src="${_.pic_url}" alt="商品">
                        </a>`;
                });
                $('.joe_wallpaper__list').html(htmlStr);
                total = res.data.total_count;
                initPagination();
            }
        });
    }
    function initPagination() {
        let htmlStr = '';
        if (queryData.page_no !== 1) {
            htmlStr += `
                <li class="joe_wallpaper__pagination-item" data-page-no="0">首页</li>
                <li class="joe_wallpaper__pagination-item" data-page-no="${queryData.page_no-1}">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M822.272 146.944l-396.8 396.8c-19.456 19.456-51.2 19.456-70.656 0-18.944-19.456-18.944-51.2 0-70.656l396.8-396.8c19.456-19.456 51.2-19.456 70.656 0 18.944 19.456 18.944 45.056 0 70.656z"/><path d="M745.472 940.544l-396.8-396.8c-19.456-19.456-19.456-51.2 0-70.656 19.456-19.456 51.2-19.456 70.656 0l403.456 390.144c19.456 25.6 19.456 51.2 0 76.8-26.112 19.968-51.712 19.968-77.312.512zm-564.224-63.488c0-3.584 0-7.68.512-11.264h-.512v-714.24h.512c-.512-3.584-.512-7.168-.512-11.264 0-43.008 21.504-78.336 48.128-78.336s48.128 34.816 48.128 78.336c0 3.584 0 7.68-.512 11.264h.512v714.24h-.512c.512 3.584.512 7.168.512 11.264 0 43.008-21.504 78.336-48.128 78.336s-48.128-35.328-48.128-78.336z"/></svg>
                </li>
                <li class="joe_wallpaper__pagination-item" data-page-no="${queryData.page_no-1}">${queryData.page_no-1}</li>
            `;
        }
        htmlStr += `<li class="joe_wallpaper__pagination-item active">${queryData.page_no}</li>`;
        if (queryData.page_no * queryData.page_size != total) {
            htmlStr += `
                <li class="joe_wallpaper__pagination-item" data-page-no="${queryData.page_no+1}">${queryData.page_no+1}</li>
                <li class="joe_wallpaper__pagination-item" data-page-no="${queryData.page_no+1}">
                    <svg class="next" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path d="M822.272 146.944l-396.8 396.8c-19.456 19.456-51.2 19.456-70.656 0-18.944-19.456-18.944-51.2 0-70.656l396.8-396.8c19.456-19.456 51.2-19.456 70.656 0 18.944 19.456 18.944 45.056 0 70.656z"/><path d="M745.472 940.544l-396.8-396.8c-19.456-19.456-19.456-51.2 0-70.656 19.456-19.456 51.2-19.456 70.656 0l403.456 390.144c19.456 25.6 19.456 51.2 0 76.8-26.112 19.968-51.712 19.968-77.312.512zm-564.224-63.488c0-3.584 0-7.68.512-11.264h-.512v-714.24h.512c-.512-3.584-.512-7.168-.512-11.264 0-43.008 21.504-78.336 48.128-78.336s48.128 34.816 48.128 78.336c0 3.584 0 7.68-.512 11.264h.512v714.24h-.512c.512 3.584.512 7.168.512 11.264 0 43.008-21.504 78.336-48.128 78.336s-48.128-35.328-48.128-78.336z"/></svg>
                </li>
            `;
        }
        if (queryData.page_no * queryData.page_size < total) htmlStr += `<li class="joe_wallpaper__pagination-item" data-page-no="${Math.ceil(total / queryData.page_size)}">末页</li>`;
        $('.joe_wallpaper__pagination').html(htmlStr);
    }
    $('.joe_wallpaper__pagination').on('click', '.joe_wallpaper__pagination-item', function () {
        const page_no = $(this).attr('data-page-no');
        if (!page_no || isLoading) return;
        queryData.page_no = Number(page_no);
        renderDom();
    });
});
