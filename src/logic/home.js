export default {
    name: 'Home',
    layout: 'default',

    data() {
        return {
            searchKeyword: '',
            selectedCategory: '',
            selectedStatus: '',
            selectedSort: '최신 등록순',
            categories: ['카테고리명'],
            hasMore: true,
            courses: [
                {
                    id: 1,
                    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&h=400&q=80',
                    status: 'live',
                    wished: false,
                    tags: ['카테고리명'],
                    title: 'AI 이미지 생성의 대세, 나노바나나로 초격차 디자인/기획 마스터하기',
                    date: '2000.00.00 오후 00:00',
                    instructor: '홍길동 강사 외 3명',
                    lectureInfo: null,
                    capacity: null,
                    rating: 5.0,
                    reviewCount: 465,
                    originalPrice: 110000,
                    discountRate: 10,
                    price: 100000,
                    installment: null,
                    installment2: null,
                    bundleDiscount: null
                },
                {
                    id: 2,
                    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&h=400&q=80',
                    status: 'closed',
                    wished: true,
                    tags: ['카테고리명'],
                    title: '대세는 구글 제미나이 완전 정복 - 입문자도 전문가처럼 쓰는 멀티모달 올인원',
                    date: '2000.00.00 ~ 2000.00.00',
                    instructor: '홍길동 강사',
                    lectureInfo: '총 10강 · 5시간',
                    capacity: null,
                    rating: 5.0,
                    reviewCount: 465,
                    originalPrice: null,
                    discountRate: null,
                    price: 100000,
                    installment: null,
                    installment2: null,
                    bundleDiscount: null
                },
                {
                    id: 3,
                    thumbnail: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&h=400&q=80',
                    status: 'upcoming',
                    wished: false,
                    tags: ['Googlemeet', '카테고리명'],
                    title: '대세는 구글 제미나이 완전 정복 - 입문자도 전문가처럼 쓰는 멀티모달 올인원',
                    date: '2000.00.00 오후 00:00',
                    instructor: '홍길동 강사 외 3명',
                    lectureInfo: null,
                    capacity: '모집인원 10명',
                    rating: 5.0,
                    reviewCount: 465,
                    originalPrice: 200000,
                    discountRate: 10,
                    price: 63000,
                    installment: '3개월 할부',
                    installment2: null,
                    bundleDiscount: null
                },
                {
                    id: 4,
                    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400&q=80',
                    status: null,
                    wished: false,
                    tags: ['카테고리명'],
                    title: '대세는 구글 제미나이 완전 정복 - 입문자도 전문가처럼 쓰는 멀티모달 올인원',
                    date: null,
                    instructor: '홍길동 강사 외 3명',
                    lectureInfo: '총 10강 · 5시간',
                    capacity: null,
                    rating: 5.0,
                    reviewCount: 465,
                    originalPrice: null,
                    discountRate: null,
                    price: 0,
                    installment: null,
                    installment2: null,
                    bundleDiscount: null
                },
                {
                    id: 5,
                    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80',
                    status: 'closed',
                    wished: true,
                    tags: ['카테고리명'],
                    title: '대세는 구글 제미나이 완전 정복 - 입문자도 전문가처럼 쓰는 멀티모달 올인원',
                    date: null,
                    instructor: null,
                    lectureInfo: null,
                    capacity: null,
                    rating: 5.0,
                    reviewCount: 465,
                    originalPrice: null,
                    discountRate: null,
                    price: 100000,
                    installment: null,
                    installment2: null,
                    bundleDiscount: null
                },
                {
                    id: 6,
                    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=600&h=400&q=80',
                    status: null,
                    wished: false,
                    tags: ['카테고리명'],
                    title: '대세는 구글 제미나이 완전 정복 - 입문자도 전문가처럼 쓰는 멀티모달 올인원',
                    date: null,
                    instructor: null,
                    lectureInfo: '5개 상품 묶음',
                    capacity: null,
                    rating: 5.0,
                    reviewCount: 465,
                    originalPrice: 200000,
                    discountRate: null,
                    price: 63000,
                    installment: null,
                    installment2: '3개월 할부',
                    bundleDiscount: 35
                }
            ]
        };
    },

    computed: {
        filteredCourses() {
            let result = [...this.courses];
            if (this.selectedCategory) {
                result = result.filter(c => c.tags.includes(this.selectedCategory));
            }
            if (this.searchKeyword) {
                const kw = this.searchKeyword.toLowerCase();
                result = result.filter(c => c.title.toLowerCase().includes(kw));
            }
            return result;
        }
    },

    methods: {
        formatPrice(price) {
            return price.toLocaleString('ko-KR');
        },
        toggleWish(course) {
            course.wished = !course.wished;
        },
        resetFilters() {
            this.selectedCategory = '';
            this.selectedStatus = '';
            this.selectedSort = '최신 등록순';
            this.searchKeyword = '';
        },
        searchCourses() {
            // 검색 실행 (filteredCourses computed가 자동 반영)
        },
        loadMore() {
            // 더보기 로직
            this.hasMore = false;
        }
    }
};
