export default {
    name: 'Tactics',
    layout: 'default',

    data() {
        return {
            items: [
                {
                    id: 1,
                    title: '드론 군집 전술의 진화 — 이란제 샤헤드 개량형 운용 분석',
                    source: 'C4ISRNET / The War Zone',
                    date: '2025-04-29',
                    summary: '이란제 샤헤드 드론의 최신 개량형은 AI 기반 경로 최적화 기능을 탑재하여 기존 방공망 회피 성공률을 32% 향상시킨 것으로 보고됐다. C4ISRNET 및 The War Zone의 현장 보고를 종합 분석했으며, 주요 전술적 변화로는 고도 변화 패턴의 랜덤화, 복수 방향 동시 진입, 가상 목표물과 실제 목표물의 혼합 운용이 확인됐다.',
                    attachments: []
                },
                {
                    id: 2,
                    title: '드론 대드론 직접 교전 전술 사례 — 2024-25 분석',
                    source: 'The Aviationist',
                    date: '2025-04-26',
                    summary: '드론 대 드론 공중 교전 사례가 2024년 후반부터 우크라이나 전선을 중심으로 빠르게 누적되고 있으며, FPV 드론을 이용한 직접 충돌·고정익 정찰기 격추·요격용 전용 드론 운용까지 임무 형태가 다층화되고 있다. The Aviationist는 70여 건의 교전 영상을 토대로 공통된 전술 패턴과 향후 표준화 가능성을 정리했다.',
                    attachments: []
                }
            ]
        };
    },

    methods: {
        goDetail(item) {
            this.navigateTo('/tactics/detail', { id: item.id });
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
