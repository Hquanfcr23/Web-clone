const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const app = {
    nominationsFimls:  [
    {
        name: 'Người Nhện: Không Còn Nhà',
        english: 'Spiderman',
        title: 'HD Vietsub + Thuyết Minh',
        image: 'https://khoaitv.net/wp-content/uploads/2021/12/nguoi-nhen-khong-con-nha-54321-thumbnail-250x350.jpg' 
    },

    {
        name: 'Đấu Trường Âm Nhạc 2',
        english: 'Sing 2 (2021)',
        title: 'HD Vietsub + Thuyết Minh',
        image: 'https://khoaitv.net/wp-content/uploads/2021/12/hcs3dlc-250x350.jpg'
    },

    {
        name: 'Phim Chủng Tộc Bất Tử',
        english: 'Eternals (2021)',
        title: 'HD Thuyết Minh',
        image: 'https://upload.wikimedia.org/wikipedia/vi/9/9b/Eternals_%28film%29_poster.jpeg'
    },

    {
        name: 'Gia Đình Addams 2',
        english: 'The Addams Family 2 (2021)',
        title: 'HD Vietsub + Thuyết Minh',
        image: 'https://khoaitv.net/wp-content/uploads/2021/10/616126211eb56-250x350.jpg'
    },

    {
        name: 'Venom 2: Đối Mặt Tử Thù',
        english: 'Venom: Let There Be Carnage (2021)',
        title: 'HD Vietsub + Thuyết Minh',
        image: 'https://khoaitv.net/wp-content/uploads/2021/10/venom-2-doi-mat-tu-thu-3218-250x350-1-250x350.jpg'
    },

    {
        name: 'Xác Sống (Phần 11)',
        english: 'The Walking Dead (Season 11) (2021)',
        title: 'HD Vietsub',
        image: 'https://khoaitv.net/wp-content/uploads/2021/09/6119efab39f76.jpg'
    },

    ],

    updateFimls: [
        {
            name: 'Chúc Mẹ Ngủ Ngon',
            english: 'Goodnight Mommy (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/chuc-me-ngu-ngon-96269-thumbnail.jpg' 
        },

        {
            name: 'Sinh Mệnh Thân Yêu',
            english: 'Beloved Life (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/sinh-menh-than-yeu-95425-thumbnail.jpg' 
        },

        {
            name: 'Thấy (Phần 3)',
            english: 'See (Season 3) (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/08/thay-phan-3-93731-thumbnail.jpg' 
        },

        {
            name: 'Adamas',
            english: 'Adamas (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/07/adamas-83322-thumbnail.jpg' 
        },

        {
            name: 'Tên Cớm Trộm Kim Cương',
            english: 'Blue Streak (1999)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/ten-com-trom-kim-cuong-96290-thumbnail.jpg' 
        },

        {
            name: 'Tội Phạm Emily',
            english: 'Emily the Criminal (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/toi-pham-emily-95221-thumbnail.jpg' 
        },

        {
            name: 'Nụ Hôn Đầu',
            english: 'Fall In Love At First Kiss (2019)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2021/08/nu-hon-dau-250x350.jpg' 
        },

        {
            name: 'Bánh Mỹ Giới Thiệu: Nhà Beta',
            english: 'American Pie Presents: Beta House (2007)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/banh-my-gioi-thieu-nha-beta-96281-thumbnail.jpg' 
        },

        {
            name: 'Cô Gái Ngoài Hành Tinh Sài Tiểu Thất 2',
            english: 'My Girlfriend is an Alien 2 (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/co-gai-ngoai-hanh-tinh-sai-tieu-that-2-96300-thumbnail.jpg' 
        },

        {
            name: 'Những Lần Tỉnh Giấc',
            english: 'Awakenings (1990)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/nhung-lan-tinh-giac-96279-thumbnail.jpg' 
        },

        {
            name: 'Cậu Hình, Trợ Lý Nhỏ Lại Gây Chuyện',
            english: 'Xing Shao Assistant (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/07/cau-hinh-tro-ly-nho-lai-gay-chuyen-84922-thumbnail.jpg' 
        },

        {
            name: 'Đêm Nhạc Bất Tận Của Nick Và Norah',
            english: "Nick and Norah 's Infinite Playlist (2008)",
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/dem-nhac-bat-tan-cua-nick-va-norah-96277-thumbnail.jpg' 
        },
    ],

    theaterFilms: [
        {
            name: 'Hạ Cánh Khẩn Cấp',
            english: 'Emergency Declaration (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/ha-canh-khan-cap-96069-thumbnail.jpg' 
        },

        {
            name: 'Thủy Chiến Đảo Hansan: Rồng Trỗi Dậy',
            english: 'Hansan: Rising Dragon (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/thuy-chien-dao-hansan-rong-troi-day-96065-thumbnail.jpg' 
        },

        {
            name: 'Dòng Máu Đặc Cảnh',
            english: "The Policeman's Lineage (2022)",
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/dong-mau-dac-canh-95646-thumbnail.jpg' 
        },

        {
            name: 'Người Môi Giới',
            english: 'Broker (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/nguoi-moi-gioi-95408-thumbnail.jpg' 
        },

        {
            name: 'Ma Gương 3',
            english: 'Kuntilanak 3 (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/ma-guong-3-94841-thumbnail.jpg' 
        },

        {
            name: 'Hành Động Vượt Ngục 3',
            english: 'Breakout Brothers 3 (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/hanh-dong-vuot-nguc-3-94820-thumbnail.jpg' 
        },

        {
            name: 'Vì Yêu Mà Đấu',
            english: 'Combat Wombat (2021)',
            title: 'HD Thuyết Minh',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/vi-yeu-ma-dau-94811-thumbnail.jpg' 
        },

        {
            name: 'Mẹ Chồng',
            english: 'Mistress (2017)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/08/me-chong-94384-thumbnail.jpg' 
        },

        {
            name: 'Những Kẻ Phản Bội',
            english: 'Reservoir Dogs (1992)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/08/nhung-ke-phan-boi-94118-thumbnail.jpg' 
        },

        {
            name: '3 Chàng Ngốc',
            english: '3 Idiots (2009)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/08/3-chang-ngoc-94114-thumbnail.jpg' 
        },

        {
            name: 'Nope',
            english: 'Không (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/08/nope-93738-thumbnail.jpg' 
        },

        {
            name: 'Aquaman 2 Và Vương Quốc Đã Mất',
            english: 'Aquaman and the Lost Kingdom (2023)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/08/aquaman-2-va-vuong-quoc-da-mat-92695-thumbnail.jpg' 
        },
    ],

    serieFilms: [
        {
            name: 'Cô Gái Ngoài Hành Tinh Sài Tiểu Thất 2',
            english: 'My Girlfriend is an Alien 2 (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/co-gai-ngoai-hanh-tinh-sai-tieu-that-2-96300-thumbnail.jpg' 
        },

        {
            name: 'Các Tế Bào Của Yumi (Phần 2)',
            english: 'Yumi\'s Cells (Season 2) (2022)',
            title: 'HD Vietsub + ',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/cac-te-bao-cua-yumi-phan-2-96298-thumbnail.jpg' 
        },

        {
            name: 'Digimon Universe: Appli Monsters',
            english: 'デジモンユニバース アプリモンスターズ (2017)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/digimon-universe-appli-monsters-96271-thumbnail.jpg' 
        },

        {
            name: 'Mặt Nạ Thủy Tinh',
            english: 'Behind The Mask (2018)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/mat-na-thuy-tinh-96195-thumbnail.jpg' 
        },

        {
            name: 'Quảng Đông Thập Hổ: Nắm đấm Sắt Bất Khả Chiến Bại',
            english: 'JiangHu (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/quang-dong-thap-ho-nam-dam-sat-bat-kha-chien-bai-96149-thumbnail.jpg' 
        },

        {
            name: 'Cyberpunk: Edgerunners',
            english: 'Cyberpunk: Edgerunners (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/cyberpunk-edgerunners-96145-thumbnail.jpg' 
        },

        {
            name: 'Lối Sống Sai Lầm',
            english: 'Terms of Endearment (2004)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/loi-song-sai-lam-96141-thumbnail.jpg' 
        },

        {
            name: 'Điệu Valse Mùa Xuân',
            english: 'Spring Waltz (2006)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/dieu-valse-mua-xuan-96139-thumbnail.jpg' 
        },

        {
            name: 'Cô Nàng Bướng Bỉnh',
            english: 'Sassy Girl, Chun-hyang (2005)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/co-nang-buong-binh-96137-thumbnail.jpg' 
        },

        {
            name: 'Giấu Em Trong Trái Tim',
            english: 'Seni Kalbime Sakladım (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/giau-em-trong-trai-tim-96135-thumbnail.jpg' 
        },

        {
            name: 'Huấn Luyện Viên Tinh Thần Je Gal Gil',
            english: 'Mental Coach Jegal (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/huan-luyen-vien-tinh-than-je-gal-gil-96128-thumbnail.jpg' 
        },

        {
            name: 'Star Trek: Thế Giới Mới Lạ',
            english: 'Star Trek: Strange New Worlds (2022)',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/09/star-trek-the-gioi-moi-la-96077-thumbnail.jpg' 
        },
    ],

    topFilms: [
        {
            name: ' Kẻ Cắp Mặt Trăng 4 : Sự Trỗi Dậy Của Gru',
            english: ' Minions: The Rise Of Gru',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/07/ke-cap-mat-trang-4-su-troi-day-cua-gru-67502-thumbnail.jpg',
            view: '11 lượt xem'
        },
        {
            name: 'Knowing Bros',
            english: 'Knowing Bros',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2021/12/knowing-bros-53238-thumbnail.jpg',
            view: '29 lượt xem'
        },
        {
            name: 'Nhật Ký Công Chúa',
            english: 'The Princess Diaries',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/07/nhat-ky-cong-chua-65763-thumbnail.jpg',
            view: '11 lượt xem'
        },
        {
            name: 'Sát Thủ Đối Đầu',
            english: 'Bullet Train',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/08/sat-thu-doi-dau-87082-thumbnail.jpg',
            view: '7 lượt xem'
        },
        {
            name: 'Chiến Binh (Phần 2)',
            english: 'Warrior',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2021/12/chien-binh-phan-2-54895-thumbnail.jpg',
            view: '6 lượt xem'
        },
        {
            name: 'Yêu Từng Centimet',
            english: 'The Centimeter of Love',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2021/12/yeu-tung-centimet-54759-thumbnail.jpg',
            view: '6 lượt xem'
        },
        {
            name: 'Final Destination 5',
            english: 'Final Destination 5',
            title: 'HD Vietsub',
            image: 'https://khoaitv.net/wp-content/uploads/2022/05/final-destination-5-60515-thumbnail.jpg',
            view: '4 lượt xem'
        },
    ],

    render: function() {
        const nominationHtmls = this.nominationsFimls.map((film, index) => {
            return `<a href="" class="content__nominations-item__wrapper col c-2">                  
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

        const updateHtmls = this.updateFimls.map(film => {
            return `<a href="" class="content__update-item__wrapper col c-2">                  
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

        const theaterHtmls = this.theaterFilms.map(film => {
            return `<a href="" class="content__update-item__wrapper col c-2">                  
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

        const serieHtmls = this.serieFilms.map(film => {
            return `<div class="content__series-item__wrapper col c-3">                  
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
        </div>
        `
        })

        function callback() {
            console.log(123);
        }

        const topHtmls = this.topFilms.map(film => {

            
            return` <div onclick="callback()" class="content__sidebar-top__item">
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
        </div>`
        })
        $('.content__sidebar-top').innerHTML = topHtmls.join('')
        
        if($('.content__series') && $('.content__nominations') &&  
           $('.content__update') && $('.content__theater') && 
           $('.content__sidebar-top')) {

           $('.content__series').innerHTML = serieHtmls.join('')
           $('.content__nominations').innerHTML = nominationHtmls.join('')
           $('.content__update').innerHTML = updateHtmls.join('')
           $('.content__theater').innerHTML = theaterHtmls.join('')
           $('.content__sidebar-top').innerHTML = topHtmls.join('')
           
           }

    const a = $$('.content__series-item__wrapper')
    // for(let i = 0;i<a.length;i++) {
    //     a[i].onclick = function() {
    //     }
    // }

   
        
    },


    start: function() {
        this.render()
    }


}

app.start()

export default app








