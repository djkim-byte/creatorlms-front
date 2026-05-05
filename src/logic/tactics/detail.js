export default {
    name: 'TacticsDetail',
    layout: 'default',

    data() {
        return {
            articles: [
                {
                    id: 1,
                    title: '드론 군집 전술의 진화 — 이란제 샤헤드 개량형 운용 분석',
                    source: 'C4ISRNET / The War Zone',
                    date: '2025-04-29',
                    attachments: [],
                    body: [
                        '이란제 샤헤드 드론의 최신 개량형은 AI 기반 경로 최적화 기능을 탑재하여 기존 방공망 회피 성공률을 32% 향상시킨 것으로 보고됐다. C4ISRNET 및 The War Zone의 현장 보고를 종합 분석한 결과, 단순한 직선 경로 비행에서 벗어나 실시간 위협 평가에 따라 코스를 재계산하는 능력이 핵심 변화로 지목된다.',
                        '주요 전술적 변화로는 고도 변화 패턴의 랜덤화, 복수 방향 동시 진입, 가상 목표물과 실제 목표물의 혼합 운용이 확인됐다. 특히 다수 드론이 분산 진입한 뒤 최종 단계에서 동일 목표로 수렴하는 \'지연 합류(delayed convergence)\' 패턴은 기존 점방어 체계가 표적 우선순위를 판별하기 어렵게 만든다.',
                        '또한 가상 목표물 역할의 디코이 드론을 함께 운용함으로써 방공망의 미사일 자원을 의도적으로 소모시키는 사례가 증가했다. 이는 단가가 낮은 자폭 드론의 비대칭성을 극대화하는 운용 교리로, 향후 중동·동유럽 분쟁 지역 전반으로 확산될 가능성이 높다는 평가가 나온다.',
                        '서방 분석가들은 이번 개량형의 등장이 단순한 무기 성능 향상을 넘어 \'AI 보조 전술 결정\' 시대의 본격 개막을 알리는 신호로 보고 있으며, 이에 대응하기 위한 다층 방공망과 전자전 자산의 통합 운용 필요성이 강조되고 있다.'
                    ]
                },
                {
                    id: 2,
                    title: '드론 대드론 직접 교전 전술 사례 — 2024-25 분석',
                    source: 'The Aviationist',
                    date: '2025-04-26',
                    attachments: [],
                    body: [
                        '드론 대 드론 공중 교전 사례가 2024년 후반부터 우크라이나 전선을 중심으로 빠르게 누적되고 있다. The Aviationist는 70여 건의 공개 교전 영상을 토대로 공통된 전술 패턴과 향후 표준화 가능성을 정리했다.',
                        '교전 형태는 크게 세 가지로 구분된다. ① FPV 드론을 적 정찰 드론에 직접 충돌시키는 \'카미카제 요격\', ② 고정익 정찰기를 다수 FPV로 추격해 격추하는 \'추격 요격\', ③ 요격 전용으로 설계된 인터셉터 드론을 운용하는 \'전용 요격\'이다. 단가·가용성·성공률에서 각각 다른 균형을 보인다.',
                        '특히 인터셉터 전용 드론은 출력·기동성·센서 통합 측면에서 빠르게 진화하고 있으며, 일부 모델은 자동 표적 추적 기능을 탑재하고 있다. 이는 향후 정찰 자산의 생존성을 결정짓는 핵심 변수로 작용할 가능성이 크다.',
                        '분석가들은 이러한 직접 교전 데이터가 누적될수록 드론 운용 교리도 \'정찰 → 타격\' 중심에서 \'정찰 → 호위 → 타격\'의 다층 구조로 재편될 것으로 전망한다. 이는 향후 모든 드론 운용국이 마주하게 될 표준 시나리오가 될 가능성이 높다.'
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
            this.navigateTo('/tactics');
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
