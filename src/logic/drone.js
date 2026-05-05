export default {
    name: 'Drone',
    layout: 'default',

    data() {
        return {
            items: [
                {
                    id: 1,
                    title: '우크라이나 전장 FPV 드론 손실률 분석 — 2025년 1분기',
                    source: 'Defense News',
                    date: '2025-05-01',
                    summary: '우크라이나 전장에서 FPV 드론의 작전 손실률이 급증하고 있으며, 전자전 재밍 및 AI 기반 탐지 시스템에 의한 격추 비율이 전체의 47%에 달하는 것으로 분석됐다. 특히 러시아군의 광대역 재머 배치 이후 소형 FPV 드론의 평균 작전 반경이 기존 대비 31% 감소한 것으로 나타났으며, 우크라이나군은 이에 대응하기 위해 주파수 호핑 기능을 탑재한 3세대 FPV 드론의 대량 양산 체계를 구축 중인 것으로 알려졌다.',
                    attachments: [
                        { name: 'fpv-loss-rate-2025q1.pdf', url: '/files/fpv-loss-rate-2025q1.pdf', size: '2.4 MB' },
                        { name: 'jamming-impact-data.xlsx', url: '/files/jamming-impact-data.xlsx', size: '512 KB' }
                    ]
                },
                {
                    id: 2,
                    title: 'NATO 드론 상호운용성 표준화 동향 보고서',
                    source: 'CSIS',
                    date: '2025-04-28',
                    summary: 'NATO 회원국 간 무인기 운용 표준 통합을 위한 STANAG 4586 개정 작업이 본격화되며, 통제 메시지 포맷·데이터 링크·식별 신호의 공통 규격이 단계적으로 적용될 예정이다. 미국·영국·독일 주도로 합동 시험이 진행 중이며, 2026년까지 회원국 전 군종에 단계 4 수준의 상호운용성 적용을 목표로 한다. 한국 등 협력국에도 표준 채택 권고가 확대될 가능성이 높다.',
                    attachments: [
                        { name: 'stanag-4586-revision-summary.pdf', url: '/files/stanag-4586-revision-summary.pdf', size: '1.1 MB' }
                    ]
                },
                {
                    id: 3,
                    title: '소형 상용 드론의 군사 개조 현황 — DroneLife 기술 분석',
                    source: 'DroneLife.com',
                    date: '2025-04-24',
                    summary: 'DJI Mavic·Autel EVO 등 상용 쿼드콥터를 군사 임무용으로 개조하는 사례가 우크라이나·중동 분쟁 지역에서 광범위하게 확산되고 있다. 3D 프린팅 기반 투하 장치, 열영상 카메라 모듈, 자체 제작 RF 부스터 등 저비용 부품을 통한 능력 향상 사례가 보고됐으며, 정찰·포병관측·근접 타격까지 임무 범위가 확장되는 추세다.',
                    attachments: []
                },
                {
                    id: 4,
                    title: '중국 군용 무인기 수출 동향 및 시장 점유율 변화',
                    source: 'Janes',
                    date: '2025-04-20',
                    summary: '중국 CH-4·Wing Loong II 계열 군용 무인기의 중동·아프리카 수출이 지속 증가하고 있으며, 2024년 기준 글로벌 군용 무인기 수출 시장에서 중국의 점유율이 약 31%로 미국에 이어 2위를 기록했다. 가격 경쟁력과 신속한 인도, 운용 교육 패키지가 주요 경쟁력으로 분석됐다.',
                    attachments: [
                        { name: 'china-uav-export-share-2024.pdf', url: '/files/china-uav-export-share-2024.pdf', size: '3.2 MB' }
                    ]
                },
                {
                    id: 5,
                    title: '저고도 무인기 탐지를 위한 패시브 레이더 기술 진화',
                    source: 'IEEE Spectrum',
                    date: '2025-04-15',
                    summary: '소형 저고도 무인기 탐지를 위해 FM·DVB-T 신호를 활용한 패시브 레이더 기술이 빠르게 발전하고 있으며, 최근 1km 이내 마이크로 드론까지 안정적으로 추적하는 시험 결과가 공개됐다. 능동 레이더 대비 전자기 노출이 적고 비용이 낮아 도심 보안 인프라 적용이 검토되고 있다.',
                    attachments: [
                        { name: 'passive-radar-test-results.pdf', url: '/files/passive-radar-test-results.pdf', size: '1.8 MB' },
                        { name: 'spectrum-allocation-chart.png', url: '/files/spectrum-allocation-chart.png', size: '420 KB' }
                    ]
                }
            ]
        };
    },

    methods: {
        goDetail(item) {
            this.navigateTo('/drone/detail', { id: item.id });
        }
    }
};
