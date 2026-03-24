export default {
    name: 'Pagelists',
    layout: null,
    data() {
        return {
            baseUrl: 'https://creatorlms-brand.pages.dev',
            statusMap: {}
        }
    },
    mounted() {
        const saved = localStorage.getItem('pagelists-status');
        if (saved) {
            this.statusMap = JSON.parse(saved);
        }
    },
    computed: {
        pages() {
            return [
                // 메인
                { category: '메인', title: '홈', url: '#/home', description: '메인 랜딩 페이지 (히어로, 크리에이터 쇼케이스, 통계, 기능 소개, CTA)' },

                // 로그인 및 비밀번호 재설정
                { category: '로그인 및 비밀번호 재설정', title: '로그인', url: '#/login/login', description: '이메일/비밀번호 로그인, 아이디 기억하기' },
                { category: '로그인 및 비밀번호 재설정', title: '비밀번호 재설정 요청', url: '#/login/reset-password', description: '비밀번호 재설정 이메일 발송' },
                { category: '로그인 및 비밀번호 재설정', title: '비밀번호 재설정 확인', url: '#/login/reset-password-confirm', description: '새 비밀번호 설정' },

                // 무료로 시작하기 & 회원가입
                { category: '무료로 시작하기 & 회원가입', title: '회원가입', url: '#/signup/signup', description: '플랜 선택 + 가입 폼, 이메일 인증코드' },
                { category: '무료로 시작하기 & 회원가입', title: '인증코드 발송 PU', url: '#/signup/signup', description: '이메일 주소를 넣고 인증코드 발송을 클릭했을 때 나오는 팝업 페이지' },
                { category: '무료로 시작하기 & 회원가입', title: '약관동의 PU', url: '#/signup/signup', description: '이용약관 동의 클릭시 팝업' },
                { category: '무료로 시작하기 & 회원가입', title: '개인정보 처리방침 동의 PU', url: '#/signup/signup', description: '개인정보 처리방침 동의 클릭시 팝업' },
                { category: '무료로 시작하기 & 회원가입', title: '마케팅 정보 수신 동의 PU', url: '#/signup/signup', description: '마케팅 정보 수신 동의 클릭시 팝업' },
                { category: '무료로 시작하기 & 회원가입', title: '가입 완료 / 환영', url: '#/signup/welcome', description: '회원가입 완료 환영 페이지' },

                // 구매 결제
                { category: '구매 결제', title: '결제', url: '#/payment/checkout', description: '결제 페이지 (토스페이먼츠)' },
                { category: '구매 결제', title: '유료약정상품 구매약관 PU', url: '#/payment/checkout', description: '유료플랜 구매하기로 진입시 결제 약관 팝업' },
                { category: '구매 결제', title: '결제 완료', url: '#/payment/payment-complete', description: '결제 완료 안내 페이지' },
                { category: '구매 결제', title: '결제 실패', url: '#/mysite/payment-failed', description: '결제 실패 안내 페이지' },

                // 문의하기
                { category: '문의하기', title: '문의하기', url: '#/inquiry/inquiry', description: '1:1 문의 작성 폼' },
                { category: '문의하기', title: '첨부파일 용량체크 PU', url: '#/inquiry/inquiry', description: '파일선택시 업로드 용량 체크 팝업' },
                { category: '문의하기', title: '문의 접수 완료', url: '#/inquiry/inquiry-complete', description: '문의 접수 완료 안내 페이지' },

                // 마이페이지 - 내 사이트 관리하기
                { category: '마이페이지-내 사이트 관리하기', title: '내 사이트 목록', url: '#/mysite', description: '사이트 관리 목록 페이지' },
                { category: '마이페이지-내 사이트 관리하기', title: '사이트 없음', url: '#/mysite/empty', description: '사이트가 없을 때 빈 상태 페이지' },
                { category: '마이페이지-내 사이트 관리하기', title: '사이트 생성', url: '#/mysite/create', description: '새 사이트 생성 폼 (도메인 확인)' },
                { category: '마이페이지-내 사이트 관리하기', title: '무료약정상품 구매약관 PU', url: '#/mysite/create', description: '무료로 시작하기로 진입시 내 사이트 만들기내 약관 팝업' },
                { category: '마이페이지-내 사이트 관리하기', title: '도메인중복체크 PU - 가능', url: '#/mysite/create', description: '도메인 중복 체크 클릭 팝업' },
                { category: '마이페이지-내 사이트 관리하기', title: '도메인중복체크 PU - 불가능', url: '#/mysite/create', description: '도메인 중복 체크 클릭 팝업' },
                { category: '마이페이지-내 사이트 관리하기', title: '플랜 업그레이드', url: '#/mysite/upgrade', description: '플랜 업그레이드 페이지' },
                { category: '마이페이지-내 사이트 관리하기', title: '구독 해지', url: '#/mysite/cancel', description: '구독 해지 페이지' },
                { category: '마이페이지-내 사이트 관리하기', title: '구독취소 확인 PU', url: '#/mysite/cancel', description: '구독 취소하기 버튼 클릭시 팝업' },
                { category: '마이페이지-내 사이트 관리하기', title: '구독 연장', url: '#/mysite/extend', description: '구독 연장 페이지' },
                { category: '마이페이지-내 사이트 관리하기', title: '즉시 결제', url: '#/mysite/pay-now', description: '미결제 즉시 결제 페이지' },
                { category: '마이페이지-내 사이트 관리하기', title: '결제 완료', url: '#/mysite/payment-complete', description: '마이사이트 결제 완료 페이지' },
                { category: '마이페이지-내 사이트 관리하기', title: '결제 실패', url: '#/mysite/payment-failed', description: '마이사이트 결제 실패 안내 페이지' },

                // 마이페이지 - 결제내역
                { category: '마이페이지-결제내역', title: '결제내역', url: '#/payhistory/payment-history', description: '결제내역 목록 페이지' },
                { category: '마이페이지-결제내역', title: '결제내역 없음', url: '#/payhistory/payment-history-empty', description: '결제내역이 없을 때 빈 상태 페이지' },

                // 마이페이지 - 문의내역
                { category: '마이페이지-문의내역', title: '문의내역 목록', url: '#/inquiryhistory/inquiry-history', description: '문의내역 목록 페이지' },
                { category: '마이페이지-문의내역', title: '문의내역 없음', url: '#/inquiryhistory/inquiry-history-empty', description: '문의내역이 없을 때 빈 상태 페이지' },
                { category: '마이페이지-문의내역', title: '문의내역 상세', url: '#/inquiryhistory/detail', description: '문의내역 상세 보기 페이지' },

                // 마이페이지 - 계정관리
                { category: '마이페이지-계정관리', title: '계정관리', url: '#/account/account', description: '계정 정보 관리 페이지' },
                { category: '마이페이지-계정관리', title: '청구 이메일 변경', url: '#/account/change-billing-email', description: '청구 이메일 주소 변경 페이지' },
                { category: '마이페이지-계정관리', title: '청구 이메일 변경 완료', url: '#/account/change-billing-email-complete', description: '청구 이메일 변경 완료 안내 페이지' },
                { category: '마이페이지-계정관리', title: '대표카드 설정 버튼 클릭시 컨펌 PU', url: '#/account/account', description: '대표카드 설정 버튼 클릭시 팝업' },
                { category: '마이페이지-계정관리', title: '카드삭제 컨펌 PU', url: '#/account/account', description: '카드 삭제시 컨펌 팝업' },
                { category: '마이페이지-계정관리', title: '카드삭제(1개 남았을때) 확인 PU', url: '#/account/account', description: '카드 삭제 1개 이상 등록 팝업' },
                { category: '마이페이지-계정관리', title: '계정삭제 PU', url: '#/account/account', description: '계정삭제 클릭시 팝업' },

                // 약관 및 정보
                { category: '약관 및 정보', title: '이용약관', url: '#/terms/terms', description: '서비스 이용약관' },
                { category: '약관 및 정보', title: '무료 이용약관', url: '#/terms/terms-free', description: '무료 플랜 이용약관' },
                { category: '약관 및 정보', title: '유료 이용약관', url: '#/terms/terms-paid', description: '유료 플랜 이용약관' },
                { category: '약관 및 정보', title: '개인정보처리방침', url: '#/terms/privacy', description: '개인정보처리방침' },
                { category: '약관 및 정보', title: '마케팅 정보 수신 동의', url: '#/terms/marketing', description: '마케팅 정보 수신 동의' },

                // 서비스
                { category: '서비스', title: '플랫폼 소개', url: '', description: '-' },
                { category: '서비스', title: '프로덕트', url: '', description: '-' },
                { category: '서비스', title: '데모 보기', url: '#/service/demo', description: '서비스 데모 체험 페이지' },

                // 주요 기능
                { category: '주요 기능', title: 'AI튜터', url: '', description: '-' },
                { category: '주요 기능', title: 'AI학습리포트', url: '', description: '-' },
                { category: '주요 기능', title: '강의관리', url: '', description: '-' },
                { category: '주요 기능', title: '학습자관리', url: '', description: '-' },

                // 가격
                { category: '가격', title: '가격', url: '#/price/pricing', description: '플랜 카드, 월간/연간 토글, 기능 비교표' },

                // 이메일 템플릿
                { category: '이메일 템플릿', title: '이메일 인증', url: 'templates/email/verify-email.html', description: '회원가입 이메일 인증 템플릿' },
                { category: '이메일 템플릿', title: '비밀번호 재설정', url: 'templates/email/reset-password.html', description: '비밀번호 재설정 이메일 템플릿' },
                { category: '이메일 템플릿', title: '환영', url: 'templates/email/welcome.html', description: '가입 환영 이메일 템플릿' },
                { category: '이메일 템플릿', title: '사이트 생성 완료', url: 'templates/email/site-created.html', description: '사이트 생성 완료 알림 이메일 템플릿' },
                { category: '이메일 템플릿', title: '결제 완료', url: 'templates/email/payment-complete.html', description: '결제 완료 알림 이메일 템플릿' },
                { category: '이메일 템플릿', title: '결제 실패', url: 'templates/email/payment-failed.html', description: '결제 실패 알림 이메일 템플릿' },
                { category: '이메일 템플릿', title: '결제 유예', url: 'templates/email/payment-grace.html', description: '결제 유예 안내 이메일 템플릿' },
                { category: '이메일 템플릿', title: '서비스 정지', url: 'templates/email/service-suspended.html', description: '서비스 정지 알림 이메일 템플릿' },
                { category: '이메일 템플릿', title: '구독 해지', url: 'templates/email/subscription-cancelled.html', description: '구독 해지 알림 이메일 템플릿' },
                { category: '이메일 템플릿', title: '구독 만료 예정', url: 'templates/email/subscription-expiring.html', description: '구독 만료 예정 알림 이메일 템플릿' },
                { category: '이메일 템플릿', title: '구독 만료', url: 'templates/email/subscription-expired.html', description: '구독 만료 알림 이메일 템플릿' },
                { category: '이메일 템플릿', title: '구독 만료 1개월 후', url: 'templates/email/subscription-expired-1month.html', description: '구독 만료 1개월 후 알림 이메일 템플릿' },
                { category: '이메일 템플릿', title: '사용량 경고', url: 'templates/email/usage-warning.html', description: '사용량 초과 경고 이메일 템플릿' },

                // 서비스 점검
                { category: '서비스 점검', title: '서비스 점검', url: '#/inspection/maintenance', description: 'SPA 내 서비스 점검 안내 페이지' },
                { category: '서비스 점검', title: '정기 점검', url: '#/inspection/scheduled-maintenance', description: 'SPA 내 정기 점검 안내 페이지' },

                // 에러페이지
                { category: '에러페이지', title: '404 Not Found', url: '#/error/404', description: 'SPA 내 404 페이지' },
                { category: '에러페이지', title: '에러', url: '#/error/error', description: 'SPA 내 일반 에러 페이지' },
                { category: '에러페이지', title: '네트워크 에러', url: '#/error/network-error', description: 'SPA 내 네트워크 에러 페이지' }
            ]
        },
        groupedPages() {
            const groups = []
            let currentCategory = null
            for (const page of this.pages) {
                if (page.category !== currentCategory) {
                    groups.push({ category: page.category, pages: [] })
                    currentCategory = page.category
                }
                groups[groups.length - 1].pages.push(page)
            }
            return groups
        },
        totalPages() {
            return this.pages.length
        }
    },
    methods: {
        getFullUrl(url) {
            if (url.startsWith('#/')) {
                return this.baseUrl + '/' + url
            }
            return this.baseUrl + '/' + url
        },
        getStatusKey(page) {
            return page.category + '::' + page.title
        },
        getStatus(page) {
            const key = this.getStatusKey(page);
            if (!this.statusMap[key]) {
                this.statusMap[key] = { design: false, publishing: '', saved: false };
            }
            if (!('design' in this.statusMap[key])) {
                this.statusMap[key].design = this.statusMap[key].checked || false;
                this.statusMap[key].publishing = this.statusMap[key].note || '';
                delete this.statusMap[key].checked;
                delete this.statusMap[key].note;
            }
            return this.statusMap[key];
        },
        saveStatus(page) {
            const key = this.getStatusKey(page);
            this.statusMap[key].saved = true;
            localStorage.setItem('pagelists-status', JSON.stringify(this.statusMap));
        },
        editStatus(page) {
            const key = this.getStatusKey(page);
            const status = this.statusMap[key];
            if (!status.design && !status.publishing) {
                this.statusMap[key] = { design: false, publishing: '', saved: false };
            } else {
                status.saved = false;
            }
        }
    }
}
