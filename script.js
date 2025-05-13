function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function goToForm() {
  document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
}

// Fiyat sor butonlarına event listener ekleme
document.querySelectorAll('.price-btn').forEach(btn => {
  btn.addEventListener('click', goToForm);
});

function showPackageDetails(packageId) {
  const details = document.getElementById(packageId);
  details.classList.add('active');
}

function hidePackageDetails(packageId) {
  const details = document.getElementById(packageId);
  details.classList.remove('active');
}

// ESC ile modal kapama
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.package-details.active').forEach(function(modal) {
      modal.classList.remove('active');
    });
  }
});

// Paket verileri
const packagesData = [
  {
    id: 'gold-erkek',
    icon: '🥇',
    title: 'Gold Erkek Check Up Programı',
    summary: [
      { icon: '🩺', label: 'Muayeneler', value: 6 },
      { icon: '📷', label: 'Radyolojik', value: 5 },
      { icon: '🧪', label: 'Laboratuvar', value: 38 },
      { icon: '❤️', label: 'Kardiyolojik', value: 2 },
      { icon: '🔬', label: 'Ölçüm', value: 1 }
    ],
    details: [
      {
        title: 'Muayeneler', count: 6, items: [
          'Check Up Muayene',
          'Kardiyoloji Muayene',
          'Üroloji Muayene',
          'Göğüs Hastalıkları Muayene ya da Göz Muayene',
          'Diş Muayene',
          'Diyetisyen Görüşmesi'
        ]
      },
      {
        title: 'Radyolojik Tetkikler', count: 5, items: [
          'Akciğer Grafisi (Arka Ön)',
          'BT, Toraks tarama amaçlı düşük doz',
          'Tiroid USG',
          'Tüm Abdomen USG',
          'Panoramik Diş Röntgeni (3)'
        ]
      },
      {
        title: 'Laboratuvar Tetkikleri', count: 38, items: [
          'ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Gaitada Gizli Kan','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','(T) Erkeklik Hormonu, Total','(T) Erkeklik Hormonu, Bioavailable','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 15-3','CA 19-9','PSA, (Total) (2)','PSA, (Serbest) (2)','Hepatit B s antijeni (HBsAg)','Hepatit Bs antikoru (anti-HBs)','Hepatit C Antikoru (anti-HCV)'
        ], labList: true
      },
      {
        title: 'Kardiyolojik Tetkikler', count: 2, items: [
          'EKG (1)',
          'Ekokardiyografi/Eforlu EKG (1)'
        ]
      },
      {
        title: 'Patolojik Tetkikler', count: '-', items: ['-']
      },
      {
        title: 'Ölçüm ve Diğer Tetkikler', count: 1, items: ['Vücut Kompozisyon Saptanması']
      },
      {
        title: 'Check-Up Sözlüğü', count: null, items: [
          '40 yaş üzeri kişilere Eforlu EKG/Ekokardiyografi hizmeti, 40 yaş altı kişilere EKG, Eforlu EKG ya da Ekokardiyografi uygulanır. Hangi çekimin yapılacağı hekim önerisine göre belirlenir.',
          'PSA, (Total) ve PSA, (Serbest) tetkikleri, hekim önerisi çerçevesinde 40 yaş üstü erkeklere uygulanmaktadır. 40 yaş altı erkeklere uygulanmamaktadır.',
          'Panoramik Diş Röntgeni diş hekimi önerisine göre yapılır.'
        ], isText: true
      },
      {
        title: 'LifeClub pro Üyelik', count: null, items: [
          'LifeClub Hekimi ile iki kez yüz yüze ve sınırsız online bütünsel sağlık yönetimi görüşmesi.*',
          'LifeClub Protokol Sorumlusu ile yıl boyunca sağlık randevularının ve süreç takibinin yapılması.',
          '7/24 Genel Sağlık Danışma Hattı**',
          'Acil durumlarda Ambulans Hizmeti'
        ],
        extra: '* Yüz yüze görüşmelerin gerçekleştirildiği hastaneler ile ilgili bilgi almak için 444 48 28 LifeClub Çağrı Merkezi\'ni arayabilirsiniz.<br>** 7/24 Genel Sağlık Danışma ve Ambulans Hizmeti LifeClub Mobil Uygulaması üzerinden gerçekleştirilmektedir.<br>Ambulans hizmetinden 32 parametre dahilindeki acil durumlar için 1 defa faydalanabilirsiniz. Bulunduğunuz il sınırları içerisinde Acıbadem ambulansı varsa öncelikle Acıbadem ambulansıyla, ambulansın bulunmaması, uygun olmaması durumda ise ikame ambulans veya 112 acil ile hizmet sağlanacaktır.'
      }
    ]
  },
  // Diğer paketler: classic-erkek, kartal-erkek, executive-erkek (benzer şekilde eklenebilir)
  {
    id: 'classic-erkek',
    icon: '⭐',
    title: 'Classic Erkek Check Up Programı',
    summary: [
      { icon: '🩺', label: 'Muayeneler', value: 3 },
      { icon: '📷', label: 'Radyolojik', value: 3 },
      { icon: '🧪', label: 'Laboratuvar', value: 31 },
      { icon: '❤️', label: 'Kardiyolojik', value: 2 },
      { icon: '🔬', label: 'Ölçüm', value: '-' }
    ],
    details: [
      { title: 'Muayeneler', count: 3, items: ['Check Up Muayene','Kardiyoloji Muayene','Üroloji Muayene'] },
      { title: 'Radyolojik Tetkikler', count: 3, items: ['Akciğer Grafisi (Arka Ön)','Tiroid USG','Tüm Abdomen USG'] },
      { title: 'Laboratuvar Tetkikleri', count: 31, items: ['ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','(T) Erkeklik Hormonu, Total','(T) Erkeklik Hormonu, Bioavailable','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 19-9','Hepatit B s antijeni (HBsAg)'] },
      { title: 'Kardiyolojik Tetkikler', count: 2, items: ['EKG','Ekokardiyografi/Eforlu EKG'] },
      { title: 'Patolojik Tetkikler', count: '-', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler', count: '-', items: ['-'] }
    ]
  },
  {
    id: 'kartal-erkek',
    icon: '🏥',
    title: 'Kartal Hastanesi Açılışa Özel Erkek Check Up Programı',
    summary: [
      { icon: '🩺', label: 'Muayeneler', value: 3 },
      { icon: '📷', label: 'Radyolojik', value: 3 },
      { icon: '🧪', label: 'Laboratuvar', value: 30 },
      { icon: '❤️', label: 'Kardiyolojik', value: 2 },
      { icon: '🔬', label: 'Ölçüm', value: '-' }
    ],
    details: [
      { title: 'Muayeneler', count: 3, items: ['Check Up Muayene','Kardiyoloji Muayene','Üroloji Muayene'] },
      { title: 'Radyolojik Tetkikler', count: 3, items: ['Akciğer Grafisi (Arka Ön)','Tiroid USG','Tüm Abdomen USG'] },
      { title: 'Laboratuvar Tetkikleri', count: 30, items: ['ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 19-9','Hepatit B s antijeni (HBsAg)'] },
      { title: 'Kardiyolojik Tetkikler', count: 2, items: ['EKG','Ekokardiyografi/Eforlu EKG'] },
      { title: 'Patolojik Tetkikler', count: '-', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler', count: '-', items: ['-'] }
    ]
  },
  {
    id: 'executive-erkek',
    icon: '💼',
    title: 'Executive Erkek Check Up Programı',
    summary: [
      { icon: '🩺', label: 'Muayeneler', value: 9 },
      { icon: '📷', label: 'Radyolojik', value: 8 },
      { icon: '🧪', label: 'Laboratuvar', value: 52 },
      { icon: '❤️', label: 'Kardiyolojik', value: 4 },
      { icon: '🔬', label: 'Ölçüm', value: 8 }
    ],
    details: [
      { title: 'Muayeneler', count: 9, items: ['Check Up Muayene','Kardiyoloji Muayene','Üroloji Muayene','Göz Muayene','Göğüs Hastalıkları Muayene','Diş Muayene','Diyetisyen Görüşmesi','Endokrinoloji Muayene','Nöroloji Muayene'] },
      { title: 'Radyolojik Tetkikler', count: 8, items: ['Akciğer Grafisi (Arka Ön)','BT, Toraks tarama amaçlı düşük doz','Tiroid USG','Tüm Abdomen USG','Panoramik Diş Röntgeni','Kemik Yoğunluğu Ölçümü','Karotis Doppler USG','Abdominal Aorta USG'] },
      { title: 'Laboratuvar Tetkikleri', count: 52, items: ['ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Gaitada Gizli Kan','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','(T) Erkeklik Hormonu, Total','(T) Erkeklik Hormonu, Bioavailable','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 15-3','CA 19-9','PSA, (Total)','PSA, (Serbest)','Hepatit B s antijeni (HBsAg)','Hepatit Bs antikoru (anti-HBs)','Hepatit C Antikoru (anti-HCV)','Homocysteine','BNP','Troponin','CK-MB','CRP (Yüksek Duyarlılık)','Fibrinojen','D-Dimer','Prolaktin','FSH','LH','Testosteron','Estradiol','Progesteron','TSH','FT3','FT4'] },
      { title: 'Kardiyolojik Tetkikler', count: 4, items: ['EKG','Ekokardiyografi','Eforlu EKG','Holter EKG'] },
      { title: 'Patolojik Tetkikler', count: '-', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler', count: 8, items: ['Vücut Kompozisyon Saptanması','Göz Tansiyonu Ölçümü','Boy-Kilo-Vücut Kitle İndeksi','Bel-Kalça Oranı','Kan Basıncı Ölçümü','Deri Kıvrım Kalınlığı','Biyoyararlanım Analizi','Biyokimyasal Analiz'] }
    ]
  }
];

// Paketleri dinamik olarak oluştur
function renderPackages() {
  const container = document.getElementById('packages');
  container.innerHTML = '';
  packagesData.forEach(pkg => {
    // Özet kartı
    const card = document.createElement('div');
    card.className = 'package-card scientific';
    card.innerHTML = `
      <div class="package-header">
        <span class="package-icon">${pkg.icon}</span>
        <h3 class="package-title">${pkg.title}</h3>
      </div>
      <div class="package-summary-flex">
        ${pkg.summary.map(s => `<div class="summary-item"><span class="summary-icon">${s.icon}</span><span><span class="stat-label">${s.label}</span> <span class="stat-value">${s.value}</span></span></div>`).join('')}
      </div>
      <a href="#" class="package-btn">Fiyat Sor</a>
      <button class="package-btn detail-btn" onclick="showPackageDetails('${pkg.id}-details')">Detayı Gör</button>
    `;
    container.appendChild(card);

    // Modal detay
    const modal = document.createElement('div');
    modal.className = 'package-details';
    modal.id = pkg.id + '-details';
    modal.innerHTML = `
      <div class="detail-content">
        <button class="close-btn" onclick="hidePackageDetails('${pkg.id}-details')">×</button>
        <h3>${pkg.title}</h3>
        ${pkg.details.map(section => `
          <div class="detail-section">
            <h4>${section.title}${section.count !== null && section.count !== undefined ? ` <span>(${section.count})</span>` : ''}</h4>
            ${section.isText ? `<p>${section.items.join('<br>')}</p>` : `<ul class="${section.labList ? 'lab-list' : ''}">${section.items.map(i => `<li>${i}</li>`).join('')}</ul>`}
            ${section.extra ? `<small>${section.extra}</small>` : ''}
          </div>
        `).join('')}
      </div>
    `;
    document.body.appendChild(modal);
  });
}

document.addEventListener('DOMContentLoaded', renderPackages);

// Paket detay içerikleri
const packageDetails = {
  'gold-kadin': {
    title: 'Gold Kadın Check Up Programı',
    sections: [
      { title: 'Muayeneler (6)', items: [
        'Check Up Muayene',
        'Kardiyoloji Muayene',
        'Jinekoloji Muayene',
        'Dermatoloji Muayene ya da Göz Muayene',
        'Diş Muayene',
        'Diyetisyen Görüşmesi'
      ] },
      { title: 'Radyolojik Tetkikler (7)', items: [
        'Akciğer Grafisi (Arka Ön)',
        'Tiroid USG',
        'Tüm Abdomen USG',
        'Meme US (İki Taraflı) (2)',
        'Mamografi (İki Taraflı) Dijital (2)',
        'Kemik Yoğunluğu Ölçümü (Tüm Vücut) (3)',
        'Panoramik Diş Röntgeni (4)'
      ] },
      { title: 'Laboratuvar Tetkikleri (35)', items: [
        'ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Gaitada Gizli Kan','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 125','CA 15-3','CA 19-9','Hepatit B s antijeni (HBsAg)','Hepatit Bs antikoru (anti-HBs)','Hepatit C Antikoru (anti-HCV)'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: [
        'EKG (1)',
        'Ekokardiyografi/Eforlu EKG (1)'
      ] },
      { title: 'Patolojik Tetkikler (1)', items: [
        'Sitopatoloji, thin-prep'
      ] },
      { title: 'Ölçüm ve Diğer Tetkikler (1)', items: [
        'Vücut Kompozisyon Saptanması'
      ] },
      { title: 'Check-Up Sözlüğü', items: [
        '40 yaş üzeri kişilere Eforlu EKG/Ekokardiyografi hizmeti, 40 yaş altı kişilere EKG, Eforlu EKG ya da Ekokardiyografi uygulanır. Hangi çekimin yapılacağı hekim önerisine göre belirlenir.',
        '40 yaş üzeri kadınlara Mamografi ve Meme US, 40 yaş altı kadınlara Meme US uygulanır. Her iki çekim de hekim önerisine göre yapılır.',
        '40 yaş üzeri kadınlara Kemik Yoğunluğu Ölçümü Uygulanır. 40 yaş altı kadınlara Kemik Yoğunluğu Ölçümü hekim önerisine göre yapılır.',
        'Panoramik Diş Röntgeni diş hekimi önerisine göre yapılır.'
      ] }
    ]
  },
  'gold-erkek': {
    title: 'Gold Erkek Check Up Programı',
    sections: [
      { title: 'Muayeneler (6)', items: [
        'Check Up Muayene',
        'Kardiyoloji Muayene',
        'Üroloji Muayene',
        'Göğüs Hastalıkları Muayene ya da Göz Muayene',
        'Diş Muayene',
        'Diyetisyen Görüşmesi'
      ] },
      { title: 'Radyolojik Tetkikler (5)', items: [
        'Akciğer Grafisi (Arka Ön)',
        'BT, Toraks tarama amaçlı düşük doz',
        'Tiroid USG',
        'Tüm Abdomen USG',
        'Panoramik Diş Röntgeni (3)'
      ] },
      { title: 'Laboratuvar Tetkikleri (38)', items: [
        'ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Gaitada Gizli Kan','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','(T) Erkeklik Hormonu, Total','(T) Erkeklik Hormonu, Bioavailable','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 15-3','CA 19-9','PSA, (Total) (2)','PSA, (Serbest) (2)','Hepatit B s antijeni (HBsAg)','Hepatit Bs antikoru (anti-HBs)','Hepatit C Antikoru (anti-HCV)'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: [
        'EKG (1)',
        'Ekokardiyografi/Eforlu EKG (1)'
      ] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (1)', items: [
        'Vücut Kompozisyon Saptanması'
      ] }
    ]
  },
  'cocuk-checkup': {
    title: 'Çocuğuma Sağlık Check Up Programı',
    sections: [
      { title: 'Muayeneler (5)', items: [
        'Diş Muayene',
        'Diyetisyen Görüşmesi',
        'Göz Muayene',
        'KBB Muayene',
        'Pediatrik Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (3)', items: [
        'Akciğer Grafisi (İki Yönlü)',
        'Panoramik Diş Röntgeni (*)',
        'Tüm Abdomen USG'
      ] },
      { title: 'Laboratuvar Tetkikleri (18)', items: [
        'ALT SGPT','AST SGOT','Check Up NMR Lipoprotein Profili','Çinko (Zn)','Ferritin','Folik Asit (Folat)','Glukoz (Açlık)','HDL, Kolesterol','Kalsiyum/Kreatinin oranı, Spot idrar','Kolesterol, Total','Kreatinin','LDL, Kolesterol (Direkt)','Tam Kan Tahlili (Hemogram)','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Vitamin B12','Vitamin D 25 - Hidroksi (OH)'
      ] },
      { title: 'Kardiyolojik Tetkikler (1)', items: [
        'EKG'
      ] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (1)', items: [
        'Vücut Kompozisyon Saptanması'
      ] }
    ]
  },
  'herzaman-genc-kadin': {
    title: 'Her Zaman Genç Kadın (+65) Check Up Programı',
    sections: [
      { title: 'Muayeneler (3)', items: [
        'Check Up Muayene',
        'Geriatri Muayene',
        'Jinekoloji Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (8)', items: [
        'Akciğer Grafisi (Arka Ön)',
        'Kemik Yoğunluğu Ölçümü (Femur)',
        'Kemik Yoğunluğu Ölçümü (Lomber AP+Lateral)',
        'Mamografi (İki Taraflı)',
        'Meme USG (İki taraflı)',
        'RDUS, Karotis bilateral',
        'Tiroid USG',
        'Tüm Abdomen USG'
      ] },
      { title: 'Laboratuvar Tetkikleri (38)', items: [
        'Albumin','Alkalen Fosfataz (ALP)','ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Folik Asit (Folat)','Fosfor, İnorganik','Gaitada Gizli Kan','GGT','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Laktat Dehidrogenaz (LDH)','Magnezyum','Mikroalbumin, İdrar (spot)','Potasyum','Protein, Total','Sodyum (Na)','Tam idrar tahlili','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','Sedimentasyon','Tam Kan Tahlili (Hemogram)','Tiroid stimülan hormon (TSH)','CA 125','CA 15-3','CA 19-9','CA 72-4','Karsinoembriyojenik antijen (CEA)','Check Up Lipid Paneli'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: [
        'EKG',
        'Ekokardiyografi'
      ] },
      { title: 'Patolojik Tetkikler (1)', items: [
        'Sitopatoloji, thin-prep'
      ] },
      { title: 'Ölçüm ve Diğer Tetkikler (-)', items: ['-'] }
    ]
  },
  'kalp-ve-akciger-sagligi': {
    title: 'Kalp ve Akciğer Sağlığı Check Up Programı',
    sections: [
      { title: 'Muayeneler (3)', items: [
        'Check Up Muayene',
        'Göğüs Hastalıkları Muayene',
        'Kardiyoloji Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (2)', items: [
        'Koroner BT Anjiografisi',
        'BT, Toraks tarama amaçlı düşük doz'
      ] },
      { title: 'Laboratuvar Tetkikleri (7)', items: [
        'Glukoz (Açlık)','Check-Up Lipoprotein Profili','Kreatinin','Tam idrar tahlili','Ürik asit','Sedimentasyon','Tam Kan Tahlili (Hemogram)'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: [
        'EKG (1)',
        'Ekokardiyografi veya Eforlu EKG (1)'
      ] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (1)', items: [
        'Solunum Fonksiyon Testi'
      ] },
      { title: 'Check-Up Sözlüğü', items: [
        '40 yaş üzeri kişilere Eforlu EKG ya da Ekokardiyografi hizmeti, 40 yaş altı kişilere EKG,Eforlu EKG ya da Ekokardiyografi uygulanır. Hangi çekimin yapılacağı hekim önerisine göre belirlenir.'
      ] }
    ]
  },
  'meme-sagligi': {
    title: 'Meme Sağlığı Check Up Programı',
    sections: [
      { title: 'Muayeneler (1)', items: ['Genel Cerrahi Muayene'] },
      { title: 'Radyolojik Tetkikler (2)', items: ['Mamografi (İki taraflı)','Meme US (İki taraflı)'] }
    ]
  },
  'kadin-sagligi': {
    title: 'Kadın Sağlığı Check Up Programı',
    sections: [
      { title: 'Muayeneler (1)', items: ['Jinekoloji Muayenesi'] },
      { title: 'Radyolojik Tetkikler (1)', items: ['Pelvik USG'] }
    ]
  },
  'tum-vucut-mr-panel-1': {
    title: 'Tüm Vücut Mr (Panel 1) Check Up Programı',
    sections: [
      { title: 'Muayeneler (1)', items: ['Check Up Muayene'] },
      { title: 'Radyolojik Tetkikler (3)', items: ['MR, Diffüzyon (Kontrastsız) (3.0 T)','MR, Tüm Vücut Tarama (hareketli masa ile)(1.5 T)','Üst Abdomen USG'] }
    ]
  },
  'force-ct-sanal-anjiyografi': {
    title: 'Force CT Sanal Anjiyografi Check Up Programı',
    sections: [
      { title: 'Muayeneler (2)', items: ['Check Up Muayene','Kardiyoloji Muayene'] },
      { title: 'Radyolojik Tetkikler (2)', items: ['Radyolojik Konsültasyon','Koroner BT Anjiografisi'] },
      { title: 'Laboratuvar Tetkikleri (-)', items: ['-'] },
      { title: 'Kardiyolojik Tetkikler (2)', items: ['Eforlu EKG (1)','Ekokardiyografi (1)'] }
    ]
  },
  'bizden-biri': {
    title: 'Bizden Biri Check Up Programı',
    sections: [
      { title: 'Muayeneler (1)', items: ['Check Up Muayene'] },
      { title: 'Radyolojik Tetkikler (1)', items: ['Akciğer Grafisi (Arka Ön)'] },
      { title: 'Laboratuvar Tetkikleri (8)', items: ['Glukoz (Açlık)','Tam Kan Tahlili (Hemogram)','Boğaz Kültürü','Gaitada Parazit Aranması','Hepatit B s antijeni (HBsAg)','Hepatit C Antikoru (anti-HCV)','HIV Antikoru(1&2) + p24 Antijeni','Sifiliz Profili'] }
    ]
  },
  'classic-erkek': {
    title: 'Classic Erkek Check Up Programı',
    sections: [
      { title: 'Muayeneler (3)', items: [
        'Check Up Muayene',
        'Kardiyoloji Muayene',
        'Üroloji Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (3)', items: [
        'Akciğer Grafisi (Arka Ön)',
        'Tiroid USG',
        'Tüm Abdomen USG'
      ] },
      { title: 'Laboratuvar Tetkikleri (31)', items: [
        'ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','(T) Erkeklik Hormonu, Total','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 19-9','Hepatit B s antijeni (HBsAg)'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: [
        'EKG',
        'Ekokardiyografi/Eforlu EKG'
      ] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (-)', items: ['-'] }
    ]
  },
  'kartal-hastanesi-erkek': {
    title: 'Kartal Hastanesi Açılışa Özel Erkek Check Up Programı',
    sections: [
      { title: 'Muayeneler (3)', items: [
        'Check Up Muayene',
        'Kardiyoloji Muayene',
        'Üroloji Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (3)', items: [
        'Akciğer Grafisi (Arka Ön)',
        'Tiroid USG',
        'Tüm Abdomen USG'
      ] },
      { title: 'Laboratuvar Tetkikleri (30)', items: [
        'ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 19-9','Hepatit B s antijeni (HBsAg)'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: [
        'EKG',
        'Ekokardiyografi/Eforlu EKG'
      ] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (-)', items: ['-'] }
    ]
  },
  'executive-erkek': {
    title: 'Executive Erkek Check Up Programı',
    sections: [
      { title: 'Muayeneler (9)', items: [
        'Check Up Muayene','Kardiyoloji Muayene','Üroloji Muayene','Göz Muayene','Göğüs Hastalıkları Muayene','Diş Muayene','Diyetisyen Görüşmesi','Endokrinoloji Muayene','Nöroloji Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (8)', items: [
        'Akciğer Grafisi (Arka Ön)','BT, Toraks tarama amaçlı düşük doz','Tiroid USG','Tüm Abdomen USG','Panoramik Diş Röntgeni','Kemik Yoğunluğu Ölçümü','Karotis Doppler USG','Abdominal Aorta USG'
      ] },
      { title: 'Laboratuvar Tetkikleri (52)', items: [
        'ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Gaitada Gizli Kan','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','(T) Erkeklik Hormonu, Total','(T) Erkeklik Hormonu, Bioavailable','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 15-3','CA 19-9','PSA, (Total)','PSA, (Serbest)','Hepatit B s antijeni (HBsAg)','Hepatit Bs antikoru (anti-HBs)','Hepatit C Antikoru (anti-HCV)','Homocysteine','BNP','Troponin','CK-MB','CRP (Yüksek Duyarlılık)','Fibrinojen','D-Dimer','Prolaktin','FSH','LH','Testosteron','Estradiol','Progesteron','TSH','FT3','FT4'
      ] },
      { title: 'Kardiyolojik Tetkikler (4)', items: [
        'EKG','Ekokardiyografi','Eforlu EKG','Holter EKG'
      ] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (8)', items: [
        'Vücut Kompozisyon Saptanması','Göz Tansiyonu Ölçümü','Boy-Kilo-Vücut Kitle İndeksi','Bel-Kalça Oranı','Kan Basıncı Ölçümü','Deri Kıvrım Kalınlığı','Biyoyararlanım Analizi','Biyokimyasal Analiz'
      ] }
    ]
  },
  'classic-kadin': {
    title: 'Classic Kadın Check Up Programı',
    sections: [
      { title: 'Muayeneler (3)', items: [
        'Check Up Muayene','Kardiyoloji Muayene','Jinekoloji Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (5)', items: [
        'Akciğer Grafisi (Arka Ön)','Tiroid USG','Tüm Abdomen USG','Meme US (İki Taraflı)','Mamografi (İki Taraflı) Dijital'
      ] },
      { title: 'Laboratuvar Tetkikleri (27)', items: [
        'ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: [
        'EKG','Ekokardiyografi/Eforlu EKG'
      ] },
      { title: 'Patolojik Tetkikler (1)', items: ['Sitopatoloji, thin-prep'] },
      { title: 'Ölçüm ve Diğer Tetkikler (-)', items: ['-'] }
    ]
  },
  'kartal-hastanesi-kadin': {
    title: 'Kartal Hastanesi Açılışa Özel Kadın Check Up Programı',
    sections: [
      { title: 'Muayeneler (3)', items: [
        'Check Up Muayene','Kardiyoloji Muayene','Jinekoloji Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (4)', items: [
        'Akciğer Grafisi (Arka Ön)','Tiroid USG','Tüm Abdomen USG','Meme US (İki Taraflı)'
      ] },
      { title: 'Laboratuvar Tetkikleri (26)', items: [
        'ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','Tiroid stimülan hormon (TSH)'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: [
        'EKG','Ekokardiyografi/Eforlu EKG'
      ] },
      { title: 'Patolojik Tetkikler (1)', items: ['Sitopatoloji, thin-prep'] },
      { title: 'Ölçüm ve Diğer Tetkikler (-)', items: ['-'] }
    ]
  },
  'executive-kadin': {
    title: 'Executive Kadın Check Up Programı',
    sections: [
      { title: 'Muayeneler (9)', items: [
        'Check Up Muayene','Kardiyoloji Muayene','Jinekoloji Muayene','Dermatoloji Muayene','Göz Muayene','Diş Muayene','Diyetisyen Görüşmesi','Endokrinoloji Muayene','Nöroloji Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (10)', items: [
        'Akciğer Grafisi (Arka Ön)','Tiroid USG','Tüm Abdomen USG','Meme US (İki Taraflı)','Mamografi (İki Taraflı) Dijital','Kemik Yoğunluğu Ölçümü','Panoramik Diş Röntgeni','Karotis Doppler USG','Abdominal Aorta USG','Pelvik USG'
      ] },
      { title: 'Laboratuvar Tetkikleri (53)', items: [
        'ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Magnezyum','Folik Asit (Folat)','Gaitada Gizli Kan','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Lipaz','Lipoprotein a','Check Up Lipid Paneli','Tam idrar tahlili','Trigliserid','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','C reaktif protein (CRP), Kantitatif','Tam Kan Tahlili (Hemogram)','İnsülin','Tiroid stimülan hormon (TSH)','Tiroksin, Serbest (FT4)','CA 125','CA 15-3','CA 19-9','Hepatit B s antijeni (HBsAg)','Hepatit Bs antikoru (anti-HBs)','Hepatit C Antikoru (anti-HCV)','Homocysteine','BNP','Troponin','CK-MB','CRP (Yüksek Duyarlılık)','Fibrinojen','D-Dimer','Prolaktin','FSH','LH','Testosteron','Estradiol','Progesteron','TSH','FT3','FT4','CA 72-4','Karsinoembriyojenik antijen (CEA)','Check Up Lipid Paneli'
      ] },
      { title: 'Kardiyolojik Tetkikler (4)', items: [
        'EKG','Ekokardiyografi','Eforlu EKG','Holter EKG'
      ] },
      { title: 'Patolojik Tetkikler (1)', items: ['Sitopatoloji, thin-prep'] },
      { title: 'Ölçüm ve Diğer Tetkikler (8)', items: [
        'Vücut Kompozisyon Saptanması','Göz Tansiyonu Ölçümü','Boy-Kilo-Vücut Kitle İndeksi','Bel-Kalça Oranı','Kan Basıncı Ölçümü','Deri Kıvrım Kalınlığı','Biyoyararlanım Analizi','Biyokimyasal Analiz'
      ] }
    ]
  },
  'dogum-sonrasi-anne': {
    title: 'Doğum Sonrası Anne Sağlığı Check Up Programı',
    sections: [
      { title: 'Muayeneler (9)', items: [
        'Kadın Doğum Muayenesi','Diyetisyen Görüşmesi','Psikolog Görüşmesi','Endokrinoloji Muayenesi','Dahiliye Muayenesi','Fizik Tedavi ve Rehabilitasyon Muayenesi','Göz Muayenesi','Diş Muayenesi','Kardiyoloji Muayenesi'
      ] },
      { title: 'Radyolojik Tetkikler (3)', items: [
        'Pelvik USG','Meme US (İki Taraflı)','Kemik Yoğunluğu Ölçümü'
      ] },
      { title: 'Laboratuvar Tetkikleri (17)', items: [
        'Hemogram','Demir','Ferritin','Vitamin D','Vitamin B12','TSH','FT4','Glukoz (Açlık)','HbA1c','Kalsiyum','Fosfor','Magnezyum','Tam idrar tahlili','CRP','Sedimentasyon','Lipid Paneli','Karaciğer Fonksiyon Testleri'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: [
        'EKG','Ekokardiyografi'
      ] },
      { title: 'Patolojik Tetkikler (1)', items: ['Sitopatoloji, thin-prep'] },
      { title: 'Ölçüm ve Diğer Tetkikler (3)', items: [
        'Vücut Kompozisyon Saptanması','Psikolojik Değerlendirme','Fiziksel Aktivite Analizi'
      ] }
    ]
  },
  'kucuk-kalplere': {
    title: 'Küçük Kalplere Sağlık Check Up Programı',
    sections: [
      { title: 'Muayeneler (1)', items: ['Pediatrik Kardiyoloji Muayenesi'] },
      { title: 'Radyolojik Tetkikler (1)', items: ['Ekokardiyografi'] },
      { title: 'Laboratuvar Tetkikleri (6)', items: [
        'Hemogram','CRP','Sedimentasyon','Glukoz (Açlık)','Lipid Paneli','Troponin'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: ['EKG','Ekokardiyografi'] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (-)', items: ['-'] }
    ]
  },
  'herzaman-genc-erkek': {
    title: 'Her Zaman Genç Erkek (+65) Check Up Programı',
    sections: [
      { title: 'Muayeneler (3)', items: [
        'Check Up Muayene','Geriatri Muayene','Üroloji Muayene'
      ] },
      { title: 'Radyolojik Tetkikler (6)', items: [
        'Akciğer Grafisi (Arka Ön)','Kemik Yoğunluğu Ölçümü (Femur)','Kemik Yoğunluğu Ölçümü (Lomber AP+Lateral)','Karotis Doppler USG','Tiroid USG','Tüm Abdomen USG'
      ] },
      { title: 'Laboratuvar Tetkikleri (38)', items: [
        'Albumin','Alkalen Fosfataz (ALP)','ALT SGPT','AST SGOT','Demir','Demir Bağlama Kapasitesi','Ferritin','Folik Asit (Folat)','Fosfor, İnorganik','Gaitada Gizli Kan','GGT','Glukoz (Açlık)','Hemoglobin A1c (HbA1c)','Kalsiyum (Ca)','HDL, kolesterol','LDL, kolesterol (Direkt)','Kolesterol, Total','Kreatinin','Laktat Dehidrogenaz (LDH)','Magnezyum','Mikroalbumin, İdrar (spot)','Potasyum','Protein, Total','Sodyum (Na)','Tam idrar tahlili','Üre azotu (BUN)','Ürik asit','Vitamin B12','Vitamin D 25 - Hidroksi (OH)','Sedimentasyon','Tam Kan Tahlili (Hemogram)','Tiroid stimülan hormon (TSH)','PSA, (Total)','PSA, (Serbest)','Hepatit B s antijeni (HBsAg)','Hepatit Bs antikoru (anti-HBs)','Hepatit C Antikoru (anti-HCV)'
      ] },
      { title: 'Kardiyolojik Tetkikler (2)', items: ['EKG','Ekokardiyografi'] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (-)', items: ['-'] }
    ]
  },
  'tum-vucut-mr-panel-2': {
    title: 'Tüm Vücut Mr (Panel 2) Check Up Programı',
    sections: [
      { title: 'Muayeneler (1)', items: ['Check Up Muayene'] },
      { title: 'Radyolojik Tetkikler (2)', items: ['MR, Diffüzyon (Kontrastsız) (3.0 T)','MR, Tüm Vücut Tarama (hareketli masa ile)(1.5 T)'] },
      { title: 'Laboratuvar Tetkikleri (-)', items: ['-'] },
      { title: 'Kardiyolojik Tetkikler (-)', items: ['-'] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (-)', items: ['-'] }
    ]
  },
  'göz-sagligi': {
    title: 'Göz Sağlığı Yetişkin Check Up Programı',
    sections: [
      { title: 'Muayeneler (1)', items: ['Göz Muayenesi'] },
      { title: 'Radyolojik Tetkikler (-)', items: ['-'] },
      { title: 'Laboratuvar Tetkikleri (-)', items: ['-'] },
      { title: 'Kardiyolojik Tetkikler (-)', items: ['-'] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (3)', items: [
        'Glokom OCT (RNFL)',
        'Retina OCT',
        'Kornea Topografisi'
      ] }
    ]
  },
  'göz-sagligi-cocuk': {
    title: 'Göz Sağlığı Çocuk Check Up Programı',
    sections: [
      { title: 'Muayeneler (1)', items: ['Göz Muayenesi'] },
      { title: 'Radyolojik Tetkikler (-)', items: ['-'] },
      { title: 'Laboratuvar Tetkikleri (-)', items: ['-'] },
      { title: 'Kardiyolojik Tetkikler (-)', items: ['-'] },
      { title: 'Patolojik Tetkikler (-)', items: ['-'] },
      { title: 'Ölçüm ve Diğer Tetkikler (1)', items: [
        'Biyometri (Gözün Aksiyel Uzunluğu) (*)'
      ] }
    ]
  },
  // ... diğer paketler ...
};

// Modal açma/kapatma fonksiyonu
function showPackageDetailModal(packageId) {
  const modal = document.getElementById('package-detail-modal');
  const data = packageDetails[packageId];
  if (!data) return;
  modal.innerHTML = `
    <div class="package-details active" style="display:flex;">
      <div class="detail-content">
        <button class="close-btn" onclick="closePackageDetailModal()">×</button>
        <h3>${data.title}</h3>
        ${data.sections.map(section => `
          <div class="detail-section">
            <h4>${section.title}</h4>
            <ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  modal.style.display = 'flex';
}

function closePackageDetailModal() {
  const modal = document.getElementById('package-detail-modal');
  modal.innerHTML = '';
  modal.style.display = 'none';
}

// Tüm Detayı Gör butonlarına event listener ekle
window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.detail-btn[data-package]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const packageId = btn.getAttribute('data-package');
      showPackageDetailModal(packageId);
    });
  });
});
