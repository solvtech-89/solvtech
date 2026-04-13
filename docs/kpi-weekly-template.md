# KPI Mingguan SolvTech Landing Page

## Tujuan

Template ini dipakai untuk membaca performa landing page per minggu dan menentukan prioritas optimasi.

## Sumber Data

- GA4 Events
- Rentang waktu: 7 hari terakhir
- Segment utama: device category (mobile, desktop)

## Event Mapping Final

- `experiment_view`
  - `event_category`: `experiment`
  - `event_label`: `hero_variant_A|hero_variant_B`
  - `value`: `1`
- `section_view`
  - `event_category`: `engagement`
  - `event_label`: `hero|story|services|process|proof|contact`
  - `value`: `1`
- `scroll_depth`
  - `event_category`: `engagement`
  - `event_label`: `depth_25|depth_50|depth_75|depth_100`
  - `value`: `25|50|75|100`
- `section_nav_click`
  - `event_category`: `engagement`
  - `event_label`: `nav_desktop_{section}|nav_mobile_{section}|logo_hero`
  - `value`: `1`
- `cta_click`
  - `event_category`: `conversion`
  - `event_label`: `whatsapp_consult_{source}` atau `whatsapp_audit_{source}`
  - `value`: `1`
- `lead_submit`
  - `event_category`: `conversion`
  - `event_label`: `whatsapp_form_submit`
  - `value`: `1`

## KPI Utama

1. CTA CTR (All)

- Rumus: `cta_click / sessions`
- Breakdown: by source (`nav_desktop`, `nav_mobile`, `hero_primary`, `hero_secondary`, `contact_primary`, `contact_secondary`)

2. Navigation Engagement Rate

- Rumus: `section_nav_click / sessions`
- Breakdown: by source (`nav_desktop`, `nav_mobile`, `logo`) dan by section (`hero`, `story`, `services`, `process`, `proof`, `contact`)

3. Audit CTA CTR

- Rumus: `cta_click(label contains whatsapp_audit_) / sessions`

4. Consultation CTA CTR

- Rumus: `cta_click(label contains whatsapp_consult_) / sessions`

5. Scroll Completion Rate

- `depth_25 / sessions`
- `depth_50 / sessions`
- `depth_75 / sessions`
- `depth_100 / sessions`

6. Section Reach Rate

- `section_view(section=story) / sessions`
- `section_view(section=services) / sessions`
- `section_view(section=process) / sessions`
- `section_view(section=proof) / sessions`
- `section_view(section=contact) / sessions`

7. Variant Winner (Hero A/B)

- Metric pembanding utama: `cta_click / experiment_view`
- Secondary: `depth_75 / experiment_view`
- Pilih pemenang jika uplift >= 10% dan volume cukup

## Format Laporan Mingguan

- Week: YYYY-MM-DD s/d YYYY-MM-DD
- Sessions total
- Users total
- CTA CTR total
- Audit CTR
- Consultation CTR
- Scroll completion (25/50/75/100)
- Top CTA source
- Winner variant (A/B)
- Insight utama (3 poin)
- Action item minggu depan (3 poin)

## Rekomendasi Threshold

- CTR CTA total target awal: >= 2.5%
- Depth 50 target awal: >= 55%
- Depth 75 target awal: >= 35%
- Depth 100 target awal: >= 18%

## Action Rules

- Jika `depth_50 < 45%`: perbaiki hero clarity + CTA hierarchy
- Jika `depth_75 < 30%`: kurangi density section tengah
- Jika `cta_click hero_primary` rendah: uji copy CTA baru
- Jika variant B unggul 2 minggu berturut: jadikan default
