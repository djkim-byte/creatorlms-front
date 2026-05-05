export default {
    name: 'CDrone',
    layout: 'default',

    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'RF 재밍 기반 대드론 시스템 성능 비교 연구',
                    source: 'KCI 학술지 (한국항공우주학회지)',
                    date: '2025-04-30',
                    summary: '국내외 RF 재밍 기반 대드론 시스템의 주파수 대역별 차단 성능과 작전 반경을 비교 분석한 결과, 광대역 노이즈 재머는 평균 1.8km, 스마트 재머는 평균 2.6km까지 안정적인 차단 효과를 보이는 것으로 확인됐다. 특히 주파수 호핑(FHSS) 드론에 대한 대응에서는 스마트 재머의 차단 성공률이 광대역 대비 약 34%p 높게 나타났다.',
                    attachments: [
                        { name: 'rf-jamming-comparison-2025.pdf', url: '/files/rf-jamming-comparison-2025.pdf', size: '1.9 MB' }
                    ]
                },
                {
                    id: 2,
                    title: '레이저 기반 드론 요격 시스템 — SCI급 연구 동향',
                    source: 'SCI 학술지 (IEEE Transactions)',
                    date: '2025-04-27',
                    summary: 'SCI급 학술지에 게재된 최신 연구에서 고에너지 레이저(HEL) 시스템의 소형 드론 대상 교전 비용이 발당 평균 2.1달러로 미사일 대비 99.7% 절감 효과를 보이는 것으로 발표됐다. 50kW급 레이저 시스템을 기반으로 500m 이내 소형 드론에 대한 3초 내 무력화가 가능한 것으로 실험 결과가 보고됐다.',
                    attachments: [
                        { name: 'hel-cost-effectiveness.pdf', url: '/files/hel-cost-effectiveness.pdf', size: '2.6 MB' },
                        { name: 'hel-engagement-data.xlsx', url: '/files/hel-engagement-data.xlsx', size: '480 KB' }
                    ]
                },
                {
                    id: 3,
                    title: 'AI 기반 광학 드론 탐지 알고리즘 정확도 평가',
                    source: 'SCI 학술지 (Sensors)',
                    date: '2025-04-22',
                    summary: 'YOLOv8 및 Transformer 계열 검출 모델을 활용한 광학 드론 탐지 알고리즘의 야간·저시정 환경 성능을 평가한 결과, Hybrid Transformer 모델이 IoU 0.5 기준 평균 93.4%의 탐지 정확도를 기록했다. 새와의 오탐률은 기존 CNN 기반 대비 약 41% 감소한 것으로 분석됐다.',
                    attachments: [
                        { name: 'optical-detection-benchmark.pdf', url: '/files/optical-detection-benchmark.pdf', size: '3.1 MB' }
                    ]
                },
                {
                    id: 4,
                    title: '마이크로파 펄스(HPM) 무기를 이용한 드론 무력화 실험',
                    source: 'KCI 학술지 (한국군사과학기술학회지)',
                    date: '2025-04-18',
                    summary: '국방과학연구소 주관의 야외 시험에서 고출력 마이크로파(HPM) 무기 시제품이 동시 다수 드론에 대해 200m 거리에서 평균 92%의 무력화 성공률을 보였다. HPM의 광역 전자기 영향으로 군집 드론(Swarm) 대응 수단으로의 가능성이 높게 평가되고 있다.',
                    attachments: [
                        { name: 'hpm-field-test-summary.pdf', url: '/files/hpm-field-test-summary.pdf', size: '1.4 MB' }
                    ]
                },
                {
                    id: 5,
                    title: '그물 포획 드론(Net Capture Drone) 야전 운용성 검증',
                    source: 'SCI 학술지 (Defence Technology)',
                    date: '2025-04-12',
                    summary: '소형 위협 드론을 물리적으로 포획하는 네트 캡처 드론의 야전 운용성을 검증한 연구에서, 자율 추적·발사 모드 기준 평균 포획 성공률 78%를 기록했다. 도심·실내 등 RF 사용이 제한되는 환경에서 비살상 대응 옵션으로 주목된다.',
                    attachments: []
                }
            ]
        };
    },

    methods: {
        goDetail(item) {
            this.navigateTo('/c-drone/detail', { id: item.id });
        }
    }
};
