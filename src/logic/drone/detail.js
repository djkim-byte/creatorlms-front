export default {
    name: 'DroneDetail',
    layout: 'default',

    data() {
        return {
            articles: [
                {
                    id: 1,
                    title: '우크라이나 전장 FPV 드론 손실률 분석 — 2025년 1분기',
                    source: 'Defense News',
                    date: '2025-05-01',
                    attachments: [
                        { name: 'fpv-loss-rate-2025q1.pdf', url: '/files/fpv-loss-rate-2025q1.pdf', size: '2.4 MB' },
                        { name: 'jamming-impact-data.xlsx', url: '/files/jamming-impact-data.xlsx', size: '512 KB' }
                    ],
                    media: {
                        type: 'image',
                        src: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1600&q=80',
                        caption: 'FPV 드론 전장 운용 자료사진'
                    },
                    body: [
                        '우크라이나 전장에서 FPV 드론의 작전 손실률이 급증하고 있다. 2025년 1분기 기준 출격한 FPV 드론 중 약 절반에 가까운 47%가 임무 도중 격추되거나 통신 두절 상태에 빠진 것으로 집계됐으며, 그 주요 원인으로 러시아군의 전자전 재밍 시스템과 AI 기반 광학 탐지 시스템이 지목된다.',
                        '특히 러시아군이 전선 전반에 걸쳐 광대역 재머를 배치한 이후 소형 FPV 드론의 평균 작전 반경은 기존 대비 31% 감소했다. 이는 단순히 통신이 끊기는 수준을 넘어, 드론이 임무 지점에 도달하기도 전에 무력화되는 사례가 늘어났음을 시사한다.',
                        '우크라이나군은 이에 대응해 주파수 호핑(FHSS) 기능을 탑재한 3세대 FPV 드론의 대량 양산 체계 구축에 들어갔다. 또한 광섬유 유선 제어 방식의 드론 비중을 확대해 재밍 영향을 원천 차단하는 전술도 병행되고 있다.',
                        '서방 분석가들은 이번 데이터를 단순한 손실 통계로 보기보다, 향후 모든 비대칭 전장에서 드론 운용 교리가 어떻게 진화할지 가늠할 수 있는 중요한 지표로 평가하고 있다.'
                    ]
                },
                {
                    id: 2,
                    title: 'NATO 드론 상호운용성 표준화 동향 보고서',
                    source: 'CSIS',
                    date: '2025-04-28',
                    attachments: [
                        { name: 'stanag-4586-revision-summary.pdf', url: '/files/stanag-4586-revision-summary.pdf', size: '1.1 MB' }
                    ],
                    media: {
                        type: 'youtube',
                        src: 'https://www.youtube.com/embed/2Ge1FzUC_T0',
                        caption: 'NATO 합동 드론 운용 시연 영상'
                    },
                    body: [
                        'NATO 회원국 간 무인기 운용 표준 통합을 위한 STANAG 4586 개정 작업이 본격화되고 있다. 통제 메시지 포맷, 데이터 링크 프로토콜, 피아 식별 신호의 공통 규격이 단계적으로 적용될 예정이며, 미국·영국·독일 주도로 합동 시험이 진행 중이다.',
                        '이번 개정의 핵심은 회원국 간 지휘체계가 다른 무인기를 공유 운용할 수 있도록 단계 4(Level 4) 수준의 상호운용성을 확보하는 것이다. 단계 4는 한 회원국의 통제소가 다른 회원국 자산의 항법·임무까지 직접 통제할 수 있는 수준을 의미한다.',
                        'NATO는 2026년까지 회원국 전 군종에 단계 4 적용을 목표로 하고 있으며, 한국·일본·호주 등 협력국에도 표준 채택 권고가 확대될 가능성이 높다.'
                    ]
                },
                {
                    id: 3,
                    title: '소형 상용 드론의 군사 개조 현황 — DroneLife 기술 분석',
                    source: 'DroneLife.com',
                    date: '2025-04-24',
                    attachments: [],
                    body: [
                        'DJI Mavic, Autel EVO 등 상용 쿼드콥터를 군사 임무용으로 개조하는 사례가 우크라이나, 중동 분쟁 지역에서 광범위하게 확산되고 있다. 3D 프린팅 기반의 폭탄 투하 장치, 열영상 카메라 모듈, 자체 제작 RF 부스터 등이 대표적인 개조 부품이다.',
                        '이러한 저비용 부품을 통한 능력 향상은 정찰·포병관측·근접 타격까지 임무 범위를 확장시키고 있으며, 군용 무인기 대비 1/100 수준의 단가로 운용된다는 점에서 비대칭 전력으로 주목받고 있다.',
                        '한편 상용 드론 제조사 또한 자사 제품이 분쟁 지역에서 사용되는 것을 막기 위해 지오펜싱과 펌웨어 잠금 정책을 강화하고 있으나, 오픈소스 펌웨어로 우회되는 사례가 빈번하게 보고되고 있다.'
                    ]
                },
                {
                    id: 4,
                    title: '중국 군용 무인기 수출 동향 및 시장 점유율 변화',
                    source: 'Janes',
                    date: '2025-04-20',
                    attachments: [
                        { name: 'china-uav-export-share-2024.pdf', url: '/files/china-uav-export-share-2024.pdf', size: '3.2 MB' }
                    ],
                    media: {
                        type: 'image',
                        src: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1600&q=80',
                        caption: '군용 무인기 자료사진'
                    },
                    body: [
                        '중국 CH-4, Wing Loong II 계열 군용 무인기의 중동·아프리카 수출이 지속적으로 증가하고 있다. 2024년 기준 글로벌 군용 무인기 수출 시장에서 중국의 점유율은 약 31%로, 미국에 이어 2위를 기록했다.',
                        '주요 수출국으로는 사우디아라비아, UAE, 이집트, 알제리, 나이지리아 등이 있으며, 가격 경쟁력과 신속한 인도, 운용 교육 패키지가 핵심 경쟁력으로 분석됐다. 미국이 MTCR 등 규제로 일부 국가에 대한 수출이 제한되는 동안 중국이 그 공백을 빠르게 채워온 결과다.'
                    ]
                },
                {
                    id: 5,
                    title: '저고도 무인기 탐지를 위한 패시브 레이더 기술 진화',
                    source: 'IEEE Spectrum',
                    date: '2025-04-15',
                    attachments: [
                        { name: 'passive-radar-test-results.pdf', url: '/files/passive-radar-test-results.pdf', size: '1.8 MB' },
                        { name: 'spectrum-allocation-chart.png', url: '/files/spectrum-allocation-chart.png', size: '420 KB' }
                    ],
                    media: {
                        type: 'image',
                        src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80',
                        caption: '레이더 안테나 자료사진'
                    },
                    body: [
                        '소형 저고도 무인기 탐지를 위해 기존 방송용 FM, DVB-T 신호를 활용한 패시브 레이더(Passive Coherent Location, PCL) 기술이 빠르게 발전하고 있다. 최근 시험에서는 1km 이내 마이크로 드론까지 안정적으로 추적하는 데 성공한 결과가 공개됐다.',
                        '패시브 레이더는 자체 신호를 송출하지 않기 때문에 전자기 노출이 적고, 기존 통신 인프라를 그대로 활용할 수 있어 비용이 낮다는 장점이 있다. 도심 환경에서의 적용 가능성이 특히 주목받고 있으며, 공항·발전소·정부 청사 등 핵심 시설 보호용으로 시범 도입이 검토되고 있다.'
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
            this.navigateTo('/drone');
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
