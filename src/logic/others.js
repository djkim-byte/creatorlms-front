export default {
    name: 'Others',
    layout: 'default',

    data() {
        return {
            items: [
                {
                    id: 1,
                    title: '한국 드론작전사령부 창설 및 운용 계획 발표',
                    source: 'Defense News Korea',
                    date: '2025-04-25',
                    summary: '대한민국 합동참모본부는 드론작전사령부의 2025년 하반기 공식 창설 계획을 발표했으며, 초기 전력으로 자폭형 드론 및 정찰 드론 체계를 포함한 통합 운용 교리를 적용할 예정이다.'
                }
            ]
        };
    },

    methods: {
        goDetail(item) {
            this.navigateTo('/others/detail', { id: item.id });
        }
    }
};
