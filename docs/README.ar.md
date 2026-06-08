# دليل الريبو — Fatma Analytics

> **للمطورين والزوار العرب:** شرح كامل لمحتوى هذا المستودع بالعربية.

---

## ايه ده بالظبط؟

**Fatma-Analytics** هو مستودع GitHub فيه **كود موقع البورتفolio** الخاص بـ **فاطمة الشال** — محللة بيانات مستقلة (Freelancer) من القاهرة، مصر.

| ✅ ده | ❌ مش ده |
|------|---------|
| موقع شخصي لعرض الم skills والمشاريع | مشروع Python أو SQL للتحليل |
| صفحة للتواصل مع العملاء وHR | قاعدة بيانات أو dashboard حقيقي |
| CV إلكتروني (HTML + TXT) | تطبيق يحتاج تثبيت |

---

## روابط مهمة — ابدأ من هنا

| الهدف | الرابط |
|-------|--------|
| **شوف الموقع** | https://ibrahim1962001.github.io/Fatma-Analytics/ |
| **السيرة الذاتية** | https://ibrahim1962001.github.io/Fatma-Analytics/resume.html |
| **CV نصي (ATS)** | https://ibrahim1962001.github.io/Fatma-Analytics/resume.txt |
| **LinkedIn** | https://www.linkedin.com/in/fatma-elshall/ |
| **مشاريع التحليل على GitHub** | https://github.com/fatma-elshall |
| **إيميل للتواصل** | fatmaalshall2000@gmail.com |

---

## مين فاطمة الشال؟

- **التخصص:** تحليل بيانات · Business Intelligence · Dashboards · أتمتة التقارير
- **الخبرة:** أكتر من سنتين · 15+ مشروع
- **الأثر:** توفير 30–40% من وقت التقارير اليدوية للعملاء
- **الشهادة:** Google Advanced Data Analytics Professional Certificate
- **اللغات:** عربي (أم) · إنجليزي (مهني)

**عملاء:** GOSI السعودية · المستشفى العسكري · AL-Nahdy · وزارة الدفاع · Zon Net · DEPI

---

## ايه اللي جوه الموقع؟

الصفحة الرئيسية `index.html` فيها:

1. **Hero** — تعريف سريع + إحصائيات + أزرار تواصل
2. **About** — نبذة مهنية
3. **Services** — الخدمات (Dashboards، أتمتة، تنظيف بيانات…)
4. **Projects** — Case studies: المشكلة → الحل → النتيجة
5. **Experience** — الخبرات والتدريبات
6. **Skills & Certifications** — الأدوات والشهادات
7. **Contact** — فورم تواصل يفتح Gmail

---

## شرح الملفات

| الملف | الوظيفة |
|-------|---------|
| `index.html` | الصفحة الرئيسية — كل محتوى البورتفolio |
| `resume.html` | CV للطباعة أو حفظ PDF |
| `resume.txt` | CV نصي لمواقع التوظيف |
| `styles.css` | التصميم والألوان والموبايل |
| `script.js` | القائمة، الحركات، فورم التواصل |
| `assets/profile.png` | الصورة الشخصية |
| `.github/workflows/pages.yml` | نشر تلقائي على GitHub Pages |

---

## تشغيل الموقع على جهازك

```bash
git clone https://github.com/ibrahim1962001/Fatma-Analytics.git
cd Fatma-Analytics
python -m http.server 8080
```

ثم افتح: `http://localhost:8080`

---

## النشر

كل ما تعمل **push** على فرع `main`، GitHub Actions ينشر الموقع تلقائياً.

---

## أسئلة شائعة

**هل محتاج Node.js؟**  
لا. الموقع HTML/CSS/JS فقط.

**فين مشاريع التحليل؟**  
في حساب GitHub منفصل: [github.com/fatma-elshall](https://github.com/fatma-elshall)

**مين صمم الموقع؟**  
[Ibrahim Sabry](https://www.linkedin.com/in/ibrahimsabrey) — المحتوى والتحليل: فاطمة الشال.

---

[← العودة للـ README الرئيسي](../README.md)
