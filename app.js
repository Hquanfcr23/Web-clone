const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {

    

    render: function() {
        

        fetch('https://mocki.io/v1/2427d170-a548-4515-b0d2-ccb43994dd04')
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                const nominationHtmls = data.nominationsFimls.map((film, index) => {
                    return `<a href="#" class="content__nominations-item__wrapper col c-2">                  
                    <span class="content__nominations-item__title">
                        ${film.title}
                    </span>
                    <img class="content__nominations-item__icon" src="./assets/image/play-icon.png" alt="">
                    <div style="background-image: url('${film.image}');" class="content__nominations-item">
                    </div>
                    <div class="content__nominations-item__info">
                        <p class="content__nominations-item__name">
                            ${film.name}
                        </p>
                        <p class="content__nominations-item__name-english">${film.english}</p>
                    </div>
                </a>`
                })
                $('.content__nominations').innerHTML = nominationHtmls.join('')

                const handleNomination = function(nominationsFimls) {
                    const a = $$('.content__nominations-item__wrapper')
                    for(let i=0;i<a.length;i++) {
                        a[i].onclick = function(e) {
                        const html = nominationsFimls.map((film,index) => {
                            if(index == i) {
                                return `<div class="content__film-img__wrapper">
                                <img class="content__film-img" src="${film.image}" alt="">
                                <div class="content__film-img__btn-wrapper">
                                    <a class="content__film-img__btn" href="${film.link}">
                                        <i class="fa-solid fa-play"></i>
                                        Xem phim
                                    </a>
                                </div>          
                            </div>
                            <div class="content__film-info">
                                <h4 class="content__film-info__name">
                                    ${film.name}
                                </h4>
                                <p class="content__film-info__eng">${film.english}</p>
                                <p>Ngôn ngữ: Phụ đề việt</p>
                                <p>Thể loại: <span>${film.type}</span></p>
                                <p>Quốc gia: <span>${film.country}</span></p>
                                <p>Năm: <span>${film.time}</span></p>
                                <div class="content__film-review__vote">
                                    <i class="content__film-star__icon fa-solid fa-star"></i>
                                    <span >0</span>
                                    /5 (1 đánh giá)
                                    <i class="fa-solid fa-star content__film-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div class="content__film-review__content">
                                <h4>NỘI DUNG PHIM</h4>
                                <p>${film.content}</p>
                                <div class="content__film-review__comment">
                                    <div class="content__film-comment-header">
                                        <div class="content__film-comment__comment">0 bình luận</div>
                                        <div class="content__film-comment__sort">
                                            Sắp xếp theo
                                            <button>Mới nhất
                                                <i class="fa-solid fa-caret-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="content__film-comment-body">
                                        <img src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" alt="">
                                        <input placeholder="Viết bình luận..." type="text">
                                    </div>
                                    <div class="content__film-comment-footer">
                                        <i class="fa-brands fa-facebook"></i>
                                        <a href="">
                                            Plugin bình luận trên Facebook</a>
                                    </div>
                                </div>
                            </div>`
                            }
                        })
                        $('.content__film-review').innerHTML = html.join('')
    
    
                        $('.content__nominations-wrapper').classList.add('none')
                        $('#content__update-wrapper').classList.add('none')
                        $('#content__theater-wrapper').classList.add('none')
                        $('#content__odd-wrapper').classList.add('none')
                        $('.content__film-review').classList.remove('none')
                        }
                    }
                }
                handleNomination(data.nominationsFimls)
        })
        fetch("https://mocki.io/v1/2427d170-a548-4515-b0d2-ccb43994dd04")
            .then(function(response) {
            return response.json()
        })
            .then(function(data) {
            const updateHtmls = data.updateFimls.map(film => {
                return `<a href="#" class="content__update-item__wrapper col c-2">                  
                <span class="content__update-item__title">
                    ${film.title}
                </span>
                <img class="content__nominations-item__icon" src="./assets/image/play-icon.png" alt="">
                <div style="background-image: url('${film.image}');" class="content__nominations-item">
                </div>
                <div class="content__nominations-item__info">
                    <p class="content__nominations-item__name">
                        ${film.name}
                    </p>
                    <p class="content__nominations-item__name-english">${film.english}</p>
                </div>
            </a>`
            })
            $('.content__update').innerHTML = updateHtmls.join('')

            const handleUpdate = function(updateFimls) {
                const a = $$('.content__update-item__wrapper')
                for(let i=0;i<a.length;i++) {
                    a[i].onclick = function(e) {
                    const html = updateFimls.map((film,index) => {
                        if(index == i) {
                            return `<div class="content__film-img__wrapper">
                            <img class="content__film-img" src="${film.image}" alt="">
                            <div class="content__film-img__btn-wrapper">
                                <a class="content__film-img__btn" href="${film.link}">
                                    <i class="fa-solid fa-play"></i>
                                    Xem phim
                                </a>
                            </div>          
                        </div>
                        <div class="content__film-info">
                            <h4 class="content__film-info__name">
                                ${film.name}
                            </h4>
                            <p class="content__film-info__eng">${film.english}</p>
                            <p>Ngôn ngữ: Phụ đề việt</p>
                            <p>Thể loại: <span>${film.type}</span></p>
                            <p>Quốc gia: <span>${film.country}</span></p>
                            <p>Năm: <span>${film.time}</span></p>
                            <div class="content__film-review__vote">
                                <i class="content__film-star__icon fa-solid fa-star"></i>
                                <span >0</span>
                                /5 (1 đánh giá)
                                <i class="fa-solid fa-star content__film-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="content__film-review__content">
                            <h4>NỘI DUNG PHIM</h4>
                            <p>${film.content}</p>
                            <div class="content__film-review__comment">
                                <div class="content__film-comment-header">
                                    <div class="content__film-comment__comment">0 bình luận</div>
                                    <div class="content__film-comment__sort">
                                        Sắp xếp theo
                                        <button>Mới nhất
                                            <i class="fa-solid fa-caret-down"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="content__film-comment-body">
                                    <img src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" alt="">
                                    <input placeholder="Viết bình luận..." type="text">
                                </div>
                                <div class="content__film-comment-footer">
                                    <i class="fa-brands fa-facebook"></i>
                                    <a href="">
                                        Plugin bình luận trên Facebook</a>
                                </div>
                            </div>
                        </div>`
                        }
                    })
                    $('.content__film-review').innerHTML = html.join('')


                    $('.content__nominations-wrapper').classList.add('none')
                    $('#content__update-wrapper').classList.add('none')
                    $('#content__theater-wrapper').classList.add('none')
                    $('#content__odd-wrapper').classList.add('none')
                    $('.content__film-review').classList.remove('none')
                    }
                }
            }
            handleUpdate(data.updateFimls)
        })
        fetch('https://mocki.io/v1/2427d170-a548-4515-b0d2-ccb43994dd04')
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
            const theaterHtmls = data.theaterFilms.map(film => {
                return `<a href="#" class="content__theater-item__wrapper col c-2">                  
                <span class="content__update-item__title">
                    ${film.title}
                </span>
                <img class="content__nominations-item__icon" src="./assets/image/play-icon.png" alt="">
                <div style="background-image: url('${film.image}');" class="content__nominations-item">
                </div>
                <div class="content__nominations-item__info">
                    <p class="content__nominations-item__name">
                        ${film.name}
                    </p>
                    <p class="content__nominations-item__name-english">${film.english}</p>
                </div>
            </a>`
            })
            $('.content__theater').innerHTML = theaterHtmls.join('')

            const handleTheater = function(theaterFilms) {
                const a = $$('.content__theater-item__wrapper')
                for(let i=0;i<a.length;i++) {
                    a[i].onclick = function(e) {
                    const html = theaterFilms.map((film,index) => {
                        if(index == i) {
                            return `<div class="content__film-img__wrapper">
                            <img class="content__film-img" src="${film.image}" alt="">
                            <div class="content__film-img__btn-wrapper">
                                <a class="content__film-img__btn" href="${film.link}">
                                    <i class="fa-solid fa-play"></i>
                                    Xem phim
                                </a>
                            </div>          
                        </div>
                        <div class="content__film-info">
                            <h4 class="content__film-info__name">
                                ${film.name}
                            </h4>
                            <p class="content__film-info__eng">${film.english}</p>
                            <p>Ngôn ngữ: Phụ đề việt</p>
                            <p>Thể loại: <span>${film.type}</span></p>
                            <p>Quốc gia: <span>${film.country}</span></p>
                            <p>Năm: <span>${film.time}</span></p>
                            <div class="content__film-review__vote">
                                <i class="content__film-star__icon fa-solid fa-star"></i>
                                <span >0</span>
                                /5 (1 đánh giá)
                                <i class="fa-solid fa-star content__film-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <div class="content__film-review__content">
                            <h4>NỘI DUNG PHIM</h4>
                            <p>${film.content}</p>
                            <div class="content__film-review__comment">
                                <div class="content__film-comment-header">
                                    <div class="content__film-comment__comment">0 bình luận</div>
                                    <div class="content__film-comment__sort">
                                        Sắp xếp theo
                                        <button>Mới nhất
                                            <i class="fa-solid fa-caret-down"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="content__film-comment-body">
                                    <img src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" alt="">
                                    <input placeholder="Viết bình luận..." type="text">
                                </div>
                                <div class="content__film-comment-footer">
                                    <i class="fa-brands fa-facebook"></i>
                                    <a href="">
                                        Plugin bình luận trên Facebook</a>
                                </div>
                            </div>
                        </div>`
                        }
                    })
                    $('.content__film-review').innerHTML = html.join('')


                    $('.content__nominations-wrapper').classList.add('none')
                    $('#content__update-wrapper').classList.add('none')
                    $('#content__theater-wrapper').classList.add('none')
                    $('#content__odd-wrapper').classList.add('none')
                    $('.content__film-review').classList.remove('none')
                    }
                }
            }
            handleTheater(data.theaterFilms)
        })
        fetch('https://mocki.io/v1/2427d170-a548-4515-b0d2-ccb43994dd04')
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                const seriesHtmls = data.serieFilms.map(film => {
                    return `<a href="#" class="content__series-item__wrapper col c-3">                  
                    <span class="content__series-item__title">
                        ${film.title}
                    </span>
                    <img class="content__series-item__icon" src="./assets/image/play-icon.png" alt="">
                    <div style="background-image: url('${film.image}');" class="content__series-item">
                    </div>
                    <div class="content__series-item__info">
                        <p class="content__series-item__name">
                            ${film.name}
                        </p>
                        <p class="content__series-item__name-english">${film.english}</p>
                    </div>
                </a>
                `
                })  
                $('.content__series').innerHTML = seriesHtmls.join('')

                const handleSeries = function(seriesFilms) {
                    const a = $$('.content__series-item__wrapper')
                    for(let i=0;i<a.length;i++) {
                        a[i].onclick = function(e) {
                        const html = seriesFilms.map((film,index) => {
                            if(index == i) {
                                return `<div class="content__film-img__wrapper">
                                <img class="content__film-img" src="${film.image}" alt="">
                                <div class="content__film-img__btn-wrapper">
                                    <a class="content__film-img__btn" href="${film.link}">
                                        <i class="fa-solid fa-play"></i>
                                        Xem phim
                                    </a>
                                </div>          
                            </div>
                            <div class="content__film-info">
                                <h4 class="content__film-info__name">
                                    ${film.name}
                                </h4>
                                <p class="content__film-info__eng">${film.english}</p>
                                <p>Ngôn ngữ: Phụ đề việt</p>
                                <p>Thể loại: <span>${film.type}</span></p>
                                <p>Quốc gia: <span>${film.country}</span></p>
                                <p>Năm: <span>${film.time}</span></p>
                                <div class="content__film-review__vote">
                                    <i class="content__film-star__icon fa-solid fa-star"></i>
                                    <span >0</span>
                                    /5 (1 đánh giá)
                                    <i class="fa-solid fa-star content__film-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div class="content__film-review__content">
                                <h4>NỘI DUNG PHIM</h4>
                                <p>${film.content}</p>
                                <div class="content__film-review__comment">
                                    <div class="content__film-comment-header">
                                        <div class="content__film-comment__comment">0 bình luận</div>
                                        <div class="content__film-comment__sort">
                                            Sắp xếp theo
                                            <button>Mới nhất
                                                <i class="fa-solid fa-caret-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="content__film-comment-body">
                                        <img src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" alt="">
                                        <input placeholder="Viết bình luận..." type="text">
                                    </div>
                                    <div class="content__film-comment-footer">
                                        <i class="fa-brands fa-facebook"></i>
                                        <a href="">
                                            Plugin bình luận trên Facebook</a>
                                    </div>
                                </div>
                            </div>`
                            }
                        })
                        $('.content__film-review').innerHTML = html.join('')


                        $('.content__nominations-wrapper').classList.add('none')
                        $('#content__update-wrapper').classList.add('none')
                        $('#content__theater-wrapper').classList.add('none')
                        $('#content__odd-wrapper').classList.add('none')
                        $('.content__film-review').classList.remove('none')
                        }
                    }
                }
                handleSeries(data.serieFilms)
                
        })
        fetch('https://mocki.io/v1/2427d170-a548-4515-b0d2-ccb43994dd04')
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                const topHtmls = data.topFilms.map((film, index) => {    
                
                    return ` <a href="#" class="content__sidebar-top__item">
                    <div class = "content__top-item__img-wrapper">
                    <img src="${film.image}" alt="" class="content__top-item__img">
                    </div>
                    <div class="content__top-item__info">
                        <div class="content__top-item__name">
                            ${film.name}
                        </div>
                        <div class="content__top-item__name-english">
                            ${film.english}
                        </div>
                        <div class="content__top-item__view">
                            ${film.view}
                        </div>
                    </div>
                </a>`
                })
                $('.content__sidebar-top').innerHTML = topHtmls.join('')

                const handleTop = function(topFilms) {
                    const a = $$('.content__sidebar-top__item')
                    for(let i=0;i<a.length;i++) {
                        a[i].onclick = function(e) {
                        const html = topFilms.map((film,index) => {
                            if(index == i) {
                                return `<div class="content__film-img__wrapper">
                                <img class="content__film-img" src="${film.image}" alt="">
                                <div class="content__film-img__btn-wrapper">
                                    <a class="content__film-img__btn" href="${film.link}">
                                        <i class="fa-solid fa-play"></i>
                                        Xem phim
                                    </a>
                                </div>          
                            </div>
                            <div class="content__film-info">
                                <h4 class="content__film-info__name">
                                    ${film.name}
                                </h4>
                                <p class="content__film-info__eng">${film.english}</p>
                                <p>Ngôn ngữ: Phụ đề việt</p>
                                <p>Thể loại: <span>${film.type}</span></p>
                                <p>Quốc gia: <span>${film.country}</span></p>
                                <p>Năm: <span>${film.time}</span></p>
                                <div class="content__film-review__vote">
                                    <i class="content__film-star__icon fa-solid fa-star"></i>
                                    <span >0</span>
                                    /5 (1 đánh giá)
                                    <i class="fa-solid fa-star content__film-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div class="content__film-review__content">
                                <h4>NỘI DUNG PHIM</h4>
                                <p>${film.content}</p>
                                <div class="content__film-review__comment">
                                    <div class="content__film-comment-header">
                                        <div class="content__film-comment__comment">0 bình luận</div>
                                        <div class="content__film-comment__sort">
                                            Sắp xếp theo
                                            <button>Mới nhất
                                                <i class="fa-solid fa-caret-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="content__film-comment-body">
                                        <img src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" alt="">
                                        <input placeholder="Viết bình luận..." type="text">
                                    </div>
                                    <div class="content__film-comment-footer">
                                        <i class="fa-brands fa-facebook"></i>
                                        <a href="">
                                            Plugin bình luận trên Facebook</a>
                                    </div>
                                </div>
                            </div>`
                            }
                        })
                        $('.content__film-review').innerHTML = html.join('')


                        $('.content__nominations-wrapper').classList.add('none')
                        $('#content__update-wrapper').classList.add('none')
                        $('#content__theater-wrapper').classList.add('none')
                        $('#content__odd-wrapper').classList.add('none')
                        $('.content__film-review').classList.remove('none')
                        }
                    }
                }
                handleTop(data.topFilms)
        })
        fetch('https://mocki.io/v1/2427d170-a548-4515-b0d2-ccb43994dd04')
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                const trailerHtmls = data.trailerFilms.map(film => {
                    return`<a href="#" class="content__sidebar-trailer__item">
                    <div class = "content__top-item__img-wrapper">
                    <span class="content__trailer-item__title">
                        ${film.title}
                    </span>
                    <img src="${film.image}" alt="" class="content__top-item__img">
                    </div>
                    <div class="content__top-item__info">
                        <div class="content__top-item__name">
                            ${film.name}
                        </div>
                        <div class="content__top-item__name-english">
                            ${film.english}
                        </div>
                        <div class="content__top-item__view">
                            ${film.view}
                        </div>
                    </div>
                </a>    `
                })
                $('.content__sidebar-trailer').innerHTML = trailerHtmls.join('')

                const handleTrailer = function(trailerFilms) {
                    const a = $$('.content__sidebar-trailer__item')
                    for(let i=0;i<a.length;i++) {
                        a[i].onclick = function(e) {
                        const html = trailerFilms.map((film,index) => {
                            if(index == i) {
                                return `<div class="content__film-img__wrapper">
                                <img class="content__film-img" src="${film.image}" alt="">
                                <div class="content__film-img__btn-wrapper">
                                    <a class="content__film-img__btn" href="${film.link}">
                                        <i class="fa-solid fa-play"></i>
                                        Xem phim
                                    </a>
                                </div>          
                            </div>
                            <div class="content__film-info">
                                <h4 class="content__film-info__name">
                                    ${film.name}
                                </h4>
                                <p class="content__film-info__eng">${film.english}</p>
                                <p>Ngôn ngữ: Phụ đề việt</p>
                                <p>Thể loại: <span>${film.type}</span></p>
                                <p>Quốc gia: <span>${film.country}</span></p>
                                <p>Năm: <span>${film.time}</span></p>
                                <div class="content__film-review__vote">
                                    <i class="content__film-star__icon fa-solid fa-star"></i>
                                    <span >0</span>
                                    /5 (1 đánh giá)
                                    <i class="fa-solid fa-star content__film-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div class="content__film-review__content">
                                <h4>NỘI DUNG PHIM</h4>
                                <p>${film.content}</p>
                                <div class="content__film-review__comment">
                                    <div class="content__film-comment-header">
                                        <div class="content__film-comment__comment">0 bình luận</div>
                                        <div class="content__film-comment__sort">
                                            Sắp xếp theo
                                            <button>Mới nhất
                                                <i class="fa-solid fa-caret-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="content__film-comment-body">
                                        <img src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" alt="">
                                        <input placeholder="Viết bình luận..." type="text">
                                    </div>
                                    <div class="content__film-comment-footer">
                                        <i class="fa-brands fa-facebook"></i>
                                        <a href="">
                                            Plugin bình luận trên Facebook</a>
                                    </div>
                                </div>
                            </div>`
                            }
                        })
                        $('.content__film-review').innerHTML = html.join('')


                        $('.content__nominations-wrapper').classList.add('none')
                        $('#content__update-wrapper').classList.add('none')
                        $('#content__theater-wrapper').classList.add('none')
                        $('#content__odd-wrapper').classList.add('none')
                        $('.content__film-review').classList.remove('none')
                        }
                    }
                }
                handleTrailer(data.trailerFilms)
        })
        fetch('https://mocki.io/v1/2427d170-a548-4515-b0d2-ccb43994dd04')
            .then(function(response) {
                return response.json()
            })
            .then(function(data) {
                const oddHtmls = data.oddFilms.map(film => {
                    return`<a href="#" class="content__odd-item__wrapper col c-3">                  
                    <span class="content__series-item__title">
                        ${film.title}
                    </span>
                    <img class="content__series-item__icon" src="./assets/image/play-icon.png" alt="">
                    <div style="background-image: url('${film.image}');" class="content__series-item">
                    </div>
                    <div class="content__series-item__info">
                        <p class="content__series-item__name">
                            ${film.name}
                        </p>
                        <p class="content__series-item__name-english">${film.english}</p>
                    </div>
                </a>`
                })
                $('.content__odd').innerHTML = oddHtmls.join('')

                const handleOdd = function(oddFilms) {
                    const a = $$('.content__odd-item__wrapper')
                    for(let i=0;i<a.length;i++) {
                        a[i].onclick = function(e) {
                        const html = oddFilms.map((film,index) => {
                            if(index == i) {
                                return `<div class="content__film-img__wrapper">
                                <img class="content__film-img" src="${film.image}" alt="">
                                <div class="content__film-img__btn-wrapper">
                                    <a class="content__film-img__btn" href="${film.link}">
                                        <i class="fa-solid fa-play"></i>
                                        Xem phim
                                    </a>
                                </div>          
                            </div>
                            <div class="content__film-info">
                                <h4 class="content__film-info__name">
                                    ${film.name}
                                </h4>
                                <p class="content__film-info__eng">${film.english}</p>
                                <p>Ngôn ngữ: Phụ đề việt</p>
                                <p>Thể loại: <span>${film.type}</span></p>
                                <p>Quốc gia: <span>${film.country}</span></p>
                                <p>Năm: <span>${film.time}</span></p>
                                <div class="content__film-review__vote">
                                    <i class="content__film-star__icon fa-solid fa-star"></i>
                                    <span >0</span>
                                    /5 (1 đánh giá)
                                    <i class="fa-solid fa-star content__film-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div class="content__film-review__content">
                                <h4>NỘI DUNG PHIM</h4>
                                <p>${film.content}</p>
                                <div class="content__film-review__comment">
                                    <div class="content__film-comment-header">
                                        <div class="content__film-comment__comment">0 bình luận</div>
                                        <div class="content__film-comment__sort">
                                            Sắp xếp theo
                                            <button>Mới nhất
                                                <i class="fa-solid fa-caret-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="content__film-comment-body">
                                        <img src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" alt="">
                                        <input placeholder="Viết bình luận..." type="text">
                                    </div>
                                    <div class="content__film-comment-footer">
                                        <i class="fa-brands fa-facebook"></i>
                                        <a href="">
                                            Plugin bình luận trên Facebook</a>
                                    </div>
                                </div>
                            </div>`
                            }
                        })
                        $('.content__film-review').innerHTML = html.join('')


                        $('.content__nominations-wrapper').classList.add('none')
                        $('#content__update-wrapper').classList.add('none')
                        $('#content__theater-wrapper').classList.add('none')
                        $('#content__odd-wrapper').classList.add('none')
                        $('.content__film-review').classList.remove('none')
                        }
                    }
                }
                handleOdd(data.oddFilms)
        })
        fetch('https://mocki.io/v1/2427d170-a548-4515-b0d2-ccb43994dd04')
                .then(function(response) {
                    return response.json()
                })
                .then(function(data) {
                const cartoonHtmls = data.cartoonFilms.map(film => {
                    return`<a href="#" class="content__cartoon-item__wrapper col c-3">                  
                    <span class="content__series-item__title">
                        ${film.title}
                    </span>
                    <img class="content__series-item__icon" src="./assets/image/play-icon.png" alt="">
                    <div style="background-image: url('${film.image}');" class="content__series-item">
                    </div>
                    <div class="content__series-item__info">
                        <p class="content__series-item__name">
                            ${film.name}
                       </p>
                        <p class="content__series-item__name-english">${film.english}</p>
                    </div>
                </a>`
                })
                $('.content__cartoon').innerHTML = cartoonHtmls.join('')
                
                
                

                const handleCartoon = function(cartoonFilms) {
                    const a = $$('.content__cartoon-item__wrapper')
                    for(let i=0;i<a.length;i++) {
                        a[i].onclick = function(e) {
                        const html = cartoonFilms.map((film,index) => {
                            if(index == i) {
                                return `<div class="content__film-img__wrapper">
                                <img class="content__film-img" src="${film.image}" alt="">
                                <div class="content__film-img__btn-wrapper">
                                    <a class="content__film-img__btn" href="${film.link}">
                                        <i class="fa-solid fa-play"></i>
                                        Xem phim
                                    </a>
                                </div>          
                            </div>
                            <div class="content__film-info">
                                <h4 class="content__film-info__name">
                                    ${film.name}
                                </h4>
                                <p class="content__film-info__eng">${film.english}</p>
                                <p>Ngôn ngữ: Phụ đề việt</p>
                                <p>Thể loại: <span>${film.type}</span></p>
                                <p>Quốc gia: <span>${film.country}</span></p>
                                <p>Năm: <span>${film.time}</span></p>
                                <div class="content__film-review__vote">
                                    <i class="content__film-star__icon fa-solid fa-star"></i>
                                    <span >0</span>
                                    /5 (1 đánh giá)
                                    <i class="fa-solid fa-star content__film-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div class="content__film-review__content">
                                <h4>NỘI DUNG PHIM</h4>
                                <p>${film.content}</p>
                                <div class="content__film-review__comment">
                                    <div class="content__film-comment-header">
                                        <div class="content__film-comment__comment">0 bình luận</div>
                                        <div class="content__film-comment__sort">
                                            Sắp xếp theo
                                            <button>Mới nhất
                                                <i class="fa-solid fa-caret-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="content__film-comment-body">
                                        <img src="https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg" alt="">
                                        <input placeholder="Viết bình luận..." type="text">
                                    </div>
                                    <div class="content__film-comment-footer">
                                        <i class="fa-brands fa-facebook"></i>
                                        <a href="">
                                            Plugin bình luận trên Facebook</a>
                                    </div>
                                </div>
                            </div>`
                            }
                        })
                        $('.content__film-review').innerHTML = html.join('')


                        $('.content__nominations-wrapper').classList.add('none')
                        $('#content__update-wrapper').classList.add('none')
                        $('#content__theater-wrapper').classList.add('none')
                        $('#content__odd-wrapper').classList.add('none')
                        $('.content__film-review').classList.remove('none')
                        }
                    }
                }
                handleCartoon(data.cartoonFilms)
        })
           
        
    },


    start: function() {
        this.render()
    }
}

app.start()



export default app








