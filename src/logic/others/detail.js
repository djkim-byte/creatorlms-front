export default {
    name: 'OthersDetail',
    layout: 'default',

    data() {
        return {
            articles: [
                {
                    id: 1,
                    title: '한국 드론작전사령부 창설 및 운용 계획 발표',
                    source: 'Defense News Korea',
                    date: '2025-04-25',
                    body: [
                        '대한민국 합동참모본부는 드론작전사령부의 2025년 하반기 공식 창설 계획을 발표했다. 합참은 초기 전력으로 자폭형 드론 및 정찰 드론 체계를 포함한 통합 운용 교리를 적용할 예정이며, 육·해·공군에 분산되어 있던 무인기 전력을 단일 지휘체계 아래 묶는 것이 핵심이다.',
                        '드론작전사령부는 평시 정찰·감시 임무와 더불어 유사시 정밀 타격, 전자전 지원 등 복합 임무를 수행할 수 있도록 편성된다. 초기에는 국내 개발 자폭 드론과 중·소형 정찰 무인기 위주로 전력화가 이뤄질 전망이다.',
                        '국방부는 우크라이나 전장의 운용 데이터를 반영해 재밍 대응 능력, 자율 항법, 군집 운용을 핵심 요구 능력으로 명시했다. 향후 단계적 전력 확장을 통해 중형 무인 공격기와 다목적 무인 수송기까지 확보할 계획이다.'
                    ]
                }
            ]
        };
    },

    computed: {
        article() {
            const id = parseInt(this.getParam('id'), 10);
            return this.articles.find(a => a.id === id) || null;
        }
    },

    methods: {
        goList() {
            this.navigateTo('/others');
        }
    }
};
