export default {
    name: 'CDroneDetail',
    layout: 'default',

    data() {
        return {
            articles: [
                {
                    id: 1,
                    title: 'RF 재밍 기반 대드론 시스템 성능 비교 연구',
                    source: 'KCI 학술지 (한국항공우주학회지)',
                    date: '2025-04-30',
                    attachments: [
                        { name: 'rf-jamming-comparison-2025.pdf', url: '/files/rf-jamming-comparison-2025.pdf', size: '1.9 MB' }
                    ],
                    media: {
                        type: 'image',
                        src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
                        caption: 'RF 재밍 안테나 자료사진'
                    },
                    body: [
                        '국내외에서 운용 중인 RF 재밍 기반 대드론 시스템의 주파수 대역별 차단 성능과 작전 반경을 정량적으로 비교 분석했다. 광대역 노이즈 재머는 평균 1.8km, 표적 주파수만 추적 차단하는 스마트 재머는 평균 2.6km까지 안정적인 차단 효과를 보이는 것으로 확인됐다.',
                        '특히 주파수 호핑(FHSS) 기반 드론에 대한 대응에서는 스마트 재머의 차단 성공률이 광대역 대비 약 34%p 높게 나타났다. 이는 광대역 노이즈가 호핑 주기 사이에 신호를 일부 통과시키는 한계와 맞물린 결과로 분석된다.',
                        '연구진은 향후 인지형(Cognitive) 재머와 AI 기반 신호 분류기를 결합한 하이브리드 구조가 표준이 될 가능성이 높다고 전망했으며, 도심 환경에서의 부수 전자기 영향을 줄이기 위한 빔포밍 기술의 통합도 핵심 과제로 제시됐다.'
                    ]
                },
                {
                    id: 2,
                    title: '레이저 기반 드론 요격 시스템 — SCI급 연구 동향',
                    source: 'SCI 학술지 (IEEE Transactions)',
                    date: '2025-04-27',
                    attachments: [
                        { name: 'hel-cost-effectiveness.pdf', url: '/files/hel-cost-effectiveness.pdf', size: '2.6 MB' },
                        { name: 'hel-engagement-data.xlsx', url: '/files/hel-engagement-data.xlsx', size: '480 KB' }
                    ],
                    media: {
                        type: 'image',
                        src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
                        caption: '고에너지 레이저(HEL) 시험 자료사진'
                    },
                    body: [
                        'SCI급 학술지에 게재된 최신 연구에서 고에너지 레이저(HEL) 시스템의 소형 드론 대상 교전 비용이 발당 평균 2.1달러로, 미사일 기반 요격 대비 99.7% 절감 효과를 보이는 것으로 발표됐다. 이는 기존 운동에너지 요격체(KKV) 대비 압도적인 비용 우위를 의미한다.',
                        '50kW급 레이저 시스템을 기반으로 한 시험에서는 500m 이내 소형 드론에 대해 3초 내 무력화가 가능한 것으로 보고됐다. 빔 포커싱과 추적 안정성 향상 덕분에 표적 타격 정확도는 90% 이상을 유지했다.',
                        '다만 기상 조건(안개·강우)에 따른 빔 감쇄와 지속 사격 시 냉각 부하가 운용상 한계로 지적됐다. 향후 100kW 이상의 출력을 갖춘 차세대 시스템과 다중 타겟 교전 알고리즘이 핵심 연구 방향으로 제시됐다.'
                    ]
                },
                {
                    id: 3,
                    title: 'AI 기반 광학 드론 탐지 알고리즘 정확도 평가',
                    source: 'SCI 학술지 (Sensors)',
                    date: '2025-04-22',
                    attachments: [
                        { name: 'optical-detection-benchmark.pdf', url: '/files/optical-detection-benchmark.pdf', size: '3.1 MB' }
                    ],
                    media: {
                        type: 'image',
                        src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1600&q=80',
                        caption: 'AI 광학 드론 탐지 자료사진'
                    },
                    body: [
                        'YOLOv8 및 Transformer 계열 검출 모델을 활용한 광학 드론 탐지 알고리즘의 야간·저시정 환경 성능을 평가한 결과, Hybrid Transformer 모델이 IoU 0.5 기준 평균 93.4%의 탐지 정확도를 기록했다.',
                        '새와의 오탐(FP) 비율은 기존 CNN 기반 대비 약 41% 감소했으며, 군집 비행 환경에서도 평균 추적 ID 유지율이 88%에 달했다. 이는 도심·공항 등 복합 잡음 환경에서의 운용 가능성을 크게 높이는 결과다.',
                        '연구진은 향후 RF 센서·레이더와의 멀티모달 융합 탐지가 표준화되어야 한다고 제언했으며, 엣지 디바이스에서의 실시간 추론을 위한 모델 경량화 또한 후속 과제로 제시됐다.'
                    ]
                },
                {
                    id: 4,
                    title: '마이크로파 펄스(HPM) 무기를 이용한 드론 무력화 실험',
                    source: 'KCI 학술지 (한국군사과학기술학회지)',
                    date: '2025-04-18',
                    attachments: [
                        { name: 'hpm-field-test-summary.pdf', url: '/files/hpm-field-test-summary.pdf', size: '1.4 MB' }
                    ],
                    body: [
                        '국방과학연구소 주관의 야외 시험에서 고출력 마이크로파(HPM) 무기 시제품이 동시 다수 드론에 대해 200m 거리에서 평균 92%의 무력화 성공률을 보였다. HPM은 단발성으로 광역 전자기 영향을 가하는 특성상 군집 드론(Swarm) 대응 수단으로 특히 유망하다.',
                        '단점으로는 비교적 짧은 유효 사거리와 아군 전자장비에 대한 부수 영향이 지적됐으며, 차폐·지향성 안테나 기술과의 결합이 핵심 과제로 제시됐다. 펄스 폭과 반복률을 조정해 표적 종류별 최적화 데이터도 함께 공개됐다.'
                    ]
                },
                {
                    id: 5,
                    title: '그물 포획 드론(Net Capture Drone) 야전 운용성 검증',
                    source: 'SCI 학술지 (Defence Technology)',
                    date: '2025-04-12',
                    attachments: [],
                    body: [
                        '소형 위협 드론을 물리적으로 포획하는 네트 캡처 드론의 야전 운용성을 검증한 연구에서, 자율 추적·발사 모드 기준 평균 포획 성공률 78%를 기록했다. 도심·실내 등 RF 사용이 제한되는 환경에서 비살상 대응 옵션으로 주목받고 있다.',
                        '운용 한계로는 표적 드론의 기동 회피와 바람 영향에 따른 발사 정확도 저하가 보고됐으며, 향후 머신비전 기반 예측 발사 알고리즘과 다중 네트 동시 발사 메커니즘이 보완 과제로 제시됐다.'
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
            this.navigateTo('/c-drone');
        },
        fileFormat(name) {
            if (!name) return '';
            const dot = name.lastIndexOf('.');
            if (dot < 0 || dot === name.length - 1) return 'FILE';
            const ext = name.slice(dot + 1).toLowerCase();
            const map = {
                xls: 'XLS', xlsx: 'XLS', xlsm: 'XLS', csv: 'XLS',
                ppt: 'PPT', pptx: 'PPT', pptm: 'PPT',
                doc: 'DOC', docx: 'DOC',
                jpg: 'JPG', jpeg: 'JPG'
            };
            return map[ext] || ext.toUpperCase();
        },
        async downloadFile(file, event) {
            if (event) event.preventDefault();

            if ('showSaveFilePicker' in window) {
                try {
                    const handle = await window.showSaveFilePicker({ suggestedName: file.name });
                    const res = await fetch(file.url);
                    if (!res.ok) throw new Error('파일을 가져오지 못했습니다.');
                    const blob = await res.blob();
                    const writable = await handle.createWritable();
                    await writable.write(blob);
                    await writable.close();
                    return;
                } catch (e) {
                    if (e.name === 'AbortError') return;
                    console.error('Save picker 실패, 기본 다운로드로 대체:', e);
                }
            }

            const a = document.createElement('a');
            a.href = file.url;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
};
